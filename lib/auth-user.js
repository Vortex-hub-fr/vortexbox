const crypto = require("crypto");

const AUTH_AUTO_ACTIVATE_ON_EMAIL_FAILURE =
  String(process.env.AUTH_AUTO_ACTIVATE_ON_EMAIL_FAILURE || "0") === "1";

function createUserAuthRouteHandler(deps = {}) {
  const {
    fsp,
    dataDir,
    authUsersFile,
    writeJsonAtomic,
    readJsonBody,
    sendJson,
    isValidOutlookEmail,
    isAdminEmailCandidate,
    isRateLimited,
    isRateLimitedByIdentifier,
    isTrustedOrigin,
    hasJsonContentType,
    sendAuthCodeEmail,
    authCodeCooldownStore,
    hashPasswordScrypt,
    verifyScryptHash,
    createUserSession,
    buildUserSessionCookie,
    getUserSession,
    clearUserSession,
    buildUserSessionClearCookie,
  } = deps;

  async function readAuthUsersFromDisk() {
    try {
      const raw = await fsp.readFile(authUsersFile, "utf8");
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed?.users)) return [];
      return parsed.users
        .filter((item) => item && typeof item.email === "string")
        .map((item) => ({
          email: String(item.email || "").trim().toLowerCase(),
          passwordHash: String(item.passwordHash || ""),
          displayName: String(item.displayName || ""),
          profilePhoto: String(item.profilePhoto || ""),
          totalConnectionSeconds: Math.max(0, Math.floor(Number(item.totalConnectionSeconds) || 0)),
          lastSeenAt: String(item.lastSeenAt || ""),
          isActive: Boolean(item.isActive),
          revoked: Boolean(item.revoked),
          blacklisted: Boolean(item.blacklisted),
          activationCode: String(item.activationCode || ""),
          activationExpiresAt: Number(item.activationExpiresAt || 0),
          activationSentAt: String(item.activationSentAt || ""),
          resetCode: String(item.resetCode || ""),
          resetCodeExpiresAt: Number(item.resetCodeExpiresAt || 0),
        }));
    } catch (error) {
      return [];
    }
  }

  async function writeAuthUsersToDisk(users) {
    await fsp.mkdir(dataDir, { recursive: true });
    await writeJsonAtomic(authUsersFile, {
      updatedAt: new Date().toISOString(),
      users: Array.isArray(users) ? users : [],
    });
  }

  function generateNumericCode(length = 6) {
    const size = Math.max(4, Math.min(10, Math.floor(Number(length) || 6)));
    const chars = "0123456789";
    let out = "";
    for (let i = 0; i < size; i += 1) {
      out += chars[crypto.randomInt(0, chars.length)];
    }
    return out;
  }

  function withAuthEmailTimeout(promise, timeoutMs = 12000) {
    const safeTimeoutMs = Math.max(3000, Number(timeoutMs) || 12000);
    return Promise.race([
      promise,
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: false,
            status: 504,
            error: "Serveur email temporairement indisponible. Reessayez dans quelques secondes.",
          });
        }, safeTimeoutMs);
      }),
    ]);
  }

  function sanitizeAuthUserForClient(user) {
    return {
      email: String(user?.email || "").trim().toLowerCase(),
      displayName: String(user?.displayName || ""),
      profilePhoto: String(user?.profilePhoto || ""),
      totalConnectionSeconds: Math.max(0, Math.floor(Number(user?.totalConnectionSeconds) || 0)),
      lastSeenAt: String(user?.lastSeenAt || ""),
      isActive: Boolean(user?.isActive),
      revoked: Boolean(user?.revoked),
      blacklisted: Boolean(user?.blacklisted),
      activationSentAt: String(user?.activationSentAt || ""),
    };
  }

  async function handleAuthRequestActivation(req, res) {
    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!isValidOutlookEmail(email)) {
      sendJson(res, 400, { ok: false, error: "Email Outlook invalide." });
      return;
    }
    if (isAdminEmailCandidate(email)) {
      sendJson(res, 403, { ok: false, error: "Cet email est réservé à l'administrateur." });
      return;
    }
    if (password.length < 6) {
      sendJson(res, 400, { ok: false, error: "Mot de passe trop court (6 caractères minimum)." });
      return;
    }
    if (isRateLimitedByIdentifier("auth-activation-request-email", email, 6, 10 * 60 * 1000)) {
      sendJson(res, 429, { ok: false, error: "Trop de demandes pour cet email. Réessayez plus tard." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const now = Date.now();
    const existing = users.find((user) => user.email === email);
    if (existing?.revoked || existing?.blacklisted) {
      sendJson(res, 403, { ok: false, error: "Compte bloqué. Contactez l'administrateur." });
      return;
    }
    if (existing?.isActive) {
      sendJson(res, 409, { ok: false, error: "Ce compte existe déjà. Passez en mode connexion." });
      return;
    }

    const code = generateNumericCode(6);
    const passwordHash = hashPasswordScrypt(password);
    const nextUser = {
      email,
      passwordHash,
      displayName: existing?.displayName || "",
      profilePhoto: existing?.profilePhoto || "",
      totalConnectionSeconds: Math.max(0, Math.floor(Number(existing?.totalConnectionSeconds) || 0)),
      lastSeenAt: String(existing?.lastSeenAt || ""),
      isActive: false,
      revoked: false,
      blacklisted: false,
      activationCode: code,
      activationExpiresAt: now + 15 * 60 * 1000,
      activationSentAt: new Date(now).toISOString(),
      resetCode: "",
      resetCodeExpiresAt: 0,
    };

    const nextUsers = users.filter((user) => user.email !== email);
    nextUsers.push(nextUser);

    const sent = await withAuthEmailTimeout(sendAuthCodeEmail(email, code, "activation"));
    if (!sent.ok) {
      if (AUTH_AUTO_ACTIVATE_ON_EMAIL_FAILURE && Number(sent.status || 0) >= 500) {
        nextUser.isActive = true;
        nextUser.activationCode = "";
        nextUser.activationExpiresAt = 0;
        nextUser.activationSentAt = "";
        nextUser.lastSeenAt = new Date(now).toISOString();
        await writeAuthUsersToDisk(nextUsers);
        const token = createUserSession(email, true);
        sendJson(
          res,
          200,
          {
            ok: true,
            autoActivated: true,
            email,
            user: sanitizeAuthUserForClient(nextUser),
            warning: "Email indisponible: compte active automatiquement.",
          },
          { "Set-Cookie": buildUserSessionCookie(req, token) }
        );
        return;
      }
      sendJson(res, sent.status || 500, { ok: false, error: sent.error || "Echec envoi email." });
      return;
    }

    await writeAuthUsersToDisk(nextUsers);
    authCodeCooldownStore.set(email, now);
    sendJson(res, 200, {
      ok: true,
      pendingActivation: true,
      email,
      expiresInSec: 15 * 60,
    });
  }

  async function handleAuthActivate(req, res) {
    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");
    const code = String(body?.code || "").trim();
    const remember = body?.remember === undefined ? true : Boolean(body.remember);

    if (!isValidOutlookEmail(email) || !/^\d{6}$/.test(code)) {
      sendJson(res, 400, { ok: false, error: "Email ou code invalide." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === email);
    if (!found) {
      sendJson(res, 404, { ok: false, error: "Compte introuvable." });
      return;
    }
    if (found.revoked || found.blacklisted) {
      sendJson(res, 403, { ok: false, error: "Compte bloqué. Contactez l'administrateur." });
      return;
    }
    if (found.isActive) {
      sendJson(res, 409, { ok: false, error: "Compte déjà activé. Connectez-vous." });
      return;
    }
    if (!verifyScryptHash(password, found.passwordHash)) {
      sendJson(res, 401, { ok: false, error: "Mot de passe incorrect." });
      return;
    }
    if (found.activationCode !== code || Number(found.activationExpiresAt || 0) < Date.now()) {
      sendJson(res, 401, { ok: false, error: "Code invalide ou expiré." });
      return;
    }

    found.isActive = true;
    found.activationCode = "";
    found.activationExpiresAt = 0;
    found.activationSentAt = "";
    found.lastSeenAt = new Date().toISOString();
    await writeAuthUsersToDisk(users);

    const token = createUserSession(email, remember);
    sendJson(
      res,
      200,
      { ok: true, email, user: sanitizeAuthUserForClient(found) },
      { "Set-Cookie": buildUserSessionCookie(req, token) }
    );
  }

  async function handleAuthLogin(req, res) {
    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");
    const remember = body?.remember === undefined ? true : Boolean(body.remember);
    if (!isValidOutlookEmail(email)) {
      sendJson(res, 400, { ok: false, error: "Email Outlook invalide." });
      return;
    }
    if (isAdminEmailCandidate(email)) {
      sendJson(res, 403, { ok: false, error: "Utilisez la connexion administrateur dédiée." });
      return;
    }
    if (password.length < 6) {
      sendJson(res, 400, { ok: false, error: "Mot de passe trop court (6 caractères minimum)." });
      return;
    }
    if (isRateLimitedByIdentifier("auth-login-email", email, 12, 10 * 60 * 1000)) {
      sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === email);
    if (!found) {
      sendJson(res, 401, { ok: false, error: "Identifiants incorrects." });
      return;
    }
    if (found.revoked || found.blacklisted) {
      sendJson(res, 403, { ok: false, error: "Compte bloqué. Contactez l'administrateur." });
      return;
    }
    if (!found.isActive) {
      sendJson(res, 403, { ok: false, error: "Compte non activé.", pendingActivation: true, email });
      return;
    }
    if (!verifyScryptHash(password, found.passwordHash)) {
      sendJson(res, 401, { ok: false, error: "Identifiants incorrects." });
      return;
    }

    found.lastSeenAt = new Date().toISOString();
    await writeAuthUsersToDisk(users);
    const token = createUserSession(email, remember);
    sendJson(
      res,
      200,
      { ok: true, email, user: sanitizeAuthUserForClient(found) },
      { "Set-Cookie": buildUserSessionCookie(req, token) }
    );
  }

  async function handleAuthRequestReset(req, res) {
    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    if (!isValidOutlookEmail(email)) {
      sendJson(res, 400, { ok: false, error: "Email Outlook invalide." });
      return;
    }
    if (isRateLimitedByIdentifier("auth-reset-request-email", email, 5, 10 * 60 * 1000)) {
      sendJson(res, 429, { ok: false, error: "Trop de demandes pour cet email. Réessayez plus tard." });
      return;
    }
    const lastSentAt = Number(authCodeCooldownStore.get(email) || 0);
    if (Date.now() - lastSentAt < 60 * 1000) {
      sendJson(res, 429, { ok: false, error: "Veuillez attendre 60 secondes avant un nouveau code." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === email);
    if (!found || found.revoked || found.blacklisted || !found.isActive) {
      sendJson(res, 200, { ok: true });
      return;
    }

    const code = generateNumericCode(6);
    found.resetCode = code;
    found.resetCodeExpiresAt = Date.now() + 10 * 60 * 1000;
    const sent = await withAuthEmailTimeout(sendAuthCodeEmail(email, code, "reset"));
    if (!sent.ok) {
      sendJson(res, sent.status || 500, { ok: false, error: sent.error || "Echec envoi email." });
      return;
    }
    await writeAuthUsersToDisk(users);
    authCodeCooldownStore.set(email, Date.now());
    sendJson(res, 200, { ok: true });
  }

  async function handleAuthConfirmReset(req, res) {
    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    const newPassword = String(body?.newPassword || "");
    const code = String(body?.code || "").trim();
    if (!isValidOutlookEmail(email) || !/^\d{6}$/.test(code)) {
      sendJson(res, 400, { ok: false, error: "Email ou code invalide." });
      return;
    }
    if (newPassword.length < 6) {
      sendJson(res, 400, { ok: false, error: "Mot de passe trop court (6 caractères minimum)." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === email);
    if (!found) {
      sendJson(res, 404, { ok: false, error: "Compte introuvable." });
      return;
    }
    if (found.revoked || found.blacklisted) {
      sendJson(res, 403, { ok: false, error: "Compte bloqué. Contactez l'administrateur." });
      return;
    }
    if (found.resetCode !== code || Number(found.resetCodeExpiresAt || 0) < Date.now()) {
      sendJson(res, 401, { ok: false, error: "Code invalide ou expiré." });
      return;
    }

    found.passwordHash = hashPasswordScrypt(newPassword);
    found.resetCode = "";
    found.resetCodeExpiresAt = 0;
    await writeAuthUsersToDisk(users);
    sendJson(res, 200, { ok: true });
  }

  async function handleAuthChangePassword(req, res) {
    const session = getUserSession(req);
    if (!session) {
      sendJson(res, 401, { ok: false, error: "Session utilisateur requise." });
      return;
    }

    const body = await readJsonBody(req);
    const email = String(body?.email || "").trim().toLowerCase();
    const currentPassword = String(body?.currentPassword || "");
    const newPassword = String(body?.newPassword || "");
    if (!email || email !== session.email) {
      sendJson(res, 403, { ok: false, error: "Action non autorisée pour cet utilisateur." });
      return;
    }
    if (newPassword.length < 6) {
      sendJson(res, 400, { ok: false, error: "Le nouveau mot de passe doit contenir au moins 6 caractères." });
      return;
    }

    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === email);
    if (!found) {
      sendJson(res, 404, { ok: false, error: "Profil utilisateur introuvable." });
      return;
    }
    if (!verifyScryptHash(currentPassword, found.passwordHash)) {
      sendJson(res, 401, { ok: false, error: "Mot de passe actuel incorrect." });
      return;
    }
    found.passwordHash = hashPasswordScrypt(newPassword);
    await writeAuthUsersToDisk(users);
    sendJson(res, 200, { ok: true });
  }

  async function handleAuthSession(req, res) {
    const session = getUserSession(req);
    if (!session) {
      sendJson(res, 401, { ok: false, error: "Session utilisateur absente." });
      return;
    }
    const users = await readAuthUsersFromDisk();
    const found = users.find((user) => user.email === session.email);
    if (!found || !found.isActive || found.revoked || found.blacklisted) {
      if (session.token) clearUserSession(session.token);
      sendJson(
        res,
        401,
        { ok: false, error: "Session utilisateur invalide." },
        { "Set-Cookie": buildUserSessionClearCookie(req) }
      );
      return;
    }
    sendJson(res, 200, { ok: true, email: found.email, user: sanitizeAuthUserForClient(found) });
  }

  function handleAuthLogout(req, res) {
    const session = getUserSession(req);
    if (session?.token) clearUserSession(session.token);
    sendJson(
      res,
      200,
      { ok: true },
      {
        "Set-Cookie": buildUserSessionClearCookie(req),
      }
    );
  }

  return async function handleUserAuthRoute(req, res, url) {
    if (!url?.pathname?.startsWith("/api/auth/")) return false;

    if (req.method === "GET" && url.pathname === "/api/auth/session") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      await handleAuthSession(req, res);
      return true;
    }

    if (req.method === "POST" && url.pathname === "/api/auth/logout") {
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
      handleAuthLogout(req, res);
      return true;
    }

    if (
      req.method === "POST" &&
      [
        "/api/auth/login",
        "/api/auth/request-activation",
        "/api/auth/activate",
        "/api/auth/request-reset",
        "/api/auth/confirm-reset",
        "/api/auth/change-password",
      ].includes(url.pathname)
    ) {
      if (!hasJsonContentType(req)) {
        sendJson(res, 415, { ok: false, error: "Content-Type JSON requis." });
        return true;
      }
      if (!isTrustedOrigin(req)) {
        sendJson(res, 403, { ok: false, error: "Origine non autorisée." });
        return true;
      }
    }

    if (req.method === "POST" && url.pathname === "/api/auth/login") {
      if (isRateLimited(req, "auth-login", 20, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthLogin(req, res);
      return true;
    }
    if (req.method === "POST" && url.pathname === "/api/auth/request-activation") {
      if (isRateLimited(req, "auth-request-activation", 10, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthRequestActivation(req, res);
      return true;
    }
    if (req.method === "POST" && url.pathname === "/api/auth/activate") {
      if (isRateLimited(req, "auth-activate", 12, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthActivate(req, res);
      return true;
    }
    if (req.method === "POST" && url.pathname === "/api/auth/request-reset") {
      if (isRateLimited(req, "auth-request-reset", 8, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthRequestReset(req, res);
      return true;
    }
    if (req.method === "POST" && url.pathname === "/api/auth/confirm-reset") {
      if (isRateLimited(req, "auth-confirm-reset", 12, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthConfirmReset(req, res);
      return true;
    }
    if (req.method === "POST" && url.pathname === "/api/auth/change-password") {
      if (isRateLimited(req, "auth-change-password", 20, 10 * 60 * 1000)) {
        sendJson(res, 429, { ok: false, error: "Trop de tentatives. Réessayez plus tard." });
        return true;
      }
      await handleAuthChangePassword(req, res);
      return true;
    }
    return false;
  };
}

module.exports = {
  createUserAuthRouteHandler,
};
