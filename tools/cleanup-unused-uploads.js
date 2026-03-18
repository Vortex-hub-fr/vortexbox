#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const UPLOADS_DIR = path.join(ROOT, "uploads");
const DATA_DIR = path.join(ROOT, "data");
const BACKUPS_DIR = path.join(ROOT, "backups");
const REPORTS_DIR = path.join(BACKUPS_DIR, "cleanup-reports");

const CODE_FILES = [
  "index.html",
  "about.html",
  "faq.html",
  "jeux.html",
  "support-sav.html",
  "process-crm.html",
  "process-fournisseurs.html",
  "process-installation.html",
  "styles.css",
  "script.js",
  "server.js",
];

function nowStamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function parseArgs(argv) {
  const mode = argv.includes("--delete")
    ? "delete"
    : argv.includes("--quarantine")
      ? "quarantine"
      : "report";
  const allow = argv.includes("--yes");
  return { mode, allow };
}

function normalizeUploadRef(value) {
  const raw = String(value || "").trim().replace(/^\/+/, "").replace(/\\/g, "/");
  if (!raw.startsWith("uploads/")) return "";
  return raw.slice("uploads/".length);
}

function walkJsonValues(value, refs) {
  if (Array.isArray(value)) {
    for (const item of value) walkJsonValues(item, refs);
    return;
  }
  if (value && typeof value === "object") {
    for (const entry of Object.values(value)) walkJsonValues(entry, refs);
    return;
  }
  if (typeof value !== "string") return;
  const ref = normalizeUploadRef(value);
  if (ref) refs.add(ref);
}

function scanJsonRefs(dirPath, refs) {
  if (!fs.existsSync(dirPath)) return;
  for (const name of fs.readdirSync(dirPath)) {
    const abs = path.join(dirPath, name);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      scanJsonRefs(abs, refs);
      continue;
    }
    if (!/\.json$/i.test(name)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(abs, "utf8"));
      walkJsonValues(parsed, refs);
    } catch {
      // Ignore invalid JSON files to avoid blocking cleanup report.
    }
  }
}

function scanCodeRefs(refs) {
  const pattern = /uploads\/[A-Za-z0-9_./-]+/g;
  for (const rel of CODE_FILES) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const text = fs.readFileSync(abs, "utf8");
    const matches = text.match(pattern) || [];
    for (const match of matches) {
      const ref = normalizeUploadRef(match);
      if (ref) refs.add(ref);
    }
  }
}

function listAllUploads(dirPath, base = "", output = []) {
  if (!fs.existsSync(dirPath)) return output;
  for (const name of fs.readdirSync(dirPath)) {
    const abs = path.join(dirPath, name);
    const rel = base ? `${base}/${name}` : name;
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      listAllUploads(abs, rel, output);
      continue;
    }
    output.push({ rel, abs, size: stat.size });
  }
  return output;
}

function writeReport(unused, refsCount, allCount) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const reportPath = path.join(REPORTS_DIR, `unused-uploads-${nowStamp()}.txt`);
  const byDir = new Map();
  let total = 0;
  for (const file of unused) {
    total += file.size;
    const dir = file.rel.split("/")[0] || "(root)";
    byDir.set(dir, (byDir.get(dir) || 0) + file.size);
  }
  const lines = [];
  lines.push("Unused Uploads Report");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Referenced uploads: ${refsCount}`);
  lines.push(`Uploads files scanned: ${allCount}`);
  lines.push(`Unused files: ${unused.length}`);
  lines.push(`Unused total: ${(total / 1024 / 1024 / 1024).toFixed(2)} GB`);
  lines.push("");
  lines.push("By directory:");
  for (const [dir, bytes] of [...byDir.entries()].sort((a, b) => b[1] - a[1])) {
    lines.push(`- ${dir}: ${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`);
  }
  lines.push("");
  lines.push("Files:");
  for (const file of unused) {
    lines.push(`${(file.size / 1024 / 1024).toFixed(2)} MB\tuploads/${file.rel}`);
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
  return { reportPath, totalBytes: total };
}

function quarantineFiles(unused) {
  const quarantineDir = path.join(BACKUPS_DIR, `quarantine-unused-uploads-${nowStamp()}`);
  for (const file of unused) {
    const dst = path.join(quarantineDir, file.rel);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.renameSync(file.abs, dst);
  }
  return quarantineDir;
}

function deleteFiles(unused) {
  for (const file of unused) fs.unlinkSync(file.abs);
}

function main() {
  const { mode, allow } = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(UPLOADS_DIR)) {
    console.error("Dossier uploads introuvable.");
    process.exit(1);
  }

  const refs = new Set();
  scanJsonRefs(DATA_DIR, refs);
  scanCodeRefs(refs);

  const all = listAllUploads(UPLOADS_DIR);
  const unused = all.filter((file) => !refs.has(file.rel)).sort((a, b) => b.size - a.size);
  const { reportPath, totalBytes } = writeReport(unused, refs.size, all.length);

  if (mode !== "report" && !allow) {
    console.log(
      JSON.stringify(
        {
          mode,
          error: "Confirmation requise. Relancez avec --yes.",
          reportPath,
          unusedFiles: unused.length,
          unusedGB: Number((totalBytes / 1024 / 1024 / 1024).toFixed(2)),
        },
        null,
        2
      )
    );
    process.exit(2);
  }

  if (mode === "quarantine") {
    const quarantineDir = quarantineFiles(unused);
    console.log(
      JSON.stringify(
        {
          mode,
          moved: unused.length,
          quarantineDir,
          reportPath,
          unusedGB: Number((totalBytes / 1024 / 1024 / 1024).toFixed(2)),
        },
        null,
        2
      )
    );
    return;
  }

  if (mode === "delete") {
    deleteFiles(unused);
    console.log(
      JSON.stringify(
        {
          mode,
          deleted: unused.length,
          reportPath,
          unusedGB: Number((totalBytes / 1024 / 1024 / 1024).toFixed(2)),
        },
        null,
        2
      )
    );
    return;
  }

  console.log(
    JSON.stringify(
      {
        mode,
        reportPath,
        unusedFiles: unused.length,
        unusedGB: Number((totalBytes / 1024 / 1024 / 1024).toFixed(2)),
      },
      null,
      2
    )
  );
}

main();
