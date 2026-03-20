function createContentRouteHandler(deps = {}) {
  const {
    hasJsonContentType,
    isTrustedOrigin,
    isRateLimited,
    sendJson,
    requireAdminSession,
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
  } = deps;

  return async function handleContentRoute(req, res, url) {
    if (req.method === "POST" && url.pathname === "/api/save-content") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "save-content", 240, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de sauvegardes. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleSaveContent(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/save-technical-sheet-image") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "save-technical-sheet-image", 240, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de sauvegardes. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleSaveTechnicalSheetImage(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/save-configurator-media") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "save-configurator-media", 240, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de sauvegardes. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleSaveConfiguratorMedia(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/save-premium-photo-source") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "save-premium-photo-source", 120, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de sauvegardes. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleSavePremiumPhotoSource(req, res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/content-admin") {
      if (!requireAdminSession(req, res)) return true;
      await handleGetContent(res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/content") {
      const session = getAdminSession(req);
      if (session && isAdminEmailCandidate(session.email)) await handleGetContent(res);
      else await handleGetPublicContent(res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/content-public") {
      await handleGetPublicContent(res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/games-catalog") {
      await handleGetGamesCatalog(res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/save-user-state") {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      if (isRateLimited(req, "save-user-state", 40, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop d'écritures. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleSaveUserState(req, res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/user-state") {
      if (!requireAdminSession(req, res)) return true;
      await handleGetUserState(res);
      return true;
    }

    return false;
  };
}

module.exports = {
  createContentRouteHandler,
};
