function createUploadRouteHandler(deps = {}) {
  const {
    hasJsonContentType,
    isTrustedOrigin,
    isRateLimited,
    sendJson,
    requireAdminSession,
    handleUpload,
    handleBinaryUpload,
    handleGetUploadProgress,
    handleListUploads,
    handleDeleteUpload,
    handleImportGamesCoversZip,
  } = deps;

  return async function handleUploadRoute(req, res, url) {
    if (req.method === "POST" && url.pathname === "/api/upload") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "upload", 30, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'uploads. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleUpload(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/upload-binary") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "upload-binary", 20, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'uploads. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleBinaryUpload(req, res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/upload-progress") {
      await handleGetUploadProgress(url, res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/uploads-list") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "uploads-list", 120, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de requêtes. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleListUploads(url, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/delete-upload") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "delete-upload", 40, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de suppressions. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleDeleteUpload(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/import-games-covers-zip") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "import-games-covers-zip", 8, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'imports. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleImportGamesCoversZip(req, res);
      return true;
    }

    return false;
  };
}

module.exports = {
  createUploadRouteHandler,
};
