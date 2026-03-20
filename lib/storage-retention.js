const fsp = require("fs/promises");
const path = require("path");

async function cleanupDirectoryByRetention(directoryPath, maxAgeDays, keepMinFiles) {
  try {
    const dirEntries = await fsp.readdir(directoryPath, { withFileTypes: true });
    const files = [];
    for (const entry of dirEntries) {
      if (!entry.isFile()) continue;
      const absolute = path.join(directoryPath, entry.name);
      try {
        const stat = await fsp.stat(absolute);
        files.push({
          absolute,
          mtimeMs: Number(stat.mtimeMs || 0),
          size: Number(stat.size || 0),
        });
      } catch (error) {}
    }
    if (!files.length) return { removedFiles: 0, removedBytes: 0 };

    files.sort((a, b) => b.mtimeMs - a.mtimeMs);
    const thresholdMs = Date.now() - Math.max(1, Number(maxAgeDays || 1)) * 24 * 60 * 60 * 1000;
    const keepCount = Math.max(0, Math.floor(Number(keepMinFiles) || 0));
    const candidates = files
      .map((item, index) => ({ ...item, index }))
      .filter((item) => item.index >= keepCount && item.mtimeMs > 0 && item.mtimeMs < thresholdMs);

    let removedFiles = 0;
    let removedBytes = 0;
    for (const file of candidates) {
      try {
        await fsp.unlink(file.absolute);
        removedFiles += 1;
        removedBytes += Math.max(0, Number(file.size || 0));
      } catch (error) {}
    }
    return { removedFiles, removedBytes };
  } catch (error) {
    return { removedFiles: 0, removedBytes: 0 };
  }
}

async function runStorageRetentionCleanup(options = {}) {
  const backupsDir = String(options.backupsDir || "");
  const contentBackupsDir = String(options.contentBackupsDir || "");
  const backupsRetentionDays = Math.max(1, Number(options.backupsRetentionDays || 90));
  const contentBackupsRetentionDays = Math.max(1, Number(options.contentBackupsRetentionDays || 30));
  const backupsKeepMinFiles = Math.max(0, Math.floor(Number(options.backupsKeepMinFiles || 8)));
  const contentBackupsKeepMinFiles = Math.max(0, Math.floor(Number(options.contentBackupsKeepMinFiles || 30)));
  const logger = options.logger && typeof options.logger.log === "function" ? options.logger : console;

  const [backupStats, contentBackupStats] = await Promise.all([
    cleanupDirectoryByRetention(backupsDir, backupsRetentionDays, backupsKeepMinFiles),
    cleanupDirectoryByRetention(contentBackupsDir, contentBackupsRetentionDays, contentBackupsKeepMinFiles),
  ]);

  const removedFiles = Number(backupStats.removedFiles || 0) + Number(contentBackupStats.removedFiles || 0);
  const removedBytes = Number(backupStats.removedBytes || 0) + Number(contentBackupStats.removedBytes || 0);
  if (removedFiles > 0) {
    const removedMb = Math.round((removedBytes / (1024 * 1024)) * 10) / 10;
    logger.log(
      `[retention] ${removedFiles} fichier(s) supprimé(s), ${removedMb} MB libérés (backups=${backupStats.removedFiles}, content-backups=${contentBackupStats.removedFiles}).`
    );
  }
  return {
    backupStats,
    contentBackupStats,
    removedFiles,
    removedBytes,
  };
}

module.exports = {
  cleanupDirectoryByRetention,
  runStorageRetentionCleanup,
};
