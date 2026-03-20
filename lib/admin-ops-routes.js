function createAdminOpsRouteHandler(deps = {}) {
  const {
    isRateLimited,
    sendJson,
    requireAdminSession,
    handleAdminRailwayStatus,
    handleBackupSiteZip,
    handleRunRailwayUpdateTerminal,
  } = deps;

  return async function handleAdminOpsRoute(req, res, url) {
    if (req.method === "GET" && url.pathname === "/api/admin/railway-status") {
      if (isRateLimited(req, "admin-railway-status", 120, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de requêtes statut Railway. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleAdminRailwayStatus(res);
      return true;
    }

    if (req.method === "GET" && url.pathname === "/api/backup-site-zip") {
      if (isRateLimited(req, "backup-zip", 4, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de demandes de sauvegarde. Réessayez plus tard." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleBackupSiteZip(res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/run-railway-update-terminal") {
      if (isRateLimited(req, "run-railway-update-terminal", 6, 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez dans 1 minute." });
        return true;
      }
      if (!requireAdminSession(req, res)) return true;
      await handleRunRailwayUpdateTerminal(req, res);
      return true;
    }

    return false;
  };
}

module.exports = {
  createAdminOpsRouteHandler,
};
