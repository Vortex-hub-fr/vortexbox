const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");
const { URL } = require("url");
const zlib = require("zlib");
let nodemailer = null;
try {
  nodemailer = require("nodemailer");
} catch (error) {}
const { hashPasswordScrypt, verifyScryptHash } = require("./lib/password-hash");
const { runStorageRetentionCleanup } = require("./lib/storage-retention");
const { createUserAuthRouteHandler } = require("./lib/auth-user");
const { createUploadRouteHandler } = require("./lib/upload-routes");
const { createContentRouteHandler } = require("./lib/content-routes");
const { createAdminOpsRouteHandler } = require("./lib/admin-ops-routes");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 8080);
// Use the server file location as stable root (not process.cwd()),
// so data/uploads always persist in the project folder regardless of launch directory.
const ROOT_DIR = __dirname;
const UPLOADS_DIR = path.join(ROOT_DIR, "uploads");
const DATA_DIR = path.join(ROOT_DIR, "data");
const CONTENT_FILE = path.join(DATA_DIR, "site-content.json");
const CONTENT_BACKUPS_DIR = path.join(DATA_DIR, "content-backups");
const CONTENT_HISTORY_DIR = path.join(DATA_DIR, "content-history");
const CONTENT_AUDIT_FILE = path.join(DATA_DIR, "admin-content-audit.json");
const BACKUPS_DIR = path.join(ROOT_DIR, "backups");
const USER_STATE_FILE = path.join(DATA_DIR, "user-state.json");
const AUTH_USERS_FILE = path.join(DATA_DIR, "auth-users.json");
const MAX_JSON_BYTES = 15 * 1024 * 1024;
const MAX_BINARY_UPLOAD_BYTES = 1 * 1024 * 1024 * 1024;
const ENV_FILE = path.join(ROOT_DIR, ".env");
const ALLOWED_UPLOAD_KINDS = new Set([
  "showcase",
  "technical-images",
  "technical-docs",
  "processus",
  "configurator",
  "component-images",
  "about-videos",
  "about-gallery",
  "machine-images",
  "machine-videos",
  "games-covers",
  "games-zips",
]);
const UPLOAD_KIND_EXTENSIONS = {
  image: new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".heic", ".heif", ".avif", ".bmp", ".jfif"]),
  video: new Set([".mp4", ".webm", ".m4v", ".mov", ".qt"]),
  doc: new Set([".pdf"]),
  archive: new Set([".zip", ".rar"]),
  audio: new Set([".mp3"]),
  icon: new Set([".ico"]),
};
const ALLOWED_UPLOAD_EXTENSIONS = new Set([
  ...UPLOAD_KIND_EXTENSIONS.image,
  ...UPLOAD_KIND_EXTENSIONS.video,
  ...UPLOAD_KIND_EXTENSIONS.doc,
  ...UPLOAD_KIND_EXTENSIONS.archive,
  ...UPLOAD_KIND_EXTENSIONS.audio,
  ...UPLOAD_KIND_EXTENSIONS.icon,
]);
const UPLOAD_MAX_BYTES_BY_TYPE = {
  image: 25 * 1024 * 1024,
  video: 1 * 1024 * 1024 * 1024,
  doc: 30 * 1024 * 1024,
  archive: 1 * 1024 * 1024 * 1024,
  audio: 30 * 1024 * 1024,
  icon: 5 * 1024 * 1024,
};

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
const HF_API_KEY = process.env.HF_API_KEY || "";
const HF_MODEL = process.env.HF_MODEL || "mistralai/Mistral-7B-Instruct-v0.3";
const AI_FREE_FIRST = String(process.env.AI_FREE_FIRST || "1") === "1";
const ADMIN_EMAIL = String(process.env.ADMIN_EMAIL || "vortexcore@outlook.fr").trim().toLowerCase();
const ADMIN_PASSWORD = String(process.env.ADMIN_PASSWORD || "");
const ADMIN_PASSWORD_HASH = String(process.env.ADMIN_PASSWORD_HASH || "").trim();
const ADMIN_ROLE = String(process.env.ADMIN_ROLE || "super-admin").trim().toLowerCase();
const ADMIN_ACCOUNTS_JSON = String(process.env.ADMIN_ACCOUNTS_JSON || "").trim();
const ADMIN_SESSION_COOKIE = "vb_admin_session";
const ADMIN_SESSION_TTL_MS = 2 * 60 * 60 * 1000;
const ADMIN_SESSION_NO_EXPIRY = false;
const ADMIN_SESSION_PERSIST_MAX_AGE_SECONDS = Math.floor(ADMIN_SESSION_TTL_MS / 1000);
const USER_SESSION_COOKIE = "vb_user_session";
const USER_SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const USER_SESSION_REMEMBER_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const BACKUPS_RETENTION_DAYS = Math.max(1, Number(process.env.BACKUPS_RETENTION_DAYS || 90));
const CONTENT_BACKUPS_RETENTION_DAYS = Math.max(1, Number(process.env.CONTENT_BACKUPS_RETENTION_DAYS || 30));
const BACKUPS_KEEP_MIN_FILES = Math.max(1, Number(process.env.BACKUPS_KEEP_MIN_FILES || 8));
const CONTENT_BACKUPS_KEEP_MIN_FILES = Math.max(1, Number(process.env.CONTENT_BACKUPS_KEEP_MIN_FILES || 30));
const CONFIG_VISUAL_SLOT_COUNT = 4;
const CONTENT_AUDIT_LIMIT = 120;

function getConfigVisualSlotIndexes() {
  return Array.from({ length: CONFIG_VISUAL_SLOT_COUNT }, (_, index) => index);
}

function buildAdminEmailCandidates(email) {
  const normalized = String(email || "").trim().toLowerCase();
  const set = new Set();
  if (!normalized) return set;
  set.add(normalized);
  const [local = "", domain = ""] = normalized.split("@");
  if (local && domain === "outlook.fr") set.add(`${local}@outlook.com`);
  if (local && domain === "outlook.com") set.add(`${local}@outlook.fr`);
  if (local === "vortexcore") {
    set.add("votexcore.fr");
    set.add("votexcore@outlook.fr");
    set.add("votexcore@outlook.com");
  }
  return set;
}

const ADMIN_ROLE_SUPER = "super-admin";
const ADMIN_ROLE_EDITOR = "editeur";
const ADMIN_ROLE_SUPPORT = "support";
const ADMIN_ROLE_SET = new Set([ADMIN_ROLE_SUPER, ADMIN_ROLE_EDITOR, ADMIN_ROLE_SUPPORT]);
const ADMIN_PERMISSION_MATRIX = {
  [ADMIN_ROLE_SUPER]: new Set(["*"]),
  [ADMIN_ROLE_EDITOR]: new Set([
    "content:read",
    "content:write",
    "content:history:read",
    "content:rollback",
    "content:history:manage",
    "uploads:read",
    "uploads:write",
    "backups:create",
    "ops:read",
    "users:manage",
  ]),
  [ADMIN_ROLE_SUPPORT]: new Set([
    "content:read",
    "content:history:read",
    "uploads:read",
    "ops:read",
  ]),
};

function normalizeAdminRole(role) {
  const normalized = String(role || "").trim().toLowerCase();
  if (ADMIN_ROLE_SET.has(normalized)) return normalized;
  return ADMIN_ROLE_SUPPORT;
}

function sanitizeAdminAccount(input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  const email = String(raw.email || "").trim().toLowerCase();
  const password = String(raw.password || "");
  const passwordHash = String(raw.passwordHash || "").trim();
  const role = normalizeAdminRole(raw.role || ADMIN_ROLE_SUPPORT);
  if (!email || (!password && !passwordHash)) return null;
  return {
    email,
    password,
    passwordHash,
    role,
  };
}

function parseAdminAccountsJson(rawValue) {
  if (!rawValue) return [];
  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((entry) => sanitizeAdminAccount(entry)).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function buildAdminAccounts() {
  const byEmail = new Map();
  if (ADMIN_EMAIL && (ADMIN_PASSWORD || ADMIN_PASSWORD_HASH)) {
    byEmail.set(
      ADMIN_EMAIL,
      sanitizeAdminAccount({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        passwordHash: ADMIN_PASSWORD_HASH,
        role: ADMIN_ROLE || ADMIN_ROLE_SUPER,
      })
    );
  }
  for (const account of parseAdminAccountsJson(ADMIN_ACCOUNTS_JSON)) {
    byEmail.set(account.email, account);
  }
  return Array.from(byEmail.values()).filter(Boolean);
}

const ADMIN_ACCOUNTS = buildAdminAccounts();
const ADMIN_ACCOUNTS_BY_EMAIL = new Map(ADMIN_ACCOUNTS.map((account) => [account.email, account]));
const ADMIN_EMAIL_CANDIDATES = (() => {
  const set = buildAdminEmailCandidates(ADMIN_EMAIL);
  for (const account of ADMIN_ACCOUNTS) {
    if (account?.email) set.add(account.email);
  }
  return set;
})();

function getAdminAccountByEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!normalized) return null;
  const direct = ADMIN_ACCOUNTS_BY_EMAIL.get(normalized);
  if (direct) return direct;
  if (buildAdminEmailCandidates(ADMIN_EMAIL).has(normalized)) {
    return ADMIN_ACCOUNTS_BY_EMAIL.get(ADMIN_EMAIL) || null;
  }
  return null;
}

function getAdminPermissionsForRole(role) {
  const normalizedRole = normalizeAdminRole(role || ADMIN_ROLE_SUPPORT);
  const source = ADMIN_PERMISSION_MATRIX[normalizedRole] || new Set();
  return Array.from(source.values());
}

function hasAdminPermission(role, permission) {
  const needed = String(permission || "").trim();
  if (!needed) return true;
  const permissions = ADMIN_PERMISSION_MATRIX[normalizeAdminRole(role || ADMIN_ROLE_SUPPORT)] || new Set();
  return permissions.has("*") || permissions.has(needed);
}

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
  ".avif": "image/avif",
  ".bmp": "image/bmp",
  ".jfif": "image/jpeg",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".qt": "video/quicktime",
  ".mp3": "audio/mpeg",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".rar": "application/vnd.rar",
  ".ico": "image/x-icon",
};

const RATE_LIMIT_STORE = new Map();
const RATE_LIMIT_IDENTIFIER_STORE = new Map();
const UPLOAD_STATUS_STORE = new Map();
const ADMIN_SESSION_STORE = new Map();
const USER_SESSION_STORE = new Map();
const AUTH_CODE_COOLDOWN_STORE = new Map();

function isAdminEmailCandidate(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return ADMIN_EMAIL_CANDIDATES.has(normalized);
}

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

function isRateLimitedByIdentifier(namespace, identifier, maxHits, windowMs) {
  const id = String(identifier || "").trim().toLowerCase();
  if (!id) return false;
  const now = Date.now();
  const bucketKey = `${namespace}:${id}`;
  const current = RATE_LIMIT_IDENTIFIER_STORE.get(bucketKey) || [];
  const valid = current.filter((ts) => now - ts < windowMs);
  if (valid.length >= maxHits) {
    RATE_LIMIT_IDENTIFIER_STORE.set(bucketKey, valid);
    return true;
  }
  valid.push(now);
  RATE_LIMIT_IDENTIFIER_STORE.set(bucketKey, valid);
  return false;
}

function buildSecurityHeaders() {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https:",
    "media-src 'self' data: blob: https:",
    "connect-src 'self' https://api.openai.com https://api-inference.huggingface.co https://router.huggingface.co https://api.resend.com",
  ].join("; ");
  return {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Content-Security-Policy": csp,
  };
}

function parseCookies(req) {
  const raw = String(req.headers.cookie || "");
  if (!raw) return {};
  return raw.split(/;\s*/).reduce((acc, part) => {
    const eq = part.indexOf("=");
    if (eq <= 0) return acc;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    if (!key) return acc;
    acc[key] = decodeURIComponent(value || "");
    return acc;
  }, {});
}

function buildCookieHeader(name, value, options = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];
  parts.push(`Path=${options.path || "/"}`);
  if (options.maxAge !== undefined) parts.push(`Max-Age=${Math.max(0, Math.floor(Number(options.maxAge) || 0))}`);
  if (options.httpOnly !== false) parts.push("HttpOnly");
  parts.push(`SameSite=${options.sameSite || "Strict"}`);
  if (options.secure) parts.push("Secure");
  return parts.join("; ");
}

function shouldUseSecureCookies(req) {
  if (req.socket?.encrypted) return true;
  return String(req.headers["x-forwarded-proto"] || "").toLowerCase() === "https";
}

function createAdminSession(email, role = ADMIN_ROLE_SUPER) {
  const token = crypto.randomBytes(24).toString("hex");
  const normalizedRole = normalizeAdminRole(role || ADMIN_ROLE_SUPER);
  ADMIN_SESSION_STORE.set(token, {
    email,
    role: normalizedRole,
    permissions: getAdminPermissionsForRole(normalizedRole),
    expiresAt: ADMIN_SESSION_NO_EXPIRY ? Number.MAX_SAFE_INTEGER : Date.now() + ADMIN_SESSION_TTL_MS,
  });
  return token;
}

function verifyAdminPassword(password, account) {
  const candidate = String(password || "");
  const source = account && typeof account === "object" ? account : {};
  const hash = String(source.passwordHash || "").trim();
  const plain = String(source.password || "");
  if (hash) {
    return verifyScryptHash(candidate, hash);
  }
  return plain ? candidate === plain : false;
}

function createUserSession(email, remember = false) {
  const token = crypto.randomBytes(24).toString("hex");
  const ttlMs = remember ? USER_SESSION_REMEMBER_TTL_MS : USER_SESSION_TTL_MS;
  USER_SESSION_STORE.set(token, {
    email: String(email || "").trim().toLowerCase(),
    expiresAt: Date.now() + ttlMs,
    remember: Boolean(remember),
  });
  return token;
}

function getUserSession(req) {
  const cookies = parseCookies(req);
  const token = String(cookies[USER_SESSION_COOKIE] || "");
  if (!token) return null;
  const session = USER_SESSION_STORE.get(token);
  if (!session) return null;
  if (Number(session.expiresAt || 0) <= Date.now()) {
    USER_SESSION_STORE.delete(token);
    return null;
  }
  return { token, email: String(session.email || "").trim().toLowerCase(), remember: Boolean(session.remember) };
}

function clearUserSession(token) {
  if (!token) return;
  USER_SESSION_STORE.delete(token);
}

function buildUserSessionCookie(req, token) {
  const session = USER_SESSION_STORE.get(token);
  const now = Date.now();
  const maxAgeSeconds = Math.max(0, Math.floor((Number(session?.expiresAt || now) - now) / 1000));
  return buildCookieHeader(USER_SESSION_COOKIE, token, {
    maxAge: maxAgeSeconds,
    secure: shouldUseSecureCookies(req),
  });
}

function buildUserSessionClearCookie(req) {
  return buildCookieHeader(USER_SESSION_COOKIE, "", {
    maxAge: 0,
    secure: shouldUseSecureCookies(req),
  });
}

function getAdminSession(req) {
  const cookies = parseCookies(req);
  const token = String(cookies[ADMIN_SESSION_COOKIE] || "");
  if (!token) return null;
  const session = ADMIN_SESSION_STORE.get(token);
  if (!session) return null;
  if (!ADMIN_SESSION_NO_EXPIRY && Number(session.expiresAt || 0) <= Date.now()) {
    ADMIN_SESSION_STORE.delete(token);
    return null;
  }
  const role = normalizeAdminRole(session.role || getAdminAccountByEmail(session.email)?.role || ADMIN_ROLE_SUPPORT);
  return {
    token,
    email: String(session.email || "").toLowerCase(),
    role,
    permissions: getAdminPermissionsForRole(role),
  };
}

function clearAdminSession(token) {
  if (!token) return;
  ADMIN_SESSION_STORE.delete(token);
}

function buildAdminSessionCookie(req, token) {
  return buildCookieHeader(ADMIN_SESSION_COOKIE, token, {
    maxAge: ADMIN_SESSION_NO_EXPIRY
      ? ADMIN_SESSION_PERSIST_MAX_AGE_SECONDS
      : Math.floor(ADMIN_SESSION_TTL_MS / 1000),
    secure: shouldUseSecureCookies(req),
  });
}

function buildAdminSessionClearCookie(req) {
  return buildCookieHeader(ADMIN_SESSION_COOKIE, "", {
    maxAge: 0,
    secure: shouldUseSecureCookies(req),
  });
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
  const normalizeHost = (value) => String(value || "").toLowerCase().replace(/^www\./, "");
  const originHost = normalizeHost(originUrl.hostname);
  const reqHost = normalizeHost(hostUrl.hostname);
  if (!originHost || !reqHost) return false;
  if (originHost === reqHost) return true;
  if (["localhost", "127.0.0.1"].includes(originHost) && ["localhost", "127.0.0.1"].includes(reqHost)) return true;
  if (originHost.endsWith(".onrender.com") && reqHost.endsWith(".onrender.com")) return true;
  return false;
}

function requireAdminSession(req, res) {
  const session = getAdminSession(req);
  const account = getAdminAccountByEmail(session?.email || "");
  if (!session || !account || !isAdminEmailCandidate(session.email)) {
    sendJson(res, 401, { ok: false, error: "Session administrateur requise." });
    return null;
  }
  return session;
}

function requireAdminPermission(req, res, permission) {
  const session = requireAdminSession(req, res);
  if (!session) return null;
  if (hasAdminPermission(session.role, permission)) return session;
  sendJson(res, 403, { ok: false, error: "Permission administrateur insuffisante." });
  return null;
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

function cleanupAdminSessionStore() {
  if (ADMIN_SESSION_NO_EXPIRY) return;
  const now = Date.now();
  for (const [token, session] of ADMIN_SESSION_STORE.entries()) {
    if (Number(session?.expiresAt || 0) <= now) {
      ADMIN_SESSION_STORE.delete(token);
    }
  }
}

function cleanupUserSessionStore() {
  const now = Date.now();
  for (const [token, session] of USER_SESSION_STORE.entries()) {
    if (Number(session?.expiresAt || 0) <= now) {
      USER_SESSION_STORE.delete(token);
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

function sendJson(res, status, payload, extraHeaders = {}) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
    ...buildSecurityHeaders(),
    ...extraHeaders,
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
  if (type.includes("avif")) return ".avif";
  if (type.includes("bmp")) return ".bmp";
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
  if (type.includes("zip")) return ".zip";
  if (type.includes("rar")) return ".rar";
  return ".bin";
}

function normalizePdfText(value) {
  return String(value || "")
    .replace(/\r\n/g, " ")
    .replace(/\r/g, " ")
    .replace(/\n/g, " ")
    .replace(/[’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/[•]/g, "-")
    .replace(/\u00a0/g, " ")
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, " ");
}

function escapePdfString(value) {
  return normalizePdfText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapPdfLine(text, maxLength = 82) {
  const source = normalizePdfText(text).trim();
  if (!source) return [""];
  const words = source.split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxLength) {
      current = candidate;
      return;
    }
    if (current) lines.push(current);
    current = word;
  });
  if (current) lines.push(current);
  return lines.length ? lines : [source];
}

function buildProcessInvoicePdfBuffer(invoice) {
  const safeInvoice = invoice && typeof invoice === "object" ? invoice : {};
  const lines = Array.isArray(safeInvoice.lines) ? safeInvoice.lines : [];
  const normalizedLines = lines.map((line, index) => {
    const quantity = Math.max(1, Number(line?.quantity) || 1);
    const unitPrice = Math.max(0, Number(line?.unitPrice) || 0);
    return {
      label: normalizePdfText(line?.label || `Ligne ${index + 1}`) || `Ligne ${index + 1}`,
      quantity,
      unitPrice,
      total: quantity * unitPrice,
    };
  });
  const totalTtc = normalizedLines.reduce((sum, line) => sum + line.total, 0);
  const euro = (value) =>
    new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(
      Math.max(0, Number(value) || 0)
    );
  const issueDate = safeInvoice.issueDate
    ? new Date(`${safeInvoice.issueDate}T12:00:00`).toLocaleDateString("fr-FR")
    : new Date().toLocaleDateString("fr-FR");
  const dueDate = safeInvoice.dueDate
    ? new Date(`${safeInvoice.dueDate}T12:00:00`).toLocaleDateString("fr-FR")
    : "";
  const stream = [];
  const addText = (text, x, y, options = {}) => {
    const font = options.bold ? "F2" : "F1";
    const size = options.size || 11;
    const color = options.color || "1 1 1";
    stream.push(`${color} rg 0 Tr BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdfString(text)}) Tj ET\n`);
  };

  stream.push("0.02 0.08 0.18 rg 0 0 595 842 re f\n");
  stream.push("0.06 0.23 0.39 rg 32 760 531 58 re f\n");
  stream.push("0.38 0.87 0.98 RG 32 760 531 58 re S\n");
  addText("VORTEXBOX", 48, 792, { bold: true, size: 28, color: "0.82 0.97 1" });
  addText("FACTURE CLIENT PREMIUM", 250, 792, { bold: true, size: 15, color: "0.82 0.97 1" });
  addText("VortexBox - Paris - VortexCore@outlook.Fr", 48, 772, {
    size: 11,
    color: "0.74 0.92 1",
  });
  addText(`Facture: ${safeInvoice.number || "VB-FACTURE"}`, 48, 738, { bold: true, size: 14, color: "0.70 0.92 1" });
  addText(`Date: ${issueDate}`, 385, 738, { size: 11, color: "0.88 0.96 1" });
  if (dueDate) addText(`Echeance: ${dueDate}`, 385, 720, { size: 11, color: "0.88 0.96 1" });

  stream.push("0.18 0.52 0.76 RG 32 640 531 82 re S\n");
  addText("CLIENT", 48, 705, { bold: true, size: 12, color: "0.60 0.93 1" });
  addText(`${safeInvoice.clientName || "Client non renseigne"}`, 48, 684, { bold: true, size: 18 });
  addText(`${safeInvoice.clientEmail || "Email non renseigne"}`, 48, 664, { size: 11, color: "0.86 0.95 1" });
  addText(`${safeInvoice.clientPhone || "Telephone non renseigne"}`, 260, 664, { size: 11, color: "0.86 0.95 1" });
  addText(
    `${safeInvoice.clientAddress || "Adresse non renseignee"} ${safeInvoice.clientPostalCode || ""} ${safeInvoice.clientCity || ""}`.trim(),
    48,
    644,
    { size: 11, color: "0.86 0.95 1" }
  );

  let y = 610;
  addText("DETAIL DE LA FACTURE", 48, y, { bold: true, size: 13, color: "0.60 0.93 1" });
  y -= 24;
  normalizedLines.forEach((line, index) => {
    const labelLines = wrapPdfLine(line.label, 48);
    addText(`${index + 1}.`, 48, y, { bold: true });
    addText(`${labelLines[0]}`, 68, y, { bold: true });
    addText(`${line.quantity} x ${euro(line.unitPrice)} EUR TTC`, 390, y, { size: 10, color: "0.82 0.97 1" });
    y -= 18;
    labelLines.slice(1).forEach((wrapped) => {
      addText(wrapped, 68, y, { size: 10, color: "0.84 0.95 1" });
      y -= 16;
    });
    addText(`Total ligne: ${euro(line.total)} EUR TTC`, 390, y + 16, { bold: true, size: 10, color: "0.60 0.93 1" });
    y -= 6;
    stream.push(`0.16 0.34 0.52 RG 48 ${y} 499 0.6 re S\n`);
    y -= 18;
  });

  const noteLines = wrapPdfLine(
    safeInvoice.notes || "Reglement comptant a reception. Garantie materielle 2 ans incluse.",
    90
  );
  addText("NOTES", 48, Math.max(180, y), { bold: true, size: 12, color: "0.60 0.93 1" });
  let noteY = Math.max(160, y - 20);
  noteLines.slice(0, 5).forEach((line) => {
    addText(line, 48, noteY, { size: 10, color: "0.88 0.96 1" });
    noteY -= 15;
  });

  stream.push("0.08 0.30 0.48 rg 320 92 243 68 re f\n");
  stream.push("0.45 0.93 0.99 RG 320 92 243 68 re S\n");
  addText("TOTAL TTC", 340, 134, { bold: true, size: 14, color: "0.70 0.95 1" });
  addText(`${euro(totalTtc)} EUR TTC`, 340, 108, { bold: true, size: 22, color: "1 1 1" });
  addText("Garantie 2 ans incluse - Support premium VortexBox", 48, 58, { size: 10, color: "0.74 0.92 1" });

  const contentBuffer = Buffer.from(stream.join(""), "latin1");
  const objects = [];
  objects.push("1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n");
  objects.push("2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n");
  objects.push(
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /ProcSet [/PDF /Text] /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >> endobj\n"
  );
  objects.push(`4 0 obj << /Length ${contentBuffer.length} >> stream\n`);
  objects.push(contentBuffer);
  objects.push("\nendstream endobj\n");
  objects.push("5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >> endobj\n");
  objects.push(
    "6 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >> endobj\n"
  );

  const header = Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "binary");
  let offset = header.length;
  const offsets = [0];
  const buffers = [header];
  objects.forEach((object) => {
    const buffer = Buffer.isBuffer(object) ? object : Buffer.from(object, "latin1");
    offsets.push(offset);
    buffers.push(buffer);
    offset += buffer.length;
  });

  const xrefStart = offset;
  let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) {
    xref += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  const trailer = `trailer << /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  buffers.push(Buffer.from(xref + trailer, "latin1"));
  return { buffer: Buffer.concat(buffers), totalTtc };
}

function buildProfileQuotePdfBuffer(quote) {
  const safeQuote = quote && typeof quote === "object" ? quote : {};
  const lines = Array.isArray(safeQuote.lines) ? safeQuote.lines : [];
  const normalizedLines = lines
    .map((line, index) => {
      const quantity = Math.max(1, Number(line?.quantity) || 1);
      const unitPriceTtc = Math.max(0, Number(line?.unitPriceTtc) || 0);
      return {
        label: normalizePdfText(line?.label || `Ligne ${index + 1}`) || `Ligne ${index + 1}`,
        quantity,
        unitPriceTtc,
        totalTtc: quantity * unitPriceTtc,
      };
    })
    .filter((line) => line.label || line.totalTtc > 0);

  const totalTtc = normalizedLines.reduce((sum, line) => sum + line.totalTtc, 0);
  const vatRate = Math.max(0, Number(safeQuote.vatRate) || 20);
  const divisor = 1 + vatRate / 100;
  const totalHt = divisor > 0 ? totalTtc / divisor : totalTtc;
  const totalVat = Math.max(0, totalTtc - totalHt);
  const euro = (value) =>
    new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
      Math.max(0, Number(value) || 0)
    );

  const stream = [];
  const addText = (text, x, y, options = {}) => {
    const font = options.bold ? "F2" : "F1";
    const size = options.size || 11;
    const color = options.color || "1 1 1";
    stream.push(`${color} rg 0 Tr BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdfString(text)}) Tj ET\n`);
  };

  stream.push("0.02 0.08 0.18 rg 0 0 595 842 re f\n");
  stream.push("0.06 0.23 0.39 rg 28 754 539 70 re f\n");
  stream.push("0.40 0.90 1.00 RG 28 754 539 70 re S\n");
  stream.push("0.05 0.42 0.74 rg 44 770 28 28 re f\n");
  stream.push("0.70 0.96 1.00 RG 44 770 28 28 re S\n");
  addText("VB", 50, 778, { bold: true, size: 12, color: "0.95 1 1" });
  addText("VORTEXBOX", 44, 792, { bold: true, size: 30, color: "0.90 0.98 1" });
  addText("DEVIS ULTRA PREMIUM PRO", 286, 795, { bold: true, size: 14, color: "0.90 0.98 1" });
  addText(`Devis N° ${safeQuote.number || "DV-VORTEXBOX"}`, 286, 776, { bold: true, size: 12, color: "0.78 0.95 1" });
  addText(`Date: ${safeQuote.issueDateLabel || new Date().toLocaleDateString("fr-FR")}`, 286, 760, {
    size: 10,
    color: "0.86 0.96 1",
  });
  addText(`Validite: ${safeQuote.validUntilLabel || ""}`, 432, 760, { size: 10, color: "0.86 0.96 1" });

  stream.push("0.18 0.52 0.76 RG 28 638 539 96 re S\n");
  addText("EMETTEUR (PRO)", 44, 714, { bold: true, size: 11, color: "0.62 0.94 1" });
  addText("VortexBox", 44, 696, { bold: true, size: 16, color: "1 1 1" });
  addText("Email: vortexcore@outlook.fr", 44, 678, { size: 10, color: "0.88 0.97 1" });
  addText("SIRET: A COMPLETER - TVA intracom: A COMPLETER", 44, 662, { size: 10, color: "0.88 0.97 1" });

  addText("CLIENT (PRO)", 312, 714, { bold: true, size: 11, color: "0.62 0.94 1" });
  addText(`${safeQuote.clientName || "Client professionnel"}`, 312, 696, { bold: true, size: 16, color: "1 1 1" });
  addText(`${safeQuote.clientEmail || "Email non renseigne"}`, 312, 678, { size: 10, color: "0.88 0.97 1" });
  addText(`${safeQuote.clientCompany || "Societe non renseignee"}`, 312, 662, { size: 10, color: "0.88 0.97 1" });
  addText(`${safeQuote.clientSiret || "SIRET client non renseigne"}`, 312, 646, { size: 10, color: "0.88 0.97 1" });
  addText(`${safeQuote.clientVatNumber || "TVA client non renseignee"}`, 312, 632, {
    size: 10,
    color: "0.88 0.97 1",
  });

  let y = 606;
  addText("DETAIL CONFIGURATION", 44, y, { bold: true, size: 12, color: "0.62 0.94 1" });
  y -= 20;
  normalizedLines.forEach((line, index) => {
    const wrapped = wrapPdfLine(line.label, 64);
    addText(`${index + 1}. ${wrapped[0]}`, 44, y, { bold: true, size: 10, color: "0.94 0.99 1" });
    addText(`${line.quantity} x ${euro(line.unitPriceTtc)} EUR TTC`, 382, y, { size: 9, color: "0.82 0.97 1" });
    y -= 15;
    wrapped.slice(1).forEach((part) => {
      addText(part, 56, y, { size: 9, color: "0.84 0.95 1" });
      y -= 14;
    });
    addText(`Total ligne: ${euro(line.totalTtc)} EUR TTC`, 382, y + 14, { bold: true, size: 9, color: "0.62 0.94 1" });
    y -= 6;
    stream.push(`0.16 0.34 0.52 RG 44 ${y} 501 0.6 re S\n`);
    y -= 14;
  });

  const summaryTop = Math.max(146, y - 10);
  stream.push(`0.08 0.30 0.48 rg 292 ${summaryTop} 275 94 re f\n`);
  stream.push(`0.45 0.93 0.99 RG 292 ${summaryTop} 275 94 re S\n`);
  addText("SYNTHESE TVA", 308, summaryTop + 72, { bold: true, size: 13, color: "0.74 0.96 1" });
  addText(`Total HT : ${euro(totalHt)} EUR`, 308, summaryTop + 52, { size: 11, color: "0.92 0.99 1" });
  addText(`TVA ${vatRate}% : ${euro(totalVat)} EUR`, 308, summaryTop + 34, { size: 11, color: "0.92 0.99 1" });
  addText(`Total TTC : ${euro(totalTtc)} EUR`, 308, summaryTop + 14, { bold: true, size: 15, color: "1 1 1" });

  addText(
    "Devis normalise pour clients professionnels - Prix exprimes TTC - TVA detaillee.",
    44,
    118,
    { size: 9, color: "0.76 0.93 1" }
  );
  addText(
    "Conditions pro: validite 30 jours, acompte 40% a la commande, solde a la livraison.",
    44,
    102,
    { size: 9, color: "0.76 0.93 1" }
  );
  addText("TVA detaillee conformement au format devis professionnel FR.", 44, 86, {
    size: 9,
    color: "0.76 0.93 1",
  });
  addText("Logo VORTEXBOX present en en-tete du devis.", 44, 70, { size: 9, color: "0.76 0.93 1" });

  const contentBuffer = Buffer.from(stream.join(""), "latin1");
  const objects = [];
  objects.push("1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n");
  objects.push("2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n");
  objects.push(
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /ProcSet [/PDF /Text] /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >> endobj\n"
  );
  objects.push(`4 0 obj << /Length ${contentBuffer.length} >> stream\n`);
  objects.push(contentBuffer);
  objects.push("\nendstream endobj\n");
  objects.push("5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >> endobj\n");
  objects.push(
    "6 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >> endobj\n"
  );

  const header = Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "binary");
  let offset = header.length;
  const offsets = [0];
  const buffers = [header];
  objects.forEach((object) => {
    const buffer = Buffer.isBuffer(object) ? object : Buffer.from(object, "latin1");
    offsets.push(offset);
    buffers.push(buffer);
    offset += buffer.length;
  });
  const xrefStart = offset;
  let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) {
    xref += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  const trailer = `trailer << /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  buffers.push(Buffer.from(xref + trailer, "latin1"));
  return { buffer: Buffer.concat(buffers), totalTtc, totalHt, totalVat, vatRate };
}

function isAllowedUploadExtension(ext) {
  return ALLOWED_UPLOAD_EXTENSIONS.has(String(ext || "").toLowerCase());
}

function isVideoExtension(ext) {
  return [".mp4", ".mov", ".m4v", ".qt", ".webm"].includes(String(ext || "").toLowerCase());
}

function resolveUploadTypeFromExt(ext) {
  const normalized = String(ext || "").toLowerCase();
  if (UPLOAD_KIND_EXTENSIONS.image.has(normalized)) return "image";
  if (UPLOAD_KIND_EXTENSIONS.video.has(normalized)) return "video";
  if (UPLOAD_KIND_EXTENSIONS.doc.has(normalized)) return "doc";
  if (UPLOAD_KIND_EXTENSIONS.archive.has(normalized)) return "archive";
  if (UPLOAD_KIND_EXTENSIONS.audio.has(normalized)) return "audio";
  if (UPLOAD_KIND_EXTENSIONS.icon.has(normalized)) return "icon";
  return "";
}

function isAllowedUploadKind(kind) {
  return ALLOWED_UPLOAD_KINDS.has(String(kind || "").toLowerCase());
}

function isExtensionAllowedForKind(kind, ext) {
  const safeKind = String(kind || "").toLowerCase();
  const safeExt = String(ext || "").toLowerCase();
  if (!isAllowedUploadKind(safeKind)) return false;
  if (safeKind === "about-videos" || safeKind === "machine-videos") {
    return UPLOAD_KIND_EXTENSIONS.video.has(safeExt);
  }
  if (safeKind === "technical-docs") {
    return UPLOAD_KIND_EXTENSIONS.doc.has(safeExt);
  }
  if (safeKind === "processus") {
    return UPLOAD_KIND_EXTENSIONS.doc.has(safeExt) || UPLOAD_KIND_EXTENSIONS.archive.has(safeExt);
  }
  if (safeKind === "games-zips") {
    return UPLOAD_KIND_EXTENSIONS.archive.has(safeExt);
  }
  if (safeKind === "showcase" || safeKind === "technical-images" || safeKind === "configurator" || safeKind === "component-images" || safeKind === "about-gallery" || safeKind === "machine-images" || safeKind === "games-covers") {
    return UPLOAD_KIND_EXTENSIONS.image.has(safeExt);
  }
  return isAllowedUploadExtension(safeExt);
}

function isFileSizeAllowedByExt(ext, bytes) {
  const type = resolveUploadTypeFromExt(ext);
  if (!type) return false;
  const maxBytes = Number(UPLOAD_MAX_BYTES_BY_TYPE[type] || 0);
  if (!maxBytes) return false;
  return Number(bytes || 0) <= maxBytes;
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

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args);
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => {
      reject(new Error(error.message || `${command} indisponible`));
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(stderr || `${command} a échoué (code ${code})`));
    });
  });
}

async function runCommandCandidates(candidates, args) {
  let lastError = null;
  for (const command of candidates) {
    if (!command) continue;
    try {
      await runCommand(command, args);
      return command;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Commande indisponible.");
}

function shellQuote(value) {
  const source = String(value || "");
  return `'${source.replace(/'/g, `'\"'\"'`)}'`;
}

function buildRailwayUpdateShellCommand() {
  return [
    `cd ${shellQuote(ROOT_DIR)} || { echo "Dossier introuvable."; exit 1; }`,
    "git fetch origin",
    "git add .",
    "node tools/stage-about-videos-from-content.js",
    '(git commit -m "MAJ VortexBox" || echo "Aucun changement a commit")',
    "git pull --rebase origin main",
    "git push origin HEAD:main || (git pull --rebase origin main && git push origin HEAD:main)",
  ].join(" && ");
}

function isRailwayRuntime() {
  return Boolean(
    process.env.RAILWAY_ENVIRONMENT ||
      process.env.RAILWAY_ENVIRONMENT_NAME ||
      process.env.RAILWAY_PROJECT_ID ||
      process.env.RAILWAY_SERVICE_ID
  );
}

async function walkDirRecursive(dirPath) {
  const output = [];
  let entries = [];
  try {
    entries = await fsp.readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    return output;
  }
  for (const entry of entries) {
    const abs = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const nested = await walkDirRecursive(abs);
      output.push(...nested);
      continue;
    }
    if (entry.isFile()) output.push(abs);
  }
  return output;
}

function buildGameTitleFromPath(relativePath, fallbackIndex = 1) {
  const base = path.basename(String(relativePath || ""), path.extname(String(relativePath || "")));
  const cleaned = String(base || "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return `Jeu ${fallbackIndex}`;
  return cleaned
    .split(" ")
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ""))
    .join(" ");
}

async function loadContentFileSafe() {
  try {
    const raw = await fsp.readFile(CONTENT_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function sanitizeReviewSubmission(body) {
  const payload = body && typeof body === "object" ? body : {};
  const authorRaw = String(payload.author || "").trim();
  const textRaw = String(payload.text || "").trim();
  const emailRaw = String(payload.userEmail || "").trim().toLowerCase();
  const ratingRaw = Number(payload.rating);

  const author = authorRaw
    .replace(/\s+/g, " ")
    .slice(0, 80);
  const text = textRaw
    .replace(/\s+/g, " ")
    .slice(0, 2000);
  const rating = Number.isFinite(ratingRaw) ? Math.max(1, Math.min(5, Math.round(ratingRaw))) : 5;
  const userEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw) ? emailRaw : "";

  return {
    author: author || "Client vérifié",
    text,
    rating,
    userEmail,
  };
}

async function createContentBackupIfExists() {
  try {
    await fsp.access(CONTENT_FILE, fs.constants.F_OK);
    await fsp.mkdir(CONTENT_BACKUPS_DIR, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupFile = path.join(CONTENT_BACKUPS_DIR, `site-content-${stamp}.json`);
    await fsp.copyFile(CONTENT_FILE, backupFile);
  } catch (error) {
    // Ignore backup errors to avoid blocking main save flow.
  }
}

function createContentAuditId() {
  return `audit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeContentAuditEntry(entry) {
  const raw = entry && typeof entry === "object" ? entry : {};
  return {
    id: String(raw.id || "").trim(),
    at: String(raw.at || ""),
    action: String(raw.action || "save").trim().toLowerCase() || "save",
    adminEmail: String(raw.adminEmail || "").trim().toLowerCase(),
    snapshotFile: String(raw.snapshotFile || "").trim().replace(/\\/g, "/"),
    restoredFromId: String(raw.restoredFromId || "").trim(),
    previousUpdatedAt: Math.max(0, Number(raw.previousUpdatedAt || 0)),
    nextUpdatedAt: Math.max(0, Number(raw.nextUpdatedAt || 0)),
  };
}

async function readContentAuditEntries() {
  try {
    const raw = await fsp.readFile(CONTENT_AUDIT_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed?.entries)) return [];
    return parsed.entries
      .map((entry) => normalizeContentAuditEntry(entry))
      .filter((entry) => entry.id && entry.snapshotFile);
  } catch (error) {
    return [];
  }
}

async function writeContentAuditEntries(entries) {
  const list = Array.isArray(entries) ? entries : [];
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(CONTENT_AUDIT_FILE, {
    updatedAt: new Date().toISOString(),
    entries: list,
  });
}

function sanitizeContentHistoryEntryForClient(entry) {
  return {
    id: String(entry?.id || "").trim(),
    at: String(entry?.at || ""),
    action: String(entry?.action || "save"),
    adminEmail: String(entry?.adminEmail || ""),
    restoredFromId: String(entry?.restoredFromId || ""),
    previousUpdatedAt: Math.max(0, Number(entry?.previousUpdatedAt || 0)),
    nextUpdatedAt: Math.max(0, Number(entry?.nextUpdatedAt || 0)),
  };
}

function resolveContentHistorySnapshotAbsolute(snapshotFile) {
  const cleanRelative = String(snapshotFile || "").trim().replace(/^\/+/, "").replace(/\\/g, "/");
  if (!cleanRelative) return "";
  const absolute = path.resolve(ROOT_DIR, cleanRelative);
  if (!absolute.startsWith(CONTENT_HISTORY_DIR) || !absolute.startsWith(ROOT_DIR)) return "";
  return absolute;
}

async function writeContentHistorySnapshot(content, auditId) {
  const safeId = sanitizeName(auditId || createContentAuditId(), createContentAuditId());
  const fileName = `${safeId}.json`;
  await fsp.mkdir(CONTENT_HISTORY_DIR, { recursive: true });
  const absolute = path.join(CONTENT_HISTORY_DIR, fileName);
  await writeJsonAtomic(absolute, content && typeof content === "object" ? content : {});
  return `data/content-history/${fileName}`;
}

async function pruneContentAuditEntries(entries) {
  const list = Array.isArray(entries) ? entries : [];
  const keep = list.slice(0, CONTENT_AUDIT_LIMIT);
  const remove = list.slice(CONTENT_AUDIT_LIMIT);
  for (const entry of remove) {
    const absolute = resolveContentHistorySnapshotAbsolute(entry?.snapshotFile);
    if (!absolute) continue;
    await fsp.rm(absolute, { force: true }).catch(() => {});
  }
  return keep;
}

async function recordContentAuditEntry(options = {}) {
  const action = String(options.action || "save").trim().toLowerCase() || "save";
  const adminEmail = String(options.adminEmail || "").trim().toLowerCase();
  const previousUpdatedAt = Math.max(0, Number(options.previousUpdatedAt || 0));
  const nextUpdatedAt = Math.max(0, Number(options.nextUpdatedAt || 0));
  const restoredFromId = String(options.restoredFromId || "").trim();
  const snapshotContent = options.snapshotContent && typeof options.snapshotContent === "object" ? options.snapshotContent : {};
  const id = createContentAuditId();
  const snapshotFile = await writeContentHistorySnapshot(snapshotContent, id);
  const entry = normalizeContentAuditEntry({
    id,
    at: new Date().toISOString(),
    action,
    adminEmail,
    snapshotFile,
    restoredFromId,
    previousUpdatedAt,
    nextUpdatedAt,
  });
  const existing = await readContentAuditEntries();
  const nextEntries = await pruneContentAuditEntries([entry, ...existing]);
  await writeContentAuditEntries(nextEntries);
  return entry;
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
  if (!/^[a-z0-9+/=]+$/i.test(base64)) return null;
  const buffer = Buffer.from(base64, "base64");
  if (!buffer || !buffer.length) return null;
  return { mime, buffer };
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

function hasJsonContentType(req) {
  const contentType = String(req.headers["content-type"] || "").toLowerCase();
  return contentType.includes("application/json");
}

function shouldPreserveUploadName(kind, originalName) {
  const safeKind = String(kind || "").trim().toLowerCase();
  const safeName = String(originalName || "").trim().toLowerCase();
  if (safeKind !== "configurator") return false;
  return /^configurator-(1|2|3|4)\.webp$/.test(safeName);
}

function buildPremiumPhotoSvg(dataUrl) {
  const safeDataUrl = String(dataUrl || "").trim();
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">',
    `<image href="${safeDataUrl}" x="0" y="0" width="1600" height="900" preserveAspectRatio="xMidYMid slice" />`,
    "</svg>",
  ].join("");
}

function escapeXmlAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizePremiumImageHref(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^data:image\//i.test(raw)) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;
  const noLead = raw.replace(/^\/+/, "");
  if (noLead.startsWith("uploads/")) return `/${noLead}`;
  return raw;
}

async function resolvePremiumImageDataHref(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^data:image\//i.test(raw)) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;
  const noLead = raw.replace(/^\/+/, "");
  if (!noLead.startsWith("uploads/")) return raw;

  const absolute = path.resolve(ROOT_DIR, noLead);
  if (!absolute.startsWith(UPLOADS_DIR) || !absolute.startsWith(ROOT_DIR)) return raw;
  try {
    const buffer = await fsp.readFile(absolute);
    const ext = String(path.extname(absolute) || "").toLowerCase();
    const mime = MIME_TYPES[ext] || "application/octet-stream";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch (error) {
    return raw;
  }
}

async function syncPremiumConfiguratorVisualSources(configurator) {
  if (!configurator || typeof configurator !== "object") return;
  const incomingVisual = Array.isArray(configurator.visualImages) ? configurator.visualImages : [];
  const nextVisual = getConfigVisualSlotIndexes().map((index) => String(incomingVisual[index] || "").trim());

  for (let index = 0; index < CONFIG_VISUAL_SLOT_COUNT; index += 1) {
    const sourceValue = String(nextVisual[index] || "").trim();
    if (!sourceValue) continue;
    const premiumFileName = `vortex-premium-photo-${index + 1}.svg`;
    const premiumFilePattern = new RegExp(`^${premiumFileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");

    // Guard: never rebuild a premium file from itself (self-reference loop).
    // Keep original visual source unchanged for rendering.
    if (premiumFilePattern.test(sourceValue)) {
      const fallbackUpload = `uploads/configurator/configurator-${index + 1}.webp`;
      const fallbackUploadAbs = path.resolve(ROOT_DIR, fallbackUpload);
      if (fallbackUploadAbs.startsWith(UPLOADS_DIR) && fs.existsSync(fallbackUploadAbs)) {
        nextVisual[index] = fallbackUpload;
      } else {
        const fallbackSvg = `vortex-showcase-${index + 1}.svg`;
        if (fs.existsSync(path.join(ROOT_DIR, fallbackSvg))) {
          nextVisual[index] = fallbackSvg;
        }
      }
      continue;
    }

    const normalizedHref = normalizePremiumImageHref(sourceValue);
    const href = await resolvePremiumImageDataHref(normalizedHref);
    if (!href) continue;
    const absolute = path.join(ROOT_DIR, premiumFileName);
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">',
      `<image href="${escapeXmlAttribute(href)}" x="0" y="0" width="1600" height="900" preserveAspectRatio="xMidYMid slice" />`,
      "</svg>",
    ].join("");
    await fsp.writeFile(absolute, svg, "utf8");
  }

  configurator.visualImages = nextVisual;
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
  if (!isAllowedUploadKind(kind)) {
    sendJson(res, 400, { ok: false, error: "Dossier upload non autorisé." });
    return;
  }
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
  if (!isExtensionAllowedForKind(kind, ext)) {
    sendJson(res, 400, { ok: false, error: "Extension non autorisée pour ce dossier." });
    return;
  }
  if (!isFileSizeAllowedByExt(ext, parsed.buffer.length)) {
    sendJson(res, 413, { ok: false, error: "Fichier trop volumineux pour ce type." });
    return;
  }
  const keepOriginalName = shouldPreserveUploadName(kind, originalName);
  const base = path.basename(originalName, path.extname(originalName)) || "file";
  const finalName = keepOriginalName
    ? sanitizeName(originalName, `configurator-1${ext}`)
    : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sanitizeName(base, "file")}${ext}`;
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
  if (!isAllowedUploadKind(kind)) {
    sendJson(res, 400, { ok: false, error: "Dossier upload non autorisé." });
    return;
  }
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
  if (!isExtensionAllowedForKind(kind, ext)) {
    setUploadStatus(uploadId, {
      phase: "error",
      progress: 100,
      error: "Extension non autorisée pour ce dossier.",
      message: "Upload refusé",
    });
    sendJson(res, 400, { ok: false, error: "Extension non autorisée pour ce dossier." });
    return;
  }
  const keepOriginalName = shouldPreserveUploadName(kind, originalName);
  const base = path.basename(originalName, path.extname(originalName)) || "file";
  const finalName = keepOriginalName
    ? sanitizeName(originalName, `configurator-1${ext}`)
    : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sanitizeName(base, "file")}${ext}`;
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
        if (!isFileSizeAllowedByExt(ext, bytes)) {
          fail(new Error("Fichier trop volumineux pour ce type."));
          req.destroy();
          return;
        }
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

async function handleListUploads(url, res) {
  const kind = sanitizeName(url.searchParams.get("kind") || "", "");
  if (!isAllowedUploadKind(kind)) {
    sendJson(res, 400, { ok: false, error: "Dossier upload non autorisé." });
    return;
  }
  const type = String(url.searchParams.get("type") || "image").trim().toLowerCase();
  const folder = path.join(UPLOADS_DIR, kind);
  try {
    await fsp.mkdir(folder, { recursive: true });
    const entries = await fsp.readdir(folder, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (type === "image" && !UPLOAD_KIND_EXTENSIONS.image.has(ext)) continue;
      if (type === "video" && !UPLOAD_KIND_EXTENSIONS.video.has(ext)) continue;
      if (type === "doc" && !UPLOAD_KIND_EXTENSIONS.doc.has(ext)) continue;
      if (type === "archive" && !UPLOAD_KIND_EXTENSIONS.archive.has(ext)) continue;
      const absolute = path.join(folder, entry.name);
      let stat;
      try {
        stat = await fsp.stat(absolute);
      } catch (error) {
        continue;
      }
      files.push({
        name: entry.name,
        path: `uploads/${kind}/${entry.name}`.replace(/\\/g, "/"),
        size: Number(stat.size || 0),
        updatedAt: stat.mtimeMs || 0,
      });
    }
    files.sort((a, b) => Number(b.updatedAt || 0) - Number(a.updatedAt || 0));
    sendJson(res, 200, { ok: true, kind, files });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: "Impossible de lire les fichiers du dossier." });
  }
}

async function handleSaveContent(req, res) {
  const body = await readJsonBody(req);
  const content = body && typeof body.content === "object" ? body.content : null;
  if (!content) {
    sendJson(res, 400, { error: "Contenu manquant." });
    return;
  }
  const incomingUpdatedAt = Math.max(0, Number(content?._updatedAt || 0));
  const currentContent = await loadContentFileSafe();
  const currentUpdatedAt = Math.max(0, Number(currentContent?._updatedAt || 0));

  // Guard against out-of-order writes: an older client snapshot must never
  // overwrite a newer disk snapshot if requests resolve in the wrong order.
  if (incomingUpdatedAt > 0 && currentUpdatedAt > 0 && incomingUpdatedAt < currentUpdatedAt) {
    sendJson(res, 200, {
      ok: true,
      ignoredStaleWrite: true,
      currentUpdatedAt,
      incomingUpdatedAt,
      file: "data/site-content.json",
    });
    return;
  }

  await fsp.mkdir(DATA_DIR, { recursive: true });
  await createContentBackupIfExists();
  const isDefaultImageValue = (value) => {
    const raw = String(value || "").trim().toLowerCase();
    if (!raw) return true;
    return (
      /^vortex-premium-photo-[0-9]+\.svg$/i.test(raw) ||
      /^vortex-showcase-[0-9]+\.svg$/i.test(raw) ||
      /^vortex-tech-verso\.svg$/i.test(raw)
    );
  };
  const isCustomImageValue = (value) => {
    const raw = String(value || "").trim();
    if (!raw) return false;
    if (isDefaultImageValue(raw)) return false;
    return (
      raw.startsWith("uploads/") ||
      raw.startsWith("/uploads/") ||
      /^https?:\/\//i.test(raw) ||
      /^data:image\//i.test(raw)
    );
  };
  const incomingContent = content && typeof content === "object" ? { ...content } : {};

  if (Array.isArray(incomingContent.showcase) && Array.isArray(currentContent?.showcase)) {
    incomingContent.showcase = incomingContent.showcase.map((item, index) => {
      const nextItem = item && typeof item === "object" ? { ...item } : {};
      const incomingImage = String(nextItem.image || "").trim();
      const currentImage = String(currentContent.showcase?.[index]?.image || "").trim();
      if ((isDefaultImageValue(incomingImage) || !incomingImage) && isCustomImageValue(currentImage)) {
        nextItem.image = currentImage;
      }
      return nextItem;
    });
  }

  if (Array.isArray(incomingContent.technicalSheets) && Array.isArray(currentContent?.technicalSheets)) {
    incomingContent.technicalSheets = incomingContent.technicalSheets.map((item, index) => {
      const nextItem = item && typeof item === "object" ? { ...item } : {};
      const incomingImage = String(nextItem.image || "").trim();
      const currentImage = String(currentContent.technicalSheets?.[index]?.image || "").trim();
      if ((isDefaultImageValue(incomingImage) || !incomingImage) && isCustomImageValue(currentImage)) {
        nextItem.image = currentImage;
      }
      return nextItem;
    });
  }

  if (Array.isArray(incomingContent.gamesCatalog) && Array.isArray(currentContent?.gamesCatalog)) {
    incomingContent.gamesCatalog = incomingContent.gamesCatalog.map((item, index) => {
      const nextItem = item && typeof item === "object" ? { ...item } : {};
      const incomingImage = String(nextItem.image || "").trim();
      const currentImage = String(currentContent.gamesCatalog?.[index]?.image || "").trim();
      if ((!incomingImage || isDefaultImageValue(incomingImage)) && isCustomImageValue(currentImage)) {
        nextItem.image = currentImage;
      }
      return nextItem;
    });
  }

  if (Array.isArray(incomingContent.aboutVideos) && Array.isArray(currentContent?.aboutVideos)) {
    incomingContent.aboutVideos = incomingContent.aboutVideos.map((item, index) => {
      const nextItem = item && typeof item === "object" ? { ...item } : {};
      const incomingVideo = String(nextItem.videoData || "").trim();
      const currentVideo = String(currentContent.aboutVideos?.[index]?.videoData || "").trim();
      if (!incomingVideo && currentVideo) {
        nextItem.videoData = currentVideo;
      }
      const incomingWebm = String(nextItem.videoWebm || "").trim();
      const currentWebm = String(currentContent.aboutVideos?.[index]?.videoWebm || "").trim();
      if (!incomingWebm && currentWebm) {
        nextItem.videoWebm = currentWebm;
      }
      return nextItem;
    });
  }

  if (incomingContent.configurator && typeof incomingContent.configurator === "object" && currentContent?.configurator) {
    const nextConfig = { ...incomingContent.configurator };
    const currentConfig = currentContent.configurator && typeof currentContent.configurator === "object"
      ? currentContent.configurator
      : {};

    const preserveImageField = (field) => {
      const incoming = String(nextConfig[field] || "").trim();
      const current = String(currentConfig[field] || "").trim();
      if ((isDefaultImageValue(incoming) || !incoming) && isCustomImageValue(current)) {
        nextConfig[field] = current;
      }
    };

    if (Array.isArray(nextConfig.visualImages) && Array.isArray(currentConfig.visualImages)) {
      nextConfig.visualImages = getConfigVisualSlotIndexes().map((index) => {
        const incoming = String(nextConfig.visualImages[index] || "").trim();
        const current = String(currentConfig.visualImages[index] || "").trim();
        if ((isDefaultImageValue(incoming) || !incoming) && isCustomImageValue(current)) return current;
        return incoming;
      });
    } else if (Array.isArray(currentConfig.visualImages)) {
      nextConfig.visualImages = currentConfig.visualImages.slice(0, CONFIG_VISUAL_SLOT_COUNT);
    }

    preserveImageField("categoryFillImage");
    preserveImageField("categoryFillImageSecondary");
    preserveImageField("summaryTelegramImage");

    if (!String(nextConfig.summaryTelegramTitle || "").trim() && String(currentConfig.summaryTelegramTitle || "").trim()) {
      nextConfig.summaryTelegramTitle = String(currentConfig.summaryTelegramTitle || "");
    }

    if (Array.isArray(nextConfig.summaryExtraImages) && Array.isArray(currentConfig.summaryExtraImages)) {
      nextConfig.summaryExtraImages = [0, 1].map((index) => {
        const incoming = String(nextConfig.summaryExtraImages[index] || "").trim();
        const current = String(currentConfig.summaryExtraImages[index] || "").trim();
        if ((isDefaultImageValue(incoming) || !incoming) && isCustomImageValue(current)) return current;
        return incoming;
      });
    } else if (Array.isArray(currentConfig.summaryExtraImages)) {
      nextConfig.summaryExtraImages = currentConfig.summaryExtraImages.slice(0, 2);
    }

    if (Array.isArray(currentConfig.components)) {
      if (!Array.isArray(nextConfig.components) || !nextConfig.components.length) {
        nextConfig.components = currentConfig.components;
      } else {
        const findCurrentComponent = (incomingComponent, index) => {
          const incomingId = String(incomingComponent?.id || "").trim();
          const incomingLabel = String(incomingComponent?.label || "").trim().toLowerCase();
          if (incomingId) {
            const byId = currentConfig.components.find(
              (item) => String(item?.id || "").trim() === incomingId
            );
            if (byId) return byId;
          }
          if (incomingLabel) {
            const byLabel = currentConfig.components.find(
              (item) => String(item?.label || "").trim().toLowerCase() === incomingLabel
            );
            if (byLabel) return byLabel;
          }
          return currentConfig.components[index] && typeof currentConfig.components[index] === "object"
            ? currentConfig.components[index]
            : {};
        };

        nextConfig.components = nextConfig.components.map((component, cIndex) => {
          const nextComponent = component && typeof component === "object" ? { ...component } : {};
          const currentComponent = findCurrentComponent(nextComponent, cIndex);

          if (!String(nextComponent.label || "").trim() && String(currentComponent?.label || "").trim()) {
            nextComponent.label = String(currentComponent.label || "");
          }
          if (!String(nextComponent.id || "").trim() && String(currentComponent?.id || "").trim()) {
            nextComponent.id = String(currentComponent.id || "");
          }

          const currentOptions = Array.isArray(currentComponent?.options) ? currentComponent.options : [];
          if (!Array.isArray(nextComponent.options) || !nextComponent.options.length) {
            nextComponent.options = currentOptions;
            return nextComponent;
          }

          nextComponent.options = nextComponent.options.map((option, oIndex) => {
            const nextOption = option && typeof option === "object" ? { ...option } : {};
            const incomingName = String(nextOption.name || "").trim().toLowerCase();
            const currentOption =
              currentOptions.find(
                (item) =>
                  incomingName &&
                  String(item?.name || "").trim().toLowerCase() === incomingName
              ) ||
              (currentOptions[oIndex] && typeof currentOptions[oIndex] === "object" ? currentOptions[oIndex] : {});

            if (!String(nextOption.name || "").trim() && String(currentOption?.name || "").trim()) {
              nextOption.name = String(currentOption.name || "");
            }
            if (!String(nextOption.description || "").trim() && String(currentOption?.description || "").trim()) {
              nextOption.description = String(currentOption.description || "");
            }
            if (!String(nextOption.badge || "").trim() && String(currentOption?.badge || "").trim()) {
              nextOption.badge = String(currentOption.badge || "");
            }
            const incomingImage = String(nextOption.image || "").trim();
            const currentImage = String(currentOption?.image || "").trim();
            if ((isDefaultImageValue(incomingImage) || !incomingImage) && isCustomImageValue(currentImage)) {
              nextOption.image = currentImage;
            }
            return nextOption;
          });

          return nextComponent;
        });
      }
    }

    if (Array.isArray(currentConfig.services)) {
      if (!Array.isArray(nextConfig.services) || !nextConfig.services.length) {
        nextConfig.services = currentConfig.services;
      } else if (nextConfig.services.length === currentConfig.services.length) {
        nextConfig.services = nextConfig.services.map((service, sIndex) => {
          const nextService = service && typeof service === "object" ? { ...service } : {};
          const currentService = currentConfig.services[sIndex] && typeof currentConfig.services[sIndex] === "object"
            ? currentConfig.services[sIndex]
            : {};
          if (!String(nextService.label || "").trim() && String(currentService.label || "").trim()) {
            nextService.label = String(currentService.label || "");
          }
          if (!String(nextService.description || "").trim() && String(currentService.description || "").trim()) {
            nextService.description = String(currentService.description || "");
          }
          return nextService;
        });
      }
    }

    incomingContent.configurator = nextConfig;
  }

  const nextContent = {
    ...incomingContent,
    _updatedAt: incomingUpdatedAt > 0 ? incomingUpdatedAt : Date.now(),
  };
  if (nextContent.configurator && typeof nextContent.configurator === "object") {
    await syncPremiumConfiguratorVisualSources(nextContent.configurator);
  }
  await writeJsonAtomic(CONTENT_FILE, nextContent);
  const session = getAdminSession(req);
  const auditEntry = await recordContentAuditEntry({
    action: "save",
    adminEmail: session?.email || "",
    previousUpdatedAt: currentUpdatedAt,
    nextUpdatedAt: Math.max(0, Number(nextContent?._updatedAt || 0)),
    snapshotContent: nextContent,
  });
  sendJson(res, 200, {
    ok: true,
    file: "data/site-content.json",
    auditEntry: sanitizeContentHistoryEntryForClient(auditEntry),
  });
}

async function handleSubmitReview(req, res) {
  const body = await readJsonBody(req);
  const incoming = sanitizeReviewSubmission(body);
  if (incoming.text.length < 8) {
    sendJson(res, 400, { ok: false, error: "Votre avis doit contenir au moins 8 caractères." });
    return;
  }

  const content = await loadContentFileSafe();
  const nextContent = content && typeof content === "object" ? { ...content } : {};
  const reviews = Array.isArray(nextContent.reviews) ? nextContent.reviews.slice() : [];
  const review = {
    author: incoming.author,
    rating: incoming.rating,
    text: incoming.text,
    approved: false,
    userEmail: incoming.userEmail,
    createdAt: new Date().toISOString(),
  };

  reviews.push(review);
  nextContent.reviews = reviews.slice(-1000);
  nextContent._updatedAt = Date.now();

  await fsp.mkdir(DATA_DIR, { recursive: true });
  await createContentBackupIfExists();
  await writeJsonAtomic(CONTENT_FILE, nextContent);
  sendJson(res, 200, { ok: true, review, count: nextContent.reviews.length, file: "data/site-content.json" });
}

async function handleSaveTechnicalSheetImage(req, res) {
  const body = await readJsonBody(req);
  const indexRaw = Number(body?.index);
  const image = String(body?.image || "").trim().replace(/\\/g, "/");
  if (!Number.isInteger(indexRaw) || indexRaw < 0 || indexRaw > 200) {
    sendJson(res, 400, { ok: false, error: "Index de fiche invalide." });
    return;
  }
  if (!image) {
    sendJson(res, 400, { ok: false, error: "Image de fiche manquante." });
    return;
  }

  const content = await loadContentFileSafe();
  const nextContent = content && typeof content === "object" ? { ...content } : {};
  const currentSheets = Array.isArray(nextContent.technicalSheets) ? nextContent.technicalSheets.slice() : [];

  while (currentSheets.length <= indexRaw) {
    currentSheets.push({
      title: `Fiche Technique ${currentSheets.length + 1}`,
      image: "",
      fileName: "",
      fileData: "",
      fileMime: "application/pdf",
      fileKey: "",
    });
  }

  const current = currentSheets[indexRaw] && typeof currentSheets[indexRaw] === "object" ? currentSheets[indexRaw] : {};
  currentSheets[indexRaw] = {
    title: String(current.title || `Fiche Technique ${indexRaw + 1}`).trim() || `Fiche Technique ${indexRaw + 1}`,
    image,
    fileName: typeof current.fileName === "string" ? current.fileName : "",
    fileData: typeof current.fileData === "string" ? current.fileData : "",
    fileMime: typeof current.fileMime === "string" ? current.fileMime : "application/pdf",
    fileKey: typeof current.fileKey === "string" ? current.fileKey : "",
  };

  nextContent.technicalSheets = currentSheets;
  nextContent._updatedAt = Date.now();
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(CONTENT_FILE, nextContent);
  sendJson(res, 200, { ok: true, index: indexRaw, image });
}

async function handleSaveConfiguratorMedia(req, res) {
  const body = await readJsonBody(req);
  const incoming = body && typeof body === "object" ? body : {};
  const nextPayload = incoming.configurator && typeof incoming.configurator === "object"
    ? incoming.configurator
    : {};

  const isSafeMediaPath = (value) => {
    const raw = String(value || "").trim();
    if (!raw) return true;
    if (raw.startsWith("uploads/")) return true;
    if (raw.startsWith("/uploads/")) return true;
    if (/^vortex-premium-photo-(1|2|3|4)\.svg$/i.test(raw)) return true;
    if (/^vortex-showcase-[0-9]+\.svg$/i.test(raw)) return true;
    if (/^vortex-tech-verso\.svg$/i.test(raw)) return true;
    if (/^https?:\/\//i.test(raw)) return true;
    return false;
  };

  const content = await loadContentFileSafe();
  const nextContent = content && typeof content === "object" ? { ...content } : {};
  const currentConfig =
    nextContent.configurator && typeof nextContent.configurator === "object"
      ? { ...nextContent.configurator }
      : {};

  const incomingVisual = Array.isArray(nextPayload.visualImages) ? nextPayload.visualImages : [];
  currentConfig.visualImages = getConfigVisualSlotIndexes().map((index) => {
    const value = String(incomingVisual[index] || "").trim();
    return isSafeMediaPath(value) ? value : "";
  });

  const assignField = (key) => {
    const value = String(nextPayload[key] || "").trim();
    currentConfig[key] = isSafeMediaPath(value) ? value : "";
  };
  assignField("categoryFillImage");
  assignField("categoryFillImageSecondary");
  assignField("summaryTelegramImage");

  const incomingExtra = Array.isArray(nextPayload.summaryExtraImages) ? nextPayload.summaryExtraImages : [];
  currentConfig.summaryExtraImages = [0, 1].map((index) => {
    const value = String(incomingExtra[index] || "").trim();
    return isSafeMediaPath(value) ? value : "";
  });

  const incomingComponents = Array.isArray(nextPayload.components) ? nextPayload.components : [];
  const currentComponents = Array.isArray(currentConfig.components) ? currentConfig.components : [];
  if (incomingComponents.length) {
    const sourceComponents = currentComponents.length ? currentComponents : incomingComponents;
    currentConfig.components = sourceComponents.map((component, cIndex) => {
      const incomingComponent =
        incomingComponents.find(
          (candidate) =>
            String(candidate?.id || "").trim() &&
            String(candidate?.id || "").trim() === String(component?.id || "").trim()
        ) || incomingComponents[cIndex];
      const baseComponent = component && typeof component === "object" ? component : {};
      if (!incomingComponent || typeof incomingComponent !== "object") return baseComponent;
      const incomingOptions = Array.isArray(incomingComponent.options) ? incomingComponent.options : [];
      const currentOptions = Array.isArray(baseComponent?.options) ? baseComponent.options : [];
      const sourceOptions = currentOptions.length ? currentOptions : incomingOptions;
      const mergedOptions = sourceOptions.map((option, oIndex) => {
        const baseOption = option && typeof option === "object" ? option : {};
        const incomingOption =
          incomingOptions.find(
            (candidate) =>
              String(candidate?.name || "").trim() &&
              String(candidate?.name || "").trim() === String(baseOption?.name || "").trim()
          ) || incomingOptions[oIndex];
        if (!incomingOption || typeof incomingOption !== "object") return baseOption;
        const incomingImage = String(incomingOption.image || "").trim();
        if (!incomingImage || !isSafeMediaPath(incomingImage)) return baseOption;
        return {
          ...baseOption,
          image: incomingImage,
        };
      });
      return {
        ...baseComponent,
        options: mergedOptions,
      };
    });
  }

  nextContent.configurator = currentConfig;
  nextContent._updatedAt = Date.now();
  await syncPremiumConfiguratorVisualSources(nextContent.configurator);
  await writeJsonAtomic(CONTENT_FILE, nextContent);
  sendJson(res, 200, { ok: true, file: "data/site-content.json" });
}

async function handleSavePremiumPhotoSource(req, res) {
  const body = await readJsonBody(req);
  const slot = Number(body?.slot || 0);
  if (!Number.isInteger(slot) || slot < 1 || slot > CONFIG_VISUAL_SLOT_COUNT) {
    sendJson(res, 400, { ok: false, error: `Slot premium invalide (1..${CONFIG_VISUAL_SLOT_COUNT}).` });
    return;
  }
  const parsed = parseDataUrl(body?.dataUrl);
  if (!parsed || !String(parsed.mime || "").toLowerCase().startsWith("image/")) {
    sendJson(res, 400, { ok: false, error: "Image invalide." });
    return;
  }
  if (parsed.buffer.length > 25 * 1024 * 1024) {
    sendJson(res, 413, { ok: false, error: "Image trop lourde (max 25 MB)." });
    return;
  }

  const fileName = `vortex-premium-photo-${slot}.svg`;
  const absolute = path.join(ROOT_DIR, fileName);
  const svg = buildPremiumPhotoSvg(String(body?.dataUrl || "").trim());
  await fsp.writeFile(absolute, svg, "utf8");
  sendJson(res, 200, { ok: true, path: fileName });
}

async function handleDeleteUpload(req, res) {
  const body = await readJsonBody(req);
  const rawPath = String(body?.path || "").trim().replace(/\\/g, "/");
  if (!rawPath) {
    sendJson(res, 400, { ok: false, error: "Chemin fichier manquant." });
    return;
  }
  const relativePath = rawPath.replace(/^\/+/, "");
  if (!relativePath.startsWith("uploads/")) {
    sendJson(res, 400, { ok: false, error: "Chemin non autorisé." });
    return;
  }

  const absolute = path.resolve(ROOT_DIR, relativePath);
  if (!absolute.startsWith(UPLOADS_DIR) || !absolute.startsWith(ROOT_DIR)) {
    sendJson(res, 400, { ok: false, error: "Chemin non autorisé." });
    return;
  }

  try {
    const stat = await fsp.stat(absolute);
    if (!stat.isFile()) {
      sendJson(res, 400, { ok: false, error: "Le chemin ne cible pas un fichier." });
      return;
    }
    await fsp.unlink(absolute);
    sendJson(res, 200, { ok: true, deleted: true, path: relativePath });
  } catch (error) {
    if (error && error.code === "ENOENT") {
      sendJson(res, 200, { ok: true, deleted: false, path: relativePath });
      return;
    }
    sendJson(res, 500, { ok: false, error: "Suppression fichier impossible." });
  }
}

async function extractGamesArchiveToDir(archiveAbsolute, destinationDir) {
  const extension = String(path.extname(archiveAbsolute) || "").toLowerCase();
  if (extension === ".zip") {
    await runCommandCandidates(
      [
        "unzip",
        "/usr/bin/unzip",
      ],
      ["-oq", archiveAbsolute, "-d", destinationDir]
    );
    return;
  }
  if (extension === ".rar") {
    // Prefer unar on macOS, fallback to bsdtar if available.
    try {
      await runCommandCandidates(
        [
          "unar",
          "/opt/homebrew/bin/unar",
          "/usr/local/bin/unar",
        ],
        ["-q", "-f", "-o", destinationDir, archiveAbsolute]
      );
      return;
    } catch (error) {}
    try {
      await runCommandCandidates(
        [
          "7z",
          "/opt/homebrew/bin/7z",
          "/opt/homebrew/bin/7zz",
          "/usr/local/bin/7z",
        ],
        ["x", "-y", `-o${destinationDir}`, archiveAbsolute]
      );
      return;
    } catch (error) {}
    await runCommandCandidates(
      [
        "bsdtar",
        "/usr/bin/bsdtar",
      ],
      ["-xf", archiveAbsolute, "-C", destinationDir]
    );
    return;
  }
  throw new Error("Archive non supportée.");
}

async function handleImportGamesCoversZip(req, res) {
  const body = await readJsonBody(req);
  const rawZipPath = String(body?.zipPath || "").trim().replace(/\\/g, "/");
  const mode = String(body?.mode || "replace").trim().toLowerCase();
  const shouldReplace = mode !== "append";
  if (!rawZipPath) {
    sendJson(res, 400, { ok: false, error: "Fichier archive manquant (.zip/.rar)." });
    return;
  }

  const relativeZipPath = rawZipPath.replace(/^\/+/, "");
  if (!relativeZipPath.startsWith("uploads/games-zips/") || !/\.(zip|rar)$/i.test(relativeZipPath)) {
    sendJson(res, 400, { ok: false, error: "Chemin archive invalide (.zip/.rar)." });
    return;
  }

  const zipAbsolute = path.resolve(ROOT_DIR, relativeZipPath);
  if (!zipAbsolute.startsWith(UPLOADS_DIR) || !zipAbsolute.startsWith(ROOT_DIR)) {
    sendJson(res, 400, { ok: false, error: "Chemin archive non autorisé." });
    return;
  }
  if (!fs.existsSync(zipAbsolute)) {
    sendJson(res, 404, { ok: false, error: "Archive introuvable sur le disque." });
    return;
  }

  const coversDir = path.join(UPLOADS_DIR, "games-covers");
  await fsp.mkdir(coversDir, { recursive: true });
  const importTempDir = await fsp.mkdtemp(path.join(os.tmpdir(), "vortexbox-games-import-"));

  try {
    await extractGamesArchiveToDir(zipAbsolute, importTempDir);
  } catch (error) {
    await fsp.rm(importTempDir, { recursive: true, force: true }).catch(() => {});
    sendJson(
      res,
      500,
      {
        ok: false,
        error:
          String(error?.message || "").trim() ||
          "Extraction archive impossible (installez unzip/unar/bsdtar, ou vérifiez le fichier).",
      }
    );
    return;
  }

  let importedCatalog = [];
  try {
    const allFiles = await walkDirRecursive(importTempDir);
    const validFiles = allFiles
      .filter((abs) => /\.(png|jpe?g|webp|gif|heic|heif|avif|bmp|jfif)$/i.test(abs))
      .sort((a, b) => a.localeCompare(b, "fr"));

    if (!validFiles.length) {
      sendJson(res, 400, { ok: false, error: "Aucune image valide trouvée dans le ZIP." });
      return;
    }

    importedCatalog = [];
    for (let index = 0; index < validFiles.length; index += 1) {
      const abs = validFiles[index];
      const ext = String(path.extname(abs) || "").toLowerCase();
      const sourceBase = sanitizeName(path.basename(abs, ext), `game-${index + 1}`);
      const finalName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sourceBase}${ext}`;
      const targetAbs = path.join(coversDir, finalName);
      await fsp.copyFile(abs, targetAbs);
      importedCatalog.push({
        title: buildGameTitleFromPath(path.relative(importTempDir, abs), index + 1),
        image: `uploads/games-covers/${finalName}`.replace(/\\/g, "/"),
        info: "",
      });
    }
  } finally {
    await fsp.rm(importTempDir, { recursive: true, force: true }).catch(() => {});
  }

  const currentContent = await loadContentFileSafe();
  const existingCatalog = normalizeGamesCatalogForApi(currentContent?.gamesCatalog).map((item, index) => ({
    title: String(item?.title || `Jeu ${index + 1}`).trim() || `Jeu ${index + 1}`,
    image: String(item?.image || "").trim().replace(/\\/g, "/"),
    info: String(item?.info || "").trim(),
  }));

  const nextCatalog = shouldReplace
    ? importedCatalog
    : [...existingCatalog, ...importedCatalog];

  const nextContent = {
    ...(currentContent && typeof currentContent === "object" ? currentContent : {}),
    gamesCatalog: nextCatalog,
  };
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(CONTENT_FILE, nextContent);

  sendJson(res, 200, {
    ok: true,
    imported: importedCatalog.length,
    total: nextCatalog.length,
    mode: shouldReplace ? "replace" : "append",
  });
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

async function handleGetContentHistory(res) {
  const entries = await readContentAuditEntries();
  sendJson(res, 200, {
    ok: true,
    entries: entries.map((entry) => sanitizeContentHistoryEntryForClient(entry)),
  });
}

async function handleRollbackContentHistory(req, res) {
  const body = await readJsonBody(req);
  const entryId = String(body?.id || "").trim();
  if (!entryId) {
    sendJson(res, 400, { ok: false, error: "Identifiant historique manquant." });
    return;
  }
  const entries = await readContentAuditEntries();
  const target = entries.find((entry) => String(entry?.id || "") === entryId);
  if (!target) {
    sendJson(res, 404, { ok: false, error: "Version introuvable." });
    return;
  }
  const snapshotAbsolute = resolveContentHistorySnapshotAbsolute(target.snapshotFile);
  if (!snapshotAbsolute) {
    sendJson(res, 400, { ok: false, error: "Snapshot historique invalide." });
    return;
  }
  let snapshotContent;
  try {
    const raw = await fsp.readFile(snapshotAbsolute, "utf8");
    const parsed = JSON.parse(raw);
    snapshotContent = parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    sendJson(res, 404, { ok: false, error: "Snapshot historique introuvable." });
    return;
  }

  const currentContent = await loadContentFileSafe();
  const currentUpdatedAt = Math.max(0, Number(currentContent?._updatedAt || 0));
  const restoredContent = {
    ...snapshotContent,
    _updatedAt: Date.now(),
  };

  await fsp.mkdir(DATA_DIR, { recursive: true });
  await createContentBackupIfExists();
  await writeJsonAtomic(CONTENT_FILE, restoredContent);

  const session = getAdminSession(req);
  const auditEntry = await recordContentAuditEntry({
    action: "rollback",
    adminEmail: session?.email || "",
    restoredFromId: entryId,
    previousUpdatedAt: currentUpdatedAt,
    nextUpdatedAt: Math.max(0, Number(restoredContent?._updatedAt || 0)),
    snapshotContent: restoredContent,
  });

  sendJson(res, 200, {
    ok: true,
    restoredFromId: entryId,
    entry: sanitizeContentHistoryEntryForClient(auditEntry),
    file: "data/site-content.json",
  });
}

async function handleDeleteContentHistoryEntry(req, res) {
  const body = await readJsonBody(req);
  const entryId = String(body?.id || "").trim();
  if (!entryId) {
    sendJson(res, 400, { ok: false, error: "Identifiant historique manquant." });
    return;
  }
  const entries = await readContentAuditEntries();
  const target = entries.find((entry) => String(entry?.id || "") === entryId);
  if (!target) {
    sendJson(res, 404, { ok: false, error: "Version introuvable." });
    return;
  }
  const nextEntries = entries.filter((entry) => String(entry?.id || "") !== entryId);
  await writeContentAuditEntries(nextEntries);
  const snapshotAbsolute = resolveContentHistorySnapshotAbsolute(target.snapshotFile);
  if (snapshotAbsolute) {
    await fsp.rm(snapshotAbsolute, { force: true }).catch(() => {});
  }
  sendJson(res, 200, { ok: true, deleted: true, id: entryId });
}

async function handleClearContentHistory(res) {
  const entries = await readContentAuditEntries();
  await writeContentAuditEntries([]);
  for (const entry of entries) {
    const snapshotAbsolute = resolveContentHistorySnapshotAbsolute(entry?.snapshotFile);
    if (!snapshotAbsolute) continue;
    await fsp.rm(snapshotAbsolute, { force: true }).catch(() => {});
  }
  sendJson(res, 200, { ok: true, cleared: true });
}

function stripSensitiveFieldsDeep(value) {
  if (Array.isArray(value)) return value.map((item) => stripSensitiveFieldsDeep(item));
  if (!value || typeof value !== "object") return value;
  const blockedKey = (key) =>
    /(password|secret|token|session|api[_-]?key|smtp|mail[_-]?pass|auth[_-]?code|reset[_-]?code)/i.test(
      String(key || "")
    );
  const output = {};
  for (const [key, entry] of Object.entries(value)) {
    if (blockedKey(key)) continue;
    output[key] = stripSensitiveFieldsDeep(entry);
  }
  return output;
}

function sanitizePublicContent(content) {
  const base = content && typeof content === "object" ? content : {};
  const sanitized = stripSensitiveFieldsDeep(base);
  [
    "userState",
    "users",
    "userLog",
    "admin",
    "crm",
    "stock",
    "kpis",
    "processus",
    "railway",
    "backups",
    "internal",
  ].forEach((key) => {
    if (key in sanitized) delete sanitized[key];
  });
  return sanitized;
}

async function handleGetPublicContent(res) {
  try {
    const raw = await fsp.readFile(CONTENT_FILE, "utf8");
    const content = JSON.parse(raw);
    sendJson(res, 200, { ok: true, content: sanitizePublicContent(content) });
  } catch (error) {
    sendJson(res, 404, { ok: false, error: "Aucun contenu public disponible." });
  }
}

function normalizeGamesCatalogForApi(items) {
  const diskFallback = (() => {
    try {
      const dir = path.join(UPLOADS_DIR, "games-covers");
      if (!fs.existsSync(dir)) return [];
      return fs
        .readdirSync(dir)
        .filter((name) => /\.(png|jpe?g|webp|gif|svg)$/i.test(name))
        .sort((a, b) => a.localeCompare(b, "fr"))
        .map((name, index) => ({
          title: `Jeu ${index + 1}`,
          image: `uploads/games-covers/${name}`.replace(/\\/g, "/"),
          info: "",
        }));
    } catch (error) {
      return [];
    }
  })();

  if (!Array.isArray(items)) return diskFallback;
  const normalized = items
    .map((item, index) => ({
      title: String(item?.title || `Jeu ${index + 1}`).trim() || `Jeu ${index + 1}`,
      image: String(item?.image || "").trim().replace(/\\/g, "/"),
      info: String(item?.info || "").trim(),
    }))
    .filter((item) => item.image)
    .map((item) => {
      const cleanRelative = item.image.replace(/^\/+/, "").replace(/^uploads\/uploads\//, "uploads/");
      const absolute = path.resolve(ROOT_DIR, cleanRelative);
      const exists = absolute.startsWith(ROOT_DIR) && fs.existsSync(absolute);
      return {
        title: item.title,
        image: exists ? cleanRelative : "",
        info: item.info,
      };
    })
    .filter((item) => item.image);

  if (normalized.length) return normalized;
  return diskFallback;
}

async function handleGetGamesCatalog(res) {
  try {
    const raw = await fsp.readFile(CONTENT_FILE, "utf8");
    const content = JSON.parse(raw);
    const gamesCatalog = normalizeGamesCatalogForApi(content?.gamesCatalog);
    sendJson(res, 200, { ok: true, gamesCatalog });
  } catch (error) {
    sendJson(res, 200, { ok: true, gamesCatalog: [] });
  }
}

async function handleAdminSessionLogin(req, res) {
  const body = await readJsonBody(req);
  const email = String(body?.email || "").trim().toLowerCase();
  const password = String(body?.password || "");
  if (!email || !password) {
    sendJson(res, 400, { ok: false, error: "Email et mot de passe requis." });
    return;
  }
  const account = getAdminAccountByEmail(email);
  if (!account || !isAdminEmailCandidate(email) || !verifyAdminPassword(password, account)) {
    sendJson(res, 401, { ok: false, error: "Identifiants administrateur invalides." });
    return;
  }
  const canonicalEmail = String(account.email || email).trim().toLowerCase();
  const role = normalizeAdminRole(account.role || ADMIN_ROLE_SUPPORT);
  const token = createAdminSession(canonicalEmail, role);
  sendJson(
    res,
    200,
    {
      ok: true,
      email: canonicalEmail,
      role,
      permissions: getAdminPermissionsForRole(role),
    },
    {
      "Set-Cookie": buildAdminSessionCookie(req, token),
    }
  );
}

function handleAdminSessionLogout(req, res) {
  const session = getAdminSession(req);
  if (session?.token) clearAdminSession(session.token);
  sendJson(
    res,
    200,
    { ok: true },
    {
      "Set-Cookie": buildAdminSessionClearCookie(req),
    }
  );
}

function handleAdminSessionStatus(req, res) {
  const session = requireAdminSession(req, res);
  if (!session) return;
  sendJson(res, 200, {
    ok: true,
    email: String(session.email || "").trim().toLowerCase(),
    role: normalizeAdminRole(session.role || ADMIN_ROLE_SUPPORT),
    permissions: getAdminPermissionsForRole(session.role || ADMIN_ROLE_SUPPORT),
  });
}

async function handleSaveUserState(req, res) {
  const body = await readJsonBody(req);
  const state = body && typeof body.state === "object" ? body.state : null;
  if (!state) {
    sendJson(res, 400, { error: "Etat utilisateur manquant." });
    return;
  }
  const safeState = { ...state };
  if (Array.isArray(safeState.users)) {
    safeState.users = safeState.users.map((item) => {
      const next = item && typeof item === "object" ? { ...item } : {};
      if ("password" in next) next.password = "";
      if ("passwordHash" in next) next.passwordHash = "";
      if ("activationCode" in next) next.activationCode = "";
      if ("resetCode" in next) next.resetCode = "";
      return next;
    });
  }
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(USER_STATE_FILE, safeState);
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

function buildAdminRailwayStatusPayload() {
  const memory = process.memoryUsage();
  const rssMb = Math.round((Number(memory?.rss || 0) / (1024 * 1024)) * 10) / 10;
  const heapUsedMb = Math.round((Number(memory?.heapUsed || 0) / (1024 * 1024)) * 10) / 10;
  const heapTotalMb = Math.round((Number(memory?.heapTotal || 0) / (1024 * 1024)) * 10) / 10;
  const heapUsageRatio = heapTotalMb > 0 ? heapUsedMb / heapTotalMb : 0;
  const memoryPressure = rssMb >= 1024 || heapUsageRatio >= 0.88;

  return {
    ok: true,
    railway: {
      runtime: isRailwayRuntime(),
      environment: String(process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_ENVIRONMENT || ""),
      projectId: String(process.env.RAILWAY_PROJECT_ID || ""),
      serviceId: String(process.env.RAILWAY_SERVICE_ID || ""),
      deploymentId: String(process.env.RAILWAY_DEPLOYMENT_ID || ""),
      region: String(process.env.RAILWAY_REGION || ""),
    },
    app: {
      uptimeSec: Math.max(0, Math.floor(process.uptime())),
      node: String(process.version || ""),
      pid: process.pid,
      memory: {
        rssMb,
        heapUsedMb,
        heapTotalMb,
      },
    },
    health: {
      memoryPressure,
    },
    version: {
      commit: String(
        process.env.RAILWAY_GIT_COMMIT_SHA ||
          process.env.GIT_COMMIT_SHA ||
          process.env.SOURCE_COMMIT ||
          ""
      ),
      branch: String(process.env.RAILWAY_GIT_BRANCH || process.env.GIT_BRANCH || ""),
    },
    checkedAt: new Date().toISOString(),
  };
}

async function handleAdminRailwayStatus(res) {
  sendJson(res, 200, buildAdminRailwayStatusPayload());
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
      [
        "-rq0",
        zipPath,
        ".",
        "-x",
        ".git/*",
        ".env",
        "*.DS_Store",
        "__MACOSX/*",
        "backups/*",
        "data/content-backups/*",
      ],
      {
        cwd: ROOT_DIR,
        // Evite un blocage si zip produit beaucoup de logs (stdout rempli).
        stdio: ["ignore", "ignore", "pipe"],
      }
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

async function handleRunRailwayUpdateTerminal(req, res) {
  if (!hasJsonContentType(req)) {
    sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
    return;
  }
  if (!isTrustedOrigin(req)) {
    sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
    return;
  }
  await readJsonBody(req).catch(() => ({}));

  if (isRailwayRuntime()) {
    sendJson(res, 400, {
      ok: false,
      error: "Lancement Terminal indisponible sur Railway. Utilisez la commande locale.",
    });
    return;
  }
  if (process.platform !== "darwin") {
    sendJson(res, 400, {
      ok: false,
      error: "Lancement automatique disponible uniquement sur macOS.",
    });
    return;
  }

  const shellCommand = buildRailwayUpdateShellCommand();
  const tmpCommandPath = path.join(os.tmpdir(), `vortexbox-railway-update-${Date.now()}.command`);
  const fileContent = `#!/bin/zsh\n${shellCommand}\necho \"\\nMise a jour Railway terminee.\"\n`;
  await fsp.writeFile(tmpCommandPath, fileContent, "utf8");
  await fsp.chmod(tmpCommandPath, 0o755);

  // Mode principal: ouvrir un fichier .command dans Terminal (plus robuste sur macOS).
  try {
    await new Promise((resolve, reject) => {
      const child = spawn("/usr/bin/open", ["-a", "Terminal", tmpCommandPath], {
        cwd: ROOT_DIR,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stderr = "";
      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString("utf8");
      });
      child.on("error", (error) => reject(new Error(error.message || "Impossible d'ouvrir Terminal.")));
      child.on("close", (code) => {
        if (code === 0) {
          resolve();
          return;
        }
        reject(new Error(String(stderr || "").trim() || `open a échoué (code ${code}).`));
      });
    });

    sendJson(res, 200, {
      ok: true,
      message: "Terminal lancé via fichier .command.",
      command: shellCommand,
      mode: "command-file",
    });
    return;
  } catch (openError) {
    // Fallback: AppleScript (utile sur certaines configurations).
  }
  const appleScriptLines = [
    'tell application "Terminal"',
    "activate",
    `do script "${shellCommand.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
    "end tell",
  ];
  try {
    await new Promise((resolve, reject) => {
      const args = [];
      appleScriptLines.forEach((line) => args.push("-e", line));
      const child = spawn("/usr/bin/osascript", args, {
        cwd: ROOT_DIR,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stderr = "";
      let stdout = "";
      child.stdout.on("data", (chunk) => {
        stdout += chunk.toString("utf8");
      });
      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString("utf8");
      });
      child.on("error", (error) => reject(new Error(error.message || "Impossible d'ouvrir Terminal.")));
      child.on("close", (code) => {
        if (code === 0) {
          resolve();
          return;
        }
        const details = String(stderr || stdout || "").trim();
        reject(new Error(details || `osascript a échoué (code ${code}).`));
      });
    });
    sendJson(res, 200, {
      ok: true,
      message: "Terminal lancé via AppleScript.",
      command: shellCommand,
      mode: "applescript",
    });
    return;
  } catch (appleScriptError) {
    sendJson(res, 500, {
      ok: false,
      error: `Impossible de lancer Terminal. open/command et AppleScript ont échoué. Détail: ${String(
        appleScriptError?.message || "unknown"
      )}`,
    });
    return;
  }
}

async function handleProcessInvoicePdf(req, res) {
  const body = await readJsonBody(req);
  const invoice = body?.invoice && typeof body.invoice === "object" ? body.invoice : null;
  const persistRecord = Boolean(body?.persistRecord);
  if (!invoice) {
    sendJson(res, 400, { ok: false, error: "Facture invalide." });
    return;
  }

  const clientName = String(invoice.clientName || "").trim();
  const number = String(invoice.number || "").trim();
  const lines = Array.isArray(invoice.lines) ? invoice.lines : [];
  const validLines = lines.filter((line) => String(line?.label || "").trim() || Number(line?.unitPrice) > 0);
  if (persistRecord && !clientName) {
    sendJson(res, 400, { ok: false, error: "Nom client requis." });
    return;
  }
  if (!number) {
    sendJson(res, 400, { ok: false, error: "Numero de facture requis." });
    return;
  }
  if (!validLines.length) {
    sendJson(res, 400, { ok: false, error: "Ajoutez au moins une ligne valide a la facture." });
    return;
  }

  const finalInvoice = {
    ...invoice,
    clientName: clientName || "Client VortexBox",
    lines: validLines,
  };
  const { buffer, totalTtc } = buildProcessInvoicePdfBuffer(finalInvoice);
  const safeBase = sanitizeName(`${number}-${finalInvoice.clientName}`, `facture-${Date.now()}`);
  const finalName = `${Date.now()}-${safeBase}.pdf`;
  const folder = path.join(UPLOADS_DIR, "processus");
  await fsp.mkdir(folder, { recursive: true });
  const absolute = path.join(folder, finalName);
  await fsp.writeFile(absolute, buffer);
  const relative = path.relative(ROOT_DIR, absolute).replace(/\\/g, "/");
  sendJson(res, 200, {
    ok: true,
    path: relative,
    fileName: finalName,
    totalTtc,
  });
}

async function handleProfileConfigQuotePdf(req, res) {
  const body = await readJsonBody(req);
  const config = body?.config && typeof body.config === "object" ? body.config : null;
  const customer = body?.customer && typeof body.customer === "object" ? body.customer : {};
  if (!config) {
    sendJson(res, 400, { ok: false, error: "Configuration invalide." });
    return;
  }

  const components = Array.isArray(config.components) ? config.components : [];
  const services = Array.isArray(config.services) ? config.services : [];
  const lines = [
    ...components.map((item, index) => ({
      label: `${String(item?.label || `Composant ${index + 1}`).trim()}: ${String(item?.optionName || "").trim()}`.trim(),
      quantity: 1,
      unitPriceTtc: Math.max(0, Number(item?.price) || 0),
    })),
    ...services.map((item, index) => ({
      label: String(item?.label || `Service ${index + 1}`).trim(),
      quantity: 1,
      unitPriceTtc: Math.max(0, Number(item?.price) || 0),
    })),
  ].filter((line) => line.label || line.unitPriceTtc > 0);

  if (!lines.length) {
    sendJson(res, 400, { ok: false, error: "Aucune ligne valide dans la configuration." });
    return;
  }

  const now = new Date();
  const validUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const quoteNumber = `DV-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}-${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
  const clientName = String(customer?.name || "").trim().slice(0, 80) || "Client professionnel";
  const clientEmail = String(customer?.email || "").trim().slice(0, 120);
  const clientCompany = String(customer?.company || "").trim().slice(0, 120);
  const clientSiret = String(customer?.siret || "").trim().slice(0, 60);
  const clientVatNumber = String(customer?.vatNumber || "").trim().slice(0, 60);

  const { buffer, totalTtc, totalHt, totalVat, vatRate } = buildProfileQuotePdfBuffer({
    number: quoteNumber,
    issueDateLabel: now.toLocaleDateString("fr-FR"),
    validUntilLabel: validUntil.toLocaleDateString("fr-FR"),
    clientName,
    clientEmail,
    clientCompany,
    clientSiret,
    clientVatNumber,
    vatRate: 20,
    lines,
  });

  const safeBase = sanitizeName(
    `devis-pro-${quoteNumber}-${clientName || "client-vortexbox"}`,
    `devis-pro-${Date.now()}`
  );
  const fileName = `${safeBase}.pdf`;
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": buffer.length,
    "Content-Disposition": `attachment; filename=\"${fileName}\"`,
    "Cache-Control": "no-store",
    "X-Quote-Total-Ttc": String(totalTtc.toFixed(2)),
    "X-Quote-Total-Ht": String(totalHt.toFixed(2)),
    "X-Quote-Total-Vat": String(totalVat.toFixed(2)),
    "X-Quote-Vat-Rate": String(vatRate),
    ...buildSecurityHeaders(),
  });
  res.end(buffer);
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
  const isUploadAsset = finalPath.includes(`${path.sep}uploads${path.sep}`);
  const isImmutableAsset =
    !isUploadAsset &&
    [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".mp4", ".webm", ".mov", ".m4v", ".mp3", ".pdf"].includes(ext);
  const isDynamicFrontendAsset = ext === ".js" || ext === ".css";
  const cacheControl =
    ext === ".html" || isDynamicFrontendAsset
      ? ext === ".html"
        ? "no-store"
        : "public, max-age=604800, stale-while-revalidate=86400"
      : isUploadAsset
        ? "public, max-age=0, must-revalidate"
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
      ...(isUploadAsset ? { "X-Vortex-Storage": "disk" } : {}),
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

  const fileStream = fs.createReadStream(finalPath);
  const acceptEncoding = String(req.headers["accept-encoding"] || "").toLowerCase();
  const isCompressibleType =
    [".html", ".css", ".js", ".json", ".svg", ".txt"].includes(ext) || type.startsWith("text/");
  const shouldCompress = !rangeHeader && isCompressibleType && totalSize >= 1024;
  if (shouldCompress && (acceptEncoding.includes("br") || acceptEncoding.includes("gzip"))) {
    const useBr = acceptEncoding.includes("br");
    const encoding = useBr ? "br" : "gzip";
    const compressor = useBr ? zlib.createBrotliCompress() : zlib.createGzip({ level: zlib.constants.Z_BEST_SPEED });
    res.writeHead(200, {
      "Content-Type": type,
      "Accept-Ranges": "bytes",
      "Cache-Control": cacheControl,
      ETag: etag,
      Vary: "Accept-Encoding",
      "Content-Encoding": encoding,
      ...(isUploadAsset ? { "X-Vortex-Storage": "disk" } : {}),
      ...buildSecurityHeaders(),
    });
    fileStream.on("error", () => {
      if (!res.headersSent) {
        res.writeHead(500, {
          "Content-Type": "text/plain; charset=utf-8",
          ...buildSecurityHeaders(),
        });
      }
      res.end("Erreur lecture fichier.");
    });
    fileStream.pipe(compressor).pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": totalSize,
    "Accept-Ranges": "bytes",
    "Cache-Control": cacheControl,
    ETag: etag,
    ...(isUploadAsset ? { "X-Vortex-Storage": "disk" } : {}),
    ...buildSecurityHeaders(),
  });
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
  if (!nodemailer) {
    return {
      ok: false,
      status: 503,
      error: "Module SMTP indisponible (nodemailer manquant). Redeployez avec les dependances npm.",
    };
  }

  const envelopeFrom = MAIL_FROM.replace(/^.*<([^>]+)>.*$/, "$1").trim() || MAIL_FROM.trim();
  const hostsToTry = Array.from(new Set([SMTP_HOST, "smtp-mail.outlook.com", "smtp.office365.com"]));
  const smtpPort = Number(SMTP_PORT);
  const smtpEndpoints = [];
  const addEndpoint = (port, secure, requireTls) => {
    if (!Number.isFinite(port) || port <= 0) return;
    if (smtpEndpoints.some((item) => item.port === port && item.secure === secure)) return;
    smtpEndpoints.push({ port, secure, requireTls });
  };
  addEndpoint(smtpPort, smtpPort === 465, smtpPort !== 465);
  addEndpoint(587, false, true);
  addEndpoint(465, true, false);

  let lastSmtpError = "";
  for (const host of hostsToTry) {
    for (const endpoint of smtpEndpoints) {
      const transporter = nodemailer.createTransport({
        host,
        port: endpoint.port,
        secure: endpoint.secure,
        requireTLS: endpoint.requireTls,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
        tls: {
          minVersion: "TLSv1.2",
        },
      });
      try {
        await transporter.sendMail({
          from: MAIL_FROM,
          to,
          subject,
          text: textBody,
          html,
          envelope: {
            from: envelopeFrom,
            to: [to],
          },
        });
        return { ok: true };
      } catch (error) {
        lastSmtpError = error?.message || `Echec SMTP ${host}:${endpoint.port}.`;
      } finally {
        if (typeof transporter.close === "function") transporter.close();
      }
    }
  }

  if (lastSmtpError) {
    return { ok: false, status: 502, error: lastSmtpError };
  }
  return { ok: false, status: 502, error: "Echec envoi SMTP." };
}

async function handleSendAuthCode(req, res) {
  if (!requireAdminPermission(req, res, "users:manage")) return;
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
  if (isRateLimitedByIdentifier("send-auth-code-email", email, 5, 10 * 60 * 1000)) {
    sendJson(res, 429, { ok: false, error: "Trop de codes demandés pour cet email. Réessayez plus tard." });
    return;
  }
  const lastSentAt = Number(AUTH_CODE_COOLDOWN_STORE.get(email) || 0);
  if (Date.now() - lastSentAt < 60 * 1000) {
    sendJson(res, 429, { ok: false, error: "Veuillez attendre 60 secondes avant un nouveau code." });
    return;
  }

  const result = await sendAuthCodeEmail(email, code, type);
  if (!result.ok) {
    sendJson(res, result.status || 500, { ok: false, error: result.error || "Echec envoi email." });
    return;
  }

  AUTH_CODE_COOLDOWN_STORE.set(email, Date.now());
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

function extractFirstJsonObject(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {}
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  const candidate = raw.slice(start, end + 1);
  try {
    return JSON.parse(candidate);
  } catch (error) {
    return null;
  }
}

function normalizeAiRecommendation(parsed, fallback) {
  if (!parsed || typeof parsed !== "object") return fallback;
  return {
    title: String(parsed.title || fallback.title),
    reason: String(parsed.reason || fallback.reason),
    selections: parsed.selections && typeof parsed.selections === "object" ? parsed.selections : fallback.selections,
    services: Array.isArray(parsed.services) ? parsed.services.map((item) => String(item || "")).filter(Boolean) : fallback.services,
    fps_estimate:
      parsed.fps_estimate && typeof parsed.fps_estimate === "object"
        ? parsed.fps_estimate
        : fallback.fps_estimate,
  };
}

function buildAiRecommendationPrompt(answers, catalog) {
  return {
    answers: {
      budget: String(answers?.budget || "mid"),
      game: String(answers?.game || "mix"),
      resolution: String(answers?.resolution || "1440"),
    },
    catalog,
  };
}

async function requestHuggingFaceRecommendation(userPayload, fallback) {
  if (!HF_API_KEY) return null;
  const systemPrompt =
    "Tu es un expert hardware gaming VortexBox. " +
    "Réponds en JSON strict sans markdown: {title, reason, selections, services, fps_estimate}. " +
    "Conserve les labels exacts présents dans le catalogue.";
  const promptForInference = `${systemPrompt}\n\n${JSON.stringify(userPayload)}`;
  const tryInferenceFallback = async () => {
    try {
      const response = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: promptForInference,
          parameters: {
            max_new_tokens: 450,
            temperature: 0.2,
            return_full_text: false,
          },
        }),
      });
      if (!response.ok) return null;
      const payload = await response.json();
      const generatedText = Array.isArray(payload)
        ? String(payload?.[0]?.generated_text || "")
        : String(payload?.generated_text || "");
      const parsed = extractFirstJsonObject(generatedText);
      if (!parsed || typeof parsed !== "object") return null;
      return normalizeAiRecommendation(parsed, fallback);
    } catch (fallbackError) {
      return null;
    }
  };
  try {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: HF_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: JSON.stringify(userPayload) },
        ],
        temperature: 0.2,
        max_tokens: 450,
      }),
    });
    if (!response.ok) {
      return await tryInferenceFallback();
    }
    const payload = await response.json();
    const rawContent = String(payload?.choices?.[0]?.message?.content || "").trim();
    const parsed = extractFirstJsonObject(rawContent);
    if (!parsed || typeof parsed !== "object") return null;
    return normalizeAiRecommendation(parsed, fallback);
  } catch (error) {
    return await tryInferenceFallback();
  }
}

async function handleAiRecommendation(req, res) {
  const body = await readJsonBody(req);
  const answers = body?.answers && typeof body.answers === "object" ? body.answers : {};
  const catalog = body?.catalog && typeof body.catalog === "object" ? body.catalog : {};
  const fallback = buildFallbackAiRecommendation(answers, catalog);
  const userPayload = buildAiRecommendationPrompt(answers, catalog);

  if (AI_FREE_FIRST) {
    const hfRecommendation = await requestHuggingFaceRecommendation(userPayload, fallback);
    if (hfRecommendation) {
      sendJson(res, 200, { ok: true, source: "hf-free", recommendation: hfRecommendation });
      return;
    }
  }

  if (!OPENAI_API_KEY) {
    sendJson(res, 200, { ok: true, source: "local-free", recommendation: fallback });
    return;
  }

  const systemPrompt =
    "Tu es un expert hardware gaming pour VortexBox. " +
    "Réponds uniquement en JSON valide sans markdown. " +
    "Format attendu: {title, reason, selections, services, fps_estimate}. " +
    "selections: map label_categorie -> nom_option_exact. " +
    "services: tableau de labels exacts.";

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
        source: "local-free",
        warning: raw || "AI HTTP error",
        recommendation: fallback,
      });
      return;
    }

    const payload = await response.json();
    const text = extractResponseText(payload);
    const parsed = extractFirstJsonObject(text);
    if (!parsed || typeof parsed !== "object") {
      sendJson(res, 200, { ok: true, source: "local-free", recommendation: fallback });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      source: "openai",
      recommendation: normalizeAiRecommendation(parsed, fallback),
    });
  } catch (error) {
    sendJson(res, 200, {
      ok: true,
      source: "local-free",
      warning: String(error?.message || "AI unavailable"),
      recommendation: fallback,
    });
  }
}

let maintenanceTimersStarted = false;
function ensureMaintenanceTimers() {
  if (maintenanceTimersStarted) return;
  maintenanceTimersStarted = true;
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
    for (const [key, hits] of RATE_LIMIT_IDENTIFIER_STORE.entries()) {
      if (!Array.isArray(hits) || hits.length === 0) {
        RATE_LIMIT_IDENTIFIER_STORE.delete(key);
        continue;
      }
      const valid = hits.filter((ts) => now - ts < 10 * 60 * 1000);
      if (valid.length === 0) RATE_LIMIT_IDENTIFIER_STORE.delete(key);
      else RATE_LIMIT_IDENTIFIER_STORE.set(key, valid);
    }
    for (const [email, ts] of AUTH_CODE_COOLDOWN_STORE.entries()) {
      if (now - Number(ts || 0) > 30 * 60 * 1000) AUTH_CODE_COOLDOWN_STORE.delete(email);
    }
  }, 5 * 60 * 1000).unref();

  setInterval(() => {
    cleanupUploadStatusStore();
  }, 10 * 60 * 1000).unref();

  setInterval(() => {
    cleanupAdminSessionStore();
  }, 10 * 60 * 1000).unref();

  setInterval(() => {
    cleanupUserSessionStore();
  }, 10 * 60 * 1000).unref();

  // Retention automatique des sauvegardes (coût stockage maîtrisé).
  runStorageRetentionCleanup({
    backupsDir: BACKUPS_DIR,
    contentBackupsDir: CONTENT_BACKUPS_DIR,
    backupsRetentionDays: BACKUPS_RETENTION_DAYS,
    contentBackupsRetentionDays: CONTENT_BACKUPS_RETENTION_DAYS,
    backupsKeepMinFiles: BACKUPS_KEEP_MIN_FILES,
    contentBackupsKeepMinFiles: CONTENT_BACKUPS_KEEP_MIN_FILES,
    logger: console,
  }).catch(() => {});
  setInterval(() => {
    runStorageRetentionCleanup({
      backupsDir: BACKUPS_DIR,
      contentBackupsDir: CONTENT_BACKUPS_DIR,
      backupsRetentionDays: BACKUPS_RETENTION_DAYS,
      contentBackupsRetentionDays: CONTENT_BACKUPS_RETENTION_DAYS,
      backupsKeepMinFiles: BACKUPS_KEEP_MIN_FILES,
      contentBackupsKeepMinFiles: CONTENT_BACKUPS_KEEP_MIN_FILES,
      logger: console,
    }).catch(() => {});
  }, 12 * 60 * 60 * 1000).unref();
}

const handleUserAuthRoute = createUserAuthRouteHandler({
  fsp,
  dataDir: DATA_DIR,
  authUsersFile: AUTH_USERS_FILE,
  writeJsonAtomic,
  readJsonBody,
  sendJson,
  isValidOutlookEmail,
  isAdminEmailCandidate,
  isRateLimited,
  isRateLimitedByIdentifier,
  isTrustedOrigin,
  hasJsonContentType,
  sendAuthCodeEmail,
  authCodeCooldownStore: AUTH_CODE_COOLDOWN_STORE,
  hashPasswordScrypt,
  verifyScryptHash,
  createUserSession,
  buildUserSessionCookie,
  getUserSession,
  clearUserSession,
  buildUserSessionClearCookie,
});

const handleUploadRoute = createUploadRouteHandler({
  hasJsonContentType,
  isTrustedOrigin,
  isRateLimited,
  sendJson,
  requireAdminSession,
  requireAdminPermission,
  handleUpload,
  handleBinaryUpload,
  handleGetUploadProgress,
  handleListUploads,
  handleDeleteUpload,
  handleImportGamesCoversZip,
});

const handleContentRoute = createContentRouteHandler({
  hasJsonContentType,
  isTrustedOrigin,
  isRateLimited,
  sendJson,
  requireAdminSession,
  requireAdminPermission,
  handleSaveContent,
  handleSaveTechnicalSheetImage,
  handleSaveConfiguratorMedia,
  handleSavePremiumPhotoSource,
  handleGetContent,
  getAdminSession,
  isAdminEmailCandidate,
  handleGetPublicContent,
  handleGetGamesCatalog,
  handleSaveUserState,
  handleGetUserState,
  handleGetContentHistory,
  handleRollbackContentHistory,
  handleDeleteContentHistoryEntry,
  handleClearContentHistory,
});

const handleAdminOpsRoute = createAdminOpsRouteHandler({
  isRateLimited,
  sendJson,
  requireAdminSession,
  requireAdminPermission,
  handleAdminRailwayStatus,
  handleBackupSiteZip,
  handleRunRailwayUpdateTerminal,
});

async function requestListener(req, res) {
  ensureMaintenanceTimers();
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === "GET" && url.pathname === "/health") {
      sendJson(res, 200, { ok: true, service: "vortexbox", uptime: Math.round(process.uptime()) });
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/ping") {
      sendJson(res, 200, { ok: true });
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/admin/session") {
      handleAdminSessionStatus(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/admin/session") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "admin-session", 12, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez dans quelques minutes." });
        return;
      }
      await handleAdminSessionLogin(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/admin/logout") {
      handleAdminSessionLogout(req, res);
      return;
    }
    if (await handleUserAuthRoute(req, res, url)) return;
    if (await handleUploadRoute(req, res, url)) return;
    if (await handleContentRoute(req, res, url)) return;
    if (await handleAdminOpsRoute(req, res, url)) return;
    if (req.method === "POST" && url.pathname === "/api/profile-config-quote-pdf") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "profile-config-quote-pdf", 24, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de devis générés. Réessayez dans quelques minutes." });
        return;
      }
      await handleProfileConfigQuotePdf(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/submit-review") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "submit-review", 24, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'avis envoyés. Réessayez dans quelques minutes." });
        return;
      }
      await handleSubmitReview(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/process-invoice-pdf") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "process-invoice-pdf", 30, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'exports PDF. Réessayez dans 1 minute." });
        return;
      }
      if (!requireAdminPermission(req, res, "content:write")) return;
      await handleProcessInvoicePdf(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/send-auth-code") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "send-auth-code", 6, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez dans quelques minutes." });
        return;
      }
      await handleSendAuthCode(req, res);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/ai/recommend") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return;
      }
      if (isRateLimited(req, "ai-recommend", 20, 60 * 1000)) {
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
}

if (require.main === module) {
  if (!ADMIN_ACCOUNTS.length) {
    console.warn(
      "Aucun compte admin valide (ADMIN_PASSWORD/ADMIN_PASSWORD_HASH ou ADMIN_ACCOUNTS_JSON). Le serveur démarre pour le healthcheck, mais la connexion admin restera indisponible."
    );
  }
  const server = http.createServer(requestListener);
  server.listen(PORT, HOST, () => {
    console.log(`VortexBox server running: http://${HOST}:${PORT}`);
    if (!RESEND_API_KEY && (!MAIL_FROM || !SMTP_USER || !SMTP_PASS)) {
      console.log("Email auth non configure. Ajoutez RESEND_API_KEY ou MAIL_FROM+SMTP_USER+SMTP_PASS dans .env");
    }
    if (ADMIN_ACCOUNTS.some((account) => account?.password && !account?.passwordHash)) {
      console.log("Conseil sécurité: privilégiez passwordHash (scrypt$<saltB64>$<hashB64>) plutôt qu'un mot de passe en clair.");
    }
  });
}

module.exports = requestListener;
module.exports.handler = requestListener;
