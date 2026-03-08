const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const { URL } = require("url");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 8080);
const ROOT_DIR = process.cwd();
const UPLOADS_DIR = path.join(ROOT_DIR, "uploads");
const DATA_DIR = path.join(ROOT_DIR, "data");
const CONTENT_FILE = path.join(DATA_DIR, "site-content.json");
const USER_STATE_FILE = path.join(DATA_DIR, "user-state.json");
const MAX_JSON_BYTES = 15 * 1024 * 1024;
const MAX_BINARY_UPLOAD_BYTES = 1 * 1024 * 1024 * 1024;
const ENV_FILE = path.join(ROOT_DIR, ".env");
const ALLOWED_UPLOAD_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".gif",
  ".heic",
  ".heif",
  ".mp4",
  ".webm",
  ".m4v",
  ".mov",
  ".qt",
  ".mp3",
  ".pdf",
  ".ico",
]);

function loadDotEnvFile() {
  try {
    if (!fs.existsSync(ENV_FILE)) return;
    const raw = fs.readFileSync(ENV_FILE, "utf8");
    raw
      .split(/\r?\n/g)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .forEach((line) => {
        const eq = line.indexOf("=");
        if (eq <= 0) return;
        const key = line.slice(0, eq).trim();
        let value = line.slice(eq + 1).trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = value;
      });
  } catch (error) {}
}

loadDotEnvFile();
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const MAIL_FROM = process.env.MAIL_FROM || "";
const SMTP_HOST = process.env.SMTP_HOST || "smtp-mail.outlook.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".qt": "video/quicktime",
  ".mp3": "audio/mpeg",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

const RATE_LIMIT_STORE = new Map();
const UPLOAD_STATUS_STORE = new Map();

function getClientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "")
    .split(",")[0]
    .trim();
  if (forwarded) return forwarded;
  return String(req.socket?.remoteAddress || "unknown");
}

function isRateLimited(req, key, maxHits, windowMs) {
  const ip = getClientIp(req);
  const now = Date.now();
  const bucketKey = `${key}:${ip}`;
  const current = RATE_LIMIT_STORE.get(bucketKey) || [];
  const valid = current.filter((ts) => now - ts < windowMs);
  if (valid.length >= maxHits) {
    RATE_LIMIT_STORE.set(bucketKey, valid);
    return true;
  }
  valid.push(now);
  RATE_LIMIT_STORE.set(bucketKey, valid);
  return false;
}

function buildSecurityHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Cross-Origin-Opener-Policy": "same-origin",
  };
}

function isTrustedOrigin(req) {
  const originRaw = String(req.headers.origin || "").trim();
  if (!originRaw) return true;
  let originUrl;
  let hostUrl;
  try {
    originUrl = new URL(originRaw);
    hostUrl = new URL(`http://${String(req.headers.host || "")}`);
  } catch (error) {
    return false;
  }
  const originHost = String(originUrl.hostname || "").toLowerCase();
  const reqHost = String(hostUrl.hostname || "").toLowerCase();
  if (!originHost || !reqHost) return false;
  if (originHost === reqHost) return true;
  if (["localhost", "127.0.0.1"].includes(originHost) && ["localhost", "127.0.0.1"].includes(reqHost)) return true;
  if (originHost.endsWith(".onrender.com") && reqHost.endsWith(".onrender.com")) return true;
  return false;
}

function cleanupUploadStatusStore() {
  const now = Date.now();
  for (const [id, status] of UPLOAD_STATUS_STORE.entries()) {
    const updatedAt = Number(status?.updatedAt || 0);
    if (!updatedAt || now - updatedAt > 30 * 60 * 1000) {
      UPLOAD_STATUS_STORE.delete(id);
    }
  }
}

function setUploadStatus(uploadId, patch) {
  if (!uploadId) return;
  const current = UPLOAD_STATUS_STORE.get(uploadId) || {
    uploadId,
    phase: "pending",
    progress: 0,
    message: "",
    error: "",
    updatedAt: Date.now(),
  };
  const next = {
    ...current,
    ...patch,
    progress: Math.max(0, Math.min(100, Math.round(Number(patch?.progress ?? current.progress) || 0))),
    updatedAt: Date.now(),
  };
  UPLOAD_STATUS_STORE.set(uploadId, next);
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
    ...buildSecurityHeaders(),
  });
  res.end(body);
}

function sanitizeName(value, fallback = "file") {
  const cleaned = String(value || "")
    .replace(/[^a-z0-9._-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return cleaned || fallback;
}

function extFromMime(mime) {
  const type = String(mime || "").toLowerCase();
  if (type.includes("png")) return ".png";
  if (type.includes("jpeg") || type.includes("jpg")) return ".jpg";
  if (type.includes("webp")) return ".webp";
  if (type.includes("svg")) return ".svg";
  if (type.includes("gif")) return ".gif";
  if (type.includes("heic")) return ".heic";
  if (type.includes("heif")) return ".heif";
  if (type.includes("mp4")) return ".mp4";
  if (type.includes("webm")) return ".webm";
  if (type.includes("m4v")) return ".m4v";
  if (type.includes("quicktime")) return ".mov";
  if (type.includes("mpeg")) return ".mp3";
  if (type.includes("pdf")) return ".pdf";
  return ".bin";
}

function isAllowedUploadExtension(ext) {
  return ALLOWED_UPLOAD_EXTENSIONS.has(String(ext || "").toLowerCase());
}

function isVideoExtension(ext) {
  return [".mp4", ".mov", ".m4v", ".qt", ".webm"].includes(String(ext || "").toLowerCase());
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", args);
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => {
      reject(new Error(error.message || "ffmpeg indisponible"));
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(stderr || `ffmpeg a échoué (code ${code})`));
    });
  });
}

function runSipsConvertToJpeg(inputAbsolute, outputAbsolute) {
  return new Promise((resolve, reject) => {
    const child = spawn("sips", ["-s", "format", "jpeg", inputAbsolute, "--out", outputAbsolute]);
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => {
      reject(new Error(error.message || "sips indisponible"));
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve(true);
        return;
      }
      reject(new Error(stderr || `sips a échoué (code ${code})`));
    });
  });
}

async function probeVideoDurationSeconds(inputAbsolute) {
  return new Promise((resolve) => {
    const child = spawn("ffprobe", [
      "-v",
      "error",
      "-show_entries",
      "format=duration",
      "-of",
      "default=noprint_wrappers=1:nokey=1",
      inputAbsolute,
    ]);
    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk.toString("utf8");
    });
    child.on("error", () => resolve(0));
    child.on("close", () => {
      const value = Number(String(output || "").trim());
      if (!Number.isFinite(value) || value <= 0) {
        resolve(0);
        return;
      }
      resolve(value);
    });
  });
}

function runFfmpegWithProgress(args, durationSeconds, onProgress) {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", [...args, "-progress", "pipe:2", "-nostats"]);
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      const text = chunk.toString("utf8");
      stderr += text;
      if (typeof onProgress === "function" && durationSeconds > 0) {
        const match = text.match(/out_time_ms=(\d+)/);
        if (match) {
          const outTimeMs = Number(match[1]);
          if (Number.isFinite(outTimeMs) && outTimeMs >= 0) {
            const ratio = Math.min(1, outTimeMs / (durationSeconds * 1000000));
            onProgress(ratio);
          }
        }
      }
    });
    child.on("error", (error) => {
      reject(new Error(error.message || "ffmpeg indisponible"));
    });
    child.on("close", (code) => {
      if (code === 0) {
        if (typeof onProgress === "function") onProgress(1);
        resolve();
        return;
      }
      reject(new Error(stderr || `ffmpeg a échoué (code ${code})`));
    });
  });
}

async function optimizeAboutVideoVariants(inputAbsolute, outputBaseNoExt, onProgress, options = {}) {
  const mp4Absolute = `${outputBaseNoExt}-opt.mp4`;
  const webmAbsolute = `${outputBaseNoExt}-opt.webm`;
  const commonVideoFilter = "scale='min(1920,iw)':-2";
  const generateWebm = options.generateWebm !== false;
  const durationSeconds = await probeVideoDurationSeconds(inputAbsolute);

  try {
    await runFfmpegWithProgress(
      [
      "-y",
      "-i",
      inputAbsolute,
      "-map",
      "0:v:0",
      "-map",
      "0:a?",
      "-vf",
      commonVideoFilter,
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "24",
      "-movflags",
      "+faststart",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      mp4Absolute,
      ],
      durationSeconds,
      (ratio) => {
        if (typeof onProgress === "function") onProgress(ratio * 0.7);
      }
    );
  } catch (error) {
    // mp4 optimization is optional; keep original if ffmpeg fails
  }

  if (generateWebm) {
    try {
      await runFfmpegWithProgress(
        [
        "-y",
        "-i",
        inputAbsolute,
        "-map",
        "0:v:0",
        "-map",
        "0:a?",
        "-vf",
        commonVideoFilter,
        "-c:v",
        "libvpx-vp9",
        "-b:v",
        "0",
        "-crf",
        "34",
        "-row-mt",
        "1",
        "-c:a",
        "libopus",
        "-b:a",
        "96k",
        webmAbsolute,
        ],
        durationSeconds,
        (ratio) => {
          if (typeof onProgress === "function") onProgress(0.7 + ratio * 0.3);
        }
      );
    } catch (error) {
      // webm optimization is optional
    }
  } else if (typeof onProgress === "function") {
    onProgress(1);
  }

  const hasMp4 = fs.existsSync(mp4Absolute);
  const hasWebm = fs.existsSync(webmAbsolute);
  return {
    mp4Absolute: hasMp4 ? mp4Absolute : "",
    webmAbsolute: hasWebm ? webmAbsolute : "",
  };
}

function parseDataUrl(dataUrl) {
  const raw = String(dataUrl || "");
  const match = raw.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?;base64,([\s\S]+)$/i);
  if (!match) return null;
  const mime = match[1] || "application/octet-stream";
  const base64 = match[2].replace(/\s+/g, "");
  return { mime, buffer: Buffer.from(base64, "base64") };
}

async function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let bytes = 0;
    req.on("data", (chunk) => {
      bytes += chunk.length;
      if (bytes > MAX_JSON_BYTES) {
        reject(new Error("Payload trop volumineux"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("JSON invalide"));
      }
    });
    req.on("error", (error) => reject(error));
  });
}

function resolveSafePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = decoded === "/" ? "/index.html" : decoded;
  const absolute = path.resolve(ROOT_DIR, `.${clean}`);
  if (!absolute.startsWith(ROOT_DIR)) return null;
  return absolute;
}

async function handleUpload(req, res) {
  const body = await readJsonBody(req);
  const kind = sanitizeName(body.kind || "misc", "misc");
  const originalName = sanitizeName(body.fileName || "file", "file");
  const parsed = parseDataUrl(body.dataUrl);
  if (!parsed) {
    sendJson(res, 400, { error: "Data URL invalide." });
    return;
  }

  const ext = (path.extname(originalName) || extFromMime(parsed.mime)).toLowerCase();
  if (!isAllowedUploadExtension(ext)) {
    sendJson(res, 400, { ok: false, error: "Type de fichier non autorisé." });
    return;
  }
  const base = path.basename(originalName, path.extname(originalName)) || "file";
  const finalName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sanitizeName(base, "file")}${ext}`;
  const folder = path.join(UPLOADS_DIR, kind);
  await fsp.mkdir(folder, { recursive: true });
  const absolute = path.join(folder, finalName);
  await fsp.writeFile(absolute, parsed.buffer);
  const relative = `uploads/${kind}/${finalName}`.replace(/\\/g, "/");
  const finalExt = path.extname(finalName).toLowerCase();
  const responsePayload = { ok: true, path: relative, mime: parsed.mime };

  if ((kind === "about-videos" || kind === "machine-videos") && isVideoExtension(finalExt)) {
    try {
      const baseNoExt = path.join(folder, path.basename(finalName, finalExt));
      const optimized = await optimizeAboutVideoVariants(absolute, baseNoExt);
      const mp4Path = optimized.mp4Absolute
        ? path.relative(ROOT_DIR, optimized.mp4Absolute).replace(/\\/g, "/")
        : "";
      const webmPath = optimized.webmAbsolute
        ? path.relative(ROOT_DIR, optimized.webmAbsolute).replace(/\\/g, "/")
        : "";
      responsePayload.optimized = { mp4: mp4Path, webm: webmPath };
      if (mp4Path) {
        responsePayload.path = mp4Path;
        responsePayload.mime = "video/mp4";
      }
    } catch (error) {
      responsePayload.optimizationWarning = error.message || "Optimisation vidéo impossible";
    }
  }

  sendJson(res, 200, responsePayload);
}

async function handleBinaryUpload(req, res) {
  const kind = sanitizeName(req.headers["x-upload-kind"] || "misc", "misc");
  const uploadId = sanitizeName(req.headers["x-upload-id"] || "", "");
  let fileName = String(req.headers["x-upload-filename"] || "file");
  try {
    fileName = decodeURIComponent(fileName);
  } catch (error) {}
  const mime = String(req.headers["content-type"] || "application/octet-stream");
  const originalName = sanitizeName(fileName || "file", "file");

  const ext = (path.extname(originalName) || extFromMime(mime)).toLowerCase();
  if (!isAllowedUploadExtension(ext)) {
    setUploadStatus(uploadId, {
      phase: "error",
      progress: 100,
      error: "Type de fichier non autorisé.",
      message: "Upload refusé",
    });
    sendJson(res, 400, { ok: false, error: "Type de fichier non autorisé." });
    return;
  }
  const base = path.basename(originalName, path.extname(originalName)) || "file";
  const finalName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sanitizeName(base, "file")}${ext}`;
  const folder = path.join(UPLOADS_DIR, kind);
  await fsp.mkdir(folder, { recursive: true });
  const absolute = path.join(folder, finalName);

  let bytes = 0;
  let finished = false;
  setUploadStatus(uploadId, { phase: "uploading", progress: 0, message: "Upload en cours..." });

  const cleanup = async () => {
    try {
      await fsp.unlink(absolute);
    } catch (error) {}
  };

  try {
    await new Promise((resolve, reject) => {
      const stream = fs.createWriteStream(absolute);

      const fail = (error) => {
        if (finished) return;
        finished = true;
        req.unpipe(stream);
        stream.destroy();
        reject(error);
      };

      req.on("data", (chunk) => {
        bytes += chunk.length;
        if (MAX_BINARY_UPLOAD_BYTES > 0) {
          const ratio = Math.min(1, bytes / MAX_BINARY_UPLOAD_BYTES);
          setUploadStatus(uploadId, {
            phase: "uploading",
            progress: Math.max(2, Math.round(ratio * 50)),
            message: "Upload en cours...",
          });
        }
        if (bytes > MAX_BINARY_UPLOAD_BYTES) {
          fail(new Error("Fichier trop volumineux (limite 1 Go)."));
          req.destroy();
        }
      });

      req.on("error", (error) => fail(error));
      stream.on("error", (error) => fail(error));
      stream.on("finish", () => {
        if (finished) return;
        finished = true;
        resolve();
      });

      req.pipe(stream);
    });
  } catch (error) {
    await cleanup();
    setUploadStatus(uploadId, {
      phase: "error",
      progress: 100,
      error: error.message || "Upload binaire impossible.",
      message: "Échec upload",
    });
    sendJson(res, 413, { ok: false, error: error.message || "Upload binaire impossible." });
    return;
  }

  let storedName = finalName;
  let storedAbsolute = absolute;
  let storedMime = mime;
  if ([".heic", ".heif"].includes(ext)) {
    try {
      const jpegName = `${path.basename(finalName, ext)}.jpg`;
      const jpegAbsolute = path.join(folder, jpegName);
      await runSipsConvertToJpeg(absolute, jpegAbsolute);
      storedName = jpegName;
      storedAbsolute = jpegAbsolute;
      storedMime = "image/jpeg";
      await fsp.unlink(absolute).catch(() => {});
    } catch (error) {
      // if conversion fails, keep original image
    }
  }

  const relative = `uploads/${kind}/${storedName}`.replace(/\\/g, "/");
  const responsePayload = { ok: true, path: relative, mime: storedMime };
  setUploadStatus(uploadId, { phase: "processing", progress: 55, message: "Traitement du fichier..." });

  if ((kind === "about-videos" || kind === "machine-videos") && isVideoExtension(ext)) {
    try {
      setUploadStatus(uploadId, { phase: "converting", progress: 60, message: "Conversion vidéo..." });
      const baseNoExt = path.join(folder, path.basename(storedName, path.extname(storedName).toLowerCase()));
      const optimized = await optimizeAboutVideoVariants(
        storedAbsolute,
        baseNoExt,
        (ratio) => {
          const value = 60 + Math.round(Math.max(0, Math.min(1, ratio)) * 38);
          setUploadStatus(uploadId, {
            phase: "converting",
            progress: value,
            message: "Conversion vidéo...",
          });
        },
        { generateWebm: kind === "about-videos" }
      );
      const mp4Path = optimized.mp4Absolute
        ? path.relative(ROOT_DIR, optimized.mp4Absolute).replace(/\\/g, "/")
        : "";
      const webmPath = optimized.webmAbsolute
        ? path.relative(ROOT_DIR, optimized.webmAbsolute).replace(/\\/g, "/")
        : "";

      responsePayload.optimized = {
        mp4: mp4Path,
        webm: webmPath,
      };
      if (mp4Path) {
        responsePayload.path = mp4Path;
        responsePayload.mime = "video/mp4";
      }
    } catch (error) {
      responsePayload.optimizationWarning = error.message || "Optimisation vidéo impossible";
      setUploadStatus(uploadId, {
        phase: "done",
        progress: 100,
        message: "Upload terminé (sans optimisation).",
      });
    }
  }

  setUploadStatus(uploadId, { phase: "done", progress: 100, message: "Upload terminé." });
  responsePayload.uploadId = uploadId;
  sendJson(res, 200, responsePayload);
}

async function handleGetUploadProgress(url, res) {
  const id = sanitizeName(url.searchParams.get("id") || "", "");
  if (!id) {
    sendJson(res, 400, { ok: false, error: "ID upload manquant." });
    return;
  }
  const status = UPLOAD_STATUS_STORE.get(id);
  if (!status) {
    sendJson(res, 404, { ok: false, error: "Progression introuvable." });
    return;
  }
  sendJson(res, 200, { ok: true, status });
}

async function handleSaveContent(req, res) {
  const body = await readJsonBody(req);
  const content = body && typeof body.content === "object" ? body.content : null;
  if (!content) {
    sendJson(res, 400, { error: "Contenu manquant." });
    return;
  }
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(CONTENT_FILE, content);
  sendJson(res, 200, { ok: true, file: "data/site-content.json" });
}

async function handleGetContent(res) {
  try {
    const raw = await fsp.readFile(CONTENT_FILE, "utf8");
    const content = JSON.parse(raw);
    sendJson(res, 200, { ok: true, content });
  } catch (error) {
    sendJson(res, 404, { ok: false, error: "Aucun contenu sauvegardé sur disque." });
  }
}

async function handleSaveUserState(req, res) {
  const body = await readJsonBody(req);
  const state = body && typeof body.state === "object" ? body.state : null;
  if (!state) {
    sendJson(res, 400, { error: "Etat utilisateur manquant." });
    return;
  }
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(USER_STATE_FILE, state);
  sendJson(res, 200, { ok: true, file: "data/user-state.json" });
}

async function writeJsonAtomic(filePath, data) {
  const dir = path.dirname(filePath);
  const tmpPath = path.join(
    dir,
    `.${path.basename(filePath)}.${Date.now()}-${Math.random().toString(36).slice(2, 8)}.tmp`
  );
  const serialized = JSON.stringify(data, null, 2);
  await fsp.writeFile(tmpPath, serialized, "utf8");
  await fsp.rename(tmpPath, filePath);
}

async function handleGetUserState(res) {
  try {
    const raw = await fsp.readFile(USER_STATE_FILE, "utf8");
    const state = JSON.parse(raw);
    sendJson(res, 200, { ok: true, state });
  } catch (error) {
    sendJson(res, 404, { ok: false, error: "Aucun état utilisateur sauvegardé sur disque." });
  }
}

function buildBackupFileName() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `vortexbox-site-backup-${yyyy}${mm}${dd}-${hh}${min}${ss}.zip`;
}

async function createSiteBackupZip() {
  const fileName = buildBackupFileName();
  const zipPath = path.join(os.tmpdir(), fileName);
  await new Promise((resolve, reject) => {
    const child = spawn(
      "zip",
      ["-r", zipPath, ".", "-x", ".git/*", ".env", "*.DS_Store", "__MACOSX/*"],
      { cwd: ROOT_DIR }
    );
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => {
      reject(new Error(error.message || "Commande zip indisponible."));
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(stderr || `zip a échoué (code ${code}).`));
    });
  });
  return { fileName, zipPath };
}

async function handleBackupSiteZip(res) {
  const { fileName, zipPath } = await createSiteBackupZip();
  const stat = await fsp.stat(zipPath);
  res.writeHead(200, {
    "Content-Type": "application/zip",
    "Content-Length": stat.size,
    "Content-Disposition": `attachment; filename="${fileName}"`,
    "Cache-Control": "no-store",
  });

  const stream = fs.createReadStream(zipPath);
  stream.on("close", () => {
    fsp.unlink(zipPath).catch(() => {});
  });
  stream.on("error", () => {
    fsp.unlink(zipPath).catch(() => {});
    if (!res.headersSent) sendJson(res, 500, { ok: false, error: "Impossible de lire le fichier ZIP." });
  });
  stream.pipe(res);
}

function serveStatic(req, res) {
  const safePath = resolveSafePath(new URL(req.url, `http://${req.headers.host}`).pathname);
  if (!safePath) {
    res.writeHead(403, {
      "Content-Type": "text/plain; charset=utf-8",
      ...buildSecurityHeaders(),
    });
    res.end("Accès refusé.");
    return;
  }
  let finalPath = safePath;
  try {
    const stat = fs.existsSync(finalPath) ? fs.statSync(finalPath) : null;
    if (stat && stat.isDirectory()) finalPath = path.join(finalPath, "index.html");
  } catch (error) {}

  if (!fs.existsSync(finalPath)) {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      ...buildSecurityHeaders(),
    });
    res.end("Not found");
    return;
  }

  const ext = path.extname(finalPath).toLowerCase();
  const type = MIME_TYPES[ext] || "application/octet-stream";
  const stat = fs.statSync(finalPath);
  const totalSize = stat.size;
  const etag = `W/"${totalSize}-${Math.floor(Number(stat.mtimeMs || 0))}"`;
  const ifNoneMatch = String(req.headers["if-none-match"] || "");
  const rangeHeader = String(req.headers.range || "").trim();
  const isImmutableAsset =
    finalPath.includes(`${path.sep}uploads${path.sep}`) ||
    [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".mp4", ".webm", ".mov", ".m4v", ".mp3", ".pdf"].includes(ext);
  const isDynamicFrontendAsset = ext === ".js" || ext === ".css";
  const cacheControl =
    ext === ".html" || isDynamicFrontendAsset
      ? "no-store"
      : isImmutableAsset
        ? "public, max-age=31536000, immutable"
        : "public, max-age=300";

  if (!rangeHeader && ifNoneMatch && ifNoneMatch === etag) {
    res.writeHead(304, {
      "Cache-Control": cacheControl,
      ETag: etag,
      ...buildSecurityHeaders(),
    });
    res.end();
    return;
  }

  // Support HTTP range requests (critical for smooth video/audio streaming).
  if (rangeHeader.startsWith("bytes=")) {
    const match = rangeHeader.match(/^bytes=(\d*)-(\d*)$/i);
    if (!match) {
      res.writeHead(416, {
        "Content-Range": `bytes */${totalSize}`,
        "Content-Type": "text/plain; charset=utf-8",
        ...buildSecurityHeaders(),
      });
      res.end("Invalid range");
      return;
    }

    const startRaw = match[1];
    const endRaw = match[2];
    let start = startRaw ? Number(startRaw) : 0;
    let end = endRaw ? Number(endRaw) : totalSize - 1;

    if (!Number.isFinite(start) || start < 0) start = 0;
    if (!Number.isFinite(end) || end < 0 || end >= totalSize) end = totalSize - 1;

    if (start > end || start >= totalSize) {
      res.writeHead(416, {
        "Content-Range": `bytes */${totalSize}`,
        "Content-Type": "text/plain; charset=utf-8",
        ...buildSecurityHeaders(),
      });
      res.end("Range not satisfiable");
      return;
    }

    const chunkSize = end - start + 1;
    res.writeHead(206, {
      "Content-Type": type,
      "Content-Length": chunkSize,
      "Content-Range": `bytes ${start}-${end}/${totalSize}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": cacheControl,
      ETag: etag,
      ...buildSecurityHeaders(),
    });
    const rangedStream = fs.createReadStream(finalPath, { start, end });
    rangedStream.on("error", () => {
      if (!res.headersSent) {
        res.writeHead(500, {
          "Content-Type": "text/plain; charset=utf-8",
          ...buildSecurityHeaders(),
        });
      }
      res.end("Erreur lecture fichier.");
    });
    rangedStream.pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": totalSize,
    "Accept-Ranges": "bytes",
    "Cache-Control": cacheControl,
    ETag: etag,
    ...buildSecurityHeaders(),
  });
  const fileStream = fs.createReadStream(finalPath);
  fileStream.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
        ...buildSecurityHeaders(),
      });
    }
    res.end("Erreur lecture fichier.");
  });
  fileStream.pipe(res);
}

function isValidOutlookEmail(email) {
  return /@outlook\.(com|fr)$/i.test(String(email || "").trim());
}

async function sendAuthCodeEmail(email, code, type) {
  const to = String(email || "").trim().toLowerCase();
  const safeCode = String(code || "").trim();
  const safeType = type === "reset" ? "reset" : "activation";
  const subject =
    safeType === "activation"
      ? "VortexBox - Votre code d'activation"
      : "VortexBox - Votre code de reinitialisation";
  const title = safeType === "activation" ? "Activation de votre compte" : "Reinitialisation de mot de passe";
  const help =
    safeType === "activation"
      ? "Utilisez ce code pour activer votre compte VortexBox."
      : "Utilisez ce code pour confirmer la reinitialisation de votre mot de passe.";
  const html = `
    <div style="font-family:Arial,sans-serif;background:#07162c;color:#f1f7ff;padding:20px;border-radius:12px">
      <h2 style="margin:0 0 10px">${title}</h2>
      <p style="margin:0 0 14px">${help}</p>
      <p style="margin:0 0 8px">Code a 6 chiffres:</p>
      <div style="display:inline-block;padding:12px 16px;border-radius:10px;background:#102744;border:1px solid #5db7ff;font-size:26px;font-weight:700;letter-spacing:4px">${safeCode}</div>
      <p style="margin:14px 0 0;color:#9fb7d0">Si vous n'etes pas a l'origine de cette demande, ignorez cet email.</p>
    </div>
  `;
  const textBody = `${title}\n\n${help}\n\nCode: ${safeCode}\n\nSi vous n'etes pas a l'origine de cette demande, ignorez cet email.`;

  if (RESEND_API_KEY && MAIL_FROM) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: [to],
        subject,
        html,
      }),
    });

    if (response.ok) return { ok: true };
    const text = await response.text();
    return { ok: false, status: response.status, error: text || "Echec envoi email via Resend." };
  }

  if (!MAIL_FROM || !SMTP_USER || !SMTP_PASS) {
    return {
      ok: false,
      status: 503,
      error: "Envoi email non configure. Definissez MAIL_FROM + SMTP_USER + SMTP_PASS (ou RESEND_API_KEY).",
    };
  }

  const mime = [
    `From: ${MAIL_FROM}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="utf-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    textBody,
    "",
  ].join("\r\n");

  const hostsToTry = Array.from(new Set([SMTP_HOST, "smtp-mail.outlook.com", "smtp.office365.com"]));
  const smtpEndpoints = [
    { scheme: "smtp", port: 587, startTls: true },
    { scheme: "smtps", port: 465, startTls: false },
  ];
  let lastSmtpError = "";
  for (const host of hostsToTry) {
    for (const endpoint of smtpEndpoints) {
      const smtpResult = await new Promise((resolve) => {
        const curlArgs = [
          "--silent",
          "--show-error",
          "--url",
          `${endpoint.scheme}://${host}:${endpoint.port || SMTP_PORT}`,
          "--user",
          `${SMTP_USER}:${SMTP_PASS}`,
          "--login-options",
          "AUTH=LOGIN",
          "--mail-from",
          MAIL_FROM.replace(/^.*<([^>]+)>.*$/, "$1"),
          "--mail-rcpt",
          to,
          "--upload-file",
          "-",
        ];
        if (endpoint.startTls) curlArgs.splice(4, 0, "--ssl-reqd");
        const child = spawn("curl", curlArgs, { stdio: ["pipe", "pipe", "pipe"] });
        let stderr = "";
        child.stderr.on("data", (chunk) => {
          stderr += chunk.toString("utf8");
        });
        child.on("error", (error) => {
          resolve({ ok: false, error: error.message || "Erreur curl SMTP." });
        });
        child.on("close", (code) => {
          if (code === 0) {
            resolve({ ok: true });
            return;
          }
          resolve({
            ok: false,
            error: stderr || `Echec SMTP ${endpoint.scheme}://${host}:${endpoint.port} (code ${code}).`,
          });
        });
        child.stdin.write(mime);
        child.stdin.end();
      });
      if (smtpResult.ok) return { ok: true };
      lastSmtpError = smtpResult.error || lastSmtpError;
    }
  }

  if (lastSmtpError) {
    return { ok: false, status: 502, error: lastSmtpError };
  }
  return { ok: false, status: 502, error: "Echec envoi SMTP." };
}

async function handleSendAuthCode(req, res) {
  const body = await readJsonBody(req);
  const email = String(body.email || "").trim().toLowerCase();
  const code = String(body.code || "").trim();
  const type = body.type === "reset" ? "reset" : "activation";

  if (!isValidOutlookEmail(email)) {
    sendJson(res, 400, { ok: false, error: "Email Outlook invalide." });
    return;
  }
  if (!/^\d{6}$/.test(code)) {
    sendJson(res, 400, { ok: false, error: "Code invalide." });
    return;
  }

  const result = await sendAuthCodeEmail(email, code, type);
  if (!result.ok) {
    sendJson(res, result.status || 500, { ok: false, error: result.error || "Echec envoi email." });
    return;
  }

  sendJson(res, 200, { ok: true });
}

function pickOptionByBudget(component, budget) {
  const options = Array.isArray(component?.options) ? component.options : [];
  if (!options.length) return "";
  const sorted = options
    .map((item) => ({
      name: String(item?.name || ""),
      price: Number(item?.price || 0),
    }))
    .filter((item) => item.name)
    .sort((a, b) => a.price - b.price);
  if (!sorted.length) return "";
  if (budget === "entry") return sorted[0].name;
  if (budget === "pro") return sorted[sorted.length - 1].name;
  return sorted[Math.floor((sorted.length - 1) / 2)].name;
}

function buildFallbackAiRecommendation(answers, catalog) {
  const budget = String(answers?.budget || "mid");
  const game = String(answers?.game || "mix");
  const resolution = String(answers?.resolution || "1440");
  const components = Array.isArray(catalog?.components) ? catalog.components : [];
  const services = Array.isArray(catalog?.services) ? catalog.services : [];
  const selections = {};

  components.forEach((component) => {
    const label = String(component?.label || "");
    if (!label) return;
    selections[label] = pickOptionByBudget(component, budget);
  });

  const selectedServices = services
    .filter((service) => {
      const label = String(service?.label || "").toLowerCase();
      if (!label) return false;
      if (budget === "pro") return true;
      if (resolution === "4k") return /montage|test|premium|stabil/i.test(label);
      return /montage|test/i.test(label);
    })
    .map((service) => String(service.label || ""))
    .filter(Boolean);

  const fps =
    budget === "entry"
      ? { "1080p": "140-220 FPS", "1440p": "85-130 FPS", "4k": "45-70 FPS" }
      : budget === "pro" || game === "aaa" || resolution === "4k"
        ? { "1080p": "220-320 FPS", "1440p": "140-220 FPS", "4k": "90-140 FPS" }
        : { "1080p": "180-260 FPS", "1440p": "110-170 FPS", "4k": "65-95 FPS" };

  return {
    title: "Recommandation VortexBot IA",
    reason:
      budget === "entry"
        ? "Configuration optimisée pour le meilleur rapport performance/prix."
        : budget === "pro" || resolution === "4k"
          ? "Configuration orientée performances élevées et stabilité premium."
          : "Configuration équilibrée pour e-sport et AAA récents.",
    selections,
    services: selectedServices,
    fps_estimate: fps,
  };
}

function extractResponseText(payload) {
  if (!payload || typeof payload !== "object") return "";
  if (typeof payload.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();
  const chunks = [];
  const output = Array.isArray(payload.output) ? payload.output : [];
  output.forEach((item) => {
    const content = Array.isArray(item?.content) ? item.content : [];
    content.forEach((part) => {
      if (typeof part?.text === "string") chunks.push(part.text);
    });
  });
  return chunks.join("\n").trim();
}

async function handleAiRecommendation(req, res) {
  const body = await readJsonBody(req);
  const answers = body?.answers && typeof body.answers === "object" ? body.answers : {};
  const catalog = body?.catalog && typeof body.catalog === "object" ? body.catalog : {};
  const fallback = buildFallbackAiRecommendation(answers, catalog);

  if (!OPENAI_API_KEY) {
    sendJson(res, 200, { ok: true, source: "fallback", recommendation: fallback });
    return;
  }

  const systemPrompt =
    "Tu es un expert hardware gaming pour VortexBox. " +
    "Réponds uniquement en JSON valide sans markdown. " +
    "Format attendu: {title, reason, selections, services, fps_estimate}. " +
    "selections: map label_categorie -> nom_option_exact. " +
    "services: tableau de labels exacts.";

  const userPayload = {
    answers: {
      budget: String(answers.budget || "mid"),
      game: String(answers.game || "mix"),
      resolution: String(answers.resolution || "1440"),
    },
    catalog,
  };

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: JSON.stringify(userPayload) },
        ],
        temperature: 0.2,
        max_output_tokens: 450,
      }),
    });

    if (!response.ok) {
      const raw = await response.text();
      sendJson(res, 200, {
        ok: true,
        source: "fallback",
        warning: raw || "AI HTTP error",
        recommendation: fallback,
      });
      return;
    }

    const payload = await response.json();
    const text = extractResponseText(payload);
    let parsed = null;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      parsed = null;
    }

    if (!parsed || typeof parsed !== "object") {
      sendJson(res, 200, { ok: true, source: "fallback", recommendation: fallback });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      source: "ai",
      recommendation: {
        title: String(parsed.title || fallback.title),
        reason: String(parsed.reason || fallback.reason),
        selections: parsed.selections && typeof parsed.selections === "object" ? parsed.selections : fallback.selections,
        services: Array.isArray(parsed.services) ? parsed.services.map((item) => String(item || "")).filter(Boolean) : fallback.services,
        fps_estimate:
          parsed.fps_estimate && typeof parsed.fps_estimate === "object"
            ? parsed.fps_estimate
            : fallback.fps_estimate,
      },
    });
  } catch (error) {
    sendJson(res, 200, {
      ok: true,
      source: "fallback",
      warning: String(error?.message || "AI unavailable"),
      recommendation: fallback,
    });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === "GET" && url.pathname === "/api/ping") {
      sendJson(res, 200, { ok: true });
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/upload") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "upload", 30, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'uploads. Réessayez dans 1 minute." });
        return;
      }
      await handleUpload(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/upload-binary") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "upload-binary", 20, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'uploads. Réessayez dans 1 minute." });
        return;
      }
      await handleBinaryUpload(req, res);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/upload-progress") {
      await handleGetUploadProgress(url, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/save-content") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "save-content", 20, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de sauvegardes. Réessayez dans 1 minute." });
        return;
      }
      await handleSaveContent(req, res);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/content") {
      await handleGetContent(res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/save-user-state") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "save-user-state", 40, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'écritures. Réessayez dans 1 minute." });
        return;
      }
      await handleSaveUserState(req, res);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/user-state") {
      await handleGetUserState(res);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/backup-site-zip") {
      if (isRateLimited(req, "backup-zip", 4, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de demandes de sauvegarde. Réessayez plus tard." });
        return;
      }
      await handleBackupSiteZip(res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/send-auth-code") {
      if (isRateLimited(req, "send-auth-code", 6, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez dans quelques minutes." });
        return;
      }
      await handleSendAuthCode(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/ai/recommend") {
      if (isRateLimited(req, "ai-recommend", 30, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de requêtes IA. Réessayez dans 1 minute." });
        return;
      }
      await handleAiRecommendation(req, res);
      return;
    }
    serveStatic(req, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Erreur serveur." });
  }
});

setInterval(() => {
  const now = Date.now();
  for (const [key, hits] of RATE_LIMIT_STORE.entries()) {
    if (!Array.isArray(hits) || hits.length === 0) {
      RATE_LIMIT_STORE.delete(key);
      continue;
    }
    const valid = hits.filter((ts) => now - ts < 10 * 60 * 1000);
    if (valid.length === 0) RATE_LIMIT_STORE.delete(key);
    else RATE_LIMIT_STORE.set(key, valid);
  }
}, 5 * 60 * 1000).unref();

setInterval(() => {
  cleanupUploadStatusStore();
}, 10 * 60 * 1000).unref();

server.listen(PORT, HOST, () => {
  console.log(`VortexBox server running: http://${HOST}:${PORT}`);
  if (!RESEND_API_KEY && (!MAIL_FROM || !SMTP_USER || !SMTP_PASS)) {
    console.log("Email auth non configure. Ajoutez RESEND_API_KEY ou MAIL_FROM+SMTP_USER+SMTP_PASS dans .env");
  }
});
