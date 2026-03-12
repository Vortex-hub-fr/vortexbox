#!/usr/bin/env node

const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const { spawn } = require("child_process");

const ROOT_DIR = process.cwd();
const CONTENT_FILE = path.join(ROOT_DIR, "data", "site-content.json");
const SUPPORTED_VIDEO_EXT = new Set([".mp4", ".mov", ".m4v", ".qt", ".webm"]);

function printHelp() {
  console.log(`
Usage:
  npm run video:2k:about
  npm run video:2k:build
  npm run video:2k:file -- <video1> <video2>
  npm run video:uhd:about
  npm run video:uhd:build
  npm run video:uhd:file -- <video1> <video2>

Options:
  --active-about   Upscale the videos currently used in "Coulisses VortexBox"
  --all-machine    Upscale all local videos in uploads/machine-videos
  --target=2k      Create a premium 2560x1440 output
  --target=uhd     Create a premium 3840x2160 output (default)
  --force          Overwrite existing "-uhd.mp4" outputs
  --help           Show this help

Output:
  Creates a new file next to each source:
    original.mp4 -> original-2k.mp4
    original.mp4 -> original-uhd.mp4

Notes:
  - This is a premium upscale / cleanup pass, not true native recreation.
  - Originals are never modified.
`);
}

function isSupportedVideo(filePath) {
  return SUPPORTED_VIDEO_EXT.has(path.extname(String(filePath || "")).toLowerCase());
}

function toAbsolute(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.join(ROOT_DIR, filePath);
}

function toRelative(filePath) {
  return path.relative(ROOT_DIR, filePath).replace(/\\/g, "/");
}

function readActiveAboutVideos() {
  const raw = fs.readFileSync(CONTENT_FILE, "utf8");
  const parsed = JSON.parse(raw);
  const items = Array.isArray(parsed.aboutVideos) ? parsed.aboutVideos : [];
  const seen = new Set();
  const files = [];
  for (const item of items) {
    const source = String(item?.videoData || "").trim();
    if (!source || !source.startsWith("uploads/")) continue;
    if (!isSupportedVideo(source)) continue;
    if (seen.has(source)) continue;
    seen.add(source);
    files.push(source);
  }
  return files;
}

async function readAllMachineVideos() {
  const dir = path.join(ROOT_DIR, "uploads", "machine-videos");
  let entries = [];
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true });
  } catch (error) {
    return [];
  }
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(dir, entry.name))
    .filter((filePath) => isSupportedVideo(filePath))
    .filter((filePath) => !/-2k\.mp4$/i.test(filePath) && !/-uhd\.mp4$/i.test(filePath))
    .map((filePath) => toRelative(filePath));
}

function spawnCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    let stdout = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString("utf8");
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => reject(error));
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(new Error(stderr || stdout || `${command} failed with code ${code}`));
    });
  });
}

async function ensureFfmpeg() {
  await spawnCommand("ffmpeg", ["-version"]);
}

async function ensureSourceExists(sourceAbsolute) {
  const stat = await fsp.stat(sourceAbsolute);
  if (!stat.isFile()) {
    throw new Error(`Source invalide: ${sourceAbsolute}`);
  }
}

function parseTarget(args) {
  const explicit = args.find((arg) => arg.startsWith("--target="));
  const value = String(explicit || "").split("=")[1] || "uhd";
  return value === "2k" ? "2k" : "uhd";
}

function buildOutputPath(sourceAbsolute, target) {
  const dir = path.dirname(sourceAbsolute);
  const ext = path.extname(sourceAbsolute);
  const base = path.basename(sourceAbsolute, ext);
  return path.join(dir, `${base}-${target}.mp4`);
}

function buildVideoFilter(target) {
  if (target === "2k") {
    return [
      "scale=2560:1440:force_original_aspect_ratio=decrease:flags=lanczos",
      "pad=2560:1440:(ow-iw)/2:(oh-ih)/2:color=#020b14",
      "hqdn3d=1.2:1.2:6:6",
      "unsharp=5:5:0.75:3:3:0.35",
      "eq=contrast=1.04:saturation=1.05:brightness=0.01",
      "format=yuv420p",
    ].join(",");
  }
  return [
    "scale=3840:2160:force_original_aspect_ratio=decrease:flags=lanczos",
    "pad=3840:2160:(ow-iw)/2:(oh-ih)/2:color=#020b14",
    "hqdn3d=1.2:1.2:6:6",
    "unsharp=5:5:0.8:3:3:0.4",
    "eq=contrast=1.04:saturation=1.05:brightness=0.01",
    "format=yuv420p",
  ].join(",");
}

async function upscaleVideo(sourceAbsolute, outputAbsolute, force, target) {
  if (!force && fs.existsSync(outputAbsolute)) {
    return { skipped: true, outputAbsolute };
  }

  const vf = buildVideoFilter(target);

  const args = [
    "-y",
    "-i",
    sourceAbsolute,
    "-vf",
    vf,
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "17",
    "-profile:v",
    "high",
    "-level",
    "5.1",
    "-movflags",
    "+faststart",
    "-c:a",
    "aac",
    "-b:a",
    "192k",
    outputAbsolute,
  ];

  await spawnCommand("ffmpeg", args);
  return { skipped: false, outputAbsolute };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    printHelp();
    return;
  }

  const force = args.includes("--force");
  const activeAbout = args.includes("--active-about");
  const allMachine = args.includes("--all-machine");
  const target = parseTarget(args);
  const manualFiles = args.filter((arg) => !arg.startsWith("--"));

  let inputs = [];
  if (activeAbout) {
    inputs = readActiveAboutVideos();
  } else if (allMachine) {
    inputs = await readAllMachineVideos();
  } else {
    inputs = manualFiles;
  }

  if (!inputs.length) {
    printHelp();
    process.exitCode = 1;
    return;
  }

  await ensureFfmpeg();

  console.log(`Upscale local ${target.toUpperCase()} VortexBox`);
  console.log("--------------------------------");

  for (const input of inputs) {
    const sourceAbsolute = toAbsolute(input);
    if (!isSupportedVideo(sourceAbsolute)) {
      console.log(`SKIP ext non supportée: ${input}`);
      continue;
    }
    await ensureSourceExists(sourceAbsolute);
    const outputAbsolute = buildOutputPath(sourceAbsolute, target);
    const result = await upscaleVideo(sourceAbsolute, outputAbsolute, force, target);
    if (result.skipped) {
      console.log(`SKIP déjà présent : ${toRelative(outputAbsolute)}`);
      continue;
    }
    console.log(`OK  ${toRelative(sourceAbsolute)} -> ${toRelative(outputAbsolute)}`);
  }
}

main().catch((error) => {
  console.error(`Erreur upscale UHD: ${error.message || error}`);
  process.exitCode = 1;
});
