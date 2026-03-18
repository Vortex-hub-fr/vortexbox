const STORAGE_KEY = "vortexbox-content";
const AUTH_SESSION_KEY = "vortexbox-auth-user";
const USER_LOG_KEY = "vortexbox-user-log";
const SITE_USERS_KEY = "vortexbox-site-users";
const PENDING_ACTIVATION_KEY = "vortexbox-pending-activation";
const AUTH_REMEMBER_KEY = "vortexbox-auth-remember";
const AUTH_RESET_CODES_KEY = "vortexbox-reset-codes";
const USER_CONFIGS_KEY = "vortexbox-user-configs";
const PROMO_CODES_KEY = "vortexbox-promo-codes";
const ADMIN_PROFILE_PHOTO_KEY = "vortexbox-admin-profile-photo";
const ADMIN_EMAIL = "vortexcore@outlook.fr";
const SESSION_KEY = "vortexbox-admin";

const authGateEl = document.getElementById("auth-gate");
const siteLoginFormEl = document.getElementById("site-login-form");
const siteLoginEmailEl = document.getElementById("site-login-email");
const siteLoginPasswordEl = document.getElementById("site-login-password");
const siteActivationCodeEl = document.getElementById("site-activation-code");
const activationStepEl = document.getElementById("activation-step");
const siteActivateBtnEl = document.getElementById("site-activate-btn");
const siteLoginFeedbackEl = document.getElementById("site-login-feedback");
const authRememberEl = document.getElementById("auth-remember");
const authForgotToggleEl = document.getElementById("auth-forgot-toggle");
const authResetStepEl = document.getElementById("auth-reset-step");
const authResetEmailEl = document.getElementById("auth-reset-email");
const authResetPasswordEl = document.getElementById("auth-reset-password");
const authResetCodeEl = document.getElementById("auth-reset-code");
const authResetSendBtnEl = document.getElementById("auth-reset-send-btn");
const authResetConfirmBtnEl = document.getElementById("auth-reset-confirm-btn");
const authResetFeedbackEl = document.getElementById("auth-reset-feedback");
const authPasswordStrengthEl = document.getElementById("auth-password-strength");
const authPasswordStrengthLabelEl = document.getElementById("auth-password-strength-label");
const authModeUserBtn = document.getElementById("auth-mode-user");
const authModeNewBtn = document.getElementById("auth-mode-new");
const adminToggle = document.getElementById("admin-toggle");
const adminLiveExitBtn = document.getElementById("admin-live-exit");
const userProfileToggleBtn = document.getElementById("user-profile-toggle");
const userLogoutBtn = document.getElementById("user-logout");
const navSmartSearchInputEl = document.getElementById("nav-smart-search");
const navSmartResultsEl = document.getElementById("nav-smart-results");
const bgMusicControlEl = document.getElementById("bg-music-control");
const bgMusicToggleEl = document.getElementById("bg-music-toggle");
const bgMusicEl = document.getElementById("bg-music");
const cookieBannerEl = document.getElementById("cookie-banner");
const cookieCustomizePanelEl = document.getElementById("cookie-customize-panel");
const cookieAcceptAllBtn = document.getElementById("cookie-accept-all");
const cookieRejectAllBtn = document.getElementById("cookie-reject-all");
const cookieOpenCustomizeBtn = document.getElementById("cookie-open-customize");
const cookieSaveCustomBtn = document.getElementById("cookie-save-custom");
const cookieCancelCustomBtn = document.getElementById("cookie-cancel-custom");
const cookieConsentPreferencesEl = document.getElementById("cookie-consent-preferences");
const cookieConsentAnalyticsEl = document.getElementById("cookie-consent-analytics");
const footerContactEmailEl = document.getElementById("footer-contact-email");
const footerLegalMentionsBtnEl = document.getElementById("footer-legal-mentions-btn");
const footerLegalCgvBtnEl = document.getElementById("footer-legal-cgv-btn");
const footerLegalRgpdBtnEl = document.getElementById("footer-legal-rgpd-btn");
const footerLegalCookiesBtnEl = document.getElementById("footer-legal-cookies-btn");
const legalModalEl = document.getElementById("legal-modal");
const legalModalTitleEl = document.getElementById("legal-modal-title");
const legalModalContentEl = document.getElementById("legal-modal-content");
const legalModalCloseEl = document.getElementById("legal-modal-close");
const vortexBotEl = document.getElementById("vortexbot");
const vortexBotToggleEl = document.getElementById("vortexbot-toggle");
const vortexBotPanelEl = document.getElementById("vortexbot-panel");
const vortexBotCloseEl = document.getElementById("vortexbot-close");
const vortexBotMessagesEl = document.getElementById("vortexbot-messages");
const faqListEl = document.getElementById("faq-list");
const gamesGridEl = document.getElementById("games-catalog-grid");
const gamesSearchInputEl = document.getElementById("games-search-input");
const gamesResultsToolbarEl = document.getElementById("games-results-toolbar");
const supportSavBadgeEl = document.getElementById("support-sav-badge");
const supportSavTitleEl = document.getElementById("support-sav-title");
const supportSavSubtitleEl = document.getElementById("support-sav-subtitle");
const supportSavCardsEl = document.getElementById("support-sav-cards");
const supportSavStepsEl = document.getElementById("support-sav-steps");
const supportSavCtaEl = document.getElementById("support-sav-cta");
const BG_MUSIC_KEY = "vortexbox-bg-music-enabled";
const COOKIE_CONSENT_KEY = "vortexbox-cookie-consent";
const ADMIN_LIVE_MODE_KEY = "vortexbox-admin-live-mode";
let gamesCatalogDraft = [];
let gamesAdminSaving = false;
let gamesSearchTerm = "";
let gamesCurrentPage = 1;
let gamesPageSize = 24;
let gamesCatalogCache = [];

function bindVortexBotFallbackDelegation() {
  if (window.__vbBotFallbackBound) return;
  window.__vbBotFallbackBound = true;
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".vortexbot-toggle, #vortexbot-toggle");
    if (toggle) {
      if (toggle.dataset.vbBound === "1") return;
      const scope = toggle.closest(".vortexbot") || document;
      const panel = scope.querySelector(".vortexbot-panel, #vortexbot-panel");
      if (!panel) return;
      const opening = panel.classList.contains("hidden");
      panel.classList.toggle("hidden", !opening);
      toggle.setAttribute("aria-expanded", opening ? "true" : "false");
      return;
    }
    const closeBtn = event.target.closest(".vortexbot-close, #vortexbot-close");
    if (closeBtn) {
      if (closeBtn.dataset.vbBound === "1") return;
      const scope = closeBtn.closest(".vortexbot") || document;
      const panel = scope.querySelector(".vortexbot-panel, #vortexbot-panel");
      const localToggle = scope.querySelector(".vortexbot-toggle, #vortexbot-toggle");
      if (!panel) return;
      panel.classList.add("hidden");
      localToggle?.setAttribute("aria-expanded", "false");
    }
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function bindProgressiveMedia(root = document) {
  if (!root || typeof root.querySelectorAll !== "function") return;
  const hosts = root.querySelectorAll(".progressive-media-host");
  hosts.forEach((host) => {
    if (!(host instanceof HTMLElement)) return;
    if (host.dataset.progressiveBound === "1") return;
    host.dataset.progressiveBound = "1";
    host.classList.add("is-media-loading");
    const image = host.querySelector("img.js-progressive-media");
    if (!(image instanceof HTMLImageElement)) {
      host.classList.add("is-media-loaded");
      return;
    }
    const markLoaded = () => {
      host.classList.add("is-media-loaded");
      image.classList.add("is-media-loaded");
    };
    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
      return;
    }
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener(
      "error",
      () => {
        window.setTimeout(() => {
          if (image.complete && image.naturalWidth > 0) markLoaded();
        }, 120);
      },
      { once: true }
    );
  });
}

const fallbackFaq = [
  {
    question: "Pourquoi choisir une VortexBox plutôt qu’un PC gaming classique ?",
    answer: "Une VortexBox n’est pas pensée comme un simple ordinateur assemblé, mais comme une solution gaming prête à l’emploi, testée et optimisée avant livraison.\nChaque build est sélectionné pour offrir un excellent équilibre entre performances, stabilité, silence et évolutivité.\nVous gagnez du temps, vous évitez les erreurs de compatibilité, et vous profitez d’une machine immédiatement exploitable.\nL’objectif est clair : vous livrer une expérience premium, fluide et rassurante dès le premier démarrage.",
  },
  {
    question: "La VortexBox est-elle prête à jouer dès la réception ?",
    answer: "Oui, votre VortexBox arrive configurée pour être utilisée immédiatement dans les meilleures conditions.\nLe système, les pilotes essentiels et l’environnement de jeu sont préparés pour offrir un démarrage simple et rapide.\nVous n’avez pas à passer des heures à installer ou à optimiser la machine avant d’en profiter.\nUne fois connectée, vous pouvez finaliser vos comptes et commencer à jouer sans procédure complexe.",
  },
  {
    question: "Puis-je personnaliser ma configuration avant l’achat ?",
    answer: "Oui, le configurateur VortexBox est justement conçu pour vous permettre de sélectionner les composants et options qui correspondent à votre usage.\nVous pouvez choisir votre base matérielle, vos références, vos services complémentaires et ajuster le projet selon votre budget.\nCette approche permet de construire un build plus cohérent avec vos jeux, votre résolution cible et vos attentes en confort.\nSi besoin, nous pouvons aussi vous guider pour éviter un choix trop faible ou au contraire inutilement surdimensionné.",
  },
  {
    question: "Quels délais faut-il prévoir pour la préparation et l’expédition ?",
    answer: "Chaque VortexBox est préparée avec une logique qualité, ce qui implique assemblage, configuration et validation avant départ.\nEn moyenne, il faut compter entre 3 et 7 jours ouvrés selon la complexité de la configuration et les composants retenus.\nCe délai permet d’effectuer les réglages et les tests nécessaires pour éviter les mauvaises surprises à la réception.\nNous privilégions une machine bien préparée plutôt qu’un envoi trop rapide sans contrôle sérieux.",
  },
  {
    question: "Quels contrôles sont réalisés avant l’envoi d’un build ?",
    answer: "Avant expédition, chaque build passe par une série de vérifications visant à garantir sa stabilité et sa cohérence globale.\nLes performances, les températures, le comportement en charge et le bon fonctionnement des composants sont contrôlés avec attention.\nCette phase permet de confirmer que la machine est réellement prête à être utilisée dans de bonnes conditions.\nC’est un point essentiel de l’expérience VortexBox : livrer un build validé, pas seulement monté.",
  },
  {
    question: "La garantie VortexBox couvre-t-elle bien le matériel ?",
    answer: "Oui, les VortexBox bénéficient d’une garantie matérielle de 2 ans conformément à ce qui est affiché sur le site.\nCette garantie concerne le matériel dans le cadre d’un usage normal et selon les conditions prévues par la boutique.\nEn cas de doute, notre équipe peut vous orienter vers la bonne procédure afin d’ouvrir un dossier proprement.\nL’objectif est d’assurer un suivi sérieux, compréhensible et professionnel après votre achat.",
  },
  {
    question: "Le support technique reste-t-il disponible après la livraison ?",
    answer: "Oui, l’accompagnement ne s’arrête pas au moment où la machine est expédiée.\nNous pouvons vous aider pour la prise en main, les questions techniques, les vérifications de base et les conseils d’évolution.\nLe support a été pensé pour rassurer les utilisateurs qui veulent un interlocuteur clair et réactif.\nVous n’êtes donc pas laissé seul après l’achat : le suivi fait partie de l’expérience VortexBox.",
  },
  {
    question: "La VortexBox convient-elle réellement aux jeux récents et exigeants ?",
    answer: "Oui, les configurations proposées sont orientées pour répondre aux attentes du gaming moderne, y compris sur des titres récents plus lourds.\nLe but n’est pas seulement d’obtenir des FPS, mais de proposer une machine équilibrée, stable et agréable à utiliser dans la durée.\nLes composants sont choisis pour préserver un bon niveau de fluidité, de confort thermique et de fiabilité générale.\nVous profitez ainsi d’un build crédible pour jouer aujourd’hui, mais aussi pour rester pertinent dans le temps.",
  },
  {
    question: "Est-ce une machine adaptée à un utilisateur débutant ?",
    answer: "Oui, une VortexBox est pensée pour être simple à prendre en main, même si vous n’avez pas l’habitude du matériel informatique.\nLa préparation en amont réduit fortement les manipulations techniques souvent sources d’erreurs ou de stress.\nVous bénéficiez d’un système plus lisible, plus prêt, et d’un accompagnement si vous avez besoin d’être guidé.\nCela permet de profiter d’un vrai PC gaming sans devoir devenir expert dès le premier jour.",
  },
  {
    question: "Puis-je enregistrer ma configuration ou la reprendre plus tard ?",
    answer: "Oui, votre espace utilisateur permet de sauvegarder vos configurations pour les retrouver ultérieurement.\nC’est utile si vous comparez plusieurs versions, si vous hésitez encore, ou si vous souhaitez reprendre votre projet plus tard.\nCette fonction vous aide à construire votre build sans pression et sans perdre vos sélections précédentes.\nVous gardez ainsi une continuité claire entre votre réflexion, vos essais et votre décision finale.",
  },
  {
    question: "Comment fonctionne l’offre Option DLC via code promo ?",
    answer: "L’Option DLC gratuite fonctionne via un code promo personnel demandé sur Telegram puis saisi dans le configurateur.\nCe code est associé à votre adresse email et son usage est contrôlé afin d’éviter les activations multiples non prévues.\nUne fois le code validé, l’option concernée est automatiquement prise en compte dans votre configuration.\nLe système a été conçu pour rester simple côté utilisateur, tout en gardant une logique propre côté administration.",
  },
  {
    question: "Les fiches techniques et informations produit sont-elles consultables avant achat ?",
    answer: "Oui, le site met à disposition des fiches techniques, des visuels, des informations détaillées et des éléments de comparaison pour vous aider à choisir.\nCes contenus ont pour but de rendre la décision plus claire, plus transparente et plus professionnelle.\nVous pouvez ainsi mieux comprendre la logique de chaque build avant de passer à l’étape de commande.\nCela participe à une expérience d’achat plus rassurante et plus qualitative.",
  },
];
const LEGAL_FALLBACK = {
  footerContactEmail: "VortexCore@outlook.Fr",
  legal: {
    mentions: {
      label: "Mentions légales",
      title: "Mentions légales",
      content:
        "Éditeur: VortexBox, Paris. Contact: VortexCore@outlook.Fr.\nHébergement: Serveur local/client.\nTous droits réservés.",
    },
    cgv: {
      label: "Conditions générales de vente",
      title: "Conditions générales de vente",
      content:
        "Les prix sont indiqués en euros TTC. Toute commande validée implique l'acceptation des conditions de vente. Garantie matérielle de 2 ans sur les VortexBox.",
    },
    rgpd: {
      label: "Politique de confidentialité RGPD",
      title: "Politique de confidentialité RGPD",
      content:
        "Vos données (email, profil, avis) sont utilisées uniquement pour le fonctionnement de votre compte VortexBox. Vous pouvez demander la modification ou suppression de vos données via VortexCore@outlook.Fr.",
    },
    cookies: {
      label: "Gestion des cookies",
      title: "Gestion des cookies",
      content:
        "Vous pouvez accepter, refuser ou personnaliser les cookies depuis le bandeau cookies du site. Vos préférences sont enregistrées localement.",
    },
  },
};
const SUPPORT_SAV_FALLBACK = {
  badge: "Support & SAV Premium",
  title: "Support & SAV VortexBox",
  subtitle:
    "Un accompagnement rapide et professionnel pour vos questions, diagnostics et retours. Notre équipe vous suit de la première prise de contact jusqu'à la résolution.",
  telegramUrl: "https://t.me/VortexCore460",
  cards: [
    {
      title: "Diagnostic rapide",
      text: "Analyse guidée de votre build et vérifications prioritaires en moins de 24h.",
      ctaLabel: "",
    },
    {
      title: "Garantie matérielle 2 ans",
      text: "Prise en charge des pièces éligibles et suivi transparent de votre dossier SAV.",
      ctaLabel: "",
    },
    {
      title: "Support Telegram",
      text: "Échange direct avec l'équipe VortexBox pour accélérer vos demandes.",
      ctaLabel: "",
    },
  ],
  steps: [
    { title: "1. Déclaration", text: "Vous nous envoyez votre demande avec les détails de votre build." },
    { title: "2. Analyse", text: "Nous validons le diagnostic et proposons la meilleure solution." },
    { title: "3. Résolution", text: "Réparation, échange ou conseil d'optimisation selon votre cas." },
  ],
  faq: fallbackFaq.slice(0, 5),
};

const GAMES_CATALOG_FALLBACK = [
  { title: "Jeu 1", image: "uploads/games-covers/1772987532904-j8oqxa-cyber-assault-2026.webp", info: "" },
  { title: "Jeu 2", image: "uploads/games-covers/1772987833227-1xjipg-jeu-2.webp", info: "" },
  { title: "Jeu 3", image: "uploads/games-covers/1772987824472-p9qewy-cyber-assault-2026.webp", info: "" },
];
const DEFAULT_GAME_INFO_TEXT = "Jouable sans patch.";

function normalizeGameInfoStatusText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function isGameInfoGreen(value) {
  const normalized = normalizeGameInfoStatusText(value);
  return normalized === "jouable sans patch" || normalized === "jouer sans patch";
}

function normalizeGameText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function normalizeGamesCatalog(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      title: String(item?.title || `Jeu ${index + 1}`).trim() || `Jeu ${index + 1}`,
      image: String(item?.image || "").trim(),
      info: String(item?.info || "").trim(),
    }))
    .filter((item) => item.image);
}

function getStoredContentSnapshot() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

async function saveStoredContentSnapshot(content) {
  const snapshot = content && typeof content === "object" ? content : {};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  const response = await fetch("/api/save-content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: snapshot }),
  });
  if (!response.ok) {
    let message = "Sauvegarde impossible.";
    try {
      const payload = await response.json();
      if (payload?.error) message = payload.error;
    } catch (error) {}
    throw new Error(message);
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Lecture du fichier impossible."));
    reader.readAsDataURL(file);
  });
}

async function uploadGameCoverFile(file) {
  const dataUrl = await fileToDataUrl(file);
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      kind: "games-covers",
      fileName: file?.name || "jaquette.webp",
      dataUrl,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.path) {
    throw new Error(payload?.error || "Upload image impossible.");
  }
  return String(payload.path || "").trim();
}

async function uploadGamesZipForImport(file) {
  const uploadId = `gameszip-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const response = await fetch("/api/upload-binary", {
    method: "POST",
    headers: {
      "Content-Type": file?.type || "application/zip",
      "x-upload-kind": "games-zips",
      "x-upload-filename": encodeURIComponent(String(file?.name || "games-covers.archive")),
      "x-upload-id": uploadId,
    },
    body: file,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.path) {
    const statusText = response.status ? ` (HTTP ${response.status})` : "";
    throw new Error(payload?.error || `Upload archive impossible${statusText}.`);
  }
  return String(payload.path || "").trim();
}

async function importGamesCoversFromZipPath(zipPath, mode = "replace") {
  const response = await fetch("/api/import-games-covers-zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ zipPath, mode }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || payload?.ok === false) {
    let fallbackError = "";
    if (!payload) {
      try {
        const raw = await response.text();
        fallbackError = String(raw || "").trim();
      } catch (error) {}
    }
    const statusText = response.status ? ` (HTTP ${response.status})` : "";
    throw new Error(
      payload?.error ||
        fallbackError ||
        `Import des jaquettes impossible${statusText}. Vérifiez le redémarrage du serveur.`
    );
  }
  return payload;
}

function setGamesAdminNotice(message, tone = "info") {
  if (!gamesGridEl) return;
  const noticeEl = gamesGridEl.querySelector("#games-admin-notice");
  if (!noticeEl) return;
  noticeEl.textContent = String(message || "");
  noticeEl.classList.remove("success", "error", "info");
  noticeEl.classList.add(tone === "error" ? "error" : tone === "success" ? "success" : "info");
}

async function persistGamesCatalogFromAdmin(nextGames) {
  const normalized = normalizeGamesCatalog(nextGames);
  const snapshot = getStoredContentSnapshot();
  snapshot.gamesCatalog = normalized;
  await saveStoredContentSnapshot(snapshot);
  gamesCatalogCache = normalized.map((item) => ({ ...item }));
  gamesCatalogDraft = normalized.map((item) => ({ ...item }));
}

function toPublicImageUrl(value) {
  const raw = String(value || "")
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .replace(/\\/g, "/");
  if (!raw) return "";
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith("data:") || raw.startsWith("blob:")) return raw;
  return encodeURI(`/${raw.replace(/^\/+/, "")}`);
}

function withImageCacheBuster(url) {
  const src = String(url || "").trim();
  if (!src || /^data:|^blob:|^https?:\/\//i.test(src)) return src;
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${Date.now()}`;
}

function openGameCoverModal(imageSrc, title) {
  const src = String(imageSrc || "").trim();
  if (!src) return;
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
    <button class="image-modal-close" type="button" aria-label="Fermer">×</button>
    <img src="${escapeHtml(src)}" alt="${escapeHtml(title || "Jaquette")}" />
    <p>${escapeHtml(title || "Jaquette jeu")}</p>
  `;

  const close = () => {
    modal.remove();
    document.removeEventListener("keydown", onKeydown);
  };

  const onKeydown = (event) => {
    if (event.key === "Escape") close();
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".image-modal-close")) close();
  });
  document.addEventListener("keydown", onKeydown);
  document.body.appendChild(modal);
}

function openGameInfoModal(title, infoText) {
  const text = String(infoText || "").trim();
  if (!text) return;
  const rawTitle = String(title || "Info jeu").trim() || "Info jeu";
  const normalizeForCompare = (value) =>
    String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "")
      .trim()
      .toLowerCase();
  const normalizedTitle = normalizeForCompare(rawTitle);
  const normalizedText = normalizeForCompare(text);
  const normalizedDefault = normalizeForCompare(DEFAULT_GAME_INFO_TEXT);
  const isLegacyCaptureTitle = /^capture\s*decran\b/.test(normalizedTitle);
  const isDefaultText = normalizedText === normalizedDefault;
  const safeTitle = isLegacyCaptureTitle
    ? (isDefaultText ? DEFAULT_GAME_INFO_TEXT : "")
    : rawTitle;
  const showTitle = Boolean(safeTitle) && normalizeForCompare(safeTitle) !== normalizedText;
  const modal = document.createElement("div");
  modal.className = "image-modal game-info-modal";
  modal.innerHTML = `
    <button class="image-modal-close" type="button" aria-label="Fermer">×</button>
    <article class="game-info-modal-card">
      <div class="game-info-modal-head">
        <span class="game-info-modal-logo-wrap">
          <img src="favicon-vb.svg" alt="Logo VortexBox" />
        </span>
        <div class="game-info-modal-head-copy">
          <h3>INFO JEU</h3>
          <p>VortexBox Premium</p>
        </div>
      </div>
      <div class="game-info-modal-divider"></div>
      ${showTitle ? `<h4>${escapeHtml(safeTitle)}</h4>` : ""}
      <div class="game-info-modal-content">${escapeHtml(text).replace(/\n/g, "<br />")}</div>
    </article>
  `;

  const close = () => {
    modal.remove();
    document.removeEventListener("keydown", onKeydown);
  };

  const onKeydown = (event) => {
    if (event.key === "Escape") close();
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".image-modal-close")) close();
  });
  document.addEventListener("keydown", onKeydown);
  document.body.appendChild(modal);
}

function initializeGamesPremiumEffects() {
  if (!gamesGridEl || gamesGridEl.dataset.fxBound === "1") return;
  gamesGridEl.dataset.fxBound = "1";

  gamesGridEl.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".game-cover-card");
    if (!card || !gamesGridEl.contains(card)) return;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const percentX = rect.width ? offsetX / rect.width : 0.5;
    const percentY = rect.height ? offsetY / rect.height : 0.5;
    const tiltY = (percentX - 0.5) * 8;
    const tiltX = (0.5 - percentY) * 8;
    card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
  });

  gamesGridEl.addEventListener("pointerleave", (event) => {
    const card = event.target.closest(".game-cover-card");
    if (!card || !gamesGridEl.contains(card)) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }, true);

  gamesGridEl.addEventListener("click", (event) => {
    if (event.target.closest("[data-game-admin-action]")) return;
    const infoBtn = event.target.closest(".game-cover-info-btn");
    if (infoBtn) {
      const title = String(infoBtn.dataset.gameTitle || "").trim() || "Info jeu";
      const encodedInfo = String(infoBtn.dataset.gameInfo || "");
      const decodedInfo = encodedInfo ? decodeURIComponent(encodedInfo) : "";
      if (decodedInfo.trim()) openGameInfoModal(title, decodedInfo);
      else openGameInfoModal(title, DEFAULT_GAME_INFO_TEXT);
      return;
    }
  });

  gamesGridEl.addEventListener("click", async (event) => {
    const actionBtn = event.target.closest("[data-game-admin-action]");
    if (!actionBtn || !isAdminLiveMode()) return;
    const action = String(actionBtn.dataset.gameAdminAction || "");
    const index = Number(actionBtn.dataset.gameIndex);

    if (gamesAdminSaving) return;

    if (action === "add") {
      const picker = gamesGridEl.querySelector("#games-admin-add-file");
      if (picker) picker.click();
      return;
    }

    if (action === "sort-az") {
      try {
        gamesAdminSaving = true;
        setGamesAdminNotice("Tri alphabétique en cours...", "info");
        const nextGames = gamesCatalogDraft
          .map((item) => ({ ...item }))
          .sort((a, b) =>
            String(a?.title || "").localeCompare(String(b?.title || ""), "fr", {
              sensitivity: "base",
              numeric: true,
            })
          );
        await persistGamesCatalogFromAdmin(nextGames);
        await renderGamesCatalog({ useCache: false, forceReload: true });
        setGamesAdminNotice("Jaquettes triées par ordre alphabétique (A → Z).", "success");
      } catch (error) {
        setGamesAdminNotice(error.message || "Tri alphabétique impossible.", "error");
      } finally {
        gamesAdminSaving = false;
      }
      return;
    }

    if (action === "import-zip") {
      const zipPicker = gamesGridEl.querySelector("#games-admin-import-zip");
      if (zipPicker) zipPicker.click();
      return;
    }

    if (action === "replace") {
      if (!Number.isInteger(index)) return;
      const picker = gamesGridEl.querySelector(`#games-admin-file-${index}`);
      if (picker) picker.click();
      return;
    }

    if (action === "rename") {
      if (!Number.isInteger(index) || !gamesCatalogDraft[index]) return;
      const current = gamesCatalogDraft[index];
      const nextTitle = window.prompt("Nouveau titre de la jaquette", String(current.title || "").trim());
      if (nextTitle === null) return;
      const cleanTitle = String(nextTitle || "").trim();
      if (!cleanTitle) {
        setGamesAdminNotice("Le titre ne peut pas être vide.", "error");
        return;
      }
      const nextGames = gamesCatalogDraft.map((item) => ({ ...item }));
      nextGames[index].title = cleanTitle;
      try {
        gamesAdminSaving = true;
        setGamesAdminNotice("Sauvegarde en cours...", "info");
        await persistGamesCatalogFromAdmin(nextGames);
        await renderGamesCatalog({ useCache: true });
        setGamesAdminNotice("Titre mis à jour.", "success");
      } catch (error) {
        setGamesAdminNotice(error.message || "Erreur de sauvegarde.", "error");
      } finally {
        gamesAdminSaving = false;
      }
      return;
    }

    if (action === "info") {
      if (!Number.isInteger(index) || !gamesCatalogDraft[index]) return;
      const current = gamesCatalogDraft[index];
      const nextInfo = window.prompt(
        "Information premium du jeu (fonctionnement, conseils, prérequis). Laissez vide pour retirer.",
        String(current.info || DEFAULT_GAME_INFO_TEXT)
      );
      if (nextInfo === null) return;
      const nextGames = gamesCatalogDraft.map((item) => ({ ...item }));
      nextGames[index].info = String(nextInfo || "").trim();
      try {
        gamesAdminSaving = true;
        setGamesAdminNotice("Sauvegarde info en cours...", "info");
        await persistGamesCatalogFromAdmin(nextGames);
        await renderGamesCatalog();
        setGamesAdminNotice(nextGames[index]?.info ? "Info jeu mise à jour." : "Info jeu retirée.", "success");
      } catch (error) {
        setGamesAdminNotice(error.message || "Erreur de sauvegarde.", "error");
      } finally {
        gamesAdminSaving = false;
      }
      return;
    }

    if (action === "delete") {
      if (!Number.isInteger(index) || !gamesCatalogDraft[index]) return;
      if (gamesCatalogDraft.length <= 1) {
        setGamesAdminNotice("Gardez au moins une jaquette.", "error");
        return;
      }
      const nextGames = gamesCatalogDraft.filter((_, i) => i !== index);
      try {
        gamesAdminSaving = true;
        setGamesAdminNotice("Suppression en cours...", "info");
        await persistGamesCatalogFromAdmin(nextGames);
        await renderGamesCatalog();
        setGamesAdminNotice("Jaquette supprimée.", "success");
      } catch (error) {
        setGamesAdminNotice(error.message || "Erreur de sauvegarde.", "error");
      } finally {
        gamesAdminSaving = false;
      }
    }
  });

  gamesGridEl.addEventListener("change", async (event) => {
    if (!isAdminLiveMode()) return;
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.type !== "file") return;
    const file = target.files && target.files[0];
    if (!file || gamesAdminSaving) return;

    if (target.id === "games-admin-import-zip") {
      if (!/\.(zip|rar)$/i.test(String(file.name || ""))) {
        setGamesAdminNotice("Sélectionnez un fichier .zip ou .rar valide.", "error");
        target.value = "";
        return;
      }
      gamesAdminSaving = true;
      try {
        setGamesAdminNotice("Upload archive en cours...", "info");
        const zipPath = await uploadGamesZipForImport(file);
        setGamesAdminNotice("Import des jaquettes en cours...", "info");
        const result = await importGamesCoversFromZipPath(zipPath, "append");
        gamesCatalogCache = [];
        await renderGamesCatalog({ useCache: false, forceReload: true });
        const imported = Math.max(0, Number(result?.imported) || 0);
        const total = Math.max(0, Number(result?.total) || 0);
        setGamesAdminNotice(`Import terminé: ${imported} jaquettes (${total} au total).`, "success");
      } catch (error) {
        setGamesAdminNotice(error.message || "Import ZIP impossible.", "error");
      } finally {
        target.value = "";
        gamesAdminSaving = false;
      }
      return;
    }

    const isAdd = target.id === "games-admin-add-file";
    const index = Number(target.dataset.gameIndex);

    try {
      gamesAdminSaving = true;
      setGamesAdminNotice("Upload image en cours...", "info");
      const path = await uploadGameCoverFile(file);
      const nextGames = gamesCatalogDraft.map((item) => ({ ...item }));
      if (isAdd) {
        const suggested = `Jeu ${nextGames.length + 1}`;
        const title = String(window.prompt("Titre de la nouvelle jaquette", suggested) || "").trim() || suggested;
        nextGames.push({ title, image: path, info: "" });
      } else if (Number.isInteger(index) && nextGames[index]) {
        nextGames[index].image = path;
      }
      await persistGamesCatalogFromAdmin(nextGames);
      await renderGamesCatalog();
      setGamesAdminNotice(isAdd ? "Jaquette ajoutée." : "Image mise à jour.", "success");
    } catch (error) {
      setGamesAdminNotice(error.message || "Impossible de mettre à jour la jaquette.", "error");
    } finally {
      target.value = "";
      gamesAdminSaving = false;
    }
  });
}

function canLoadImage(url) {
  return new Promise((resolve) => {
    const src = String(url || "").trim();
    if (!src) {
      resolve(false);
      return;
    }
    const img = new Image();
    const done = (ok) => {
      img.onload = null;
      img.onerror = null;
      resolve(ok);
    };
    const timer = window.setTimeout(() => done(false), 3500);
    img.onload = () => {
      window.clearTimeout(timer);
      done(true);
    };
    img.onerror = () => {
      window.clearTimeout(timer);
      done(false);
    };
    img.src = src;
  });
}

async function ensureRenderableGameCovers(games) {
  const output = [];

  for (let index = 0; index < games.length; index += 1) {
    const item = games[index];
    const primarySrc = toPublicImageUrl(item?.image || "");
    let finalSrc = primarySrc;
    let ok = await canLoadImage(primarySrc);

    if (!ok) {
      const cleaned = String(item?.image || "").replace(/^\/+/, "");
      const altSrc = toPublicImageUrl(cleaned.replace(/^uploads\/uploads\//, "uploads/"));
      if (altSrc && altSrc !== primarySrc) {
        const altOk = await canLoadImage(altSrc);
        if (altOk) {
          finalSrc = altSrc;
          ok = true;
        }
      }
    }

    if (!ok) finalSrc = "/favicon-vb.svg";
    output.push({
      title: String(item?.title || `Jeu ${index + 1}`),
      image: finalSrc,
    });
  }

  return output;
}

function renderGamesCatalogEmptyState() {
  if (!gamesGridEl) return;
  gamesGridEl.innerHTML = `
    <article class="games-empty-state">
      <h3>Catalogue en cours de mise à jour</h3>
      <p>Les jaquettes arrivent bientôt. Revenez dans quelques instants.</p>
    </article>
  `;
}

function renderGamesCatalogNoResultState() {
  if (!gamesGridEl) return;
  gamesGridEl.innerHTML = `
    <article class="games-empty-state">
      <h3>Aucun jeu trouvé</h3>
      <p>Essayez un autre mot-clé (ex: call, fifa, mario, cyber...).</p>
    </article>
  `;
}

function renderGamesResultsToolbar(totalCount, filteredCount, pageCount, currentPage) {
  if (!gamesResultsToolbarEl) return;
  const total = Math.max(0, Number(totalCount) || 0);
  const filtered = Math.max(0, Number(filteredCount) || 0);
  const pages = Math.max(1, Number(pageCount) || 1);
  const page = Math.max(1, Math.min(pages, Number(currentPage) || 1));
  const from = filtered ? (page - 1) * gamesPageSize + 1 : 0;
  const to = filtered ? Math.min(filtered, page * gamesPageSize) : 0;
  gamesResultsToolbarEl.innerHTML = `
    <div class="games-results-meta">
      ${filtered} jeu(x) trouvé(s)${filtered !== total ? ` sur ${total}` : ""} • Affichage ${from}-${to}
    </div>
    <div class="games-pagination">
      <label class="games-results-meta" for="games-page-size">Par page</label>
      <select id="games-page-size" class="games-page-size" aria-label="Nombre de jeux par page">
        ${[24, 36, 48, 60]
          .map((size) => `<option value="${size}" ${gamesPageSize === size ? "selected" : ""}>${size}</option>`)
          .join("")}
      </select>
      <button class="games-page-btn" type="button" data-games-page-action="prev" ${page <= 1 ? "disabled" : ""}>Précédent</button>
      <span class="games-results-meta">Page ${page}/${pages}</span>
      <button class="games-page-btn" type="button" data-games-page-action="next" ${page >= pages ? "disabled" : ""}>Suivant</button>
    </div>
  `;
}

let authMode = "user";
let pendingActivationEmail = "";
let userStatePersistTimer = null;
let bgAudioCtx = null;
let bgSynthNodes = [];
let bgSynthMaster = null;
let bgUsingSynth = false;

function isBackgroundMusicPlaying() {
  return Boolean((bgMusicEl && !bgMusicEl.paused) || bgUsingSynth);
}

function updateBackgroundMusicUI() {
  if (!bgMusicToggleEl) return;
  const isPlaying = isBackgroundMusicPlaying();
  const label = isPlaying ? "Couper la musique" : "Activer la musique";
  bgMusicToggleEl.setAttribute("aria-label", label);
  bgMusicToggleEl.setAttribute("title", label);
  bgMusicToggleEl.setAttribute("aria-pressed", isPlaying ? "true" : "false");
  bgMusicToggleEl.classList.toggle("is-muted", !isPlaying);
}

function stopSynthBackground() {
  if (!bgUsingSynth) return;
  bgUsingSynth = false;
  if (bgSynthMaster && bgAudioCtx) {
    const now = bgAudioCtx.currentTime;
    bgSynthMaster.gain.cancelScheduledValues(now);
    bgSynthMaster.gain.setValueAtTime(bgSynthMaster.gain.value, now);
    bgSynthMaster.gain.linearRampToValueAtTime(0, now + 0.12);
  }
  bgSynthNodes.forEach((node) => {
    try {
      node.stop();
      node.disconnect();
    } catch (error) {}
  });
  bgSynthNodes = [];
}

function startSynthBackground() {
  if (bgUsingSynth) return true;
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return false;

  if (!bgAudioCtx) bgAudioCtx = new AudioContextCtor();
  if (!bgSynthMaster) {
    bgSynthMaster = bgAudioCtx.createGain();
    bgSynthMaster.gain.value = 0;
    bgSynthMaster.connect(bgAudioCtx.destination);
  }

  const now = bgAudioCtx.currentTime;
  const tones = [
    [164.81, "sine", 0.085],
    [220.0, "triangle", 0.06],
    [329.63, "sine", 0.04],
  ];

  tones.forEach(([frequency, type, gainValue]) => {
    const osc = bgAudioCtx.createOscillator();
    const gain = bgAudioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    gain.gain.value = gainValue;
    osc.connect(gain);
    gain.connect(bgSynthMaster);
    osc.start();
    bgSynthNodes.push(osc, gain);
  });

  bgSynthMaster.gain.cancelScheduledValues(now);
  bgSynthMaster.gain.setValueAtTime(0, now);
  bgSynthMaster.gain.linearRampToValueAtTime(1.15, now + 0.18);
  bgUsingSynth = true;
  bgAudioCtx.resume().catch(() => {});
  return true;
}

function tryStartBackgroundMusic() {
  if (!bgMusicEl) return Promise.resolve(startSynthBackground());
  return bgMusicEl.play()
    .then(() => {
      stopSynthBackground();
      return true;
    })
    .catch(() => startSynthBackground());
}

function applyBackgroundMusicAccess() {
  if (!bgMusicControlEl) return;
  const unlocked = !document.body.classList.contains("site-locked");
  bgMusicControlEl.classList.toggle("hidden", !unlocked);

  if (!unlocked) {
    if (bgMusicEl) bgMusicEl.pause();
    stopSynthBackground();
    updateBackgroundMusicUI();
    return;
  }

  const bgMusicPreference = localStorage.getItem(BG_MUSIC_KEY);
  const wantsMusic = bgMusicPreference !== "0";

  if (wantsMusic && !isBackgroundMusicPlaying()) {
    tryStartBackgroundMusic().finally(updateBackgroundMusicUI);
  } else {
    updateBackgroundMusicUI();
  }
}

function initializeBackgroundMusic() {
  if (!bgMusicControlEl || !bgMusicToggleEl) return;
  if (bgMusicEl) {
    bgMusicEl.volume = 0.5;
    bgMusicEl.load();
  }

  bgMusicToggleEl.addEventListener("click", () => {
    if (!isBackgroundMusicPlaying()) {
      tryStartBackgroundMusic().then(() => {
        localStorage.setItem(BG_MUSIC_KEY, "1");
        updateBackgroundMusicUI();
      });
      return;
    }
    if (bgMusicEl) bgMusicEl.pause();
    stopSynthBackground();
    localStorage.setItem(BG_MUSIC_KEY, "0");
    updateBackgroundMusicUI();
  });

  if (bgMusicEl) {
    bgMusicEl.addEventListener("play", () => {
      stopSynthBackground();
      updateBackgroundMusicUI();
    });
    bgMusicEl.addEventListener("pause", updateBackgroundMusicUI);
    bgMusicEl.addEventListener("error", () => {
      const wantsMusic = localStorage.getItem(BG_MUSIC_KEY) !== "0";
      if (wantsMusic) startSynthBackground();
      updateBackgroundMusicUI();
    });
  }
  applyBackgroundMusicAccess();
}

function readCookieConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return {
      necessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch (error) {
    return null;
  }
}

function writeCookieConsent(value) {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  } catch (error) {}
}

function applyCookieConsent() {
  // Reserved for optional analytics tags later.
}

function closeCookieBanner() {
  if (!cookieBannerEl) return;
  cookieBannerEl.classList.add("hidden");
}

function openCookieBanner() {
  if (!cookieBannerEl) return;
  cookieBannerEl.classList.remove("hidden");
}

function initializeCookieConsent() {
  if (!cookieBannerEl) return;
  const existing = readCookieConsent();
  if (cookieConsentPreferencesEl) cookieConsentPreferencesEl.checked = existing ? existing.preferences : true;
  if (cookieConsentAnalyticsEl) cookieConsentAnalyticsEl.checked = existing ? existing.analytics : true;

  if (existing) {
    closeCookieBanner();
    applyCookieConsent(existing);
  } else {
    openCookieBanner();
  }

  cookieOpenCustomizeBtn?.addEventListener("click", () => {
    cookieCustomizePanelEl?.classList.toggle("hidden");
  });

  cookieCancelCustomBtn?.addEventListener("click", () => {
    cookieCustomizePanelEl?.classList.add("hidden");
  });

  cookieRejectAllBtn?.addEventListener("click", () => {
    const choice = { necessary: true, preferences: false, analytics: false, updatedAt: new Date().toISOString() };
    writeCookieConsent(choice);
    applyCookieConsent(choice);
    closeCookieBanner();
  });

  cookieAcceptAllBtn?.addEventListener("click", () => {
    const choice = { necessary: true, preferences: true, analytics: true, updatedAt: new Date().toISOString() };
    writeCookieConsent(choice);
    applyCookieConsent(choice);
    closeCookieBanner();
  });

  cookieSaveCustomBtn?.addEventListener("click", () => {
    const choice = {
      necessary: true,
      preferences: Boolean(cookieConsentPreferencesEl?.checked),
      analytics: Boolean(cookieConsentAnalyticsEl?.checked),
      updatedAt: new Date().toISOString(),
    };
    writeCookieConsent(choice);
    applyCookieConsent(choice);
    closeCookieBanner();
  });
}

function initializeResponsiveNav() {
  const navEl = document.querySelector(".nav");
  const navToggleEl = document.getElementById("nav-menu-toggle");
  const navLinksEl = navEl?.querySelector(".nav-links");
  if (!navEl || !navToggleEl || !navLinksEl) return;
  const navAnchors = Array.from(navLinksEl.querySelectorAll("a[href]"));
  const navPrimaryLinks = Array.from(
    navLinksEl.querySelectorAll(".nav-row > a, .nav-row > .nav-link-item > a")
  );

  const closeMenu = () => {
    navEl.classList.remove("menu-open");
    navToggleEl.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-overlay-open");
  };

  navToggleEl.addEventListener("click", () => {
    const willOpen = !navEl.classList.contains("menu-open");
    navEl.classList.toggle("menu-open", willOpen);
    navToggleEl.setAttribute("aria-expanded", willOpen ? "true" : "false");
    document.body.classList.toggle("nav-overlay-open", willOpen);
  });

  navLinksEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navEl.contains(event.target)) closeMenu();
  });

  let navResizeRaf = 0;
  window.addEventListener("resize", () => {
    if (navResizeRaf) return;
    navResizeRaf = window.requestAnimationFrame(() => {
      navResizeRaf = 0;
      if (window.innerWidth > 1220) closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const compactOnScroll = () => {
    const isSupportPage = /support-sav\.html$/i.test(String(window.location.pathname || ""));
    navEl.classList.toggle("nav-compact", window.scrollY > 48);
    navEl.classList.toggle("nav-ultra-compact", !isSupportPage && window.scrollY > 230);
  };
  compactOnScroll();
  window.addEventListener("scroll", compactOnScroll, { passive: true });

  navPrimaryLinks.forEach((link, index) => {
    link.style.setProperty("--nav-stagger-index", String(index));
  });
  window.requestAnimationFrame(() => {
    navEl.classList.add("nav-ready");
  });

  const normalizePath = (path) => String(path || "").replace(/\/+$/, "") || "/";
  const currentPath = normalizePath(window.location.pathname);
  navAnchors.forEach((link) => {
    link.classList.remove("is-active");
    link.removeAttribute("aria-current");
    try {
      const url = new URL(link.getAttribute("href") || "", window.location.href);
      const isActive = normalizePath(url.pathname) === currentPath;
      if (!isActive) return;
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } catch (error) {}
  });
  const path = String(window.location.pathname || "");
  const label = /support-sav\.html$/i.test(path)
    ? "Support & SAV"
    : /jeux\.html$/i.test(path)
      ? "Jeux"
      : "FAQ";
  renderPremiumBreadcrumbForPage(label);
}

function initializeNavSmartSearch() {
  if (!navSmartSearchInputEl || !navSmartResultsEl) return;
  const navSmartWrapEl = navSmartSearchInputEl.closest(".nav-smart-wrap");
  let navSmartKeywordsEl = document.getElementById("nav-smart-keywords");
  let navSmartKeywordsListEl = document.getElementById("nav-smart-keywords-list");
  if (navSmartWrapEl && (!navSmartKeywordsEl || !navSmartKeywordsListEl)) {
    navSmartKeywordsEl = document.createElement("div");
    navSmartKeywordsEl.id = "nav-smart-keywords";
    navSmartKeywordsEl.className = "nav-smart-keywords";
    navSmartKeywordsEl.setAttribute("aria-label", "Mots-cles rapides de recherche");
    navSmartKeywordsEl.innerHTML = `
      <p class="nav-smart-keywords-title">Recherche rapide</p>
      <div id="nav-smart-keywords-list" class="nav-smart-keywords-list"></div>
    `;
    navSmartWrapEl.appendChild(navSmartKeywordsEl);
    navSmartKeywordsListEl = navSmartKeywordsEl.querySelector("#nav-smart-keywords-list");
  }
  navSmartSearchInputEl.value = "";
  navSmartSearchInputEl.setAttribute("name", "menu-search");
  navSmartSearchInputEl.setAttribute("autocomplete", "off");
  navSmartSearchInputEl.setAttribute("autocapitalize", "none");
  navSmartSearchInputEl.setAttribute("autocorrect", "off");
  navSmartSearchInputEl.setAttribute("spellcheck", "false");
  navSmartSearchInputEl.setAttribute("inputmode", "search");
  const normalize = (value) => String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const normalizePath = (value) => {
    const path = String(value || "").trim() || "/";
    return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  };
  const validPaths = new Set(["/", "/index.html", "/about.html", "/faq.html", "/jeux.html", "/support-sav.html"]);
  const validHashesByPath = {
    "/": new Set(["#machines", "#configurateur", "#fiches-techniques", "#guides-fps", "#contact"]),
    "/index.html": new Set(["#machines", "#configurateur", "#fiches-techniques", "#guides-fps", "#contact"]),
    "/about.html": new Set(["#top", "#contact"]),
    "/faq.html": new Set(["#top", "#contact"]),
    "/jeux.html": new Set(["#top", "#contact"]),
    "/support-sav.html": new Set(["#top", "#contact"]),
  };
  const isValidSearchTarget = (href) => {
    const raw = String(href || "").trim();
    if (!raw) return false;
    if (/^(https?:)?\/\//i.test(raw)) return true;
    try {
      const url = new URL(raw, window.location.origin);
      const path = normalizePath(url.pathname || "/");
      if (!validPaths.has(path)) return false;
      const hash = String(url.hash || "").trim().toLowerCase();
      if (!hash) return true;
      return Boolean(validHashesByPath[path]?.has(hash));
    } catch (error) {
      return false;
    }
  };
  const isExcludedSearchTerm = (value) => {
    const text = normalize(value).replace(/[’']/g, "").replace(/\s+/g, " ");
    return text.includes("capture decran") || text.includes("capture ecran");
  };
  const entriesMap = new Map();
  const addEntry = (label, href, keywords = [], category = "") => {
    const cleanLabel = String(label || "").trim().replace(/\s+/g, " ");
    const cleanHref = String(href || "").trim();
    if (!cleanLabel || !cleanHref || !isValidSearchTarget(cleanHref)) return;
    if (isExcludedSearchTerm(cleanLabel)) return;
    const keywordText = Array.isArray(keywords)
      ? keywords.map((item) => String(item || "").trim()).filter(Boolean).join(" ")
      : String(keywords || "");
    if (isExcludedSearchTerm(keywordText)) return;
    const cleanCategory = String(category || "").trim();
    const key = `${cleanLabel}|${cleanHref}`;
    if (entriesMap.has(key)) {
      const existing = entriesMap.get(key);
      existing.keywords = `${existing.keywords} ${keywordText}`.trim();
      if (!existing.category && cleanCategory) existing.category = cleanCategory;
      existing.haystack = normalize(`${existing.label} ${existing.keywords} ${existing.href} ${existing.category}`);
      return;
    }
    entriesMap.set(key, {
      label: cleanLabel,
      href: cleanHref,
      keywords: keywordText,
      category: cleanCategory,
      haystack: normalize(`${cleanLabel} ${keywordText} ${cleanHref} ${cleanCategory}`),
    });
  };

  Array.from(document.querySelectorAll(".nav-links a[href]")).forEach((link) => {
    const label = String(link.textContent || "").trim().replace(/\s+/g, " ");
    const href = String(link.getAttribute("href") || "").trim();
    if (!label || !href) return;
    addEntry(label, href, [label, "menu", "navigation"], "Menu");
  });

  addEntry("Configurateur", "index.html?openConfigurator=1#configurateur", ["build", "composants", "prix", "fps", "services"], "Configurateur");
  addEntry("Top Build", "index.html#machines", ["meilleurs build", "best seller", "gaming"], "Top Build");
  addEntry("Fiches Techniques", "index.html#fiches-techniques", ["fiches", "jaquettes", "documentation"], "Fiches");
  addEntry("Guides FPS", "index.html#guides-fps", ["fps", "performances", "jeux"], "Guides");
  addEntry("Jeux", "jeux.html", ["catalogue", "jaquettes", "gaming"], "Jeux");
  addEntry("Support & SAV", "support-sav.html", ["support", "sav", "assistance"], "Support");
  addEntry("FAQ", "faq.html", ["questions", "reponses", "aide"], "FAQ");
  addEntry("A propos", "about.html", ["vortexbox", "atelier", "videos"], "A propos");

  let snapshot = {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    snapshot = raw ? JSON.parse(raw) : {};
  } catch (error) {
    snapshot = {};
  }
  if (Array.isArray(snapshot.machines)) {
    snapshot.machines.forEach((machine) => {
      addEntry(
        machine?.name || machine?.frontName || "Build VortexBox",
        "index.html#machines",
        [machine?.description, machine?.frontDescription, machine?.badge, machine?.price, ...(Array.isArray(machine?.specs) ? machine.specs : [])],
        "Top Build"
      );
    });
  }
  if (Array.isArray(snapshot.technicalSheets)) {
    snapshot.technicalSheets.forEach((sheet) => {
      addEntry(sheet?.title || "Fiche technique", "index.html#fiches-techniques", [sheet?.title], "Fiches");
    });
  }
  loadFaqItems().forEach((faq) => {
    addEntry(faq?.question || "FAQ", "faq.html", [faq?.answer], "FAQ");
  });
  const gamesSource = gamesCatalogDraft.length ? gamesCatalogDraft : normalizeGamesCatalog(snapshot?.gamesCatalog);
  gamesSource.forEach((game) => {
    addEntry(game?.title || "Jeu", "jeux.html", [game?.info], "Jeux");
  });
  const support = loadSupportSavContent();
  addEntry(support?.title || "Support & SAV", "support-sav.html", [support?.subtitle, support?.badge], "Support");
  (Array.isArray(support?.cards) ? support.cards : []).forEach((card) => {
    addEntry(card?.title || "Support", "support-sav.html", [card?.text, card?.ctaLabel], "Support");
  });
  (Array.isArray(support?.steps) ? support.steps : []).forEach((step) => {
    addEntry(step?.title || "Etape SAV", "support-sav.html", [step?.text], "Support");
  });
  if (snapshot.configurator && typeof snapshot.configurator === "object") {
    (Array.isArray(snapshot.configurator.components) ? snapshot.configurator.components : []).forEach((component) => {
      addEntry(
        component?.label || "Composant",
        "index.html?openConfigurator=1#configurateur",
        (Array.isArray(component?.options) ? component.options : []).flatMap((option) => [option?.name, option?.description, option?.price]),
        "Configurateur"
      );
    });
    (Array.isArray(snapshot.configurator.services) ? snapshot.configurator.services : []).forEach((service) => {
      addEntry(service?.label || "Service", "index.html?openConfigurator=1#configurateur", [service?.description, service?.price], "Configurateur");
    });
  }

  const entries = Array.from(entriesMap.values());
  const keywordMap = new Map();
  const hiddenKeywordTerms = [
    "cpu",
    "gpu",
    "ram",
    "xpu",
    "stockage",
    "disque dur",
    "nvme",
    "mvme",
    "rtx",
    "intel i9",
    "intel 9",
    "ryzen",
    "32 go",
  ];
  const hasHiddenKeyword = (value) => hiddenKeywordTerms.some((term) => normalize(value).includes(term));
  const addKeyword = (label, term = "", category = "", href = "") => {
    const cleanLabel = String(label || "").trim();
    if (!cleanLabel) return;
    if (isExcludedSearchTerm(cleanLabel) || isExcludedSearchTerm(term)) return;
    if (hasHiddenKeyword(cleanLabel) || hasHiddenKeyword(term || cleanLabel)) return;
    const normalizedLabel = normalize(cleanLabel);
    const cleanTerm = String(term || cleanLabel).trim();
    const cleanCategory = String(category || "").trim();
    const cleanHref = String(href || "").trim();
    const key = normalizedLabel;
    if (!key || keywordMap.has(key)) return;
    keywordMap.set(key, { label: cleanLabel, term: cleanTerm, category: cleanCategory, href: cleanHref });
  };

  const configuratorHref = "index.html?openConfigurator=1#configurateur";
  [
    ["Top Build", "top build", "Menu", "index.html#machines"],
    ["Configurateur", "configurateur", "Menu", configuratorHref],
    ["Fiches Techniques", "fiches techniques", "Menu", "index.html#fiches-techniques"],
    ["Guides FPS", "guides fps", "Menu", "index.html#guides-fps"],
    ["Support SAV", "support sav", "Menu", "support-sav.html"],
    ["FAQ", "faq", "Menu", "faq.html"],
    ["Telegram", "telegram", "Contact", "https://t.me/VortexCore460"],
    ["Promo DLC", "promo dlc", "Promo", configuratorHref],
  ].forEach((entry) => addKeyword(entry[0], entry[1], entry[2], entry[3]));

  entries.forEach((item) => {
    addKeyword(item.label, item.label, item.category || "", item.href || "");
  });

  if (snapshot.configurator && typeof snapshot.configurator === "object") {
    const components = Array.isArray(snapshot.configurator.components) ? snapshot.configurator.components : [];
    components.forEach((component) => {
      const componentLabel = String(component?.label || "").trim();
      if (componentLabel) addKeyword(componentLabel, componentLabel, "Configurateur", configuratorHref);
      const options = Array.isArray(component?.options) ? component.options : [];
      options.slice(0, 8).forEach((option) => {
        const optionName = String(option?.name || "").trim();
        if (optionName) addKeyword(optionName, optionName, "Configurateur", configuratorHref);
      });
    });
  }

  const premiumKeywords = Array.from(keywordMap.values()).slice(0, 120);
  if (navSmartKeywordsEl && navSmartKeywordsListEl) {
    if (!premiumKeywords.length) {
      navSmartKeywordsEl.classList.add("hidden");
    } else {
      navSmartKeywordsEl.classList.remove("hidden");
      const categoryOrder = ["Menu", "Gaming", "Configurateur", "Support", "FAQ", "Promo", "Contact", "Stockage", "A propos", "Jeux", "Fiches", "Guides"];
      const grouped = premiumKeywords.reduce((acc, item) => {
        const category = String(item.category || "Autres").trim() || "Autres";
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {});
      const sortedCategories = Object.keys(grouped).sort((a, b) => {
        const ai = categoryOrder.indexOf(a);
        const bi = categoryOrder.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b, "fr");
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
      const sanitizeCategory = (value) =>
        `kw-${String(value || "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "") || "autres"}`;
      navSmartKeywordsListEl.innerHTML = sortedCategories
        .map((category) => {
          const safeCategory = sanitizeCategory(category);
          const chips = grouped[category]
            .map(
              (item) =>
                `<button class="nav-smart-keyword cat-${escapeHtml(safeCategory)}" type="button" data-term="${escapeHtml(item.term)}" data-href="${escapeHtml(item.href || "")}" title="${escapeHtml(
                  item.category ? `${item.label} · ${item.category}` : item.label
                )}">${escapeHtml(item.label)}</button>`
            )
            .join("");
          return `
            <section class="nav-smart-keyword-group">
              <p class="nav-smart-keyword-group-title">${escapeHtml(category)}</p>
              <div class="nav-smart-keyword-group-chips">${chips}</div>
            </section>
          `;
        })
        .join("");
      navSmartKeywordsListEl.addEventListener("click", (event) => {
        const chip = event.target.closest("button[data-term]");
        if (!chip) return;
        const href = String(chip.dataset.href || "").trim();
        if (href) {
          openHref(href);
          return;
        }
        navSmartSearchInputEl.value = String(chip.dataset.term || "").trim();
        navSmartSearchInputEl.dispatchEvent(new Event("input", { bubbles: true }));
        navSmartSearchInputEl.focus();
      });
    }
  }

  let activeIndex = -1;
  let visible = [];

  const close = () => {
    navSmartResultsEl.innerHTML = "";
    navSmartResultsEl.classList.add("hidden");
    activeIndex = -1;
    visible = [];
  };

  const openHref = (href) => {
    if (!href) return;
    window.location.href = href;
  };

  const render = (items) => {
    visible = items.slice(0, 8);
    if (!visible.length) {
      close();
      return;
    }
    navSmartResultsEl.innerHTML = "";
    visible.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `nav-smart-item${index === activeIndex ? " active" : ""}`;
      button.dataset.index = String(index);
      button.dataset.href = item.href;
      button.textContent = item.category ? `${item.label} · ${item.category}` : item.label;
      navSmartResultsEl.appendChild(button);
    });
    navSmartResultsEl.classList.remove("hidden");
  };

  navSmartSearchInputEl.addEventListener("input", () => {
    if (String(navSmartSearchInputEl.value || "").includes("@")) {
      navSmartSearchInputEl.value = "";
    }
    const query = normalize(navSmartSearchInputEl.value || "");
    if (query.length < 2) {
      close();
      return;
    }
    const terms = query.split(/\s+/).filter((term) => term.length > 0);
    const items = entries
      .map((item) => {
        let matched = 0;
        let score = 0;
        terms.forEach((term) => {
          if (normalize(item.label).includes(term)) {
            matched += 1;
            score += 120;
            return;
          }
          if (normalize(item.keywords).includes(term)) {
            matched += 1;
            score += 65;
            return;
          }
          if (item.haystack.includes(term)) {
            matched += 1;
            score += 35;
          }
        });
        if (!matched) return null;
        if (normalize(item.label) === query) score += 180;
        if (normalize(item.label).startsWith(query)) score += 80;
        return { item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .map((result) => result.item);
    activeIndex = items.length ? 0 : -1;
    render(items);
  });

  navSmartSearchInputEl.addEventListener("keydown", (event) => {
    if (navSmartResultsEl.classList.contains("hidden")) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = Math.min(visible.length - 1, activeIndex + 1);
      render(visible);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = Math.max(0, activeIndex - 1);
      render(visible);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const target = visible[Math.max(0, activeIndex)];
      if (target?.href) openHref(target.href);
      return;
    }
    if (event.key === "Escape") {
      close();
      navSmartSearchInputEl.blur();
    }
  });

  navSmartResultsEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-href]");
    if (!btn) return;
    openHref(String(btn.dataset.href || ""));
  });

  document.addEventListener("click", (event) => {
    if (!navSmartResultsEl.contains(event.target) && event.target !== navSmartSearchInputEl) close();
  });
}

function readNavThemeFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const value = String(parsed?.navTheme || "").trim();
    return ["aurora", "frost", "obsidian"].includes(value) ? value : "aurora";
  } catch (error) {
    return "aurora";
  }
}

function applyNavThemeFromStorage() {
  document.documentElement.setAttribute("data-nav-theme", readNavThemeFromStorage());
}

function normalizeMenuBadges(value) {
  const allowed = new Set(["", "nouveau", "promo", "hot"]);
  const source = value && typeof value === "object" ? value : {};
  const normalize = (key) => {
    const raw = String(source[key] || "").trim().toLowerCase();
    return allowed.has(raw) ? raw : "";
  };
  return {
    machines: normalize("machines"),
    configurateur: normalize("configurateur"),
    support: normalize("support"),
    fiches: normalize("fiches"),
    guides: normalize("guides"),
    jeux: normalize("jeux"),
    about: normalize("about"),
    faq: normalize("faq"),
  };
}

function applyMenuBadgesFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const normalized = normalizeMenuBadges(parsed?.menuBadges);
    const links = Array.from(document.querySelectorAll(".nav-links a[data-menu-key]"));
    links.forEach((link) => {
      link.querySelectorAll(".nav-link-badge").forEach((el) => el.remove());
      const key = String(link.dataset.menuKey || "").trim();
      const badge = String(normalized[key] || "");
      if (!badge) return;
      const span = document.createElement("span");
      span.className = `nav-link-badge badge-${badge}`;
      span.textContent = badge === "hot" ? "HOT" : badge === "promo" ? "PROMO" : "NOUVEAU";
      link.appendChild(span);
    });
  } catch (error) {}
}

function renderPremiumBreadcrumbForPage(currentLabel) {
  const el = document.getElementById("premium-breadcrumb");
  if (!el) return;
  const safeCurrent = String(currentLabel || "").trim() || "Page";
  if (safeCurrent.toLowerCase() === "faq") {
    el.classList.add("hidden");
    el.innerHTML = "";
    return;
  }
  el.classList.remove("hidden");
  el.innerHTML = `<a class="crumb" href="index.html">Accueil</a><span class="sep">›</span><span class="crumb current">${escapeHtml(
    safeCurrent
  )}</span>`;
}

function initializePageTransitions() {
  document.body.classList.add("page-enter");
  window.requestAnimationFrame(() => {
    document.body.classList.add("page-enter-active");
    window.setTimeout(() => {
      document.body.classList.remove("page-enter");
      document.body.classList.remove("page-enter-active");
    }, 620);
  });

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;
      const href = String(link.getAttribute("href") || "").trim();
      if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let targetUrl;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch (error) {
        return;
      }
      if (targetUrl.origin !== window.location.origin) return;
      if (targetUrl.href === window.location.href) return;
      event.preventDefault();
      document.body.classList.add("page-exit");
      window.setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 320);
    },
    true
  );
}

function readLegalContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const legal = parsed?.legal && typeof parsed.legal === "object" ? parsed.legal : {};
    const normalizeBlock = (block, fallback) => {
      const current = block && typeof block === "object" ? block : {};
      return {
        label: String(current.label || fallback.label).trim() || fallback.label,
        title: String(current.title || fallback.title).trim() || fallback.title,
        content: String(current.content || fallback.content).trim() || fallback.content,
      };
    };
    return {
      footerContactEmail:
        String(parsed?.footerContactEmail || LEGAL_FALLBACK.footerContactEmail).trim() ||
        LEGAL_FALLBACK.footerContactEmail,
      legal: {
        mentions: normalizeBlock(legal.mentions, LEGAL_FALLBACK.legal.mentions),
        cgv: normalizeBlock(legal.cgv, LEGAL_FALLBACK.legal.cgv),
        rgpd: normalizeBlock(legal.rgpd, LEGAL_FALLBACK.legal.rgpd),
        cookies: normalizeBlock(legal.cookies, LEGAL_FALLBACK.legal.cookies),
      },
    };
  } catch (error) {
    return LEGAL_FALLBACK;
  }
}

function closeLegalModal() {
  if (!legalModalEl || !legalModalTitleEl || !legalModalContentEl) return;
  legalModalEl.classList.add("hidden");
  legalModalTitleEl.textContent = "";
  legalModalContentEl.innerHTML = "";
}

function formatLegalModalContent(content) {
  const text = String(content || "").replace(/\r/g, "").trim();
  if (!text) return "";
  const blocks = text
    .split(/\n\s*\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
  return blocks
    .map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const isList = lines.length > 1 && lines.every((line) => /^[-•]\s+/.test(line));
      if (isList) {
        const items = lines
          .map((line) => line.replace(/^[-•]\s+/, "").trim())
          .filter(Boolean)
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join("");
        return `<section class="legal-modal-section"><ul class="legal-modal-list">${items}</ul></section>`;
      }
      const html = lines.map((line) => escapeHtml(line)).join("<br />");
      return `<section class="legal-modal-section"><p>${html}</p></section>`;
    })
    .join("");
}

function openLegalModal(section) {
  if (!legalModalEl || !legalModalTitleEl || !legalModalContentEl) return;
  const data = readLegalContent();
  const key =
    section === "mentions" || section === "cgv" || section === "rgpd" || section === "cookies"
      ? section
      : "mentions";
  legalModalTitleEl.textContent = data.legal[key].title;
  legalModalContentEl.innerHTML = formatLegalModalContent(data.legal[key].content);
  legalModalEl.classList.remove("hidden");
}

function renderFooterLegal() {
  const data = readLegalContent();
  if (footerContactEmailEl) footerContactEmailEl.textContent = data.footerContactEmail;
  if (footerLegalMentionsBtnEl) footerLegalMentionsBtnEl.textContent = data.legal.mentions.label;
  if (footerLegalCgvBtnEl) footerLegalCgvBtnEl.textContent = data.legal.cgv.label;
  if (footerLegalRgpdBtnEl) footerLegalRgpdBtnEl.textContent = data.legal.rgpd.label;
  if (footerLegalCookiesBtnEl) footerLegalCookiesBtnEl.textContent = data.legal.cookies.label;
}

function initializeLegalFooter() {
  renderFooterLegal();
  footerLegalMentionsBtnEl?.addEventListener("click", () => openLegalModal("mentions"));
  footerLegalCgvBtnEl?.addEventListener("click", () => openLegalModal("cgv"));
  footerLegalRgpdBtnEl?.addEventListener("click", () => openLegalModal("rgpd"));
  footerLegalCookiesBtnEl?.addEventListener("click", () => openLegalModal("cookies"));
  legalModalCloseEl?.addEventListener("click", closeLegalModal);
  legalModalEl?.addEventListener("click", (event) => {
    if (event.target === legalModalEl) closeLegalModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && legalModalEl && !legalModalEl.classList.contains("hidden")) {
      closeLegalModal();
    }
  });
}

function isAllowedOutlookEmail(email) {
  return /@outlook\.(com|fr)$/i.test(String(email || "").trim());
}

function isAdminEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return normalized === ADMIN_EMAIL || normalized === "votexcore.fr";
}

async function requestAdminSessionLogin(email, password) {
  const response = await fetch("/api/admin/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: String(email || "").trim().toLowerCase(),
      password: String(password || ""),
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || "Accès admin refusé.");
  }
  return payload;
}

async function requestAdminSessionLogout() {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}",
    });
  } catch (error) {}
}

function isAdminSessionAuthorized() {
  const email = getCurrentAuthEmail();
  return isAdminEmail(email) && sessionStorage.getItem(SESSION_KEY) === "1";
}

function getCurrentAuthEmail() {
  const sessionEmail = String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
  if (isAllowedOutlookEmail(sessionEmail)) return sessionEmail;
  const rememberedEmail = getRememberedAuthEmail();
  return isAllowedOutlookEmail(rememberedEmail) ? rememberedEmail : "";
}

function refreshNavSessionButtons() {
  const authEmail = getCurrentAuthEmail();
  const isLoggedIn = isAllowedOutlookEmail(authEmail);
  if (userProfileToggleBtn) userProfileToggleBtn.classList.toggle("hidden", !isLoggedIn);
  if (adminToggle) adminToggle.classList.toggle("hidden", !(isLoggedIn && isAdminSessionAuthorized()));
  refreshNavAssignedFilesBadge();
}

function refreshNavAssignedFilesBadge() {
  const gamesMenuLink = document.querySelector('.nav-links a[data-menu-key="jeux"]');
  if (!gamesMenuLink) return;

  gamesMenuLink.querySelectorAll(".nav-assigned-file-badge").forEach((el) => el.remove());
  delete gamesMenuLink.dataset.assignedFilesCount;
  gamesMenuLink.classList.remove("has-assigned-files");

  const email = getCurrentAuthEmail();
  if (!isAllowedOutlookEmail(email)) {
    gamesMenuLink.title = "Jeux";
    return;
  }

  let assignments = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    assignments = Array.isArray(parsed?.processus?.gamesAssignments) ? parsed.processus.gamesAssignments : [];
  } catch (error) {
    assignments = [];
  }

  const now = Date.now();
  const availableCount = assignments.filter((item) => {
    const owner = String(item?.email || "").trim().toLowerCase();
    if (!owner || owner !== email) return false;
    if (Boolean(item?.revoked)) return false;
    const maxDownloads = Math.max(1, Math.round(Number(item?.maxDownloads) || 1));
    const done = Math.max(0, Math.round(Number(item?.downloadCount) || 0));
    if (done >= maxDownloads) return false;
    if (item?.expiresAt) {
      const expiresAt = new Date(item.expiresAt).getTime();
      if (Number.isFinite(expiresAt) && expiresAt > 0 && expiresAt < now) return false;
    }
    return Boolean(String(item?.filePath || "").trim());
  }).length;

  if (availableCount <= 0) {
    gamesMenuLink.title = "Jeux";
    return;
  }

  gamesMenuLink.dataset.assignedFilesCount = String(availableCount);
  gamesMenuLink.classList.add("has-assigned-files");
  gamesMenuLink.title = `Jeux - ${availableCount} fichier ZIP disponible${availableCount > 1 ? "s" : ""}`;

  const badge = document.createElement("span");
  badge.className = "nav-assigned-file-badge";
  badge.textContent = `ZIP ${availableCount}`;
  badge.setAttribute("aria-hidden", "true");
  gamesMenuLink.appendChild(badge);

  const dot = document.createElement("span");
  dot.className = "nav-assigned-file-dot";
  dot.setAttribute("aria-hidden", "true");
  gamesMenuLink.appendChild(dot);
}

function updateAdminToggleVisibility() {
  if (!adminToggle) return;
  const authEmail = getCurrentAuthEmail();
  adminToggle.classList.toggle("hidden", !isAdminSessionAuthorized());
  refreshAdminLiveMode();
}

function isAdminLiveMode() {
  return isAdminSessionAuthorized() && sessionStorage.getItem(ADMIN_LIVE_MODE_KEY) !== "0";
}

function refreshAdminLiveMode() {
  const isLive = isAdminLiveMode();
  if (adminLiveExitBtn) adminLiveExitBtn.classList.toggle("hidden", !isLive);
  renderGamesAdminDebug();
  if (gamesGridEl) {
    renderGamesCatalog().catch(() => {});
  }
}

function renderGamesAdminDebug() {
  const debugEl = document.getElementById("games-admin-debug");
  if (!debugEl) return;
  const email = getCurrentAuthEmail();
  const isLogged = isAllowedOutlookEmail(email);
  const isAdmin = isAdminEmail(email);
  if (!isAdmin) {
    debugEl.classList.add("hidden");
    debugEl.innerHTML = "";
    return;
  }
  debugEl.classList.remove("hidden");
  const liveKey = String(sessionStorage.getItem(ADMIN_LIVE_MODE_KEY) || "(vide)");
  const live = isAdminLiveMode();
  const state = live ? "ON" : "OFF";
  debugEl.classList.remove("ok", "ko");
  debugEl.classList.add(live ? "ok" : "ko");
  debugEl.innerHTML = `
    <strong>ADMIN DEBUG: ${state}</strong>
    <span>Email: ${escapeHtml(email || "aucun")}</span>
    <span>Outlook: ${isLogged ? "oui" : "non"}</span>
    <span>Admin: ${isAdmin ? "oui" : "non"}</span>
    <span>LIVE_KEY: ${escapeHtml(liveKey)}</span>
  `;
}

function loadUserLog() {
  try {
    const raw = localStorage.getItem(USER_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveUserLog(log) {
  localStorage.setItem(USER_LOG_KEY, JSON.stringify(log.slice(0, 200)));
  persistUserStateToDiskAuto();
}

function recordUserLogin(email) {
  const log = loadUserLog();
  log.unshift({ email, date: new Date().toISOString() });
  saveUserLog(log);
}

function loadSiteUsers() {
  try {
    const raw = localStorage.getItem(SITE_USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.email === "string")
      .map((item) => ({
        email: String(item.email || "").trim().toLowerCase(),
        password: String(item.password || ""),
        isActive: item.isActive === undefined ? true : Boolean(item.isActive),
        activationCode: String(item.activationCode || ""),
        activationSentAt: String(item.activationSentAt || ""),
        revoked: Boolean(item.revoked),
        blacklisted: Boolean(item.blacklisted),
      }));
  } catch (error) {
    return [];
  }
}

function saveSiteUsers(users) {
  const source = Array.isArray(users) ? users : [];
  const seen = new Set();
  const deduped = [];
  source.forEach((item) => {
    const email = String(item?.email || "").trim().toLowerCase();
    if (!email || seen.has(email)) return;
    seen.add(email);
    deduped.push({ ...item, email });
  });
  localStorage.setItem(SITE_USERS_KEY, JSON.stringify(deduped));
  persistUserStateToDiskAuto();
}

function buildUserStateSnapshot() {
  return {
    updatedAt: new Date().toISOString(),
    users: loadSiteUsers(),
    userLog: loadUserLog(),
    userConfigs: (() => {
      try {
        return JSON.parse(localStorage.getItem(USER_CONFIGS_KEY) || "{}");
      } catch (error) {
        return {};
      }
    })(),
    promoCodes: (() => {
      try {
        return JSON.parse(localStorage.getItem(PROMO_CODES_KEY) || "[]");
      } catch (error) {
        return [];
      }
    })(),
    adminProfilePhoto: String(localStorage.getItem(ADMIN_PROFILE_PHOTO_KEY) || ""),
  };
}

function applyUserStateSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return;
  if (Array.isArray(snapshot.users)) {
    localStorage.setItem(SITE_USERS_KEY, JSON.stringify(snapshot.users));
  }
  if (Array.isArray(snapshot.userLog)) {
    localStorage.setItem(USER_LOG_KEY, JSON.stringify(snapshot.userLog.slice(0, 200)));
  }
  if (snapshot.userConfigs && typeof snapshot.userConfigs === "object") {
    localStorage.setItem(USER_CONFIGS_KEY, JSON.stringify(snapshot.userConfigs));
  }
  if (Array.isArray(snapshot.promoCodes)) {
    localStorage.setItem(PROMO_CODES_KEY, JSON.stringify(snapshot.promoCodes));
  }
  if (typeof snapshot.adminProfilePhoto === "string") {
    localStorage.setItem(ADMIN_PROFILE_PHOTO_KEY, snapshot.adminProfilePhoto);
  }
}

async function saveUserStateSnapshotToDisk(snapshot) {
  try {
    const response = await fetch("/api/save-user-state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state: snapshot }),
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function persistUserStateToDiskAuto() {
  if (userStatePersistTimer) clearTimeout(userStatePersistTimer);
  userStatePersistTimer = window.setTimeout(() => {
    const snapshot = buildUserStateSnapshot();
    saveUserStateSnapshotToDisk(snapshot).catch(() => {});
    userStatePersistTimer = null;
  }, 180);
}

async function hydrateUserStateFromDisk() {
  try {
    const response = await fetch("/api/user-state", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload?.ok || !payload?.state || typeof payload.state !== "object") return false;
    applyUserStateSnapshot(payload.state);
    return true;
  } catch (error) {
    return false;
  }
}

function generateActivationCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?";
  let code = "";
  for (let index = 0; index < 10; index += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function setPendingActivation(email) {
  pendingActivationEmail = String(email || "").trim().toLowerCase();
  if (pendingActivationEmail) {
    sessionStorage.setItem(PENDING_ACTIVATION_KEY, pendingActivationEmail);
  } else {
    sessionStorage.removeItem(PENDING_ACTIVATION_KEY);
  }
}

function showActivationStep(show) {
  if (!activationStepEl) return;
  activationStepEl.classList.toggle("hidden", !show);
  if (!show && siteActivationCodeEl) siteActivationCodeEl.value = "";
}

function setAuthMode(mode) {
  authMode = mode === "new" ? "new" : "user";
  if (authModeUserBtn) authModeUserBtn.classList.toggle("active", authMode === "user");
  if (authModeNewBtn) authModeNewBtn.classList.toggle("active", authMode === "new");
  if (authPasswordStrengthEl) authPasswordStrengthEl.classList.toggle("hidden", authMode !== "new");
  if (authMode === "user") {
    setPendingActivation("");
    showActivationStep(false);
  }
}

function inferAuthFeedbackTone(message) {
  const text = String(message || "").trim();
  if (!text) return "";
  if (/invalide|incorrect|bloqu|refus|court|autoris|erreur|impossible/i.test(text)) return "error";
  if (/envoy|activ|réussi|valid|connect|déconnect|mis à jour/i.test(text)) return "success";
  return "info";
}

function setAuthFeedback(message, tone = "") {
  if (!siteLoginFeedbackEl) return;
  const text = String(message || "");
  siteLoginFeedbackEl.textContent = text;
  siteLoginFeedbackEl.classList.remove("success", "error", "info");
  const finalTone = tone || inferAuthFeedbackTone(text);
  if (finalTone) siteLoginFeedbackEl.classList.add(finalTone);
}

function setAuthResetFeedback(message, tone = "") {
  if (!authResetFeedbackEl) return;
  const text = String(message || "");
  authResetFeedbackEl.textContent = text;
  authResetFeedbackEl.classList.remove("success", "error", "info");
  const finalTone = tone || inferAuthFeedbackTone(text);
  if (finalTone) authResetFeedbackEl.classList.add(finalTone);
}

function evaluatePasswordStrength(value) {
  const password = String(value || "");
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score += 1;
  if (password.length >= 12) score += 1;
  if (score <= 1) return { level: "weak", label: "Force du mot de passe: faible" };
  if (score <= 3) return { level: "medium", label: "Force du mot de passe: moyen" };
  return { level: "strong", label: "Force du mot de passe: fort" };
}

function initializePasswordStrengthMeter() {
  if (!siteLoginPasswordEl || !authPasswordStrengthEl || !authPasswordStrengthLabelEl) return;
  const refresh = () => {
    if (authMode !== "new") return;
    const result = evaluatePasswordStrength(siteLoginPasswordEl.value);
    authPasswordStrengthEl.classList.remove("weak", "medium", "strong");
    authPasswordStrengthEl.classList.add(result.level);
    authPasswordStrengthLabelEl.textContent = result.label;
  };
  siteLoginPasswordEl.addEventListener("input", refresh);
  refresh();
}

function initializePasswordVisibilityToggle() {
  const inputs = [siteLoginPasswordEl, authResetPasswordEl].filter(Boolean);
  inputs.forEach((inputEl) => {
    if (inputEl.closest(".auth-password-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "auth-password-wrap";
    inputEl.insertAdjacentElement("beforebegin", wrapper);
    wrapper.appendChild(inputEl);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "auth-password-toggle";
    toggle.setAttribute("aria-pressed", "false");
    toggle.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"></path>
        <circle cx="12" cy="12" r="3.2"></circle>
        <path class="eye-slash" d="M4 4l16 16"></path>
      </svg>
    `;

    const updateState = () => {
      const isVisible = inputEl.type === "text";
      toggle.classList.toggle("is-visible", isVisible);
      toggle.setAttribute("aria-pressed", isVisible ? "true" : "false");
      toggle.setAttribute("aria-label", isVisible ? "Masquer le champ" : "Afficher le champ");
    };

    toggle.addEventListener("click", () => {
      inputEl.type = inputEl.type === "password" ? "text" : "password";
      updateState();
    });

    wrapper.appendChild(toggle);
    updateState();
  });
}

function initializeSegmentedCodeInput(inputEl) {
  if (!inputEl || inputEl.dataset.segmented === "1") return;
  inputEl.dataset.segmented = "1";
  const digits = 6;
  const wrapper = document.createElement("div");
  wrapper.className = "auth-code-segmented";
  const cells = [];

  const syncHidden = () => {
    inputEl.value = cells.map((cell) => cell.value).join("");
  };

  for (let i = 0; i < digits; i += 1) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.inputMode = "numeric";
    cell.maxLength = 1;
    cell.autocomplete = i === 0 ? "one-time-code" : "off";
    cell.className = "auth-code-cell";

    cell.addEventListener("input", () => {
      cell.value = cell.value.replace(/\D/g, "").slice(0, 1);
      if (cell.value && i < digits - 1) cells[i + 1].focus();
      syncHidden();
    });

    cell.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !cell.value && i > 0) cells[i - 1].focus();
    });

    cell.addEventListener("paste", (event) => {
      event.preventDefault();
      const pasted = String(event.clipboardData?.getData("text") || "")
        .replace(/\D/g, "")
        .slice(0, digits);
      if (!pasted) return;
      for (let j = 0; j < digits; j += 1) {
        cells[j].value = pasted[j] || "";
      }
      syncHidden();
      const focusIndex = Math.min(pasted.length, digits - 1);
      cells[focusIndex].focus();
    });

    cells.push(cell);
    wrapper.appendChild(cell);
  }

  inputEl.classList.add("hidden");
  inputEl.insertAdjacentElement("afterend", wrapper);
  syncHidden();
}

function loadResetCodes() {
  try {
    const raw = localStorage.getItem(AUTH_RESET_CODES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveResetCodes(map) {
  localStorage.setItem(AUTH_RESET_CODES_KEY, JSON.stringify(map || {}));
}

async function sendAuthCodeByEmail(email, code, type) {
  const response = await fetch("/api/send-auth-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: String(email || "").trim().toLowerCase(),
      code: String(code || "").trim(),
      type: type === "reset" ? "reset" : "activation",
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) {
    throw new Error(payload.error || "Echec d'envoi email.");
  }
}

function setRememberedAuthEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!isAllowedOutlookEmail(normalized)) {
    localStorage.removeItem(AUTH_REMEMBER_KEY);
    return;
  }
  localStorage.setItem(AUTH_REMEMBER_KEY, normalized);
}

function clearRememberedAuthEmail() {
  localStorage.removeItem(AUTH_REMEMBER_KEY);
}

function getRememberedAuthEmail() {
  return String(localStorage.getItem(AUTH_REMEMBER_KEY) || "").trim().toLowerCase();
}

function syncRememberPreference(email) {
  if (authRememberEl?.checked) {
    setRememberedAuthEmail(email);
    return;
  }
  clearRememberedAuthEmail();
}

function initializeForgotPasswordFlow() {
  if (!authForgotToggleEl || !authResetStepEl) return;
  authForgotToggleEl.addEventListener("click", () => {
    authResetStepEl.classList.toggle("hidden");
    setAuthResetFeedback("");
    if (authResetEmailEl && !authResetEmailEl.value && siteLoginEmailEl?.value) {
      authResetEmailEl.value = String(siteLoginEmailEl.value || "").trim().toLowerCase();
    }
  });

  authResetSendBtnEl?.addEventListener("click", async () => {
    const email = String(authResetEmailEl?.value || siteLoginEmailEl?.value || "").trim().toLowerCase();
    if (!isAllowedOutlookEmail(email)) {
      setAuthResetFeedback("Adresse Outlook requise pour réinitialiser.", "error");
      return;
    }
    if (isAdminEmail(email)) {
      setAuthResetFeedback("Réinitialisation admin désactivée ici. Contactez l'administrateur.", "error");
      return;
    }
    const users = loadSiteUsers();
    const existing = users.find((u) => u.email === email);
    if (!existing) {
      setAuthResetFeedback("Compte introuvable pour cette adresse.", "error");
      return;
    }

    const code = generateActivationCode();
    const allCodes = loadResetCodes();
    allCodes[email] = { code, expiresAt: Date.now() + 10 * 60 * 1000 };
    try {
      await sendAuthCodeByEmail(email, code, "reset");
    } catch (error) {
      setAuthResetFeedback(`Impossible d'envoyer le code par email: ${error.message || "configuration serveur manquante"}`, "error");
      return;
    }
    saveResetCodes(allCodes);
    setAuthResetFeedback(`Code envoyé à ${email}. Vérifiez votre boîte mail Outlook.`, "success");
  });

  authResetConfirmBtnEl?.addEventListener("click", () => {
    const email = String(authResetEmailEl?.value || siteLoginEmailEl?.value || "").trim().toLowerCase();
    const newPassword = String(authResetPasswordEl?.value || "");
    const code = String(authResetCodeEl?.value || "").trim();
    if (!email || !newPassword || code.length !== 6) {
      setAuthResetFeedback("Complétez email, nouveau mot de passe et code à 6 chiffres.", "error");
      return;
    }
    if (newPassword.length < 6) {
      setAuthResetFeedback("Mot de passe trop court (6 caractères minimum).", "error");
      return;
    }
    const allCodes = loadResetCodes();
    const token = allCodes[email];
    if (!token || token.code !== code || Number(token.expiresAt || 0) < Date.now()) {
      setAuthResetFeedback("Code invalide ou expiré.", "error");
      return;
    }
    const users = loadSiteUsers();
    const existing = users.find((u) => u.email === email);
    if (!existing) {
      setAuthResetFeedback("Compte introuvable.", "error");
      return;
    }
    existing.password = newPassword;
    saveSiteUsers(users);
    delete allCodes[email];
    saveResetCodes(allCodes);
    setAuthResetFeedback("Mot de passe réinitialisé. Vous pouvez vous connecter.", "success");
    setAuthFeedback("Réinitialisation réussie. Connectez-vous avec votre nouveau mot de passe.", "success");
    if (siteLoginEmailEl) siteLoginEmailEl.value = email;
  });
}

function unlockSite() {
  document.documentElement.classList.add("vb-auth-ok");
  document.body.classList.remove("site-locked");
  if (authGateEl) authGateEl.classList.add("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.remove("hidden");
  const sessionEmail = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  if (isAdminSessionAuthorized() && !sessionStorage.getItem(ADMIN_LIVE_MODE_KEY)) {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "1");
  }
  refreshNavSessionButtons();
  updateAdminToggleVisibility();
  applyBackgroundMusicAccess();
  refreshAdminLiveMode();
  if (gamesGridEl) {
    renderGamesCatalog().catch(() => {});
  }
}

function lockSite() {
  document.documentElement.classList.remove("vb-auth-ok");
  document.body.classList.add("site-locked");
  if (authGateEl) authGateEl.classList.remove("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.add("hidden");
  refreshNavSessionButtons();
  if (adminLiveExitBtn) adminLiveExitBtn.classList.add("hidden");
  sessionStorage.removeItem(ADMIN_LIVE_MODE_KEY);
  applyBackgroundMusicAccess();
  if (gamesGridEl) {
    renderGamesCatalog().catch(() => {});
  }
}

function initializeSiteAuth() {
  const sessionEmail = String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
  const rememberedEmail = getRememberedAuthEmail();
  const existingEmail = isAllowedOutlookEmail(sessionEmail) ? sessionEmail : rememberedEmail;
  if (authRememberEl) authRememberEl.checked = Boolean(rememberedEmail);
  if (siteLoginEmailEl && isAllowedOutlookEmail(rememberedEmail) && !siteLoginEmailEl.value) {
    siteLoginEmailEl.value = rememberedEmail;
  }
  if (isAllowedOutlookEmail(existingEmail)) {
    sessionStorage.setItem(AUTH_SESSION_KEY, existingEmail);
    unlockSite();
    return;
  }
  lockSite();
  const pendingEmail = sessionStorage.getItem(PENDING_ACTIVATION_KEY) || "";
  if (isAllowedOutlookEmail(pendingEmail)) {
    setAuthMode("new");
    setPendingActivation(pendingEmail);
    showActivationStep(true);
  } else {
    setPendingActivation("");
    showActivationStep(false);
  }
}

function loadFaqItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallbackFaq;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.faqItems) || !parsed.faqItems.length) return fallbackFaq;
    const normalized = parsed.faqItems
      .map((item) => ({
        question: typeof item?.question === "string" ? item.question.trim() : "",
        answer: typeof item?.answer === "string" ? item.answer.trim() : "",
      }))
      .filter((item) => item.question && item.answer);
    if (!normalized.length) return fallbackFaq;
    const seen = new Set(normalized.map((item) => item.question.toLowerCase()));
    const merged = normalized.slice();
    fallbackFaq.forEach((item) => {
      const key = item.question.toLowerCase();
      if (seen.has(key)) return;
      merged.push(item);
      seen.add(key);
    });
    return merged;
  } catch (error) {
    return fallbackFaq;
  }
}

function loadSupportSavContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SUPPORT_SAV_FALLBACK;
    const parsed = JSON.parse(raw);
    const source = parsed?.supportSav && typeof parsed.supportSav === "object" ? parsed.supportSav : {};
    const cards = (Array.isArray(source.cards) ? source.cards : SUPPORT_SAV_FALLBACK.cards)
      .map((item, index) => ({
        title:
          typeof item?.title === "string" && item.title.trim()
            ? item.title.trim()
            : SUPPORT_SAV_FALLBACK.cards[index % SUPPORT_SAV_FALLBACK.cards.length].title,
        text:
          typeof item?.text === "string" && item.text.trim()
            ? item.text.trim()
            : SUPPORT_SAV_FALLBACK.cards[index % SUPPORT_SAV_FALLBACK.cards.length].text,
        ctaLabel:
          typeof item?.ctaLabel === "string" && item.ctaLabel.trim()
            ? item.ctaLabel.trim()
            : SUPPORT_SAV_FALLBACK.cards[index % SUPPORT_SAV_FALLBACK.cards.length].ctaLabel,
      }))
      .filter((item) => item.title || item.text);
    const steps = (Array.isArray(source.steps) ? source.steps : SUPPORT_SAV_FALLBACK.steps)
      .map((item, index) => ({
        title:
          typeof item?.title === "string" && item.title.trim()
            ? item.title.trim()
            : SUPPORT_SAV_FALLBACK.steps[index % SUPPORT_SAV_FALLBACK.steps.length].title,
        text:
          typeof item?.text === "string" && item.text.trim()
            ? item.text.trim()
            : SUPPORT_SAV_FALLBACK.steps[index % SUPPORT_SAV_FALLBACK.steps.length].text,
      }))
      .filter((item) => item.title || item.text);
    const faq = (Array.isArray(source.faq) ? source.faq : SUPPORT_SAV_FALLBACK.faq)
      .map((item) => ({
        question: typeof item?.question === "string" ? item.question.trim() : "",
        answer: typeof item?.answer === "string" ? item.answer.trim() : "",
      }))
      .filter((item) => item.question && item.answer);
    return {
      badge: typeof source.badge === "string" && source.badge.trim() ? source.badge.trim() : SUPPORT_SAV_FALLBACK.badge,
      title: typeof source.title === "string" && source.title.trim() ? source.title.trim() : SUPPORT_SAV_FALLBACK.title,
      subtitle:
        typeof source.subtitle === "string" && source.subtitle.trim()
          ? source.subtitle.trim()
          : SUPPORT_SAV_FALLBACK.subtitle,
      telegramUrl:
        typeof source.telegramUrl === "string" && source.telegramUrl.trim()
          ? source.telegramUrl.trim()
          : SUPPORT_SAV_FALLBACK.telegramUrl,
      cards: cards.length ? cards : SUPPORT_SAV_FALLBACK.cards,
      steps: steps.length ? steps : SUPPORT_SAV_FALLBACK.steps,
      faq: faq.length ? faq : SUPPORT_SAV_FALLBACK.faq,
    };
  } catch (error) {
    return SUPPORT_SAV_FALLBACK;
  }
}

async function hydrateContentFromDiskIfMissing() {
  const rawStored = localStorage.getItem(STORAGE_KEY);
  let parsedStored = null;
  try {
    parsedStored = rawStored ? JSON.parse(rawStored) : null;
  } catch (error) {
    parsedStored = null;
  }

  try {
    const response = await fetch("/api/content", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload?.ok || !payload?.content || typeof payload.content !== "object") return false;
    if (parsedStored) {
      try {
        if (JSON.stringify(parsedStored) === JSON.stringify(payload.content)) return false;
      } catch (error) {}
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload.content));
    return true;
  } catch (error) {
    return false;
  }
}

function renderFaq() {
  const items = loadFaqItems();
  if (!items.length) {
    faqListEl.innerHTML = '<article class="faq-empty">Aucune question disponible pour le moment.</article>';
    return;
  }

  faqListEl.innerHTML = items
    .map(
      (item, index) => `
      <article class="faq-item" data-faq-item="${index}">
        <button class="faq-question" type="button" data-faq-toggle="${index}">
          <span>${item.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${item.answer}</p>
        </div>
      </article>
    `
    )
    .join("");
}

async function renderGamesCatalog(options = {}) {
  if (!gamesGridEl) return;
  const previousMarkup = String(gamesGridEl.innerHTML || "");
  const useCache = Boolean(options?.useCache);
  let games = [];
  let loaded = false;

  if (useCache && Array.isArray(gamesCatalogCache) && gamesCatalogCache.length) {
    games = normalizeGamesCatalog(gamesCatalogCache);
    loaded = true;
  } else if (useCache) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      const localGames = normalizeGamesCatalog(parsed?.gamesCatalog);
      if (localGames.length) {
        games = localGames;
        loaded = true;
      }
    } catch (error) {}
  } else {
    try {
      const response = await fetch(`/api/games-catalog?ts=${Date.now()}`, { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        games = normalizeGamesCatalog(payload?.gamesCatalog);
        loaded = true;
      }
    } catch (error) {}
  }

  // Fallback 1: read static content file directly.
  if (!games.length) {
    try {
      const response = await fetch(`/data/site-content.json?ts=${Date.now()}`, { cache: "no-store" });
      if (response.ok) {
        const content = await response.json();
        games = normalizeGamesCatalog(content?.gamesCatalog);
        loaded = true;
      }
    } catch (error) {}
  }

  // Fallback 2: legacy API.
  if (!games.length) {
    try {
      const response = await fetch(`/api/content?ts=${Date.now()}`, { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        games = normalizeGamesCatalog(payload?.content?.gamesCatalog);
        loaded = true;
      }
    } catch (error) {}
  }

  // Fallback 3: local cache only if server sources unavailable.
  if (!games.length) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      games = normalizeGamesCatalog(parsed?.gamesCatalog);
    } catch (error) {}
  }

  if (!games.length) {
    renderGamesResultsToolbar(0, 0, 1, 1);
    renderGamesCatalogEmptyState();
    return;
  }

  gamesCatalogCache = games.map((item) => ({ ...item }));
  gamesCatalogDraft = normalizeGamesCatalog(games).map((item) => ({ ...item }));
  const adminEditable = isAdminLiveMode();

  try {
    const renderableGames = await ensureRenderableGameCovers(games);
    const source = renderableGames.length ? renderableGames : games;
    const indexedSource = source.map((item, index) => ({ item, index }));
    const needle = normalizeGameText(gamesSearchTerm);
    const displaySource = needle
      ? indexedSource.filter(({ item }) => normalizeGameText(item?.title || "").includes(needle))
      : indexedSource;

    if (!displaySource.length) {
      renderGamesResultsToolbar(source.length, 0, 1, 1);
      renderGamesCatalogNoResultState();
      return;
    }

    const totalPages = Math.max(1, Math.ceil(displaySource.length / gamesPageSize));
    if (gamesCurrentPage > totalPages) gamesCurrentPage = totalPages;
    if (gamesCurrentPage < 1) gamesCurrentPage = 1;
    const startIndex = (gamesCurrentPage - 1) * gamesPageSize;
    const pagedSource = displaySource.slice(startIndex, startIndex + gamesPageSize);
    renderGamesResultsToolbar(source.length, displaySource.length, totalPages, gamesCurrentPage);

    gamesGridEl.classList.remove("is-ready");
    const cardsMarkup = pagedSource
      .map(({ item, index }) => {
        const current = gamesCatalogDraft[index] || item;
        const infoText = String(current.info || "").trim();
        const effectiveInfoText = infoText || DEFAULT_GAME_INFO_TEXT;
        const isReadyInfo = isGameInfoGreen(effectiveInfoText);
        const infoStateClass = isReadyInfo ? "is-ready" : "is-custom";
        const infoEncoded = encodeURIComponent(String(current.info || ""));
        const titleValue = String(current.title || item.title || "Info jeu");
        return `
        <article class="game-cover-card" data-game-index="${index}" style="--game-stagger:${index}">
          ${
            adminEditable
              ? `
          <div class="games-admin-card-tools">
            <button class="games-admin-btn" type="button" data-game-admin-action="replace" data-game-index="${index}">Image</button>
            <button class="games-admin-btn" type="button" data-game-admin-action="rename" data-game-index="${index}">Titre</button>
            <button class="games-admin-btn" type="button" data-game-admin-action="info" data-game-index="${index}">I</button>
            <button class="games-admin-btn danger" type="button" data-game-admin-action="delete" data-game-index="${index}">X</button>
            <input class="games-admin-file-input" id="games-admin-file-${index}" type="file" accept="image/*" data-game-index="${index}" />
          </div>
          `
              : ""
          }
          <div class="game-cover-topbar">
            <img class="game-cover-topbar-logo" src="/favicon-vb.svg" alt="VB" loading="lazy" decoding="async" />
            <span>VortexBox Premium</span>
          </div>
          <div class="game-cover-media-wrap progressive-media-host" data-game-title="${escapeHtml(current.title || item.title)}" style="--cover-url:url('${escapeHtml(withImageCacheBuster(toPublicImageUrl(item.image))).replace(/'/g, "%27")}')">
            <button class="game-cover-info-btn ${infoStateClass}" type="button" data-game-index="${index}" data-game-title="${escapeHtml(titleValue)}" data-game-info="${escapeHtml(infoEncoded)}" aria-label="Information jeu">i</button>
            <img
              class="game-cover-media js-progressive-media"
              src="${escapeHtml(withImageCacheBuster(toPublicImageUrl(item.image)))}"
              alt="${escapeHtml(item.title)}"
              loading="${index < 3 ? "eager" : "lazy"}"
              decoding="async"
              onerror="this.onerror=null;this.src='/favicon-vb.svg';"
            />
          </div>
          <p class="game-cover-title">${escapeHtml(current.title || item.title || `Jeu ${index + 1}`)}</p>
        </article>
      `;
      })
      .join("");
    const toolbarMarkup = adminEditable
      ? `
      <div class="games-admin-toolbar">
        <button class="games-admin-btn" type="button" data-game-admin-action="add">+ Ajouter jaquette</button>
        <button class="games-admin-btn" type="button" data-game-admin-action="sort-az">Trier A → Z</button>
        <button class="games-admin-btn" type="button" data-game-admin-action="import-zip">Importer ZIP/RAR jaquettes</button>
        <input id="games-admin-add-file" class="games-admin-file-input" type="file" accept="image/*" />
        <input id="games-admin-import-zip" class="games-admin-file-input" type="file" accept=".zip,.rar,application/zip,application/vnd.rar,application/x-rar-compressed" />
        <span class="games-admin-notice info" id="games-admin-notice">Mode admin actif: modifiez les jaquettes directement ici.</span>
      </div>
    `
      : "";
    gamesGridEl.innerHTML = `${toolbarMarkup}${cardsMarkup}`;
    bindProgressiveMedia(gamesGridEl);
  } catch (error) {
    // Keep the static HTML cards if dynamic rendering fails for any reason.
    if (previousMarkup.trim()) gamesGridEl.innerHTML = previousMarkup;
  }
  bindProgressiveMedia(gamesGridEl);
  initializeGamesPremiumEffects();
  window.requestAnimationFrame(() => gamesGridEl.classList.add("is-ready"));
}

if (gamesSearchInputEl) {
  gamesSearchInputEl.addEventListener("input", () => {
    gamesSearchTerm = String(gamesSearchInputEl.value || "").trim();
    gamesCurrentPage = 1;
    renderGamesCatalog({ useCache: true }).catch(() => {});
  });
}

if (gamesResultsToolbarEl) {
  gamesResultsToolbarEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-games-page-action]");
    if (!button) return;
    const action = String(button.dataset.gamesPageAction || "");
    if (action === "prev") gamesCurrentPage = Math.max(1, gamesCurrentPage - 1);
    if (action === "next") gamesCurrentPage += 1;
    renderGamesCatalog({ useCache: true }).catch(() => {});
  });
  gamesResultsToolbarEl.addEventListener("change", (event) => {
    const select = event.target.closest("#games-page-size");
    if (!select) return;
    gamesPageSize = Math.max(12, Math.min(120, Number(select.value) || 24));
    gamesCurrentPage = 1;
    renderGamesCatalog({ useCache: true }).catch(() => {});
  });
}

function renderSupportSav() {
  const content = loadSupportSavContent();
  if (supportSavBadgeEl) supportSavBadgeEl.textContent = content.badge;
  if (supportSavTitleEl) supportSavTitleEl.textContent = content.title;
  if (supportSavSubtitleEl) supportSavSubtitleEl.textContent = content.subtitle;
  if (supportSavCtaEl) supportSavCtaEl.setAttribute("href", content.telegramUrl || "https://t.me/VortexCore460");

  if (supportSavCardsEl) {
    supportSavCardsEl.innerHTML = content.cards
      .map(
        (item) => `
        <article class="about-card support-sav-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
      )
      .join("");
  }

  if (supportSavStepsEl) {
    supportSavStepsEl.innerHTML = content.steps
      .map(
        (item) => `
        <article class="about-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
      )
      .join("");
  }

  if (faqListEl && !faqListEl.innerHTML.trim()) {
    faqListEl.innerHTML = content.faq
      .map(
        (item, index) => `
      <article class="faq-item" data-faq-item="${index}">
        <button class="faq-question" type="button" data-faq-toggle="${index}">
          <span>${escapeHtml(item.question)}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${escapeHtml(item.answer)}</p>
        </div>
      </article>
    `
      )
      .join("");
  }
}

function addVortexBotMessage(text, role = "bot") {
  if (!vortexBotMessagesEl || !text) return;
  const item = document.createElement("p");
  item.className = `vortexbot-msg ${role}`;
  item.textContent = text;
  vortexBotMessagesEl.appendChild(item);
  vortexBotMessagesEl.scrollTop = vortexBotMessagesEl.scrollHeight;
}

function setVortexBotOpen(isOpen) {
  if (!vortexBotPanelEl || !vortexBotToggleEl) return;
  vortexBotPanelEl.classList.toggle("hidden", !isOpen);
  vortexBotToggleEl.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function initializeVortexBot() {
  if (!vortexBotEl || !vortexBotToggleEl || !vortexBotPanelEl) return;
  vortexBotToggleEl.dataset.vbBound = "1";
  if (vortexBotCloseEl) vortexBotCloseEl.dataset.vbBound = "1";

  vortexBotToggleEl.addEventListener("click", () => {
    const opening = vortexBotPanelEl.classList.contains("hidden");
    setVortexBotOpen(opening);
  });

  if (vortexBotCloseEl) {
    vortexBotCloseEl.addEventListener("click", () => setVortexBotOpen(false));
  }

  vortexBotPanelEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-bot-action]");
    if (!button) return;
    const action = button.dataset.botAction;

    if (action === "go-configurator") {
      addVortexBotMessage("J'ouvre le configurateur.", "bot");
      window.location.href = "index.html?openConfigurator=1#configurateur";
      return;
    }
    if (action === "go-ai-advisor") {
      addVortexBotMessage("Je lance votre conseiller IA.", "bot");
      window.location.href = "index.html?openConfigurator=1&aiAdvisor=1#configurateur";
      return;
    }
    if (action === "go-telegram") {
      addVortexBotMessage("Je vous redirige vers Telegram.", "bot");
      window.open("https://t.me/VortexCore460", "_blank", "noopener,noreferrer");
    }
  });
}

if (faqListEl) {
  faqListEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-faq-toggle]");
    if (!button) return;
    const item = button.closest(".faq-item");
    if (!item) return;
    item.classList.toggle("open");
  });
}

if (siteLoginFormEl) {
  siteLoginFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = String(siteLoginEmailEl.value || "").trim().toLowerCase();
    const password = String(siteLoginPasswordEl.value || "");

    if (!isAllowedOutlookEmail(email)) {
      setAuthFeedback("Adresse non autorisée. Utilisez une adresse Outlook.", "error");
      return;
    }

    if (password.length < 6) {
      setAuthFeedback("Mot de passe trop court (6 caractères minimum).", "error");
      return;
    }

    if (isAdminEmail(email)) {
      try {
        await requestAdminSessionLogin(email, password);
      } catch (error) {
        setAuthFeedback(String(error.message || "Cet email est réservé à l'administrateur."), "error");
        return;
      }
      setPendingActivation("");
      showActivationStep(false);
      sessionStorage.setItem(AUTH_SESSION_KEY, email);
      sessionStorage.setItem(SESSION_KEY, "1");
      syncRememberPreference(email);
      recordUserLogin(email);
      unlockSite();
      setAuthFeedback("");
      return;
    }

    const users = loadSiteUsers();
    const existing = users.find((u) => u.email === email);
    const enteredActivationCode = String(siteActivationCodeEl?.value || "").trim();

    if (authMode === "new") {
      if (existing && (existing.revoked || existing.blacklisted)) {
        setAuthFeedback("Compte bloqué. Contactez l'administrateur.", "error");
        return;
      }
      if (existing && !existing.isActive && enteredActivationCode) {
        if (enteredActivationCode.length !== 10) {
          setAuthFeedback("Le code d'activation doit contenir 10 caractères.", "error");
          return;
        }
        if (String(existing.activationCode || "").toLowerCase() !== enteredActivationCode.toLowerCase()) {
          setAuthFeedback("Code invalide. Vérifiez le code reçu.", "error");
          return;
        }
        existing.password = password;
        existing.isActive = true;
        existing.activationCode = "";
        existing.activationSentAt = "";
        saveSiteUsers(users);
        setPendingActivation("");
        showActivationStep(false);
        sessionStorage.setItem(AUTH_SESSION_KEY, email);
        sessionStorage.removeItem(SESSION_KEY);
        syncRememberPreference(email);
        recordUserLogin(email);
        unlockSite();
        setAuthFeedback("");
        return;
      }
      if (existing && existing.isActive) {
        setAuthFeedback("Ce compte existe déjà. Passez sur Utilisateur pour vous connecter.", "error");
        return;
      }
      const code =
        existing && !existing.isActive && String(existing.activationCode || "").length === 10
          ? String(existing.activationCode)
          : generateActivationCode();
      if (existing) {
        existing.password = password;
        existing.activationCode = code;
        existing.activationSentAt = new Date().toISOString();
      } else {
        users.push({
          email,
          password,
          isActive: false,
          activationCode: code,
          activationSentAt: new Date().toISOString(),
          revoked: false,
          blacklisted: false,
        });
      }
      saveSiteUsers(users);
      setPendingActivation(email);
      showActivationStep(true);
      if (siteActivationCodeEl) {
        siteActivationCodeEl.value = code;
        siteActivationCodeEl.focus();
        siteActivationCodeEl.select();
      }
      setAuthFeedback(`Code d'activation: ${code} (10 caractères). Conservez-le pour activer le compte.`, "success");
      return;
    }

    if (existing && (existing.revoked || existing.blacklisted)) {
      setAuthFeedback("Compte bloqué. Contactez l'administrateur.", "error");
      return;
    }
    if (!existing || existing.password !== password) {
      setAuthFeedback("Identifiants incorrects.", "error");
      return;
    }
    if (!existing.isActive) {
      setPendingActivation(email);
      showActivationStep(true);
      setAuthFeedback("Compte non activé. Entrez le code d'activation à 10 caractères.", "info");
      return;
    }

    setPendingActivation("");
    showActivationStep(false);
    sessionStorage.setItem(AUTH_SESSION_KEY, email);
    sessionStorage.removeItem(SESSION_KEY);
    syncRememberPreference(email);
    recordUserLogin(email);
    unlockSite();
    setAuthFeedback("");
  });
}

if (authModeUserBtn && authModeNewBtn) {
  authModeUserBtn.addEventListener("click", () => setAuthMode("user"));
  authModeNewBtn.addEventListener("click", () => setAuthMode("new"));
}

if (siteActivateBtnEl) {
  siteActivateBtnEl.addEventListener("click", () => {
    const email = String(siteLoginEmailEl.value || pendingActivationEmail || "").trim().toLowerCase();
    const code = String(siteActivationCodeEl?.value || "").trim();
    if (!email || !code) {
      setAuthFeedback("Entrez votre email et le code d'activation à 10 caractères.", "error");
      return;
    }
    if (code.length !== 10) {
      setAuthFeedback("Le code d'activation doit contenir 10 caractères.", "error");
      return;
    }

    const users = loadSiteUsers();
    const existing = users.find((u) => u.email === email);
    if (existing && (existing.revoked || existing.blacklisted)) {
      setAuthFeedback("Compte bloqué. Contactez l'administrateur.", "error");
      return;
    }
    if (!existing || existing.isActive) {
      setAuthFeedback("Aucun compte en attente d'activation pour cet email.", "error");
      return;
    }
    if (String(existing.activationCode || "").toLowerCase() !== code.toLowerCase()) {
      setAuthFeedback("Code invalide. Vérifiez le code reçu.", "error");
      return;
    }

    existing.isActive = true;
    existing.activationCode = "";
    existing.activationSentAt = "";
    saveSiteUsers(users);
    setPendingActivation("");
    showActivationStep(false);
    sessionStorage.setItem(AUTH_SESSION_KEY, email);
    sessionStorage.removeItem(SESSION_KEY);
    syncRememberPreference(email);
    recordUserLogin(email);
    unlockSite();
    setAuthFeedback("");
  });
}

if (userLogoutBtn) {
  userLogoutBtn.addEventListener("click", async () => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      await requestAdminSessionLogout();
    }
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(PENDING_ACTIVATION_KEY);
    clearRememberedAuthEmail();
    pendingActivationEmail = "";
    if (authRememberEl) authRememberEl.checked = false;
    lockSite();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (adminToggle) {
  adminToggle.addEventListener("click", () => {
    if (!isAdminSessionAuthorized()) return;
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "1");
    refreshAdminLiveMode();
    window.location.href = "index.html?openAdmin=1";
  });
}

if (adminLiveExitBtn) {
  adminLiveExitBtn.addEventListener("click", () => {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "0");
    refreshAdminLiveMode();
  });
}

if (userProfileToggleBtn) {
  userProfileToggleBtn.addEventListener("click", () => {
    window.location.href = "index.html?openProfile=1";
  });
}

function mountPremiumPreloader() {
  if (document.querySelector(".vb-preloader")) return;
  const preloader = document.createElement("div");
  preloader.className = "vb-preloader";
  preloader.innerHTML = `
    <div class="vb-preloader-core">
      <div class="vb-preloader-logo"><img src="favicon-vb.svg" alt="VB" /></div>
      <div class="vb-preloader-text">VortexBox Premium</div>
    </div>
  `;
  document.body.appendChild(preloader);
  requestAnimationFrame(() => preloader.classList.add("is-ready"));
  const hide = () => {
    preloader.classList.add("is-hidden");
    window.setTimeout(() => preloader.remove(), 450);
  };
  window.addEventListener("load", hide, { once: true });
  window.setTimeout(hide, 1400);
}

function initializePremiumRevealAndSpotlight() {
  const revealTargets = Array.from(
    document.querySelectorAll("main section, .faq-hero, .support-sav-hero, .support-sav-grid, .games-catalog-wrap")
  );
  revealTargets.forEach((el) => {
    if (el.classList.contains("vb-reveal")) return;
    el.classList.add("vb-reveal");
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  const spotTargets = Array.from(
    document.querySelectorAll(".about-card, .games-empty-state, .game-cover-card, .faq-item, .support-sav-card")
  );
  const canUsePointerSpotlight = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  spotTargets.forEach((el) => {
    el.classList.add("vb-spotlight-target");
    if (!canUsePointerSpotlight) return;
    let rafId = 0;
    let lastClientX = 0;
    let lastClientY = 0;
    el.addEventListener("pointermove", (event) => {
      lastClientX = event.clientX;
      lastClientY = event.clientY;
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const rect = el.getBoundingClientRect();
        const x = ((lastClientX - rect.left) / rect.width) * 100;
        const y = ((lastClientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--vb-spot-x", `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
        el.style.setProperty("--vb-spot-y", `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
        el.style.setProperty("--vb-spot-a", "1");
      });
    });
    el.addEventListener("pointerleave", () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      el.style.setProperty("--vb-spot-a", "0");
    });
  });
}

function initializeUltraPremiumVisuals() {
  mountPremiumPreloader();
  initializePremiumRevealAndSpotlight();
}

function optimizeMediaLoadingHints() {
  const images = Array.from(document.querySelectorAll("img"));
  images.forEach((img, index) => {
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", index < 4 ? "eager" : "lazy");
    }
  });
  document.querySelectorAll("video").forEach((video) => {
    if (!video.hasAttribute("preload")) video.setAttribute("preload", "metadata");
    if (!video.hasAttribute("playsinline")) video.setAttribute("playsinline", "");
  });
}

async function initializeFaqPage() {
  bindVortexBotFallbackDelegation();
  refreshNavSessionButtons();
  const hydratedUserState = await hydrateUserStateFromDisk();
  if (!hydratedUserState) persistUserStateToDiskAuto();
  applyNavThemeFromStorage();
  await hydrateContentFromDiskIfMissing();
  if (gamesGridEl) {
    await renderGamesCatalog();
  } else if (faqListEl && !supportSavCardsEl) {
    renderFaq();
  } else {
    renderSupportSav();
  }
  initializeLegalFooter();
  initializeResponsiveNav();
  applyMenuBadgesFromStorage();
  initializeNavSmartSearch();
  initializeBackgroundMusic();
  initializeCookieConsent();
  initializePasswordVisibilityToggle();
  initializeSegmentedCodeInput(authResetCodeEl);
  initializePasswordStrengthMeter();
  initializeForgotPasswordFlow();
  initializePageTransitions();
  initializeUltraPremiumVisuals();
  optimizeMediaLoadingHints();
  initializeSiteAuth();
  renderGamesAdminDebug();
  refreshNavSessionButtons();
  window.addEventListener("pageshow", refreshNavSessionButtons);
  window.addEventListener("storage", (event) => {
    if (event.key === AUTH_SESSION_KEY || event.key === AUTH_REMEMBER_KEY || event.key === STORAGE_KEY) {
      refreshNavSessionButtons();
    }
  });
  initializeVortexBot();
}

initializeFaqPage();
