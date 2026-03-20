const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const targets = ["index.html", "jeux.html", "faq.html", "about.html", "support-sav.html"];
const pattern = /\b(?:onclick|onerror)\s*=/i;

let hasError = false;

for (const relative of targets) {
  const absolute = path.join(ROOT, relative);
  if (!fs.existsSync(absolute)) continue;
  const raw = fs.readFileSync(absolute, "utf8");
  if (pattern.test(raw)) {
    hasError = true;
    console.error(`[inline-check] Handler inline détecté dans ${relative}.`);
  }
}

if (hasError) {
  process.exit(1);
}

console.log("[inline-check] OK - aucun handler inline interdit détecté.");
