#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_FILE = path.join(ROOT, "data", "site-content.json");
const ABOUT_DIR = path.join("uploads", "about-videos");

function runGit(args, silent = true) {
  return cp.execFileSync("git", args, {
    cwd: ROOT,
    stdio: silent ? ["ignore", "ignore", "ignore"] : "inherit",
  });
}

function collectAboutVideoRefs(value, refs) {
  if (Array.isArray(value)) {
    for (const item of value) collectAboutVideoRefs(item, refs);
    return;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value)) collectAboutVideoRefs(v, refs);
    return;
  }
  if (typeof value !== "string") return;
  const normalized = value.trim().replace(/^\/+/, "").replace(/\\/g, "/");
  if (!normalized.startsWith("uploads/about-videos/")) return;
  if (!/\.(mp4|webm)$/i.test(normalized)) return;
  refs.add(normalized);
}

function main() {
  try {
    runGit(["rev-parse", "--is-inside-work-tree"]);
  } catch (error) {
    console.error("[MAJ Railway] Git indisponible ou dossier non versionné.");
    process.exit(1);
  }

  try {
    runGit(["restore", "--staged", "--", ABOUT_DIR]);
  } catch (error) {
    // Aucun fichier staged dans about-videos: on continue.
  }

  if (!fs.existsSync(CONTENT_FILE)) {
    console.log("[MAJ Railway] data/site-content.json introuvable, aucune video about-videos selectionnee.");
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8"));
  } catch (error) {
    console.error("[MAJ Railway] data/site-content.json invalide.");
    process.exit(1);
  }

  const refs = new Set();
  collectAboutVideoRefs(parsed, refs);

  let staged = 0;
  let missing = 0;
  for (const rel of refs) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      missing += 1;
      continue;
    }
    try {
      runGit(["add", "--", rel]);
      staged += 1;
    } catch (error) {
      // Ignore unitaire: on continue avec les autres fichiers.
    }
  }

  console.log(
    `[MAJ Railway] Videos about-videos stagees: ${staged}/${refs.size}${
      missing ? ` (${missing} manquantes localement)` : ""
    }.`
  );
}

main();
