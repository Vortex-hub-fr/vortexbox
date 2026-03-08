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
const ADMIN_PASSWORD = "Audric460&Qp46uqv";
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
const supportSavBadgeEl = document.getElementById("support-sav-badge");
const supportSavTitleEl = document.getElementById("support-sav-title");
const supportSavSubtitleEl = document.getElementById("support-sav-subtitle");
const supportSavCardsEl = document.getElementById("support-sav-cards");
const supportSavStepsEl = document.getElementById("support-sav-steps");
const supportSavCtaEl = document.getElementById("support-sav-cta");
const BG_MUSIC_KEY = "vortexbox-bg-music-enabled";
const COOKIE_CONSENT_KEY = "vortexbox-cookie-consent";
const ADMIN_LIVE_MODE_KEY = "vortexbox-admin-live-mode";

const fallbackFaq = [
  {
    question: "Quel est le délai de préparation d'une VortexBox ?",
    answer: "Le délai moyen est de 3 à 7 jours ouvrés selon la configuration choisie.",
  },
  {
    question: "Puis-je personnaliser ma configuration avant achat ?",
    answer: "Oui, le configurateur vous permet de choisir vos composants et services selon vos besoins.",
  },
  {
    question: "Proposez-vous une assistance après la livraison ?",
    answer: "Oui, nous assurons un support technique et des conseils d'évolution pour votre build.",
  },
  {
    question: "Quelle est la garantie matérielle VortexBox ?",
    answer: "Toutes nos VortexBox sont couvertes par une garantie matérielle de 2 ans.",
  },
  {
    question: "Comment activer l'option DLC gratuite ?",
    answer: "Demandez votre code promo personnel sur Telegram, puis saisissez-le dans le configurateur.",
  },
  {
    question: "Le code promo DLC peut-il être utilisé plusieurs fois ?",
    answer: "Non, chaque code promo est à usage unique et lié à une seule adresse email.",
  },
  {
    question: "Puis-je sauvegarder ma configuration dans mon profil ?",
    answer: "Oui, vous pouvez enregistrer vos configurations dans Mes configurations pour les retrouver plus tard.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous proposons des moyens de paiement sécurisés. Contactez-nous sur Telegram pour finaliser la commande.",
  },
  {
    question: "Puis-je demander des conseils avant d'acheter ?",
    answer: "Oui, notre équipe vous guide selon votre budget, vos jeux et votre résolution cible.",
  },
  {
    question: "Les fiches techniques sont-elles téléchargeables ?",
    answer: "Oui, chaque fiche technique peut être consultée et téléchargée au format PDF.",
  },
  {
    question: "Livrez-vous les builds déjà testés ?",
    answer: "Oui, chaque build est monté, validé et stress-testé avant expédition.",
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
  telegramUrl: "https://t.me/vortexboxpro",
  cards: [
    {
      title: "Diagnostic rapide",
      text: "Analyse guidée de votre build et vérifications prioritaires en moins de 24h.",
      ctaLabel: "Ouvrir un ticket",
    },
    {
      title: "Garantie matérielle 2 ans",
      text: "Prise en charge des pièces éligibles et suivi transparent de votre dossier SAV.",
      ctaLabel: "Voir la garantie",
    },
    {
      title: "Support Telegram",
      text: "Échange direct avec l'équipe VortexBox pour accélérer vos demandes.",
      ctaLabel: "Contacter sur Telegram",
    },
  ],
  steps: [
    { title: "1. Déclaration", text: "Vous nous envoyez votre demande avec les détails de votre build." },
    { title: "2. Analyse", text: "Nous validons le diagnostic et proposons la meilleure solution." },
    { title: "3. Résolution", text: "Réparation, échange ou conseil d'optimisation selon votre cas." },
  ],
  faq: fallbackFaq.slice(0, 5),
};

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
  if (cookieConsentAnalyticsEl) cookieConsentAnalyticsEl.checked = existing ? existing.analytics : false;

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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1220) closeMenu();
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
  const label = /support-sav\.html$/i.test(path) ? "Support & SAV" : "FAQ";
  renderPremiumBreadcrumbForPage(label);
}

function initializeNavSmartSearch() {
  if (!navSmartSearchInputEl || !navSmartResultsEl) return;
  navSmartSearchInputEl.value = "";
  navSmartSearchInputEl.setAttribute("name", "menu-search");
  navSmartSearchInputEl.setAttribute("autocomplete", "off");
  navSmartSearchInputEl.setAttribute("autocapitalize", "none");
  navSmartSearchInputEl.setAttribute("autocorrect", "off");
  navSmartSearchInputEl.setAttribute("spellcheck", "false");
  navSmartSearchInputEl.setAttribute("inputmode", "search");

  const allLinks = Array.from(document.querySelectorAll(".nav-links a[href]"));
  const map = new Map();
  allLinks.forEach((link) => {
    const label = String(link.textContent || "").trim().replace(/\s+/g, " ");
    const href = String(link.getAttribute("href") || "").trim();
    if (!label || !href) return;
    map.set(`${label}|${href}`, { label, href });
  });
  const entries = Array.from(map.values());
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
    visible = items.slice(0, 6);
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
      button.textContent = item.label;
      navSmartResultsEl.appendChild(button);
    });
    navSmartResultsEl.classList.remove("hidden");
  };

  navSmartSearchInputEl.addEventListener("input", () => {
    if (String(navSmartSearchInputEl.value || "").includes("@")) {
      navSmartSearchInputEl.value = "";
    }
    const query = String(navSmartSearchInputEl.value || "").trim().toLowerCase();
    if (query.length < 2) {
      close();
      return;
    }
    activeIndex = 0;
    const items = entries.filter((item) => item.label.toLowerCase().includes(query) || item.href.toLowerCase().includes(query));
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
    }, 320);
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
      }, 190);
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
  return String(email || "").trim().toLowerCase() === ADMIN_EMAIL;
}

function refreshNavSessionButtons() {
  const sessionEmail = String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
  const isLoggedIn = isAllowedOutlookEmail(sessionEmail);
  if (userProfileToggleBtn) userProfileToggleBtn.classList.toggle("hidden", !isLoggedIn);
  if (adminToggle) adminToggle.classList.toggle("hidden", !(isLoggedIn && isAdminEmail(sessionEmail)));
}

function updateAdminToggleVisibility() {
  if (!adminToggle) return;
  const sessionEmail = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  adminToggle.classList.toggle("hidden", !isAdminEmail(sessionEmail));
  refreshAdminLiveMode();
}

function isAdminLiveMode() {
  const email = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  return isAdminEmail(email) && sessionStorage.getItem(ADMIN_LIVE_MODE_KEY) !== "0";
}

function refreshAdminLiveMode() {
  if (!adminLiveExitBtn) return;
  adminLiveExitBtn.classList.toggle("hidden", !isAdminLiveMode());
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
  localStorage.setItem(SITE_USERS_KEY, JSON.stringify(users));
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
  document.body.classList.remove("site-locked");
  if (authGateEl) authGateEl.classList.add("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.remove("hidden");
  const sessionEmail = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  if (isAdminEmail(sessionEmail) && !sessionStorage.getItem(ADMIN_LIVE_MODE_KEY)) {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "1");
  }
  refreshNavSessionButtons();
  updateAdminToggleVisibility();
  applyBackgroundMusicAccess();
  refreshAdminLiveMode();
}

function lockSite() {
  document.body.classList.add("site-locked");
  if (authGateEl) authGateEl.classList.remove("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.add("hidden");
  refreshNavSessionButtons();
  if (adminLiveExitBtn) adminLiveExitBtn.classList.add("hidden");
  sessionStorage.removeItem(ADMIN_LIVE_MODE_KEY);
  applyBackgroundMusicAccess();
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
  let shouldHydrate = !rawStored;

  if (!shouldHydrate) {
    try {
      const parsed = JSON.parse(rawStored);
      const hasRequiredStructure =
        parsed &&
        typeof parsed === "object" &&
        Array.isArray(parsed.faq);
      if (!hasRequiredStructure) shouldHydrate = true;
    } catch (error) {
      shouldHydrate = true;
    }
  }

  if (!shouldHydrate) return false;

  try {
    const response = await fetch("/api/content", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload?.ok || !payload?.content || typeof payload.content !== "object") return false;
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

function renderSupportSav() {
  const content = loadSupportSavContent();
  if (supportSavBadgeEl) supportSavBadgeEl.textContent = content.badge;
  if (supportSavTitleEl) supportSavTitleEl.textContent = content.title;
  if (supportSavSubtitleEl) supportSavSubtitleEl.textContent = content.subtitle;
  if (supportSavCtaEl) supportSavCtaEl.setAttribute("href", content.telegramUrl || "https://t.me/vortexboxpro");

  if (supportSavCardsEl) {
    supportSavCardsEl.innerHTML = content.cards
      .map(
        (item) => `
        <article class="about-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <a class="cta" href="${escapeHtml(content.telegramUrl || "https://t.me/vortexboxpro")}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            item.ctaLabel || "En savoir plus"
          )}</a>
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
      window.location.href = "index.html#configurateur";
      return;
    }
    if (action === "go-telegram") {
      addVortexBotMessage("Je vous redirige vers Telegram.", "bot");
      window.open("https://t.me/vortexboxpro", "_blank", "noopener,noreferrer");
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

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
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
        if (existing.password === password) {
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
  userLogoutBtn.addEventListener("click", () => {
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

async function initializeFaqPage() {
  const hydratedUserState = await hydrateUserStateFromDisk();
  if (!hydratedUserState) persistUserStateToDiskAuto();
  applyNavThemeFromStorage();
  await hydrateContentFromDiskIfMissing();
  if (faqListEl && !supportSavCardsEl) {
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
  initializeSiteAuth();
  refreshNavSessionButtons();
  window.addEventListener("pageshow", refreshNavSessionButtons);
  window.addEventListener("storage", (event) => {
    if (event.key === AUTH_SESSION_KEY) refreshNavSessionButtons();
  });
  initializeVortexBot();
}

initializeFaqPage();
