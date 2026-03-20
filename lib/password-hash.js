const crypto = require("crypto");

function hashPasswordScrypt(password) {
  const candidate = String(password || "");
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(candidate, salt, 64);
  return `scrypt$${salt.toString("base64")}$${hash.toString("base64")}`;
}

function verifyScryptHash(password, encodedHash) {
  const candidate = String(password || "");
  const raw = String(encodedHash || "").trim();
  const parts = raw.split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  try {
    const salt = Buffer.from(parts[1], "base64");
    const expected = Buffer.from(parts[2], "base64");
    if (!salt.length || !expected.length) return false;
    const derived = crypto.scryptSync(candidate, salt, expected.length);
    return crypto.timingSafeEqual(derived, expected);
  } catch (error) {
    return false;
  }
}

module.exports = {
  hashPasswordScrypt,
  verifyScryptHash,
};
