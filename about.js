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

const aboutVideosGridEl = document.getElementById("about-videos-grid");
const aboutVideoModalEl = document.getElementById("about-video-modal");
const aboutVideoModalPlayerEl = document.getElementById("about-video-modal-player");
const aboutVideoCloseEl = document.getElementById("about-video-close");
const aboutImageModalEl = document.getElementById("about-image-modal");
const aboutImageModalImgEl = document.getElementById("about-image-modal-img");
const aboutImageCloseEl = document.getElementById("about-image-close");
const aboutPhotoMarqueeSectionEl = document.getElementById("about-photo-marquee-section");
const aboutPhotoMarqueeTrackEl = document.getElementById("about-photo-marquee-track");
const BG_MUSIC_KEY = "vortexbox-bg-music-enabled";
const COOKIE_CONSENT_KEY = "vortexbox-cookie-consent";
const MEDIA_DB_NAME = "vortexbox-media-db";
const MEDIA_DB_VERSION = 2;
const MEDIA_STORE_ABOUT_VIDEOS = "about-videos";
const MEDIA_STORE_TECH_FILES = "technical-files";
const ADMIN_LIVE_MODE_KEY = "vortexbox-admin-live-mode";

const fallbackVideos = [
  { title: "Atelier VortexBox", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
  { title: "Montage Premium", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
  { title: "Stress Test Gaming", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
  { title: "Benchmarks VortexBox", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
  { title: "Validation Qualité", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
  { title: "Packaging Premium", videoData: "", videoWebm: "", fileName: "", videoKey: "" },
];
const fallbackGallery = {
  speed: 28,
  direction: "left",
  watermarkEnabled: true,
  photos: [
    { title: "Gaming Setup Premium", image: "vortex-premium-photo-1.svg" },
    { title: "Performance Ready", image: "vortex-premium-photo-2.svg" },
    { title: "Expérience Immersive", image: "vortex-premium-photo-3.svg" },
  ],
};
let authMode = "user";
let pendingActivationEmail = "";
let aboutVideoObjectUrls = [];
let aboutVideoIntersectionObserver = null;
const aboutVideoKeyUrlCache = new Map();
let userStatePersistTimer = null;
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
        "Les prix sont indiqués en euros TTC. Toute commande validée implique l'acceptation des conditions de vente. Garantie matériel 2 ans sur les build VortexBox.",
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

function openMediaDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB indisponible"));
      return;
    }
    const request = indexedDB.open(MEDIA_DB_NAME, MEDIA_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MEDIA_STORE_ABOUT_VIDEOS)) {
        db.createObjectStore(MEDIA_STORE_ABOUT_VIDEOS, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(MEDIA_STORE_TECH_FILES)) {
        db.createObjectStore(MEDIA_STORE_TECH_FILES, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Erreur IndexedDB"));
  });
}

async function getAboutVideoRecord(id) {
  if (!id) return null;
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_ABOUT_VIDEOS, "readonly");
    const store = tx.objectStore(MEDIA_STORE_ABOUT_VIDEOS);
    const request = store.get(id);
    request.onsuccess = () => {
      db.close();
      resolve(request.result || null);
    };
    request.onerror = () => {
      db.close();
      reject(request.error || new Error("Lecture vidéo impossible."));
    };
  });
}

function clearAboutVideoObjectUrls() {
  aboutVideoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  aboutVideoObjectUrls = [];
  aboutVideoKeyUrlCache.clear();
}

function resetAboutVideoObserver() {
  if (!aboutVideoIntersectionObserver) return;
  aboutVideoIntersectionObserver.disconnect();
  aboutVideoIntersectionObserver = null;
}

function pickPlayableVideoSource(mp4LikeSrc, webmSrc) {
  const webm = String(webmSrc || "").trim();
  const mp4Like = String(mp4LikeSrc || "").trim();
  if (webm) {
    const probe = document.createElement("video");
    if (typeof probe.canPlayType === "function" && probe.canPlayType("video/webm")) {
      return webm;
    }
  }
  return mp4Like;
}

async function resolveAboutVideoSource(videoData, videoKey, videoWebm) {
  const directSrc = pickPlayableVideoSource(videoData, videoWebm);
  if (directSrc) return directSrc;
  const key = String(videoKey || "").trim();
  if (!key) return "";
  const cached = aboutVideoKeyUrlCache.get(key);
  if (cached) return cached;
  try {
    const record = await getAboutVideoRecord(key);
    if (!record?.blob) return "";
    const url = URL.createObjectURL(record.blob);
    aboutVideoObjectUrls.push(url);
    aboutVideoKeyUrlCache.set(key, url);
    return url;
  } catch (error) {
    return "";
  }
}

async function hydrateAboutVideoElement(videoEl, eager = false) {
  if (!videoEl || videoEl.dataset.loaded === "1" || videoEl.dataset.loading === "1") return;
  videoEl.dataset.loading = "1";
  try {
    const src = await resolveAboutVideoSource(
      videoEl.dataset.videoSrc,
      videoEl.dataset.videoKey,
      videoEl.dataset.videoWebm
    );
    if (!src) return;
    videoEl.src = src;
    videoEl.preload = eager ? "metadata" : "none";
    videoEl.dataset.videoSrc = src;
    videoEl.dataset.loaded = "1";
    const card = videoEl.closest(".about-video-card");
    if (card && !card.dataset.videoSrc) card.dataset.videoSrc = src;
    videoEl.load();
    // Silent inline preview on cards so users see the video before opening modal.
    if (videoEl.dataset.preview === "1") {
      videoEl.play().catch(() => {});
    }
  } finally {
    delete videoEl.dataset.loading;
  }
}

function initializeAboutVideosLazyLoad() {
  resetAboutVideoObserver();
  const videos = Array.from(aboutVideosGridEl.querySelectorAll(".about-video-card video[data-video-key], .about-video-card video[data-video-src]"));
  if (!videos.length) return;

  const eagerCount = Math.min(2, videos.length);
  for (let index = 0; index < eagerCount; index += 1) {
    hydrateAboutVideoElement(videos[index], true).catch(() => {});
  }

  if (!("IntersectionObserver" in window)) {
    videos.slice(eagerCount).forEach((videoEl) => {
      hydrateAboutVideoElement(videoEl).catch(() => {});
    });
    return;
  }

  aboutVideoIntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const videoEl = entry.target;
        observer.unobserve(videoEl);
        hydrateAboutVideoElement(videoEl).catch(() => {});
      });
    },
    { root: null, rootMargin: "300px 0px", threshold: 0.1 }
  );

  videos.slice(eagerCount).forEach((videoEl) => aboutVideoIntersectionObserver.observe(videoEl));
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
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
    navEl.classList.toggle("nav-compact", window.scrollY > 48);
    navEl.classList.toggle("nav-ultra-compact", window.scrollY > 230);
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
  renderPremiumBreadcrumbForPage("A propos");
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
  if (Array.isArray(snapshot.faqItems)) {
    snapshot.faqItems.forEach((faq) => {
      addEntry(faq?.question || "FAQ", "faq.html", [faq?.answer], "FAQ");
    });
  }
  if (Array.isArray(snapshot.gamesCatalog)) {
    snapshot.gamesCatalog.forEach((game) => {
      addEntry(game?.title || "Jeu", "jeux.html", [game?.info], "Jeux");
    });
  }
  if (snapshot.supportSav && typeof snapshot.supportSav === "object") {
    addEntry(snapshot.supportSav.title || "Support & SAV", "support-sav.html", [snapshot.supportSav.subtitle], "Support");
  }
  if (Array.isArray(snapshot.aboutVideos)) {
    snapshot.aboutVideos.forEach((video) => {
      addEntry(video?.title || "Video VortexBox", "about.html", [video?.title], "A propos");
    });
  }
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

async function loadAboutVideos() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return fallbackVideos;

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed.aboutVideos)) return fallbackVideos;

    const videos = [0, 1, 2, 3, 4, 5].map((index) => {
      const item = parsed.aboutVideos[index] || {};
      return {
        title: typeof item.title === "string" && item.title.trim() ? item.title : fallbackVideos[index].title,
        videoData: typeof item.videoData === "string" ? item.videoData : "",
        videoWebm: typeof item.videoWebm === "string" ? item.videoWebm : "",
        fileName: typeof item.fileName === "string" ? item.fileName : "",
        videoKey: typeof item.videoKey === "string" ? item.videoKey : "",
      };
    });
    return videos;
  } catch (error) {
    return fallbackVideos;
  }
}

function saveAboutVideosOrder(videos) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed.aboutVideos = Array.isArray(videos) ? videos : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    fetch("/api/save-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: parsed }),
    }).catch(() => {});
  } catch (error) {}
}

async function hydrateContentFromDiskIfMissing() {
  const rawStored = localStorage.getItem(STORAGE_KEY);
  let localContent = {};
  if (rawStored) {
    try {
      localContent = JSON.parse(rawStored) || {};
    } catch (error) {
      localContent = {};
    }
  }
  try {
    const response = await fetch("/api/content", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload?.ok || !payload?.content || typeof payload.content !== "object") return false;

    // About page is always synced from disk to avoid stale local gallery/video artifacts.
    const nextContent = {
      ...localContent,
      aboutVideos: Array.isArray(payload.content.aboutVideos)
        ? payload.content.aboutVideos
        : Array.isArray(localContent.aboutVideos)
          ? localContent.aboutVideos
          : fallbackVideos,
      aboutGallery:
        payload.content.aboutGallery && typeof payload.content.aboutGallery === "object"
          ? payload.content.aboutGallery
          : localContent.aboutGallery && typeof localContent.aboutGallery === "object"
            ? localContent.aboutGallery
            : fallbackGallery,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
    return true;
  } catch (error) {
    return false;
  }
}

function loadAboutGallery() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return fallbackGallery;
  try {
    const parsed = JSON.parse(stored);
    const hasGallery = parsed.aboutGallery && typeof parsed.aboutGallery === "object";
    const gallery = hasGallery ? parsed.aboutGallery : {};
    const rawSpeed = Number(gallery.speed);
    const speed = Number.isFinite(rawSpeed) ? Math.min(80, Math.max(8, Math.round(rawSpeed))) : fallbackGallery.speed;
    const direction = gallery.direction === "right" ? "right" : "left";
    const watermarkEnabled =
      gallery.watermarkEnabled === undefined ? true : Boolean(gallery.watermarkEnabled);
    const photos = (Array.isArray(gallery.photos) ? gallery.photos : hasGallery ? [] : fallbackGallery.photos)
      .slice(0, 15)
      .map((item, index) => ({
        title:
          typeof item?.title === "string" && item.title.trim()
            ? item.title.trim()
            : fallbackGallery.photos[index % fallbackGallery.photos.length].title,
        image:
          typeof item?.image === "string" && item.image.trim()
            ? item.image
            : fallbackGallery.photos[index % fallbackGallery.photos.length].image,
      }))
      .filter((item) => Boolean(item.image));

    return {
      speed,
      direction,
      watermarkEnabled,
      photos,
    };
  } catch (error) {
    return fallbackGallery;
  }
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
  refreshNavAssignedFilesBadge();
}

function refreshNavAssignedFilesBadge() {
  const gamesMenuLink = document.querySelector('.nav-links a[data-menu-key="jeux"]');
  if (!gamesMenuLink) return;

  gamesMenuLink.querySelectorAll(".nav-assigned-file-badge").forEach((el) => el.remove());
  delete gamesMenuLink.dataset.assignedFilesCount;
  gamesMenuLink.classList.remove("has-assigned-files");

  const email = String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
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
  const sessionEmail = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  adminToggle.classList.toggle("hidden", !isAdminEmail(sessionEmail));
  refreshAdminLiveMode();
}

function isAdminLiveMode() {
  const email = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  return isAdminEmail(email) && sessionStorage.getItem(ADMIN_LIVE_MODE_KEY) !== "0";
}

function refreshAdminLiveMode() {
  const enabled = isAdminLiveMode();
  document.body.classList.toggle("admin-live-edit", enabled);
  if (adminLiveExitBtn) adminLiveExitBtn.classList.toggle("hidden", !enabled);
  renderAboutVideos().catch(() => {});
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

function saveUserLog(log) {
  localStorage.setItem(USER_LOG_KEY, JSON.stringify(log.slice(0, 200)));
  persistUserStateToDiskAuto();
}

function recordUserLogin(email) {
  const log = loadUserLog();
  log.unshift({
    email,
    date: new Date().toISOString(),
  });
  saveUserLog(log);
}

function unlockSite() {
  document.documentElement.classList.add("vb-auth-ok");
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
  document.documentElement.classList.remove("vb-auth-ok");
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

async function renderAboutVideos() {
  clearAboutVideoObjectUrls();
  resetAboutVideoObserver();
  const videos = await loadAboutVideos();
  const allowInlineAdminSort = isAdminLiveMode();

  aboutVideosGridEl.innerHTML = videos
    .map((item, index) => {
      if (!item.videoData && !item.videoKey) {
        return `
          <article class="about-video-card" data-video-index="${index}">
            ${
              allowInlineAdminSort
                ? `
                <div class="about-video-admin-controls">
                  <button class="showcase-admin-btn" type="button" data-action="about-video-left" data-video-index="${index}" aria-label="Déplacer à gauche">◀</button>
                  <button class="showcase-admin-btn" type="button" data-action="about-video-right" data-video-index="${index}" aria-label="Déplacer à droite">▶</button>
                </div>
              `
                : ""
            }
            <video muted playsinline loop autoplay preload="metadata" data-preview="1" poster="vortex-premium-photo-${(index % 3) + 1}.svg"></video>
            <p class="about-video-title">${item.title}</p>
          </article>
        `;
      }

      return `
        <article class="about-video-card" data-video-index="${index}" data-video-src="${item.videoData}" data-video-key="${item.videoKey || ""}">
          ${
            allowInlineAdminSort
              ? `
              <div class="about-video-admin-controls">
                <button class="showcase-admin-btn" type="button" data-action="about-video-left" data-video-index="${index}" aria-label="Déplacer à gauche">◀</button>
                <button class="showcase-admin-btn" type="button" data-action="about-video-right" data-video-index="${index}" aria-label="Déplacer à droite">▶</button>
              </div>
            `
              : ""
          }
          <video
            muted
            playsinline
            loop
            autoplay
            preload="${item.videoData ? "metadata" : "none"}"
            src="${item.videoData ? pickPlayableVideoSource(item.videoData, item.videoWebm || "") : ""}"
            data-video-src="${item.videoData}"
            data-video-webm="${item.videoWebm || ""}"
            data-video-key="${item.videoKey || ""}"
            data-preview="1"
            poster="vortex-premium-photo-${(index % 3) + 1}.svg"
          ></video>
          <p class="about-video-title">${item.title}</p>
        </article>
      `;
    })
    .join("");

  initializeAboutVideosLazyLoad();
}

function openVideoModal(src) {
  if (!src) return;
  aboutVideoModalPlayerEl.src = src;
  aboutVideoModalEl.classList.remove("hidden");
  aboutVideoModalPlayerEl.play().catch(() => {});
}

function closeVideoModal() {
  aboutVideoModalEl.classList.add("hidden");
  aboutVideoModalPlayerEl.pause();
  aboutVideoModalPlayerEl.removeAttribute("src");
}

function openImageModal(src, alt) {
  if (!src || !aboutImageModalEl || !aboutImageModalImgEl) return;
  aboutImageModalImgEl.src = src;
  aboutImageModalImgEl.alt = alt || "Image VortexBox";
  aboutImageModalEl.classList.remove("hidden");
}

function closeImageModal() {
  if (!aboutImageModalEl || !aboutImageModalImgEl) return;
  aboutImageModalEl.classList.add("hidden");
  aboutImageModalImgEl.removeAttribute("src");
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

function renderAboutPhotoMarquee() {
  if (!aboutPhotoMarqueeTrackEl || !aboutPhotoMarqueeSectionEl) return;
  const gallery = loadAboutGallery();
  document.body.classList.toggle(
    "about-watermark-enabled",
    gallery.watermarkEnabled === undefined ? true : Boolean(gallery.watermarkEnabled)
  );
  const photos = Array.isArray(gallery.photos) ? gallery.photos.filter((item) => item && item.image) : [];

  if (photos.length === 0) {
    aboutPhotoMarqueeSectionEl.classList.add("hidden");
    return;
  }

  const photoCards = photos
    .map((item) => {
      const rawImage = String(item.image || "");
      const bgImage = rawImage
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\s/g, "%20");
      return `
        <article class="about-photo-item" style="--photo-bg:url('${bgImage}')">
          <img src="${rawImage}" alt="${escapeHtml(item.title || "Photo VortexBox")}" loading="lazy" />
        </article>
      `;
    })
    .join("");
  aboutPhotoMarqueeTrackEl.innerHTML = `${photoCards}${photoCards}`;
  aboutPhotoMarqueeTrackEl.dataset.direction = gallery.direction === "right" ? "right" : "left";
  aboutPhotoMarqueeTrackEl.style.setProperty("--marquee-duration", `${gallery.speed}s`);
  aboutPhotoMarqueeSectionEl.classList.remove("hidden");
}

aboutVideosGridEl.addEventListener("click", async (event) => {
  const adminButton = event.target.closest("button[data-action][data-video-index]");
  if (adminButton && isAdminLiveMode()) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(adminButton.dataset.videoIndex);
    if (Number.isNaN(index)) return;

    loadAboutVideos()
      .then((videos) => {
        const next = Array.isArray(videos) ? [...videos] : [];
        if (adminButton.dataset.action === "about-video-left" && index > 0) {
          [next[index - 1], next[index]] = [next[index], next[index - 1]];
        } else if (adminButton.dataset.action === "about-video-right" && index < next.length - 1) {
          [next[index + 1], next[index]] = [next[index], next[index + 1]];
        } else {
          return;
        }
        saveAboutVideosOrder(next);
        return renderAboutVideos();
      })
      .catch(() => {});
    return;
  }

  const card = event.target.closest(".about-video-card");
  if (!card) return;
  let src = card.dataset.videoSrc;
  if (!src) {
    const cardVideo = card.querySelector("video");
    if (cardVideo) {
      await hydrateAboutVideoElement(cardVideo, true);
      src = cardVideo.dataset.videoSrc || card.dataset.videoSrc || "";
    }
  }
  openVideoModal(src);
});

aboutVideoCloseEl.addEventListener("click", closeVideoModal);

aboutVideoModalEl.addEventListener("click", (event) => {
  if (event.target === aboutVideoModalEl) closeVideoModal();
});

if (aboutPhotoMarqueeTrackEl) {
  aboutPhotoMarqueeTrackEl.addEventListener("click", (event) => {
    const image = event.target.closest(".about-photo-item img");
    if (!image) return;
    openImageModal(image.src, image.alt);
  });
}

if (aboutImageCloseEl) {
  aboutImageCloseEl.addEventListener("click", closeImageModal);
}

if (aboutImageModalEl) {
  aboutImageModalEl.addEventListener("click", (event) => {
    if (event.target === aboutImageModalEl) closeImageModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !aboutVideoModalEl.classList.contains("hidden")) {
    closeVideoModal();
  }
  if (event.key === "Escape" && aboutImageModalEl && !aboutImageModalEl.classList.contains("hidden")) {
    closeImageModal();
  }
  if (event.key === "Escape" && legalModalEl && !legalModalEl.classList.contains("hidden")) {
    closeLegalModal();
  }
});

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
    } else {
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
  const revealTargets = Array.from(document.querySelectorAll("main section, .about-hero, .about-section, .about-cards"));
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

  const spotTargets = Array.from(document.querySelectorAll(".about-card, .about-video-card, .about-gallery-photo-card"));
  spotTargets.forEach((el) => {
    el.classList.add("vb-spotlight-target");
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--vb-spot-x", `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
      el.style.setProperty("--vb-spot-y", `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
      el.style.setProperty("--vb-spot-a", "1");
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--vb-spot-a", "0");
    });
  });
}

function initializeUltraPremiumVisuals() {
  mountPremiumPreloader();
  initializePremiumRevealAndSpotlight();
}

async function initializeAboutPage() {
  const hydratedUserState = await hydrateUserStateFromDisk();
  if (!hydratedUserState) persistUserStateToDiskAuto();
  applyNavThemeFromStorage();
  await hydrateContentFromDiskIfMissing();
  await renderAboutVideos().catch(() => {});
  renderAboutPhotoMarquee();
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
  initializeSiteAuth();
  refreshNavSessionButtons();
  window.addEventListener("pageshow", refreshNavSessionButtons);
  window.addEventListener("storage", (event) => {
    if (event.key === AUTH_SESSION_KEY || event.key === STORAGE_KEY) refreshNavSessionButtons();
  });
  initializeVortexBot();
}

initializeAboutPage();
