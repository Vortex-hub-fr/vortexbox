#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_FILE = path.join(ROOT, "data", "site-content.json");
const MAX_WIDTH = 960;
const QUALITY = 78;

function fileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

function toRelativeUploadPath(value) {
  const raw = String(value || "").trim().replace(/^\/+/, "").replace(/\\/g, "/");
  return raw.startsWith("uploads/") ? raw : "";
}

function convertToWebp(srcAbs, dstAbs) {
  const res = spawnSync(
    "cwebp",
    ["-q", String(QUALITY), "-mt", "-resize", String(MAX_WIDTH), "0", srcAbs, "-o", dstAbs],
    { encoding: "utf8" }
  );
  return res.status === 0;
}

function main() {
  if (!fs.existsSync(CONTENT_FILE)) {
    console.error("data/site-content.json introuvable.");
    process.exit(1);
  }

  const content = JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8"));
  const games = Array.isArray(content.gamesCatalog) ? content.gamesCatalog : [];
  let converted = 0;
  let updated = 0;
  let beforeBytes = 0;
  let afterBytes = 0;

  for (const game of games) {
    if (!game || typeof game !== "object") continue;
    const rel = toRelativeUploadPath(game.image);
    if (!rel || !rel.startsWith("uploads/games-covers/")) continue;
    const ext = path.extname(rel).toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;

    const srcAbs = path.join(ROOT, rel);
    if (!fs.existsSync(srcAbs)) continue;

    const webpRel = rel.replace(/\.(png|jpe?g|webp)$/i, ".webp");
    const webpAbs = path.join(ROOT, webpRel);

    const srcSize = fileSize(srcAbs);
    beforeBytes += srcSize;

    if (!fs.existsSync(webpAbs)) {
      const ok = convertToWebp(srcAbs, webpAbs);
      if (!ok) {
        afterBytes += srcSize;
        continue;
      }
      converted += 1;
    }

    const webpSize = fileSize(webpAbs);
    afterBytes += webpSize || srcSize;

    if (String(game.image || "").replace(/^\/+/, "") !== webpRel) {
      game.image = webpRel;
      updated += 1;
    }
  }

  content._updatedAt = Date.now();
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf8");

  console.log(
    JSON.stringify(
      {
        converted,
        updatedReferences: updated,
        beforeMB: Number((beforeBytes / 1024 / 1024).toFixed(2)),
        afterMB: Number((afterBytes / 1024 / 1024).toFixed(2)),
      },
      null,
      2
    )
  );
}

main();
