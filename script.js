const form = document.getElementById("builder");
const builderFieldsEl = document.getElementById("builder-fields");
const summaryList = document.getElementById("summary-list");
const totalPrice = document.getElementById("total-price");
const summarySaveConfigBtn = document.getElementById("summary-save-config");
const summarySaveFeedbackEl = document.getElementById("summary-save-feedback");
const summaryTelegramImageEl = document.getElementById("summary-telegram-image");
const fpsFortniteEl = document.getElementById("fps-fortnite");
const fpsWarzoneEl = document.getElementById("fps-warzone");
const fpsGtaEl = document.getElementById("fps-gta");
const heroTitleEl = document.getElementById("hero-title");
const machinesTitleEl = document.getElementById("machines-title");
const machinesCardsEl = document.getElementById("machines-cards");
const heroShowcaseEl = document.getElementById("hero-showcase");
const imageModalEl = document.getElementById("image-modal");
const imageModalImgEl = document.getElementById("image-modal-img");
const imageModalCaptionEl = document.getElementById("image-modal-caption");
const imageModalCloseEl = document.getElementById("image-modal-close");
let adminVideoModalEl = null;
let adminVideoModalPlayerEl = null;
let adminVideoModalCaptionEl = null;
const machineModalEl = document.getElementById("machine-modal");
const machineModalContentEl = document.getElementById("machine-modal-content");
const machineModalCloseEl = document.getElementById("machine-modal-close");
const configInfoModalEl = document.getElementById("config-info-modal");
const configInfoModalCloseEl = document.getElementById("config-info-modal-close");
const configInfoModalTitleEl = document.getElementById("config-info-modal-title");
const configInfoModalContentEl = document.getElementById("config-info-modal-content");
const technicalSheetsGridEl = document.getElementById("technical-sheets-grid");
const reviewsGridEl = document.getElementById("reviews-grid");
const proofKpisEl = document.getElementById("proof-kpis");
const proofReviewsCountEl = document.getElementById("proof-reviews-count");
const proofAverageRatingEl = document.getElementById("proof-average-rating");
const proofSatisfactionRateEl = document.getElementById("proof-satisfaction-rate");
const configuratorSectionEl = document.getElementById("configurateur");
const configuratorVisualEl = document.getElementById("configurator-visual");
const openConfiguratorLinkEl = document.getElementById("open-configurator-link");
const openConfiguratorCtaEl = document.getElementById("open-configurator-cta");
const mobileOpenConfiguratorEl = document.getElementById("mobile-open-configurator");
const promoCodeInputEl = document.getElementById("promo-code-input");
const promoApplyBtnEl = document.getElementById("promo-apply-btn");
const promoFeedbackEl = document.getElementById("promo-feedback");
const navMachinesLinkEl = document.getElementById("nav-machines-link");
const navFichesLinkEl = document.getElementById("nav-fiches-link");
const navSmartSearchInputEl = document.getElementById("nav-smart-search");
const navSmartResultsEl = document.getElementById("nav-smart-results");
const navSmartKeywordsEl = document.getElementById("nav-smart-keywords");
const navSmartKeywordsListEl = document.getElementById("nav-smart-keywords-list");
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
const userProfileToggleBtn = document.getElementById("user-profile-toggle");
const userLogoutBtn = document.getElementById("user-logout");
const adminLiveExitBtn = document.getElementById("admin-live-exit");
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

const adminToggle = document.getElementById("admin-toggle");
const adminPanel = document.getElementById("admin-panel");
const adminLogin = document.getElementById("admin-login");
const adminEditor = document.getElementById("admin-editor");
const adminEmailInput = document.getElementById("admin-email");
const adminPasswordInput = document.getElementById("admin-password");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminKpiGateEl = document.getElementById("admin-kpi-gate");
const adminKpiProceedBtn = document.getElementById("admin-kpi-proceed");
const adminKpiRefreshBtn = document.getElementById("admin-kpi-refresh");
const adminGateUsersActiveEl = document.getElementById("admin-gate-users-active");
const adminGateLogins7dEl = document.getElementById("admin-gate-logins-7d");
const adminGateRatingEl = document.getElementById("admin-gate-rating");
const adminGatePromoConvEl = document.getElementById("admin-gate-promo-conv");
const adminKpiLineChartEl = document.getElementById("admin-kpi-line-chart");
const adminKpiBarsEl = document.getElementById("admin-kpi-bars");
const adminKpiRecommendationsEl = document.getElementById("admin-kpi-recommendations");
const adminHeroTitle = document.getElementById("admin-hero-title");
const adminMachinesTitle = document.getElementById("admin-machines-title");
const adminNavThemeSelect = document.getElementById("admin-nav-theme");
const adminMenuBadgeMachinesSelect = document.getElementById("admin-menu-badge-machines");
const adminMenuBadgeConfiguratorSelect = document.getElementById("admin-menu-badge-configurateur");
const adminMenuBadgeSupportSelect = document.getElementById("admin-menu-badge-support");
const adminMenuBadgeFichesSelect = document.getElementById("admin-menu-badge-fiches");
const adminMenuBadgeGuidesSelect = document.getElementById("admin-menu-badge-guides");
const adminMenuBadgeJeuxSelect = document.getElementById("admin-menu-badge-jeux");
const adminMenuBadgeAboutSelect = document.getElementById("admin-menu-badge-about");
const adminMenuBadgeFaqSelect = document.getElementById("admin-menu-badge-faq");
const MENU_BADGE_KEYS = ["machines", "configurateur", "support", "fiches", "guides", "jeux", "about", "faq"];
const adminMachinesList = document.getElementById("admin-machines-list");
const adminAddMachineBtn = document.getElementById("admin-add-machine");
const adminTechnicalSheetsList = document.getElementById("admin-technical-sheets-list");
const adminAddTechnicalSheetBtn = document.getElementById("admin-add-technical-sheet");
const adminComponentsList = document.getElementById("admin-components-list");
const adminServicesList = document.getElementById("admin-services-list");
const adminComponentSelect = document.getElementById("admin-component-select");
const adminComponentMoveUpBtn = document.getElementById("admin-component-move-up");
const adminComponentMoveDownBtn = document.getElementById("admin-component-move-down");
const adminAddComponentInlineBtn = document.getElementById("admin-add-component-inline");
const adminRemoveComponentCategoryBtn = document.getElementById("admin-remove-component-category");
const adminAddComponentProductBtn = document.getElementById("admin-add-component-product");
const adminAddServiceOptionBtn = document.getElementById("admin-add-service-option");
const adminFaqList = document.getElementById("admin-faq-list");
const adminAddFaqItemBtn = document.getElementById("admin-add-faq-item");
const adminGamesList = document.getElementById("admin-games-list");
const adminAddGameItemBtn = document.getElementById("admin-add-game-item");
const adminSupportBadgeInput = document.getElementById("admin-support-badge");
const adminSupportTitleInput = document.getElementById("admin-support-title");
const adminSupportSubtitleInput = document.getElementById("admin-support-subtitle");
const adminSupportTelegramUrlInput = document.getElementById("admin-support-telegram-url");
const adminSupportCardsList = document.getElementById("admin-support-cards-list");
const adminSupportStepsList = document.getElementById("admin-support-steps-list");
const adminSupportFaqList = document.getElementById("admin-support-faq-list");
const adminAddSupportCardBtn = document.getElementById("admin-add-support-card");
const adminAddSupportStepBtn = document.getElementById("admin-add-support-step");
const adminAddSupportFaqItemBtn = document.getElementById("admin-add-support-faq-item");
const adminReviewsList = document.getElementById("admin-reviews-list");
const adminAddReviewItemBtn = document.getElementById("admin-add-review-item");
const adminFooterEmailInput = document.getElementById("admin-footer-email");
const adminLegalMentionsLabelInput = document.getElementById("admin-legal-mentions-label");
const adminLegalMentionsTitleInput = document.getElementById("admin-legal-mentions-title");
const adminLegalMentionsContentInput = document.getElementById("admin-legal-mentions-content");
const adminLegalCgvLabelInput = document.getElementById("admin-legal-cgv-label");
const adminLegalCgvTitleInput = document.getElementById("admin-legal-cgv-title");
const adminLegalCgvContentInput = document.getElementById("admin-legal-cgv-content");
const adminLegalRgpdLabelInput = document.getElementById("admin-legal-rgpd-label");
const adminLegalRgpdTitleInput = document.getElementById("admin-legal-rgpd-title");
const adminLegalRgpdContentInput = document.getElementById("admin-legal-rgpd-content");
const adminLegalCookiesLabelInput = document.getElementById("admin-legal-cookies-label");
const adminLegalCookiesTitleInput = document.getElementById("admin-legal-cookies-title");
const adminLegalCookiesContentInput = document.getElementById("admin-legal-cookies-content");
const adminPromoEmailInput = document.getElementById("admin-promo-email");
const adminGeneratePromoBtn = document.getElementById("admin-generate-promo-btn");
const adminPromoFeedbackEl = document.getElementById("admin-promo-feedback");
const adminGeneratedPromoCodeEl = document.getElementById("admin-generated-promo-code");
const adminPromoCodesListEl = document.getElementById("admin-promo-codes-list");
const adminProcessPasswordInput = document.getElementById("admin-process-password");
const adminProcessFeedbackEl = document.getElementById("admin-process-feedback");
const adminProcessEditor = document.getElementById("admin-process-editor");
const adminProcessList = document.getElementById("admin-process-list");
const adminProcessLinksList = document.getElementById("admin-process-links-list");
const adminAddProcessLinkBtn = document.getElementById("admin-add-process-link");
const adminAddProcessLinkBtns = Array.from(document.querySelectorAll(".admin-add-process-link-btn"));
const adminProcessLinksLists = Array.from(document.querySelectorAll(".admin-process-links-list"));
const adminAddCrmLeadBtn = document.getElementById("admin-add-crm-lead");
const adminCrmSearchInput = document.getElementById("admin-crm-search");
const adminCrmFilterStatusSelect = document.getElementById("admin-crm-filter-status");
const adminProcessCrmSummaryEl = document.getElementById("admin-process-crm-summary");
const adminProcessCrmListEl = document.getElementById("admin-process-crm-list");
const adminAddStockItemBtn = document.getElementById("admin-add-stock-item");
const adminProcessStockSummaryEl = document.getElementById("admin-process-stock-summary");
const adminProcessStockListEl = document.getElementById("admin-process-stock-list");
const adminAddSupplierOrderBtn = document.getElementById("admin-add-supplier-order");
const adminProcessSuppliersListEl = document.getElementById("admin-process-suppliers-list");
const adminAddSavItemBtn = document.getElementById("admin-add-sav-item");
const adminProcessSavSummaryEl = document.getElementById("admin-process-sav-summary");
const adminProcessSavListEl = document.getElementById("admin-process-sav-list");
const adminAddDeliveryItemBtn = document.getElementById("admin-add-delivery-item");
const adminProcessDeliverySummaryEl = document.getElementById("admin-process-delivery-summary");
const adminProcessDeliveryListEl = document.getElementById("admin-process-delivery-list");
const adminAddGamesFileBtn = document.getElementById("admin-add-games-file");
const adminGamesZipFileInput = document.getElementById("admin-games-zip-file-input");
const adminProcessGamesListEl = document.getElementById("admin-process-games-list");
const adminGamesAssignUserSelect = document.getElementById("admin-games-assign-user");
const adminGamesAssignFileSelect = document.getElementById("admin-games-assign-file");
const adminGamesAssignTitleInput = document.getElementById("admin-games-assign-title");
const adminGamesAssignMaxDownloadsInput = document.getElementById("admin-games-assign-max-downloads");
const adminGamesAssignExpiryInput = document.getElementById("admin-games-assign-expiry");
const adminGamesAssignBtn = document.getElementById("admin-games-assign-btn");
const adminProcessGamesAssignmentsListEl = document.getElementById("admin-process-games-assignments-list");
const adminOpenProcessInstallModalBtn = document.getElementById("admin-open-process-install-modal");
const adminProcessDocsPanel = document.getElementById("admin-process-docs-panel");
const adminProcessAchatsPanel = document.getElementById("admin-process-achats-panel");
const adminProcessSectionPanels = Array.from(document.querySelectorAll("[data-process-section-panel]"));
const adminProcessSubtabButtons = Array.from(document.querySelectorAll(".admin-process-subtabs .admin-tab[data-process-subtab]"));
const adminProcessSubtabsContainer = document.querySelector(".admin-process-subtabs");
const adminProcessQuicklinksEl = document.getElementById("admin-process-quicklinks");
const adminProcessLinkModalEl = document.getElementById("admin-process-link-modal");
const adminProcessLinkModalCloseBtn = document.getElementById("admin-process-link-modal-close");
const adminProcessLinkTitleInput = document.getElementById("admin-process-link-title-input");
const adminProcessLinkUrlInput = document.getElementById("admin-process-link-url-input");
const adminProcessLinkCancelBtn = document.getElementById("admin-process-link-cancel");
const adminProcessLinkSaveBtn = document.getElementById("admin-process-link-save");
const adminProcessFileModalEl = document.getElementById("admin-process-file-modal");
const adminProcessFileModalCloseBtn = document.getElementById("admin-process-file-modal-close");
const adminProcessFileTitleInput = document.getElementById("admin-process-file-title-input");
const adminProcessFileInputModal = document.getElementById("admin-process-file-input-modal");
const adminProcessFilePickModalBtn = document.getElementById("admin-process-file-pick-modal");
const adminProcessFileNameModalEl = document.getElementById("admin-process-file-name-modal");
const adminProcessFileCancelBtn = document.getElementById("admin-process-file-cancel");
const adminProcessFileSaveBtn = document.getElementById("admin-process-file-save");
const adminOpenRailwayUpdateModalBtn = document.getElementById("admin-open-railway-update-modal");
const adminRailwayUpdateModalEl = document.getElementById("admin-railway-update-modal");
const adminRailwayUpdateModalCloseBtn = document.getElementById("admin-railway-update-modal-close");
const adminRailwayUpdateCommandEl = document.getElementById("admin-railway-update-command");
const adminRailwayUpdateFeedbackEl = document.getElementById("admin-railway-update-feedback");
const adminRailwayUpdateCopyBtn = document.getElementById("admin-railway-update-copy");
const adminRailwayUpdateDownloadBtn = document.getElementById("admin-railway-update-download");
const adminRailwayUpdateRunTerminalBtn = document.getElementById("admin-railway-update-run-terminal");
const adminBackupZipBtn = document.getElementById("admin-backup-zip-btn");
const adminBackupFeedbackEl = document.getElementById("admin-backup-feedback");
const adminBackupLastStateEl = document.getElementById("admin-backup-last-state");
const adminCcServerEl = document.getElementById("admin-cc-server");
const adminCcTimeEl = document.getElementById("admin-cc-time");
const adminCcBackupEl = document.getElementById("admin-cc-backup");
const adminConfigImageFileInputs = [0, 1, 2].map((i) => document.getElementById(`admin-config-image-file-${i}`));
const adminConfigImageNameEls = [0, 1, 2].map((i) => document.getElementById(`admin-config-image-name-${i}`));
const adminConfigImagePreviewEls = [0, 1, 2].map((i) => document.getElementById(`admin-config-image-preview-${i}`));
const adminConfigImageRemoveBtns = [0, 1, 2].map((i) => document.getElementById(`admin-config-image-remove-${i}`));
const adminAboutVideoTitleInputs = [0, 1, 2, 3, 4, 5].map((i) => document.getElementById(`admin-about-video-title-${i}`));
const adminAboutVideoFileInputs = [0, 1, 2, 3, 4, 5].map((i) => document.getElementById(`admin-about-video-file-${i}`));
const adminAboutVideoNameEls = [0, 1, 2, 3, 4, 5].map((i) => document.getElementById(`admin-about-video-name-${i}`));
const adminAboutVideoPreviewEls = [0, 1, 2, 3, 4, 5].map((i) => document.getElementById(`admin-about-video-preview-${i}`));
const adminAboutVideoRemoveBtns = [0, 1, 2, 3, 4, 5].map((i) => document.getElementById(`admin-about-video-remove-${i}`));
const adminAboutGallerySpeedInput = document.getElementById("admin-about-gallery-speed");
const adminAboutGalleryDirectionSelect = document.getElementById("admin-about-gallery-direction");
const adminAboutWatermarkEnabledSelect = document.getElementById("admin-about-watermark-enabled");
const adminAddAboutGalleryPhotoBtn = document.getElementById("admin-add-about-gallery-photo");
const adminAboutGalleryList = document.getElementById("admin-about-gallery-list");
const adminReset = document.getElementById("admin-reset");
const adminLogout = document.getElementById("admin-logout");
const adminFeedback = document.getElementById("admin-feedback");
const adminUploadProgressWrapEl = document.getElementById("admin-upload-progress-wrap");
const adminUploadProgressLabelEl = document.getElementById("admin-upload-progress-label");
const adminUploadProgressValueEl = document.getElementById("admin-upload-progress-value");
const adminUploadProgressBarEl = document.getElementById("admin-upload-progress-bar");
const adminUserLogListEl = document.getElementById("admin-user-log-list");
const adminVortexBotHistoryEl = document.getElementById("admin-vortexbot-history");
const adminUsersListEls = Array.from(
  document.querySelectorAll("#admin-users-list, #admin-users-list-panel")
);
const adminTabButtons = Array.from(document.querySelectorAll(".admin-tabs .admin-tab[data-tab]"));
const adminTabPanels = Array.from(document.querySelectorAll(".admin-content-panel[data-tab-content]"));
const adminTabsContainer = document.querySelector(".admin-tabs");
const userProfilePanel = document.getElementById("user-profile-panel");
const profileEmailInput = document.getElementById("profile-email");
const profileDisplayNameInput = document.getElementById("profile-display-name");
const profileConnectionTimeEl = document.getElementById("profile-connection-time");
const profileSaveNameBtn = document.getElementById("profile-save-name");
const profileAvatarImgEl = document.getElementById("profile-avatar-img");
const profileAvatarFileInput = document.getElementById("profile-avatar-file");
const profileAvatarPickBtn = document.getElementById("profile-avatar-pick");
const profileAvatarFeedbackEl = document.getElementById("profile-avatar-feedback");
const profileCurrentPasswordInput = document.getElementById("profile-current-password");
const profileNewPasswordInput = document.getElementById("profile-new-password");
const profileConfirmPasswordInput = document.getElementById("profile-confirm-password");
const profileChangePasswordBtn = document.getElementById("profile-change-password-btn");
const profilePasswordFeedbackEl = document.getElementById("profile-password-feedback");
const profileReviewRatingInput = document.getElementById("profile-review-rating");
const profileReviewTextInput = document.getElementById("profile-review-text");
const profileSubmitReviewBtn = document.getElementById("profile-submit-review");
const profileAdminPhotoToolsEl = document.getElementById("profile-admin-photo-tools");
const profileAdminPhotoPreviewEl = document.getElementById("profile-admin-photo-preview");
const profileAdminPhotoFileInput = document.getElementById("profile-admin-photo-file");
const profileAdminPhotoPickBtn = document.getElementById("profile-admin-photo-pick");
const profileAdminPhotoNameEl = document.getElementById("profile-admin-photo-name");
const profileAdminPhotoUploadBtn = document.getElementById("profile-admin-photo-upload-btn");
const profileAdminPhotoFeedbackEl = document.getElementById("profile-admin-photo-feedback");
const profileReviewsListEl = document.getElementById("profile-reviews-list");
const profileConfigsListEl = document.getElementById("profile-configs-list");
const profileDownloadsListEl = document.getElementById("profile-downloads-list");
const profileFavoritesListEl = document.getElementById("profile-favorites-list");
const profileActivityListEl = document.getElementById("profile-activity-list");
const profileFeedbackEl = document.getElementById("profile-feedback");
const profileCloseBtn = document.getElementById("profile-close");
const adminAutosaveStatusEl = document.getElementById("admin-autosave-status");
const adminHistorySelectEl = document.getElementById("admin-history-select");
const adminRestoreHistoryBtn = document.getElementById("admin-restore-history");
const adminDeleteHistoryEntryBtn = document.getElementById("admin-delete-history-entry");
const adminClearHistoryBtn = document.getElementById("admin-clear-history");
const adminUsersSearchInput = document.getElementById("admin-users-search");
const adminGlobalSearchInput = document.getElementById("admin-global-search");
const adminSearchResultsEl = document.getElementById("admin-search-results");
const adminDensityToggleEl = document.getElementById("admin-density-toggle");
const adminLivePreviewTitleEl = document.getElementById("admin-live-preview-title");
const adminLivePreviewSubtitleEl = document.getElementById("admin-live-preview-subtitle");
const adminLivePreviewImageEl = document.getElementById("admin-live-preview-image");
const adminKpiUsersEl = document.getElementById("admin-kpi-users");
const adminKpiReviewsPendingEl = document.getElementById("admin-kpi-reviews-pending");
const adminKpiPromosActiveEl = document.getElementById("admin-kpi-promos-active");
const adminKpiLastSaveEl = document.getElementById("admin-kpi-last-save");
const adminToastStackEl = document.getElementById("admin-toast-stack");

const adminShowcaseTitleInputs = [0, 1, 2].map((i) => document.getElementById(`admin-showcase-title-${i}`));
const adminShowcaseSloganInputs = [0, 1, 2].map((i) => document.getElementById(`admin-showcase-slogan-${i}`));
const adminShowcaseFileInputs = [0, 1, 2].map((i) => document.getElementById(`admin-showcase-file-${i}`));
const adminShowcaseFileNames = [0, 1, 2].map((i) => document.getElementById(`admin-showcase-file-name-${i}`));
const adminShowcasePreviewImages = [0, 1, 2].map((i) => document.getElementById(`admin-showcase-preview-${i}`));
const adminStaticFileButtons = Array.from(document.querySelectorAll(".admin-file-button[data-file-target]"));

const basePrice = 499;
const AUTH_SESSION_KEY = "vortexbox-auth-user";
const USER_LOG_KEY = "vortexbox-user-log";
const SITE_USERS_KEY = "vortexbox-site-users";
const USER_CONFIGS_KEY = "vortexbox-user-configs";
const PROMO_CODES_KEY = "vortexbox-promo-codes";
const PROMO_SESSION_KEY = "vortexbox-active-promo-code";
const FAQ_SEED_VERSION = 2;
const PENDING_ACTIVATION_KEY = "vortexbox-pending-activation";
const AUTH_REMEMBER_KEY = "vortexbox-auth-remember";
const AUTH_RESET_CODES_KEY = "vortexbox-reset-codes";
const ADMIN_EMAIL = "vortexcore@outlook.fr";
const ADMIN_PASSWORD = "Eolia460&Qp46uqv";
const STORAGE_KEY = "vortexbox-content";
const SESSION_KEY = "vortexbox-admin";
const BG_MUSIC_KEY = "vortexbox-bg-music-enabled";
const COOKIE_CONSENT_KEY = "vortexbox-cookie-consent";
const ADMIN_TABS_ORDER_KEY = "vortexbox-admin-tabs-order";
const ADMIN_LIVE_MODE_KEY = "vortexbox-admin-live-mode";
const ADMIN_DENSITY_KEY = "vortexbox-admin-density";
const ADMIN_PROFILE_PHOTO_KEY = "vortexbox-admin-profile-photo";
const ADMIN_HISTORY_KEY = "vortexbox-admin-history";
const USER_ACTIVITY_KEY = "vortexbox-user-activity";
const USER_FAVORITES_KEY = "vortexbox-user-favorites";
const ADMIN_KPI_DONE_RECOMMENDATIONS_KEY = "vortexbox-admin-kpi-done-recommendations";
const ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY = "vortexbox-admin-kpi-actioned-recommendations";
const ADMIN_LAST_BACKUP_KEY = "vortexbox-admin-last-backup";
const VORTEXBOT_HISTORY_KEY = "vortexbox-vortexbot-history";
const VORTEXBOT_MEMORY_KEY = "vortexbox-vortexbot-memory";
const AI_ADVISOR_DEEP_LINK_KEY = "vortexbox-ai-advisor-start";
const ADMIN_HISTORY_LIMIT = 20;
const ADMIN_PROCESS_SUBTABS_ORDER_KEY = "vortexbox-admin-process-subtabs-order";
const ADMIN_PROCESS_QUICKLINKS_ORDER_KEY = "vortexbox-admin-process-quicklinks-order";
const ADMIN_PROCESS_UNLOCKED_KEY = "vortexbox-admin-process-unlocked";
const MAX_ABOUT_GALLERY_PHOTOS = 40;
const EMPTY_IMAGE_DATA_URI = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const MEDIA_DB_NAME = "vortexbox-media-db";
const MEDIA_DB_VERSION = 2;
const MEDIA_STORE_ABOUT_VIDEOS = "about-videos";
const MEDIA_STORE_TECH_FILES = "technical-files";
const MAX_TECHNICAL_SHEETS = 15;
const MAX_TECH_FILE_BYTES = 80 * 1024 * 1024;
const MAX_ABOUT_VIDEO_BYTES = 2 * 1024 * 1024 * 1024;
const MAX_PROCESS_FILE_BYTES = 20 * 1024 * 1024;
const PROCESS_ACCESS_PASSWORD = "0460";
const PROCESS_LINK_SECTIONS = [
  { key: "achats", label: "Fournisseurs" },
];
const CRM_STATUSES = ["Nouveau", "Qualifié", "Devis", "Négociation", "Gagné", "Perdu"];
const CRM_PRIORITIES = ["Basse", "Normale", "Haute", "Urgente"];
const PREMIUM_GALLERY_IMAGES = [
  "vortex-premium-photo-1.svg",
  "vortex-premium-photo-2.svg",
  "vortex-premium-photo-3.svg",
];

const DEFAULT_CONTENT = {
  adminProfileReviewPhoto: "",
  heroTitle: "VortexBox – La puissance au cœur du jeu.",
  machinesTitle: "Nos meilleurs build vendus",
  navTheme: "aurora",
  menuBadges: {
    machines: "",
    configurateur: "",
    support: "promo",
    fiches: "",
    guides: "nouveau",
    jeux: "",
    about: "",
    faq: "",
  },
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
  machines: [
    {
      name: "VortexBox Nova RTX",
      description: "Ultra fluide en 1440p, idéale streaming + e-sport.",
      specs: ["CPU: AMD Ryzen 7 7800X3D", "GPU: NVIDIA RTX 5070 Ti", "RAM: 32 Go DDR5", "SSD: 1 To NVMe"],
      price: "2 199 €",
    },
    {
      name: "VortexBox Titan Pro",
      description: "Puissance maximale pour 4K, IA locale et création vidéo.",
      specs: ["CPU: Intel Core Ultra 9", "GPU: NVIDIA RTX 5090", "RAM: 64 Go DDR5", "SSD: 2 To NVMe"],
      price: "3 799 €",
    },
    {
      name: "VortexBox Pulse",
      description: "Le meilleur rapport qualité/prix pour jouer en Full HD.",
      specs: ["CPU: AMD Ryzen 5 7600", "GPU: AMD Radeon RX 7700 XT", "RAM: 16 Go DDR5", "SSD: 1 To NVMe"],
      price: "1 499 €",
    },
  ],
  showcase: [
    { title: "Frame Rate Max", slogan: "Chaque FPS compte.", image: PREMIUM_GALLERY_IMAGES[0] },
    { title: "Design Premium", slogan: "Sobriété, airflow, précision.", image: PREMIUM_GALLERY_IMAGES[1] },
    { title: "Upgrade Ready", slogan: "Pensé pour durer.", image: PREMIUM_GALLERY_IMAGES[2] },
  ],
  technicalSheets: [
    {
      title: "Fiche Technique Nova RTX",
      image: PREMIUM_GALLERY_IMAGES[0],
      fileName: "",
      fileData: "",
      fileMime: "application/pdf",
      fileKey: "",
    },
    {
      title: "Fiche Technique Titan Pro",
      image: PREMIUM_GALLERY_IMAGES[1],
      fileName: "",
      fileData: "",
      fileMime: "application/pdf",
      fileKey: "",
    },
  ],
  aboutVideos: [
    { title: "Atelier VortexBox", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
    { title: "Montage Premium", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
    { title: "Stress Test Gaming", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
    { title: "Benchmarks VortexBox", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
    { title: "Validation Qualité", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
    { title: "Packaging Premium", fileName: "", videoData: "", videoWebm: "", videoMime: "video/mp4", videoKey: "" },
  ],
  aboutGallery: {
    speed: 28,
    direction: "left",
    watermarkEnabled: true,
    photos: [
      { title: "Gaming Setup Premium", image: PREMIUM_GALLERY_IMAGES[0] },
      { title: "Performance Ready", image: PREMIUM_GALLERY_IMAGES[1] },
      { title: "Expérience Immersive", image: PREMIUM_GALLERY_IMAGES[2] },
    ],
  },
  faqItems: [
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
  ],
  gamesCatalog: [
    { title: "Cyber Assault 2026", image: "uploads/technical-images/1772676120540-hriwmx-technical-image-1.webp" },
    { title: "Racing Drift Pro", image: "uploads/technical-images/1772676640794-irjlxm-technical-image-2.webp" },
    { title: "Arena Legends", image: "uploads/technical-images/1772677190425-usy9db-technical-image-3.webp" },
  ],
  supportSav: {
    badge: "Support & SAV Premium",
    title: "Support & SAV VortexBox",
    subtitle:
      "Un accompagnement rapide et professionnel pour vos questions, diagnostics et retours. Notre équipe vous suit de la première prise de contact jusqu'à la résolution.",
    telegramUrl: "https://t.me/VortexCore460",
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
    faq: [
      { question: "Quel est le délai de réponse du support ?", answer: "En général sous 24h ouvrées." },
      { question: "La garantie couvre quoi ?", answer: "La garantie couvre le matériel selon les conditions affichées sur le site." },
      { question: "Comment lancer un SAV ?", answer: "Contactez-nous via Telegram ou le formulaire de la page Support & SAV." },
    ],
  },
  processus: {
    files: [],
    purchases: [],
    crmLeads: [],
    gamesFiles: [],
    gamesAssignments: [],
    suppliersOrders: [],
    stockItems: [],
    savItems: [],
    deliveryItems: [],
  },
  reviews: [
    { author: "Lucas M.", rating: 5, text: "Build ultra performant, livraison rapide et finitions impeccables.", approved: true },
    { author: "Sarah K.", rating: 5, text: "Service pro, excellent conseil avant achat. Je recommande VortexBox.", approved: true },
    { author: "Nicolas R.", rating: 4, text: "Très bonne expérience, machine silencieuse et stable en jeu.", approved: true },
    { author: "Amine B.", rating: 5, text: "FPS excellents sur tous mes jeux, montage propre et cable management parfait.", approved: true },
    { author: "Julie T.", rating: 5, text: "Support client réactif, configuration claire, exactement ce que je voulais.", approved: true },
    { author: "Mehdi L.", rating: 4, text: "Très bonne qualité globale, machine fluide même en streaming + gaming.", approved: true },
    { author: "Camille P.", rating: 5, text: "Design sobre et premium, températures très bien maîtrisées en charge.", approved: true },
    { author: "Yanis D.", rating: 5, text: "Rapport performance/prix excellent, livraison sérieuse et tests pro avant envoi.", approved: true },
    { author: "Sophie G.", rating: 4, text: "Première commande chez VortexBox et très satisfaite du résultat final.", approved: true },
  ],
  configurator: {
    visualImages: [...PREMIUM_GALLERY_IMAGES],
    categoryFillImage: "",
    categoryFillImageSecondary: "",
    summaryTelegramImage: "",
    components: [
      {
        id: "cpu",
        label: "Processeur",
        options: [
          { name: "AMD Ryzen 5 7600", price: 299 },
          { name: "AMD Ryzen 7 7800X3D", price: 449 },
          { name: "Intel Core Ultra 9", price: 599 },
        ],
      },
      {
        id: "gpu",
        label: "Carte graphique",
        options: [
          { name: "RX 7700 XT", price: 499 },
          { name: "RTX 5070 Ti", price: 799 },
          { name: "RTX 5090", price: 1699 },
        ],
      },
      {
        id: "ram",
        label: "Mémoire RAM",
        options: [
          { name: "16 Go DDR5", price: 99 },
          { name: "32 Go DDR5", price: 179 },
          { name: "64 Go DDR5", price: 339 },
        ],
      },
      {
        id: "storage",
        label: "Stockage",
        options: [
          { name: "1 To NVMe", price: 89 },
          { name: "2 To NVMe", price: 169 },
          { name: "4 To NVMe", price: 299 },
        ],
      },
      {
        id: "cooling",
        label: "Refroidissement",
        options: [
          { name: "Aircooling Premium", price: 69 },
          { name: "Watercooling 240mm", price: 149 },
          { name: "Watercooling 360mm RGB", price: 229 },
        ],
      },
      {
        id: "case",
        label: "Boîtier",
        options: [
          { name: "Vortex Compact", price: 99 },
          { name: "Vortex Airflow", price: 159 },
          { name: "Vortex Crystal RGB", price: 249 },
        ],
      },
    ],
    services: [
      {
        id: "warranty",
        label: "Extension garantie 2 ans",
        price: 149,
        checked: false,
        description: "Protection étendue: prise en charge matériel prolongée.\nSupport prioritaire VortexBox.",
      },
      {
        id: "assembly",
        label: "Montage pro et tests stabilité",
        price: 99,
        checked: true,
        description: "Montage professionnel en atelier.\nStress tests complets avant livraison.",
      },
    ],
  },
};

const LEGACY_HERO_TITLES = [
  "Les meilleures machines prêtes à dominer vos jeux.",
  "VortexBox - La puissance au coeur du jeu.",
];

let adminShowcaseImages = ["", "", ""];
let adminMachinesDraft = [];
let adminTechnicalSheetsDraft = [];
let technicalSheetDownloadUrls = {};
let adminComponentsDraft = [];
let adminServicesDraft = [];
let adminFaqItemsDraft = [];
let adminGamesDraft = [];
let adminSupportSavDraft = cloneDefaultContent().supportSav;
let adminReviewsDraft = [];
let adminProcessFilesDraft = [];
let adminProcessSectionDrafts = {
  achats: [],
};
let adminCrmLeadsDraft = [];
let adminProcessGamesFilesDraft = [];
let adminProcessGamesAssignmentsDraft = [];
let adminStockItemsDraft = [];
let adminSupplierOrdersDraft = [];
let adminSavItemsDraft = [];
let adminDeliveryItemsDraft = [];
let activeAdminProcessSubtab = "crm";
let activeAdminProcessLinkEditIndex = -1;
let activeAdminProcessLinkSection = "achats";
let activeAdminProcessFileEditIndex = -1;
let adminProcessUnlocked = false;
let adminConfiguratorImagesDraft = ["", "", ""];
let adminAboutVideosDraft = [];
let adminAboutGalleryDraft = cloneDefaultContent().aboutGallery;
let adminAboutVideoPreviewUrls = ["", "", "", "", "", ""];
let authMode = "user";
let pendingActivationEmail = "";
let activeAdminComponentIndex = 0;
let selectedConfiguratorState = { components: {}, services: {} };
let diskApiAvailability = null;
let vortexBotAdvisor = { active: false, step: "", answers: {} };
let vortexBotLastRecommendation = null;
let proofStatsObserver = null;
let profileAdminPhotoDraft = "";
let proofStatsAnimated = false;
let activePromoCode = "";
let activeMachineModalIndex = -1;
let activeMachineModalImageIndex = 0;
let userStatePersistTimer = null;
let adminAutosaveTimer = null;
let adminAutosaveLastAt = "";
let adminToastTimer = null;
let adminProcessDragSubtabEl = null;
let adminProcessDragQuicklinkEl = null;
let activeAdminCrmLeadIndex = -1;
let adminCrmDragLeadIndex = -1;
let adminCrmSearchTerm = "";
let adminCrmFilterStatus = "all";
let adminCrmOpenTabs = [];
let pendingAdminDeepLinkTab = "";
let pendingAdminDeepLinkProcessSubtab = "";
let pendingAiAdvisorDeepLink = false;
let pendingConfiguratorDeepLink = false;
let adminUploadProgressHideTimer = null;
let adminControlClockTimer = null;
let activeConnectionEmail = "";
let activeConnectionBaseSeconds = 0;
let activeConnectionSessionStartAt = 0;
let activeConnectionTick = null;
let activeConnectionPersistStep = 0;
let adminToggleAwaitingOpen = false;

function revokeAdminAboutPreview(index) {
  const url = adminAboutVideoPreviewUrls[index];
  if (url) URL.revokeObjectURL(url);
  adminAboutVideoPreviewUrls[index] = "";
}

function revokeAllAdminAboutPreviews() {
  [0, 1, 2, 3, 4, 5].forEach((index) => revokeAdminAboutPreview(index));
}

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

async function putAboutVideoRecord(id, blob, fileName, mime) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_ABOUT_VIDEOS, "readwrite");
    const store = tx.objectStore(MEDIA_STORE_ABOUT_VIDEOS);
    store.put({ id, blob, fileName, mime });
    tx.oncomplete = () => {
      db.close();
      resolve(true);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || new Error("Impossible d'enregistrer la vidéo."));
    };
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
      reject(request.error || new Error("Impossible de lire la vidéo."));
    };
  });
}

async function deleteAboutVideoRecord(id) {
  if (!id) return;
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_ABOUT_VIDEOS, "readwrite");
    tx.objectStore(MEDIA_STORE_ABOUT_VIDEOS).delete(id);
    tx.oncomplete = () => {
      db.close();
      resolve(true);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || new Error("Impossible de supprimer la vidéo."));
    };
  });
}

async function putTechnicalFileRecord(id, blob, fileName, mime) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_TECH_FILES, "readwrite");
    const store = tx.objectStore(MEDIA_STORE_TECH_FILES);
    store.put({ id, blob, fileName, mime });
    tx.oncomplete = () => {
      db.close();
      resolve(true);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || new Error("Impossible d'enregistrer le fichier technique."));
    };
  });
}

async function getTechnicalFileRecord(id) {
  if (!id) return null;
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_TECH_FILES, "readonly");
    const store = tx.objectStore(MEDIA_STORE_TECH_FILES);
    const request = store.get(id);
    request.onsuccess = () => {
      db.close();
      resolve(request.result || null);
    };
    request.onerror = () => {
      db.close();
      reject(request.error || new Error("Impossible de lire le fichier technique."));
    };
  });
}

async function deleteTechnicalFileRecord(id) {
  if (!id) return;
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE_TECH_FILES, "readwrite");
    tx.objectStore(MEDIA_STORE_TECH_FILES).delete(id);
    tx.oncomplete = () => {
      db.close();
      resolve(true);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || new Error("Impossible de supprimer le fichier technique."));
    };
  });
}

function revokeTechnicalSheetDownloadUrls() {
  Object.values(technicalSheetDownloadUrls).forEach((url) => URL.revokeObjectURL(url));
  technicalSheetDownloadUrls = {};
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
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!navEl.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1220) closeMenu();
  });

  const updateActiveNavLink = () => {
    const normalizePath = (path) => String(path || "").replace(/\/+$/, "") || "/";
    const currentPath = normalizePath(window.location.pathname);
    const currentHash = String(window.location.hash || "");
    let activeFound = false;
    navAnchors.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
      try {
        const url = new URL(link.getAttribute("href") || "", window.location.href);
        const samePath = normalizePath(url.pathname) === currentPath;
        const isActive = url.hash ? samePath && currentHash === url.hash : samePath;
        if (!isActive) return;
        activeFound = true;
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      } catch (error) {}
    });
    if (!activeFound) {
      const fallback = navAnchors.find((link) => {
        const href = String(link.getAttribute("href") || "");
        return href === "#machines" || href === "index.html#machines";
      });
      if (fallback) {
        fallback.classList.add("is-active");
        fallback.setAttribute("aria-current", "page");
      }
    }
    renderPremiumBreadcrumb();
  };

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

  updateActiveNavLink();
  window.addEventListener("hashchange", updateActiveNavLink);
  window.addEventListener("popstate", updateActiveNavLink);
}

function initializeNavSmartSearch() {
  if (!navSmartSearchInputEl || !navSmartResultsEl) return;
  const navSmartWrapEl = navSmartSearchInputEl.closest(".nav-smart-wrap");
  let keywordsPanelEl = navSmartKeywordsEl;
  let keywordsListEl = navSmartKeywordsListEl;
  if (navSmartWrapEl && (!keywordsPanelEl || !keywordsListEl)) {
    keywordsPanelEl = document.createElement("div");
    keywordsPanelEl.id = "nav-smart-keywords";
    keywordsPanelEl.className = "nav-smart-keywords";
    keywordsPanelEl.setAttribute("aria-label", "Mots-cles rapides de recherche");
    keywordsPanelEl.innerHTML = `
      <p class="nav-smart-keywords-title">Recherche rapide</p>
      <div id="nav-smart-keywords-list" class="nav-smart-keywords-list"></div>
    `;
    navSmartWrapEl.appendChild(keywordsPanelEl);
    keywordsListEl = keywordsPanelEl.querySelector("#nav-smart-keywords-list");
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
  const entriesMap = new Map();
  const addEntry = (label, href, keywords = [], category = "") => {
    const cleanLabel = String(label || "").trim().replace(/\s+/g, " ");
    const cleanHref = String(href || "").trim();
    if (!cleanLabel || !cleanHref || !isValidSearchTarget(cleanHref)) return;
    const keywordText = Array.isArray(keywords)
      ? keywords.map((item) => String(item || "").trim()).filter(Boolean).join(" ")
      : String(keywords || "");
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

  const allLinks = Array.from(document.querySelectorAll(".nav-links a[href]"));
  allLinks.forEach((link) => {
    const label = String(link.textContent || "").trim().replace(/\s+/g, " ");
    const href = String(link.getAttribute("href") || "").trim();
    if (!label || !href) return;
    if (normalize(label) === "jeux" || /jeux\.html$/i.test(href)) return;
    addEntry(label, href, [label, "menu", "navigation"], "Menu");
  });

  addEntry("Configurateur", "index.html?openConfigurator=1#configurateur", ["build", "composants", "prix", "fps", "services"], "Configurateur");
  addEntry("Top Build", "index.html#machines", ["meilleurs build", "best seller", "gaming"], "Top Build");
  addEntry("Fiches Techniques", "index.html#fiches-techniques", ["fiches", "jaquettes", "documentation"], "Fiches");
  addEntry("Guides FPS", "index.html#guides-fps", ["fps", "performances", "jeux"], "Guides");
  addEntry("Support & SAV", "support-sav.html", ["support", "sav", "assistance", "ticket"], "Support");
  addEntry("FAQ", "faq.html", ["questions", "reponses", "aide"], "FAQ");
  addEntry("A propos", "about.html", ["a propos", "vortexbox", "histoire"], "A propos");

  const source = siteContent && typeof siteContent === "object" ? siteContent : {};
  if (Array.isArray(source.machines)) {
    source.machines.forEach((machine) => {
      addEntry(
        machine?.name || machine?.frontName || "Build VortexBox",
        "index.html#machines",
        [machine?.description, machine?.frontDescription, machine?.badge, machine?.price, ...(Array.isArray(machine?.specs) ? machine.specs : [])],
        "Top Build"
      );
    });
  }
  if (Array.isArray(source.technicalSheets)) {
    source.technicalSheets.forEach((sheet) => {
      addEntry(sheet?.title || "Fiche technique", "index.html#fiches-techniques", [sheet?.title], "Fiches");
    });
  }
  if (Array.isArray(source.faqItems)) {
    source.faqItems.forEach((faq) => {
      addEntry(faq?.question || "FAQ", "faq.html", [faq?.answer], "FAQ");
    });
  }
  if (source.supportSav && typeof source.supportSav === "object") {
    addEntry(source.supportSav.title || "Support & SAV", "support-sav.html", [source.supportSav.subtitle, source.supportSav.badge], "Support");
    (Array.isArray(source.supportSav.cards) ? source.supportSav.cards : []).forEach((card) => {
      addEntry(card?.title || "Support", "support-sav.html", [card?.text, card?.ctaLabel], "Support");
    });
    (Array.isArray(source.supportSav.steps) ? source.supportSav.steps : []).forEach((step) => {
      addEntry(step?.title || "Etape SAV", "support-sav.html", [step?.text], "Support");
    });
  }
  if (source.configurator && typeof source.configurator === "object") {
    (Array.isArray(source.configurator.components) ? source.configurator.components : []).forEach((component) => {
      addEntry(
        component?.label || "Composant",
        "index.html?openConfigurator=1#configurateur",
        (Array.isArray(component?.options) ? component.options : []).flatMap((option) => [option?.name, option?.description, option?.price]),
        "Configurateur"
      );
    });
    (Array.isArray(source.configurator.services) ? source.configurator.services : []).forEach((service) => {
      addEntry(
        service?.label || "Service",
        "index.html?openConfigurator=1#configurateur",
        [service?.description, service?.price],
        "Configurateur"
      );
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

  const searchableEntries = entries.filter(
    (item) =>
      normalize(item.label) !== "jeux" &&
      String(item.category || "").toLowerCase() !== "jeux" &&
      !/jeux\.html$/i.test(String(item.href || ""))
  );

  searchableEntries.forEach((item) => {
    addKeyword(item.label, item.label, item.category || "", item.href || "");
  });

  if (source.configurator && typeof source.configurator === "object") {
    const components = Array.isArray(source.configurator.components) ? source.configurator.components : [];
    components.forEach((component) => {
      const componentLabel = String(component?.label || "").trim();
      if (componentLabel) {
        addKeyword(componentLabel, componentLabel, "Configurateur", configuratorHref);
      }
      const options = Array.isArray(component?.options) ? component.options : [];
      options.slice(0, 8).forEach((option) => {
        const optionName = String(option?.name || "").trim();
        if (optionName) addKeyword(optionName, optionName, "Configurateur", configuratorHref);
      });
    });
  }

  const premiumKeywords = Array.from(keywordMap.values()).slice(0, 120);
  const renderKeywords = () => {
    if (!keywordsListEl || !keywordsPanelEl) return;
    if (!premiumKeywords.length) {
      keywordsPanelEl.classList.add("hidden");
      return;
    }
    keywordsPanelEl.classList.remove("hidden");
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
    keywordsListEl.innerHTML = sortedCategories
      .map((category) => {
        const safeCategory = sanitizeId(`kw-${category}`, "kw-autres");
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
  };
  renderKeywords();

  let activeIndex = -1;
  let visible = [];

  const close = () => {
    navSmartResultsEl.innerHTML = "";
    navSmartResultsEl.classList.add("hidden");
    if (navSmartWrapEl) navSmartWrapEl.classList.remove("has-results");
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
      button.className = `nav-smart-item${index === activeIndex ? " active" : ""}`;
      button.type = "button";
      button.dataset.index = String(index);
      button.dataset.href = item.href;
      button.textContent = item.category ? `${item.label} · ${item.category}` : item.label;
      navSmartResultsEl.appendChild(button);
    });
    navSmartResultsEl.classList.remove("hidden");
    if (navSmartWrapEl) navSmartWrapEl.classList.add("has-results");
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
    const items = searchableEntries
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

  if (keywordsListEl) {
    keywordsListEl.addEventListener("click", (event) => {
      const chip = event.target.closest("button[data-term]");
      if (!chip) return;
      const href = String(chip.dataset.href || "").trim();
      if (href) {
        openHref(href);
        return;
      }
      navSmartSearchInputEl.value = String(chip.dataset.term || "").trim();
      navSmartSearchInputEl.focus();
      navSmartSearchInputEl.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }

  document.addEventListener("click", (event) => {
    if (!navSmartResultsEl.contains(event.target) && event.target !== navSmartSearchInputEl) close();
  });
}

function initializeRevealAnimations() {
  const sections = Array.from(document.querySelectorAll("main .section"));
  if (!sections.length) return;
  sections.forEach((section) => section.classList.add("reveal-block"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function appendVortexBotMessage(text, role = "bot") {
  if (!vortexBotMessagesEl) return;
  const item = document.createElement("p");
  item.className = `vortexbot-msg ${role}`;
  item.textContent = text;
  vortexBotMessagesEl.appendChild(item);
  vortexBotMessagesEl.scrollTop = vortexBotMessagesEl.scrollHeight;
}

function appendVortexBotChoices(prompt, step, choices) {
  if (!vortexBotMessagesEl) return;
  appendVortexBotMessage(prompt, "bot");
  const wrap = document.createElement("div");
  wrap.className = "vortexbot-choices";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "vortexbot-choice-btn";
    button.dataset.botStep = step;
    button.dataset.botValue = choice.value;
    button.textContent = choice.label;
    wrap.appendChild(button);
  });
  vortexBotMessagesEl.appendChild(wrap);
  vortexBotMessagesEl.scrollTop = vortexBotMessagesEl.scrollHeight;
}

function getVortexBotActorEmail() {
  const email = String(getCurrentSessionEmail() || "").trim().toLowerCase();
  return email || "guest";
}

function loadVortexBotHistory() {
  try {
    const raw = localStorage.getItem(VORTEXBOT_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveVortexBotHistory(items) {
  try {
    localStorage.setItem(VORTEXBOT_HISTORY_KEY, JSON.stringify(Array.isArray(items) ? items.slice(0, 250) : []));
  } catch (error) {}
}

function recordVortexBotHistory(action, detail = "", extra = {}) {
  const history = loadVortexBotHistory();
  history.unshift({
    at: new Date().toISOString(),
    email: getVortexBotActorEmail(),
    action: String(action || "").trim() || "Action",
    detail: String(detail || "").trim(),
    ...extra,
  });
  saveVortexBotHistory(history);
  if (adminPanel && !adminPanel.classList.contains("hidden")) {
    renderAdminVortexBotHistory();
  }
}

function loadVortexBotMemoryMap() {
  try {
    const raw = localStorage.getItem(VORTEXBOT_MEMORY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveVortexBotMemoryMap(memoryMap) {
  try {
    localStorage.setItem(VORTEXBOT_MEMORY_KEY, JSON.stringify(memoryMap || {}));
  } catch (error) {}
}

function getVortexBotMemory(email = "") {
  const key = String(email || getVortexBotActorEmail()).trim().toLowerCase();
  if (!key) return {};
  const map = loadVortexBotMemoryMap();
  return map[key] && typeof map[key] === "object" ? map[key] : {};
}

function setVortexBotMemory(partial = {}, email = "") {
  const key = String(email || getVortexBotActorEmail()).trim().toLowerCase();
  if (!key) return;
  const map = loadVortexBotMemoryMap();
  const prev = map[key] && typeof map[key] === "object" ? map[key] : {};
  map[key] = {
    ...prev,
    ...partial,
    updatedAt: new Date().toISOString(),
  };
  saveVortexBotMemoryMap(map);
}

function getAdvisorAnswerLabel(step, value) {
  if (step === "budget") return value === "entry" ? "1200-1600 €" : value === "mid" ? "1700-2500 €" : "2600 € et +";
  if (step === "game") return value === "esport" ? "E-sport" : value === "aaa" ? "AAA récents" : "Mix des deux";
  if (step === "resolution") return String(value || "").toUpperCase();
  return String(value || "");
}

function estimateLeadScoreFromAdvisor(answers = {}) {
  let score = 35;
  const budget = String(answers.budget || "");
  const game = String(answers.game || "");
  const resolution = String(answers.resolution || "");
  if (budget === "mid") score += 18;
  if (budget === "pro") score += 28;
  if (game === "aaa") score += 12;
  if (game === "mix") score += 8;
  if (resolution === "1440") score += 10;
  if (resolution === "4k") score += 16;
  return Math.max(0, Math.min(100, score));
}

function estimateDealValueFromAdvisor(answers = {}) {
  if (answers.budget === "entry") return 1499;
  if (answers.budget === "pro") return 2999;
  return 2199;
}

function ensureCrmLeadFromVortexBot(answers = {}, recommendation = null) {
  const email = getVortexBotActorEmail();
  if (!email || email === "guest") return;
  if (!siteContent?.processus) siteContent.processus = {};
  if (!Array.isArray(siteContent.processus.crmLeads)) siteContent.processus.crmLeads = [];

  const leads = siteContent.processus.crmLeads;
  const nowIso = new Date().toISOString();
  const score = estimateLeadScoreFromAdvisor(answers);
  const budget = estimateDealValueFromAdvisor(answers);
  const model = recommendation?.title ? String(recommendation.title) : "";
  const scoreTag = `Lead score: ${score}/100`;

  let lead = leads.find((item) => String(item?.email || "").trim().toLowerCase() === email);
  if (!lead) {
    lead = createEmptyCrmLead(leads.length);
    lead.name = getUserDisplayName(email);
    lead.email = email;
    lead.source = "VortexBot";
    lead.status = score >= 70 ? "Qualifié" : "Nouveau";
    lead.priority = score >= 80 ? "Haute" : score >= 65 ? "Normale" : "Basse";
    lead.budget = budget;
    lead.dealValue = budget;
    lead.configRef = model;
    lead.note = `${scoreTag}\nRecommandation: ${model || "N/A"}`.trim();
    lead.activities = [{ at: nowIso, text: "Lead créé depuis VortexBot" }];
    lead.createdAt = nowIso;
    lead.updatedAt = nowIso;
    leads.push(lead);
  } else {
    lead.source = lead.source || "VortexBot";
    lead.budget = Math.max(Number(lead.budget) || 0, budget);
    lead.dealValue = Math.max(Number(lead.dealValue) || 0, budget);
    if (model) lead.configRef = model;
    lead.priority = score >= 80 ? "Haute" : score >= 65 ? "Normale" : "Basse";
    if (!Array.isArray(lead.activities)) lead.activities = [];
    lead.activities.push({ at: nowIso, text: `Interaction VortexBot (${scoreTag})` });
    lead.note = `${scoreTag}\n${String(lead.note || "").trim()}`.trim();
    lead.updatedAt = nowIso;
  }

  recordVortexBotHistory("Lead CRM", `Score ${score}/100`, { score, email });
  persistSiteContentAuto();
}

function getVortexBotServiceRecommendations() {
  const memory = getVortexBotMemory();
  const budget = String(memory.budget || "");
  const game = String(memory.game || "");
  const resolution = String(memory.resolution || "");
  const services = Array.isArray(siteContent?.configurator?.services) ? siteContent.configurator.services : [];
  if (!services.length) return [];
  return services.filter((service) => {
    const label = String(service?.label || "").toLowerCase();
    if (!label) return false;
    if (budget === "pro") return true;
    if (resolution === "4k" && /(garantie|montage|test|stabilit|support|sav)/i.test(label)) return true;
    if (game === "aaa" && /(test|stabilit|refroid|garantie|support)/i.test(label)) return true;
    return /(montage|test|garantie)/i.test(label);
  }).slice(0, 3);
}

function buildVortexBotComparison() {
  const machines = Array.isArray(siteContent?.machines) ? siteContent.machines : [];
  if (machines.length < 2) return "Ajoutez au moins 2 build dans l'admin pour activer la comparaison.";
  const first = machines[0];
  const second = machines[1];
  return [
    `Comparatif rapide:`,
    `• ${first.name} (${first.price})`,
    `• ${second.name} (${second.price})`,
    `Conseil: choisissez ${first.name} pour performance globale, ou ${second.name} si votre priorité est le meilleur rapport budget/FPS.`,
  ].join("\n");
}

function renderAdminVortexBotHistory() {
  if (!adminVortexBotHistoryEl) return;
  const items = loadVortexBotHistory();
  if (!items.length) {
    adminVortexBotHistoryEl.innerHTML = '<p class="admin-file-name">Aucun historique VortexBot.</p>';
    return;
  }
  adminVortexBotHistoryEl.innerHTML = items
    .slice(0, 18)
    .map((item) => {
      const at = formatAdminDateTime(item.at);
      const email = String(item.email || "guest");
      const action = String(item.action || "Action");
      const detail = String(item.detail || "");
      return `<article class="profile-review-item">
        <div class="profile-review-head">
          <strong>${escapeHtml(action)}</strong>
          <span class="profile-review-status approved">${escapeHtml(at)}</span>
        </div>
        <p class="profile-review-text">${escapeHtml(email)}${detail ? ` • ${escapeHtml(detail)}` : ""}</p>
      </article>`;
    })
    .join("");
}

function getCurrentBuildSummaryForBot() {
  const entries = Array.from(form?.querySelectorAll('input[type="radio"][data-config-component="1"]:checked') || []);
  if (!entries.length) return "Aucune configuration sélectionnée pour le moment.";
  const firstTwo = entries
    .slice(0, 2)
    .map((radio) => `${radio.dataset.label}: ${radio.dataset.optionName}`)
    .join("\n");
  const total = totalPrice?.textContent || "0 €";
  return `${firstTwo}\nTotal estimé actuel: ${total}`;
}

function setVortexBotOpen(isOpen) {
  if (!vortexBotPanelEl || !vortexBotToggleEl) return;
  vortexBotPanelEl.classList.toggle("hidden", !isOpen);
  vortexBotToggleEl.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function resolveAdvisorRecommendation(answers) {
  const budget = answers.budget || "mid";
  const game = answers.game || "mix";
  const resolution = answers.resolution || "1440";

  if (budget === "entry") {
    return {
      title: "VortexBox Pulse",
      price: "1 399 € - 1 699 €",
      specs: ["CPU Ryzen 5 / i5", "GPU RX 7700 XT", "RAM 16-32 Go DDR5", "SSD 1 To NVMe"],
      reason: "Excellent rapport performance/prix pour 1080p ultra et 1440p élevé.",
    };
  }

  if (budget === "pro" || resolution === "4k" || game === "aaa") {
    return {
      title: "VortexBox Nova RTX",
      price: "2 199 € - 2 899 €",
      specs: ["CPU Ryzen 7 7800X3D / i7", "GPU RTX 5070 Ti / plus", "RAM 32 Go DDR5", "SSD 1-2 To NVMe"],
      reason: "Profil idéal pour 1440p ultra, AAA récents et streaming confortable.",
    };
  }

  return {
    title: "VortexBox Nova RTX",
    price: "1 899 € - 2 399 €",
    specs: ["CPU Ryzen 7 / i7", "GPU RTX 5070 Ti", "RAM 32 Go DDR5", "SSD 1 To NVMe"],
    reason: "Configuration équilibrée pour e-sport compétitif et AAA en haute qualité.",
  };
}

async function requestAiAdvisorRecommendation(answers) {
  const fallback = resolveAdvisorRecommendation(answers);
  const catalog = {
    components: Array.isArray(siteContent?.configurator?.components)
      ? siteContent.configurator.components.map((component) => ({
          label: String(component?.label || ""),
          options: Array.isArray(component?.options)
            ? component.options.map((option) => ({
                name: String(option?.name || ""),
                price: Number(option?.price || 0),
              }))
            : [],
        }))
      : [],
    services: Array.isArray(siteContent?.configurator?.services)
      ? siteContent.configurator.services.map((service) => ({
          label: String(service?.label || ""),
          price: Number(service?.price || 0),
        }))
      : [],
  };

  try {
    const response = await fetch("/api/ai/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, catalog }),
    });
    if (!response.ok) return fallback;
    const payload = await response.json();
    const recommendation = payload?.recommendation && typeof payload.recommendation === "object" ? payload.recommendation : null;
    if (!recommendation) return fallback;
    return {
      title: String(recommendation.title || fallback.title),
      price: fallback.price,
      specs: Array.isArray(fallback.specs) ? fallback.specs : [],
      reason: String(recommendation.reason || fallback.reason),
      selections: recommendation.selections && typeof recommendation.selections === "object" ? recommendation.selections : {},
      services: Array.isArray(recommendation.services) ? recommendation.services.map((item) => String(item || "")) : [],
      fps_estimate:
        recommendation.fps_estimate && typeof recommendation.fps_estimate === "object"
          ? recommendation.fps_estimate
          : null,
      source: payload?.source || "ai",
    };
  } catch (error) {
    return fallback;
  }
}

function applyAdvisorRecommendationToConfigurator(reco) {
  if (!reco || !siteContent?.configurator) return false;
  const components = Array.isArray(siteContent.configurator.components) ? siteContent.configurator.components : [];
  const services = Array.isArray(siteContent.configurator.services) ? siteContent.configurator.services : [];
  const nextComponents = { ...selectedConfiguratorState.components };
  const nextServices = { ...selectedConfiguratorState.services };
  let changed = false;

  components.forEach((component, cIndex) => {
    const label = String(component?.label || "").trim().toLowerCase();
    if (!label) return;
    const wanted = Object.entries(reco.selections || {}).find(
      ([key]) => String(key || "").trim().toLowerCase() === label
    );
    if (!wanted) return;
    const optionName = String(wanted[1] || "");
    const exists = Array.isArray(component.options) && component.options.some((opt) => String(opt?.name || "") === optionName);
    if (!exists) return;
    nextComponents[String(cIndex)] = optionName;
    changed = true;
  });

  services.forEach((service, sIndex) => {
    const label = String(service?.label || "").trim().toLowerCase();
    if (!label) return;
    const shouldEnable = Array.isArray(reco.services)
      ? reco.services.some((item) => String(item || "").trim().toLowerCase() === label)
      : false;
    if (shouldEnable) {
      nextServices[String(sIndex)] = true;
      changed = true;
    }
  });

  if (!changed) return false;
  selectedConfiguratorState = { components: nextComponents, services: nextServices };
  renderConfigurator();
  updateSummary();
  return true;
}

function runVortexBotAdvisorStart() {
  const memory = getVortexBotMemory();
  vortexBotAdvisor = {
    active: true,
    step: "budget",
    answers: {
      budget: memory.budget || "",
      game: memory.game || "",
      resolution: memory.resolution || "",
    },
  };
  const memoryHint =
    memory.budget || memory.game || memory.resolution
      ? `Mémoire profil détectée: ${[
          memory.budget ? `Budget ${getAdvisorAnswerLabel("budget", memory.budget)}` : "",
          memory.game ? `Jeu ${getAdvisorAnswerLabel("game", memory.game)}` : "",
          memory.resolution ? `Résolution ${getAdvisorAnswerLabel("resolution", memory.resolution)}` : "",
        ]
          .filter(Boolean)
          .join(" · ")}`
      : "";
  if (memoryHint) appendVortexBotMessage(memoryHint);
  recordVortexBotHistory("Conseil IA", "Démarrage assistant 3 questions");
  appendVortexBotChoices("Question 1/3 - Quel budget visez-vous ?", "budget", [
    { label: "1200-1600 €", value: "entry" },
    { label: "1700-2500 €", value: "mid" },
    { label: "2600 € et +", value: "pro" },
  ]);
}

async function handleVortexBotAdvisorChoice(step, value) {
  if (!vortexBotAdvisor.active) return;
  if (!step || !value) return;

  if (step === "budget" && vortexBotAdvisor.step === "budget") {
    vortexBotAdvisor.answers.budget = value;
    setVortexBotMemory({ budget: value });
    vortexBotAdvisor.step = "game";
    appendVortexBotMessage(`Budget sélectionné: ${getAdvisorAnswerLabel("budget", value)}`, "user");
    appendVortexBotChoices("Question 2/3 - Quel type de jeu principal ?", "game", [
      { label: "E-sport (Fortnite/Valorant/CS2)", value: "esport" },
      { label: "AAA récents (Cyberpunk/Warzone)", value: "aaa" },
      { label: "Mix des deux", value: "mix" },
    ]);
    return;
  }

  if (step === "game" && vortexBotAdvisor.step === "game") {
    vortexBotAdvisor.answers.game = value;
    setVortexBotMemory({ game: value });
    vortexBotAdvisor.step = "resolution";
    appendVortexBotMessage(`Jeu principal: ${getAdvisorAnswerLabel("game", value)}`, "user");
    appendVortexBotChoices("Question 3/3 - Quelle résolution cible ?", "resolution", [
      { label: "1080p", value: "1080" },
      { label: "1440p", value: "1440" },
      { label: "4K", value: "4k" },
    ]);
    return;
  }

  if (step === "resolution" && vortexBotAdvisor.step === "resolution") {
    vortexBotAdvisor.answers.resolution = value;
    setVortexBotMemory({ resolution: value });
    appendVortexBotMessage(`Résolution cible: ${getAdvisorAnswerLabel("resolution", value)}`, "user");
    appendVortexBotMessage("Analyse IA en cours... Je prépare votre recommandation optimale.");
    const reco = await requestAiAdvisorRecommendation(vortexBotAdvisor.answers);
    vortexBotLastRecommendation = reco || null;
    const fpsBlock =
      reco?.fps_estimate && typeof reco.fps_estimate === "object"
        ? `\nEstimation FPS:\n${Object.entries(reco.fps_estimate)
            .map(([key, val]) => `• ${key}: ${val}`)
            .join("\n")}`
        : "";
    appendVortexBotMessage(
      `Recommandation VortexBot ${reco?.source === "ai" ? "IA" : ""}:\n${reco.title}\n${reco.reason}${fpsBlock}\n\nJ'applique cette base dans le configurateur.`
    );
    const score = estimateLeadScoreFromAdvisor(vortexBotAdvisor.answers);
    appendVortexBotMessage(`Score de qualification: ${score}/100. Un expert peut finaliser votre devis en 2 minutes sur Telegram.`);
    setVortexBotMemory({ lastRecommendation: reco?.title || "", lastScore: score });
    recordVortexBotHistory("Recommandation", reco?.title || "Build conseillé", { score });
    ensureCrmLeadFromVortexBot(vortexBotAdvisor.answers, reco);
    applyAdvisorRecommendationToConfigurator(reco);
    vortexBotAdvisor = { active: false, step: "", answers: {} };
    enterConfiguratorOnlyMode();
  }
}

function handleVortexBotIntent(intent) {
  if (!intent) return;
  const memory = getVortexBotMemory();
  const promoUnlocked = isPromoDlcUnlocked();
  appendVortexBotMessage(
    intent === "advisor"
      ? "Je veux une recommandation automatique"
    : intent === "compare"
      ? "Je veux comparer 2 configurations"
    : intent === "services"
      ? "Je veux des services optionnels recommandés"
    : intent === "promo"
      ? "Je veux activer l'option DLC promo"
    : intent === "objection"
      ? "J'hésite à acheter"
    : intent === "human"
      ? "Je veux parler à un expert"
    : intent === "configure"
      ? "Je veux créer mon build"
    : intent === "top"
        ? "Je veux voir les top build"
      : intent === "budget"
        ? "Je veux un conseil budget"
        : intent === "garantie"
          ? "Je veux connaître la garantie"
          : intent === "livraison"
            ? "Je veux connaître les délais"
        : intent === "telegram"
          ? "Je veux contacter VortexBox"
          : "Je veux ouvrir la FAQ",
    "user"
  );
  recordVortexBotHistory("Intent", intent);

  if (intent === "advisor") {
    runVortexBotAdvisorStart();
    return;
  }

  if (intent === "compare") {
    appendVortexBotMessage(buildVortexBotComparison());
    if (vortexBotLastRecommendation?.title) {
      appendVortexBotMessage(`Votre dernière recommandation: ${vortexBotLastRecommendation.title}.`);
    }
    return;
  }

  if (intent === "services") {
    const picks = getVortexBotServiceRecommendations();
    if (!picks.length) {
      appendVortexBotMessage("Aucun service disponible pour le moment. Ajoutez des services dans l'admin du configurateur.");
      return;
    }
    appendVortexBotMessage(
      `Services recommandés selon votre profil (${memory.budget ? getAdvisorAnswerLabel("budget", memory.budget) : "profil standard"}):\n`
        + picks.map((service) => `• ${service.label} (+${Number(service.price || 0)} €)`).join("\n")
    );
    return;
  }

  if (intent === "promo") {
    appendVortexBotMessage(
      promoUnlocked
        ? "Option DLC gratuite activée sur votre configuration en cours."
        : "Option DLC gratuite avec votre code promo personnel sur Telegram. Entrez le code dans le configurateur pour l'activer."
    );
    return;
  }

  if (intent === "objection") {
    appendVortexBotMessage(
      "Je comprends l'hésitation. Réponses rapides:\n"
      + "• Prix: vous payez un build monté/testé/stable prêt à jouer.\n"
      + "• Risque: garantie matérielle 2 ans + support.\n"
      + "• Valeur: optimisation FPS selon vos jeux + évolution possible.\n"
      + "Si vous voulez, je vous fais une version plus ajustée à votre budget."
    );
    return;
  }

  if (intent === "human") {
    appendVortexBotMessage("Je vous transfère vers un expert VortexBox pour finaliser votre build et votre devis.");
    recordVortexBotHistory("Escalade humaine", "Ouverture Telegram");
    window.open("https://t.me/VortexCore460", "_blank", "noopener");
    return;
  }

  if (intent === "configure") {
    appendVortexBotMessage(
      "Excellent choix.\nJe vous ouvre le configurateur VortexBox.\nAstuce: sélectionnez CPU + GPU d'abord pour estimer rapidement vos FPS."
    );
    enterConfiguratorOnlyMode();
    return;
  }

  if (intent === "top") {
    appendVortexBotMessage(
      "Voici nos top build vendus.\nComparez la puissance GPU/CPU puis contactez-nous sur Telegram pour une proposition rapide."
    );
    exitConfiguratorOnlyMode("#machines");
    return;
  }

  if (intent === "budget") {
    appendVortexBotMessage(
      "Repères rapides:\n• 1200-1600 €: 1080p ultra / 1440p élevé\n• 1700-2500 €: 1440p ultra / streaming\n• 2600 € et +: 4K premium\n\nVotre état actuel:\n"
      + getCurrentBuildSummaryForBot()
    );
    if (memory.budget) {
      appendVortexBotMessage(`Mémoire profil: dernier budget connu ${getAdvisorAnswerLabel("budget", memory.budget)}.`);
    }
    return;
  }

  if (intent === "garantie") {
    appendVortexBotMessage(
      "Garantie matérielle VortexBox: 2 ans.\nVous bénéficiez aussi d'un accompagnement technique pour optimiser votre build après livraison."
    );
    return;
  }

  if (intent === "livraison") {
    appendVortexBotMessage(
      "Délais moyens:\n• Préparation + montage: 3 à 7 jours ouvrés\n• Expédition protégée après validation des tests.\nJe peux vous orienter vers la meilleure option selon votre budget."
    );
    return;
  }

  if (intent === "telegram") {
    appendVortexBotMessage(
      "Parfait.\nJe vous ouvre Telegram pour un échange direct avec l'équipe VortexBox."
    );
    recordVortexBotHistory("Escalade Telegram", "Contact direct");
    window.open("https://t.me/VortexCore460", "_blank", "noopener");
    return;
  }

  appendVortexBotMessage("Je vous redirige vers la FAQ pour les réponses détaillées.");
  window.location.href = "faq.html";
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
    const quickAction = event.target.closest("button[data-bot-action]");
    if (quickAction) {
      const action = String(quickAction.dataset.botAction || "");
      if (action === "go-ai-advisor") {
        handleVortexBotIntent("advisor");
        return;
      }
      if (action === "go-configurator") {
        handleVortexBotIntent("configure");
        return;
      }
      if (action === "go-telegram") {
        handleVortexBotIntent("telegram");
        return;
      }
    }
    const choice = event.target.closest("button[data-bot-step][data-bot-value]");
    if (choice) {
      Promise.resolve(handleVortexBotAdvisorChoice(choice.dataset.botStep, choice.dataset.botValue)).catch(() => {
        appendVortexBotMessage("Impossible de finaliser la recommandation IA pour le moment.");
      });
      return;
    }
    const button = event.target.closest("button[data-bot-intent]");
    if (!button) return;
    handleVortexBotIntent(button.dataset.botIntent);
  });
}

function tryConsumeAiAdvisorDeepLink() {
  if (!pendingAiAdvisorDeepLink) return;
  if (!vortexBotEl || !vortexBotToggleEl || !vortexBotPanelEl) return;
  if (document.body.classList.contains("site-locked")) return;
  pendingAiAdvisorDeepLink = false;
  enterConfiguratorOnlyMode();
  setVortexBotOpen(true);
  runVortexBotAdvisorStart();
}

function tryConsumeConfiguratorDeepLink() {
  if (!pendingConfiguratorDeepLink) return;
  if (document.body.classList.contains("site-locked")) return;
  pendingConfiguratorDeepLink = false;
  enterConfiguratorOnlyMode();
}

function reconcileConfiguratorSelectionWithContent(config) {
  if (!config || !Array.isArray(config.components) || !Array.isArray(config.services)) return;

  const nextComponents = {};
  config.components.forEach((component, componentIndex) => {
    const key = String(componentIndex);
    const selectedName = selectedConfiguratorState.components[key];
    if (!selectedName) return;
    const stillExists = Array.isArray(component.options)
      && component.options.some((option) => option && option.name === selectedName);
    if (stillExists) nextComponents[key] = selectedName;
  });

  const nextServices = {};
  config.services.forEach((service, serviceIndex) => {
    const key = String(serviceIndex);
    if (Object.prototype.hasOwnProperty.call(selectedConfiguratorState.services, key)) {
      nextServices[key] = Boolean(selectedConfiguratorState.services[key]);
      return;
    }
    nextServices[key] = Boolean(service.checked);
  });

  selectedConfiguratorState = { components: nextComponents, services: nextServices };
}

function isAllowedOutlookEmail(email) {
  return /@outlook\.(com|fr)$/i.test(String(email || "").trim());
}

function isAdminEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return normalized === ADMIN_EMAIL || normalized === "votexcore.fr";
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
  refreshUserDownloadsBadge();
  refreshNavAssignedFilesBadge();
}

function normalizeCredentialValue(value) {
  try {
    return String(value || "").trim().normalize("NFKC");
  } catch (error) {
    return String(value || "").trim();
  }
}

function isAdminCredential(email, password) {
  const normalizedEmail = normalizeCredentialValue(email).toLowerCase();
  const normalizedPassword = normalizeCredentialValue(password);
  return (normalizedEmail === ADMIN_EMAIL || normalizedEmail === "votexcore.fr") && normalizedPassword === ADMIN_PASSWORD;
}

function isAdminSessionAuthorized() {
  const email = getCurrentAuthEmail();
  return isAdminEmail(email) && sessionStorage.getItem(SESSION_KEY) === "1";
}

function isAdminLiveMode() {
  const enabled = sessionStorage.getItem(ADMIN_LIVE_MODE_KEY) !== "0";
  return isAdminSessionAuthorized() && enabled;
}

function refreshAdminLiveMode() {
  const enabled = isAdminLiveMode();
  document.body.classList.toggle("admin-live-edit", enabled);
  if (adminLiveExitBtn) adminLiveExitBtn.classList.toggle("hidden", !enabled);
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
        displayName: String(item.displayName || ""),
        profilePhoto: String(item.profilePhoto || ""),
        password: String(item.password || ""),
        totalConnectionSeconds: Math.max(0, Math.floor(Number(item.totalConnectionSeconds) || 0)),
        lastSeenAt: String(item.lastSeenAt || ""),
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

function formatDurationHms(totalSeconds) {
  const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function getStoredConnectionSecondsForUser(email) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!normalized || isAdminEmail(normalized)) return 0;
  const users = loadSiteUsers();
  const found = users.find((user) => user.email === normalized);
  return Math.max(0, Math.floor(Number(found?.totalConnectionSeconds) || 0));
}

function getLiveConnectionSeconds() {
  if (!activeConnectionEmail || !activeConnectionSessionStartAt) return 0;
  const elapsed = Math.max(0, Math.floor((Date.now() - activeConnectionSessionStartAt) / 1000));
  return Math.max(0, activeConnectionBaseSeconds + elapsed);
}

function renderProfileConnectionTime(email = "") {
  if (!profileConnectionTimeEl) return;
  const normalized = String(email || getCurrentSessionEmail() || "").trim().toLowerCase();
  if (!normalized || isAdminEmail(normalized)) {
    profileConnectionTimeEl.textContent = "00:00:00";
    return;
  }
  if (normalized === activeConnectionEmail && activeConnectionSessionStartAt) {
    profileConnectionTimeEl.textContent = formatDurationHms(getLiveConnectionSeconds());
    return;
  }
  profileConnectionTimeEl.textContent = formatDurationHms(getStoredConnectionSecondsForUser(normalized));
}

function persistConnectionTime(force = false) {
  if (!activeConnectionEmail || isAdminEmail(activeConnectionEmail) || !activeConnectionSessionStartAt) return;
  const users = loadSiteUsers();
  const found = users.find((user) => user.email === activeConnectionEmail);
  if (!found) return;
  const nextTotal = getLiveConnectionSeconds();
  const prevTotal = Math.max(0, Math.floor(Number(found.totalConnectionSeconds) || 0));
  if (!force && nextTotal <= prevTotal) return;
  found.totalConnectionSeconds = Math.max(prevTotal, nextTotal);
  found.lastSeenAt = new Date().toISOString();
  saveSiteUsers(users);
  activeConnectionBaseSeconds = found.totalConnectionSeconds;
  activeConnectionSessionStartAt = Date.now();
}

function stopConnectionTimer(persist = true) {
  if (persist) persistConnectionTime(true);
  if (activeConnectionTick) {
    clearInterval(activeConnectionTick);
    activeConnectionTick = null;
  }
  activeConnectionEmail = "";
  activeConnectionBaseSeconds = 0;
  activeConnectionSessionStartAt = 0;
  activeConnectionPersistStep = 0;
}

function startConnectionTimer(email) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!normalized || isAdminEmail(normalized)) {
    stopConnectionTimer(false);
    renderProfileConnectionTime(normalized);
    return;
  }

  if (activeConnectionEmail && activeConnectionEmail !== normalized) {
    stopConnectionTimer(true);
  }

  if (activeConnectionEmail === normalized && activeConnectionTick) {
    renderProfileConnectionTime(normalized);
    return;
  }

  activeConnectionEmail = normalized;
  activeConnectionBaseSeconds = getStoredConnectionSecondsForUser(normalized);
  activeConnectionSessionStartAt = Date.now();
  activeConnectionPersistStep = 0;
  renderProfileConnectionTime(normalized);

  if (activeConnectionTick) clearInterval(activeConnectionTick);
  activeConnectionTick = window.setInterval(() => {
    activeConnectionPersistStep += 1;
    renderProfileConnectionTime(normalized);
    if (activeConnectionPersistStep >= 15) {
      activeConnectionPersistStep = 0;
      persistConnectionTime(false);
    }
  }, 1000);
}

function loadUserConfigsMap() {
  try {
    const raw = localStorage.getItem(USER_CONFIGS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveUserConfigsMap(map) {
  localStorage.setItem(USER_CONFIGS_KEY, JSON.stringify(map));
  persistUserStateToDiskAuto();
}

function getUserConfigs(email) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return [];
  const all = loadUserConfigsMap();
  const list = all[key];
  return Array.isArray(list) ? list : [];
}

function setUserConfigs(email, configs) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return;
  const all = loadUserConfigsMap();
  all[key] = Array.isArray(configs) ? configs.slice(0, 20) : [];
  saveUserConfigsMap(all);
}

function loadUserFavoritesMap() {
  try {
    const raw = localStorage.getItem(USER_FAVORITES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveUserFavoritesMap(map) {
  localStorage.setItem(USER_FAVORITES_KEY, JSON.stringify(map));
}

function getUserFavoriteConfigIds(email) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return [];
  const all = loadUserFavoritesMap();
  return Array.isArray(all[key]) ? all[key] : [];
}

function toggleUserFavoriteConfig(email, configId) {
  const key = String(email || "").trim().toLowerCase();
  const id = String(configId || "").trim();
  if (!key || !id) return false;
  const all = loadUserFavoritesMap();
  const list = Array.isArray(all[key]) ? all[key].slice(0, 50) : [];
  const index = list.indexOf(id);
  if (index >= 0) {
    list.splice(index, 1);
    all[key] = list;
    saveUserFavoritesMap(all);
    return false;
  }
  list.unshift(id);
  all[key] = list.slice(0, 50);
  saveUserFavoritesMap(all);
  return true;
}

function loadUserActivityMap() {
  try {
    const raw = localStorage.getItem(USER_ACTIVITY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveUserActivityMap(map) {
  localStorage.setItem(USER_ACTIVITY_KEY, JSON.stringify(map));
}

function recordUserActivity(email, action, detail = "") {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return;
  const map = loadUserActivityMap();
  const list = Array.isArray(map[key]) ? map[key] : [];
  list.unshift({
    at: new Date().toISOString(),
    action: String(action || "").trim(),
    detail: String(detail || "").trim(),
  });
  map[key] = list.slice(0, 80);
  saveUserActivityMap(map);
}

function getUserActivity(email) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return [];
  const map = loadUserActivityMap();
  return Array.isArray(map[key]) ? map[key] : [];
}

function loadPromoCodes() {
  try {
    const raw = localStorage.getItem(PROMO_CODES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.code === "string" && typeof item.email === "string")
      .map((item) => ({
        code: String(item.code || "").trim().toUpperCase(),
        email: String(item.email || "").trim().toLowerCase(),
        createdAt: String(item.createdAt || ""),
        active: item.active === undefined ? true : Boolean(item.active),
        redeemedBy: String(item.redeemedBy || "").trim().toLowerCase(),
        redeemedAt: String(item.redeemedAt || ""),
      }));
  } catch (error) {
    return [];
  }
}

function savePromoCodes(codes) {
  localStorage.setItem(PROMO_CODES_KEY, JSON.stringify(Array.isArray(codes) ? codes : []));
  persistUserStateToDiskAuto();
}

function recommendationKey(text) {
  return String(text || "").trim().toLowerCase();
}

function loadDoneKpiRecommendations() {
  try {
    const raw = localStorage.getItem(ADMIN_KPI_DONE_RECOMMENDATIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => recommendationKey(item)).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function saveDoneKpiRecommendations(keys) {
  const clean = Array.from(new Set((Array.isArray(keys) ? keys : []).map((item) => recommendationKey(item)).filter(Boolean)));
  localStorage.setItem(ADMIN_KPI_DONE_RECOMMENDATIONS_KEY, JSON.stringify(clean));
}

function markKpiRecommendationDone(text) {
  const key = recommendationKey(text);
  if (!key) return;
  const current = loadDoneKpiRecommendations();
  if (current.includes(key)) return;
  current.push(key);
  saveDoneKpiRecommendations(current);
}

function loadActionedKpiRecommendations() {
  try {
    const raw = localStorage.getItem(ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => recommendationKey(item)).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function saveActionedKpiRecommendations(keys) {
  const clean = Array.from(new Set((Array.isArray(keys) ? keys : []).map((item) => recommendationKey(item)).filter(Boolean)));
  localStorage.setItem(ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY, JSON.stringify(clean));
}

function markKpiRecommendationActioned(text) {
  const key = recommendationKey(text);
  if (!key) return;
  const current = loadActionedKpiRecommendations();
  if (current.includes(key)) return;
  current.push(key);
  saveActionedKpiRecommendations(current);
}

function resolveRecommendationTargetTab(text) {
  const value = String(text || "").toLowerCase();
  if (/promo|telegram|dlc/.test(value)) return "promos";
  if (/avis|preuve sociale/.test(value)) return "reviews";
  if (/fiches techniques|fiche technique/.test(value)) return "fiches";
  if (/build|fiches build/.test(value)) return "machines";
  if (/acquisition|benchmark|contenus premium|contenu premium/.test(value)) return "about-videos";
  if (/faq/.test(value)) return "faq";
  return "general";
}

function buildUserStateSnapshot() {
  return {
    updatedAt: new Date().toISOString(),
    users: loadSiteUsers(),
    userLog: loadUserLog(),
    userConfigs: loadUserConfigsMap(),
    promoCodes: loadPromoCodes(),
    doneKpiRecommendations: loadDoneKpiRecommendations(),
    actionedKpiRecommendations: loadActionedKpiRecommendations(),
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
  if (Array.isArray(snapshot.doneKpiRecommendations)) {
    localStorage.setItem(
      ADMIN_KPI_DONE_RECOMMENDATIONS_KEY,
      JSON.stringify(snapshot.doneKpiRecommendations.map((item) => recommendationKey(item)).filter(Boolean))
    );
  }
  if (Array.isArray(snapshot.actionedKpiRecommendations)) {
    localStorage.setItem(
      ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY,
      JSON.stringify(snapshot.actionedKpiRecommendations.map((item) => recommendationKey(item)).filter(Boolean))
    );
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

function normalizePromoCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[^A-Z0-9-]/g, "");
}

function generatePromoCode() {
  const token = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `VB-DLC-${token}`;
}

function getPromoForCurrentUser(codeCandidate = "") {
  const email = getCurrentSessionEmail();
  if (!email) return null;
  const codes = loadPromoCodes();
  const targetCode = normalizePromoCode(codeCandidate || activePromoCode);
  if (targetCode) {
    return (
      codes.find(
        (item) =>
          item.code === targetCode &&
          item.email === email &&
          item.redeemedBy === email
      ) || null
    );
  }
  return (
    codes.find(
      (item) =>
        item.email === email &&
        item.redeemedBy === email
    ) || null
  );
}

function isPromoDlcUnlocked() {
  return Boolean(getPromoForCurrentUser());
}

function setPromoFeedback(message, tone = "") {
  if (!promoFeedbackEl) return;
  promoFeedbackEl.textContent = String(message || "");
  promoFeedbackEl.classList.remove("success", "error", "info");
  if (!message) return;
  promoFeedbackEl.classList.add(tone || "info");
}

function setAdminPromoFeedback(message, tone = "") {
  if (!adminPromoFeedbackEl) return;
  adminPromoFeedbackEl.textContent = String(message || "");
  adminPromoFeedbackEl.classList.remove("success", "error", "info");
  if (!message) return;
  adminPromoFeedbackEl.classList.add(tone || "info");
}

function renderAdminPromoCodes() {
  if (!adminPromoCodesListEl) return;
  const codes = loadPromoCodes().sort((a, b) => {
    const ad = new Date(a.createdAt).getTime() || 0;
    const bd = new Date(b.createdAt).getTime() || 0;
    return bd - ad;
  });
  if (!codes.length) {
    adminPromoCodesListEl.innerHTML = "<p>Aucun code promo généré.</p>";
    renderAdminOverviewKpis();
    return;
  }

  adminPromoCodesListEl.innerHTML = codes
    .map((item) => {
      const created = item.createdAt ? new Date(item.createdAt).toLocaleString("fr-FR") : "Date inconnue";
      const redeemed = item.redeemedAt ? new Date(item.redeemedAt).toLocaleString("fr-FR") : "";
      const status = item.redeemedBy
        ? `Utilisé par ${escapeHtml(item.redeemedBy)}`
        : item.active
          ? "Disponible"
          : "Désactivé";
      return `
        <article class="admin-user-item">
          <div class="admin-user-top">
            <span class="admin-user-mail">${escapeHtml(item.code)}</span>
            <span class="admin-user-status ${item.redeemedBy ? "pending" : item.active ? "active" : "revoked"}">${status}</span>
          </div>
          <div class="admin-user-meta">Utilisateur: ${escapeHtml(item.email)} - Créé: ${escapeHtml(created)}</div>
          ${redeemed ? `<div class="admin-user-meta">Utilisé le: ${escapeHtml(redeemed)}</div>` : ""}
          <div class="admin-user-actions">
            <button class="admin-secondary" type="button" data-action="toggle-promo-active" data-promo-code="${escapeHtml(item.code)}">
              ${item.active ? "Désactiver" : "Réactiver"}
            </button>
            <button class="admin-secondary" type="button" data-action="reset-promo-usage" data-promo-code="${escapeHtml(item.code)}">
              Réactiver utilisation
            </button>
            <button class="admin-danger" type="button" data-action="delete-promo" data-promo-code="${escapeHtml(item.code)}">
              Supprimer
            </button>
          </div>
        </article>
      `;
    })
    .join("");
  renderAdminOverviewKpis();
}

function showAdminToast(message, tone = "info") {
  if (!adminToastStackEl) return;
  const text = String(message || "").trim();
  if (!text) return;
  adminToastStackEl.innerHTML = "";

  const toast = document.createElement("div");
  toast.className = `admin-toast ${tone}`;
  toast.textContent = text;
  adminToastStackEl.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  if (adminToastTimer) clearTimeout(adminToastTimer);
  adminToastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 220);
  }, 2600);
}

function renderAdminOverviewKpis() {
  if (!adminKpiUsersEl || !adminKpiReviewsPendingEl || !adminKpiPromosActiveEl || !adminKpiLastSaveEl) return;
  const users = loadSiteUsers().filter((user) => user.email && !isAdminEmail(user.email));
  const activeUsers = users.filter((user) => user.isActive && !user.revoked && !user.blacklisted).length;
  const pendingReviews = (Array.isArray(siteContent?.reviews) ? siteContent.reviews : []).filter((review) => !review?.approved).length;
  const activePromos = loadPromoCodes().filter((promo) => promo.active && !promo.redeemedBy).length;
  const lastSave = adminAutosaveLastAt
    ? new Date(adminAutosaveLastAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : "--:--";

  adminKpiUsersEl.textContent = String(activeUsers);
  adminKpiReviewsPendingEl.textContent = String(pendingReviews);
  adminKpiPromosActiveEl.textContent = String(activePromos);
  adminKpiLastSaveEl.textContent = lastSave;
}

function computeAdminGateMetrics() {
  const users = loadSiteUsers().filter((user) => user.email && !isAdminEmail(user.email));
  const activeUsers = users.filter((user) => user.isActive && !user.revoked && !user.blacklisted);
  const logs = loadUserLog();
  const promos = loadPromoCodes();
  const approvedReviews = (Array.isArray(siteContent?.reviews) ? siteContent.reviews : []).filter((review) => review?.approved);

  const now = new Date();
  const days = Array.from({ length: 7 }).map((_, idx) => {
    const date = new Date(now);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - idx));
    return date;
  });
  const loginCounts = days.map(() => 0);
  logs.forEach((entry) => {
    const date = new Date(entry.date || "");
    if (Number.isNaN(date.getTime())) return;
    for (let i = 0; i < days.length; i += 1) {
      const start = days[i].getTime();
      const end = start + 24 * 60 * 60 * 1000;
      if (date.getTime() >= start && date.getTime() < end) {
        loginCounts[i] += 1;
        break;
      }
    }
  });
  const logins7d = loginCounts.reduce((sum, value) => sum + value, 0);

  const averageRating = approvedReviews.length
    ? approvedReviews.reduce((sum, review) => sum + (Number(review.rating) || 0), 0) / approvedReviews.length
    : 0;

  const promoUsed = promos.filter((promo) => promo.redeemedBy).length;
  const promoConversion = promos.length ? Math.round((promoUsed / promos.length) * 100) : 0;

  const builds = Array.isArray(siteContent?.machines) ? siteContent.machines : [];
  const buildsReady = builds.filter((build) => build?.name && build?.price && build?.image).length;
  const buildsScore = builds.length ? Math.round((buildsReady / builds.length) * 100) : 0;

  const fiches = Array.isArray(siteContent?.technicalSheets) ? siteContent.technicalSheets : [];
  const fichesReady = fiches.filter((sheet) => sheet?.image && (sheet?.fileData || sheet?.fileKey)).length;
  const fichesScore = fiches.length ? Math.round((fichesReady / fiches.length) * 100) : 0;

  const aboutVideos = Array.isArray(siteContent?.aboutVideos) ? siteContent.aboutVideos : [];
  const aboutVideosReady = aboutVideos.filter((video) => video?.videoData || video?.videoKey).length;
  const aboutGalleryPhotos = Array.isArray(siteContent?.aboutGallery?.photos) ? siteContent.aboutGallery.photos.length : 0;
  const mediaTotal = aboutVideos.length + Math.max(aboutGalleryPhotos, 0);
  const mediaScore = mediaTotal ? Math.round(((aboutVideosReady + aboutGalleryPhotos) / mediaTotal) * 100) : 0;

  const faqItems = Array.isArray(siteContent?.faqItems) ? siteContent.faqItems : [];
  const faqScore = faqItems.length >= 8 ? 100 : Math.round((faqItems.length / 8) * 100);

  const recommendations = [];
  if (promoConversion < 25) recommendations.push("Améliorer l'offre promo DLC: ajouter un CTA Telegram plus visible sur la page d'accueil.");
  if (averageRating < 4.5) recommendations.push("Renforcer la preuve sociale: demander un avis client après chaque livraison validée.");
  if (buildsScore < 90) recommendations.push("Compléter les fiches build: image + prix + 3 arguments vendeurs minimum.");
  if (fichesScore < 80) recommendations.push("Finaliser les fiches techniques manquantes pour augmenter la confiance avant achat.");
  if (logins7d < 20) recommendations.push("Booster l'acquisition: campagne Telegram + publication de benchmarks récents.");
  if (!recommendations.length) {
    recommendations.push("Très bonne dynamique: maintenez le rythme en publiant 2 nouveaux contenus premium par semaine.");
    recommendations.push("Tester une offre limitée (upgrade RAM/SSD) pour augmenter le panier moyen.");
  }

  return {
    activeUsers: activeUsers.length,
    logins7d,
    averageRating,
    promoConversion,
    loginCounts,
    loginLabels: days.map((date) =>
      date.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "")
    ),
    bars: [
      { label: "Build", value: buildsScore },
      { label: "Fiches techniques", value: fichesScore },
      { label: "Médias A propos", value: mediaScore },
      { label: "FAQ", value: Math.min(100, faqScore) },
    ],
    recommendations,
  };
}

function renderAdminGateLineChart(labels, values) {
  if (!adminKpiLineChartEl) return;
  const canvas = adminKpiLineChartEl;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth || 680;
  const height = 220;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const max = Math.max(4, ...values);
  const padding = { top: 16, right: 22, bottom: 30, left: 24 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const step = values.length > 1 ? chartW / (values.length - 1) : chartW;

  ctx.strokeStyle = "rgba(127, 231, 255, 0.22)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + (chartH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  ctx.beginPath();
  values.forEach((value, index) => {
    const x = padding.left + step * index;
    const y = padding.top + chartH - (value / max) * chartH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "rgba(127, 231, 255, 0.98)";
  ctx.lineWidth = 2.8;
  ctx.stroke();

  values.forEach((value, index) => {
    const x = padding.left + step * index;
    const y = padding.top + chartH - (value / max) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = "#7fe7ff";
    ctx.fill();
    ctx.fillStyle = "rgba(212, 236, 255, 0.92)";
    ctx.font = "11px Sora, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(value), x, y - 10);
    ctx.fillStyle = "rgba(188, 214, 235, 0.92)";
    ctx.fillText(labels[index] || "", x, height - 8);
  });
}

function renderAdminGateKpis() {
  if (!adminKpiGateEl) return;
  const metrics = computeAdminGateMetrics();
  if (adminGateUsersActiveEl) adminGateUsersActiveEl.textContent = String(metrics.activeUsers);
  if (adminGateLogins7dEl) adminGateLogins7dEl.textContent = String(metrics.logins7d);
  if (adminGateRatingEl) adminGateRatingEl.textContent = `${metrics.averageRating.toFixed(1)} / 5`;
  if (adminGatePromoConvEl) adminGatePromoConvEl.textContent = `${metrics.promoConversion}%`;

  renderAdminGateLineChart(metrics.loginLabels, metrics.loginCounts);

  if (adminKpiBarsEl) {
    adminKpiBarsEl.innerHTML = metrics.bars
      .map(
        (item) => `
          <div class="admin-kpi-bar-row">
            <div class="admin-kpi-bar-head">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.value}%</strong>
            </div>
            <div class="admin-kpi-bar-track">
              <span style="width:${Math.max(0, Math.min(100, item.value))}%"></span>
            </div>
          </div>
        `
      )
      .join("");
  }

  if (adminKpiRecommendationsEl) {
    const done = new Set(loadDoneKpiRecommendations());
    const actioned = new Set(loadActionedKpiRecommendations());
    const visibleRecommendations = metrics.recommendations.filter((text) => !done.has(recommendationKey(text)));
    if (!visibleRecommendations.length) {
      adminKpiRecommendationsEl.innerHTML = '<li class="admin-kpi-reco-empty">Aucune recommandation prioritaire en attente.</li>';
    } else {
      adminKpiRecommendationsEl.innerHTML = visibleRecommendations
        .slice(0, 4)
        .map((text) => {
          const encoded = encodeURIComponent(text);
          const isActioned = actioned.has(recommendationKey(text));
          const actionTitle = "Ouvrir la zone pour traiter cette recommandation";
          const doneTitle = isActioned
            ? "Valider la recommandation effectuée"
            : "Cliquez d'abord sur l'icône d'action";
          return `<li class="admin-kpi-reco-item">
            <span>${escapeHtml(text)}</span>
            <div class="admin-kpi-reco-actions">
              <button class="admin-secondary admin-kpi-reco-open-btn" type="button" data-action="kpi-reco-open" data-reco="${encoded}" aria-label="${actionTitle}" title="${actionTitle}">
                <span aria-hidden="true">➜</span>
              </button>
              <button class="admin-secondary admin-kpi-reco-done-btn ${isActioned ? "is-ready" : ""}" type="button" data-action="kpi-reco-done" data-reco="${encoded}" aria-label="${doneTitle}" title="${doneTitle}" ${isActioned ? "" : "disabled"}>
                <span aria-hidden="true">✓</span>
              </button>
            </div>
          </li>`;
        })
        .join("");
    }
  }
}

function showAdminKpiGate() {
  if (adminLogin) adminLogin.classList.add("hidden");
  if (adminEditor) adminEditor.classList.add("hidden");
  if (adminKpiGateEl) adminKpiGateEl.classList.remove("hidden");
  renderAdminGateKpis();
}

function showAdminEditor() {
  if (adminLogin) adminLogin.classList.add("hidden");
  if (adminKpiGateEl) adminKpiGateEl.classList.add("hidden");
  if (adminEditor) adminEditor.classList.remove("hidden");
  setAdminDensityMode(loadAdminDensityMode());
  fillAdminFields();
  setActiveAdminTab("general");
  if (pendingAdminDeepLinkTab) {
    setActiveAdminTab(pendingAdminDeepLinkTab);
    if (pendingAdminDeepLinkTab === "processus" && pendingAdminDeepLinkProcessSubtab) {
      setAdminProcessSubtab(pendingAdminDeepLinkProcessSubtab);
    }
    pendingAdminDeepLinkTab = "";
    pendingAdminDeepLinkProcessSubtab = "";
  }
  renderAdminSearchResults("");
}

function renderAdminLivePreview() {
  if (!adminLivePreviewTitleEl || !adminLivePreviewSubtitleEl || !adminLivePreviewImageEl) return;
  adminLivePreviewTitleEl.textContent = String(siteContent?.heroTitle || "Titre principal");
  adminLivePreviewSubtitleEl.textContent = String(siteContent?.machinesTitle || "Titre section build");
  const previewImage =
    siteContent?.showcase?.[0]?.image ||
    siteContent?.configurator?.visualImages?.[0] ||
    "favicon-vb.svg";
  adminLivePreviewImageEl.src = String(previewImage);
}

function setAdminDensityMode(mode) {
  if (!adminPanel) return;
  const safeMode = mode === "compact" ? "compact" : "comfort";
  adminPanel.classList.toggle("admin-density-compact", safeMode === "compact");
  if (adminDensityToggleEl) adminDensityToggleEl.value = safeMode;
  try {
    localStorage.setItem(ADMIN_DENSITY_KEY, safeMode);
  } catch (error) {}
}

function loadAdminDensityMode() {
  try {
    return localStorage.getItem(ADMIN_DENSITY_KEY) === "compact" ? "compact" : "comfort";
  } catch (error) {
    return "comfort";
  }
}

function renderAdminSearchResults(query) {
  if (!adminSearchResultsEl || !adminTabButtons.length) return;
  const search = String(query || "").trim().toLowerCase();
  if (!search) {
    adminSearchResultsEl.innerHTML = "";
    adminSearchResultsEl.classList.add("hidden");
    return;
  }
  const matches = adminTabButtons.filter((button) => {
    const tab = String(button.dataset.tab || "");
    const panel = adminTabPanels.find((item) => item.dataset.tabContent === tab);
    const buttonText = String(button.textContent || "").toLowerCase();
    const panelText = String(panel?.textContent || "").toLowerCase();
    return buttonText.includes(search) || panelText.includes(search);
  });
  if (!matches.length) {
    adminSearchResultsEl.innerHTML = '<span class="admin-search-empty">Aucun résultat</span>';
    adminSearchResultsEl.classList.remove("hidden");
    return;
  }
  adminSearchResultsEl.innerHTML = matches
    .map(
      (button) =>
        `<button class="admin-search-chip" type="button" data-tab-jump="${escapeHtml(button.dataset.tab || "")}">${escapeHtml(
          String(button.textContent || "").trim()
        )}</button>`
    )
    .join("");
  adminSearchResultsEl.classList.remove("hidden");
}

function getCurrentSessionEmail() {
  return String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
}

function getDisplayNameFromEmail(email) {
  const localPart = String(email || "").split("@")[0] || "Client";
  return localPart.replace(/[._-]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function getUserDisplayName(email) {
  const users = loadSiteUsers();
  const found = users.find((user) => user.email === String(email || "").trim().toLowerCase());
  if (found?.displayName?.trim()) return found.displayName.trim();
  return getDisplayNameFromEmail(email);
}

function getUserProfilePhoto(email) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedEmail) return "";
  if (isAdminEmail(normalizedEmail)) {
    return String(localStorage.getItem(ADMIN_PROFILE_PHOTO_KEY) || "");
  }
  const users = loadSiteUsers();
  const found = users.find((user) => user.email === normalizedEmail);
  return String(found?.profilePhoto || "");
}

function setUserProfilePhoto(email, photoData) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const value = String(photoData || "");
  if (!normalizedEmail) return false;
  if (isAdminEmail(normalizedEmail)) {
    localStorage.setItem(ADMIN_PROFILE_PHOTO_KEY, value);
    persistUserStateToDiskAuto();
    return true;
  }
  const users = loadSiteUsers();
  const found = users.find((user) => user.email === normalizedEmail);
  if (!found) return false;
  found.profilePhoto = value;
  saveSiteUsers(users);
  renderAdminUsersManager();
  return true;
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
      if (event.key === "Backspace" && !cell.value && i > 0) {
        cells[i - 1].focus();
      }
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
    allCodes[email] = {
      code,
      expiresAt: Date.now() + 10 * 60 * 1000,
    };
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
  recordUserActivity(email, "Connexion", "");
}

function renderUserLog() {
  if (!adminUserLogListEl) return;
  const log = loadUserLog();
  if (!log.length) {
    adminUserLogListEl.innerHTML = "<li>Aucune connexion enregistrée.</li>";
    return;
  }

  adminUserLogListEl.innerHTML = log
    .slice(0, 30)
    .map((entry) => {
      const date = new Date(entry.date);
      const formatted = Number.isNaN(date.getTime())
        ? entry.date
        : date.toLocaleString("fr-FR");
      return `<li>${entry.email} - ${formatted}</li>`;
    })
    .join("");
}

function getUserAccessStatus(user) {
  if (user.blacklisted) return { key: "blacklisted", label: "Liste rouge" };
  if (user.revoked) return { key: "revoked", label: "Révoqué" };
  if (!user.isActive) return { key: "pending", label: "En attente activation" };
  return { key: "active", label: "Actif" };
}

function renderAdminUsersManager() {
  if (!adminUsersListEls.length) return;
  const filterTerm = String(adminUsersSearchInput?.value || "").trim().toLowerCase();
  const users = loadSiteUsers()
    .filter((user) => user.email && !isAdminEmail(user.email))
    .filter((user) => {
      if (!filterTerm) return true;
      const email = String(user.email || "").toLowerCase();
      const displayName = String(user.displayName || "").toLowerCase();
      return email.includes(filterTerm) || displayName.includes(filterTerm);
    })
    .sort((a, b) => a.email.localeCompare(b.email, "fr"));

  if (!users.length) {
    adminUsersListEls.forEach((el) => {
      el.innerHTML = "<p>Aucun utilisateur inscrit.</p>";
    });
    return;
  }

  const html = users
    .map((user) => {
      const status = getUserAccessStatus(user);
      const encodedEmail = encodeURIComponent(user.email);
      return `
        <article class="admin-user-item">
          <div class="admin-user-top">
            <span class="admin-user-mail">${escapeHtml(user.email)}</span>
            <span class="admin-user-status ${status.key}">${status.label}</span>
          </div>
          <div class="admin-user-meta">Profil: ${escapeHtml(user.displayName?.trim() || "Non défini")}</div>
          <div class="admin-user-actions">
            <button class="admin-secondary" type="button" data-action="toggle-revoke-user" data-user-email="${encodedEmail}">
              ${user.revoked ? "Réactiver" : "Révoquer"}
            </button>
            <button class="admin-danger" type="button" data-action="toggle-blacklist-user" data-user-email="${encodedEmail}">
              ${user.blacklisted ? "Retirer liste rouge" : "Mettre en liste rouge"}
            </button>
            <button class="admin-danger" type="button" data-action="delete-user" data-user-email="${encodedEmail}">
              Supprimer
            </button>
          </div>
        </article>
      `;
    })
    .join("");
  adminUsersListEls.forEach((el) => {
    el.innerHTML = html;
  });
  renderAdminOverviewKpis();
}

function unlockSite() {
  const sessionEmail = getCurrentAuthEmail();
  document.documentElement.classList.add("vb-auth-ok");
  document.body.classList.remove("site-locked");
  if (authGateEl) authGateEl.classList.add("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.remove("hidden");
  refreshNavSessionButtons();
  if (isAdminSessionAuthorized() && !sessionStorage.getItem(ADMIN_LIVE_MODE_KEY)) {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "1");
  }
  activePromoCode = normalizePromoCode(sessionStorage.getItem(PROMO_SESSION_KEY) || "");
  const redeemedPromo = getPromoForCurrentUser(activePromoCode) || getPromoForCurrentUser();
  if (redeemedPromo?.code) {
    activePromoCode = redeemedPromo.code;
    sessionStorage.setItem(PROMO_SESSION_KEY, activePromoCode);
  } else {
    activePromoCode = "";
    sessionStorage.removeItem(PROMO_SESSION_KEY);
  }
  refreshAdminLiveMode();
  startConnectionTimer(sessionEmail);
  applyBackgroundMusicAccess();
  tryConsumeConfiguratorDeepLink();
  tryConsumeAiAdvisorDeepLink();
}

function lockSite() {
  document.documentElement.classList.remove("vb-auth-ok");
  document.body.classList.add("site-locked");
  if (authGateEl) authGateEl.classList.remove("hidden");
  if (userLogoutBtn) userLogoutBtn.classList.add("hidden");
  refreshNavSessionButtons();
  if (adminPanel) adminPanel.classList.add("hidden");
  activePromoCode = "";
  sessionStorage.removeItem(PROMO_SESSION_KEY);
  setPromoFeedback("");
  if (promoCodeInputEl) promoCodeInputEl.value = "";
  closeUserProfilePanel();
  document.body.classList.remove("admin-live-edit");
  if (adminLiveExitBtn) adminLiveExitBtn.classList.add("hidden");
  sessionStorage.removeItem(ADMIN_LIVE_MODE_KEY);
  stopConnectionTimer(true);
  setAdminState(false);
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
    if (!isAdminEmail(existingEmail)) {
      sessionStorage.removeItem(SESSION_KEY);
    }
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

function openConfiguratorSection() {
  configuratorSectionEl.classList.remove("configurator-locked");
}

function enterConfiguratorOnlyMode() {
  openConfiguratorSection();
  document.body.classList.add("config-only");
  configuratorSectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exitConfiguratorOnlyMode(targetSelector) {
  document.body.classList.remove("config-only");
  configuratorSectionEl.classList.add("configurator-locked");
  if (targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function handleAdminDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const sessionEmail = String(sessionStorage.getItem(AUTH_SESSION_KEY) || "").trim().toLowerCase();
  let hasChange = false;

  if (params.get("openAdmin") === "1" && adminPanel && adminToggle) {
    adminPanel.classList.remove("hidden");
    setFeedback("");
    pendingAdminDeepLinkTab = String(params.get("adminTab") || "").trim();
    pendingAdminDeepLinkProcessSubtab = String(params.get("processSubtab") || "").trim();
    const logged = sessionStorage.getItem(SESSION_KEY) === "1" && isAdminEmail(sessionEmail);
    setAdminState(logged);
    if (logged && pendingAdminDeepLinkTab) {
      showAdminEditor();
    }
    params.delete("openAdmin");
    params.delete("adminTab");
    params.delete("processSubtab");
    hasChange = true;
  }

  if (params.get("openProfile") === "1" && isAllowedOutlookEmail(sessionEmail)) {
    openUserProfilePanel();
    params.delete("openProfile");
    hasChange = true;
  }

  if (params.get("openConfigurator") === "1") {
    pendingConfiguratorDeepLink = true;
    params.delete("openConfigurator");
    hasChange = true;
  }

  if (params.get("aiAdvisor") === "1") {
    pendingAiAdvisorDeepLink = true;
    params.delete("aiAdvisor");
    hasChange = true;
  }

  if (!hasChange) return;
  const query = params.toString();
  const cleanUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", cleanUrl);
}

function cloneDefaultContent() {
  return JSON.parse(JSON.stringify(DEFAULT_CONTENT));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeFileName(value, fallback) {
  const cleaned = String(value || "")
    .replace(/[^a-z0-9\-_. ]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
  return cleaned || fallback;
}

function sanitizeId(value, fallback) {
  const cleaned = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || fallback;
}

function formatInfoParagraphs(value) {
  const text = String(value || "").trim();
  if (!text) return "<p>Description produit non renseignée.</p>";
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex > 0) {
        const title = line.slice(0, separatorIndex).trim();
        const content = line.slice(separatorIndex + 1).trim();
        if (title.length >= 2) {
          return `<p><strong>${escapeHtml(title)}:</strong>${content ? ` ${escapeHtml(content)}` : ""}</p>`;
        }
      }
      return `<p>${escapeHtml(line)}</p>`;
    })
    .join("");
}

function formatEuro(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function normalizePriceLabel(value) {
  const raw = String(value || "").trim();
  if (!raw) return "0 €";
  const numeric = Number(raw.replace(/[^0-9,.-]/g, "").replace(",", "."));
  if (Number.isFinite(numeric)) return formatEuro(numeric);
  return raw.includes("€") ? raw : `${raw} €`;
}

function getConfiguratorCategorySelectLabel(label) {
  const raw = String(label || "").trim();
  if (!raw) return "";
  const cleaned = raw.replace(/\s*\([^)]*\)/g, "").replace(/\s{2,}/g, " ").trim();
  return cleaned || raw;
}

function detectGpuTier(text) {
  const value = String(text || "").toLowerCase();
  let score = 0;

  if (/rtx\s*5090/.test(value)) score = Math.max(score, 7);
  if (/rtx\s*5080/.test(value)) score = Math.max(score, 6.8);
  if (/rtx\s*5070\s*ti/.test(value)) score = Math.max(score, 6.3);
  if (/rtx\s*5070/.test(value)) score = Math.max(score, 6);
  if (/rtx\s*4090/.test(value)) score = Math.max(score, 6.6);
  if (/rtx\s*4080/.test(value)) score = Math.max(score, 6.1);
  if (/rtx\s*4070\s*ti/.test(value)) score = Math.max(score, 5.4);
  if (/rtx\s*4070/.test(value)) score = Math.max(score, 5);
  if (/rtx\s*4060\s*ti/.test(value)) score = Math.max(score, 4.2);
  if (/rtx\s*4060/.test(value)) score = Math.max(score, 3.7);
  if (/rtx\s*3070/.test(value)) score = Math.max(score, 3.2);
  if (/rtx\s*3060/.test(value)) score = Math.max(score, 2.6);

  if (/rx\s*7900\s*xtx/.test(value)) score = Math.max(score, 6.2);
  if (/rx\s*7900\s*xt/.test(value)) score = Math.max(score, 5.6);
  if (/rx\s*7800\s*xt/.test(value)) score = Math.max(score, 4.8);
  if (/rx\s*7700\s*xt/.test(value)) score = Math.max(score, 4.2);
  if (/rx\s*7600/.test(value)) score = Math.max(score, 3.3);
  if (/rx\s*6950|rx\s*6900|rx\s*6800/.test(value)) score = Math.max(score, 4.3);
  if (/rx\s*6750|rx\s*6700/.test(value)) score = Math.max(score, 3.5);
  if (/rx\s*6600/.test(value)) score = Math.max(score, 2.4);

  if (/arc\s*a770|arc\s*a780/.test(value)) score = Math.max(score, 2.8);
  if (/arc\s*a750/.test(value)) score = Math.max(score, 2.5);

  return score;
}

function detectCpuTier(text) {
  const value = String(text || "").toLowerCase();
  let score = 1;

  if (/ultra\s*9|i9[-\s]*14900|i9[-\s]*13900|ryzen\s*9\s*9950|ryzen\s*9\s*7950/.test(value)) score = Math.max(score, 7);
  if (/i7[-\s]*14700|i7[-\s]*13700|i5[-\s]*14600|ryzen\s*7\s*7800x3d|ryzen\s*9\s*7900/.test(value)) score = Math.max(score, 6.2);
  if (/i7|i5[-\s]*13600|i5[-\s]*13500|ryzen\s*7\s*7700|ryzen\s*5\s*7600x3d/.test(value)) score = Math.max(score, 5.4);
  if (/i5|i3[-\s]*14100|i3[-\s]*13100|ryzen\s*5\s*7600|ryzen\s*5\s*7500/.test(value)) score = Math.max(score, 4.5);
  if (/i5[-\s]*12400|i5[-\s]*13400|ryzen\s*5\s*5600|ryzen\s*7\s*5700/.test(value)) score = Math.max(score, 3.7);
  if (/i3[-\s]*12100|ryzen\s*5\s*4500|ryzen\s*5\s*4600/.test(value)) score = Math.max(score, 2.8);

  return score;
}

function detectRamBonus(text) {
  const value = String(text || "").toLowerCase();
  if (/128\s*go|128gb/.test(value)) return 0.2;
  if (/96\s*go|96gb|64\s*go|64gb/.test(value)) return 0.14;
  if (/48\s*go|48gb|32\s*go|32gb/.test(value)) return 0.08;
  if (/24\s*go|24gb|16\s*go|16gb/.test(value)) return 0.03;
  return 0;
}

function detectStorageBonus(text) {
  const value = String(text || "").toLowerCase();
  if (/nvme\s*gen\s*5|pcie\s*5/.test(value)) return 0.04;
  if (/nvme|ssd/.test(value)) return 0.025;
  if (/hdd/.test(value)) return -0.015;
  return 0;
}

function inferTierFromPrice(priceValue) {
  const price = Number(priceValue || 0);
  if (price >= 2200) return 4;
  if (price >= 1700) return 3;
  if (price >= 1200) return 2;
  if (price >= 700) return 1;
  return 0;
}

function computeReferenceFingerprint(text) {
  const source = String(text || "").trim().toLowerCase();
  if (!source) return 0;
  let hash = 0;
  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 31 + source.charCodeAt(i)) % 10007;
  }
  return hash;
}

function estimateFpsFromSelection() {
  if (!form) return null;
  const selectedRadios = Array.from(form.querySelectorAll('input[type="radio"][data-config-component="1"]:checked'));
  if (!selectedRadios.length) return null;

  let gpuTier = 0;
  let cpuTier = 1;
  let ramBonus = 0;
  let storageBonus = 0;
  let pricingTier = 0;
  let totalSelectedPrice = 0;
  let referenceFingerprint = 0;

  const isGpuValue = (value) =>
    /(rtx|rx\s*\d|radeon|geforce|arc|5090|5080|5070|4090|4080|4070|4060|7900|7800|7700|7600|6950|6800|6750|3070|3060|6600)/i.test(
      value
    );
  const isCpuValue = (value) =>
    /(intel|core\s*i|ultra|ryzen|x3d|14900|14700|14600|13600|13400|12400|12100|9950|9700|7950|7900|7800|7700|7600|7500|5600)/i.test(
      value
    );
  const isRamValue = (value) => /(go|gb).*(ram|ddr)|ram.*(go|gb)|\b(16|24|32|48|64|96|128)\s*(go|gb)/i.test(value);
  const isStorageValue = (value) => /(nvme|ssd|hdd|pcie\s*5|gen\s*5)/i.test(value);

  selectedRadios.forEach((radio) => {
    const label = String(radio.dataset.label || "").toLowerCase();
    const option = String(radio.dataset.optionName || "");
    const description = String(radio.dataset.optionDescription || "");
    const context = `${label} ${option} ${description}`;
    const optionPrice = Number(radio.value || 0);
    if (/(carte graphique|gpu)/.test(label) || isGpuValue(context)) gpuTier = Math.max(gpuTier, detectGpuTier(context));
    if (/(processeur|cpu)/.test(label) || isCpuValue(context)) cpuTier = Math.max(cpuTier, detectCpuTier(context));
    if (/(memoire|mémoire|ram)/.test(label) || isRamValue(context)) ramBonus = Math.max(ramBonus, detectRamBonus(context));
    if (/(stockage|ssd|nvme|disque)/.test(label) || isStorageValue(context)) {
      storageBonus = Math.max(storageBonus, detectStorageBonus(context));
    }
    totalSelectedPrice += Number.isFinite(optionPrice) ? optionPrice : 0;
    pricingTier = Math.max(pricingTier, inferTierFromPrice(optionPrice));
    referenceFingerprint += computeReferenceFingerprint(`${option}|${description}`);
  });

  const optionsCount = Math.max(1, selectedRadios.length);
  const effectiveGpuTier = Math.max(1, gpuTier);
  const balanceTier = Math.min(effectiveGpuTier, cpuTier);
  const averageSelectedPrice = totalSelectedPrice / optionsCount;
  const priceScale = Math.max(0, Math.min(1.75, averageSelectedPrice / 1600));
  const referenceVariance = (referenceFingerprint % 19) - 9;
  const platformBoost = ramBonus * 120 + storageBonus * 80 + pricingTier * 12;
  const salesBoost = pricingTier * 10 + priceScale * 18;
  const cpuGpuSynergy = Math.max(0, (effectiveGpuTier * cpuTier) / 2.4);

  const fpsByGame = {
    warzone: Math.round(
      12 +
        effectiveGpuTier * 20 +
        cpuTier * 11 +
        balanceTier * 9 +
        cpuGpuSynergy +
        platformBoost +
        salesBoost * 1.1 +
        referenceVariance
    ),
    cyberpunk: Math.round(
      8 +
        effectiveGpuTier * 15 +
        cpuTier * 9 +
        balanceTier * 6.5 +
        cpuGpuSynergy * 0.8 +
        platformBoost * 0.88 +
        salesBoost * 0.85 +
        referenceVariance * 0.7
    ),
    wukong: Math.round(
      6 +
        effectiveGpuTier * 14 +
        cpuTier * 9 +
        balanceTier * 6.4 +
        cpuGpuSynergy * 0.82 +
        platformBoost * 0.82 +
        salesBoost * 0.8 +
        referenceVariance * 0.65
    ),
  };

  return {
    warzone: Math.max(28, Math.min(320, fpsByGame.warzone)),
    cyberpunk: Math.max(24, Math.min(260, fpsByGame.cyberpunk)),
    wukong: Math.max(22, Math.min(240, fpsByGame.wukong)),
  };
}

function updateFpsEstimator() {
  if (!fpsFortniteEl || !fpsWarzoneEl || !fpsGtaEl) return;
  const estimation = estimateFpsFromSelection();
  if (!estimation) {
    fpsFortniteEl.textContent = "-";
    fpsWarzoneEl.textContent = "-";
    fpsGtaEl.textContent = "-";
    return;
  }
  fpsFortniteEl.textContent = `${estimation.warzone} FPS`;
  fpsWarzoneEl.textContent = `${estimation.cyberpunk} FPS`;
  fpsGtaEl.textContent = `${estimation.wukong} FPS`;
}

function normalizeShowcase(showcase) {
  const fallback = DEFAULT_CONTENT.showcase;
  if (!Array.isArray(showcase)) return cloneDefaultContent().showcase;

  return [0, 1, 2].map((index) => {
    const item = showcase[index] || {};
    return {
      title: typeof item.title === "string" ? item.title : fallback[index].title,
      slogan: typeof item.slogan === "string" ? item.slogan : fallback[index].slogan,
      image:
        typeof item.image === "string" && item.image.trim()
          ? item.image
          : fallback[index].image,
    };
  });
}

function normalizeTechnicalSheets(sheets) {
  if (!Array.isArray(sheets)) return cloneDefaultContent().technicalSheets;
  return sheets.slice(0, MAX_TECHNICAL_SHEETS).map((sheet, index) => ({
    title: typeof sheet?.title === "string" && sheet.title.trim() ? sheet.title : `Fiche Technique ${index + 1}`,
    image:
      typeof sheet?.image === "string" && sheet.image.trim()
        ? sheet.image
        : PREMIUM_GALLERY_IMAGES[index % PREMIUM_GALLERY_IMAGES.length],
    fileName: typeof sheet?.fileName === "string" ? sheet.fileName : "",
    fileData: typeof sheet?.fileData === "string" ? sheet.fileData : "",
    fileMime: typeof sheet?.fileMime === "string" ? sheet.fileMime : "application/octet-stream",
    fileKey: typeof sheet?.fileKey === "string" ? sheet.fileKey : "",
  }));
}

function normalizeMachines(machines) {
  if (!Array.isArray(machines)) return cloneDefaultContent().machines;
  const fallback = cloneDefaultContent().machines;
  return machines
    .map((machine, index) => {
      const source = machine && typeof machine === "object" ? machine : {};
      const fallbackMachine = fallback[index % fallback.length];
      const specsSource = Array.isArray(source.specs) ? source.specs : fallbackMachine.specs;
      const specs = specsSource
        .map((spec) => String(spec || "").trim())
        .filter(Boolean);
      const backCommentsSource = Array.isArray(source.backComments)
        ? source.backComments
        : Array.isArray(source.backSpecs)
          ? source.backSpecs
          : [];
      const backComments = Array.from({ length: 8 }).map((_, i) => String(backCommentsSource[i] || "").trim());
      const images = Array.isArray(source.images)
        ? source.images.map((item) => String(item || "").trim()).filter(Boolean)
        : [];
      const singleImage = typeof source.image === "string" ? source.image.trim() : "";
      const mergedImages = images.length ? images : singleImage ? [singleImage] : [];
      const frontName = String(source.name || fallbackMachine.name).trim() || fallbackMachine.name;
      const frontDescription =
        String(source.description || fallbackMachine.description).trim() || fallbackMachine.description;
      const frontPrice = normalizePriceLabel(source.price || fallbackMachine.price);
      const badgeFallback = index === 0 ? "Best-seller" : index === 1 ? "Ultra premium" : "Meilleur rapport perf/prix";
      return {
        name: frontName,
        description: frontDescription,
        specs: specs.length ? specs : [...fallbackMachine.specs],
        price: frontPrice,
        badge: String(source.badge || badgeFallback).trim() || badgeFallback,
        backName:
          String(source.backName || source.modalName || frontName).trim() || frontName,
        backDescription:
          String(source.backDescription || source.modalDescription || frontDescription).trim() || frontDescription,
        backComments,
        image: mergedImages[0] || "",
        images: mergedImages,
        imageSlogan: typeof source.imageSlogan === "string" ? source.imageSlogan : "",
      };
    })
    .filter((item) => item.name);
}

function normalizeAboutVideos(videos) {
  const fallback = cloneDefaultContent().aboutVideos;
  if (!Array.isArray(videos)) return fallback;

  return [0, 1, 2, 3, 4, 5].map((index) => {
    const item = videos[index] || {};
    return {
      title: typeof item.title === "string" && item.title.trim() ? item.title : fallback[index].title,
      fileName: typeof item.fileName === "string" ? item.fileName : "",
      videoData: typeof item.videoData === "string" ? item.videoData : "",
      videoWebm: typeof item.videoWebm === "string" ? item.videoWebm : "",
      videoMime: typeof item.videoMime === "string" ? item.videoMime : "video/mp4",
      videoKey: typeof item.videoKey === "string" ? item.videoKey : "",
    };
  });
}

function normalizeAboutGallery(gallery) {
  const fallback = cloneDefaultContent().aboutGallery;
  const hasGallery = gallery && typeof gallery === "object";
  const safeGallery = hasGallery ? gallery : {};
  const rawSpeed = Number(safeGallery.speed);
  const speed = Number.isFinite(rawSpeed) ? Math.min(80, Math.max(8, Math.round(rawSpeed))) : fallback.speed;
  const direction = safeGallery.direction === "right" ? "right" : "left";
  const watermarkEnabled =
    safeGallery.watermarkEnabled === undefined ? true : Boolean(safeGallery.watermarkEnabled);
  const rawPhotos = Array.isArray(safeGallery.photos) ? safeGallery.photos : hasGallery ? [] : fallback.photos;

  const photos = rawPhotos
    .slice(0, 15)
    .map((item, index) => ({
      title:
        typeof item?.title === "string" && item.title.trim()
          ? item.title.trim()
          : fallback.photos[index % fallback.photos.length].title,
      image:
        typeof item?.image === "string" && item.image.trim()
          ? item.image
          : fallback.photos[index % fallback.photos.length].image,
    }))
    .filter((item) => Boolean(item.image));

  return {
    speed,
    direction,
    watermarkEnabled,
    photos,
  };
}

function normalizeFaqItems(items) {
  const fallback = cloneDefaultContent().faqItems;
  if (!Array.isArray(items) || !items.length) return fallback;

  const normalized = items
    .map((item) => ({
      question: typeof item?.question === "string" ? item.question.trim() : "",
      answer: typeof item?.answer === "string" ? item.answer.trim() : "",
    }))
    .filter((item) => item.question && item.answer);

  return normalized.length ? normalized : fallback;
}

function normalizeGamesCatalog(items) {
  const fallback = cloneDefaultContent().gamesCatalog;
  if (!Array.isArray(items) || !items.length) return fallback;
  const normalized = items
    .map((item, index) => ({
      title:
        typeof item?.title === "string" && item.title.trim()
          ? item.title.trim()
          : `Jeu ${index + 1}`,
      image: typeof item?.image === "string" ? item.image.trim() : "",
      info: typeof item?.info === "string" ? item.info.trim() : "",
    }))
    .filter((item) => item.image);
  return normalized.length ? normalized : fallback;
}

function normalizeMenuBadges(value) {
  const allowed = new Set(["", "nouveau", "promo", "hot"]);
  const base = DEFAULT_CONTENT.menuBadges || {};
  const source = value && typeof value === "object" ? value : {};
  const output = {};
  MENU_BADGE_KEYS.forEach((key) => {
    const rawValue = String(source[key] ?? base[key] ?? "").trim();
    const rawLower = rawValue.toLowerCase();
    if (!rawValue) {
      output[key] = "";
      return;
    }
    output[key] = allowed.has(rawLower) ? rawLower : rawValue.slice(0, 18);
  });
  return output;
}

function normalizeSupportSav(value) {
  const fallback = cloneDefaultContent().supportSav;
  const source = value && typeof value === "object" ? value : {};
  const cards = (Array.isArray(source.cards) ? source.cards : fallback.cards)
    .map((item, index) => ({
      title:
        typeof item?.title === "string" && item.title.trim()
          ? item.title.trim()
          : fallback.cards[index % fallback.cards.length].title,
      text:
        typeof item?.text === "string" && item.text.trim()
          ? item.text.trim()
          : fallback.cards[index % fallback.cards.length].text,
      ctaLabel:
        typeof item?.ctaLabel === "string" && item.ctaLabel.trim()
          ? item.ctaLabel.trim()
          : fallback.cards[index % fallback.cards.length].ctaLabel,
    }))
    .filter((item) => item.title || item.text || item.ctaLabel);
  const steps = (Array.isArray(source.steps) ? source.steps : fallback.steps)
    .map((item, index) => ({
      title:
        typeof item?.title === "string" && item.title.trim()
          ? item.title.trim()
          : fallback.steps[index % fallback.steps.length].title,
      text:
        typeof item?.text === "string" && item.text.trim()
          ? item.text.trim()
          : fallback.steps[index % fallback.steps.length].text,
    }))
    .filter((item) => item.title || item.text);
  const faq = (Array.isArray(source.faq) ? source.faq : fallback.faq)
    .map((item) => ({
      question: typeof item?.question === "string" ? item.question.trim() : "",
      answer: typeof item?.answer === "string" ? item.answer.trim() : "",
    }))
    .filter((item) => item.question && item.answer);

  return {
    badge: typeof source.badge === "string" && source.badge.trim() ? source.badge.trim() : fallback.badge,
    title: typeof source.title === "string" && source.title.trim() ? source.title.trim() : fallback.title,
    subtitle: typeof source.subtitle === "string" && source.subtitle.trim() ? source.subtitle.trim() : fallback.subtitle,
    telegramUrl:
      typeof source.telegramUrl === "string" && source.telegramUrl.trim() ? source.telegramUrl.trim() : fallback.telegramUrl,
    cards: cards.length ? cards : fallback.cards,
    steps: steps.length ? steps : fallback.steps,
    faq: faq.length ? faq : fallback.faq,
  };
}

function mergeDefaultFaqItems(existingItems) {
  const defaults = cloneDefaultContent().faqItems;
  const existing = Array.isArray(existingItems) ? existingItems : [];
  const keyOf = (item) => String(item?.question || "").trim().toLowerCase();
  const seen = new Set(existing.map((item) => keyOf(item)).filter(Boolean));
  const merged = existing.slice();
  defaults.forEach((item) => {
    const key = keyOf(item);
    if (!key || seen.has(key)) return;
    merged.push({ question: item.question, answer: item.answer });
    seen.add(key);
  });
  return merged;
}

function normalizeProcessFiles(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      title:
        typeof item?.title === "string" && item.title.trim()
          ? item.title.trim()
          : `Dossier confidentiel ${index + 1}`,
      fileName: typeof item?.fileName === "string" ? item.fileName : "",
      fileData: typeof item?.fileData === "string" ? item.fileData : "",
      // Compat legacy: some versions stored install files under `path`.
      path: typeof item?.path === "string" ? item.path.replace(/^\/+/, "") : "",
      fileMime: typeof item?.fileMime === "string" ? item.fileMime : "application/pdf",
    }))
    .filter((item) => item.title);
}

function resolveProcessFileHref(item) {
  if (!item || typeof item !== "object") return "";
  const direct = String(item.fileData || "").trim();
  if (direct) return direct;
  const rawPath = String(item.path || "").trim().replace(/^\/+/, "");
  if (!rawPath) return "";
  return `/${rawPath}`;
}

function inferProcessFileName(item, index = 0) {
  const explicit = String(item?.fileName || "").trim();
  if (explicit) return explicit;
  const href = resolveProcessFileHref(item);
  if (!href) return `dossier-confidentiel-${index + 1}.pdf`;
  const fromPath = href.split("/").pop() || "";
  return fromPath || `dossier-confidentiel-${index + 1}.pdf`;
}

function inferProcessFileMime(fileName, fallback = "application/pdf") {
  const lower = String(fileName || "").toLowerCase();
  if (lower.endsWith(".zip")) return "application/zip";
  if (lower.endsWith(".rar")) return "application/vnd.rar";
  if (lower.endsWith(".pdf")) return "application/pdf";
  return fallback;
}

function normalizeProcessPurchases(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      label:
        typeof item?.label === "string" && item.label.trim()
          ? item.label.trim()
          : `Lien achat ${index + 1}`,
      url: typeof item?.url === "string" ? item.url.trim() : "",
    }))
    .filter((item) => item.label || item.url);
}

function normalizeProcessGamesFiles(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      const rawPath = typeof item?.path === "string" ? item.path.trim() : "";
      const normalizedPath = rawPath.replace(/^\/+/, "");
      const fallbackName = normalizedPath.split("/").pop() || `games-${index + 1}.zip`;
      const fallbackTitle = fallbackName.replace(/\.zip$/i, "") || `Archive Games ${index + 1}`;
      return {
        title: typeof item?.title === "string" && item.title.trim() ? item.title.trim() : fallbackTitle,
        path: normalizedPath,
        fileName: typeof item?.fileName === "string" && item.fileName.trim() ? item.fileName.trim() : fallbackName,
        sizeBytes: Math.max(0, Number(item?.sizeBytes) || 0),
        createdAt: typeof item?.createdAt === "string" && item.createdAt.trim() ? item.createdAt.trim() : "",
      };
    })
    .filter((item) => item.path && /\.zip$/i.test(item.fileName || item.path));
}

function normalizeProcessGamesAssignments(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      const path = String(item?.filePath || item?.path || "").trim().replace(/^\/+/, "");
      const fileName = String(item?.fileName || path.split("/").pop() || `games-${index + 1}.zip`).trim();
      const email = String(item?.email || "").trim().toLowerCase();
      const title = String(item?.title || fileName.replace(/\.zip$/i, "") || `Fichier Games ${index + 1}`).trim();
      return {
        id: String(item?.id || `ga-${Date.now()}-${index + 1}`).trim(),
        email,
        filePath: path,
        fileName,
        title,
        maxDownloads: Math.max(1, Math.round(Number(item?.maxDownloads) || 1)),
        downloadCount: Math.max(0, Math.round(Number(item?.downloadCount) || 0)),
        expiresAt: String(item?.expiresAt || "").trim(),
        assignedAt: String(item?.assignedAt || "").trim() || new Date().toISOString(),
        lastDownloadAt: String(item?.lastDownloadAt || "").trim(),
        revoked: Boolean(item?.revoked),
      };
    })
    .filter((item) => item.email && item.filePath);
}

function getGamesAssignmentStatus(item, email = "") {
  const safeItem = item || {};
  const now = Date.now();
  const targetEmail = String(email || "").trim().toLowerCase();
  if (targetEmail && String(safeItem.email || "").trim().toLowerCase() !== targetEmail) {
    return "forbidden";
  }
  if (safeItem.revoked) return "revoked";
  const expiresAt = String(safeItem.expiresAt || "").trim();
  if (expiresAt) {
    const expiresMs = new Date(expiresAt).getTime();
    if (!Number.isNaN(expiresMs) && expiresMs < now) return "expired";
  }
  const maxDownloads = Math.max(1, Math.round(Number(safeItem.maxDownloads) || 1));
  const downloadCount = Math.max(0, Math.round(Number(safeItem.downloadCount) || 0));
  if (downloadCount >= maxDownloads) return "completed";
  return "available";
}

function formatGamesAssignmentStatus(status) {
  if (status === "available") return "Disponible";
  if (status === "completed") return "Téléchargé";
  if (status === "expired") return "Expiré";
  if (status === "revoked") return "Révoqué";
  return "Bloqué";
}

function normalizeProcessLinkSectionEntries(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      label:
        typeof item?.label === "string" && item.label.trim()
          ? item.label.trim()
          : `Entrée ${index + 1}`,
      url: typeof item?.url === "string" ? item.url.trim() : "",
    }))
    .filter((item) => item.label || item.url);
}

function normalizeCrmLeads(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      id:
        typeof item?.id === "string" && item.id.trim()
          ? item.id.trim()
          : `crm-${Date.now()}-${index + 1}`,
      name:
        typeof item?.name === "string" && item.name.trim()
          ? item.name.trim()
          : typeof item?.label === "string" && item.label.trim()
            ? item.label.trim()
            : `Prospect ${index + 1}`,
      email: typeof item?.email === "string" ? item.email.trim().toLowerCase() : "",
      phone: typeof item?.phone === "string" ? item.phone.trim() : "",
      source: typeof item?.source === "string" && item.source.trim() ? item.source.trim() : "Site",
      status:
        typeof item?.status === "string" && CRM_STATUSES.includes(item.status.trim())
          ? item.status.trim()
          : "Nouveau",
      budget: Math.max(0, Number(item?.budget) || 0),
      dealValue: Math.max(0, Number(item?.dealValue) || 0),
      owner: typeof item?.owner === "string" && item.owner.trim() ? item.owner.trim() : "Administrateur",
      priority:
        typeof item?.priority === "string" && CRM_PRIORITIES.includes(item.priority.trim())
          ? item.priority.trim()
          : "Normale",
      nextReminder: typeof item?.nextReminder === "string" ? item.nextReminder.trim() : "",
      configRef: typeof item?.configRef === "string" ? item.configRef.trim() : "",
      lostReason: typeof item?.lostReason === "string" ? item.lostReason.trim() : "",
      note: typeof item?.note === "string" ? item.note.trim() : "",
      activities: Array.isArray(item?.activities)
        ? item.activities
            .map((activity) => ({
              at: typeof activity?.at === "string" ? activity.at : new Date().toISOString(),
              text: typeof activity?.text === "string" ? activity.text.trim() : "",
            }))
            .filter((activity) => activity.text)
        : [],
      orderNumber: typeof item?.orderNumber === "string" ? item.orderNumber.trim() : "",
      orderCreatedAt: typeof item?.orderCreatedAt === "string" ? item.orderCreatedAt : "",
      createdAt: typeof item?.createdAt === "string" ? item.createdAt : new Date().toISOString(),
      updatedAt: typeof item?.updatedAt === "string" ? item.updatedAt : new Date().toISOString(),
    }))
    .filter((item) => item.name || item.email || item.phone || item.note);
}

function normalizeStockItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      const quantity = Math.max(0, Math.round(Number(item?.quantity) || 0));
      const buyPrice = Math.max(0, Number(item?.buyPrice) || 0);
      const salePrice = Math.max(0, Number(item?.salePrice) || 0);
      return {
        name:
          typeof item?.name === "string" && item.name.trim()
            ? item.name.trim()
            : typeof item?.label === "string" && item.label.trim()
              ? item.label.trim()
            : `Produit ${index + 1}`,
        quantity,
        buyPrice,
        salePrice,
      };
    })
    .filter((item) => item.name);
}

function normalizeSupplierOrders(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      firstName:
        typeof item?.firstName === "string" && item.firstName.trim()
          ? item.firstName.trim()
          : `Prénom ${index + 1}`,
      lastName: typeof item?.lastName === "string" ? item.lastName.trim() : "",
      address: typeof item?.address === "string" ? item.address.trim() : "",
      postalCode: typeof item?.postalCode === "string" ? item.postalCode.trim() : "",
      city: typeof item?.city === "string" ? item.city.trim() : "",
      phone: typeof item?.phone === "string" ? item.phone.trim() : "",
    }))
    .filter((item) => item.firstName || item.lastName || item.address || item.postalCode || item.city || item.phone);
}

function normalizeDeliveryItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      firstName:
        typeof item?.firstName === "string" && item.firstName.trim()
          ? item.firstName.trim()
          : `Prénom ${index + 1}`,
      lastName: typeof item?.lastName === "string" ? item.lastName.trim() : "",
      orderNumber:
        typeof item?.orderNumber === "string" && item.orderNumber.trim()
          ? item.orderNumber.trim()
          : typeof item?.label === "string" && item.label.trim()
            ? item.label.trim()
          : `CMD-${index + 1}`,
      fees: Math.max(0, Number(item?.fees) || 0),
    }))
    .filter((item) => item.firstName || item.lastName || item.orderNumber || Number(item.fees) > 0);
}

function normalizeSavItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => ({
      firstName:
        typeof item?.firstName === "string" && item.firstName.trim()
          ? item.firstName.trim()
          : `Prénom ${index + 1}`,
      lastName: typeof item?.lastName === "string" ? item.lastName.trim() : "",
      address: typeof item?.address === "string" ? item.address.trim() : "",
      postalCode: typeof item?.postalCode === "string" ? item.postalCode.trim() : "",
      city: typeof item?.city === "string" ? item.city.trim() : "",
      machineType:
        typeof item?.machineType === "string" && item.machineType.trim()
          ? item.machineType.trim()
          : typeof item?.label === "string" && item.label.trim()
            ? item.label.trim()
            : "",
      problem: typeof item?.problem === "string" ? item.problem.trim() : "",
      resolution: typeof item?.resolution === "string" ? item.resolution.trim() : "",
      returned: Boolean(item?.returned),
    }))
    .filter(
      (item) =>
        item.firstName ||
        item.lastName ||
        item.address ||
        item.postalCode ||
        item.city ||
        item.machineType ||
        item.problem ||
        item.resolution ||
        item.returned
    );
}

function normalizeReviews(items) {
  const fallback = cloneDefaultContent().reviews;
  if (!Array.isArray(items) || !items.length) return fallback;

  const normalized = items
    .map((item) => ({
      author: typeof item?.author === "string" ? item.author.trim() : "",
      rating: Math.min(5, Math.max(1, Number(item?.rating) || 5)),
      text: typeof item?.text === "string" ? item.text.trim() : "",
      approved: item?.approved === undefined ? true : Boolean(item.approved),
      userEmail: typeof item?.userEmail === "string" ? item.userEmail.trim().toLowerCase() : "",
      createdAt: typeof item?.createdAt === "string" ? item.createdAt : "",
    }))
    .filter((item) => item.author && item.text);

  return normalized.length ? normalized : fallback;
}

function mergeDefaultReviews(existingReviews) {
  const defaults = cloneDefaultContent().reviews;
  const existing = Array.isArray(existingReviews) ? existingReviews : [];
  const keyOf = (item) => `${String(item.author || "").trim().toLowerCase()}::${String(item.text || "").trim().toLowerCase()}`;
  const seen = new Set(existing.map((item) => keyOf(item)));
  const merged = [...existing];

  defaults.forEach((item) => {
    const key = keyOf(item);
    if (seen.has(key)) return;
    merged.push(item);
    seen.add(key);
  });

  return merged;
}

function normalizeConfigurator(configurator) {
  const fallback = cloneDefaultContent().configurator;
  if (!configurator || !Array.isArray(configurator.components) || !Array.isArray(configurator.services)) {
    return fallback;
  }

  const components = configurator.components
    .map((component, cIndex) => {
      const fallbackLabel = fallback.components[cIndex]?.label || `Catégorie ${cIndex + 1}`;
      const rawLabel = typeof component?.label === "string" ? component.label.trim() : "";
      const label = rawLabel || fallbackLabel;
      const id = sanitizeId(component?.id || label, `categorie-${cIndex + 1}`);
      const options = Array.isArray(component?.options)
        ? component.options
            .map((option, oIndex) => ({
              name:
                typeof option?.name === "string" && option.name.trim()
                  ? option.name
                  : `Produit ${oIndex + 1}`,
              price: Number.isFinite(Number(option?.price)) ? Number(option.price) : 0,
              image: typeof option?.image === "string" && option.image.trim() ? option.image : "",
              description: typeof option?.description === "string" ? option.description.trim() : "",
            }))
            .filter((option) => option.name)
        : [];

      return {
        id,
        label,
        options: options.length ? options : [{ name: "Produit", price: 0, image: "" }],
      };
    })
    .filter((component) => component.label);

  const services = configurator.services
    .map((service, sIndex) => ({
      id: sanitizeId(service?.id || service?.label, `service-${sIndex + 1}`),
      label:
        typeof service?.label === "string" && service.label.trim()
          ? service.label
          : `Service ${sIndex + 1}`,
      price: Number.isFinite(Number(service?.price)) ? Number(service.price) : 0,
      checked: Boolean(service?.checked),
      description: typeof service?.description === "string" ? service.description.trim() : "",
    }))
    .filter((service) => service.label);

  const visualImages = Array.isArray(configurator.visualImages)
    ? [0, 1, 2].map((i) =>
        typeof configurator.visualImages[i] === "string" && configurator.visualImages[i].trim()
          ? configurator.visualImages[i]
          : PREMIUM_GALLERY_IMAGES[i]
      )
    : [
        typeof configurator.visualImage === "string" && configurator.visualImage.trim()
          ? configurator.visualImage
          : PREMIUM_GALLERY_IMAGES[0],
        PREMIUM_GALLERY_IMAGES[1],
        PREMIUM_GALLERY_IMAGES[2],
      ];

  const categoryFillImage =
    typeof configurator.categoryFillImage === "string" && configurator.categoryFillImage.trim()
      ? configurator.categoryFillImage
      : "";
  const categoryFillImageSecondary =
    typeof configurator.categoryFillImageSecondary === "string" && configurator.categoryFillImageSecondary.trim()
      ? configurator.categoryFillImageSecondary
      : "";
  const summaryTelegramImage =
    typeof configurator.summaryTelegramImage === "string" && configurator.summaryTelegramImage.trim()
      ? configurator.summaryTelegramImage
      : "";

  return {
    visualImages,
    categoryFillImage,
    categoryFillImageSecondary,
    summaryTelegramImage,
    components: components.length ? components : fallback.components,
    services,
  };
}

function createEmptyMachine() {
  return {
    name: "Nouveau build",
    description: "Description à compléter.",
    badge: "Best-seller",
    specs: ["CPU: "],
    price: "0 €",
    backName: "Verso build",
    backDescription: "Description verso à compléter.",
    backComments: Array(8).fill(""),
    image: "",
    images: [],
    imageSlogan: "",
  };
}

function ensureMachineBackFields(machine) {
  if (!machine || typeof machine !== "object") return machine;
  const frontName = String(machine.name || "").trim();
  const frontDescription = String(machine.description || "").trim();
  const frontPrice = normalizePriceLabel(machine.price || "0 €");
  machine.price = frontPrice;
  if (!String(machine.badge || "").trim()) machine.badge = "Best-seller";
  if (!String(machine.backName || "").trim()) machine.backName = frontName;
  if (!String(machine.backDescription || "").trim()) machine.backDescription = frontDescription;
  const commentsSource = Array.isArray(machine.backComments)
    ? machine.backComments
    : Array.isArray(machine.backSpecs)
      ? machine.backSpecs
      : [];
  machine.backComments = Array.from({ length: 8 }).map((_, i) => String(commentsSource[i] || "").trim());
  return machine;
}

function getMachineImages(machine) {
  if (!machine || typeof machine !== "object") return [];
  const images = Array.isArray(machine.images)
    ? machine.images.map((item) => String(item || "").trim()).filter(Boolean)
    : [];
  if (images.length) return images;
  const single = typeof machine.image === "string" ? machine.image.trim() : "";
  return single ? [single] : [];
}

function setMachineImages(machine, images) {
  if (!machine || typeof machine !== "object") return;
  const clean = (Array.isArray(images) ? images : []).map((item) => String(item || "").trim()).filter(Boolean);
  machine.images = clean;
  machine.image = clean[0] || "";
}

function createEmptyTechnicalSheet() {
  return {
    title: "Nouvelle fiche technique",
    image: "",
    fileName: "",
    fileData: "",
    fileMime: "application/octet-stream",
    fileKey: "",
  };
}

function createEmptyComponentCategory(index) {
  return {
    id: `categorie-${index + 1}`,
    label: `Catégorie ${index + 1}`,
    options: [
      { name: "Nouveau produit 1", price: 0, image: "", description: "" },
      { name: "Nouveau produit 2", price: 0, image: "", description: "" },
      { name: "Nouveau produit 3", price: 0, image: "", description: "" },
    ],
  };
}

function createEmptyService(index) {
  return {
    id: `service-${index + 1}`,
    label: `Nouveau service`,
    price: 0,
    checked: false,
    description: "Description du service (bouton i).",
  };
}

function createEmptyFaqItem() {
  return { question: "Nouvelle question", answer: "Nouvelle réponse." };
}

function createEmptySupportCard() {
  return {
    title: "Nouveau bloc support",
    text: "Décrivez ce service support.",
    ctaLabel: "En savoir plus",
  };
}

function createEmptySupportStep(index) {
  return {
    title: `${index + 1}. Nouvelle étape`,
    text: "Décrivez cette étape.",
  };
}

function createEmptyReviewItem() {
  return {
    author: "Nouveau client",
    rating: 5,
    text: "Votre avis ici.",
    approved: false,
    userEmail: "",
    createdAt: "",
  };
}

function createEmptyProcessFileItem(index) {
  return {
    title: `Dossier confidentiel ${index + 1}`,
    fileName: "",
    fileData: "",
    fileMime: "application/pdf",
  };
}

function createEmptyProcessLinkItem(index) {
  return {
    label: `Lien achat ${index + 1}`,
    url: "",
  };
}

function createEmptyCrmLead(index) {
  const nowIso = new Date().toISOString();
  return {
    id: `crm-${Date.now()}-${index + 1}`,
    name: `Prospect ${index + 1}`,
    email: "",
    phone: "",
    source: "Site",
    status: "Nouveau",
    budget: 0,
    dealValue: 0,
    owner: "Administrateur",
    priority: "Normale",
    nextReminder: "",
    configRef: "",
    lostReason: "",
    note: "",
    activities: [],
    orderNumber: "",
    orderCreatedAt: "",
    createdAt: nowIso,
    updatedAt: nowIso,
  };
}

function createEmptyStockItem(index) {
  return {
    name: `Produit ${index + 1}`,
    quantity: 0,
    buyPrice: 0,
    salePrice: 0,
  };
}

function createEmptySupplierOrder(index) {
  return {
    firstName: `Prénom ${index + 1}`,
    lastName: `Nom ${index + 1}`,
    address: "",
    postalCode: "",
    city: "",
    phone: "",
  };
}

function createEmptyDeliveryItem(index) {
  return {
    firstName: `Prénom ${index + 1}`,
    lastName: `Nom ${index + 1}`,
    orderNumber: `CMD-${index + 1}`,
    fees: 0,
  };
}

function createEmptySavItem(index) {
  return {
    firstName: `Prénom ${index + 1}`,
    lastName: `Nom ${index + 1}`,
    address: "",
    postalCode: "",
    city: "",
    machineType: "",
    problem: "",
    resolution: "",
    returned: false,
  };
}

function normalizeLegalContent(legal) {
  const base = DEFAULT_CONTENT.legal;
  const source = legal && typeof legal === "object" ? legal : {};
  const canonicalByKey = {
    mentions: "Mentions légales",
    cgv: "Conditions générales de vente",
    rgpd: "Politique de confidentialité RGPD",
    cookies: "Gestion des cookies",
  };
  const toAscii = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const fixLegalLabel = (key, value, fallback) => {
    const raw = String(value || fallback || "").trim();
    const normalized = toAscii(raw);
    if (!normalized) return canonicalByKey[key] || fallback;
    if (key === "mentions" && /mention/.test(normalized) && /legal/.test(normalized)) return canonicalByKey.mentions;
    if (key === "cgv" && /condition/.test(normalized) && /general/.test(normalized) && /vente/.test(normalized)) {
      return canonicalByKey.cgv;
    }
    if (key === "rgpd" && (/politique/.test(normalized) || /confidentialite/.test(normalized)) && /rgpd/.test(normalized)) {
      return canonicalByKey.rgpd;
    }
    if (key === "cookies" && /cookie/.test(normalized) && /gestion/.test(normalized)) return canonicalByKey.cookies;
    return raw;
  };
  const normalizeBlock = (key, block, fallback) => {
    const current = block && typeof block === "object" ? block : {};
    return {
      label: fixLegalLabel(key, current.label || fallback.label, fallback.label),
      title: fixLegalLabel(key, current.title || fallback.title, fallback.title),
      content: String(current.content || fallback.content).trim() || fallback.content,
    };
  };
  return {
    mentions: normalizeBlock("mentions", source.mentions, base.mentions),
    cgv: normalizeBlock("cgv", source.cgv, base.cgv),
    rgpd: normalizeBlock("rgpd", source.rgpd, base.rgpd),
    cookies: normalizeBlock("cookies", source.cookies, base.cookies),
  };
}

function loadContent() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return cloneDefaultContent();

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed.machines) || !parsed.heroTitle || !parsed.machinesTitle) {
      return cloneDefaultContent();
    }

    let changed = false;

    if (LEGACY_HERO_TITLES.includes(parsed.heroTitle)) {
      parsed.heroTitle = DEFAULT_CONTENT.heroTitle;
      changed = true;
    }

    const normalizedMachines = normalizeMachines(parsed.machines);
    if (JSON.stringify(normalizedMachines) !== JSON.stringify(parsed.machines || [])) {
      parsed.machines = normalizedMachines;
      changed = true;
    }

    const normalizedShowcase = normalizeShowcase(parsed.showcase);
    if (JSON.stringify(normalizedShowcase) !== JSON.stringify(parsed.showcase)) {
      parsed.showcase = normalizedShowcase;
      changed = true;
    }

    const normalizedSheets = normalizeTechnicalSheets(parsed.technicalSheets);
    if (JSON.stringify(normalizedSheets) !== JSON.stringify(parsed.technicalSheets || [])) {
      parsed.technicalSheets = normalizedSheets;
      changed = true;
    }

    const normalizedAboutVideos = normalizeAboutVideos(parsed.aboutVideos);
    if (JSON.stringify(normalizedAboutVideos) !== JSON.stringify(parsed.aboutVideos || [])) {
      parsed.aboutVideos = normalizedAboutVideos;
      changed = true;
    }

    const normalizedAboutGallery = normalizeAboutGallery(parsed.aboutGallery);
    if (JSON.stringify(normalizedAboutGallery) !== JSON.stringify(parsed.aboutGallery || {})) {
      parsed.aboutGallery = normalizedAboutGallery;
      changed = true;
    }

    const normalizedFaqItems = normalizeFaqItems(parsed.faqItems);
    if (JSON.stringify(normalizedFaqItems) !== JSON.stringify(parsed.faqItems || [])) {
      parsed.faqItems = normalizedFaqItems;
      changed = true;
    }

    const normalizedSupportSav = normalizeSupportSav(parsed.supportSav);
    if (JSON.stringify(normalizedSupportSav) !== JSON.stringify(parsed.supportSav || {})) {
      parsed.supportSav = normalizedSupportSav;
      changed = true;
    }

    if (parsed.faqSeedVersion !== FAQ_SEED_VERSION) {
      const mergedFaqItems = mergeDefaultFaqItems(parsed.faqItems);
      if (JSON.stringify(mergedFaqItems) !== JSON.stringify(parsed.faqItems || [])) {
        parsed.faqItems = mergedFaqItems;
      }
      parsed.faqSeedVersion = FAQ_SEED_VERSION;
      changed = true;
    }

    const normalizedProcessFiles = normalizeProcessFiles(parsed.processus?.files);
    const normalizedProcessPurchases = normalizeProcessPurchases(parsed.processus?.purchases);
    const normalizedProcessCrmLeads = normalizeCrmLeads(parsed.processus?.crmLeads);
    const normalizedProcessGamesFiles = normalizeProcessGamesFiles(parsed.processus?.gamesFiles);
    const normalizedProcessGamesAssignments = normalizeProcessGamesAssignments(parsed.processus?.gamesAssignments);
    const suppliersSource =
      Array.isArray(parsed.processus?.suppliersOrders) && parsed.processus.suppliersOrders.length
        ? parsed.processus.suppliersOrders
        : parsed.processus?.suppliersLinks;
    const normalizedProcessSuppliersOrders = normalizeSupplierOrders(suppliersSource);
    const stockSource =
      Array.isArray(parsed.processus?.stockItems) && parsed.processus.stockItems.length
        ? parsed.processus.stockItems
        : parsed.processus?.stockLinks;
    const normalizedProcessStockItems = normalizeStockItems(stockSource);
    const savSource =
      Array.isArray(parsed.processus?.savItems) && parsed.processus.savItems.length
        ? parsed.processus.savItems
        : parsed.processus?.savLinks;
    const normalizedProcessSavItems = normalizeSavItems(savSource);
    const deliverySource =
      Array.isArray(parsed.processus?.deliveryItems) && parsed.processus.deliveryItems.length
        ? parsed.processus.deliveryItems
        : parsed.processus?.deliveryLinks;
    const normalizedProcessDeliveryItems = normalizeDeliveryItems(deliverySource);
    const hasLegacyDeliveryLinks =
      Array.isArray(parsed.processus?.deliveryLinks) && parsed.processus.deliveryLinks.length > 0;
    const hasLegacySavLinks =
      Array.isArray(parsed.processus?.savLinks) && parsed.processus.savLinks.length > 0;
    if (
      JSON.stringify(normalizedProcessFiles) !== JSON.stringify(parsed.processus?.files || []) ||
      JSON.stringify(normalizedProcessPurchases) !== JSON.stringify(parsed.processus?.purchases || []) ||
      JSON.stringify(normalizedProcessCrmLeads) !== JSON.stringify(parsed.processus?.crmLeads || []) ||
      JSON.stringify(normalizedProcessGamesFiles) !== JSON.stringify(parsed.processus?.gamesFiles || []) ||
      JSON.stringify(normalizedProcessGamesAssignments) !== JSON.stringify(parsed.processus?.gamesAssignments || []) ||
      JSON.stringify(normalizedProcessSuppliersOrders) !== JSON.stringify(parsed.processus?.suppliersOrders || []) ||
      JSON.stringify(normalizedProcessStockItems) !== JSON.stringify(parsed.processus?.stockItems || []) ||
      JSON.stringify(normalizedProcessSavItems) !== JSON.stringify(parsed.processus?.savItems || []) ||
      JSON.stringify(normalizedProcessDeliveryItems) !== JSON.stringify(parsed.processus?.deliveryItems || []) ||
      hasLegacySavLinks ||
      hasLegacyDeliveryLinks
    ) {
      parsed.processus = {
        files: normalizedProcessFiles,
        purchases: normalizedProcessPurchases,
        crmLeads: normalizedProcessCrmLeads,
        gamesFiles: normalizedProcessGamesFiles,
        gamesAssignments: normalizedProcessGamesAssignments,
        suppliersOrders: normalizedProcessSuppliersOrders,
        stockItems: normalizedProcessStockItems,
        savItems: normalizedProcessSavItems,
        deliveryItems: normalizedProcessDeliveryItems,
      };
      changed = true;
    }

    const normalizedReviews = normalizeReviews(parsed.reviews);
    if (JSON.stringify(normalizedReviews) !== JSON.stringify(parsed.reviews || [])) {
      parsed.reviews = normalizedReviews;
      changed = true;
    }

    const mergedReviews = mergeDefaultReviews(parsed.reviews);
    if (JSON.stringify(mergedReviews) !== JSON.stringify(parsed.reviews || [])) {
      parsed.reviews = mergedReviews;
      changed = true;
    }

    const normalizedConfigurator = normalizeConfigurator(parsed.configurator);
    if (JSON.stringify(normalizedConfigurator) !== JSON.stringify(parsed.configurator || {})) {
      parsed.configurator = normalizedConfigurator;
      changed = true;
    }

    const normalizedFooterEmail = String(parsed.footerContactEmail || DEFAULT_CONTENT.footerContactEmail).trim();
    if (normalizedFooterEmail !== String(parsed.footerContactEmail || "")) {
      parsed.footerContactEmail = normalizedFooterEmail;
      changed = true;
    }

    const normalizedLegal = normalizeLegalContent(parsed.legal);
    if (JSON.stringify(normalizedLegal) !== JSON.stringify(parsed.legal || {})) {
      parsed.legal = normalizedLegal;
      changed = true;
    }

    const normalizedNavTheme = ["aurora", "frost", "obsidian"].includes(String(parsed.navTheme || "").trim())
      ? String(parsed.navTheme || "").trim()
      : DEFAULT_CONTENT.navTheme;
    if (normalizedNavTheme !== String(parsed.navTheme || "")) {
      parsed.navTheme = normalizedNavTheme;
      changed = true;
    }

    const normalizedMenuBadges = normalizeMenuBadges(parsed.menuBadges);
    if (JSON.stringify(normalizedMenuBadges) !== JSON.stringify(parsed.menuBadges || {})) {
      parsed.menuBadges = normalizedMenuBadges;
      changed = true;
    }

    const normalizedGamesCatalog = normalizeGamesCatalog(parsed.gamesCatalog);
    if (JSON.stringify(normalizedGamesCatalog) !== JSON.stringify(parsed.gamesCatalog || [])) {
      parsed.gamesCatalog = normalizedGamesCatalog;
      changed = true;
    }

    const fallbackAdminPhoto = String(localStorage.getItem(ADMIN_PROFILE_PHOTO_KEY) || "");
    const normalizedAdminProfileReviewPhoto =
      typeof parsed.adminProfileReviewPhoto === "string"
        ? parsed.adminProfileReviewPhoto
        : fallbackAdminPhoto;
    if (normalizedAdminProfileReviewPhoto !== String(parsed.adminProfileReviewPhoto || "")) {
      parsed.adminProfileReviewPhoto = normalizedAdminProfileReviewPhoto;
      changed = true;
    }
    if (normalizedAdminProfileReviewPhoto && fallbackAdminPhoto !== normalizedAdminProfileReviewPhoto) {
      localStorage.setItem(ADMIN_PROFILE_PHOTO_KEY, normalizedAdminProfileReviewPhoto);
    }

    if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));

    return parsed;
  } catch (error) {
    return cloneDefaultContent();
  }
}

async function hydrateContentFromDiskIfMissing() {
  const rawStored = localStorage.getItem(STORAGE_KEY);
  let parsedStored = null;
  let shouldHydrate = !rawStored;
  let storedHasMedia = false;

  const countMediaEntries = (content) => {
    if (!content || typeof content !== "object") return 0;
    let count = 0;
    if (Array.isArray(content.showcase)) {
      count += content.showcase.filter((item) => typeof item?.image === "string" && item.image.trim()).length;
    }
    if (Array.isArray(content.technicalSheets)) {
      count += content.technicalSheets.filter((item) => typeof item?.image === "string" && item.image.trim()).length;
    }
    if (Array.isArray(content.aboutVideos)) {
      count += content.aboutVideos.filter((item) => {
        const data = typeof item?.videoData === "string" ? item.videoData.trim() : "";
        const key = typeof item?.videoKey === "string" ? item.videoKey.trim() : "";
        return Boolean(data || key);
      }).length;
    }
    const galleryPhotos = Array.isArray(content.aboutGallery?.photos) ? content.aboutGallery.photos : [];
    count += galleryPhotos.filter((item) => typeof item?.image === "string" && item.image.trim()).length;
    if (Array.isArray(content.configurator?.images)) {
      count += content.configurator.images.filter((image) => typeof image === "string" && image.trim()).length;
    }
    return count;
  };

  if (!shouldHydrate) {
    try {
      parsedStored = JSON.parse(rawStored);
      const hasRequiredStructure =
        parsedStored &&
        typeof parsedStored === "object" &&
        Array.isArray(parsedStored.machines) &&
        Array.isArray(parsedStored.showcase) &&
        Array.isArray(parsedStored.technicalSheets);
      if (!hasRequiredStructure) {
        shouldHydrate = true;
      } else {
        storedHasMedia = countMediaEntries(parsedStored) > 0;
      }
    } catch (error) {
      shouldHydrate = true;
    }
  }

  try {
    const response = await fetch("/api/content", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload?.ok || !payload?.content || typeof payload.content !== "object") return false;

    const diskHasMedia = countMediaEntries(payload.content) > 0;
    if (!shouldHydrate && !storedHasMedia && !diskHasMedia) return false;

    if (!shouldHydrate && parsedStored) {
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

let siteContent = loadContent();

function renderMachines() {
  machinesCardsEl.innerHTML = siteContent.machines
    .map((machine, index) => {
      const badgeFallback = index === 0 ? "Best-seller" : index === 1 ? "Ultra premium" : "Meilleur rapport perf/prix";
      const badge = String(machine.badge || "").trim() || badgeFallback;
      const chips = index === 0
        ? ["FPS élevé", "QHD Ready", "Streaming fluide"]
        : index === 1
          ? ["4K Ready", "Création + Gaming", "Puissance max"]
          : ["Full HD+", "Faible latence", "Upgrade facile"];
      return `
      <article class="card machine-card" data-machine-index="${index}" role="button" tabindex="0" aria-label="Voir le détail du build ${escapeHtml(machine.name)}">
        <div class="machine-card-top">
          <h3>${machine.name}</h3>
          <span class="machine-badge">${badge}</span>
        </div>
        <p>${machine.description}</p>
        <div class="machine-chips">
          ${chips.map((chip) => `<span>${chip}</span>`).join("")}
        </div>
        <ul>${machine.specs.map((spec) => `<li>${spec}</li>`).join("")}</ul>
        <p class="price">${machine.price}</p>
      </article>
    `;
    })
    .join("");
}

function renderShowcase() {
  heroShowcaseEl.innerHTML = siteContent.showcase
    .map((item, index) => {
      const media = item.image
        ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" />`
        : '<div class="showcase-placeholder" aria-hidden="true"></div>';

      return `
        <article class="showcase-card" data-showcase-index="${index}">
          ${media}
          <div class="showcase-admin-controls">
            <button class="showcase-admin-btn" type="button" data-action="showcase-left" data-index="${index}" aria-label="Déplacer à gauche">◀</button>
            <button class="showcase-admin-btn" type="button" data-action="showcase-right" data-index="${index}" aria-label="Déplacer à droite">▶</button>
          </div>
          <div class="showcase-overlay">
            <h4>${item.title}</h4>
            <p>${item.slogan}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTechnicalSheets() {
  if (!Array.isArray(siteContent.technicalSheets) || siteContent.technicalSheets.length === 0) {
    technicalSheetsGridEl.innerHTML =
      '<article class="technical-card"><div class="technical-content"><h3>Aucune fiche disponible</h3><p>Le catalogue technique sera publié prochainement.</p></div></article>';
    return;
  }

  technicalSheetsGridEl.innerHTML = siteContent.technicalSheets
    .map((sheet, index) => {
      const imageMedia = sheet.image
        ? sheet.image
        : PREMIUM_GALLERY_IMAGES[index % PREMIUM_GALLERY_IMAGES.length];
      const downloadHref = resolveTechnicalSheetHref(sheet, index);
      const downloadFileName = sanitizeFileName(
        String(sheet?.fileName || `fiche-technique-${index + 1}.pdf`),
        `fiche-technique-${index + 1}.pdf`
      );
      const downloadIcon = downloadHref
        ? `<a class="technical-download-icon" href="${escapeHtml(downloadHref)}" download="${escapeHtml(downloadFileName)}" aria-label="Télécharger la fiche technique" title="Télécharger la fiche technique">
            <span class="technical-download-icon-glyph" aria-hidden="true">↓</span>
          </a>`
        : `<span class="technical-download-icon disabled" aria-disabled="true" title="Fiche indisponible">
            <span class="technical-download-icon-glyph" aria-hidden="true">↓</span>
          </span>`;

      return `
        <article class="technical-card" data-tech-index="${index}" role="button" tabindex="0" aria-label="Agrandir la fiche technique ${escapeHtml(sheet.title)}">
          <div class="technical-jacket-shell">
            <div class="technical-admin-controls">
              <button class="showcase-admin-btn" type="button" data-action="tech-left" data-tech-index="${index}" aria-label="Déplacer à gauche">◀</button>
              <button class="showcase-admin-btn" type="button" data-action="tech-right" data-tech-index="${index}" aria-label="Déplacer à droite">▶</button>
            </div>
            <div class="technical-flip technical-flip-static">
              <div class="technical-face technical-face-front technical-face-single">
                <img class="technical-media" src="${imageMedia}" alt="${escapeHtml(sheet.title)}" />
                ${downloadIcon}
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  initializeTechnicalPremiumEffects();
}

function resolveTechnicalSheetHref(sheet, index) {
  if (!sheet || typeof sheet !== "object") return "";
  const memoryHref = String(technicalSheetDownloadUrls[String(index)] || "").trim();
  if (memoryHref) return memoryHref;

  const raw = String(sheet.fileData || "").trim();
  if (!raw) return "";
  if (/^(data:|blob:|https?:\/\/|\/)/i.test(raw)) return raw;
  return `/${raw.replace(/^\/+/, "")}`;
}

function initializeTechnicalPremiumEffects() {
  if (!technicalSheetsGridEl || technicalSheetsGridEl.dataset.premiumFxBound === "1") return;
  technicalSheetsGridEl.dataset.premiumFxBound = "1";

  technicalSheetsGridEl.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".technical-card");
    if (!card || !technicalSheetsGridEl.contains(card)) return;
    const rect = card.getBoundingClientRect();
    const px = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
    const py = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
    const rotY = (px - 0.5) * 5.5;
    const rotX = (0.5 - py) * 4.5;
    card.style.setProperty("--tech-rot-x", `${rotX.toFixed(2)}deg`);
    card.style.setProperty("--tech-rot-y", `${rotY.toFixed(2)}deg`);
  });

  technicalSheetsGridEl.addEventListener(
    "pointerleave",
    (event) => {
      const card = event.target.closest(".technical-card");
      if (!card || !technicalSheetsGridEl.contains(card)) return;
      card.style.setProperty("--tech-rot-x", "0deg");
      card.style.setProperty("--tech-rot-y", "0deg");
    },
    true
  );
}

async function hydrateTechnicalSheetDownloads() {
  if (!Array.isArray(siteContent.technicalSheets) || siteContent.technicalSheets.length === 0) return;
  let changed = false;
  for (let index = 0; index < siteContent.technicalSheets.length; index += 1) {
    const sheet = siteContent.technicalSheets[index];
    if (!sheet || !sheet.fileKey || sheet.fileData || technicalSheetDownloadUrls[String(index)]) continue;
    try {
      const record = await getTechnicalFileRecord(sheet.fileKey);
      if (!record?.blob) continue;
      technicalSheetDownloadUrls[String(index)] = URL.createObjectURL(record.blob);
      changed = true;
    } catch (error) {
      // ignore hydrate errors
    }
  }
  if (changed) renderTechnicalSheets();
}

function renderReviews() {
  if (!reviewsGridEl) return;
  const reviews = Array.isArray(siteContent.reviews)
    ? siteContent.reviews.filter((item) => item?.approved)
    : [];

  const reviewCount = reviews.length;
  const average = reviewCount
    ? reviews.reduce((sum, review) => sum + (Math.max(1, Math.min(5, Number(review.rating) || 5))), 0) / reviewCount
    : 0;
  const satisfiedCount = reviews.filter((review) => (Number(review.rating) || 0) >= 4).length;
  const satisfiedRate = reviewCount ? Math.round((satisfiedCount / reviewCount) * 100) : 0;
  if (proofReviewsCountEl) proofReviewsCountEl.dataset.target = String(reviewCount);
  if (proofAverageRatingEl) proofAverageRatingEl.dataset.target = average.toFixed(1);
  if (proofSatisfactionRateEl) proofSatisfactionRateEl.dataset.target = String(satisfiedRate);
  if (proofStatsAnimated) {
    if (proofReviewsCountEl) proofReviewsCountEl.textContent = String(reviewCount);
    if (proofAverageRatingEl) proofAverageRatingEl.textContent = `${average.toFixed(1)} / 5`;
    if (proofSatisfactionRateEl) proofSatisfactionRateEl.textContent = `${satisfiedRate}%`;
  } else {
    initializeProofStatsAnimation();
  }

  if (!reviews.length) {
    reviewsGridEl.innerHTML =
      '<article class="review-card"><p class="review-text">Les premiers avis clients seront publiés prochainement.</p></article>';
    return;
  }

  const cards = reviews
    .map((review) => {
      const stars = "★".repeat(Math.max(1, Math.min(5, Number(review.rating) || 5)));
      const initials = String(review.author || "VB")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((chunk) => chunk[0].toUpperCase())
        .join("");
      const reviewDate = review.createdAt ? new Date(review.createdAt) : null;
      const reviewDateText = reviewDate && !Number.isNaN(reviewDate.getTime())
        ? reviewDate.toLocaleDateString("fr-FR")
        : "";
      return `
        <article class="review-card">
          <div class="review-head">
            <div class="review-author-wrap">
              <span class="review-avatar" aria-hidden="true">${escapeHtml(initials || "VB")}</span>
              <h3 class="review-author">${escapeHtml(review.author)}</h3>
            </div>
            <span class="review-stars" aria-label="${stars.length} étoiles">${stars}</span>
          </div>
          <div class="review-proof-row">
            <span class="review-proof-badge">Achat vérifié</span>
            ${reviewDateText ? `<span class="review-proof-date">${reviewDateText}</span>` : ""}
          </div>
          <p class="review-text">${escapeHtml(review.text)}</p>
        </article>
      `;
    })
    .join("");

  reviewsGridEl.innerHTML = `
    <div class="reviews-marquee">
      <div class="reviews-track">
        ${cards}
        ${cards}
      </div>
    </div>
  `;
}

function animateNumber(el, endValue, formatter, duration = 900) {
  if (!el) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || duration <= 0) {
    el.textContent = formatter(endValue);
    return;
  }

  const startTime = performance.now();
  const startValue = 0;
  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = startValue + (endValue - startValue) * eased;
    el.textContent = formatter(value);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function runProofStatsCounters() {
  const reviewsTarget = Number(proofReviewsCountEl?.dataset.target || 0);
  const averageTarget = Number(proofAverageRatingEl?.dataset.target || 0);
  const rateTarget = Number(proofSatisfactionRateEl?.dataset.target || 0);

  animateNumber(proofReviewsCountEl, reviewsTarget, (value) => String(Math.round(value)));
  animateNumber(proofAverageRatingEl, averageTarget, (value) => `${value.toFixed(1)} / 5`);
  animateNumber(proofSatisfactionRateEl, rateTarget, (value) => `${Math.round(value)}%`);
}

function initializeProofStatsAnimation() {
  if (!proofKpisEl || proofStatsAnimated) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    runProofStatsCounters();
    proofStatsAnimated = true;
    return;
  }

  if (!("IntersectionObserver" in window)) {
    runProofStatsCounters();
    proofStatsAnimated = true;
    return;
  }

  if (!proofStatsObserver) {
    proofStatsObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        runProofStatsCounters();
        proofStatsAnimated = true;
        proofStatsObserver.disconnect();
      },
      { threshold: 0.35 }
    );
  }

  proofStatsObserver.observe(proofKpisEl);
}

function getConfiguratorFaqByLabel(label) {
  const name = String(label || "").toLowerCase();
  if (/processeur|cpu/.test(name)) return "Le processeur gère la fluidité globale et les FPS minimums.";
  if (/carte graphique|gpu/.test(name)) return "La carte graphique est la pièce clé pour la performance en jeu.";
  if (/ram|mémoire/.test(name)) return "32 Go est recommandé pour gaming + multitâche confortable.";
  if (/stockage|ssd|nvme/.test(name)) return "Le NVMe accélère les chargements système et jeux.";
  if (/refroidissement|cooling/.test(name)) return "Un bon refroidissement améliore stabilité et silence.";
  if (/boîtier/.test(name)) return "Le boîtier influence airflow, bruit et facilité d'évolution.";
  return "Choisissez selon vos jeux, votre budget et votre objectif de performance.";
}

function setProfileFeedback(message) {
  if (!profileFeedbackEl) return;
  profileFeedbackEl.textContent = message;
}

function setProfilePasswordFeedback(message) {
  if (!profilePasswordFeedbackEl) return;
  profilePasswordFeedbackEl.textContent = String(message || "");
}

function setProfileAvatarFeedback(message) {
  if (!profileAvatarFeedbackEl) return;
  profileAvatarFeedbackEl.textContent = String(message || "");
}

function setProfileAdminPhotoFeedback(message) {
  if (!profileAdminPhotoFeedbackEl) return;
  profileAdminPhotoFeedbackEl.textContent = String(message || "");
}

function setSummarySaveFeedback(message) {
  if (!summarySaveFeedbackEl) return;
  summarySaveFeedbackEl.textContent = String(message || "");
}

function buildCurrentConfigSnapshot() {
  syncConfiguratorSelectionFromForm();
  if (!form) return null;
  const components = [];
  const services = [];
  let total = 0;

  form.querySelectorAll('input[type="radio"][data-config-component="1"]:checked').forEach((radio) => {
    const price = Number(radio.value || 0);
    total += price;
    components.push({
      label: String(radio.dataset.label || ""),
      optionName: String(radio.dataset.optionName || ""),
      price,
    });
  });

  form.querySelectorAll('input[type="checkbox"][data-config-service="1"]').forEach((input) => {
    if (!input.checked) return;
    const price = Number(input.value || 0);
    total += price;
    services.push({
      label: String(input.dataset.label || ""),
      price,
    });
  });

  if (!components.length && !services.length) return null;

  const createdAt = new Date().toISOString();
  const createdLabel = new Date(createdAt).toLocaleString("fr-FR");
  return {
    id: `cfg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: `Config du ${createdLabel}`,
    createdAt,
    total,
    components,
    services,
  };
}

function renderUserProfileConfigs(email) {
  if (!profileConfigsListEl) return;
  const configs = getUserConfigs(email);
  const favoriteIds = new Set(getUserFavoriteConfigIds(email));
  if (!configs.length) {
    profileConfigsListEl.innerHTML = "<p>Aucune configuration sauvegardée pour le moment.</p>";
    return;
  }

  profileConfigsListEl.innerHTML = configs
    .map((config) => {
      const date = new Date(config.createdAt || "");
      const dateText = Number.isNaN(date.getTime()) ? "Date inconnue" : date.toLocaleString("fr-FR");
      const lines = [
        ...(Array.isArray(config.components) ? config.components.map((item) => `${item.label}: ${item.optionName}`) : []),
        ...(Array.isArray(config.services) ? config.services.map((item) => `${item.label}`) : []),
      ]
        .slice(0, 6)
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");

      return `
        <article class="profile-config-item">
          <div class="profile-config-head">
            <strong>${escapeHtml(config.title || "Configuration sauvegardée")}</strong>
            <strong>${formatEuro(Number(config.total) || 0)}</strong>
          </div>
          <p class="profile-config-meta">${escapeHtml(dateText)}</p>
          ${lines ? `<ul class="profile-config-lines">${lines}</ul>` : ""}
          <div class="profile-config-actions">
            <button class="admin-secondary" type="button" data-action="profile-toggle-favorite" data-config-id="${escapeHtml(config.id || "")}">
              ${favoriteIds.has(String(config.id || "")) ? "Retirer favori" : "Ajouter favori"}
            </button>
            <button class="admin-secondary" type="button" data-action="profile-load-config" data-config-id="${escapeHtml(config.id || "")}">
              Charger
            </button>
            <button class="admin-secondary" type="button" data-action="profile-resume-config" data-config-id="${escapeHtml(config.id || "")}">
              Reprendre
            </button>
            <button class="admin-danger" type="button" data-action="profile-delete-config" data-config-id="${escapeHtml(config.id || "")}">
              Supprimer
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderUserProfileFavorites(email) {
  if (!profileFavoritesListEl) return;
  const favoriteIds = new Set(getUserFavoriteConfigIds(email));
  const configs = getUserConfigs(email).filter((item) => favoriteIds.has(String(item?.id || "")));
  if (!configs.length) {
    profileFavoritesListEl.innerHTML = "<p>Aucun favori pour le moment.</p>";
    return;
  }
  profileFavoritesListEl.innerHTML = configs
    .slice(0, 8)
    .map(
      (config) => `
        <article class="profile-config-item">
          <div class="profile-config-head">
            <strong>${escapeHtml(config.title || "Configuration favorite")}</strong>
            <strong>${formatEuro(Number(config.total) || 0)}</strong>
          </div>
          <div class="profile-config-actions">
            <button class="admin-secondary" type="button" data-action="profile-resume-config" data-config-id="${escapeHtml(config.id || "")}">
              Reprendre
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderUserProfileActivity(email) {
  if (!profileActivityListEl) return;
  const timeline = getUserActivity(email);
  if (!timeline.length) {
    profileActivityListEl.innerHTML = "<p>Aucune activité récente.</p>";
    return;
  }
  profileActivityListEl.innerHTML = timeline
    .slice(0, 12)
    .map((item) => {
      const date = new Date(item.at || "");
      const dateLabel = Number.isNaN(date.getTime()) ? "" : date.toLocaleString("fr-FR");
      const actionLabel = String(item.action || "Action").trim();
      const detailLabel = String(item.detail || "").trim();
      const normalizedAction = actionLabel.toLowerCase();
      const normalizedDetail = detailLabel.toLowerCase();
      const hideDuplicateDetail =
        normalizedDetail === normalizedAction ||
        (normalizedAction === "connexion" && normalizedDetail === "connexion au site vortexbox");
      return `
        <article class="profile-review-item">
          <div class="profile-review-head">
            <strong>${escapeHtml(actionLabel)}</strong>
            <span class="profile-review-status approved">${escapeHtml(dateLabel)}</span>
          </div>
          ${detailLabel && !hideDuplicateDetail ? `<p class="profile-review-text">${escapeHtml(detailLabel)}</p>` : ""}
        </article>
      `;
    })
    .join("");
}

function getUserAvailableGamesAssignments(email) {
  const safeEmail = String(email || "").trim().toLowerCase();
  const items = Array.isArray(siteContent.processus?.gamesAssignments) ? siteContent.processus.gamesAssignments : [];
  return items.filter((item) => getGamesAssignmentStatus(item, safeEmail) === "available");
}

function refreshUserDownloadsBadge() {
  if (!userProfileToggleBtn) return;
  const email = getCurrentSessionEmail();
  const availableCount = email ? getUserAvailableGamesAssignments(email).length : 0;
  if (availableCount > 0) {
    userProfileToggleBtn.title = `Mon profil - ${availableCount} fichier(s) disponible(s)`;
  } else {
    userProfileToggleBtn.title = "Mon profil";
  }
  delete userProfileToggleBtn.dataset.downloadCount;
  userProfileToggleBtn.classList.remove("has-downloads");
  refreshNavAssignedFilesBadge();
}

function refreshNavAssignedFilesBadge() {
  const gamesMenuLink = document.querySelector('.nav-links a[data-menu-key="jeux"]');
  if (!gamesMenuLink) return;

  gamesMenuLink.querySelectorAll(".nav-assigned-file-badge").forEach((el) => el.remove());
  delete gamesMenuLink.dataset.assignedFilesCount;
  gamesMenuLink.classList.remove("has-assigned-files");

  const email = getCurrentSessionEmail();
  if (!email) {
    gamesMenuLink.title = "Jeux";
    return;
  }

  const availableCount = getUserAvailableGamesAssignments(email).length;
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

function renderUserProfileDownloads(email) {
  if (!profileDownloadsListEl) return;
  const safeEmail = String(email || "").trim().toLowerCase();
  const items = Array.isArray(siteContent.processus?.gamesAssignments) ? siteContent.processus.gamesAssignments : [];
  const mine = items
    .filter((item) => String(item?.email || "").trim().toLowerCase() === safeEmail)
    .slice()
    .sort((a, b) => new Date(b.assignedAt || 0).getTime() - new Date(a.assignedAt || 0).getTime());

  if (!mine.length) {
    profileDownloadsListEl.innerHTML = "<p>Aucun fichier disponible pour le moment.</p>";
    return;
  }

  profileDownloadsListEl.innerHTML = mine
    .map((item) => {
      const status = getGamesAssignmentStatus(item, safeEmail);
      const maxDownloads = Math.max(1, Math.round(Number(item.maxDownloads) || 1));
      const done = Math.max(0, Math.round(Number(item.downloadCount) || 0));
      const remaining = Math.max(0, maxDownloads - done);
      const assigned = item.assignedAt ? new Date(item.assignedAt).toLocaleString("fr-FR") : "N/A";
      const expiresLabel = item.expiresAt ? new Date(item.expiresAt).toLocaleDateString("fr-FR") : "Aucune";
      const canDownload = status === "available";
      return `
        <article class="profile-config-item">
          <div class="profile-config-head">
            <strong>${escapeHtml(item.title || item.fileName || "Fichier Games")}</strong>
            <span class="profile-review-status ${canDownload ? "approved" : "pending"}">${escapeHtml(formatGamesAssignmentStatus(status))}</span>
          </div>
          <p class="profile-config-meta">${escapeHtml(item.fileName || "")}</p>
          <p class="profile-config-meta">Restants: ${remaining}/${maxDownloads} • Expiration: ${escapeHtml(expiresLabel)}</p>
          <p class="profile-config-meta">Attribué le: ${escapeHtml(assigned)}</p>
          <div class="profile-config-actions">
            ${
              canDownload
                ? `<button class="cta" type="button" data-action="profile-download-assignment" data-assignment-id="${escapeHtml(item.id || "")}">Télécharger le fichier ZIP</button>`
                : '<span class="admin-file-name">Téléchargement indisponible</span>'
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function applySavedConfigToConfigurator(config) {
  if (!config || !siteContent?.configurator) return false;
  const components = Array.isArray(siteContent.configurator.components) ? siteContent.configurator.components : [];
  const services = Array.isArray(siteContent.configurator.services) ? siteContent.configurator.services : [];
  const nextComponents = {};
  const nextServices = {};

  components.forEach((component, index) => {
    const match = (Array.isArray(config.components) ? config.components : []).find(
      (item) =>
        String(item.label || "").trim().toLowerCase() === String(component.label || "").trim().toLowerCase() &&
        component.options.some((option) => String(option.name || "") === String(item.optionName || ""))
    );
    if (match) nextComponents[String(index)] = String(match.optionName || "");
  });

  services.forEach((service, index) => {
    const enabled = (Array.isArray(config.services) ? config.services : []).some(
      (item) => String(item.label || "").trim().toLowerCase() === String(service.label || "").trim().toLowerCase()
    );
    nextServices[String(index)] = enabled;
  });

  selectedConfiguratorState = { components: nextComponents, services: nextServices };
  renderConfigurator();
  updateSummary();
  return true;
}

function renderUserProfileReviews(email) {
  if (!profileReviewsListEl) return;
  const targetEmail = String(email || "").trim().toLowerCase();
  const allReviews = Array.isArray(siteContent.reviews) ? siteContent.reviews : [];
  const mine = allReviews
    .filter((item) => String(item.userEmail || "").trim().toLowerCase() === targetEmail)
    .slice()
    .reverse();

  if (!mine.length) {
    profileReviewsListEl.innerHTML = "<p>Aucun avis envoyé pour le moment.</p>";
    return;
  }

  profileReviewsListEl.innerHTML = mine
    .map((item) => {
      const statusClass = item.approved ? "approved" : "pending";
      const statusLabel = item.approved ? "Publié" : "En attente";
      const stars = "★".repeat(Math.max(1, Math.min(5, Number(item.rating) || 5)));
      return `
        <article class="profile-review-item">
          <div class="profile-review-head">
            <strong>${stars}</strong>
            <span class="profile-review-status ${statusClass}">${statusLabel}</span>
          </div>
          <p class="profile-review-text">${escapeHtml(item.text || "")}</p>
        </article>
      `;
    })
    .join("");
}

function openUserProfilePanel() {
  const email = getCurrentSessionEmail();
  if (!email) return;
  const isAdmin = isAdminEmail(email);
  if (profileEmailInput) profileEmailInput.value = email;
  if (profileDisplayNameInput) profileDisplayNameInput.value = getUserDisplayName(email);
  if (profileReviewRatingInput) profileReviewRatingInput.value = "5";
  if (profileReviewTextInput) profileReviewTextInput.value = "";
  if (profileCurrentPasswordInput) profileCurrentPasswordInput.value = "";
  if (profileNewPasswordInput) profileNewPasswordInput.value = "";
  if (profileConfirmPasswordInput) profileConfirmPasswordInput.value = "";
  renderProfileConnectionTime(email);
  if (profileAvatarFileInput) profileAvatarFileInput.value = "";
  const profilePhoto = getUserProfilePhoto(email);
  if (profileAvatarImgEl) {
    profileAvatarImgEl.src = profilePhoto || EMPTY_IMAGE_DATA_URI;
  }
  setProfileFeedback("");
  setProfilePasswordFeedback("");
  setProfileAvatarFeedback("");
  const savedAdminPhoto =
    (typeof siteContent.adminProfileReviewPhoto === "string" && siteContent.adminProfileReviewPhoto) ||
    String(localStorage.getItem(ADMIN_PROFILE_PHOTO_KEY) || "");
  const showAdminPhotoBlock = Boolean(savedAdminPhoto) || isAdmin;
  if (profileAdminPhotoToolsEl) {
    profileAdminPhotoToolsEl.classList.toggle("hidden", !showAdminPhotoBlock);
  }
  if (profileAdminPhotoFileInput) profileAdminPhotoFileInput.value = "";
  if (profileAdminPhotoPreviewEl) {
    if (savedAdminPhoto) {
      profileAdminPhotoPreviewEl.src = savedAdminPhoto;
    } else {
      profileAdminPhotoPreviewEl.src = EMPTY_IMAGE_DATA_URI;
    }
    const slotEl = profileAdminPhotoPreviewEl.closest(".profile-admin-photo-slot");
    if (slotEl) slotEl.classList.toggle("readonly", !isAdmin);
  }
  const adminPhotoActionsEl = profileAdminPhotoToolsEl?.querySelector(".profile-admin-photo-actions");
  if (adminPhotoActionsEl) {
    adminPhotoActionsEl.classList.toggle("hidden", !isAdmin);
  }
  if (profileAdminPhotoNameEl) profileAdminPhotoNameEl.textContent = "Aucune image";
  profileAdminPhotoDraft = isAdmin ? savedAdminPhoto : "";
  setProfileAdminPhotoFeedback("");
  renderUserProfileReviews(email);
  renderUserProfileConfigs(email);
  renderUserProfileDownloads(email);
  renderUserProfileFavorites(email);
  renderUserProfileActivity(email);
  userProfilePanel?.classList.remove("hidden");
}

function closeUserProfilePanel() {
  userProfilePanel?.classList.add("hidden");
}

function renderSummaryTelegramImage(image) {
  if (!summaryTelegramImageEl) return;
  const src = typeof image === "string" ? image : "";
  summaryTelegramImageEl.innerHTML = src
    ? `
      <img src="${src}" alt="Visuel Telegram VortexBox" data-action="open-summary-telegram-image" />
      <p class="config-category-fill-slogan">VortexBox – La puissance RTX au service de votre expérience gaming.</p>
      <div class="summary-telegram-controls">
        <input class="summary-telegram-input" id="summary-telegram-input" type="file" accept="image/*" />
        <button class="showcase-admin-btn" type="button" data-action="summary-telegram-pick">Image</button>
        <button class="showcase-admin-btn" type="button" data-action="summary-telegram-remove">X</button>
      </div>
    `
    : `
      <div class="summary-telegram-placeholder">Ajoutez une image HD 6 x 6 cm</div>
      <div class="summary-telegram-controls">
        <input class="summary-telegram-input" id="summary-telegram-input" type="file" accept="image/*" />
        <button class="showcase-admin-btn" type="button" data-action="summary-telegram-pick">Image</button>
      </div>
    `;
}

function renderConfigurator() {
  const config = siteContent.configurator;
  reconcileConfiguratorSelectionWithContent(config);
  const componentCount = Array.isArray(config.components) ? config.components.length : 0;
  const selectedComponentCount = Math.max(0, Object.values(selectedConfiguratorState.components || {}).filter(Boolean).length);
  const selectedServiceCount = Math.max(0, Object.values(selectedConfiguratorState.services || {}).filter(Boolean).length);
  const step1Active = selectedComponentCount > 0;
  const step2Active = selectedServiceCount > 0;
  const step3Active = step1Active || step2Active;
  const compRatio = componentCount > 0 ? Math.min(1, selectedComponentCount / componentCount) : 0;
  const progressPercent = Math.max(8, Math.min(100, Math.round(compRatio * 70 + (step2Active ? 20 : 0) + (step3Active ? 10 : 0))));
  const configImages = Array.isArray(config.visualImages) ? config.visualImages.filter(Boolean) : [];
  const categoryFillImage = typeof config.categoryFillImage === "string" ? config.categoryFillImage : "";
  const categoryFillImageSecondary =
    typeof config.categoryFillImageSecondary === "string" ? config.categoryFillImageSecondary : "";
  const summaryTelegramImage =
    typeof config.summaryTelegramImage === "string" ? config.summaryTelegramImage : "";
  configuratorVisualEl.innerHTML = configImages.length
    ? `
      <div class="configurator-visual-gallery">
        ${configImages
          .map(
            (image, index) => `
          <article class="config-visual-card" data-config-visual-index="${index}">
            <img src="${image}" alt="Visuel configurateur ${index + 1}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} />
            <div class="showcase-admin-controls">
              <button class="showcase-admin-btn" type="button" data-action="config-visual-left" data-index="${index}" aria-label="Déplacer à gauche">◀</button>
              <button class="showcase-admin-btn" type="button" data-action="config-visual-right" data-index="${index}" aria-label="Déplacer à droite">▶</button>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    `
    : `
      <div class="configurator-visual-fallback">
        <div class="fallback-gallery">
          <img src="${PREMIUM_GALLERY_IMAGES[0]}" alt="Visuel configurateur performance" fetchpriority="high" />
          <img src="${PREMIUM_GALLERY_IMAGES[1]}" alt="Visuel configurateur airflow" loading="lazy" decoding="async" />
          <img src="${PREMIUM_GALLERY_IMAGES[2]}" alt="Visuel configurateur RGB" loading="lazy" decoding="async" />
        </div>
      </div>
    `;

  const componentsHtml = config.components
    .map((component, componentIndex) => {
      const optionsHtml = component.options
        .map((option, optionIndex) => {
          const optionId = `config-${componentIndex}-${optionIndex}`;
          const image = option.image || PREMIUM_GALLERY_IMAGES[optionIndex % PREMIUM_GALLERY_IMAGES.length];
          const descriptionHtml = formatInfoParagraphs(option.description);
          return `
            <label class="config-option-card" for="${optionId}">
              <button
                class="config-option-info-btn"
                type="button"
                aria-label="Informations produit"
                title="Informations produit"
                data-info-title="${escapeHtml(option.name)}"
                data-info-content="${escapeHtml(option.description || "")}"
              >
                i
              </button>
              <div class="config-option-info-panel">
                <div class="config-option-info-head">
                  <img class="config-option-info-logo" src="favicon-vb.svg" alt="Logo VortexBox" />
                  <span>INFO PRODUIT</span>
                </div>
                <button type="button" class="config-option-info-close" aria-label="Fermer les informations">×</button>
                ${descriptionHtml}
              </div>
              <input
                id="${optionId}"
                type="radio"
                name="comp-${componentIndex}"
                data-config-component="1"
                data-label="${escapeHtml(component.label)}"
                data-option-name="${escapeHtml(option.name)}"
                data-option-description="${escapeHtml(option.description || "")}"
                value="${Number(option.price)}"
                ${selectedConfiguratorState.components[String(componentIndex)] === option.name ? "checked" : ""}
              />
              <button
                class="config-option-remove-btn"
                type="button"
                data-action="clear-selected-option"
                aria-label="Retirer ce produit"
                title="Retirer ce produit"
              >
                ×
              </button>
              <img src="${image}" alt="${escapeHtml(option.name)}" loading="lazy" decoding="async" />
              <div class="config-option-meta">
                <strong>${escapeHtml(option.name)}</strong>
                <small>${escapeHtml(component.label)}</small>
              </div>
              <span class="config-option-price">+${Number(option.price)} €</span>
            </label>
          `;
        })
        .join("");

      return `
        <section class="config-panel ${componentIndex === 0 ? "active" : ""}" data-config-panel="${componentIndex}">
          <h4>
            ${escapeHtml(component.label)}
            <span class="config-faq-hint" role="note">${escapeHtml(getConfiguratorFaqByLabel(component.label))}</span>
          </h4>
          <div class="config-option-grid">${optionsHtml}</div>
        </section>
      `;
    })
    .join("");

  const componentOptions = config.components
    .map(
      (component, componentIndex) => `
      <option value="${componentIndex}" ${componentIndex === 0 ? "selected" : ""}>
        ${escapeHtml(getConfiguratorCategorySelectLabel(component.label))}
      </option>
    `
    )
    .join("");

  const promoUnlocked = isPromoDlcUnlocked();
  const servicesForRender = [...config.services];
  if (promoUnlocked) {
    servicesForRender.push({
      id: "promo-dlc",
      label: "Option DLC - Gratuit",
      price: 0,
      checked: true,
      isPromo: true,
    });
  }

  const servicesHtml = servicesForRender
    .map(
      (service, serviceIndex) => {
      const serviceId = `config-service-${serviceIndex}`;
      const descriptionHtml = formatInfoParagraphs(service.description);
      return `
      <label class="toggle config-service-item" for="${serviceId}">
        <button
          class="config-option-info-btn"
          type="button"
          aria-label="Informations service"
          title="Informations service"
          data-info-title="${escapeHtml(service.label)}"
          data-info-content="${escapeHtml(service.description || "")}"
        >
          i
        </button>
        <div class="config-option-info-panel">
          <div class="config-option-info-head">
            <img class="config-option-info-logo" src="favicon-vb.svg" alt="Logo VortexBox" />
            <span>INFO PRODUIT</span>
          </div>
          <button type="button" class="config-option-info-close" aria-label="Fermer les informations">×</button>
          ${descriptionHtml}
        </div>
        <input
          id="${serviceId}"
          type="checkbox"
          name="svc-${serviceIndex}"
          data-config-service="1"
          data-label="${escapeHtml(service.label)}"
          value="${Number(service.price)}"
          ${service.isPromo ? 'data-promo-service="1"' : ""}
          ${
            service.isPromo
              ? "checked"
              : 
            Object.prototype.hasOwnProperty.call(selectedConfiguratorState.services, String(serviceIndex))
              ? selectedConfiguratorState.services[String(serviceIndex)]
                ? "checked"
                : ""
              : service.checked
                ? "checked"
                : ""
          }
          ${service.isPromo ? "disabled" : ""}
        />
        <span class="config-service-label">${escapeHtml(service.label)}</span>
        <span class="config-service-price">+${Number(service.price)} €</span>
      </label>
    `
      }
    )
    .join("");

  builderFieldsEl.innerHTML = `
    <section class="config-group-card">
      <h3>Construire ma configuration idéale</h3>
      <div class="config-steps" aria-label="Étapes configurateur">
        <article class="config-step ${step1Active ? "is-active" : ""}">
          <span>1</span>
          <strong>Sélectionner mes composants</strong>
        </article>
        <article class="config-step ${step2Active ? "is-active" : ""}">
          <span>2</span>
          <strong>Ajouter mes options</strong>
        </article>
        <article class="config-step ${step3Active ? "is-active" : ""}">
          <span>3</span>
          <strong>Valider mon panier</strong>
        </article>
      </div>
      <div class="config-progress" aria-hidden="true">
        <span style="width: ${progressPercent}%"></span>
      </div>
      <details class="config-faq-inline">
        <summary>FAQ rapide: bien choisir vos composants</summary>
        <p>Commencez par la carte graphique et le processeur, puis ajustez RAM et stockage selon vos usages.</p>
      </details>
      <div class="config-master-detail">
        <aside class="config-reference-list">
          <div class="config-category-select-wrap">
            <label for="config-category-select">Nom de la catégorie</label>
            <select id="config-category-select" class="config-category-select">
              ${componentOptions}
            </select>
          </div>
          <div class="config-category-fill-stack">
            <div class="config-category-fill">
              ${
                categoryFillImage
                  ? `
                    <img src="${categoryFillImage}" alt="Visuel complémentaire configurateur 1" data-action="open-config-fill-image" data-slot="1" loading="lazy" decoding="async" />
                    <p class="config-category-fill-slogan">VortexBox – Votre machine gaming, prête à dominer.</p>
                  `
                  : '<div class="config-category-fill-placeholder">Ajoutez un visuel complémentaire</div>'
              }
              <div class="config-category-fill-controls">
                <input class="config-fill-input" id="config-fill-input-1" data-slot="1" type="file" accept="image/*" />
                <button class="showcase-admin-btn" type="button" data-action="config-fill-pick" data-slot="1">Image</button>
                ${categoryFillImage ? '<button class="showcase-admin-btn" type="button" data-action="config-fill-remove" data-slot="1">X</button>' : ""}
              </div>
            </div>
            <div class="config-category-fill">
              ${
                categoryFillImageSecondary
                  ? `
                    <img src="${categoryFillImageSecondary}" alt="Visuel complémentaire configurateur 2" data-action="open-config-fill-image" data-slot="2" loading="lazy" decoding="async" />
                    <p class="config-category-fill-slogan">VortexBox – Gaming extrême avec la technologie Intel.</p>
                  `
                  : '<div class="config-category-fill-placeholder">Ajoutez un second visuel</div>'
              }
              <div class="config-category-fill-controls">
                <input class="config-fill-input" id="config-fill-input-2" data-slot="2" type="file" accept="image/*" />
                <button class="showcase-admin-btn" type="button" data-action="config-fill-pick" data-slot="2">Image</button>
                ${categoryFillImageSecondary ? '<button class="showcase-admin-btn" type="button" data-action="config-fill-remove" data-slot="2">X</button>' : ""}
              </div>
            </div>
          </div>
        </aside>
        <div class="config-reference-content">
          <div class="config-panels">${componentsHtml}</div>
        </div>
      </div>
    </section>
    <section class="config-group-card">
      <h3>Services optionnels</h3>
      <details class="config-faq-inline">
        <summary>FAQ rapide: services recommandés</summary>
        <p>Le montage pro et les tests de stabilité sont recommandés pour une fiabilité immédiate.</p>
      </details>
      <div class="config-services-list">${servicesHtml}</div>
    </section>
  `;

  if (promoCodeInputEl) {
    if (activePromoCode) promoCodeInputEl.value = activePromoCode;
  }
  setPromoFeedback(
    promoUnlocked
      ? "Code promo valide: option DLC activée gratuitement."
      : "Entrez votre code promo DLC pour activer l'option gratuite.",
    promoUnlocked ? "success" : "info"
  );
  renderSummaryTelegramImage(summaryTelegramImage);
}

function applyContent() {
  selectedConfiguratorState = { components: {}, services: {} };
  revokeTechnicalSheetDownloadUrls();
  heroTitleEl.textContent = siteContent.heroTitle;
  machinesTitleEl.textContent = siteContent.machinesTitle;
  applyNavTheme(siteContent.navTheme);
  applyMenuBadges(siteContent.menuBadges);
  if (footerContactEmailEl) {
    footerContactEmailEl.textContent = siteContent.footerContactEmail || DEFAULT_CONTENT.footerContactEmail;
  }
  renderLegalFooterButtons();
  renderMachines();
  renderShowcase();
  renderTechnicalSheets();
  renderReviews();
  hydrateTechnicalSheetDownloads().catch(() => {});
  renderConfigurator();
  updateSummary();
  renderPremiumBreadcrumb();
  refreshUserDownloadsBadge();
}

function applyMenuBadges(menuBadges) {
  const normalized = normalizeMenuBadges(menuBadges);
  const links = Array.from(document.querySelectorAll(".nav-links a[data-menu-key]"));
  links.forEach((link) => {
    link.querySelectorAll(".nav-link-badge").forEach((el) => el.remove());
    const key = String(link.dataset.menuKey || "").trim();
    const badge = String(normalized[key] || "");
    if (!badge) return;
    const span = document.createElement("span");
    const preset = ["hot", "promo", "nouveau"].includes(badge.toLowerCase()) ? badge.toLowerCase() : "custom";
    span.className = `nav-link-badge badge-${preset}`;
    span.textContent =
      preset === "hot" ? "HOT" : preset === "promo" ? "PROMO" : preset === "nouveau" ? "NOUVEAU" : badge;
    link.appendChild(span);
  });
}

function getAdminMenuBadgeCustomInput(key) {
  return document.getElementById(`admin-menu-badge-${key}-custom`);
}

function getAdminMenuBadgeValue(key, selectEl) {
  const customInput = getAdminMenuBadgeCustomInput(key);
  const selectValue = String(selectEl?.value || "").trim().toLowerCase();
  if (!selectValue) return "";
  if (selectValue === "custom") return String(customInput?.value || "").trim().slice(0, 18);
  return selectValue;
}

function syncAdminMenuBadgeCustomState(key, selectedValue, customValue) {
  const customInput = getAdminMenuBadgeCustomInput(key);
  if (!customInput) return;
  const isCustom = String(selectedValue || "").trim().toLowerCase() === "custom";
  customInput.disabled = !isCustom;
  customInput.classList.toggle("is-disabled", !isCustom);
  if (!isCustom && !customValue) customInput.value = "";
}

function applyNavTheme(theme) {
  const safeTheme = ["aurora", "frost", "obsidian"].includes(String(theme || "").trim())
    ? String(theme || "").trim()
    : "aurora";
  document.documentElement.setAttribute("data-nav-theme", safeTheme);
}

function getPageTitleFromPath(pathname) {
  const file = String(pathname || "").split("/").pop() || "index.html";
  if (file === "about.html") return "A propos";
  if (file === "faq.html") return "FAQ";
  if (file === "jeux.html") return "Jeux";
  if (file === "support-sav.html") return "Support & SAV";
  return "Accueil";
}

function renderPremiumBreadcrumb() {
  const el = document.getElementById("premium-breadcrumb");
  if (!el) return;
  const crumbs = [{ label: "Accueil", href: "index.html" }];
  const path = window.location.pathname;
  const pageTitle = getPageTitleFromPath(path);
  const isIndex = /(^|\/)index\.html$/.test(path) || path === "/" || path === "";
  const hasHash = Boolean(window.location.hash);

  if (isIndex) {
    el.innerHTML = "";
    el.classList.add("is-empty");
    return;
  }

  el.classList.remove("is-empty");
  if (!isIndex) {
    crumbs.push({ label: pageTitle, href: "", current: true });
  } else if (hasHash) {
    const section = document.querySelector(window.location.hash);
    const navLink = document.querySelector(`.nav-links a[href="${window.location.hash}"]`);
    const sectionTitle =
      navLink?.textContent?.trim() ||
      section?.querySelector("h2, h1, h3")?.textContent?.trim() ||
      window.location.hash.replace("#", "");
    crumbs.push({ label: sectionTitle, href: "", current: true });
  } else {
    crumbs[0].current = true;
  }
  el.innerHTML = crumbs
    .map((item, index) => {
      const node = item.current
        ? `<span class="crumb current">${escapeHtml(item.label)}</span>`
        : `<a class="crumb" href="${escapeHtml(item.href || "index.html")}">${escapeHtml(item.label)}</a>`;
      const sep = index < crumbs.length - 1 ? '<span class="sep">›</span>' : "";
      return `${node}${sep}`;
    })
    .join("");
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
  const legal = normalizeLegalContent(siteContent.legal);
  const key =
    section === "mentions" || section === "cgv" || section === "rgpd" || section === "cookies"
      ? section
      : "mentions";
  legalModalTitleEl.textContent = legal[key].title;
  legalModalContentEl.innerHTML = formatLegalModalContent(legal[key].content);
  legalModalEl.classList.remove("hidden");
}

function closeLegalModal() {
  if (!legalModalEl || !legalModalTitleEl || !legalModalContentEl) return;
  legalModalEl.classList.add("hidden");
  legalModalTitleEl.textContent = "";
  legalModalContentEl.innerHTML = "";
}

function renderLegalFooterButtons() {
  const legal = normalizeLegalContent(siteContent.legal);
  if (footerLegalMentionsBtnEl) footerLegalMentionsBtnEl.textContent = legal.mentions.label;
  if (footerLegalCgvBtnEl) footerLegalCgvBtnEl.textContent = legal.cgv.label;
  if (footerLegalRgpdBtnEl) footerLegalRgpdBtnEl.textContent = legal.rgpd.label;
  if (footerLegalCookiesBtnEl) footerLegalCookiesBtnEl.textContent = legal.cookies.label;
}

function setPreview(index, image) {
  const preview = adminShowcasePreviewImages[index];
  if (image) {
    preview.src = image;
    preview.style.display = "block";
  } else {
    preview.removeAttribute("src");
    preview.style.display = "none";
  }
}

function openImageModal(src, caption) {
  if (!src) return;
  const shouldRestoreMachineModal = Boolean(machineModalEl && !machineModalEl.classList.contains("hidden"));
  imageModalEl.dataset.restoreMachineModal = shouldRestoreMachineModal ? "1" : "0";
  if (shouldRestoreMachineModal) {
    machineModalEl.classList.add("hidden");
  }
  imageModalImgEl.src = src;
  imageModalCaptionEl.textContent = caption || "";
  imageModalEl.classList.remove("hidden");
}

function closeImageModal() {
  imageModalEl.classList.add("hidden");
  imageModalImgEl.removeAttribute("src");
  imageModalCaptionEl.textContent = "";
  if (imageModalEl.dataset.restoreMachineModal === "1" && machineModalEl) {
    machineModalEl.classList.remove("hidden");
  }
  imageModalEl.dataset.restoreMachineModal = "0";
}

function openConfigInfoModal(title, content) {
  if (!configInfoModalEl || !configInfoModalTitleEl || !configInfoModalContentEl) return;
  const safeTitle = String(title || "").trim() || "INFO PRODUIT";
  const safeContent = String(content || "").trim();
  configInfoModalTitleEl.textContent = safeTitle;
  configInfoModalContentEl.innerHTML = formatInfoParagraphs(safeContent || "Aucune information disponible.");
  configInfoModalEl.classList.remove("hidden");
}

function closeConfigInfoModal() {
  if (!configInfoModalEl || !configInfoModalTitleEl || !configInfoModalContentEl) return;
  configInfoModalEl.classList.add("hidden");
  configInfoModalTitleEl.textContent = "INFO PRODUIT";
  configInfoModalContentEl.innerHTML = "";
}

function ensureAdminVideoModal() {
  if (adminVideoModalEl) return;
  const modal = document.createElement("section");
  modal.className = "admin-video-modal hidden";
  modal.setAttribute("aria-label", "Lecture vidéo administrateur");
  modal.innerHTML = `
    <article class="admin-video-modal-card">
      <button class="admin-video-modal-close" type="button" aria-label="Fermer">×</button>
      <video class="admin-video-modal-player" controls playsinline preload="metadata"></video>
      <p class="admin-video-modal-caption"></p>
    </article>
  `;
  document.body.appendChild(modal);
  adminVideoModalEl = modal;
  adminVideoModalPlayerEl = modal.querySelector(".admin-video-modal-player");
  adminVideoModalCaptionEl = modal.querySelector(".admin-video-modal-caption");
  const closeBtn = modal.querySelector(".admin-video-modal-close");
  closeBtn?.addEventListener("click", closeAdminVideoModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeAdminVideoModal();
  });
}

function openAdminVideoModal(src, caption) {
  if (!src) return;
  ensureAdminVideoModal();
  if (!adminVideoModalEl || !adminVideoModalPlayerEl) return;
  adminVideoModalCaptionEl.textContent = caption || "";
  adminVideoModalPlayerEl.src = src;
  adminVideoModalEl.classList.remove("hidden");
  const playPromise = adminVideoModalPlayerEl.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function closeAdminVideoModal() {
  if (!adminVideoModalEl || !adminVideoModalPlayerEl) return;
  adminVideoModalEl.classList.add("hidden");
  adminVideoModalPlayerEl.pause();
  adminVideoModalPlayerEl.removeAttribute("src");
  adminVideoModalPlayerEl.load();
  if (adminVideoModalCaptionEl) adminVideoModalCaptionEl.textContent = "";
}

document.addEventListener("click", (event) => {
  const closeBtn = event.target.closest(".admin-video-modal-close");
  if (!closeBtn) return;
  event.preventDefault();
  event.stopPropagation();
  closeAdminVideoModal();
});

function bindAdminVideoPreviewModal(previewEl, index) {
  if (!(previewEl instanceof HTMLVideoElement)) return;
  if (previewEl.dataset.modalBound === "1") return;
  previewEl.dataset.modalBound = "1";

  previewEl.addEventListener("play", () => {
    const src = previewEl.currentSrc || previewEl.src;
    if (!src) return;
    previewEl.pause();
    const title = String(adminAboutVideoTitleInputs[index]?.value || "").trim() || `Vidéo ${index + 1}`;
    openAdminVideoModal(src, title);
  });

  previewEl.addEventListener("click", () => {
    const src = previewEl.currentSrc || previewEl.src;
    if (!src) return;
    const title = String(adminAboutVideoTitleInputs[index]?.value || "").trim() || `Vidéo ${index + 1}`;
    openAdminVideoModal(src, title);
  });
}

function openMachineModal(machine) {
  if (!machine) return;
  const backName = String(machine.backName || machine.name || "").trim() || machine.name;
  const backDescription = String(machine.backDescription || machine.description || "").trim() || machine.description;
  const backComments = Array.isArray(machine.backComments) ? machine.backComments : [];
  const images = getMachineImages(machine);
  if (activeMachineModalImageIndex >= images.length) activeMachineModalImageIndex = Math.max(0, images.length - 1);
  const image = images[activeMachineModalImageIndex] || "";
  const imageSlogan = typeof machine.imageSlogan === "string" ? machine.imageSlogan.trim() : "";
  const thumbs = images
    .map(
      (src, index) => `
      <button class="machine-modal-thumb ${index === activeMachineModalImageIndex ? "is-active" : ""}" type="button" data-action="machine-modal-image-select" data-image-index="${index}" aria-label="Image ${index + 1}">
        <img src="${src}" alt="Miniature ${index + 1}" />
      </button>
    `
    )
    .join("");
  machineModalContentEl.innerHTML = `
    <article class="card machine-modal-card">
      <div class="machine-modal-main">
        <h3>${backName}</h3>
        <p>${backDescription}</p>
        <ul>${backComments.filter(Boolean).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </div>
      <aside class="machine-modal-side">
        <div class="machine-modal-brand-title">
          <img src="/favicon-vb.svg?v=2" alt="Logo VortexBox" />
          <span>VortexBox</span>
        </div>
        <div class="machine-modal-media-wrap">
          ${
            image
              ? `<img class="machine-modal-media" src="${image}" alt="Visuel ${escapeHtml(machine.name)}" data-action="open-machine-modal-image" />`
              : '<div class="machine-modal-media-placeholder">Ajoutez une image du build</div>'
          }
        </div>
        <div class="machine-modal-media-controls">
          <input class="machine-modal-image-input" id="machine-modal-image-input" type="file" accept="image/*" multiple />
          <button class="showcase-admin-btn" type="button" data-action="machine-modal-image-pick" aria-label="Ajouter une image" title="Ajouter une image">+</button>
          ${image ? '<button class="showcase-admin-btn" type="button" data-action="machine-modal-image-remove" aria-label="Supprimer l&rsquo;image" title="Supprimer l&rsquo;image">×</button>' : ""}
        </div>
        ${images.length ? `<div class="machine-modal-thumbs">${thumbs}</div>` : ""}
        ${imageSlogan ? `<p class="machine-modal-media-slogan">${escapeHtml(imageSlogan)}</p>` : ""}
      </aside>
    </article>
  `;
  machineModalEl.classList.remove("hidden");
}

function openTechnicalSheetModal(sheet, index) {
  if (!sheet) return;
  const imageSrc = sheet.image || PREMIUM_GALLERY_IMAGES[index % PREMIUM_GALLERY_IMAGES.length];

  machineModalContentEl.innerHTML = `
    <article class="technical-modal-card technical-modal-image-wrap">
      <img class="technical-modal-cover" src="${imageSrc}" alt="${escapeHtml(sheet.title)}" />
    </article>
  `;
  machineModalEl.classList.remove("hidden");
}

function closeMachineModal() {
  machineModalEl.classList.add("hidden");
  machineModalContentEl.innerHTML = "";
  activeMachineModalIndex = -1;
}

function renderAdminMachinesEditor() {
  adminMachinesDraft = adminMachinesDraft.map((machine) => ensureMachineBackFields(machine));
  adminMachinesList.innerHTML = adminMachinesDraft
    .map(
      (machine, machineIndex) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Build ${machineIndex + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-machine" data-machine-index="${machineIndex}">Supprimer</button>
        </div>
        <label>Nom<input type="text" data-action="machine-field" data-field="name" data-machine-index="${machineIndex}" value="${escapeHtml(machine.name)}" /></label>
        <label>Description<input type="text" data-action="machine-field" data-field="description" data-machine-index="${machineIndex}" value="${escapeHtml(machine.description)}" /></label>
        <label>Badge (carte accueil)<input type="text" data-action="machine-field" data-field="badge" data-machine-index="${machineIndex}" value="${escapeHtml(machine.badge || "")}" /></label>
        <label>Prix affiché<input type="text" data-action="machine-field" data-field="price" data-machine-index="${machineIndex}" value="${escapeHtml(machine.price)}" /></label>
        <label>Titre verso<input type="text" data-action="machine-field" data-field="backName" data-machine-index="${machineIndex}" value="${escapeHtml(machine.backName || machine.name || "")}" /></label>
        <label>Description verso<input type="text" data-action="machine-field" data-field="backDescription" data-machine-index="${machineIndex}" value="${escapeHtml(machine.backDescription || machine.description || "")}" /></label>
        <label>Slogan sous image<input type="text" data-action="machine-field" data-field="imageSlogan" data-machine-index="${machineIndex}" value="${escapeHtml(machine.imageSlogan || "")}" /></label>
        <label>
          Image du build (popup)
          <div class="admin-file-field">
            <input class="admin-file-input admin-machine-image-input" type="file" accept="image/*" multiple data-machine-index="${machineIndex}" />
            <div class="admin-file-picker">
              <button class="admin-file-button" type="button" data-action="pick-machine-image" data-machine-index="${machineIndex}">Choisir image(s)</button>
            </div>
            <span class="admin-file-name">${getMachineImages(machine).length ? `${getMachineImages(machine).length} image(s)` : "Aucune image"}</span>
          </div>
        </label>
        <div class="admin-machine-images-grid">
          ${getMachineImages(machine)
            .map(
              (src, imageIndex) => `
              <div class="admin-machine-image-item">
                <img class="admin-preview" alt="Aperçu build ${machineIndex + 1}-${imageIndex + 1}" src="${src}" />
                <button class="admin-danger" type="button" data-action="remove-machine-image-at" data-machine-index="${machineIndex}" data-image-index="${imageIndex}">X</button>
              </div>
            `
            )
            .join("")}
        </div>
        ${getMachineImages(machine).length ? `<button class="admin-secondary" type="button" data-action="remove-machine-image" data-machine-index="${machineIndex}">Supprimer toutes les images</button>` : ""}
        <div class="admin-spec-list">
          <strong>Recto - caractéristiques</strong>
          ${machine.specs
            .map(
              (spec, specIndex) => `
            <div class="admin-spec-row">
              <input type="text" data-action="spec-field" data-spec-target="front" data-machine-index="${machineIndex}" data-spec-index="${specIndex}" value="${escapeHtml(spec)}" />
              <button class="admin-danger" type="button" data-action="remove-spec" data-spec-target="front" data-machine-index="${machineIndex}" data-spec-index="${specIndex}">X</button>
            </div>
          `
            )
            .join("")}
          <strong>Verso - commentaires (8 lignes)</strong>
          ${(Array.isArray(machine.backComments) ? machine.backComments : Array(8).fill(""))
            .map(
              (comment, commentIndex) => `
            <div class="admin-spec-row">
              <input type="text" data-action="back-comment-field" data-machine-index="${machineIndex}" data-comment-index="${commentIndex}" value="${escapeHtml(comment)}" placeholder="Commentaire verso ${commentIndex + 1}" />
            </div>
          `
            )
            .join("")}
        </div>
        <div class="admin-spec-actions">
          <button class="admin-secondary" type="button" data-action="add-spec" data-spec-target="front" data-machine-index="${machineIndex}">Ajouter caractéristique recto</button>
        </div>
      </article>
    `
    )
    .join("");
}

function renderAdminTechnicalSheetsEditor() {
  adminTechnicalSheetsList.innerHTML = adminTechnicalSheetsDraft
    .map(
      (sheet, index) => `
      <article class="admin-tech-card">
        <div class="admin-machine-header">
          <h5>Fiche ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-tech-sheet" data-tech-index="${index}">Supprimer</button>
        </div>
        <label>Titre de la fiche<input type="text" data-action="tech-title" data-tech-index="${index}" value="${escapeHtml(sheet.title)}" /></label>
        <label>
          Image de la fiche (IMG)
          <div class="admin-file-field">
            <input class="admin-file-input admin-tech-image-input" type="file" accept="image/*" data-tech-index="${index}" />
            <div class="admin-file-picker"><button class="admin-file-button" type="button" data-action="pick-tech-image" data-tech-index="${index}">Choisir une image</button></div>
            <span class="admin-file-name">${sheet.image ? "Image prête" : "Aucune image"}</span>
          </div>
        </label>
        <img class="admin-preview" alt="Aperçu fiche ${index + 1}" style="display:${sheet.image ? "block" : "none"};" src="${sheet.image || ""}" />
        <label>
          Fichier technique téléchargeable
          <div class="admin-file-field">
            <input class="admin-file-input admin-tech-file-input" type="file" accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.webp" data-tech-index="${index}" />
            <div class="admin-file-picker"><button class="admin-file-button" type="button" data-action="pick-tech-file" data-tech-index="${index}">Choisir un document</button></div>
            <span class="admin-file-name">${escapeHtml(sheet.fileName || "Aucun fichier choisi")}</span>
          </div>
        </label>
      </article>
    `
    )
    .join("");
}

function renderAdminConfiguratorEditor() {
  if (!Array.isArray(adminComponentsDraft) || adminComponentsDraft.length === 0) {
    adminComponentsDraft = [createEmptyComponentCategory(0)];
    activeAdminComponentIndex = 0;
  }

  if (activeAdminComponentIndex >= adminComponentsDraft.length) {
    activeAdminComponentIndex = adminComponentsDraft.length - 1;
  }
  if (activeAdminComponentIndex < 0) activeAdminComponentIndex = 0;

  if (adminComponentSelect) {
    adminComponentSelect.innerHTML = adminComponentsDraft
      .map(
        (component, index) =>
          `<option value="${index}">${escapeHtml(component.label || `Catégorie ${index + 1}`)}</option>`
      )
      .join("");
    adminComponentSelect.value = String(activeAdminComponentIndex);
  }

  if (adminComponentMoveUpBtn) adminComponentMoveUpBtn.disabled = activeAdminComponentIndex <= 0;
  if (adminComponentMoveDownBtn) adminComponentMoveDownBtn.disabled = activeAdminComponentIndex >= adminComponentsDraft.length - 1;

  const component = adminComponentsDraft[activeAdminComponentIndex];
  const canMoveUp = activeAdminComponentIndex > 0;
  const canMoveDown = activeAdminComponentIndex < adminComponentsDraft.length - 1;

  adminComponentsList.innerHTML = `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>${escapeHtml(component.label || `Catégorie ${activeAdminComponentIndex + 1}`)}</h5>
          <div class="admin-option-actions">
            <button class="admin-secondary" type="button" data-action="move-component-up" data-component-index="${activeAdminComponentIndex}" ${canMoveUp ? "" : "disabled"}>Monter</button>
            <button class="admin-secondary" type="button" data-action="move-component-down" data-component-index="${activeAdminComponentIndex}" ${canMoveDown ? "" : "disabled"}>Descendre</button>
            <button class="admin-danger" type="button" data-action="remove-component" data-component-index="${activeAdminComponentIndex}">Supprimer</button>
          </div>
        </div>
        <label>Nom de la catégorie<input type="text" data-action="component-label" data-component-index="${activeAdminComponentIndex}" value="${escapeHtml(component.label)}" /></label>
        <div class="admin-spec-actions">
          <button class="admin-secondary" type="button" data-action="add-component-option" data-component-index="${activeAdminComponentIndex}">Ajouter produit</button>
          <button class="admin-secondary" type="button" data-action="add-multiple-component-options" data-count="3" data-component-index="${activeAdminComponentIndex}">Ajouter +3 produits</button>
        </div>
        <div class="admin-option-list">
          ${component.options
            .map(
              (option, oIndex) => `
            <div class="admin-option-row admin-option-product">
              <input type="text" data-action="component-option-name" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}" value="${escapeHtml(option.name)}" />
              <input type="number" min="0" step="1" data-action="component-option-price" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}" value="${Number(option.price)}" />
              <textarea rows="2" data-action="component-option-description" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}" placeholder="Description du produit (bouton i)">${escapeHtml(option.description || "")}</textarea>
              <div class="admin-file-field">
                <input class="admin-file-input admin-component-image-input" type="file" accept="image/*" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}" />
                <div class="admin-file-picker"><button class="admin-file-button" type="button" data-action="pick-component-image" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}">Image produit</button></div>
                <span class="admin-file-name">${option.image ? "Image prête" : "Aucune image"}</span>
              </div>
              <img class="admin-preview" alt="Aperçu produit" style="display:${option.image ? "block" : "none"};" src="${option.image || ""}" />
              <div class="admin-option-actions">
                <button class="admin-secondary" type="button" data-action="remove-component-image" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}">Retirer image</button>
                <button class="admin-danger" type="button" data-action="remove-component-option" data-component-index="${activeAdminComponentIndex}" data-option-index="${oIndex}">Supprimer produit</button>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </article>
    `;

  adminServicesList.innerHTML = adminServicesDraft
    .map(
      (service, sIndex) => `
      <article class="admin-machine-card">
        <div class="admin-option-row">
          <input type="text" data-action="service-label" data-service-index="${sIndex}" value="${escapeHtml(service.label)}" />
          <input type="number" min="0" step="1" data-action="service-price" data-service-index="${sIndex}" value="${Number(service.price)}" />
          <button class="admin-danger" type="button" data-action="remove-service" data-service-index="${sIndex}">X</button>
        </div>
        <label>
          Description du service (bouton i)
          <textarea rows="2" data-action="service-description" data-service-index="${sIndex}" placeholder="Description du service (bouton i)">${escapeHtml(service.description || "")}</textarea>
        </label>
        <label class="toggle"><input type="checkbox" data-action="service-checked" data-service-index="${sIndex}" ${service.checked ? "checked" : ""} />Coché par défaut</label>
      </article>
    `
    )
    .join("");
}

function renderAdminFaqEditor() {
  if (!adminFaqList) return;
  adminFaqList.innerHTML = adminFaqItemsDraft
    .map(
      (item, index) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Question ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-faq-item" data-faq-index="${index}">Supprimer</button>
        </div>
        <label>
          Question
          <input type="text" data-action="faq-question" data-faq-index="${index}" value="${escapeHtml(item.question)}" />
        </label>
        <label>
          Réponse
          <textarea rows="4" data-action="faq-answer" data-faq-index="${index}">${escapeHtml(item.answer)}</textarea>
        </label>
      </article>
    `
    )
    .join("");
}

function createEmptyGameItem(index = 0) {
  return {
    title: `Jeu ${index + 1}`,
    image: "",
  };
}

function renderAdminGamesEditor() {
  if (!adminGamesList) return;
  adminGamesList.innerHTML = adminGamesDraft
    .map(
      (item, index) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Jaquette ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-game-item" data-game-index="${index}">Supprimer</button>
        </div>
        <label>
          Titre du jeu (admin)
          <input type="text" data-action="game-title" data-game-index="${index}" value="${escapeHtml(item.title || "")}" />
        </label>
        <label>
          Fichier jaquette (IMG)
          <div class="admin-file-field">
            <input id="admin-game-file-${index}" class="admin-file-input" type="file" accept="image/*" />
            <div class="admin-file-picker">
              <button class="admin-file-button" type="button" data-file-target="admin-game-file-${index}">
                Choisir un fichier
              </button>
            </div>
            <span class="admin-file-name">${item.image ? "Jaquette chargée" : "Aucun fichier choisi"}</span>
          </div>
        </label>
        <img class="admin-preview" src="${escapeHtml(item.image || "")}" alt="Aperçu jaquette ${index + 1}" />
      </article>
    `
    )
    .join("");
}

function renderAdminSupportSavEditor() {
  if (!adminSupportCardsList || !adminSupportStepsList || !adminSupportFaqList) return;
  adminSupportCardsList.innerHTML = (adminSupportSavDraft.cards || [])
    .map(
      (item, index) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Bloc ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-support-card" data-support-card-index="${index}">Supprimer</button>
        </div>
        <label>
          Titre
          <input type="text" data-action="support-card-title" data-support-card-index="${index}" value="${escapeHtml(item.title)}" />
        </label>
        <label>
          Texte
          <textarea rows="3" data-action="support-card-text" data-support-card-index="${index}">${escapeHtml(item.text)}</textarea>
        </label>
        <label>
          Libellé bouton
          <input type="text" data-action="support-card-cta" data-support-card-index="${index}" value="${escapeHtml(item.ctaLabel)}" />
        </label>
      </article>
    `
    )
    .join("");

  adminSupportStepsList.innerHTML = (adminSupportSavDraft.steps || [])
    .map(
      (item, index) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Étape ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-support-step" data-support-step-index="${index}">Supprimer</button>
        </div>
        <label>
          Titre
          <input type="text" data-action="support-step-title" data-support-step-index="${index}" value="${escapeHtml(item.title)}" />
        </label>
        <label>
          Description
          <textarea rows="3" data-action="support-step-text" data-support-step-index="${index}">${escapeHtml(item.text)}</textarea>
        </label>
      </article>
    `
    )
    .join("");

  adminSupportFaqList.innerHTML = (adminSupportSavDraft.faq || [])
    .map(
      (item, index) => `
      <article class="admin-machine-card">
        <div class="admin-machine-header">
          <h5>Question support ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-support-faq-item" data-support-faq-index="${index}">Supprimer</button>
        </div>
        <label>
          Question
          <input type="text" data-action="support-faq-question" data-support-faq-index="${index}" value="${escapeHtml(item.question)}" />
        </label>
        <label>
          Réponse
          <textarea rows="4" data-action="support-faq-answer" data-support-faq-index="${index}">${escapeHtml(item.answer)}</textarea>
        </label>
      </article>
    `
    )
    .join("");
}

function renderAdminReviewsEditor() {
  if (!adminReviewsList) return;
  adminReviewsList.innerHTML = adminReviewsDraft
    .map(
      (item, index) => `
      <article class="admin-review-card">
        <div class="admin-machine-header">
          <h5>Avis ${index + 1}</h5>
          <button class="admin-danger" type="button" data-action="remove-review-item" data-review-index="${index}">Supprimer</button>
        </div>
        <div class="admin-review-top">
          <label>
            Nom client
            <input type="text" data-action="review-author" data-review-index="${index}" value="${escapeHtml(item.author)}" />
          </label>
          <label>
            Note
            <select data-action="review-rating" data-review-index="${index}">
              ${[5, 4, 3, 2, 1]
                .map((value) => `<option value="${value}" ${Number(item.rating) === value ? "selected" : ""}>${value} / 5</option>`)
                .join("")}
            </select>
          </label>
        </div>
        <label>
          Avis
          <textarea rows="4" data-action="review-text" data-review-index="${index}">${escapeHtml(item.text)}</textarea>
        </label>
        <div class="admin-review-actions">
          <label class="toggle">
            <input type="checkbox" data-action="review-approved" data-review-index="${index}" ${item.approved ? "checked" : ""} />
            Approuvé (visible sur le site)
          </label>
        </div>
      </article>
    `
    )
    .join("");
}

function setAdminProcessFeedback(message, tone = "") {
  if (!adminProcessFeedbackEl) return;
  const text = String(message || "");
  adminProcessFeedbackEl.textContent = text;
  adminProcessFeedbackEl.classList.remove("success", "error", "info");
  const isError = /(invalide|impossible|erreur|lourd|autoris|d'abord|mauvaise)/i.test(text);
  const isSuccess = /(déverrouillé|chargé|supprimé|réussi|enregistr|valide)/i.test(text);
  const variant = tone || (isError ? "error" : isSuccess ? "success" : "info");
  if (text) {
    adminProcessFeedbackEl.classList.add(variant);
    if (adminEditor && !adminEditor.classList.contains("hidden")) {
      showAdminToast(text, variant);
    }
  }
}

function setAdminRailwayUpdateFeedback(message, tone = "") {
  if (!adminRailwayUpdateFeedbackEl) return;
  const text = String(message || "");
  adminRailwayUpdateFeedbackEl.textContent = text;
  adminRailwayUpdateFeedbackEl.classList.remove("success", "error", "info");
  if (!text) return;
  const safeTone = tone === "success" || tone === "error" || tone === "info" ? tone : "info";
  adminRailwayUpdateFeedbackEl.classList.add(safeTone);
}

function getRailwayUpdateCommand() {
  return [
    'cd "/Users/brunosoler/Documents/Playground"',
    "git add .",
    'git commit -m "MAJ VortexBox" || echo "Aucun changement a commit"',
    "git push origin main",
  ].join("\n");
}

function isLocalRuntimeForTerminalLaunch() {
  const host = String(window.location.hostname || "").toLowerCase();
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

function openAdminRailwayUpdateModal() {
  if (!adminRailwayUpdateModalEl) return;
  if (adminRailwayUpdateCommandEl) adminRailwayUpdateCommandEl.value = getRailwayUpdateCommand();
  if (adminRailwayUpdateRunTerminalBtn) {
    const canLaunch = isLocalRuntimeForTerminalLaunch();
    adminRailwayUpdateRunTerminalBtn.disabled = !canLaunch;
    adminRailwayUpdateRunTerminalBtn.title = canLaunch
      ? "Lancer la commande dans Terminal"
      : "Disponible uniquement en local sur votre Mac (localhost)";
  }
  if (isLocalRuntimeForTerminalLaunch()) {
    setAdminRailwayUpdateFeedback("");
  } else {
    setAdminRailwayUpdateFeedback(
      "Mode en ligne: utilisez 'Copier la commande' ou 'Télécharger .command'. Le lancement direct Terminal fonctionne uniquement en local.",
      "info"
    );
  }
  adminRailwayUpdateModalEl.classList.remove("hidden");
}

function closeAdminRailwayUpdateModal() {
  if (!adminRailwayUpdateModalEl) return;
  adminRailwayUpdateModalEl.classList.add("hidden");
}

function setAdminBackupFeedback(message, tone = "") {
  if (!adminBackupFeedbackEl) return;
  const text = String(message || "");
  adminBackupFeedbackEl.textContent = text;
  adminBackupFeedbackEl.classList.remove("success", "error", "info");
  if (!text) return;
  const inferredError = /(refus|invalide|impossible|erreur|saturé|bloqué)/i.test(text);
  const inferredSuccess = /(prêt|télécharg|sauvegarde|réussi)/i.test(text);
  const variant = tone || (inferredError ? "error" : inferredSuccess ? "success" : "info");
  adminBackupFeedbackEl.classList.add(variant);
}

function formatBytes(value) {
  const bytes = Math.max(0, Number(value) || 0);
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function loadLastBackupState() {
  try {
    const raw = localStorage.getItem(ADMIN_LAST_BACKUP_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return {
      at: String(parsed.at || ""),
      fileName: String(parsed.fileName || ""),
      sizeBytes: Math.max(0, Number(parsed.sizeBytes) || 0),
    };
  } catch (error) {
    return null;
  }
}

function saveLastBackupState(state) {
  try {
    localStorage.setItem(ADMIN_LAST_BACKUP_KEY, JSON.stringify(state || {}));
  } catch (error) {}
}

function renderLastBackupState() {
  if (!adminBackupLastStateEl) return;
  const state = loadLastBackupState();
  if (!state || !state.at) {
    adminBackupLastStateEl.textContent = "Dernière sauvegarde: aucune";
    if (adminCcBackupEl) adminCcBackupEl.textContent = "Aucune";
    return;
  }
  const date = new Date(state.at);
  const dateLabel = Number.isNaN(date.getTime()) ? state.at : date.toLocaleString("fr-FR");
  const shortTime = Number.isNaN(date.getTime())
    ? "--:--"
    : date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  const nameLabel = state.fileName || "backup.zip";
  const sizeLabel = formatBytes(state.sizeBytes);
  adminBackupLastStateEl.textContent = `Dernière sauvegarde: ${dateLabel} - ${nameLabel} - ${sizeLabel}`;
  if (adminCcBackupEl) adminCcBackupEl.textContent = shortTime;
}

function updateAdminControlCenter() {
  if (adminCcTimeEl) {
    adminCcTimeEl.textContent = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  if (adminCcServerEl) {
    const online = typeof navigator === "undefined" ? true : navigator.onLine !== false;
    adminCcServerEl.textContent = online ? "En ligne" : "Hors ligne";
    adminCcServerEl.classList.toggle("is-offline", !online);
  }
}

function startAdminControlCenterClock() {
  if (adminControlClockTimer) clearInterval(adminControlClockTimer);
  updateAdminControlCenter();
  adminControlClockTimer = window.setInterval(updateAdminControlCenter, 1000);
}

async function triggerAdminBackupZipDownload() {
  setAdminBackupFeedback("Préparation de la sauvegarde ZIP en cours...", "info");
  try {
    const response = await fetch("/api/backup-site-zip", { cache: "no-store" });
    if (!response.ok) {
      let message =
        response.status === 404
          ? "Route de sauvegarde introuvable. Relancez le serveur avec: node server.js"
          : "Impossible de générer la sauvegarde ZIP.";
      try {
        const payload = await response.json();
        if (payload?.error) message = payload.error;
      } catch (error) {
        try {
          const text = await response.text();
          if (text && /not found/i.test(text)) {
            message = "Route de sauvegarde introuvable. Relancez le serveur avec: node server.js";
          }
        } catch (innerError) {}
      }
      throw new Error(message);
    }

    const blob = await response.blob();
    const disposition = response.headers.get("content-disposition") || "";
    const match = disposition.match(/filename=\"?([^\";]+)\"?/i);
    const fileName = match?.[1] || `vortexbox-site-backup-${Date.now()}.zip`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    saveLastBackupState({
      at: new Date().toISOString(),
      fileName,
      sizeBytes: blob.size || 0,
    });
    renderLastBackupState();
    setAdminBackupFeedback("Sauvegarde ZIP téléchargée avec succès.", "success");
  } catch (error) {
    const fallback =
      "Impossible de télécharger la sauvegarde ZIP. Vérifiez que le serveur est lancé avec: node server.js";
    setAdminBackupFeedback(error.message || fallback, "error");
  }
}

function setAdminProcessUnlocked(unlocked) {
  adminProcessUnlocked = Boolean(unlocked);
  if (adminProcessEditor) adminProcessEditor.classList.toggle("hidden", !adminProcessUnlocked);
}

function normalizeProcessLinkUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const parsed = new URL(withProtocol);
    if (!/^https?:$/i.test(parsed.protocol)) return "";
    return parsed.toString();
  } catch (error) {
    return "";
  }
}

function setAdminProcessSubtab(tabName) {
  const allowed = new Set(
    ["docs", ...adminProcessSubtabButtons.map((button) => String(button.dataset.processSubtab || "").trim()).filter(Boolean)]
  );
  activeAdminProcessSubtab = allowed.has(tabName) ? tabName : "docs";
  adminProcessSubtabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.processSubtab === activeAdminProcessSubtab);
  });
  adminProcessSectionPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.processSectionPanel !== activeAdminProcessSubtab);
  });
}

function getProcessSectionLabel(sectionKey) {
  return PROCESS_LINK_SECTIONS.find((item) => item.key === sectionKey)?.label || "Ressources";
}

function getProcessSectionDraft(sectionKey) {
  return Array.isArray(adminProcessSectionDrafts[sectionKey]) ? adminProcessSectionDrafts[sectionKey] : [];
}

function saveAdminProcessSubtabsOrder() {
  if (!adminProcessSubtabsContainer) return;
  const order = Array.from(adminProcessSubtabsContainer.querySelectorAll(".admin-tab[data-process-subtab]"))
    .map((btn) => String(btn.dataset.processSubtab || "").trim())
    .filter(Boolean);
  try {
    localStorage.setItem(ADMIN_PROCESS_SUBTABS_ORDER_KEY, JSON.stringify(order));
  } catch (error) {}
}

function applyAdminProcessSubtabsOrder() {
  if (!adminProcessSubtabsContainer) return;
  let order = [];
  try {
    const raw = localStorage.getItem(ADMIN_PROCESS_SUBTABS_ORDER_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    order = Array.isArray(parsed) ? parsed : [];
  } catch (error) {}

  const map = new Map(
    Array.from(adminProcessSubtabsContainer.querySelectorAll(".admin-tab[data-process-subtab]")).map((btn) => [
      String(btn.dataset.processSubtab || "").trim(),
      btn,
    ])
  );
  if (!map.size) return;

  order.forEach((key) => {
    const btn = map.get(key);
    if (!btn) return;
    adminProcessSubtabsContainer.appendChild(btn);
    map.delete(key);
  });
  map.forEach((btn) => adminProcessSubtabsContainer.appendChild(btn));
}

function enableAdminProcessSubtabsDrag() {
  if (!adminProcessSubtabsContainer) return;
  const subtabs = Array.from(adminProcessSubtabsContainer.querySelectorAll(".admin-tab[data-process-subtab]"));
  if (subtabs.length < 2) return;

  subtabs.forEach((btn) => btn.setAttribute("draggable", "true"));

  adminProcessSubtabsContainer.addEventListener("dragstart", (event) => {
    const btn = event.target.closest(".admin-tab[data-process-subtab]");
    if (!btn) return;
    adminProcessDragSubtabEl = btn;
    btn.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });

  adminProcessSubtabsContainer.addEventListener("dragend", () => {
    if (adminProcessDragSubtabEl) {
      adminProcessDragSubtabEl.classList.remove("dragging");
      adminProcessDragSubtabEl = null;
      saveAdminProcessSubtabsOrder();
    }
  });

  adminProcessSubtabsContainer.addEventListener("dragover", (event) => {
    if (!adminProcessDragSubtabEl) return;
    const target = event.target.closest(".admin-tab[data-process-subtab]");
    if (!target || target === adminProcessDragSubtabEl) return;
    event.preventDefault();
    const rect = target.getBoundingClientRect();
    const before = event.clientX < rect.left + rect.width / 2;
    if (before) {
      adminProcessSubtabsContainer.insertBefore(adminProcessDragSubtabEl, target);
    } else {
      adminProcessSubtabsContainer.insertBefore(adminProcessDragSubtabEl, target.nextSibling);
    }
  });
}

function saveAdminProcessQuicklinksOrder() {
  if (!adminProcessQuicklinksEl) return;
  const order = Array.from(adminProcessQuicklinksEl.querySelectorAll("[data-process-link-key]"))
    .map((link) => String(link.dataset.processLinkKey || "").trim())
    .filter(Boolean);
  try {
    localStorage.setItem(ADMIN_PROCESS_QUICKLINKS_ORDER_KEY, JSON.stringify(order));
  } catch (error) {}
}

function applyAdminProcessQuicklinksOrder() {
  if (!adminProcessQuicklinksEl) return;
  let order = [];
  try {
    const raw = localStorage.getItem(ADMIN_PROCESS_QUICKLINKS_ORDER_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    order = Array.isArray(parsed) ? parsed : [];
  } catch (error) {}
  const map = new Map(
    Array.from(adminProcessQuicklinksEl.querySelectorAll("[data-process-link-key]")).map((link) => [
      String(link.dataset.processLinkKey || "").trim(),
      link,
    ])
  );
  if (!map.size) return;
  order.forEach((key) => {
    const link = map.get(key);
    if (!link) return;
    adminProcessQuicklinksEl.appendChild(link);
    map.delete(key);
  });
  map.forEach((link) => adminProcessQuicklinksEl.appendChild(link));
}

function enableAdminProcessQuicklinksDrag() {
  if (!adminProcessQuicklinksEl) return;
  const links = Array.from(adminProcessQuicklinksEl.querySelectorAll("[data-process-link-key]"));
  links.forEach((link) => link.setAttribute("draggable", "false"));
}

function openAdminProcessLinkModal(sectionKey = "achats", index = -1) {
  if (!adminProcessLinkModalEl || !adminProcessLinkTitleInput || !adminProcessLinkUrlInput) return;
  activeAdminProcessLinkSection = PROCESS_LINK_SECTIONS.some((item) => item.key === sectionKey) ? sectionKey : "achats";
  activeAdminProcessLinkEditIndex = Number.isInteger(index) ? index : -1;
  const currentDraft = getProcessSectionDraft(activeAdminProcessLinkSection);
  const editing = activeAdminProcessLinkEditIndex >= 0 && currentDraft[activeAdminProcessLinkEditIndex];
  const current = editing ? currentDraft[activeAdminProcessLinkEditIndex] : { label: "", url: "" };
  adminProcessLinkTitleInput.value = String(current.label || "");
  adminProcessLinkUrlInput.value = String(current.url || "");
  if (adminProcessLinkSaveBtn) {
    adminProcessLinkSaveBtn.textContent = editing ? "Mettre à jour le lien" : "Enregistrer le lien";
  }
  const modalTitle = adminProcessLinkModalEl.querySelector(".admin-subtitle");
  const sectionLabel = getProcessSectionLabel(activeAdminProcessLinkSection);
  if (modalTitle) modalTitle.textContent = editing ? `Modifier - ${sectionLabel}` : `Nouveau - ${sectionLabel}`;
  adminProcessLinkModalEl.classList.remove("hidden");
  window.setTimeout(() => {
    adminProcessLinkTitleInput.focus();
  }, 0);
}

function closeAdminProcessLinkModal() {
  if (!adminProcessLinkModalEl) return;
  adminProcessLinkModalEl.classList.add("hidden");
  activeAdminProcessLinkEditIndex = -1;
  activeAdminProcessLinkSection = "achats";
}

async function saveAdminProcessLinkFromModal() {
  if (!adminProcessLinkTitleInput || !adminProcessLinkUrlInput) return;
  const label = String(adminProcessLinkTitleInput.value || "").trim();
  const rawUrl = String(adminProcessLinkUrlInput.value || "").trim();
  const normalizedUrl = normalizeProcessLinkUrl(rawUrl);
  if (!label) {
    setAdminProcessFeedback("Entrez le titre du site.");
    adminProcessLinkTitleInput.focus();
    return;
  }
  if (!normalizedUrl) {
    setAdminProcessFeedback("URL invalide. Collez une adresse web valide.");
    adminProcessLinkUrlInput.focus();
    return;
  }
  const sectionDraft = getProcessSectionDraft(activeAdminProcessLinkSection);
  if (activeAdminProcessLinkEditIndex >= 0 && sectionDraft[activeAdminProcessLinkEditIndex]) {
    sectionDraft[activeAdminProcessLinkEditIndex] = { label, url: normalizedUrl };
  } else {
    sectionDraft.push({ label, url: normalizedUrl });
  }
  adminProcessSectionDrafts[activeAdminProcessLinkSection] = sectionDraft;
  await persistProcessDraftsNow(
    activeAdminProcessLinkEditIndex >= 0
      ? `${getProcessSectionLabel(activeAdminProcessLinkSection)}: lien mis à jour.`
      : `${getProcessSectionLabel(activeAdminProcessLinkSection)}: lien ajouté.`
  );
  renderAdminProcessusEditor();
  closeAdminProcessLinkModal();
}

function openAdminProcessFileModal(index = -1) {
  if (!adminProcessFileModalEl || !adminProcessFileTitleInput || !adminProcessFileInputModal) return;
  activeAdminProcessFileEditIndex = Number.isInteger(index) ? index : -1;
  const editing = activeAdminProcessFileEditIndex >= 0 && adminProcessFilesDraft[activeAdminProcessFileEditIndex];
  const current = editing ? adminProcessFilesDraft[activeAdminProcessFileEditIndex] : createEmptyProcessFileItem(adminProcessFilesDraft.length);
  adminProcessFileTitleInput.value = String(current.title || "");
  adminProcessFileInputModal.value = "";
  if (adminProcessFileNameModalEl) {
    adminProcessFileNameModalEl.textContent = current.fileName || "Aucun fichier choisi";
  }
  if (adminProcessFileSaveBtn) {
    adminProcessFileSaveBtn.textContent = editing ? "Mettre à jour le PDF" : "Enregistrer le PDF";
  }
  const modalTitle = adminProcessFileModalEl.querySelector(".admin-subtitle");
  if (modalTitle) modalTitle.textContent = editing ? "Modifier Installation VB - PDF" : "Installation VB - PDF";
  adminProcessFileModalEl.classList.remove("hidden");
  window.setTimeout(() => {
    adminProcessFileTitleInput.focus();
  }, 0);
}

function closeAdminProcessFileModal() {
  if (!adminProcessFileModalEl) return;
  adminProcessFileModalEl.classList.add("hidden");
  activeAdminProcessFileEditIndex = -1;
}

async function saveAdminProcessFileFromModal() {
  if (!adminProcessFileTitleInput || !adminProcessFileInputModal) return;
  const title = String(adminProcessFileTitleInput.value || "").trim();
  if (!title) {
    setAdminProcessFeedback("Entrez le titre du document.");
    adminProcessFileTitleInput.focus();
    return;
  }

  const file = adminProcessFileInputModal.files && adminProcessFileInputModal.files[0];
  const editing = activeAdminProcessFileEditIndex >= 0 && adminProcessFilesDraft[activeAdminProcessFileEditIndex];
  if (!editing && !file) {
    setAdminProcessFeedback("Choisissez un PDF.");
    return;
  }

  let fileData = editing ? String(adminProcessFilesDraft[activeAdminProcessFileEditIndex].fileData || "") : "";
  let fileName = editing ? String(adminProcessFilesDraft[activeAdminProcessFileEditIndex].fileName || "") : "";
  let fileMime = editing
    ? String(adminProcessFilesDraft[activeAdminProcessFileEditIndex].fileMime || "application/pdf")
    : "application/pdf";

  if (file) {
    const isAllowedDoc = file.type === "application/pdf" || /\.(pdf|zip|rar)$/i.test(file.name);
    if (!isAllowedDoc) {
      setAdminProcessFeedback("Seuls les fichiers PDF, ZIP ou RAR sont autorisés.");
      return;
    }
    if (file.size > MAX_PROCESS_FILE_BYTES) {
      setAdminProcessFeedback("Fichier trop lourd. Limite: 20 MB par dossier.");
      return;
    }
    try {
      fileData = await readFileAsDataURL(file);
      fileName = file.name;
      fileMime = inferProcessFileMime(file.name, file.type || "application/octet-stream");
    } catch (error) {
      setAdminProcessFeedback("Impossible de lire le fichier.");
      return;
    }
  }

  const nextItem = { title, fileName, fileData, fileMime };
  if (editing) {
    adminProcessFilesDraft[activeAdminProcessFileEditIndex] = nextItem;
  } else {
    adminProcessFilesDraft.push(nextItem);
  }
  await persistProcessDraftsNow(editing ? "Fichier Installation VB mis à jour." : "Fichier Installation VB ajouté.");
  renderAdminProcessusEditor();
  closeAdminProcessFileModal();
}

function calculateStockItemMetrics(item) {
  const quantity = Math.max(0, Math.round(Number(item?.quantity) || 0));
  const buyPrice = Math.max(0, Number(item?.buyPrice) || 0);
  const salePrice = Math.max(0, Number(item?.salePrice) || 0);
  const marginUnit = salePrice - buyPrice;
  const marginRate = buyPrice > 0 ? (marginUnit / buyPrice) * 100 : salePrice > 0 ? 100 : 0;
  return {
    quantity,
    buyPrice,
    salePrice,
    marginUnit,
    marginRate,
    totalBuy: buyPrice * quantity,
    totalSale: salePrice * quantity,
    totalMargin: marginUnit * quantity,
  };
}

function formatPercent(value) {
  return `${Number(value || 0).toFixed(1)} %`;
}

function formatAdminDateTime(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";
  return date.toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
}

function touchCrmLead(index) {
  if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;
  adminCrmLeadsDraft[index].updatedAt = new Date().toISOString();
}

function setCrmLeadStatus(index, nextStatus) {
  if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;
  const status = CRM_STATUSES.includes(nextStatus) ? nextStatus : "Nouveau";
  adminCrmLeadsDraft[index].status = status;
  if (status !== "Perdu") adminCrmLeadsDraft[index].lostReason = "";
  touchCrmLead(index);
}

function ensureCrmTabOpen(index) {
  if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;
  if (!adminCrmOpenTabs.includes(index)) {
    adminCrmOpenTabs.push(index);
    if (adminCrmOpenTabs.length > 6) adminCrmOpenTabs.shift();
  }
}

function getCrmStatusClass(status) {
  const normalized = String(status || "").toLowerCase();
  if (normalized === "gagné") return "is-won";
  if (normalized === "perdu") return "is-lost";
  if (normalized === "négociation") return "is-negotiation";
  if (normalized === "devis") return "is-quote";
  if (normalized === "qualifié") return "is-qualified";
  return "is-new";
}

function buildCrmQuoteHtml(lead) {
  const today = new Date();
  const validUntil = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);
  const logoDataUri = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%2307d4ff'/%3E%3Cstop offset='1' stop-color='%230067ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='96' height='96' rx='22' fill='%23091e36'/%3E%3Crect x='5' y='5' width='86' height='86' rx='19' fill='none' stroke='url(%23g)' stroke-width='6'/%3E%3Ctext x='48' y='61' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='800' font-size='38' fill='%23dff7ff'%3EVB%3C/text%3E%3C/svg%3E";
  const quoteId = `DV-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${String(
    Math.max(1, Math.floor(Math.random() * 9999))
  ).padStart(4, "0")}`;
  const amount = Math.max(0, Number(lead?.dealValue || lead?.budget) || 0);
  const configRef = String(lead?.configRef || "Configuration personnalisée VortexBox").trim();
  const owner = String(lead?.owner || "Administrateur").trim();
  const contact = [String(lead?.email || "").trim(), String(lead?.phone || "").trim()].filter(Boolean).join(" · ");
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Devis ${escapeHtml(lead?.name || "VortexBox")}</title>
<style>
  :root{--p1:#06b6ff;--p2:#0b2340;--p3:#133a63;--ink:#0b2239;--muted:#56708a;}
  *{box-sizing:border-box} body{font-family:Arial,sans-serif;margin:0;background:#eef5fb;color:var(--ink);padding:28px}
  .sheet{max-width:920px;margin:0 auto;background:#fff;border:1px solid #d7e6f4;border-radius:18px;overflow:hidden;box-shadow:0 18px 36px rgba(8,27,49,.14)}
  .head{padding:22px 24px;background:linear-gradient(130deg,var(--p2),var(--p3));color:#ecf7ff}
  .brand{display:flex;align-items:center;gap:12px}
  .brand img{width:44px;height:44px;border-radius:10px;background:#08213b;padding:5px}
  .brand h1{margin:0;font-size:22px;letter-spacing:.02em}
  .meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:14px}
  .meta article{background:rgba(255,255,255,.08);border:1px solid rgba(176,230,255,.2);border-radius:10px;padding:9px}
  .meta p{margin:0;font-size:12px;color:#c8e8ff}.meta strong{display:block;margin-top:2px;font-size:14px;color:#fff}
  .body{padding:22px 24px}
  .section-title{font-size:13px;letter-spacing:.08em;color:#3b5b78;text-transform:uppercase;margin:0 0 9px}
  table{width:100%;border-collapse:collapse;margin-top:8px}
  td,th{border:1px solid #d6e7f6;padding:10px;text-align:left}
  th{background:#f3f9ff}
  .total{margin-top:14px;padding:14px;border-radius:12px;border:1px solid #cce5fa;background:linear-gradient(130deg,#f4fbff,#ecf6ff);display:flex;justify-content:space-between;align-items:center}
  .total strong{font-size:24px;color:#0b2f54}
  .foot{padding:14px 24px 20px;color:var(--muted);font-size:12px}
  .pill{display:inline-block;margin-top:8px;padding:4px 10px;border-radius:999px;background:#d9f4ff;color:#0b3f63;font-weight:700}
  @media print{body{padding:0;background:#fff}.sheet{max-width:none;border:none;border-radius:0;box-shadow:none}}
</style></head>
<body>
  <main class="sheet">
    <header class="head">
      <div class="brand">
        <img src="${logoDataUri}" alt="Logo VortexBox" />
        <h1>VortexBox - Devis Premium</h1>
      </div>
      <div class="meta">
        <article><p>N° Devis</p><strong>${quoteId}</strong></article>
        <article><p>Date d'émission</p><strong>${today.toLocaleDateString("fr-FR")}</strong></article>
        <article><p>Valable jusqu'au</p><strong>${validUntil.toLocaleDateString("fr-FR")}</strong></article>
      </div>
    </header>
    <section class="body">
      <p class="section-title">Informations client</p>
      <table>
        <tr><th>Nom / Prospect</th><td>${escapeHtml(lead?.name || "Client")}</td></tr>
        <tr><th>Contact</th><td>${escapeHtml(contact || "Non renseigné")}</td></tr>
        <tr><th>Commercial</th><td>${escapeHtml(owner)}</td></tr>
      </table>
      <p class="section-title" style="margin-top:18px">Détail de l'offre</p>
      <table>
        <tr><th>Référence configuration</th><td>${escapeHtml(configRef)}</td></tr>
        <tr><th>Package inclus</th><td>Build VortexBox assemblé, tests stabilité, support premium</td></tr>
      </table>
      <div class="total"><span>Montant estimé TTC</span><strong>${formatEuro(amount)}</strong></div>
      <span class="pill">Garantie matérielle 2 ans incluse</span>
    </section>
    <footer class="foot">
      Document généré depuis l'administration VortexBox.<br />
      Contact: VortexCore@outlook.Fr - Telegram: t.me/VortexCore460
    </footer>
  </main>
</body></html>`;
}

function renderAdminCrmEditor() {
  if (!adminProcessCrmListEl || !adminProcessCrmSummaryEl) return;
  const items = Array.isArray(adminCrmLeadsDraft) ? adminCrmLeadsDraft : [];
  const statusCounts = Object.fromEntries(CRM_STATUSES.map((status) => [status, 0]));
  items.forEach((item) => {
    const key = String(item.status || "Nouveau");
    if (Object.prototype.hasOwnProperty.call(statusCounts, key)) statusCounts[key] += 1;
  });
  const closedTotal = statusCounts["Gagné"] + statusCounts["Perdu"];
  const conversion = closedTotal > 0 ? Math.round((statusCounts["Gagné"] / closedTotal) * 100) : 0;
  const totalPipeline = items.reduce((sum, item) => sum + Math.max(0, Number(item.dealValue || item.budget) || 0), 0);
  adminProcessCrmSummaryEl.innerHTML = `
    <article class="admin-stock-kpi"><span>Prospects</span><strong>${items.length}</strong></article>
    <article class="admin-stock-kpi"><span>Nouveaux</span><strong>${statusCounts.Nouveau}</strong></article>
    <article class="admin-stock-kpi"><span>Qualifiés</span><strong>${statusCounts["Qualifié"]}</strong></article>
    <article class="admin-stock-kpi"><span>Devis</span><strong>${statusCounts.Devis}</strong></article>
    <article class="admin-stock-kpi"><span>Gagnés</span><strong>${statusCounts["Gagné"]}</strong></article>
    <article class="admin-stock-kpi"><span>Conversion</span><strong>${conversion}%</strong></article>
    <article class="admin-stock-kpi"><span>Pipeline</span><strong>${formatEuro(totalPipeline)}</strong></article>
  `;

  if (!items.length) {
    adminProcessCrmListEl.innerHTML = "<p>Aucun prospect CRM. Cliquez sur + Prospect CRM.</p>";
    activeAdminCrmLeadIndex = -1;
    adminCrmOpenTabs = [];
    return;
  }

  if (activeAdminCrmLeadIndex >= 0 && items[activeAdminCrmLeadIndex]) {
    ensureCrmTabOpen(activeAdminCrmLeadIndex);
  }
  adminCrmOpenTabs = adminCrmOpenTabs.filter((index) => Number.isInteger(index) && items[index]);
  const activeLead = activeAdminCrmLeadIndex >= 0 && items[activeAdminCrmLeadIndex] ? items[activeAdminCrmLeadIndex] : null;
  const userConfigsMap = loadUserConfigsMap();
  const linkedConfigs = activeLead?.email ? (userConfigsMap[String(activeLead.email).toLowerCase()] || []) : [];
  const searchNeedle = String(adminCrmSearchTerm || "").trim().toLowerCase();
  const matchLead = (lead) => {
    const statusOk = adminCrmFilterStatus === "all" || String(lead.status || "") === adminCrmFilterStatus;
    if (!statusOk) return false;
    if (!searchNeedle) return true;
    const haystack = `${lead.name || ""} ${lead.email || ""} ${lead.phone || ""} ${lead.source || ""} ${lead.owner || ""}`.toLowerCase();
    return haystack.includes(searchNeedle);
  };

  const boardHtml = CRM_STATUSES.map((status) => {
    const leads = items
      .map((lead, index) => ({ lead, index }))
      .filter((entry) => String(entry.lead.status || "Nouveau") === status && matchLead(entry.lead));
    return `
      <article class="admin-crm-column" data-crm-column="${status}">
        <header>
          <h5>${status}</h5>
          <span>${leads.length}</span>
        </header>
        <div class="admin-crm-cards">
          ${
            leads.length
              ? leads
                  .map(
                    ({ lead, index }) => `
                      <button
                        class="admin-crm-card ${getCrmStatusClass(lead.status)} ${index === activeAdminCrmLeadIndex ? "is-active" : ""}"
                        type="button"
                        data-action="crm-select"
                        data-crm-index="${index}"
                        draggable="true"
                      >
                        <strong>${escapeHtml(lead.name || `Prospect ${index + 1}`)}</strong>
                        <span>${escapeHtml(lead.email || "Email non renseigné")}</span>
                        <small>${formatEuro(Math.max(0, Number(lead.dealValue || lead.budget) || 0))} · ${escapeHtml(lead.priority || "Normale")}</small>
                      </button>
                    `
                  )
                  .join("")
              : '<p class="admin-file-name">Aucun prospect</p>'
          }
        </div>
      </article>
    `;
  }).join("");

  const nextActionButtons = activeLead
    ? CRM_STATUSES.filter((status) => status !== activeLead.status)
    .map(
      (status) =>
        `<button class="admin-secondary" type="button" data-action="crm-set-status" data-crm-index="${activeAdminCrmLeadIndex}" data-next-status="${status}">${status}</button>`
    )
    .join("")
    : "";

  const activitiesHtml = activeLead && Array.isArray(activeLead.activities) && activeLead.activities.length
    ? activeLead.activities
        .slice()
        .reverse()
        .map(
          (activity) =>
            `<li><strong>${formatAdminDateTime(activity.at)}</strong> - ${escapeHtml(activity.text || "")}</li>`
        )
        .join("")
    : "<li>Aucune action enregistrée.</li>";

  const crmTabsHtml = adminCrmOpenTabs.length
    ? adminCrmOpenTabs
        .map((index) => {
          const lead = items[index];
          if (!lead) return "";
          return `
            <div class="admin-crm-tab ${index === activeAdminCrmLeadIndex ? "is-active" : ""}">
              <button class="admin-crm-tab-open" type="button" data-action="crm-select" data-crm-index="${index}">
                <span>${escapeHtml(lead.name || `Prospect ${index + 1}`)}</span>
              </button>
              <button class="admin-crm-tab-close" type="button" data-action="crm-close-tab" data-crm-index="${index}" aria-label="Fermer">×</button>
            </div>
          `;
        })
        .join("")
    : '<span class="admin-file-name">Aucune fiche ouverte. Cliquez sur un prospect.</span>';

  const detailHtml = activeLead
    ? `
    <section class="admin-crm-board">${boardHtml}</section>
    <section class="admin-crm-tabs">${crmTabsHtml}</section>
    <section class="admin-tech-card admin-crm-detail">
      <div class="admin-machine-header">
        <h5 class="admin-subtitle">Fiche prospect</h5>
        <button class="admin-secondary" type="button" data-action="crm-close-detail">Fermer la fiche</button>
      </div>
      <div class="admin-stock-grid">
        <label>Nom<input type="text" data-action="crm-name" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.name || "")}" /></label>
        <label>Email<input type="email" data-action="crm-email" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.email || "")}" /></label>
        <label>Téléphone<input type="text" data-action="crm-phone" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.phone || "")}" /></label>
        <label>Source<input type="text" data-action="crm-source" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.source || "")}" /></label>
        <label>Responsable<input type="text" data-action="crm-owner" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.owner || "Administrateur")}" /></label>
        <label>Priorité
          <select data-action="crm-priority" data-crm-index="${activeAdminCrmLeadIndex}">
            ${CRM_PRIORITIES.map((priority) => `<option value="${priority}" ${activeLead.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}
          </select>
        </label>
        <label>Statut
          <select data-action="crm-status" data-crm-index="${activeAdminCrmLeadIndex}">
            ${CRM_STATUSES.map((status) => `<option value="${status}" ${activeLead.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>Budget (€)<input type="number" min="0" step="1" data-action="crm-budget" data-crm-index="${activeAdminCrmLeadIndex}" value="${Math.max(0, Number(activeLead.budget) || 0)}" /></label>
        <label>Valeur estimée (€)<input type="number" min="0" step="1" data-action="crm-deal-value" data-crm-index="${activeAdminCrmLeadIndex}" value="${Math.max(0, Number(activeLead.dealValue) || 0)}" /></label>
        <label>Rappel
          <input type="date" data-action="crm-next-reminder" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.nextReminder || "")}" />
        </label>
        <label>Config liée
          <input type="text" data-action="crm-config-ref" data-crm-index="${activeAdminCrmLeadIndex}" value="${escapeHtml(activeLead.configRef || "")}" placeholder="Ex: Config RTX 4070" />
        </label>
        <label>Configs utilisateur
          <input type="text" readonly value="${linkedConfigs.length}" />
        </label>
      </div>
      <label>Note
        <textarea rows="3" data-action="crm-note" data-crm-index="${activeAdminCrmLeadIndex}" placeholder="Notes commerciales...">${escapeHtml(activeLead.note || "")}</textarea>
      </label>
      <label>Motif perdu
        <textarea rows="2" data-action="crm-lost-reason" data-crm-index="${activeAdminCrmLeadIndex}" placeholder="Renseigner si perdu">${escapeHtml(activeLead.lostReason || "")}</textarea>
      </label>
      <div class="admin-option-actions">${nextActionButtons}</div>
      <div class="admin-option-actions">
        <button class="admin-secondary" type="button" data-action="crm-generate-quote" data-crm-index="${activeAdminCrmLeadIndex}">Générer devis</button>
        <button class="admin-secondary" type="button" data-action="crm-mark-order" data-crm-index="${activeAdminCrmLeadIndex}">Convertir en commande</button>
        <button class="admin-danger" type="button" data-action="remove-crm-lead" data-crm-index="${activeAdminCrmLeadIndex}">Supprimer prospect</button>
      </div>
      <p class="admin-file-name">Créé: ${formatAdminDateTime(activeLead.createdAt)} · MAJ: ${formatAdminDateTime(activeLead.updatedAt)} · Commande: ${escapeHtml(activeLead.orderNumber || "Aucune")}</p>
      <h6>Historique d'actions</h6>
      <ul class="admin-crm-activities">${activitiesHtml}</ul>
      <div class="admin-option-actions">
        <input id="admin-crm-new-activity" type="text" placeholder="Ex: Relance téléphonique effectuée" />
        <button class="admin-secondary" type="button" data-action="crm-add-activity" data-crm-index="${activeAdminCrmLeadIndex}">Ajouter action</button>
      </div>
    </section>
  `
    : `
    <section class="admin-crm-board">${boardHtml}</section>
    <section class="admin-crm-tabs">${crmTabsHtml}</section>
    <section class="admin-tech-card admin-crm-detail">
      <h5 class="admin-subtitle">Fiche prospect</h5>
      <p class="admin-file-name">Sélectionnez un prospect pour ouvrir et modifier sa fiche.</p>
    </section>
  `;

  adminProcessCrmListEl.innerHTML = detailHtml;
}

function renderAdminStockEditor() {
  if (!adminProcessStockListEl || !adminProcessStockSummaryEl) return;
  const items = Array.isArray(adminStockItemsDraft) ? adminStockItemsDraft : [];
  const metrics = items.map((item) => calculateStockItemMetrics(item));
  const totals = metrics.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.quantity,
      totalBuy: acc.totalBuy + item.totalBuy,
      totalSale: acc.totalSale + item.totalSale,
      totalMargin: acc.totalMargin + item.totalMargin,
    }),
    { quantity: 0, totalBuy: 0, totalSale: 0, totalMargin: 0 }
  );
  const totalMarginRate = totals.totalBuy > 0 ? (totals.totalMargin / totals.totalBuy) * 100 : 0;

  adminProcessStockSummaryEl.innerHTML = `
    <article class="admin-stock-kpi"><span>Produits</span><strong>${items.length}</strong></article>
    <article class="admin-stock-kpi"><span>Unités en stock</span><strong>${totals.quantity}</strong></article>
    <article class="admin-stock-kpi"><span>Valeur achat</span><strong>${formatEuro(totals.totalBuy)}</strong></article>
    <article class="admin-stock-kpi"><span>Valeur vente</span><strong>${formatEuro(totals.totalSale)}</strong></article>
    <article class="admin-stock-kpi"><span>Marge totale</span><strong>${formatEuro(totals.totalMargin)} (${formatPercent(totalMarginRate)})</strong></article>
  `;

  if (!items.length) {
    adminProcessStockListEl.innerHTML = "<p>Aucun produit stock. Cliquez sur + Produit.</p>";
    return;
  }

  adminProcessStockListEl.innerHTML = items
    .map((item, index) => {
      const itemMetrics = metrics[index];
      const marginClass = itemMetrics.totalMargin < 0 ? "neg" : itemMetrics.totalMargin > 0 ? "pos" : "neutral";
      return `
        <article class="admin-stock-row admin-tech-card">
          <div class="admin-stock-grid">
            <label>
              Produit
              <input type="text" data-action="stock-name" data-stock-index="${index}" value="${escapeHtml(item.name || "")}" />
            </label>
            <label>
              Stock
              <input type="number" min="0" step="1" data-action="stock-qty" data-stock-index="${index}" value="${itemMetrics.quantity}" />
            </label>
            <label>
              Prix achat (€)
              <input type="number" min="0" step="0.01" data-action="stock-buy" data-stock-index="${index}" value="${itemMetrics.buyPrice}" />
            </label>
            <label>
              Prix vente (€)
              <input type="number" min="0" step="0.01" data-action="stock-sale" data-stock-index="${index}" value="${itemMetrics.salePrice}" />
            </label>
          </div>
          <div class="admin-stock-line ${marginClass}">
            <span>Marge unitaire: <strong>${formatEuro(itemMetrics.marginUnit)}</strong> (${formatPercent(itemMetrics.marginRate)})</span>
            <span>Marge totale: <strong>${formatEuro(itemMetrics.totalMargin)}</strong></span>
            <button class="admin-danger" type="button" data-action="remove-stock-item" data-stock-index="${index}">Supprimer</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAdminSupplierOrdersEditor() {
  if (!adminProcessSuppliersListEl) return;
  const items = Array.isArray(adminSupplierOrdersDraft) ? adminSupplierOrdersDraft : [];
  if (!items.length) {
    adminProcessSuppliersListEl.innerHTML = "<p>Aucune commande. Cliquez sur + Commande.</p>";
    return;
  }

  adminProcessSuppliersListEl.innerHTML = items
    .map((item, index) => `
      <article class="admin-supplier-order-row admin-tech-card">
        <div class="admin-supplier-order-grid">
          <label>
            Nom
            <input type="text" data-action="supplier-order-last-name" data-supplier-order-index="${index}" value="${escapeHtml(item.lastName || "")}" />
          </label>
          <label>
            Prénom
            <input type="text" data-action="supplier-order-first-name" data-supplier-order-index="${index}" value="${escapeHtml(item.firstName || "")}" />
          </label>
          <label>
            Adresse
            <input type="text" data-action="supplier-order-address" data-supplier-order-index="${index}" value="${escapeHtml(item.address || "")}" />
          </label>
          <label>
            Code postal
            <input type="text" data-action="supplier-order-postal" data-supplier-order-index="${index}" value="${escapeHtml(item.postalCode || "")}" />
          </label>
          <label>
            Ville
            <input type="text" data-action="supplier-order-city" data-supplier-order-index="${index}" value="${escapeHtml(item.city || "")}" />
          </label>
          <label>
            Numéro de téléphone
            <input type="text" data-action="supplier-order-phone" data-supplier-order-index="${index}" value="${escapeHtml(item.phone || "")}" />
          </label>
        </div>
        <div class="admin-supplier-order-actions">
          <button class="admin-danger" type="button" data-action="remove-supplier-order" data-supplier-order-index="${index}">Supprimer</button>
        </div>
      </article>
    `)
    .join("");
}

function renderAdminDeliveryEditor() {
  if (!adminProcessDeliveryListEl || !adminProcessDeliverySummaryEl) return;
  const items = Array.isArray(adminDeliveryItemsDraft) ? adminDeliveryItemsDraft : [];
  const totalFees = items.reduce((sum, item) => sum + Math.max(0, Number(item?.fees) || 0), 0);
  adminProcessDeliverySummaryEl.innerHTML = `
    <article class="admin-stock-kpi"><span>Livraisons</span><strong>${items.length}</strong></article>
    <article class="admin-stock-kpi"><span>Frais totaux</span><strong>${formatEuro(totalFees)}</strong></article>
  `;

  if (!items.length) {
    adminProcessDeliveryListEl.innerHTML = "<p>Aucune livraison. Cliquez sur + Livraison.</p>";
    return;
  }

  adminProcessDeliveryListEl.innerHTML = items
    .map((item, index) => `
      <article class="admin-delivery-row admin-tech-card">
        <div class="admin-delivery-grid">
          <label>
            Nom
            <input type="text" data-action="delivery-last-name" data-delivery-index="${index}" value="${escapeHtml(item.lastName || "")}" />
          </label>
          <label>
            Prénom
            <input type="text" data-action="delivery-first-name" data-delivery-index="${index}" value="${escapeHtml(item.firstName || "")}" />
          </label>
          <label>
            Numéro de commande
            <input type="text" data-action="delivery-order-number" data-delivery-index="${index}" value="${escapeHtml(item.orderNumber || "")}" />
          </label>
          <label>
            Frais (€)
            <input type="number" min="0" step="0.01" data-action="delivery-fees" data-delivery-index="${index}" value="${Math.max(0, Number(item.fees) || 0)}" />
          </label>
        </div>
        <div class="admin-delivery-actions">
          <span>Frais: <strong>${formatEuro(Math.max(0, Number(item.fees) || 0))}</strong></span>
          <button class="admin-danger" type="button" data-action="remove-delivery-item" data-delivery-index="${index}">Supprimer</button>
        </div>
      </article>
    `)
    .join("");
}

function renderAdminSavEditor() {
  if (!adminProcessSavListEl || !adminProcessSavSummaryEl) return;
  const items = Array.isArray(adminSavItemsDraft) ? adminSavItemsDraft : [];
  const returnedCount = items.filter((item) => Boolean(item.returned)).length;
  adminProcessSavSummaryEl.innerHTML = `
    <article class="admin-stock-kpi"><span>Dossiers SAV</span><strong>${items.length}</strong></article>
    <article class="admin-stock-kpi"><span>Renvoie coché</span><strong>${returnedCount}</strong></article>
  `;

  if (!items.length) {
    adminProcessSavListEl.innerHTML = "<p>Aucun dossier SAV. Cliquez sur + Dossier SAV.</p>";
    return;
  }

  adminProcessSavListEl.innerHTML = items
    .map((item, index) => `
      <article class="admin-sav-row admin-tech-card">
        <div class="admin-sav-grid">
          <label>
            Nom
            <input type="text" data-action="sav-last-name" data-sav-index="${index}" value="${escapeHtml(item.lastName || "")}" />
          </label>
          <label>
            Prénom
            <input type="text" data-action="sav-first-name" data-sav-index="${index}" value="${escapeHtml(item.firstName || "")}" />
          </label>
          <label>
            Adresse
            <input type="text" data-action="sav-address" data-sav-index="${index}" value="${escapeHtml(item.address || "")}" />
          </label>
          <label>
            Code postal
            <input type="text" data-action="sav-postal" data-sav-index="${index}" value="${escapeHtml(item.postalCode || "")}" />
          </label>
          <label>
            Ville
            <input type="text" data-action="sav-city" data-sav-index="${index}" value="${escapeHtml(item.city || "")}" />
          </label>
          <label>
            Type de machine
            <input type="text" data-action="sav-machine-type" data-sav-index="${index}" value="${escapeHtml(item.machineType || "")}" />
          </label>
        </div>
        <div class="admin-sav-comments">
          <label>
            Problème
            <textarea rows="3" data-action="sav-problem" data-sav-index="${index}" placeholder="Commentaire problème...">${escapeHtml(item.problem || "")}</textarea>
          </label>
          <label>
            Résolution
            <textarea rows="3" data-action="sav-resolution" data-sav-index="${index}" placeholder="Commentaire résolution...">${escapeHtml(item.resolution || "")}</textarea>
          </label>
        </div>
        <div class="admin-sav-actions">
          <label class="admin-sav-returned">
            <input type="checkbox" data-action="sav-returned" data-sav-index="${index}" ${item.returned ? "checked" : ""} />
            <span>Renvoie</span>
          </label>
          <button class="admin-danger" type="button" data-action="remove-sav-item" data-sav-index="${index}">Supprimer</button>
        </div>
      </article>
    `)
    .join("");
}

function renderAdminProcessGamesEditor() {
  if (!adminProcessGamesListEl) return;
  const items = Array.isArray(adminProcessGamesFilesDraft) ? adminProcessGamesFilesDraft : [];
  if (!items.length) {
    adminProcessGamesListEl.innerHTML = "<p>Aucun ZIP Games. Cliquez sur Uploader un ZIP Games.</p>";
    return;
  }
  adminProcessGamesListEl.innerHTML = items
    .map((item, index) => {
      const safePath = String(item.path || "").replace(/^\/+/, "");
      const displayFile = String(item.fileName || safePath.split("/").pop() || `games-${index + 1}.zip`);
      const title = String(item.title || displayFile.replace(/\.zip$/i, "") || `Archive Games ${index + 1}`);
      const createdAtRaw = String(item.createdAt || "").trim();
      const createdDate = createdAtRaw ? new Date(createdAtRaw) : null;
      const createdLabel =
        createdDate && !Number.isNaN(createdDate.getTime())
          ? createdDate.toLocaleString("fr-FR")
          : "Date inconnue";
      const sizeLabel = formatBytes(item.sizeBytes);
      return `
        <article class="admin-tech-card">
          <div class="admin-machine-header">
            <h5>ZIP Games ${index + 1}</h5>
            <div class="admin-option-actions">
              <a class="download-btn" href="/${escapeHtml(safePath)}" download="${escapeHtml(displayFile)}">Retélécharger</a>
              <button class="admin-danger" type="button" data-action="remove-process-game-file" data-process-game-index="${index}">Supprimer</button>
            </div>
          </div>
          <label>
            Nom affiché
            <input type="text" data-action="process-game-title" data-process-game-index="${index}" value="${escapeHtml(title)}" />
          </label>
          <p class="admin-file-name">${escapeHtml(displayFile)} - ${escapeHtml(sizeLabel)} - ${escapeHtml(createdLabel)}</p>
        </article>
      `;
    })
    .join("");
}

function renderAdminProcessGamesAssignmentForm() {
  const items = Array.isArray(adminProcessGamesFilesDraft) ? adminProcessGamesFilesDraft : [];
  const users = loadSiteUsers().filter((item) => item.email && !isAdminEmail(item.email) && item.isActive && !item.revoked && !item.blacklisted);
  if (adminGamesAssignUserSelect) {
    if (!users.length) {
      adminGamesAssignUserSelect.innerHTML = '<option value="">Aucun utilisateur actif</option>';
    } else {
      const current = String(adminGamesAssignUserSelect.value || "").trim().toLowerCase();
      adminGamesAssignUserSelect.innerHTML = users
        .map((user) => {
          const label = user.displayName ? `${user.displayName} (${user.email})` : user.email;
          return `<option value="${escapeHtml(user.email)}">${escapeHtml(label)}</option>`;
        })
        .join("");
      if (users.some((user) => user.email === current)) adminGamesAssignUserSelect.value = current;
    }
  }

  if (adminGamesAssignFileSelect) {
    if (!items.length) {
      adminGamesAssignFileSelect.innerHTML = '<option value="">Aucun ZIP disponible</option>';
    } else {
      const current = String(adminGamesAssignFileSelect.value || "").trim();
      adminGamesAssignFileSelect.innerHTML = items
        .map((item, index) => {
          const fileName = String(item.fileName || item.path || `games-${index + 1}.zip`);
          const title = String(item.title || fileName.replace(/\.zip$/i, ""));
          return `<option value="${escapeHtml(item.path)}">${escapeHtml(title)} - ${escapeHtml(fileName)}</option>`;
        })
        .join("");
      if (items.some((item) => String(item.path) === current)) adminGamesAssignFileSelect.value = current;
      if (!adminGamesAssignFileSelect.value && items[0]?.path) {
        adminGamesAssignFileSelect.value = String(items[0].path);
      }
    }
  }
  if (adminGamesAssignBtn) {
    adminGamesAssignBtn.disabled = !users.length || !items.length;
  }
}

function renderAdminProcessGamesAssignmentsEditor() {
  if (!adminProcessGamesAssignmentsListEl) return;
  const items = Array.isArray(adminProcessGamesAssignmentsDraft) ? adminProcessGamesAssignmentsDraft : [];
  if (!items.length) {
    adminProcessGamesAssignmentsListEl.innerHTML = "<p>Aucune attribution Games pour le moment.</p>";
    return;
  }
  adminProcessGamesAssignmentsListEl.innerHTML = items
    .slice()
    .sort((a, b) => new Date(b.assignedAt || 0).getTime() - new Date(a.assignedAt || 0).getTime())
    .map((item, index) => {
      const status = getGamesAssignmentStatus(item);
      const remaining = Math.max(0, Math.max(1, Number(item.maxDownloads) || 1) - Math.max(0, Number(item.downloadCount) || 0));
      const expiry = item.expiresAt ? new Date(item.expiresAt).toLocaleDateString("fr-FR") : "Aucune";
      const assigned = item.assignedAt ? new Date(item.assignedAt).toLocaleString("fr-FR") : "N/A";
      return `
        <article class="admin-tech-card">
          <div class="admin-machine-header">
            <h5>${escapeHtml(item.title || item.fileName || `Attribution ${index + 1}`)}</h5>
            <div class="admin-option-actions">
              ${
                item.revoked
                  ? `<button class="admin-secondary" type="button" data-action="reactivate-process-game-assignment" data-assignment-id="${escapeHtml(item.id)}">Réactiver</button>`
                  : `<button class="admin-danger" type="button" data-action="revoke-process-game-assignment" data-assignment-id="${escapeHtml(item.id)}">Révoquer</button>`
              }
              <button class="admin-danger" type="button" data-action="remove-process-game-assignment" data-assignment-id="${escapeHtml(item.id)}">Supprimer</button>
            </div>
          </div>
          <p class="admin-file-name">${escapeHtml(item.email)} - ${escapeHtml(item.fileName || "")}</p>
          <p class="admin-file-name">Statut: ${escapeHtml(formatGamesAssignmentStatus(status))} | Restants: ${remaining} | Expiration: ${escapeHtml(expiry)}</p>
          <p class="admin-file-name">Attribué le: ${escapeHtml(assigned)}</p>
        </article>
      `;
    })
    .join("");
}

function renderAdminProcessusEditor() {
  if (!adminProcessList) return;
  setAdminProcessSubtab(activeAdminProcessSubtab);
  renderAdminCrmEditor();
  renderAdminProcessGamesEditor();
  renderAdminProcessGamesAssignmentForm();
  renderAdminProcessGamesAssignmentsEditor();
  renderAdminSupplierOrdersEditor();
  renderAdminStockEditor();
  renderAdminSavEditor();
  renderAdminDeliveryEditor();

  if (!Array.isArray(adminProcessFilesDraft) || adminProcessFilesDraft.length === 0) {
    adminProcessList.innerHTML = "<p>Aucun PDF Installation VB pour le moment.</p>";
  } else {
    adminProcessList.innerHTML = adminProcessFilesDraft
    .map((item, index) => {
      const safeTitle = sanitizeFileName(item.title, `dossier-confidentiel-${index + 1}`);
      const fileHref = resolveProcessFileHref(item);
      const suggestedName = inferProcessFileName(item, index);
      const downloadBtn = fileHref
        ? `<a class="download-btn" href="${fileHref}" download="${sanitizeFileName(suggestedName, suggestedName)}">Télécharger</a>`
        : '<span class="admin-file-name">Fichier non chargé</span>';
      return `
        <article class="admin-tech-card">
          <div class="admin-machine-header">
            <h5>${escapeHtml(item.title || `Installation VB ${index + 1}`)}</h5>
            <div class="admin-option-actions">
              <button class="admin-secondary" type="button" data-action="edit-process-file" data-process-index="${index}">Modifier</button>
              <button class="admin-danger" type="button" data-action="remove-process-file" data-process-index="${index}">Supprimer</button>
            </div>
          </div>
          <p class="admin-file-name">${escapeHtml(suggestedName || "Aucun fichier choisi")}</p>
          <div class="technical-actions">${downloadBtn}</div>
        </article>
      `;
    })
    .join("");
  }

  adminProcessLinksLists.forEach((listEl) => {
    const sectionKey = String(listEl.dataset.section || "").trim();
    const sectionLabel = getProcessSectionLabel(sectionKey);
    const sectionDraft = getProcessSectionDraft(sectionKey);
    if (!sectionDraft.length) {
      listEl.innerHTML = `<p>Aucune entrée pour ${escapeHtml(sectionLabel)}.</p>`;
      return;
    }
    listEl.innerHTML = sectionDraft
      .map((item, index) => {
        const normalizedUrl = normalizeProcessLinkUrl(item.url);
        const linkButton = normalizedUrl
          ? `<a class="download-btn" href="${normalizedUrl}" target="_blank" rel="noopener noreferrer">Ouvrir le lien</a>`
          : '<span class="admin-file-name">URL invalide ou vide</span>';
        return `
          <article class="admin-tech-card">
            <div class="admin-machine-header">
              <h5>${escapeHtml(item.label || `Entrée ${index + 1}`)}</h5>
              <div class="admin-option-actions">
                <button class="admin-secondary" type="button" data-action="edit-process-link" data-process-link-index="${index}" data-process-link-section="${escapeHtml(sectionKey)}">Modifier</button>
                <button class="admin-danger" type="button" data-action="remove-process-link" data-process-link-index="${index}" data-process-link-section="${escapeHtml(sectionKey)}">Supprimer</button>
              </div>
            </div>
            <p class="admin-file-name">${escapeHtml(item.url || "Adresse non renseignée")}</p>
            <div class="technical-actions">${linkButton}</div>
          </article>
        `;
      })
      .join("");
  });
}

function renderAdminAboutGalleryEditor() {
  if (!adminAboutGalleryList) return;
  const photos = Array.isArray(adminAboutGalleryDraft.photos) ? adminAboutGalleryDraft.photos : [];
  if (adminAddAboutGalleryPhotoBtn) {
    const isLimitReached = photos.length >= MAX_ABOUT_GALLERY_PHOTOS;
    adminAddAboutGalleryPhotoBtn.disabled = isLimitReached;
    adminAddAboutGalleryPhotoBtn.title = isLimitReached
      ? `Limite atteinte (${MAX_ABOUT_GALLERY_PHOTOS} photos).`
      : "";
  }
  if (photos.length === 0) {
    adminAboutGalleryList.innerHTML = "<p>Aucune photo. Cliquez sur Ajouter une photo.</p>";
    return;
  }

  adminAboutGalleryList.innerHTML = photos
    .map((item, index) => {
      const fileInputId = `admin-about-gallery-file-${index}`;
      return `
        <div class="admin-config-image-item">
          <label>
            Image ${index + 1}
            <div class="admin-file-field">
              <input id="${fileInputId}" class="admin-file-input" type="file" accept="image/*" data-action="about-gallery-file" data-about-gallery-index="${index}" />
              <div class="admin-file-picker">
                <button class="admin-file-button" type="button" data-file-target="${fileInputId}">
                  Choisir une image
                </button>
              </div>
              <span class="admin-file-name">${escapeHtml(item.fileName || (item.image ? "Image prête" : "Aucune image"))}</span>
            </div>
          </label>
          ${item.image ? `<img class="admin-preview" src="${item.image}" alt="Aperçu photo défilante ${index + 1}" style="display:block;" />` : '<img class="admin-preview" alt="Aperçu photo défilante" style="display:none;" />'}
          <button class="admin-secondary" type="button" data-action="about-gallery-remove" data-about-gallery-index="${index}">Supprimer</button>
        </div>
      `;
    })
    .join("");
}

function addAdminAboutGalleryPhoto() {
  const photos = Array.isArray(adminAboutGalleryDraft.photos) ? adminAboutGalleryDraft.photos : [];
  if (photos.length >= MAX_ABOUT_GALLERY_PHOTOS) {
    setFeedback(`Limite atteinte: ${MAX_ABOUT_GALLERY_PHOTOS} photos maximum.`, "info");
    return;
  }
  photos.push({ title: `Photo ${photos.length + 1}`, image: "", fileName: "" });
  adminAboutGalleryDraft.photos = photos;
  renderAdminAboutGalleryEditor();
  setFeedback("Nouvelle photo ajoutée.");
}

function fillAdminFields() {
  adminHeroTitle.value = siteContent.heroTitle;
  adminMachinesTitle.value = siteContent.machinesTitle;
  if (adminNavThemeSelect) {
    adminNavThemeSelect.value = ["aurora", "frost", "obsidian"].includes(String(siteContent.navTheme || ""))
      ? siteContent.navTheme
      : "aurora";
  }
  const menuBadges = normalizeMenuBadges(siteContent.menuBadges);
  const badgeSelects = {
    machines: adminMenuBadgeMachinesSelect,
    configurateur: adminMenuBadgeConfiguratorSelect,
    support: adminMenuBadgeSupportSelect,
    fiches: adminMenuBadgeFichesSelect,
    guides: adminMenuBadgeGuidesSelect,
    jeux: adminMenuBadgeJeuxSelect,
    about: adminMenuBadgeAboutSelect,
    faq: adminMenuBadgeFaqSelect,
  };
  MENU_BADGE_KEYS.forEach((key) => {
    const value = String(menuBadges[key] || "");
    const select = badgeSelects[key];
    const customInput = getAdminMenuBadgeCustomInput(key);
    const isPreset = ["", "nouveau", "promo", "hot"].includes(value.toLowerCase());
    if (select) select.value = isPreset ? value.toLowerCase() : "custom";
    if (customInput) customInput.value = isPreset ? "" : value;
    syncAdminMenuBadgeCustomState(key, select?.value || "", customInput?.value || "");
  });
  if (adminFooterEmailInput) {
    adminFooterEmailInput.value = siteContent.footerContactEmail || DEFAULT_CONTENT.footerContactEmail;
  }
  const legal = normalizeLegalContent(siteContent.legal);
  if (adminLegalMentionsLabelInput) adminLegalMentionsLabelInput.value = legal.mentions.label;
  if (adminLegalMentionsTitleInput) adminLegalMentionsTitleInput.value = legal.mentions.title;
  if (adminLegalMentionsContentInput) adminLegalMentionsContentInput.value = legal.mentions.content;
  if (adminLegalCgvLabelInput) adminLegalCgvLabelInput.value = legal.cgv.label;
  if (adminLegalCgvTitleInput) adminLegalCgvTitleInput.value = legal.cgv.title;
  if (adminLegalCgvContentInput) adminLegalCgvContentInput.value = legal.cgv.content;
  if (adminLegalRgpdLabelInput) adminLegalRgpdLabelInput.value = legal.rgpd.label;
  if (adminLegalRgpdTitleInput) adminLegalRgpdTitleInput.value = legal.rgpd.title;
  if (adminLegalRgpdContentInput) adminLegalRgpdContentInput.value = legal.rgpd.content;
  if (adminLegalCookiesLabelInput) adminLegalCookiesLabelInput.value = legal.cookies.label;
  if (adminLegalCookiesTitleInput) adminLegalCookiesTitleInput.value = legal.cookies.title;
  if (adminLegalCookiesContentInput) adminLegalCookiesContentInput.value = legal.cookies.content;
  renderUserLog();
  renderAdminUsersManager();
  renderAdminVortexBotHistory();
  renderAdminPromoCodes();
  if (adminPromoEmailInput) adminPromoEmailInput.value = "";
  if (adminGeneratedPromoCodeEl) adminGeneratedPromoCodeEl.textContent = "";
  setAdminPromoFeedback("");
  setAdminBackupFeedback("");
  renderLastBackupState();
  renderAdminHistoryOptions();
  if (adminAutosaveLastAt) {
    setAdminAutosaveStatus(`Dernier auto-save: ${new Date(adminAutosaveLastAt).toLocaleTimeString("fr-FR")}`, "info");
  } else {
    setAdminAutosaveStatus("");
  }
  renderAdminOverviewKpis();
  renderAdminLivePreview();

  adminMachinesDraft = normalizeMachines(JSON.parse(JSON.stringify(siteContent.machines))).map((machine) =>
    ensureMachineBackFields(machine)
  );
  adminTechnicalSheetsDraft = JSON.parse(JSON.stringify(siteContent.technicalSheets || []));
  adminAboutVideosDraft = JSON.parse(JSON.stringify(siteContent.aboutVideos || cloneDefaultContent().aboutVideos));
  adminAboutGalleryDraft = JSON.parse(JSON.stringify(siteContent.aboutGallery || cloneDefaultContent().aboutGallery));
  if (!Array.isArray(adminAboutGalleryDraft.photos)) adminAboutGalleryDraft.photos = [];
  revokeAllAdminAboutPreviews();
  adminFaqItemsDraft = JSON.parse(JSON.stringify(siteContent.faqItems || cloneDefaultContent().faqItems));
  adminGamesDraft = JSON.parse(JSON.stringify(siteContent.gamesCatalog || cloneDefaultContent().gamesCatalog));
  adminSupportSavDraft = JSON.parse(
    JSON.stringify(siteContent.supportSav || cloneDefaultContent().supportSav)
  );
  adminReviewsDraft = JSON.parse(JSON.stringify(siteContent.reviews || cloneDefaultContent().reviews));
  adminProcessFilesDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.files || cloneDefaultContent().processus.files)
  );
  adminProcessSectionDrafts = {
    achats: JSON.parse(JSON.stringify(siteContent.processus?.purchases || cloneDefaultContent().processus.purchases)),
  };
  adminCrmLeadsDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.crmLeads || cloneDefaultContent().processus.crmLeads)
  );
  adminProcessGamesFilesDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.gamesFiles || cloneDefaultContent().processus.gamesFiles)
  );
  adminProcessGamesAssignmentsDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.gamesAssignments || cloneDefaultContent().processus.gamesAssignments)
  );
  activeAdminCrmLeadIndex = -1;
  adminCrmOpenTabs = [];
  adminCrmSearchTerm = "";
  adminCrmFilterStatus = "all";
  if (adminCrmSearchInput) adminCrmSearchInput.value = "";
  if (adminCrmFilterStatusSelect) adminCrmFilterStatusSelect.value = "all";
  adminSupplierOrdersDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.suppliersOrders || cloneDefaultContent().processus.suppliersOrders)
  );
  adminStockItemsDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.stockItems || cloneDefaultContent().processus.stockItems)
  );
  adminSavItemsDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.savItems || cloneDefaultContent().processus.savItems)
  );
  adminDeliveryItemsDraft = JSON.parse(
    JSON.stringify(siteContent.processus?.deliveryItems || cloneDefaultContent().processus.deliveryItems)
  );
  setAdminProcessSubtab("crm");
  setAdminProcessUnlocked(false);
  if (adminProcessPasswordInput) adminProcessPasswordInput.value = "";
  setAdminProcessFeedback("");
  adminComponentsDraft = JSON.parse(JSON.stringify(siteContent.configurator.components));
  activeAdminComponentIndex = 0;
  adminServicesDraft = JSON.parse(JSON.stringify(siteContent.configurator.services));
  adminConfiguratorImagesDraft = Array.isArray(siteContent.configurator.visualImages)
    ? [0, 1, 2].map((i) => siteContent.configurator.visualImages[i] || "")
    : ["", "", ""];

  renderAdminMachinesEditor();
  renderAdminTechnicalSheetsEditor();
  renderAdminConfiguratorEditor();
  renderAdminFaqEditor();
  renderAdminGamesEditor();
  if (adminSupportBadgeInput) adminSupportBadgeInput.value = String(adminSupportSavDraft.badge || "");
  if (adminSupportTitleInput) adminSupportTitleInput.value = String(adminSupportSavDraft.title || "");
  if (adminSupportSubtitleInput) adminSupportSubtitleInput.value = String(adminSupportSavDraft.subtitle || "");
  if (adminSupportTelegramUrlInput) adminSupportTelegramUrlInput.value = String(adminSupportSavDraft.telegramUrl || "");
  renderAdminSupportSavEditor();
  renderAdminReviewsEditor();
  renderAdminProcessusEditor();
  adminConfigImageFileInputs.forEach((input, index) => {
    input.value = "";
    adminConfigImageNameEls[index].textContent = adminConfiguratorImagesDraft[index] ? "Image prête" : "Aucune image";
    if (adminConfiguratorImagesDraft[index]) {
      adminConfigImagePreviewEls[index].src = adminConfiguratorImagesDraft[index];
      adminConfigImagePreviewEls[index].style.display = "block";
    } else {
      adminConfigImagePreviewEls[index].removeAttribute("src");
      adminConfigImagePreviewEls[index].style.display = "none";
    }
  });

  adminAboutVideoFileInputs.forEach((input, index) => {
    const item = adminAboutVideosDraft[index] || { title: "", fileName: "", videoData: "", videoWebm: "", videoKey: "" };
    adminAboutVideoTitleInputs[index].value = item.title || "";
    input.value = "";
    adminAboutVideoNameEls[index].textContent = item.fileName || "Aucune vidéo";
    if (item.videoData) {
      adminAboutVideoPreviewEls[index].src = item.videoData;
      adminAboutVideoPreviewEls[index].style.display = "block";
    } else {
      adminAboutVideoPreviewEls[index].removeAttribute("src");
      adminAboutVideoPreviewEls[index].style.display = "none";
    }
  });

  hydrateAdminAboutVideoPreviews().catch(() => {});

  if (adminAboutGallerySpeedInput) {
    adminAboutGallerySpeedInput.value = String(adminAboutGalleryDraft.speed || 28);
  }
  if (adminAboutGalleryDirectionSelect) {
    adminAboutGalleryDirectionSelect.value = adminAboutGalleryDraft.direction === "right" ? "right" : "left";
  }
  if (adminAboutWatermarkEnabledSelect) {
    const enabled =
      adminAboutGalleryDraft.watermarkEnabled === undefined
        ? true
        : Boolean(adminAboutGalleryDraft.watermarkEnabled);
    adminAboutWatermarkEnabledSelect.value = enabled ? "1" : "0";
  }
  renderAdminAboutGalleryEditor();

  adminShowcaseImages = siteContent.showcase.map((item) => item.image || "");
  siteContent.showcase.forEach((item, index) => {
    adminShowcaseTitleInputs[index].value = item.title;
    adminShowcaseSloganInputs[index].value = item.slogan;
    adminShowcaseFileInputs[index].value = "";
    adminShowcaseFileNames[index].textContent = "Aucun fichier choisi";
    setPreview(index, item.image);
  });
}

async function hydrateAdminAboutVideoPreviews() {
  for (let index = 0; index < 6; index += 1) {
    const item = adminAboutVideosDraft[index];
    if (!item || !item.videoKey || item.videoData) continue;
    try {
      const record = await getAboutVideoRecord(item.videoKey);
      if (!record?.blob) continue;
      revokeAdminAboutPreview(index);
      const previewUrl = URL.createObjectURL(record.blob);
      adminAboutVideoPreviewUrls[index] = previewUrl;
      adminAboutVideoPreviewEls[index].src = previewUrl;
      adminAboutVideoPreviewEls[index].style.display = "block";
      adminAboutVideoNameEls[index].textContent = item.fileName || record.fileName || "Vidéo prête";
    } catch (error) {
      // ignore hydrate errors
    }
  }
}

function setActiveAdminTab(tabName) {
  const hasTab = adminTabButtons.some((button) => button.dataset.tab === tabName);
  const safeTabName = hasTab ? tabName : "general";
  adminTabButtons.forEach((button) => {
    const isActive = button.dataset.tab === safeTabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  adminTabPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.tabContent !== safeTabName);
  });

  if (adminEditor) {
    adminEditor.classList.toggle("admin-processus-minimal", safeTabName === "processus");
  }
}

function saveAdminTabsOrder() {
  if (!adminTabsContainer) return;
  const order = Array.from(adminTabsContainer.querySelectorAll(".admin-tab"))
    .map((button) => button.dataset.tab)
    .filter(Boolean);
  try {
    localStorage.setItem(ADMIN_TABS_ORDER_KEY, JSON.stringify(order));
  } catch (error) {}
}

function applySavedAdminTabsOrder() {
  if (!adminTabsContainer) return;
  let savedOrder = [];
  try {
    const raw = localStorage.getItem(ADMIN_TABS_ORDER_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    savedOrder = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    savedOrder = [];
  }
  if (!savedOrder.length) return;

  const buttonsByTab = new Map(
    Array.from(adminTabsContainer.querySelectorAll(".admin-tab"))
      .map((button) => [button.dataset.tab, button])
      .filter(([key]) => Boolean(key))
  );

  savedOrder.forEach((tabName) => {
    const button = buttonsByTab.get(tabName);
    if (!button) return;
    adminTabsContainer.appendChild(button);
    buttonsByTab.delete(tabName);
  });

  buttonsByTab.forEach((button) => {
    adminTabsContainer.appendChild(button);
  });
}

function initializeAdminTabsReorder() {
  if (!adminTabsContainer) return;
  applySavedAdminTabsOrder();

  let dragTab = null;

  adminTabsContainer.querySelectorAll(".admin-tab").forEach((button) => {
    button.setAttribute("draggable", "true");
  });

  adminTabsContainer.addEventListener("dragstart", (event) => {
    const button = event.target.closest(".admin-tab");
    if (!button) return;
    dragTab = button;
    button.classList.add("dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", button.dataset.tab || "");
    }
  });

  adminTabsContainer.addEventListener("dragend", () => {
    if (dragTab) dragTab.classList.remove("dragging");
    dragTab = null;
    saveAdminTabsOrder();
  });

  adminTabsContainer.addEventListener("dragover", (event) => {
    if (!dragTab) return;
    event.preventDefault();
    const target = event.target.closest(".admin-tab");
    if (!target || target === dragTab) return;
    const targetRect = target.getBoundingClientRect();
    const insertBefore = event.clientX < targetRect.left + targetRect.width / 2;
    if (insertBefore) {
      adminTabsContainer.insertBefore(dragTab, target);
    } else {
      adminTabsContainer.insertBefore(dragTab, target.nextSibling);
    }
  });

  adminTabsContainer.addEventListener("drop", (event) => {
    if (!dragTab) return;
    event.preventDefault();
    saveAdminTabsOrder();
  });
}

function enableHoverScrollableTabs(container) {
  if (!container || container.dataset.hoverScrollBound === "1") return;
  container.dataset.hoverScrollBound = "1";

  let rafId = 0;
  let velocity = 0;
  let isHovering = false;
  const edgeZone = 120;
  const maxSpeed = 18;

  const updateScrollableClass = () => {
    const canScroll = container.scrollWidth - container.clientWidth > 8;
    container.classList.toggle("is-scrollable", canScroll);
  };

  const tick = () => {
    if (!isHovering || Math.abs(velocity) < 0.2) {
      rafId = 0;
      return;
    }
    container.scrollLeft += velocity;
    rafId = window.requestAnimationFrame(tick);
  };

  const startTickIfNeeded = () => {
    if (!rafId) rafId = window.requestAnimationFrame(tick);
  };

  container.addEventListener("mouseenter", () => {
    isHovering = true;
    updateScrollableClass();
  });

  container.addEventListener("mouseleave", () => {
    isHovering = false;
    velocity = 0;
  });

  container.addEventListener("mousemove", (event) => {
    if (!isHovering) return;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const leftRatio = Math.max(0, (edgeZone - x) / edgeZone);
    const rightRatio = Math.max(0, (x - (rect.width - edgeZone)) / edgeZone);
    velocity = (rightRatio - leftRatio) * maxSpeed;
    if (Math.abs(velocity) >= 0.2) startTickIfNeeded();
  });

  container.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      container.scrollLeft += event.deltaY;
      event.preventDefault();
      updateScrollableClass();
    },
    { passive: false }
  );

  window.addEventListener("resize", updateScrollableClass);
  updateScrollableClass();
}

function setAdminState(isLoggedIn) {
  if (!isLoggedIn) {
    sessionStorage.removeItem(ADMIN_PROCESS_UNLOCKED_KEY);
    if (adminLogin) adminLogin.classList.remove("hidden");
    if (adminKpiGateEl) adminKpiGateEl.classList.add("hidden");
    if (adminEditor) adminEditor.classList.add("hidden");
    return;
  }
  showAdminKpiGate();
}

function setFeedback(message, tone = "") {
  const text = String(message || "");
  adminFeedback.textContent = text;
  adminFeedback.classList.remove("success", "error", "info");
  if (!text) return;
  const inferredError = /(refus|invalide|impossible|erreur|saturé|bloqué)/i.test(text);
  const inferredSuccess = /(enregistr|réussi|prêt|ajout|supprim|déverrouillé|mis à jour|réactivé|retiré)/i.test(text);
  const variant = tone || (inferredError ? "error" : inferredSuccess ? "success" : "info");
  adminFeedback.classList.add(variant);
  if (adminEditor && !adminEditor.classList.contains("hidden")) {
    showAdminToast(text, variant);
  }
}

function setAdminUploadProgress(percent, label = "Upload média") {
  if (!adminUploadProgressWrapEl || !adminUploadProgressBarEl || !adminUploadProgressValueEl) return;
  const safePercent = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  if (adminUploadProgressHideTimer) {
    clearTimeout(adminUploadProgressHideTimer);
    adminUploadProgressHideTimer = null;
  }
  adminUploadProgressWrapEl.classList.remove("hidden");
  if (adminUploadProgressLabelEl) adminUploadProgressLabelEl.textContent = String(label || "Upload média");
  adminUploadProgressValueEl.textContent = `${safePercent}%`;
  adminUploadProgressBarEl.style.width = `${safePercent}%`;
}

function hideAdminUploadProgress(delayMs = 1800) {
  if (!adminUploadProgressWrapEl) return;
  if (adminUploadProgressHideTimer) clearTimeout(adminUploadProgressHideTimer);
  adminUploadProgressHideTimer = setTimeout(() => {
    adminUploadProgressWrapEl.classList.add("hidden");
    if (adminUploadProgressLabelEl) adminUploadProgressLabelEl.textContent = "Upload média";
    if (adminUploadProgressValueEl) adminUploadProgressValueEl.textContent = "0%";
    if (adminUploadProgressBarEl) adminUploadProgressBarEl.style.width = "0%";
    adminUploadProgressHideTimer = null;
  }, Math.max(0, Number(delayMs) || 0));
}

function setAdminAutosaveStatus(message, tone = "info") {
  if (!adminAutosaveStatusEl) return;
  adminAutosaveStatusEl.textContent = String(message || "");
  adminAutosaveStatusEl.classList.remove("success", "error", "info");
  if (!message) return;
  adminAutosaveStatusEl.classList.add(tone);
}

function loadAdminHistory() {
  try {
    const raw = localStorage.getItem(ADMIN_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveAdminHistory(history) {
  localStorage.setItem(ADMIN_HISTORY_KEY, JSON.stringify(Array.isArray(history) ? history.slice(0, ADMIN_HISTORY_LIMIT) : []));
}

function clearAdminHistory() {
  localStorage.removeItem(ADMIN_HISTORY_KEY);
}

function removeAdminHistoryEntryById(entryId) {
  const targetId = String(entryId || "").trim();
  if (!targetId) return false;
  const history = loadAdminHistory();
  const nextHistory = history.filter((entry) => String(entry?.id || "") !== targetId);
  if (nextHistory.length === history.length) return false;
  saveAdminHistory(nextHistory);
  return true;
}

function updateAdminHistoryActionButtons() {
  const history = loadAdminHistory();
  const hasHistory = history.length > 0;
  const hasSelection = Boolean(String(adminHistorySelectEl?.value || "").trim());
  if (adminRestoreHistoryBtn) adminRestoreHistoryBtn.disabled = !(hasHistory && hasSelection);
  if (adminDeleteHistoryEntryBtn) adminDeleteHistoryEntryBtn.disabled = !(hasHistory && hasSelection);
  if (adminClearHistoryBtn) adminClearHistoryBtn.disabled = !hasHistory;
}

function renderAdminHistoryOptions() {
  if (!adminHistorySelectEl) return;
  const history = loadAdminHistory();
  if (!history.length) {
    adminHistorySelectEl.innerHTML = '<option value="">Historique indisponible</option>';
    updateAdminHistoryActionButtons();
    return;
  }
  const previous = String(adminHistorySelectEl.value || "").trim();
  adminHistorySelectEl.innerHTML = history
    .map((entry) => {
      const date = new Date(entry.at || "");
      const label = Number.isNaN(date.getTime()) ? "Version" : date.toLocaleString("fr-FR");
      return `<option value="${escapeHtml(entry.id || "")}">${escapeHtml(label)}</option>`;
    })
    .join("");
  if (previous && history.some((entry) => String(entry?.id || "") === previous)) {
    adminHistorySelectEl.value = previous;
  } else {
    adminHistorySelectEl.selectedIndex = 0;
  }
  updateAdminHistoryActionButtons();
}

function pushAdminHistorySnapshot(content) {
  if (!content || typeof content !== "object") return;
  const history = loadAdminHistory();
  const entry = {
    id: `hist-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    at: new Date().toISOString(),
    content: JSON.parse(JSON.stringify(content)),
  };
  history.unshift(entry);
  saveAdminHistory(history);
  renderAdminHistoryOptions();
}

function scheduleAdminAutosave() {
  if (adminAutosaveTimer) clearTimeout(adminAutosaveTimer);
  setAdminAutosaveStatus("Brouillon détecté. Auto-save dans 1 minute...", "info");
  adminAutosaveTimer = window.setTimeout(() => {
    if (!adminEditor || adminEditor.classList.contains("hidden")) return;
    try {
      adminEditor.requestSubmit();
      adminAutosaveLastAt = new Date().toISOString();
      const date = new Date(adminAutosaveLastAt).toLocaleTimeString("fr-FR");
      setAdminAutosaveStatus(`Auto-save effectué à ${date}`, "success");
      renderAdminOverviewKpis();
    } catch (error) {
      setAdminAutosaveStatus("Auto-save impossible.", "error");
    }
  }, 60000);
}

function buildProcessusPayloadFromDrafts(baseProcessus = {}) {
  return {
    ...baseProcessus,
    files: normalizeProcessFiles(adminProcessFilesDraft)
      .map((item, index) => ({
        title:
          typeof item.title === "string" && item.title.trim()
            ? item.title.trim()
            : `Dossier confidentiel ${index + 1}`,
        fileName: inferProcessFileName(item, index),
        fileData: resolveProcessFileHref(item),
        path: String(item.path || "").trim().replace(/^\/+/, ""),
        fileMime:
          typeof item.fileMime === "string" && item.fileMime.trim()
            ? item.fileMime.trim()
            : inferProcessFileMime(inferProcessFileName(item, index), "application/pdf"),
      }))
      .filter((item) => item.fileData || item.path),
    purchases: getProcessSectionDraft("achats")
      .map((item, index) => ({
        label:
          typeof item.label === "string" && item.label.trim()
            ? item.label.trim()
            : `Lien achat ${index + 1}`,
        url: normalizeProcessLinkUrl(item.url),
      }))
      .filter((item) => item.url),
    crmLeads: normalizeCrmLeads(adminCrmLeadsDraft),
    gamesFiles: normalizeProcessGamesFiles(adminProcessGamesFilesDraft),
    gamesAssignments: normalizeProcessGamesAssignments(adminProcessGamesAssignmentsDraft),
    suppliersOrders: normalizeSupplierOrders(adminSupplierOrdersDraft),
    stockItems: normalizeStockItems(adminStockItemsDraft),
    savItems: normalizeSavItems(adminSavItemsDraft),
    deliveryItems: normalizeDeliveryItems(adminDeliveryItemsDraft),
  };
}

async function persistProcessDraftsNow(successMessage = "Processus sauvegardé.", tone = "success") {
  siteContent.processus = buildProcessusPayloadFromDrafts(siteContent.processus || {});
  if (!persistSiteContent()) {
    setAdminProcessFeedback("Sauvegarde Processus impossible (stockage saturé).", "error");
    return false;
  }
  const diskSaved = await saveContentSnapshotToDisk(siteContent).catch(() => false);
  setAdminProcessFeedback(
    diskSaved ? successMessage : `${successMessage} (local uniquement)`,
    diskSaved ? tone : "info"
  );
  return true;
}

function triggerFileInput(input) {
  if (!input) return;
  try {
    if (typeof input.showPicker === "function") {
      input.showPicker();
      return;
    }
  } catch (error) {
    // Fallback below for browsers blocking showPicker.
  }
  input.focus();
  input.click();
}

function flashAdminSaveButton(target) {
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest("button, .cta, .admin-secondary, .admin-file-button");
  if (!(button instanceof HTMLElement)) return;
  const id = String(button.id || "").toLowerCase();
  const label = String(button.textContent || "").trim().toLowerCase();
  const isSaveAction =
    id.includes("save") ||
    label.includes("enregistrer") ||
    label.includes("mettre à jour");
  if (!isSaveAction) return;
  button.classList.remove("admin-save-flash");
  // Reflow to replay animation consistently on repeated clicks.
  void button.offsetWidth;
  button.classList.add("admin-save-flash");
  window.setTimeout(() => {
    button.classList.remove("admin-save-flash");
  }, 1200);
}

function isSupportedAboutVideoFile(file) {
  if (!file) return false;
  const type = String(file.type || "").toLowerCase();
  const name = String(file.name || "").toLowerCase();
  const validMime =
    type.startsWith("video/") ||
    type === "application/octet-stream" ||
    type === "";
  const validExt = /\.(mov|mp4|m4v|qt)$/i.test(name);
  return validMime || validExt;
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Premium export: keep high definition on all site images.
        const maxLongEdge = 4320;
        const sourceLongEdge = Math.max(img.width, img.height);
        const ratio = Math.min(1, maxLongEdge / sourceLongEdge);
        const width = Math.round(img.width * ratio);
        const height = Math.round(img.height * ratio);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas indisponible."));
          return;
        }
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, 0, 0, width, height);
        // Very high quality WebP to preserve detail while remaining deployable.
        resolve(canvas.toDataURL("image/webp", 0.985));
      };
      img.onerror = () => reject(new Error("Image non valide."));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error("Lecture image impossible."));
    reader.readAsDataURL(file);
  });
}

function resizeImageForAboutZoom(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Ultra high definition for fullscreen viewing.
        const maxLongEdge = 6144;
        const sourceLongEdge = Math.max(img.width, img.height);
        const ratio = Math.min(1, maxLongEdge / sourceLongEdge);
        const width = Math.round(img.width * ratio);
        const height = Math.round(img.height * ratio);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas indisponible."));
          return;
        }
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/webp", 0.992));
      };
      img.onerror = () => reject(new Error("Image non valide."));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error("Lecture image impossible."));
    reader.readAsDataURL(file);
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Lecture du fichier impossible."));
    reader.readAsDataURL(file);
  });
}

async function checkDiskApiAvailable() {
  if (diskApiAvailability !== null) return diskApiAvailability;
  try {
    const response = await fetch("/api/ping", { cache: "no-store" });
    diskApiAvailability = response.ok;
  } catch (error) {
    diskApiAvailability = false;
  }
  return diskApiAvailability;
}

async function uploadDataUrlToDisk(kind, fileName, dataUrl) {
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, fileName, dataUrl }),
  });
  if (!response.ok) {
    throw new Error("Upload disque impossible");
  }
  const payload = await response.json();
  if (!payload?.path) {
    throw new Error("Chemin fichier manquant");
  }
  return payload.path;
}

async function deleteUploadedFileFromDisk(filePath) {
  const safePath = String(filePath || "").trim().replace(/^\/+/, "");
  if (!safePath) return { ok: true, deleted: false };
  const response = await fetch("/api/delete-upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: safePath }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload?.ok === false) {
    throw new Error(String(payload?.error || "Suppression fichier impossible."));
  }
  return payload;
}

async function uploadBlobToDisk(kind, fileName, blob, onProgress = null) {
  const payload = await uploadBlobToDiskDetailed(kind, fileName, blob, onProgress);
  if (payload?.path) return payload.path;

  const dataUrl = await readFileAsDataURL(blob);
  return uploadDataUrlToDisk(kind, fileName, dataUrl);
}

async function uploadBlobToDiskDetailed(kind, fileName, blob, onProgress = null) {
  const uploadId = `up-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  let pollingTimer = null;
  const reportProgress = (value, label = "") => {
    if (typeof onProgress === "function") onProgress(Math.max(0, Math.min(100, Math.round(value))), label);
  };

  const stopPolling = () => {
    if (pollingTimer) {
      clearInterval(pollingTimer);
      pollingTimer = null;
    }
  };

  const pollProgressOnce = async () => {
    try {
      const response = await fetch(`/api/upload-progress?id=${encodeURIComponent(uploadId)}`, { cache: "no-store" });
      if (!response.ok) return;
      const payload = await response.json();
      const status = payload?.status;
      if (!status || typeof status !== "object") return;
      reportProgress(Number(status.progress || 0), String(status.message || ""));
    } catch (error) {}
  };

  try {
    const payload = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/upload-binary", true);
      xhr.setRequestHeader("Content-Type", blob.type || "application/octet-stream");
      xhr.setRequestHeader("x-upload-kind", String(kind || "misc"));
      xhr.setRequestHeader("x-upload-filename", encodeURIComponent(String(fileName || "file")));
      xhr.setRequestHeader("x-upload-id", uploadId);

      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable) return;
        const uploadPercent = Math.min(52, Math.round((event.loaded / event.total) * 52));
        reportProgress(uploadPercent, "Upload en cours...");
      };

      xhr.onerror = () => {
        reject(new Error("Upload binaire impossible."));
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let body = {};
          try {
            body = JSON.parse(xhr.responseText || "{}");
          } catch (error) {
            body = {};
          }
          if (body && typeof body.path === "string" && body.path) {
            resolve(body);
            return;
          }
          reject(new Error("Réponse upload invalide."));
          return;
        }
        reject(new Error("Upload disque impossible"));
      };

      pollingTimer = setInterval(() => {
        pollProgressOnce().catch(() => {});
      }, 350);
      xhr.send(blob);
    });

    stopPolling();
    await pollProgressOnce();
    reportProgress(100, "Upload terminé.");
    return payload && payload.path ? payload : null;
  } catch (error) {
    stopPolling();
    // Fallback for browsers where XHR upload path is unstable.
    try {
      reportProgress(8, "Upload en cours...");
      const response = await fetch("/api/upload-binary", {
        method: "POST",
        headers: {
          "Content-Type": blob.type || "application/octet-stream",
          "x-upload-kind": String(kind || "misc"),
          "x-upload-filename": encodeURIComponent(String(fileName || "file")),
          "x-upload-id": uploadId,
        },
        body: blob,
      });
      if (!response.ok) return null;
      const payload = await response.json();
      if (payload && typeof payload.path === "string" && payload.path) {
        reportProgress(100, "Upload terminé.");
        return payload;
      }
      return null;
    } catch (fallbackError) {
      return null;
    }
  }
}

async function persistDataUrlAsset(value, kind, fileName) {
  if (typeof value !== "string" || !value.startsWith("data:")) return value;
  if (!(await checkDiskApiAvailable())) return value;
  try {
    return await uploadDataUrlToDisk(kind, fileName, value);
  } catch (error) {
    return value;
  }
}

async function saveContentSnapshotToDisk(content) {
  if (!(await checkDiskApiAvailable())) return false;
  const response = await fetch("/api/save-content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  return response.ok;
}

async function dataUrlToBlob(dataUrl) {
  const response = await fetch(dataUrl);
  if (!response.ok) throw new Error("Conversion DataURL impossible.");
  return response.blob();
}

function syncConfiguratorSelectionFromForm() {
  if (!form) return;
  const components = {};
  form.querySelectorAll('input[type="radio"][data-config-component="1"]:checked').forEach((radio) => {
    const key = String(radio.name || "").replace("comp-", "");
    components[key] = radio.dataset.optionName || "";
  });

  const services = {};
  form.querySelectorAll('input[type="checkbox"][data-config-service="1"]').forEach((input) => {
    const key = String(input.name || "").replace("svc-", "");
    services[key] = Boolean(input.checked);
  });

  selectedConfiguratorState = { components, services };
}

function persistSiteContent() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteContent));
    return true;
  } catch (error) {
    setFeedback("Stockage saturé. Réduisez la taille ou le nombre de fichiers.");
    return false;
  }
}

function persistSiteContentAuto() {
  if (!persistSiteContent()) return false;
  saveContentSnapshotToDisk(siteContent).catch(() => {});
  return true;
}

function updateSummary() {
  syncConfiguratorSelectionFromForm();
  const entries = [];
  let total = 0;

  form.querySelectorAll('input[type="radio"][data-config-component="1"]:checked').forEach((radio) => {
    const value = Number(radio.value || 0);
    total += value;
    entries.push(`${radio.dataset.label}: ${radio.dataset.optionName}`);
  });

  form.querySelectorAll('input[type="checkbox"][data-config-service="1"]').forEach((input) => {
    if (input.checked) {
      const value = Number(input.value || 0);
      total += value;
      entries.push(`${input.dataset.label}`);
    }
  });

  summaryList.innerHTML = entries.length
    ? entries.map((item) => `<li>${item}</li>`).join("")
    : '<li class="summary-empty">Aucune sélection pour le moment.</li>';
  totalPrice.textContent = formatEuro(total);
  setSummarySaveFeedback("");
  updateFpsEstimator();
}

adminShowcaseFileInputs.forEach((input, index) => {
  input.addEventListener("change", async () => {
    const file = input.files && input.files[0];
    if (!file) {
      adminShowcaseFileNames[index].textContent = "Aucun fichier choisi";
      return;
    }

    adminShowcaseFileNames[index].textContent = file.name;
    try {
      const resized = await resizeImage(file);
      adminShowcaseImages[index] = resized;
      setPreview(index, resized);
      setFeedback(`Image ${index + 1} prête.`);
    } catch (error) {
      setFeedback(`Image ${index + 1} invalide.`);
    }
  });
});

adminStaticFileButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const targetId = button.dataset.fileTarget;
    const input = document.getElementById(targetId);
    triggerFileInput(input);
  });
});

adminConfigImageFileInputs.forEach((input, index) => {
  input.addEventListener("change", async () => {
    const file = input.files && input.files[0];
    if (!file) {
      adminConfigImageNameEls[index].textContent = "Aucune image";
      return;
    }

    adminConfigImageNameEls[index].textContent = file.name;

    try {
      adminConfiguratorImagesDraft[index] = await resizeImage(file);
      adminConfigImagePreviewEls[index].src = adminConfiguratorImagesDraft[index];
      adminConfigImagePreviewEls[index].style.display = "block";
      setFeedback(`Image configurateur ${index + 1} prête.`);
    } catch (error) {
      setFeedback(`Image configurateur ${index + 1} invalide.`);
    }
  });
});

adminConfigImageRemoveBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    adminConfiguratorImagesDraft[index] = "";
    adminConfigImageFileInputs[index].value = "";
    adminConfigImageNameEls[index].textContent = "Aucune image";
    adminConfigImagePreviewEls[index].removeAttribute("src");
    adminConfigImagePreviewEls[index].style.display = "none";
    setFeedback(`Image configurateur ${index + 1} supprimée.`);
  });
});

adminAboutVideoFileInputs.forEach((input, index) => {
  input.addEventListener("change", async () => {
    const file = input.files && input.files[0];
    if (!file) {
      adminAboutVideoNameEls[index].textContent = "Aucune vidéo";
      return;
    }

    if (!isSupportedAboutVideoFile(file)) {
      input.value = "";
      setFeedback("Format vidéo non supporté. Utilisez .mov, .mp4, .m4v ou .qt.");
      return;
    }

    if (file.size > MAX_ABOUT_VIDEO_BYTES) {
      setFeedback("Vidéo trop lourde. Limite: 2 Go par vidéo.");
      return;
    }

    try {
      const previousKey = adminAboutVideosDraft[index]?.videoKey || "";
      revokeAdminAboutPreview(index);
      const previewUrl = URL.createObjectURL(file);
      adminAboutVideoPreviewUrls[index] = previewUrl;
      adminAboutVideosDraft[index] = {
        ...adminAboutVideosDraft[index],
        title:
          adminAboutVideoTitleInputs[index].value.trim() ||
          adminAboutVideosDraft[index]?.title ||
          `Video ${index + 1}`,
        fileName: file.name,
        videoData: "",
        videoWebm: "",
        videoMime: file.type || "video/mp4",
        videoBlob: file,
        videoKey: "",
        removedVideoKey: previousKey,
      };
      adminAboutVideoNameEls[index].textContent = file.name;
      adminAboutVideoPreviewEls[index].src = previewUrl;
      adminAboutVideoPreviewEls[index].style.display = "block";
      setFeedback(`Vidéo A propos ${index + 1} prête.`);
    } catch (error) {
      setFeedback(`Vidéo A propos ${index + 1} invalide.`);
    }
  });
});

adminAboutVideoRemoveBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    revokeAdminAboutPreview(index);
    const previousKey = adminAboutVideosDraft[index]?.videoKey || "";
    adminAboutVideosDraft[index] = {
      ...adminAboutVideosDraft[index],
      fileName: "",
      videoData: "",
      videoWebm: "",
      videoMime: "video/mp4",
      videoBlob: null,
      videoKey: "",
      removedVideoKey: previousKey,
    };
    adminAboutVideoFileInputs[index].value = "";
    adminAboutVideoNameEls[index].textContent = "Aucune vidéo";
    adminAboutVideoPreviewEls[index].removeAttribute("src");
    adminAboutVideoPreviewEls[index].style.display = "none";
    setFeedback(`Vidéo A propos ${index + 1} supprimée.`);
  });
});

adminAboutVideoPreviewEls.forEach((preview, index) => {
  bindAdminVideoPreviewModal(preview, index);
});

if (adminAddAboutGalleryPhotoBtn) {
  adminAddAboutGalleryPhotoBtn.addEventListener("click", addAdminAboutGalleryPhoto);
}

if (adminAboutWatermarkEnabledSelect) {
  adminAboutWatermarkEnabledSelect.addEventListener("change", () => {
    adminAboutGalleryDraft.watermarkEnabled = adminAboutWatermarkEnabledSelect.value !== "0";
    setFeedback(
      adminAboutGalleryDraft.watermarkEnabled
        ? "Logo watermark activé sur vidéos et images A propos."
        : "Logo watermark désactivé sur vidéos et images A propos."
    );
  });
}

adminEditor.addEventListener("click", (event) => {
  const addAboutPhotoBtn = event.target.closest("#admin-add-about-gallery-photo");
  if (addAboutPhotoBtn) {
    event.preventDefault();
    addAdminAboutGalleryPhoto();
    return;
  }

  const adminImagePreview = event.target.closest("img.admin-preview, #admin-live-preview-image");
  if (adminImagePreview instanceof HTMLImageElement) {
    const src = String(adminImagePreview.src || "").trim();
    if (src) {
      event.preventDefault();
      event.stopPropagation();
      const caption = adminImagePreview.getAttribute("alt") || "Aperçu image";
      openImageModal(src, caption);
    }
    return;
  }

  const pickerButton = event.target.closest(".admin-file-button[data-file-target]");
  if (pickerButton) {
    event.preventDefault();
    event.stopPropagation();
    const targetId = pickerButton.dataset.fileTarget;
    const input = document.getElementById(targetId);
    triggerFileInput(input);
  }
});

adminAddMachineBtn.addEventListener("click", () => {
  adminMachinesDraft.push(createEmptyMachine());
  renderAdminMachinesEditor();
});

adminAddTechnicalSheetBtn.addEventListener("click", () => {
  if (adminTechnicalSheetsDraft.length >= MAX_TECHNICAL_SHEETS) {
    setFeedback(`Limite atteinte: ${MAX_TECHNICAL_SHEETS} fiches techniques maximum.`);
    return;
  }
  adminTechnicalSheetsDraft.push(createEmptyTechnicalSheet());
  renderAdminTechnicalSheetsEditor();
});

function addAdminComponentCategory() {
  adminComponentsDraft.push(createEmptyComponentCategory(adminComponentsDraft.length));
  activeAdminComponentIndex = adminComponentsDraft.length - 1;
  renderAdminConfiguratorEditor();
  setFeedback("Catégorie ajoutée.");
}

function addProductsToActiveCategory(count = 1) {
  if (!Array.isArray(adminComponentsDraft) || adminComponentsDraft.length === 0) return;
  if (!adminComponentsDraft[activeAdminComponentIndex]) return;
  const target = adminComponentsDraft[activeAdminComponentIndex];
  if (!Array.isArray(target.options)) target.options = [];
  const safeCount = Math.max(1, Number(count) || 1);
  const start = target.options.length;
  for (let index = 0; index < safeCount; index += 1) {
    target.options.push({
      name: `Nouveau produit ${start + index + 1}`,
      price: 0,
      image: "",
      description: "",
    });
  }
  renderAdminConfiguratorEditor();
  setFeedback(`${safeCount} produit(s) ajouté(s) à ${target.label || "la catégorie"}.`);
}

function moveActiveAdminComponent(direction) {
  if (!Array.isArray(adminComponentsDraft) || adminComponentsDraft.length < 2) return;
  const currentIndex = Number(activeAdminComponentIndex);
  if (Number.isNaN(currentIndex) || !adminComponentsDraft[currentIndex]) return;
  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (targetIndex < 0 || targetIndex >= adminComponentsDraft.length) return;
  const [moved] = adminComponentsDraft.splice(currentIndex, 1);
  adminComponentsDraft.splice(targetIndex, 0, moved);
  activeAdminComponentIndex = targetIndex;
  renderAdminConfiguratorEditor();
  setFeedback("Ordre des catégories mis à jour.");
}

if (adminAddComponentInlineBtn) {
  adminAddComponentInlineBtn.addEventListener("click", addAdminComponentCategory);
}

if (adminComponentSelect) {
  adminComponentSelect.addEventListener("change", () => {
    const index = Number(adminComponentSelect.value);
    if (Number.isNaN(index)) return;
    activeAdminComponentIndex = index;
    renderAdminConfiguratorEditor();
  });
}

if (adminComponentMoveUpBtn) {
  adminComponentMoveUpBtn.addEventListener("click", () => moveActiveAdminComponent("up"));
}

if (adminComponentMoveDownBtn) {
  adminComponentMoveDownBtn.addEventListener("click", () => moveActiveAdminComponent("down"));
}

if (adminRemoveComponentCategoryBtn) {
  adminRemoveComponentCategoryBtn.addEventListener("click", () => {
    if (!adminComponentsDraft[activeAdminComponentIndex]) return;
    adminComponentsDraft.splice(activeAdminComponentIndex, 1);
    if (adminComponentsDraft.length === 0) {
      adminComponentsDraft.push(createEmptyComponentCategory(0));
      activeAdminComponentIndex = 0;
      setFeedback("La dernière catégorie a été supprimée. Une catégorie vide a été recréée.");
    } else if (activeAdminComponentIndex >= adminComponentsDraft.length) {
      activeAdminComponentIndex = adminComponentsDraft.length - 1;
    }
    renderAdminConfiguratorEditor();
  });
}

if (adminAddComponentProductBtn) {
  adminAddComponentProductBtn.addEventListener("click", () => addProductsToActiveCategory(1));
}

adminAddServiceOptionBtn.addEventListener("click", () => {
  adminServicesDraft.push(createEmptyService(adminServicesDraft.length));
  renderAdminConfiguratorEditor();
});

if (adminAddFaqItemBtn) {
  adminAddFaqItemBtn.addEventListener("click", () => {
    adminFaqItemsDraft.push(createEmptyFaqItem());
    renderAdminFaqEditor();
  });
}

if (adminAddGameItemBtn) {
  adminAddGameItemBtn.addEventListener("click", () => {
    adminGamesDraft.push(createEmptyGameItem(adminGamesDraft.length));
    renderAdminGamesEditor();
  });
}

if (adminAddSupportCardBtn) {
  adminAddSupportCardBtn.addEventListener("click", () => {
    if (!Array.isArray(adminSupportSavDraft.cards)) adminSupportSavDraft.cards = [];
    adminSupportSavDraft.cards.push(createEmptySupportCard());
    renderAdminSupportSavEditor();
  });
}

if (adminAddSupportStepBtn) {
  adminAddSupportStepBtn.addEventListener("click", () => {
    if (!Array.isArray(adminSupportSavDraft.steps)) adminSupportSavDraft.steps = [];
    adminSupportSavDraft.steps.push(createEmptySupportStep(adminSupportSavDraft.steps.length));
    renderAdminSupportSavEditor();
  });
}

if (adminAddSupportFaqItemBtn) {
  adminAddSupportFaqItemBtn.addEventListener("click", () => {
    if (!Array.isArray(adminSupportSavDraft.faq)) adminSupportSavDraft.faq = [];
    adminSupportSavDraft.faq.push(createEmptyFaqItem());
    renderAdminSupportSavEditor();
  });
}

if (adminAddReviewItemBtn) {
  adminAddReviewItemBtn.addEventListener("click", () => {
    adminReviewsDraft.push(createEmptyReviewItem());
    renderAdminReviewsEditor();
  });
}

function tryUnlockAdminProcess() {
  const entered = String(adminProcessPasswordInput?.value || "").trim();
  if (entered !== PROCESS_ACCESS_PASSWORD) {
    setAdminProcessUnlocked(false);
    setAdminProcessFeedback("Erreur mot de passe", "error");
    return;
  }
  setAdminProcessUnlocked(true);
  renderAdminProcessusEditor();
  setAdminProcessFeedback("Mot de passe valide", "success");
}

if (adminProcessPasswordInput) {
  adminProcessPasswordInput.value = "";
  adminProcessPasswordInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    tryUnlockAdminProcess();
  });
}

if (adminOpenProcessInstallModalBtn) {
  adminOpenProcessInstallModalBtn.addEventListener("click", () => {
    if (!adminProcessUnlocked) {
      setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
      return;
    }
    openAdminProcessFileModal(-1);
  });
}

if (adminProcessSubtabButtons.length) {
  adminProcessSubtabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = String(button.dataset.processSubtab || "docs");
      setAdminProcessSubtab(tabName);
      const isLinkSection = PROCESS_LINK_SECTIONS.some((item) => item.key === tabName);
      const sectionDraft = isLinkSection ? getProcessSectionDraft(tabName) : [];
      if (adminProcessUnlocked && isLinkSection && sectionDraft.length === 0) {
        openAdminProcessLinkModal(tabName, -1);
      }
    });
  });
}

if (adminAddProcessLinkBtns.length) {
  adminAddProcessLinkBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (!adminProcessUnlocked) {
        setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
        return;
      }
      const sectionKey = String(button.dataset.section || "achats");
      openAdminProcessLinkModal(sectionKey, -1);
    });
  });
}

if (adminAddCrmLeadBtn) {
  adminAddCrmLeadBtn.addEventListener("click", () => {
    adminCrmLeadsDraft.push(createEmptyCrmLead(adminCrmLeadsDraft.length));
    activeAdminCrmLeadIndex = -1;
    renderAdminCrmEditor();
    setAdminProcessFeedback("Prospect CRM ajouté.");
  });
}

if (adminCrmSearchInput) {
  adminCrmSearchInput.addEventListener("input", () => {
    adminCrmSearchTerm = String(adminCrmSearchInput.value || "");
    renderAdminCrmEditor();
  });
}

if (adminCrmFilterStatusSelect) {
  adminCrmFilterStatusSelect.addEventListener("change", () => {
    adminCrmFilterStatus = String(adminCrmFilterStatusSelect.value || "all");
    renderAdminCrmEditor();
  });
}

if (adminProcessLinkModalCloseBtn) {
  adminProcessLinkModalCloseBtn.addEventListener("click", closeAdminProcessLinkModal);
}

if (adminProcessLinkCancelBtn) {
  adminProcessLinkCancelBtn.addEventListener("click", closeAdminProcessLinkModal);
}

if (adminProcessLinkSaveBtn) {
  adminProcessLinkSaveBtn.addEventListener("click", saveAdminProcessLinkFromModal);
}

if (adminProcessLinkModalEl) {
  adminProcessLinkModalEl.addEventListener("click", (event) => {
    if (event.target === adminProcessLinkModalEl) closeAdminProcessLinkModal();
  });
}

if (adminProcessFilePickModalBtn) {
  adminProcessFilePickModalBtn.addEventListener("click", () => {
    triggerFileInput(adminProcessFileInputModal);
  });
}

if (adminProcessFileInputModal) {
  adminProcessFileInputModal.addEventListener("change", () => {
    const file = adminProcessFileInputModal.files && adminProcessFileInputModal.files[0];
    if (adminProcessFileNameModalEl) {
      adminProcessFileNameModalEl.textContent = file ? file.name : "Aucun fichier choisi";
    }
  });
}

if (adminProcessFileModalCloseBtn) {
  adminProcessFileModalCloseBtn.addEventListener("click", closeAdminProcessFileModal);
}

if (adminProcessFileCancelBtn) {
  adminProcessFileCancelBtn.addEventListener("click", closeAdminProcessFileModal);
}

if (adminProcessFileSaveBtn) {
  adminProcessFileSaveBtn.addEventListener("click", saveAdminProcessFileFromModal);
}

if (adminProcessFileModalEl) {
  adminProcessFileModalEl.addEventListener("click", (event) => {
    if (event.target === adminProcessFileModalEl) closeAdminProcessFileModal();
  });
}

if (adminOpenRailwayUpdateModalBtn) {
  adminOpenRailwayUpdateModalBtn.addEventListener("click", () => {
    if (!adminProcessUnlocked) {
      setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
      return;
    }
    openAdminRailwayUpdateModal();
  });
}

if (adminRailwayUpdateModalCloseBtn) {
  adminRailwayUpdateModalCloseBtn.addEventListener("click", closeAdminRailwayUpdateModal);
}

if (adminRailwayUpdateModalEl) {
  adminRailwayUpdateModalEl.addEventListener("click", (event) => {
    if (event.target === adminRailwayUpdateModalEl) closeAdminRailwayUpdateModal();
  });
}

if (adminRailwayUpdateCopyBtn) {
  adminRailwayUpdateCopyBtn.addEventListener("click", async () => {
    const command = getRailwayUpdateCommand();
    try {
      await navigator.clipboard.writeText(command);
      setAdminRailwayUpdateFeedback("Commande copiée. Collez-la dans Terminal.", "success");
    } catch (error) {
      if (adminRailwayUpdateCommandEl) {
        adminRailwayUpdateCommandEl.focus();
        adminRailwayUpdateCommandEl.select();
      }
      setAdminRailwayUpdateFeedback("Copie auto indisponible. Copiez la commande manuellement.", "info");
    }
  });
}

if (adminRailwayUpdateDownloadBtn) {
  adminRailwayUpdateDownloadBtn.addEventListener("click", () => {
    const command = `#!/bin/zsh\n${getRailwayUpdateCommand()}\necho \"\\nMise a jour Railway terminee.\"\n`;
    const blob = new Blob([command], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MAJ_Railway.command";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setAdminRailwayUpdateFeedback("Fichier .command téléchargé. Double-cliquez dessus sur Mac.", "success");
  });
}

if (adminRailwayUpdateRunTerminalBtn) {
  adminRailwayUpdateRunTerminalBtn.addEventListener("click", async () => {
    if (!isLocalRuntimeForTerminalLaunch()) {
      setAdminRailwayUpdateFeedback(
        "Lancement direct indisponible ici. Utilisez 'Copier la commande' ou '.command'.",
        "info"
      );
      return;
    }
    adminRailwayUpdateRunTerminalBtn.disabled = true;
    setAdminRailwayUpdateFeedback("Ouverture de Terminal en cours...", "info");
    try {
      const response = await fetch("/api/run-railway-update-terminal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ launch: true }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Impossible de lancer Terminal.");
      }
      setAdminRailwayUpdateFeedback("Terminal lancé. La commande de mise à jour s'exécute.", "success");
    } catch (error) {
      setAdminRailwayUpdateFeedback(String(error.message || "Lancement Terminal impossible."), "error");
    } finally {
      adminRailwayUpdateRunTerminalBtn.disabled = false;
    }
  });
}

if (adminBackupZipBtn) {
  adminBackupZipBtn.addEventListener("click", async () => {
    if (adminBackupZipBtn.disabled) return;
    adminBackupZipBtn.disabled = true;
    try {
      await triggerAdminBackupZipDownload();
    } finally {
      adminBackupZipBtn.disabled = false;
    }
  });
}

if (adminProcessList) {
  adminProcessList.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const index = Number(button.dataset.processIndex);
    if (Number.isNaN(index) || !adminProcessFilesDraft[index]) return;
    if (action === "edit-process-file") {
      openAdminProcessFileModal(index);
      return;
    }

    if (action === "remove-process-file") {
      adminProcessFilesDraft.splice(index, 1);
      await persistProcessDraftsNow("Fichier Installation VB supprimé.", "info");
      renderAdminProcessusEditor();
    }
  });
}

if (adminAddGamesFileBtn) {
  adminAddGamesFileBtn.addEventListener("click", () => {
    if (!adminProcessUnlocked) {
      setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
      return;
    }
    triggerFileInput(adminGamesZipFileInput);
  });
}

if (adminGamesZipFileInput) {
  adminGamesZipFileInput.addEventListener("change", async () => {
    const file = adminGamesZipFileInput.files && adminGamesZipFileInput.files[0];
    adminGamesZipFileInput.value = "";
    if (!file) return;
    if (!adminProcessUnlocked) {
      setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
      return;
    }
    if (!/\.zip$/i.test(file.name)) {
      setAdminProcessFeedback("Seuls les fichiers ZIP sont autorisés.");
      return;
    }

    const safeBaseName = sanitizeFileName(file.name, `games-${Date.now()}.zip`).replace(/\.zip$/i, "");
    const safeName = `${safeBaseName}.zip`;
    setAdminUploadProgress(3, "Games ZIP • upload");
    try {
      const uploadPayload = await uploadBlobToDiskDetailed("games-zips", safeName, file, (percent, label) => {
        setAdminUploadProgress(percent, `Games ZIP • ${label || "upload"}`);
      });
      hideAdminUploadProgress(1400);
      if (!uploadPayload?.path) {
        setAdminProcessFeedback("Upload ZIP impossible. Vérifiez la taille du fichier.", "error");
        return;
      }
      adminProcessGamesFilesDraft.push({
        title: safeBaseName,
        path: String(uploadPayload.path || "").replace(/^\/+/, ""),
        fileName: safeName,
        sizeBytes: Math.max(0, Number(uploadPayload.bytes || file.size || 0)),
        createdAt: new Date().toISOString(),
      });
      await persistProcessDraftsNow("ZIP Games ajouté.", "success");
      renderAdminProcessusEditor();
    } catch (error) {
      hideAdminUploadProgress(600);
      setAdminProcessFeedback("Upload ZIP impossible. Vérifiez la taille ou le format.", "error");
    }
  });
}

if (adminProcessGamesListEl) {
  adminProcessGamesListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.processGameIndex);
    if (Number.isNaN(index) || !adminProcessGamesFilesDraft[index]) return;
    if (action === "process-game-title") {
      adminProcessGamesFilesDraft[index].title = String(target.value || "");
    }
  });
  adminProcessGamesListEl.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const action = String(button.dataset.action || "");
    const index = Number(button.dataset.processGameIndex);
    if (Number.isNaN(index) || !adminProcessGamesFilesDraft[index]) return;
    if (action !== "remove-process-game-file") return;
    const removedPath = String(adminProcessGamesFilesDraft[index].path || "").replace(/^\/+/, "");
    button.disabled = true;
    try {
      if (removedPath) await deleteUploadedFileFromDisk(removedPath);
      adminProcessGamesFilesDraft.splice(index, 1);
      if (removedPath) {
        adminProcessGamesAssignmentsDraft = adminProcessGamesAssignmentsDraft.filter(
          (assignment) => String(assignment.filePath || "").replace(/^\/+/, "") !== removedPath
        );
      }
      await persistProcessDraftsNow("ZIP Games supprimé (liste + disque).", "success");
      renderAdminProcessusEditor();
    } catch (error) {
      button.disabled = false;
      setAdminProcessFeedback(String(error?.message || "Suppression ZIP impossible."), "error");
    }
  });
}

if (adminGamesAssignBtn) {
  adminGamesAssignBtn.addEventListener("click", async () => {
    if (!adminProcessUnlocked) {
      setAdminProcessFeedback("Déverrouillez l'accès Processus d'abord.");
      return;
    }
    const email = String(adminGamesAssignUserSelect?.value || "").trim().toLowerCase();
    const filePath = String(adminGamesAssignFileSelect?.value || "").trim().replace(/^\/+/, "");
    const customTitle = String(adminGamesAssignTitleInput?.value || "").trim();
    const maxDownloads = Math.max(1, Math.round(Number(adminGamesAssignMaxDownloadsInput?.value) || 1));
    const expiresRaw = String(adminGamesAssignExpiryInput?.value || "").trim();
    const expiresAt = expiresRaw ? new Date(`${expiresRaw}T23:59:59`).toISOString() : "";

    if (!email || !isAllowedOutlookEmail(email)) {
      setAdminProcessFeedback("Sélectionnez un utilisateur valide.", "error");
      return;
    }
    if (!filePath) {
      setAdminProcessFeedback("Sélectionnez un fichier ZIP.", "error");
      return;
    }
    const sourceFile = adminProcessGamesFilesDraft.find((item) => String(item.path || "") === filePath);
    if (!sourceFile) {
      setAdminProcessFeedback("Fichier ZIP introuvable.", "error");
      return;
    }

    const existingIndex = adminProcessGamesAssignmentsDraft.findIndex(
      (item) => String(item.email || "") === email && String(item.filePath || "") === filePath
    );
    const payload = {
      id: existingIndex >= 0 ? adminProcessGamesAssignmentsDraft[existingIndex].id : `ga-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      email,
      filePath,
      fileName: String(sourceFile.fileName || ""),
      title: customTitle || String(sourceFile.title || sourceFile.fileName || "Fichier Games"),
      maxDownloads,
      downloadCount: existingIndex >= 0 ? Math.max(0, Number(adminProcessGamesAssignmentsDraft[existingIndex].downloadCount) || 0) : 0,
      expiresAt,
      assignedAt: existingIndex >= 0 ? String(adminProcessGamesAssignmentsDraft[existingIndex].assignedAt || new Date().toISOString()) : new Date().toISOString(),
      lastDownloadAt: existingIndex >= 0 ? String(adminProcessGamesAssignmentsDraft[existingIndex].lastDownloadAt || "") : "",
      revoked: false,
    };

    if (existingIndex >= 0) {
      adminProcessGamesAssignmentsDraft[existingIndex] = payload;
    } else {
      adminProcessGamesAssignmentsDraft.unshift(payload);
    }

    if (adminGamesAssignTitleInput) adminGamesAssignTitleInput.value = "";
    if (adminGamesAssignMaxDownloadsInput) adminGamesAssignMaxDownloadsInput.value = "1";
    if (adminGamesAssignExpiryInput) adminGamesAssignExpiryInput.value = "";
    await persistProcessDraftsNow(existingIndex >= 0 ? "Attribution mise à jour." : "Fichier attribué à l'utilisateur.", "success");
    renderAdminProcessusEditor();
  });
}

if (adminProcessGamesAssignmentsListEl) {
  adminProcessGamesAssignmentsListEl.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action][data-assignment-id]");
    if (!button) return;
    const action = String(button.dataset.action || "");
    const assignmentId = String(button.dataset.assignmentId || "");
    const index = adminProcessGamesAssignmentsDraft.findIndex((item) => String(item.id || "") === assignmentId);
    if (index < 0) return;
    if (action === "revoke-process-game-assignment") {
      adminProcessGamesAssignmentsDraft[index].revoked = true;
      await persistProcessDraftsNow("Accès révoqué.", "info");
      renderAdminProcessusEditor();
      return;
    }
    if (action === "reactivate-process-game-assignment") {
      adminProcessGamesAssignmentsDraft[index].revoked = false;
      await persistProcessDraftsNow("Accès réactivé.", "success");
      renderAdminProcessusEditor();
      return;
    }
    if (action === "remove-process-game-assignment") {
      adminProcessGamesAssignmentsDraft.splice(index, 1);
      await persistProcessDraftsNow("Attribution supprimée.", "info");
      renderAdminProcessusEditor();
    }
  });
}

if (adminProcessLinksLists.length) {
  adminProcessLinksLists.forEach((listEl) => {
    listEl.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const sectionKey = String(button.dataset.processLinkSection || listEl.dataset.section || "achats");
      const sectionDraft = getProcessSectionDraft(sectionKey);
      const index = Number(button.dataset.processLinkIndex);
      if (Number.isNaN(index) || !sectionDraft[index]) return;
      if (button.dataset.action === "edit-process-link") {
        openAdminProcessLinkModal(sectionKey, index);
        return;
      }
      if (button.dataset.action !== "remove-process-link") return;
      sectionDraft.splice(index, 1);
      adminProcessSectionDrafts[sectionKey] = sectionDraft;
      await persistProcessDraftsNow(`${getProcessSectionLabel(sectionKey)}: lien supprimé.`, "info");
      renderAdminProcessusEditor();
    });
  });
}

if (adminProcessCrmListEl) {
  adminProcessCrmListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.crmIndex);
    if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;
    if (action === "crm-name") adminCrmLeadsDraft[index].name = String(target.value || "");
    if (action === "crm-email") adminCrmLeadsDraft[index].email = String(target.value || "").trim().toLowerCase();
    if (action === "crm-phone") adminCrmLeadsDraft[index].phone = String(target.value || "");
    if (action === "crm-source") adminCrmLeadsDraft[index].source = String(target.value || "");
    if (action === "crm-owner") adminCrmLeadsDraft[index].owner = String(target.value || "");
    if (action === "crm-note") adminCrmLeadsDraft[index].note = String(target.value || "");
    if (action === "crm-lost-reason") adminCrmLeadsDraft[index].lostReason = String(target.value || "");
    if (action === "crm-budget") adminCrmLeadsDraft[index].budget = Math.max(0, Number(target.value) || 0);
    if (action === "crm-deal-value") adminCrmLeadsDraft[index].dealValue = Math.max(0, Number(target.value) || 0);
    if (action === "crm-config-ref") adminCrmLeadsDraft[index].configRef = String(target.value || "");
    if (action === "crm-next-reminder") adminCrmLeadsDraft[index].nextReminder = String(target.value || "");
    touchCrmLead(index);
  });

  adminProcessCrmListEl.addEventListener("change", (event) => {
    const target = event.target;
    const index = Number(target.dataset.crmIndex);
    if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;
    const action = String(target.dataset.action || "");
    if (action === "crm-status") setCrmLeadStatus(index, String(target.value || "Nouveau"));
    if (action === "crm-priority") {
      adminCrmLeadsDraft[index].priority = CRM_PRIORITIES.includes(String(target.value || ""))
        ? String(target.value || "")
        : "Normale";
      touchCrmLead(index);
    }
    renderAdminCrmEditor();
  });

  adminProcessCrmListEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const action = String(button.dataset.action || "");
    if (action === "crm-close-detail") {
      activeAdminCrmLeadIndex = -1;
      renderAdminCrmEditor();
      return;
    }
    const index = Number(button.dataset.crmIndex);
    if (Number.isNaN(index) || !adminCrmLeadsDraft[index]) return;

    if (action === "crm-select") {
      activeAdminCrmLeadIndex = index;
      ensureCrmTabOpen(index);
      renderAdminCrmEditor();
      window.setTimeout(() => {
        const detailSection = adminProcessCrmListEl.querySelector(".admin-crm-detail");
        const firstInput = adminProcessCrmListEl.querySelector(
          `.admin-crm-detail [data-action="crm-name"][data-crm-index="${index}"]`
        );
        detailSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (firstInput instanceof HTMLElement) firstInput.focus();
      }, 20);
      return;
    }

    if (action === "crm-close-tab") {
      adminCrmOpenTabs = adminCrmOpenTabs.filter((tabIndex) => tabIndex !== index);
      if (activeAdminCrmLeadIndex === index) {
        activeAdminCrmLeadIndex = -1;
      }
      renderAdminCrmEditor();
      return;
    }

    if (action === "crm-set-status") {
      setCrmLeadStatus(index, String(button.dataset.nextStatus || "Nouveau"));
      renderAdminCrmEditor();
      setAdminProcessFeedback(`Statut mis à jour: ${adminCrmLeadsDraft[index].status}`);
      return;
    }

    if (action === "crm-add-activity") {
      const input = adminProcessCrmListEl.querySelector("#admin-crm-new-activity");
      const text = String(input?.value || "").trim();
      if (!text) {
        setAdminProcessFeedback("Entrez une action avant d'ajouter.");
        return;
      }
      if (!Array.isArray(adminCrmLeadsDraft[index].activities)) adminCrmLeadsDraft[index].activities = [];
      adminCrmLeadsDraft[index].activities.push({ at: new Date().toISOString(), text });
      if (input) input.value = "";
      touchCrmLead(index);
      renderAdminCrmEditor();
      setAdminProcessFeedback("Action CRM ajoutée.");
      return;
    }

    if (action === "crm-generate-quote") {
      const lead = adminCrmLeadsDraft[index];
      const quoteHtml = buildCrmQuoteHtml(lead);
      const blob = new Blob([quoteHtml], { type: "text/html;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = sanitizeFileName(`devis-${lead.name || "prospect"}.html`, "devis-vortexbox.html");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      if (!Array.isArray(lead.activities)) lead.activities = [];
      lead.activities.push({ at: new Date().toISOString(), text: "Devis généré." });
      touchCrmLead(index);
      setCrmLeadStatus(index, lead.status === "Nouveau" ? "Devis" : lead.status);
      renderAdminCrmEditor();
      setAdminProcessFeedback("Devis généré (fichier HTML imprimable en PDF).");
      return;
    }

    if (action === "crm-mark-order") {
      const lead = adminCrmLeadsDraft[index];
      if (!lead.orderNumber) {
        lead.orderNumber = `VB-${new Date().getFullYear()}-${String(index + 1).padStart(3, "0")}`;
        lead.orderCreatedAt = new Date().toISOString();
      }
      if (!Array.isArray(lead.activities)) lead.activities = [];
      lead.activities.push({ at: new Date().toISOString(), text: `Commande créée: ${lead.orderNumber}` });
      setCrmLeadStatus(index, "Gagné");
      renderAdminCrmEditor();
      setAdminProcessFeedback("Prospect converti en commande.");
      return;
    }

    if (action === "remove-crm-lead") {
      adminCrmLeadsDraft.splice(index, 1);
      adminCrmOpenTabs = adminCrmOpenTabs
        .map((tabIndex) => (tabIndex > index ? tabIndex - 1 : tabIndex))
        .filter((tabIndex) => tabIndex !== index);
      if (activeAdminCrmLeadIndex >= adminCrmLeadsDraft.length) {
        activeAdminCrmLeadIndex = adminCrmLeadsDraft.length - 1;
      }
      renderAdminCrmEditor();
      setAdminProcessFeedback("Prospect CRM supprimé.");
    }
  });

  adminProcessCrmListEl.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".admin-crm-card[data-crm-index]");
    if (!card) return;
    adminCrmDragLeadIndex = Number(card.dataset.crmIndex);
    if (Number.isNaN(adminCrmDragLeadIndex)) adminCrmDragLeadIndex = -1;
  });

  adminProcessCrmListEl.addEventListener("dragover", (event) => {
    const column = event.target.closest(".admin-crm-column[data-crm-column]");
    if (!column || adminCrmDragLeadIndex < 0) return;
    event.preventDefault();
  });

  adminProcessCrmListEl.addEventListener("drop", (event) => {
    const column = event.target.closest(".admin-crm-column[data-crm-column]");
    if (!column || adminCrmDragLeadIndex < 0) return;
    event.preventDefault();
    const status = String(column.dataset.crmColumn || "Nouveau");
    setCrmLeadStatus(adminCrmDragLeadIndex, status);
    adminCrmDragLeadIndex = -1;
    renderAdminCrmEditor();
    setAdminProcessFeedback(`Prospect déplacé vers ${status}.`);
  });
}

if (adminAddStockItemBtn) {
  adminAddStockItemBtn.addEventListener("click", () => {
    adminStockItemsDraft.push(createEmptyStockItem(adminStockItemsDraft.length));
    renderAdminStockEditor();
    setAdminProcessFeedback("Produit stock ajouté.");
  });
}

if (adminAddSupplierOrderBtn) {
  adminAddSupplierOrderBtn.addEventListener("click", () => {
    adminSupplierOrdersDraft.push(createEmptySupplierOrder(adminSupplierOrdersDraft.length));
    renderAdminSupplierOrdersEditor();
    setAdminProcessFeedback("Commande ajoutée.");
  });
}

if (adminAddSavItemBtn) {
  adminAddSavItemBtn.addEventListener("click", () => {
    adminSavItemsDraft.push(createEmptySavItem(adminSavItemsDraft.length));
    renderAdminSavEditor();
    setAdminProcessFeedback("Dossier SAV ajouté.");
  });
}

if (adminAddDeliveryItemBtn) {
  adminAddDeliveryItemBtn.addEventListener("click", () => {
    adminDeliveryItemsDraft.push(createEmptyDeliveryItem(adminDeliveryItemsDraft.length));
    renderAdminDeliveryEditor();
    setAdminProcessFeedback("Livraison ajoutée.");
  });
}

if (adminProcessSavListEl) {
  adminProcessSavListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.savIndex);
    if (Number.isNaN(index) || !adminSavItemsDraft[index]) return;
    if (action === "sav-last-name") adminSavItemsDraft[index].lastName = String(target.value || "");
    if (action === "sav-first-name") adminSavItemsDraft[index].firstName = String(target.value || "");
    if (action === "sav-address") adminSavItemsDraft[index].address = String(target.value || "");
    if (action === "sav-postal") adminSavItemsDraft[index].postalCode = String(target.value || "");
    if (action === "sav-city") adminSavItemsDraft[index].city = String(target.value || "");
    if (action === "sav-machine-type") adminSavItemsDraft[index].machineType = String(target.value || "");
    if (action === "sav-problem") adminSavItemsDraft[index].problem = String(target.value || "");
    if (action === "sav-resolution") adminSavItemsDraft[index].resolution = String(target.value || "");
  });

  adminProcessSavListEl.addEventListener("change", (event) => {
    const target = event.target;
    if (String(target.dataset.action || "") !== "sav-returned") return;
    const index = Number(target.dataset.savIndex);
    if (Number.isNaN(index) || !adminSavItemsDraft[index]) return;
    adminSavItemsDraft[index].returned = Boolean(target.checked);
    renderAdminSavEditor();
  });

  adminProcessSavListEl.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="remove-sav-item"]');
    if (!button) return;
    const index = Number(button.dataset.savIndex);
    if (Number.isNaN(index) || !adminSavItemsDraft[index]) return;
    adminSavItemsDraft.splice(index, 1);
    renderAdminSavEditor();
    setAdminProcessFeedback("Dossier SAV supprimé.");
  });
}

if (adminProcessSuppliersListEl) {
  adminProcessSuppliersListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.supplierOrderIndex);
    if (Number.isNaN(index) || !adminSupplierOrdersDraft[index]) return;
    if (action === "supplier-order-last-name") adminSupplierOrdersDraft[index].lastName = String(target.value || "");
    if (action === "supplier-order-first-name") adminSupplierOrdersDraft[index].firstName = String(target.value || "");
    if (action === "supplier-order-address") adminSupplierOrdersDraft[index].address = String(target.value || "");
    if (action === "supplier-order-postal") adminSupplierOrdersDraft[index].postalCode = String(target.value || "");
    if (action === "supplier-order-city") adminSupplierOrdersDraft[index].city = String(target.value || "");
    if (action === "supplier-order-phone") adminSupplierOrdersDraft[index].phone = String(target.value || "");
  });

  adminProcessSuppliersListEl.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="remove-supplier-order"]');
    if (!button) return;
    const index = Number(button.dataset.supplierOrderIndex);
    if (Number.isNaN(index) || !adminSupplierOrdersDraft[index]) return;
    adminSupplierOrdersDraft.splice(index, 1);
    renderAdminSupplierOrdersEditor();
    setAdminProcessFeedback("Commande supprimée.");
  });
}

if (adminProcessDeliveryListEl) {
  adminProcessDeliveryListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.deliveryIndex);
    if (Number.isNaN(index) || !adminDeliveryItemsDraft[index]) return;
    if (action === "delivery-last-name") adminDeliveryItemsDraft[index].lastName = String(target.value || "");
    if (action === "delivery-first-name") adminDeliveryItemsDraft[index].firstName = String(target.value || "");
    if (action === "delivery-order-number") adminDeliveryItemsDraft[index].orderNumber = String(target.value || "");
    if (action === "delivery-fees") adminDeliveryItemsDraft[index].fees = Math.max(0, Number(target.value) || 0);
    renderAdminDeliveryEditor();
  });

  adminProcessDeliveryListEl.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="remove-delivery-item"]');
    if (!button) return;
    const index = Number(button.dataset.deliveryIndex);
    if (Number.isNaN(index) || !adminDeliveryItemsDraft[index]) return;
    adminDeliveryItemsDraft.splice(index, 1);
    renderAdminDeliveryEditor();
    setAdminProcessFeedback("Livraison supprimée.");
  });
}

if (adminProcessStockListEl) {
  adminProcessStockListEl.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.stockIndex);
    if (Number.isNaN(index) || !adminStockItemsDraft[index]) return;
    if (action === "stock-name") {
      adminStockItemsDraft[index].name = String(target.value || "");
    }
    if (action === "stock-qty") {
      adminStockItemsDraft[index].quantity = Math.max(0, Math.round(Number(target.value) || 0));
    }
    if (action === "stock-buy") {
      adminStockItemsDraft[index].buyPrice = Math.max(0, Number(target.value) || 0);
    }
    if (action === "stock-sale") {
      adminStockItemsDraft[index].salePrice = Math.max(0, Number(target.value) || 0);
    }
    renderAdminStockEditor();
  });

  adminProcessStockListEl.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="remove-stock-item"]');
    if (!button) return;
    const index = Number(button.dataset.stockIndex);
    if (Number.isNaN(index) || !adminStockItemsDraft[index]) return;
    adminStockItemsDraft.splice(index, 1);
    renderAdminStockEditor();
    setAdminProcessFeedback("Produit stock supprimé.");
  });
}

if (adminFaqList) {
  adminFaqList.addEventListener("input", (event) => {
    const target = event.target;
    const action = target.dataset.action;
    const index = Number(target.dataset.faqIndex);
    if (Number.isNaN(index) || !adminFaqItemsDraft[index]) return;

    if (action === "faq-question") adminFaqItemsDraft[index].question = target.value;
    if (action === "faq-answer") adminFaqItemsDraft[index].answer = target.value;
  });

  adminFaqList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-faq-item']");
    if (!button) return;
    const index = Number(button.dataset.faqIndex);
    if (Number.isNaN(index) || !adminFaqItemsDraft[index]) return;
    if (adminFaqItemsDraft.length === 1) {
      setFeedback("Il faut garder au moins une question FAQ.");
      return;
    }
    adminFaqItemsDraft.splice(index, 1);
    renderAdminFaqEditor();
  });
}

if (adminGamesList) {
  adminGamesList.addEventListener("input", (event) => {
    const target = event.target;
    const action = String(target.dataset.action || "");
    const index = Number(target.dataset.gameIndex);
    if (Number.isNaN(index) || !adminGamesDraft[index]) return;
    if (action === "game-title") adminGamesDraft[index].title = String(target.value || "");
  });

  adminGamesList.addEventListener("change", async (event) => {
    const target = event.target;
    if (!target.matches("input[type='file'][id^='admin-game-file-']")) return;
    const index = Number(String(target.id || "").replace("admin-game-file-", ""));
    if (Number.isNaN(index) || !adminGamesDraft[index]) return;
    const file = target.files && target.files[0];
    if (!file) return;
    try {
      adminGamesDraft[index].image = await readFileAsDataURL(file);
      renderAdminGamesEditor();
    } catch (error) {
      setFeedback("Impossible de lire la jaquette sélectionnée.");
    }
  });

  adminGamesList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-game-item']");
    if (!button) return;
    const index = Number(button.dataset.gameIndex);
    if (Number.isNaN(index) || !adminGamesDraft[index]) return;
    if (adminGamesDraft.length === 1) {
      setFeedback("Gardez au moins une jaquette.");
      return;
    }
    adminGamesDraft.splice(index, 1);
    renderAdminGamesEditor();
  });
}

if (adminSupportCardsList) {
  adminSupportCardsList.addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.supportCardIndex);
    const action = String(target.dataset.action || "");
    if (Number.isNaN(index) || !adminSupportSavDraft.cards?.[index]) return;
    if (action === "support-card-title") adminSupportSavDraft.cards[index].title = String(target.value || "");
    if (action === "support-card-text") adminSupportSavDraft.cards[index].text = String(target.value || "");
    if (action === "support-card-cta") adminSupportSavDraft.cards[index].ctaLabel = String(target.value || "");
  });
  adminSupportCardsList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-support-card']");
    if (!button) return;
    const index = Number(button.dataset.supportCardIndex);
    if (Number.isNaN(index) || !adminSupportSavDraft.cards?.[index]) return;
    if (adminSupportSavDraft.cards.length === 1) {
      setFeedback("Gardez au moins un bloc support.");
      return;
    }
    adminSupportSavDraft.cards.splice(index, 1);
    renderAdminSupportSavEditor();
  });
}

if (adminSupportStepsList) {
  adminSupportStepsList.addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.supportStepIndex);
    const action = String(target.dataset.action || "");
    if (Number.isNaN(index) || !adminSupportSavDraft.steps?.[index]) return;
    if (action === "support-step-title") adminSupportSavDraft.steps[index].title = String(target.value || "");
    if (action === "support-step-text") adminSupportSavDraft.steps[index].text = String(target.value || "");
  });
  adminSupportStepsList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-support-step']");
    if (!button) return;
    const index = Number(button.dataset.supportStepIndex);
    if (Number.isNaN(index) || !adminSupportSavDraft.steps?.[index]) return;
    if (adminSupportSavDraft.steps.length === 1) {
      setFeedback("Gardez au moins une étape SAV.");
      return;
    }
    adminSupportSavDraft.steps.splice(index, 1);
    renderAdminSupportSavEditor();
  });
}

if (adminSupportFaqList) {
  adminSupportFaqList.addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.supportFaqIndex);
    const action = String(target.dataset.action || "");
    if (Number.isNaN(index) || !adminSupportSavDraft.faq?.[index]) return;
    if (action === "support-faq-question") adminSupportSavDraft.faq[index].question = String(target.value || "");
    if (action === "support-faq-answer") adminSupportSavDraft.faq[index].answer = String(target.value || "");
  });
  adminSupportFaqList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-support-faq-item']");
    if (!button) return;
    const index = Number(button.dataset.supportFaqIndex);
    if (Number.isNaN(index) || !adminSupportSavDraft.faq?.[index]) return;
    if (adminSupportSavDraft.faq.length === 1) {
      setFeedback("Gardez au moins une question support.");
      return;
    }
    adminSupportSavDraft.faq.splice(index, 1);
    renderAdminSupportSavEditor();
  });
}

if (adminReviewsList) {
  adminReviewsList.addEventListener("input", (event) => {
    const target = event.target;
    const action = target.dataset.action;
    const index = Number(target.dataset.reviewIndex);
    if (Number.isNaN(index) || !adminReviewsDraft[index]) return;

    if (action === "review-author") adminReviewsDraft[index].author = target.value;
    if (action === "review-text") adminReviewsDraft[index].text = target.value;
    if (action === "review-rating") adminReviewsDraft[index].rating = Number(target.value || 5);
  });

  adminReviewsList.addEventListener("change", (event) => {
    const target = event.target;
    if (target.dataset.action !== "review-approved") return;
    const index = Number(target.dataset.reviewIndex);
    if (Number.isNaN(index) || !adminReviewsDraft[index]) return;
    adminReviewsDraft[index].approved = Boolean(target.checked);
  });

  adminReviewsList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='remove-review-item']");
    if (!button) return;
    const index = Number(button.dataset.reviewIndex);
    if (Number.isNaN(index) || !adminReviewsDraft[index]) return;
    if (adminReviewsDraft.length === 1) {
      setFeedback("Il faut garder au moins un avis client.");
      return;
    }
    adminReviewsDraft.splice(index, 1);
    renderAdminReviewsEditor();
  });
}

if (adminAboutGalleryList) {
  adminAboutGalleryList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='about-gallery-remove']");
    if (!button) return;
    const index = Number(button.dataset.aboutGalleryIndex);
    if (Number.isNaN(index) || !adminAboutGalleryDraft.photos[index]) return;
    adminAboutGalleryDraft.photos.splice(index, 1);
    renderAdminAboutGalleryEditor();
    setFeedback("Photo défilante supprimée.");
  });

  adminAboutGalleryList.addEventListener("change", async (event) => {
    const target = event.target;
    if (target.dataset.action !== "about-gallery-file") return;
    const index = Number(target.dataset.aboutGalleryIndex);
    if (Number.isNaN(index) || !adminAboutGalleryDraft.photos[index]) return;
    const file = target.files && target.files[0];
    if (!file) return;

    try {
      adminAboutGalleryDraft.photos[index].image = await resizeImageForAboutZoom(file);
      adminAboutGalleryDraft.photos[index].fileName = file.name;
      renderAdminAboutGalleryEditor();
      setFeedback(`Photo défilante ${index + 1} prête.`);
    } catch (error) {
      setFeedback(`Photo défilante ${index + 1} invalide.`);
    }
  });
}

adminMachinesList.addEventListener("input", (event) => {
  const target = event.target;
  const action = target.dataset.action;
  const machineIndex = Number(target.dataset.machineIndex);
  if (Number.isNaN(machineIndex) || !adminMachinesDraft[machineIndex]) return;
  ensureMachineBackFields(adminMachinesDraft[machineIndex]);

  if (action === "machine-field") {
    const field = target.dataset.field;
    if (["name", "description", "badge", "price", "backName", "backDescription", "imageSlogan"].includes(field)) {
      if (field === "price") {
        const normalized = normalizePriceLabel(target.value);
        adminMachinesDraft[machineIndex][field] = normalized;
        target.value = normalized;
      } else {
        adminMachinesDraft[machineIndex][field] = target.value;
      }
    }
  }

  if (action === "back-comment-field") {
    const commentIndex = Number(target.dataset.commentIndex);
    if (Number.isNaN(commentIndex) || commentIndex < 0 || commentIndex > 7) return;
    if (!Array.isArray(adminMachinesDraft[machineIndex].backComments)) {
      adminMachinesDraft[machineIndex].backComments = Array(8).fill("");
    }
    adminMachinesDraft[machineIndex].backComments[commentIndex] = String(target.value || "");
  }

  if (action === "spec-field") {
    const specIndex = Number(target.dataset.specIndex);
    const targetSide = target.dataset.specTarget === "back" ? "back" : "front";
    const key = targetSide === "back" ? "backSpecs" : "specs";
    if (!Array.isArray(adminMachinesDraft[machineIndex][key])) adminMachinesDraft[machineIndex][key] = [];
    if (!Number.isNaN(specIndex) && adminMachinesDraft[machineIndex][key][specIndex] !== undefined) {
      adminMachinesDraft[machineIndex][key][specIndex] = target.value;
    }
  }
});

adminMachinesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const machineIndex = Number(button.dataset.machineIndex);
  if (Number.isNaN(machineIndex) || !adminMachinesDraft[machineIndex]) return;
  ensureMachineBackFields(adminMachinesDraft[machineIndex]);

  if (action === "remove-machine") {
    if (adminMachinesDraft.length === 1) {
      setFeedback("Vous devez garder au moins un build.");
      return;
    }
    adminMachinesDraft.splice(machineIndex, 1);
    renderAdminMachinesEditor();
  }

  if (action === "pick-machine-image") {
    event.preventDefault();
    event.stopPropagation();
    const input = adminMachinesList.querySelector(`.admin-machine-image-input[data-machine-index="${machineIndex}"]`);
    triggerFileInput(input);
    return;
  }

  if (action === "remove-machine-image") {
    setMachineImages(adminMachinesDraft[machineIndex], []);
    renderAdminMachinesEditor();
    return;
  }

  if (action === "remove-machine-image-at") {
    const imageIndex = Number(button.dataset.imageIndex);
    if (Number.isNaN(imageIndex)) return;
    const images = getMachineImages(adminMachinesDraft[machineIndex]);
    if (!images[imageIndex]) return;
    images.splice(imageIndex, 1);
    setMachineImages(adminMachinesDraft[machineIndex], images);
    renderAdminMachinesEditor();
    return;
  }

  if (action === "add-spec") {
    const targetSide = button.dataset.specTarget === "back" ? "back" : "front";
    const key = targetSide === "back" ? "backSpecs" : "specs";
    if (!Array.isArray(adminMachinesDraft[machineIndex][key])) adminMachinesDraft[machineIndex][key] = [];
    adminMachinesDraft[machineIndex][key].push("Nouvelle caractéristique");
    renderAdminMachinesEditor();
  }

  if (action === "remove-spec") {
    const specIndex = Number(button.dataset.specIndex);
    if (Number.isNaN(specIndex)) return;
    const targetSide = button.dataset.specTarget === "back" ? "back" : "front";
    const key = targetSide === "back" ? "backSpecs" : "specs";
    if (!Array.isArray(adminMachinesDraft[machineIndex][key])) adminMachinesDraft[machineIndex][key] = [];
    if (adminMachinesDraft[machineIndex][key].length === 1) {
      setFeedback("Un build doit avoir au moins une caractéristique.");
      return;
    }
    adminMachinesDraft[machineIndex][key].splice(specIndex, 1);
    renderAdminMachinesEditor();
  }
});

adminMachinesList.addEventListener("change", async (event) => {
  const target = event.target;
  if (!target.classList.contains("admin-machine-image-input")) return;
  const machineIndex = Number(target.dataset.machineIndex);
  if (Number.isNaN(machineIndex) || !adminMachinesDraft[machineIndex]) return;
  const files = Array.from(target.files || []).filter(Boolean);
  if (!files.length) return;

  try {
    const uploaded = [];
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const safeName = sanitizeFileName(
        file.name || `build-image-${machineIndex + 1}-${i + 1}.webp`,
        `build-image-${machineIndex + 1}-${i + 1}.webp`
      );
      const uploadPayload = await uploadBlobToDiskDetailed("machine-images", safeName, file);
      if (uploadPayload && typeof uploadPayload.path === "string" && uploadPayload.path) {
        uploaded.push(uploadPayload.path);
      } else {
        try {
          uploaded.push(await resizeImage(file));
        } catch (resizeError) {
          uploaded.push(await readFileAsDataURL(file));
        }
      }
    }
    const current = getMachineImages(adminMachinesDraft[machineIndex]);
    setMachineImages(adminMachinesDraft[machineIndex], [...current, ...uploaded]);
    renderAdminMachinesEditor();
    setFeedback(`${uploaded.length} image(s) du build ajoutée(s).`);
  } catch (error) {
    setFeedback("Image du build invalide.");
  }
});

adminTechnicalSheetsList.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.action !== "tech-title") return;
  const index = Number(target.dataset.techIndex);
  if (Number.isNaN(index) || !adminTechnicalSheetsDraft[index]) return;
  adminTechnicalSheetsDraft[index].title = target.value;
});

adminTechnicalSheetsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const index = Number(button.dataset.techIndex);
  if (Number.isNaN(index) || !adminTechnicalSheetsDraft[index]) return;

  if (action === "remove-tech-sheet") {
    adminTechnicalSheetsDraft.splice(index, 1);
    renderAdminTechnicalSheetsEditor();
    return;
  }

  if (action === "pick-tech-image") {
    event.preventDefault();
    event.stopPropagation();
    const input = adminTechnicalSheetsList.querySelector(`.admin-tech-image-input[data-tech-index="${index}"]`);
    triggerFileInput(input);
    return;
  }

  if (action === "pick-tech-file") {
    event.preventDefault();
    event.stopPropagation();
    const input = adminTechnicalSheetsList.querySelector(`.admin-tech-file-input[data-tech-index="${index}"]`);
    triggerFileInput(input);
  }
});

adminTechnicalSheetsList.addEventListener("change", async (event) => {
  const target = event.target;
  const index = Number(target.dataset.techIndex);
  if (Number.isNaN(index) || !adminTechnicalSheetsDraft[index]) return;

  if (target.classList.contains("admin-tech-image-input")) {
    const file = target.files && target.files[0];
    if (!file) return;

    try {
      adminTechnicalSheetsDraft[index].image = await resizeImage(file);
      setFeedback(`Image de fiche ${index + 1} prête.`);
      renderAdminTechnicalSheetsEditor();
    } catch (error) {
      setFeedback(`Image de fiche ${index + 1} invalide.`);
    }
  }

  if (target.classList.contains("admin-tech-file-input")) {
    const file = target.files && target.files[0];
    if (!file) return;

    if (file.size > MAX_TECH_FILE_BYTES) {
      setFeedback("Fichier trop lourd. Limite: 80 MB par fiche.");
      return;
    }

    try {
      const previousKey = adminTechnicalSheetsDraft[index].fileKey || "";
      adminTechnicalSheetsDraft[index].fileData = "";
      adminTechnicalSheetsDraft[index].fileName = file.name;
      adminTechnicalSheetsDraft[index].fileMime = file.type || "application/octet-stream";
      adminTechnicalSheetsDraft[index].fileBlob = file;
      adminTechnicalSheetsDraft[index].removedFileKey = previousKey;
      adminTechnicalSheetsDraft[index].fileKey = "";
      setFeedback(`Document de fiche ${index + 1} prêt.`);
      renderAdminTechnicalSheetsEditor();
    } catch (error) {
      setFeedback(`Document de fiche ${index + 1} invalide.`);
    }
  }
});

adminComponentsList.addEventListener("input", (event) => {
  const target = event.target;
  const action = target.dataset.action;
  const cIndex = Number(target.dataset.componentIndex);
  const oIndex = Number(target.dataset.optionIndex);
  if (Number.isNaN(cIndex) || !adminComponentsDraft[cIndex]) return;

  if (action === "component-label") adminComponentsDraft[cIndex].label = target.value;
  if (action === "component-label" && adminComponentSelect) {
    const option = adminComponentSelect.querySelector(`option[value="${cIndex}"]`);
    if (option) option.textContent = target.value.trim() || `Catégorie ${cIndex + 1}`;
  }
  if (action === "component-option-name" && !Number.isNaN(oIndex)) adminComponentsDraft[cIndex].options[oIndex].name = target.value;
  if (action === "component-option-price" && !Number.isNaN(oIndex)) {
    adminComponentsDraft[cIndex].options[oIndex].price = Number(target.value || 0);
  }
  if (action === "component-option-description" && !Number.isNaN(oIndex)) {
    adminComponentsDraft[cIndex].options[oIndex].description = String(target.value || "");
  }
});

adminComponentsList.addEventListener("change", async (event) => {
  const target = event.target;
  if (!target.classList.contains("admin-component-image-input")) return;
  const cIndex = Number(target.dataset.componentIndex);
  const oIndex = Number(target.dataset.optionIndex);
  if (Number.isNaN(cIndex) || Number.isNaN(oIndex) || !adminComponentsDraft[cIndex]?.options[oIndex]) return;
  const file = target.files && target.files[0];
  if (!file) return;

  try {
    adminComponentsDraft[cIndex].options[oIndex].image = await resizeImage(file);
    renderAdminConfiguratorEditor();
    setFeedback("Image produit ajoutée.");
  } catch (error) {
    setFeedback("Image produit invalide.");
  }
});

adminComponentsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const cIndex = Number(button.dataset.componentIndex);
  const oIndex = Number(button.dataset.optionIndex);
  if (Number.isNaN(cIndex) || !adminComponentsDraft[cIndex]) return;

  if (action === "remove-component") {
    adminComponentsDraft.splice(cIndex, 1);
    if (adminComponentsDraft.length === 0) {
      adminComponentsDraft.push(createEmptyComponentCategory(0));
      setFeedback("La dernière catégorie a été supprimée. Une catégorie vide a été recréée.");
    }
    activeAdminComponentIndex = Math.max(0, Math.min(cIndex, adminComponentsDraft.length - 1));
    renderAdminConfiguratorEditor();
  }

  if (action === "move-component-up") {
    activeAdminComponentIndex = cIndex;
    moveActiveAdminComponent("up");
    return;
  }

  if (action === "move-component-down") {
    activeAdminComponentIndex = cIndex;
    moveActiveAdminComponent("down");
    return;
  }

  if (action === "add-component-option") {
    activeAdminComponentIndex = cIndex;
    addProductsToActiveCategory(1);
    return;
  }

  if (action === "add-multiple-component-options") {
    activeAdminComponentIndex = cIndex;
    const count = Number(button.dataset.count || 3);
    addProductsToActiveCategory(count);
    return;
  }

  if (action === "pick-component-image") {
    event.preventDefault();
    event.stopPropagation();
    const input = adminComponentsList.querySelector(
      `.admin-component-image-input[data-component-index="${cIndex}"][data-option-index="${oIndex}"]`
    );
    triggerFileInput(input);
  }

  if (action === "remove-component-image") {
    if (!Number.isNaN(oIndex) && adminComponentsDraft[cIndex].options[oIndex]) {
      adminComponentsDraft[cIndex].options[oIndex].image = "";
      renderAdminConfiguratorEditor();
    }
  }

  if (action === "remove-component-option") {
    if (adminComponentsDraft[cIndex].options.length === 1) {
      setFeedback("Il faut au moins un produit dans la catégorie.");
      return;
    }
    if (!Number.isNaN(oIndex)) {
      adminComponentsDraft[cIndex].options.splice(oIndex, 1);
      renderAdminConfiguratorEditor();
    }
  }
});

adminServicesList.addEventListener("input", (event) => {
  const target = event.target;
  const action = target.dataset.action;
  const sIndex = Number(target.dataset.serviceIndex);
  if (Number.isNaN(sIndex) || !adminServicesDraft[sIndex]) return;

  if (action === "service-label") adminServicesDraft[sIndex].label = target.value;
  if (action === "service-price") adminServicesDraft[sIndex].price = Number(target.value || 0);
  if (action === "service-description") adminServicesDraft[sIndex].description = String(target.value || "");
});

adminServicesList.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.action !== "service-checked") return;
  const sIndex = Number(target.dataset.serviceIndex);
  if (Number.isNaN(sIndex) || !adminServicesDraft[sIndex]) return;
  adminServicesDraft[sIndex].checked = target.checked;
});

adminServicesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  if (button.dataset.action !== "remove-service") return;
  const sIndex = Number(button.dataset.serviceIndex);
  if (Number.isNaN(sIndex) || !adminServicesDraft[sIndex]) return;
  adminServicesDraft.splice(sIndex, 1);
  renderAdminConfiguratorEditor();
});

function handleAdminUserAction(event) {
  const button = event.target.closest("button[data-action][data-user-email]");
  if (!button) return;
  const action = button.dataset.action;
  const email = decodeURIComponent(button.dataset.userEmail || "").trim().toLowerCase();
  if (!email) return;

  const users = loadSiteUsers();
  const user = users.find((item) => item.email === email);
  if (!user) return;

  if (action === "toggle-revoke-user") {
    user.revoked = !user.revoked;
    if (user.revoked) {
      user.isActive = false;
      user.activationCode = "";
      user.activationSentAt = "";
    }
    saveSiteUsers(users);
    renderAdminUsersManager();
    setFeedback(user.revoked ? `Utilisateur révoqué: ${email}` : `Utilisateur réactivé: ${email}`);
    return;
  }

  if (action === "toggle-blacklist-user") {
    user.blacklisted = !user.blacklisted;
    if (user.blacklisted) {
      user.revoked = false;
      user.isActive = false;
      user.activationCode = "";
      user.activationSentAt = "";
    }
    saveSiteUsers(users);
    renderAdminUsersManager();
    setFeedback(user.blacklisted ? `Utilisateur en liste rouge: ${email}` : `Utilisateur retiré de la liste rouge: ${email}`);
    return;
  }

  if (action === "delete-user") {
    const nextUsers = users.filter((item) => item.email !== email);
    saveSiteUsers(nextUsers);
    renderAdminUsersManager();
    setFeedback(`Utilisateur supprimé: ${email}`);
  }
}

adminUsersListEls.forEach((el) => {
  el.addEventListener("click", handleAdminUserAction);
});

if (adminGeneratePromoBtn) {
  adminGeneratePromoBtn.addEventListener("click", () => {
    const email = String(adminPromoEmailInput?.value || "").trim().toLowerCase();
    if (!isAllowedOutlookEmail(email)) {
      setAdminPromoFeedback("Email invalide. Utilisez une adresse Outlook.", "error");
      return;
    }
    const codes = loadPromoCodes();
    const existingForEmail = codes.find((item) => item.email === email);
    if (existingForEmail) {
      if (adminGeneratedPromoCodeEl) {
        const status = existingForEmail.redeemedBy
          ? "utilisé"
          : existingForEmail.active
            ? "actif"
            : "désactivé";
        adminGeneratedPromoCodeEl.textContent = `Code existant (${status}) : ${existingForEmail.code}`;
      }
      setAdminPromoFeedback("Un seul code promo est autorisé par email utilisateur.", "info");
      renderAdminPromoCodes();
      return;
    }

    let nextCode = "";
    do {
      nextCode = generatePromoCode();
    } while (codes.some((item) => item.code === nextCode));

    codes.unshift({
      code: nextCode,
      email,
      createdAt: new Date().toISOString(),
      active: true,
      redeemedBy: "",
      redeemedAt: "",
    });
    savePromoCodes(codes);
    if (adminGeneratedPromoCodeEl) adminGeneratedPromoCodeEl.textContent = `Code généré: ${nextCode}`;
    setAdminPromoFeedback("Code promo généré et sauvegardé.", "success");
    renderAdminPromoCodes();
  });
}

if (adminPromoCodesListEl) {
  adminPromoCodesListEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action][data-promo-code]");
    if (!button) return;
    const action = button.dataset.action;
    const code = normalizePromoCode(button.dataset.promoCode || "");
    if (!code) return;

    const codes = loadPromoCodes();
    const index = codes.findIndex((item) => item.code === code);
    if (index < 0) return;

    if (action === "toggle-promo-active") {
      codes[index].active = !codes[index].active;
      savePromoCodes(codes);
      renderAdminPromoCodes();
      setAdminPromoFeedback(codes[index].active ? "Code réactivé." : "Code désactivé.", "info");
      return;
    }

    if (action === "reset-promo-usage") {
      codes[index].redeemedBy = "";
      codes[index].redeemedAt = "";
      codes[index].active = true;
      savePromoCodes(codes);
      renderAdminPromoCodes();
      setAdminPromoFeedback("Utilisation du code réactivée (code à nouveau disponible).", "success");
      return;
    }

    if (action === "delete-promo") {
      const removed = codes.splice(index, 1)[0];
      savePromoCodes(codes);
      renderAdminPromoCodes();
      if (activePromoCode && removed?.code === activePromoCode) {
        activePromoCode = "";
        sessionStorage.removeItem(PROMO_SESSION_KEY);
        renderConfigurator();
        updateSummary();
      }
      setAdminPromoFeedback("Code promo supprimé.", "success");
    }
  });
}

adminTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveAdminTab(button.dataset.tab));
});


heroShowcaseEl.addEventListener("click", (event) => {
  const adminButton = event.target.closest("button[data-action][data-index]");
  if (adminButton && isAdminLiveMode()) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(adminButton.dataset.index);
    if (Number.isNaN(index)) return;
    if (adminButton.dataset.action === "showcase-left" && index > 0) {
      [siteContent.showcase[index - 1], siteContent.showcase[index]] = [siteContent.showcase[index], siteContent.showcase[index - 1]];
      if (!persistSiteContentAuto()) return;
      renderShowcase();
      return;
    }
    if (adminButton.dataset.action === "showcase-right" && index < siteContent.showcase.length - 1) {
      [siteContent.showcase[index + 1], siteContent.showcase[index]] = [siteContent.showcase[index], siteContent.showcase[index + 1]];
      if (!persistSiteContentAuto()) return;
      renderShowcase();
    }
    return;
  }

  const card = event.target.closest(".showcase-card");
  if (!card) return;
  const image = card.querySelector("img");
  if (!image) return;
  const caption = card.querySelector("h4")?.textContent || "VortexBox";
  openImageModal(image.src, caption);
});

if (heroShowcaseEl && window.matchMedia("(pointer:fine)").matches) {
  heroShowcaseEl.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".showcase-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = Math.max(0, Math.min(1, x / rect.width));
    const py = Math.max(0, Math.min(1, y / rect.height));
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 10;

    card.style.setProperty("--sx", `${(px * 100).toFixed(2)}%`);
    card.style.setProperty("--sy", `${(py * 100).toFixed(2)}%`);
    card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
  });

  heroShowcaseEl.addEventListener("pointerleave", () => {
    heroShowcaseEl.querySelectorAll(".showcase-card").forEach((card) => {
      card.style.setProperty("--sx", "50%");
      card.style.setProperty("--sy", "50%");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

machinesCardsEl.addEventListener("click", (event) => {
  const card = event.target.closest(".machine-card");
  if (!card) return;
  const index = Number(card.dataset.machineIndex);
  if (Number.isNaN(index)) return;
  activeMachineModalIndex = index;
  openMachineModal(siteContent.machines[index]);
});

machinesCardsEl.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".machine-card");
  if (!card) return;
  event.preventDefault();
  const index = Number(card.dataset.machineIndex);
  if (Number.isNaN(index)) return;
  activeMachineModalIndex = index;
  openMachineModal(siteContent.machines[index]);
});

if (machineModalContentEl) {
  machineModalContentEl.addEventListener("click", (event) => {
    if (activeMachineModalIndex < 0 || !siteContent.machines[activeMachineModalIndex]) return;
    const machine = siteContent.machines[activeMachineModalIndex];
    const button = event.target.closest("button[data-action]");
    const imageTrigger = event.target.closest("[data-action='open-machine-modal-image']");

    if (imageTrigger instanceof HTMLImageElement && imageTrigger.src) {
      openImageModal(imageTrigger.src, machine.name || "VortexBox");
      return;
    }

    if (button?.dataset.action === "machine-modal-image-select") {
      const imageIndex = Number(button.dataset.imageIndex);
      if (Number.isNaN(imageIndex)) return;
      activeMachineModalImageIndex = imageIndex;
      openMachineModal(machine);
      if (!isAdminLiveMode()) {
        const images = getMachineImages(machine);
        const selected = images[activeMachineModalImageIndex];
        if (selected) openImageModal(selected, machine.name || "VortexBox");
      }
      return;
    }

    if (!button || !isAdminLiveMode()) return;

    if (button.dataset.action === "machine-modal-image-pick") {
      const input = machineModalContentEl.querySelector("#machine-modal-image-input");
      triggerFileInput(input);
      return;
    }

    if (button.dataset.action === "machine-modal-image-remove") {
      const images = getMachineImages(machine);
      if (!images.length) return;
      images.splice(activeMachineModalImageIndex, 1);
      activeMachineModalImageIndex = Math.max(0, Math.min(activeMachineModalImageIndex, images.length - 1));
      setMachineImages(machine, images);
      if (!persistSiteContentAuto()) return;
      openMachineModal(machine);
      renderMachines();
      return;
    }
  });

  machineModalContentEl.addEventListener("change", async (event) => {
    const input = event.target.closest(".machine-modal-image-input");
    if (!input || !isAdminLiveMode()) return;
    if (activeMachineModalIndex < 0 || !siteContent.machines[activeMachineModalIndex]) return;
    const files = Array.from(input.files || []).filter(Boolean);
    if (!files.length) return;

    try {
      const uploaded = [];
      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        const safeName = sanitizeFileName(
          file.name || `build-image-live-${activeMachineModalIndex + 1}-${i + 1}.webp`,
          `build-image-live-${activeMachineModalIndex + 1}-${i + 1}.webp`
        );
        const uploadPayload = await uploadBlobToDiskDetailed("machine-images", safeName, file);
        if (uploadPayload && typeof uploadPayload.path === "string" && uploadPayload.path) {
          uploaded.push(uploadPayload.path);
        } else {
          try {
            uploaded.push(await resizeImage(file));
          } catch (resizeError) {
            uploaded.push(await readFileAsDataURL(file));
          }
        }
      }
      const current = getMachineImages(siteContent.machines[activeMachineModalIndex]);
      setMachineImages(siteContent.machines[activeMachineModalIndex], [...current, ...uploaded]);
      activeMachineModalImageIndex = Math.max(0, getMachineImages(siteContent.machines[activeMachineModalIndex]).length - uploaded.length);
      if (!persistSiteContentAuto()) return;
      openMachineModal(siteContent.machines[activeMachineModalIndex]);
      renderMachines();
    } catch (error) {
      setFeedback("Image build invalide.");
    }
  });
}

technicalSheetsGridEl.addEventListener("click", (event) => {
  const adminButton = event.target.closest("button[data-action][data-tech-index]");
  if (adminButton && isAdminLiveMode()) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(adminButton.dataset.techIndex);
    if (Number.isNaN(index)) return;

    if (adminButton.dataset.action === "tech-left" && index > 0) {
      [siteContent.technicalSheets[index - 1], siteContent.technicalSheets[index]] = [
        siteContent.technicalSheets[index],
        siteContent.technicalSheets[index - 1],
      ];
      if (!persistSiteContent()) return;
      renderTechnicalSheets();
      return;
    }

    if (adminButton.dataset.action === "tech-right" && index < siteContent.technicalSheets.length - 1) {
      [siteContent.technicalSheets[index + 1], siteContent.technicalSheets[index]] = [
        siteContent.technicalSheets[index],
        siteContent.technicalSheets[index + 1],
      ];
      if (!persistSiteContent()) return;
      renderTechnicalSheets();
    }
    return;
  }

  if (event.target.closest(".download-btn, .technical-download-icon")) return;
  const card = event.target.closest(".technical-card");
  if (!card) return;
  const index = Number(card.dataset.techIndex);
  if (Number.isNaN(index) || !siteContent.technicalSheets[index]) return;
  openTechnicalSheetModal(siteContent.technicalSheets[index], index);
});

technicalSheetsGridEl.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest(".download-btn, .technical-download-icon")) return;
  const card = event.target.closest(".technical-card");
  if (!card) return;
  event.preventDefault();
  const index = Number(card.dataset.techIndex);
  if (Number.isNaN(index) || !siteContent.technicalSheets[index]) return;
  openTechnicalSheetModal(siteContent.technicalSheets[index], index);
});

imageModalCloseEl.addEventListener("click", closeImageModal);
machineModalCloseEl.addEventListener("click", closeMachineModal);
configInfoModalCloseEl?.addEventListener("click", closeConfigInfoModal);
legalModalCloseEl?.addEventListener("click", closeLegalModal);

MENU_BADGE_KEYS.forEach((key) => {
  const select = document.getElementById(`admin-menu-badge-${key}`);
  const customInput = getAdminMenuBadgeCustomInput(key);
  select?.addEventListener("change", () => {
    syncAdminMenuBadgeCustomState(key, select.value, customInput?.value || "");
  });
  customInput?.addEventListener("input", () => {
    if (String(select?.value || "") === "custom") {
      customInput.value = customInput.value.slice(0, 18);
    }
  });
});

footerLegalMentionsBtnEl?.addEventListener("click", () => openLegalModal("mentions"));
footerLegalCgvBtnEl?.addEventListener("click", () => openLegalModal("cgv"));
footerLegalRgpdBtnEl?.addEventListener("click", () => openLegalModal("rgpd"));
footerLegalCookiesBtnEl?.addEventListener("click", () => openLegalModal("cookies"));

imageModalEl.addEventListener("click", (event) => {
  if (event.target === imageModalEl) closeImageModal();
});

machineModalEl.addEventListener("click", (event) => {
  if (event.target === machineModalEl) closeMachineModal();
});

configInfoModalEl?.addEventListener("click", (event) => {
  if (event.target === configInfoModalEl) closeConfigInfoModal();
});

legalModalEl?.addEventListener("click", (event) => {
  if (event.target === legalModalEl) closeLegalModal();
});

configuratorVisualEl.addEventListener("click", (event) => {
  const adminButton = event.target.closest("button[data-action][data-index]");
  if (!adminButton || !isAdminLiveMode()) return;
  event.preventDefault();
  event.stopPropagation();
  const index = Number(adminButton.dataset.index);
  if (Number.isNaN(index)) return;
  const visualImages = Array.isArray(siteContent.configurator?.visualImages)
    ? [...siteContent.configurator.visualImages]
    : [];
  if (!visualImages.length) return;

  if (adminButton.dataset.action === "config-visual-left" && index > 0) {
    [visualImages[index - 1], visualImages[index]] = [visualImages[index], visualImages[index - 1]];
  } else if (adminButton.dataset.action === "config-visual-right" && index < visualImages.length - 1) {
    [visualImages[index + 1], visualImages[index]] = [visualImages[index], visualImages[index + 1]];
  } else {
    return;
  }

  siteContent.configurator.visualImages = visualImages;
  if (!persistSiteContentAuto()) return;
  renderConfigurator();
});

if (summaryTelegramImageEl) {
  summaryTelegramImageEl.addEventListener("click", (event) => {
    const image = event.target.closest('img[data-action="open-summary-telegram-image"]');
    if (image) {
      openImageModal(image.src, "Visuel Telegram VortexBox");
      return;
    }
    const button = event.target.closest("button[data-action]");
    if (!button || !isAdminLiveMode()) return;

    if (button.dataset.action === "summary-telegram-pick") {
      const input = summaryTelegramImageEl.querySelector("#summary-telegram-input");
      triggerFileInput(input);
      return;
    }
    if (button.dataset.action === "summary-telegram-remove") {
      siteContent.configurator.summaryTelegramImage = "";
      if (!persistSiteContentAuto()) return;
      renderSummaryTelegramImage("");
    }
  });

  summaryTelegramImageEl.addEventListener("change", (event) => {
    const input = event.target.closest(".summary-telegram-input");
    if (!input || !isAdminLiveMode()) return;
    const file = input.files && input.files[0];
    if (!file) return;
    resizeImage(file)
      .then((data) => {
        siteContent.configurator.summaryTelegramImage = data;
        if (!persistSiteContentAuto()) return;
        renderSummaryTelegramImage(data);
      })
      .catch(() => {});
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imageModalEl.classList.contains("hidden")) {
    closeImageModal();
  }
  if (event.key === "Escape" && !machineModalEl.classList.contains("hidden")) {
    closeMachineModal();
  }
  if (event.key === "Escape" && configInfoModalEl && !configInfoModalEl.classList.contains("hidden")) {
    closeConfigInfoModal();
  }
  if (event.key === "Escape" && legalModalEl && !legalModalEl.classList.contains("hidden")) {
    closeLegalModal();
  }
  if (event.key === "Escape" && adminVideoModalEl && !adminVideoModalEl.classList.contains("hidden")) {
    closeAdminVideoModal();
  }
  if (event.key === "Escape" && adminProcessLinkModalEl && !adminProcessLinkModalEl.classList.contains("hidden")) {
    closeAdminProcessLinkModal();
  }
  if (event.key === "Escape" && adminProcessFileModalEl && !adminProcessFileModalEl.classList.contains("hidden")) {
    closeAdminProcessFileModal();
  }
  if (event.key === "Escape" && adminRailwayUpdateModalEl && !adminRailwayUpdateModalEl.classList.contains("hidden")) {
    closeAdminRailwayUpdateModal();
  }
});

[openConfiguratorLinkEl, openConfiguratorCtaEl, mobileOpenConfiguratorEl].forEach((el) => {
  if (!el) return;
  el.addEventListener("click", (event) => {
    event.preventDefault();
    enterConfiguratorOnlyMode();
  });
});

[
  [navMachinesLinkEl, "#machines"],
  [navFichesLinkEl, "#fiches-techniques"],
].forEach(([el, targetSelector]) => {
  if (!el) return;
  el.addEventListener("click", (event) => {
    event.preventDefault();
    exitConfiguratorOnlyMode(targetSelector);
  });
});

adminToggle.addEventListener("click", () => {
  const sessionEmail = sessionStorage.getItem(AUTH_SESSION_KEY) || "";
  if (!isAdminEmail(sessionEmail) || sessionStorage.getItem(SESSION_KEY) !== "1") return;
  const panelHidden = adminPanel.classList.contains("hidden");

  if (panelHidden && !adminToggleAwaitingOpen) {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "1");
    refreshAdminLiveMode();
    adminToggleAwaitingOpen = true;
    setFeedback("Mode administrateur live activé. Cliquez une 2e fois pour ouvrir le menu admin.", "info");
    return;
  }

  if (panelHidden && adminToggleAwaitingOpen) {
    adminToggleAwaitingOpen = false;
    adminPanel.classList.remove("hidden");
    showAdminEditor();
    setFeedback("");
    return;
  }

  adminPanel.classList.add("hidden");
  adminToggleAwaitingOpen = false;
  setFeedback("");
});

if (adminLiveExitBtn) {
  adminLiveExitBtn.addEventListener("click", () => {
    sessionStorage.setItem(ADMIN_LIVE_MODE_KEY, "0");
    if (adminPanel) adminPanel.classList.add("hidden");
    adminToggleAwaitingOpen = false;
    refreshAdminLiveMode();
  });
}

if (siteLoginFormEl) {
  siteLoginFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = String(siteLoginEmailEl.value || "").trim().toLowerCase();
    const password = String(siteLoginPasswordEl.value || "");
    const adminPasswordCandidate = normalizeCredentialValue(password);

    if (!isAllowedOutlookEmail(email)) {
      setAuthFeedback("Adresse non autorisée. Utilisez une adresse Outlook.", "error");
      return;
    }

    if (password.length < 6) {
      setAuthFeedback("Mot de passe trop court (6 caractères minimum).", "error");
      return;
    }

    if (isAdminEmail(email) && !isAdminCredential(email, adminPasswordCandidate)) {
      setAuthFeedback("Cet email est réservé à l'administrateur.", "error");
      return;
    }

    if (isAdminCredential(email, adminPasswordCandidate)) {
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
          displayName: "",
          profilePhoto: "",
          password,
          totalConnectionSeconds: 0,
          lastSeenAt: "",
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

if (userProfileToggleBtn) {
  userProfileToggleBtn.addEventListener("click", () => {
    openUserProfilePanel();
  });
}

if (profileCloseBtn) {
  profileCloseBtn.addEventListener("click", () => {
    closeUserProfilePanel();
  });
}

if (userProfilePanel) {
  userProfilePanel.addEventListener("click", (event) => {
    if (event.target === userProfilePanel) closeUserProfilePanel();
  });
}

if (profileSaveNameBtn) {
  profileSaveNameBtn.addEventListener("click", () => {
    const email = getCurrentSessionEmail();
    if (!email) return;

    const nextDisplayName = String(profileDisplayNameInput?.value || "").trim();
    if (nextDisplayName.length < 2) {
      setProfileFeedback("Entrez un nom ou pseudo (2 caractères minimum).");
      return;
    }

    const users = loadSiteUsers();
    const existing = users.find((user) => user.email === email);
    if (!existing) {
      if (isAdminEmail(email)) {
        setProfileFeedback("Profil admin actif. Le nom est appliqué pour cet envoi d'avis.");
        return;
      }
      setProfileFeedback("Profil utilisateur introuvable.");
      return;
    }

    existing.displayName = nextDisplayName;
    saveSiteUsers(users);
    renderAdminUsersManager();
    setProfileFeedback("Profil mis à jour.");
  });
}

if (profileAvatarPickBtn) {
  profileAvatarPickBtn.addEventListener("click", () => {
    triggerFileInput(profileAvatarFileInput);
  });
}

if (profileAvatarFileInput) {
  profileAvatarFileInput.addEventListener("change", async () => {
    const email = getCurrentSessionEmail();
    if (!email) return;
    const file = profileAvatarFileInput.files && profileAvatarFileInput.files[0];
    if (!file) return;
    try {
      const photoData = await resizeImage(file);
      const saved = setUserProfilePhoto(email, photoData);
      if (!saved) {
        setProfileAvatarFeedback("Impossible de sauvegarder la photo utilisateur.");
        return;
      }
      if (profileAvatarImgEl) profileAvatarImgEl.src = photoData;
      setProfileAvatarFeedback("Photo utilisateur mise à jour.");
    } catch (error) {
      setProfileAvatarFeedback("Image invalide.");
    }
  });
}

if (profileChangePasswordBtn) {
  profileChangePasswordBtn.addEventListener("click", () => {
    const email = getCurrentSessionEmail();
    if (!email) return;

    if (isAdminEmail(email)) {
      setProfilePasswordFeedback("Compte administrateur: modification du mot de passe indisponible ici.");
      return;
    }

    const currentPassword = String(profileCurrentPasswordInput?.value || "");
    const newPassword = String(profileNewPasswordInput?.value || "");
    const confirmPassword = String(profileConfirmPasswordInput?.value || "");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setProfilePasswordFeedback("Complétez tous les champs du mot de passe.");
      return;
    }
    if (newPassword.length < 6) {
      setProfilePasswordFeedback("Le nouveau mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setProfilePasswordFeedback("La confirmation du nouveau mot de passe est différente.");
      return;
    }

    const users = loadSiteUsers();
    const existing = users.find((user) => user.email === email);
    if (!existing) {
      setProfilePasswordFeedback("Profil utilisateur introuvable.");
      return;
    }
    if (existing.password !== currentPassword) {
      setProfilePasswordFeedback("Mot de passe actuel incorrect.");
      return;
    }

    existing.password = newPassword;
    saveSiteUsers(users);
    if (profileCurrentPasswordInput) profileCurrentPasswordInput.value = "";
    if (profileNewPasswordInput) profileNewPasswordInput.value = "";
    if (profileConfirmPasswordInput) profileConfirmPasswordInput.value = "";
    setProfilePasswordFeedback("Mot de passe modifié avec succès.");
  });
}

if (profileSubmitReviewBtn) {
  profileSubmitReviewBtn.addEventListener("click", () => {
    const email = getCurrentSessionEmail();
    if (!email) return;

    const rating = Math.min(5, Math.max(1, Number(profileReviewRatingInput?.value) || 5));
    const text = String(profileReviewTextInput?.value || "").trim();
    if (text.length < 8) {
      setProfileFeedback("Votre avis doit contenir au moins 8 caractères.");
      return;
    }

    const profileName = String(profileDisplayNameInput?.value || "").trim();
    const author = profileName || getUserDisplayName(email);

    const nextReviews = Array.isArray(siteContent.reviews) ? [...siteContent.reviews] : [];
    nextReviews.push({
      author,
      rating,
      text,
      approved: false,
      userEmail: email,
      createdAt: new Date().toISOString(),
    });
    siteContent.reviews = nextReviews;

    if (!persistSiteContent()) {
      setProfileFeedback("Impossible d'envoyer l'avis (stockage saturé).");
      return;
    }

    renderReviews();
    renderUserProfileReviews(email);
    recordUserActivity(email, "Avis envoyé", text.slice(0, 80));
    renderUserProfileActivity(email);
    if (profileReviewTextInput) profileReviewTextInput.value = "";
    if (profileReviewRatingInput) profileReviewRatingInput.value = "5";
    setProfileFeedback("Avis envoyé. Il sera visible après validation administrateur.");
  });
}

if (profileAdminPhotoPickBtn) {
  profileAdminPhotoPickBtn.addEventListener("click", () => {
    triggerFileInput(profileAdminPhotoFileInput);
  });
}

if (profileAdminPhotoFileInput) {
  profileAdminPhotoFileInput.addEventListener("change", async () => {
    const file = profileAdminPhotoFileInput.files && profileAdminPhotoFileInput.files[0];
    if (!file) {
      return;
    }
    try {
      profileAdminPhotoDraft = await resizeImageForAboutZoom(file);
      if (profileAdminPhotoPreviewEl) profileAdminPhotoPreviewEl.src = profileAdminPhotoDraft;
      if (profileAdminPhotoNameEl) profileAdminPhotoNameEl.textContent = file.name;
      setProfileAdminPhotoFeedback("Image prête à être sauvegardée.");
    } catch (error) {
      profileAdminPhotoDraft = "";
      if (profileAdminPhotoPreviewEl) profileAdminPhotoPreviewEl.src = EMPTY_IMAGE_DATA_URI;
      setProfileAdminPhotoFeedback("Image invalide.");
    }
  });
}

if (profileAdminPhotoUploadBtn) {
  profileAdminPhotoUploadBtn.addEventListener("click", async () => {
    const email = getCurrentSessionEmail();
    if (!email || !isAdminEmail(email)) {
      setProfileAdminPhotoFeedback("Action réservée à l'administrateur.");
      return;
    }
    if (!profileAdminPhotoDraft) {
      setProfileAdminPhotoFeedback("Choisissez une image avant de sauvegarder.");
      return;
    }

    siteContent.adminProfileReviewPhoto = profileAdminPhotoDraft;
    localStorage.setItem(ADMIN_PROFILE_PHOTO_KEY, profileAdminPhotoDraft);

    if (!persistSiteContent()) {
      setProfileAdminPhotoFeedback("Impossible de sauvegarder la photo (stockage saturé).");
      return;
    }
    const diskSaved = await saveContentSnapshotToDisk(siteContent);
    if (profileAdminPhotoFileInput) profileAdminPhotoFileInput.value = "";
    if (profileAdminPhotoPreviewEl) profileAdminPhotoPreviewEl.src = profileAdminPhotoDraft;
    if (profileAdminPhotoNameEl) profileAdminPhotoNameEl.textContent = "Aucune image";
    setProfileAdminPhotoFeedback(
      diskSaved
        ? "Photo sauvegardée."
        : "Photo sauvegardée localement. Sauvegarde disque indisponible actuellement."
    );
  });
}

if (summarySaveConfigBtn) {
  summarySaveConfigBtn.addEventListener("click", () => {
    const email = getCurrentSessionEmail();
    if (!email) {
      setSummarySaveFeedback("Connectez-vous pour sauvegarder votre configuration.");
      return;
    }

    const snapshot = buildCurrentConfigSnapshot();
    if (!snapshot) {
      setSummarySaveFeedback("Aucune sélection à sauvegarder.");
      return;
    }

    const current = getUserConfigs(email);
    current.unshift(snapshot);
    setUserConfigs(email, current);
    recordUserActivity(email, "Config sauvegardée", snapshot.title || "");
    setSummarySaveFeedback("Configuration sauvegardée dans votre profil.");
    if (userProfilePanel && !userProfilePanel.classList.contains("hidden")) {
      renderUserProfileConfigs(email);
      renderUserProfileFavorites(email);
      renderUserProfileActivity(email);
    }
  });
}

if (promoApplyBtnEl) {
  promoApplyBtnEl.addEventListener("click", () => {
    const email = getCurrentSessionEmail();
    if (!email) {
      setPromoFeedback("Connectez-vous pour activer votre code promo.", "error");
      return;
    }
    const code = normalizePromoCode(promoCodeInputEl?.value || "");
    if (!code) {
      setPromoFeedback("Entrez votre code promo.", "error");
      return;
    }

    const codes = loadPromoCodes();
    const index = codes.findIndex((item) => item.code === code);
    if (index < 0) {
      setPromoFeedback("Code promo invalide.", "error");
      return;
    }
    const promo = codes[index];
    if (!promo.active) {
      setPromoFeedback("Ce code promo est désactivé.", "error");
      return;
    }
    if (promo.email !== email) {
      setPromoFeedback("Ce code promo n'est pas lié à votre adresse email.", "error");
      return;
    }
    if (promo.redeemedBy) {
      setPromoFeedback("Ce code promo a déjà été utilisé.", "error");
      return;
    }

    promo.redeemedBy = email;
    promo.redeemedAt = promo.redeemedAt || new Date().toISOString();
    promo.active = false;
    codes[index] = promo;
    savePromoCodes(codes);
    recordUserActivity(email, "Code promo DLC utilisé", code);

    activePromoCode = code;
    sessionStorage.setItem(PROMO_SESSION_KEY, code);
    if (promoCodeInputEl) promoCodeInputEl.value = code;
    renderConfigurator();
    updateSummary();
    setPromoFeedback("Code validé: option DLC activée gratuitement.", "success");
    if (userProfilePanel && !userProfilePanel.classList.contains("hidden")) {
      renderUserProfileActivity(email);
    }
  });
}

if (promoCodeInputEl) {
  promoCodeInputEl.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    promoApplyBtnEl?.click();
  });
}

if (profileConfigsListEl) {
  profileConfigsListEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action][data-config-id]");
    if (!button) return;
    const action = button.dataset.action;
    const configId = String(button.dataset.configId || "");
    const email = getCurrentSessionEmail();
    if (!email || !configId) return;

    const current = getUserConfigs(email);
    const index = current.findIndex((item) => String(item?.id || "") === configId);
    if (index < 0) return;

    if (action === "profile-delete-config") {
      const deletedTitle = String(current[index]?.title || "Configuration");
      current.splice(index, 1);
      setUserConfigs(email, current);
      renderUserProfileConfigs(email);
      renderUserProfileFavorites(email);
      recordUserActivity(email, "Suppression config", deletedTitle);
      renderUserProfileActivity(email);
      setProfileFeedback("Configuration supprimée.");
      return;
    }

    if (action === "profile-toggle-favorite") {
      const config = current[index];
      const isFav = toggleUserFavoriteConfig(email, config.id);
      renderUserProfileConfigs(email);
      renderUserProfileFavorites(email);
      recordUserActivity(email, isFav ? "Favori ajouté" : "Favori retiré", String(config.title || ""));
      renderUserProfileActivity(email);
      setProfileFeedback(isFav ? "Configuration ajoutée aux favoris." : "Configuration retirée des favoris.");
      return;
    }

    if (action === "profile-load-config") {
      const loaded = applySavedConfigToConfigurator(current[index]);
      if (!loaded) {
        setProfileFeedback("Impossible de charger cette configuration.");
        return;
      }
      recordUserActivity(email, "Configuration chargée", String(current[index]?.title || ""));
      renderUserProfileActivity(email);
      setProfileFeedback("Configuration chargée dans le configurateur.");
      return;
    }

    if (action === "profile-resume-config") {
      const loaded = applySavedConfigToConfigurator(current[index]);
      if (!loaded) {
        setProfileFeedback("Impossible de reprendre cette configuration.");
        return;
      }
      recordUserActivity(email, "Reprise config", String(current[index]?.title || ""));
      renderUserProfileActivity(email);
      setProfileFeedback("Configuration reprise dans le configurateur.");
      closeUserProfilePanel();
      enterConfiguratorOnlyMode();
    }
  });
}

if (profileFavoritesListEl) {
  profileFavoritesListEl.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="profile-resume-config"][data-config-id]');
    if (!button) return;
    const email = getCurrentSessionEmail();
    const configId = String(button.dataset.configId || "");
    if (!email || !configId) return;
    const configs = getUserConfigs(email);
    const target = configs.find((item) => String(item?.id || "") === configId);
    if (!target) return;
    const loaded = applySavedConfigToConfigurator(target);
    if (!loaded) {
      setProfileFeedback("Impossible de reprendre cette configuration.");
      return;
    }
    recordUserActivity(email, "Reprise config", String(target.title || ""));
    renderUserProfileActivity(email);
    closeUserProfilePanel();
    enterConfiguratorOnlyMode();
  });
}

if (profileDownloadsListEl) {
  profileDownloadsListEl.addEventListener("click", async (event) => {
    const button = event.target.closest('button[data-action="profile-download-assignment"][data-assignment-id]');
    if (!button) return;
    const email = getCurrentSessionEmail();
    const assignmentId = String(button.dataset.assignmentId || "");
    if (!email || !assignmentId) return;
    const assignments = Array.isArray(siteContent.processus?.gamesAssignments) ? siteContent.processus.gamesAssignments : [];
    const index = assignments.findIndex((item) => String(item?.id || "") === assignmentId);
    if (index < 0) {
      setProfileFeedback("Fichier introuvable.");
      return;
    }
    const assignment = assignments[index];
    if (String(assignment.email || "").trim().toLowerCase() !== email) {
      setProfileFeedback("Accès refusé pour ce fichier.");
      return;
    }
    if (getGamesAssignmentStatus(assignment, email) !== "available") {
      setProfileFeedback("Ce téléchargement n'est plus disponible.");
      renderUserProfileDownloads(email);
      refreshUserDownloadsBadge();
      return;
    }
    const safePath = String(assignment.filePath || "").replace(/^\/+/, "");
    if (!safePath) {
      setProfileFeedback("Chemin du fichier invalide.");
      return;
    }

    assignments[index].downloadCount = Math.max(0, Math.round(Number(assignments[index].downloadCount) || 0)) + 1;
    assignments[index].lastDownloadAt = new Date().toISOString();
    siteContent.processus.gamesAssignments = assignments;
    persistSiteContent();
    saveContentSnapshotToDisk(siteContent).catch(() => {});
    renderUserProfileDownloads(email);
    refreshUserDownloadsBadge();
    recordUserActivity(email, "Téléchargement ZIP Games", String(assignment.title || assignment.fileName || ""));
    renderUserProfileActivity(email);

    const link = document.createElement("a");
    link.href = `/${safePath}`;
    link.download = String(assignment.fileName || "");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setProfileFeedback("Téléchargement lancé.");
  });
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
    if (adminToggle) adminToggle.classList.add("hidden");
    document.body.classList.remove("config-only");
    if (configuratorSectionEl) configuratorSectionEl.classList.add("configurator-locked");
    if (adminPanel) adminPanel.classList.add("hidden");
    setAdminState(false);
    setFeedback("");
    lockSite();
    if (authRememberEl) authRememberEl.checked = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

adminLoginBtn.addEventListener("click", () => {
  const email = String(adminEmailInput.value || "").trim().toLowerCase();
  const password = adminPasswordInput.value || "";
  const adminPasswordCandidate = normalizeCredentialValue(password);

  if (!isAdminCredential(email, adminPasswordCandidate)) {
    setFeedback("Accès admin refusé.");
    return;
  }
  sessionStorage.setItem(SESSION_KEY, "1");
  setAdminState(true);
  refreshAdminLiveMode();
  setFeedback("Connexion administrateur réussie.");
  adminEmailInput.value = "";
  adminPasswordInput.value = "";

  // Si l'accès vient d'un lien profond (openAdmin + onglet), on ouvre directement
  // la zone demandée sans bloquer sur l'écran KPI.
  if (pendingAdminDeepLinkTab) {
    showAdminEditor();
  }
});

adminEditor.addEventListener("submit", async (event) => {
  event.preventDefault();

  const validMachines =
    Array.isArray(adminMachinesDraft) &&
    adminMachinesDraft.length > 0 &&
    adminMachinesDraft.every(
      (machine) =>
        machine &&
        machine.name?.trim() &&
        machine.description?.trim() &&
        machine.price?.trim() &&
        Array.isArray(machine.specs) &&
        machine.specs.length > 0 &&
        machine.specs.every((spec) => spec?.trim())
    );

  if (!validMachines) {
    setFeedback("Complétez correctement tous les build avant d'enregistrer.");
    return;
  }

  const validConfigurator =
    Array.isArray(adminComponentsDraft) &&
    adminComponentsDraft.length > 0 &&
    adminComponentsDraft.every(
      (component) =>
        component.label?.trim() &&
        Array.isArray(component.options) &&
        component.options.length > 0 &&
        component.options.every(
          (option) =>
            option.name?.trim() &&
            Number.isFinite(Number(option.price)) &&
            Number(option.price) >= 0
        )
    ) &&
    Array.isArray(adminServicesDraft) &&
    adminServicesDraft.every((service) => service.label?.trim() && Number.isFinite(Number(service.price)) && Number(service.price) >= 0);

  if (!validConfigurator) {
    setFeedback("Vérifiez les références, produits et prix du configurateur.");
    return;
  }

  const validTechnicalSheets =
    Array.isArray(adminTechnicalSheetsDraft) &&
    adminTechnicalSheetsDraft.every((sheet) => sheet.title?.trim());

  if (!validTechnicalSheets) {
    setFeedback("Chaque fiche technique doit avoir un titre.");
    return;
  }

  const validFaq =
    Array.isArray(adminFaqItemsDraft) &&
    adminFaqItemsDraft.length > 0 &&
    adminFaqItemsDraft.every((item) => item.question?.trim() && item.answer?.trim());

  if (!validFaq) {
    setFeedback("Chaque élément FAQ doit contenir une question et une réponse.");
    return;
  }

  const validGames =
    Array.isArray(adminGamesDraft) &&
    adminGamesDraft.length > 0 &&
    adminGamesDraft.every((item) => item.title?.trim() && String(item.image || "").trim());

  if (!validGames) {
    setFeedback("Chaque jaquette de la page Jeux doit avoir un titre et une image.");
    return;
  }

  const validReviews =
    Array.isArray(adminReviewsDraft) &&
    adminReviewsDraft.length > 0 &&
    adminReviewsDraft.every((item) => item.author?.trim() && item.text?.trim());

  if (!validReviews) {
    setFeedback("Chaque avis client doit contenir un nom et un texte.");
    return;
  }

  for (let index = 0; index < adminShowcaseImages.length; index += 1) {
    adminShowcaseImages[index] = await persistDataUrlAsset(
      adminShowcaseImages[index],
      "showcase",
      `showcase-${index + 1}.webp`
    );
  }

  for (let index = 0; index < adminConfiguratorImagesDraft.length; index += 1) {
    adminConfiguratorImagesDraft[index] = await persistDataUrlAsset(
      adminConfiguratorImagesDraft[index],
      "configurator",
      `configurator-${index + 1}.webp`
    );
  }

  for (let index = 0; index < adminTechnicalSheetsDraft.length; index += 1) {
    const draft = adminTechnicalSheetsDraft[index];
    draft.image = await persistDataUrlAsset(draft.image, "technical-images", `technical-image-${index + 1}.webp`);
  }

  for (let index = 0; index < adminGamesDraft.length; index += 1) {
    const game = adminGamesDraft[index];
    game.image = await persistDataUrlAsset(
      game.image,
      "games-covers",
      sanitizeFileName(game.title || `game-${index + 1}`, `game-${index + 1}`) + ".webp"
    );
  }

  for (let cIndex = 0; cIndex < adminComponentsDraft.length; cIndex += 1) {
    const component = adminComponentsDraft[cIndex];
    for (let oIndex = 0; oIndex < component.options.length; oIndex += 1) {
      const option = component.options[oIndex];
      option.image = await persistDataUrlAsset(
        option.image,
        "component-images",
        `component-${cIndex + 1}-option-${oIndex + 1}.webp`
      );
    }
  }

  for (let index = 0; index < adminProcessFilesDraft.length; index += 1) {
    const item = adminProcessFilesDraft[index];
    item.fileData = await persistDataUrlAsset(
      item.fileData,
      "processus",
      sanitizeFileName(item.fileName || `processus-${index + 1}.pdf`, `processus-${index + 1}.pdf`)
    );
  }

  // Protection anti-perte: si la section Installation VB n'est pas modifiée mais vide en draft,
  // on conserve les fichiers déjà présents dans le contenu courant.
  const existingProcessFiles = normalizeProcessFiles(siteContent.processus?.files || []);
  const processFilesSource =
    adminProcessFilesDraft.length > 0
      ? adminProcessFilesDraft
      : existingProcessFiles;

  const showcase = [0, 1, 2].map((index) => ({
    title: adminShowcaseTitleInputs[index].value.trim() || DEFAULT_CONTENT.showcase[index].title,
    slogan: adminShowcaseSloganInputs[index].value.trim() || DEFAULT_CONTENT.showcase[index].slogan,
    image: adminShowcaseImages[index] || "",
  }));

  const previousTechFileKeys = new Set(
    (siteContent.technicalSheets || [])
      .map((sheet) => (typeof sheet?.fileKey === "string" ? sheet.fileKey : ""))
      .filter(Boolean)
  );
  const nextTechFileKeys = new Set();
  const technicalSheets = [];
  let strippedLegacyInlineMedia = false;
  try {
    for (let index = 0; index < adminTechnicalSheetsDraft.length; index += 1) {
      const draft = adminTechnicalSheetsDraft[index] || {};
      let fileKey = typeof draft.fileKey === "string" ? draft.fileKey : "";
      let fileData = typeof draft.fileData === "string" ? draft.fileData : "";
      const fileName = draft.fileName || "";
      const fileMime = draft.fileMime || "application/octet-stream";

      if (draft.fileBlob instanceof Blob) {
        if (await checkDiskApiAvailable()) {
          fileData = await uploadBlobToDisk(
            "technical-docs",
            sanitizeFileName(fileName || `fiche-technique-${index + 1}.pdf`, `fiche-technique-${index + 1}.pdf`),
            draft.fileBlob
          );
          fileKey = "";
        } else {
          try {
            if (!fileKey) fileKey = `tech-file-${index}-${Date.now()}`;
            await putTechnicalFileRecord(fileKey, draft.fileBlob, fileName, fileMime);
            fileData = "";
          } catch (error) {
            fileKey = "";
            if (draft.fileBlob.size > 4 * 1024 * 1024) {
              throw new Error("Fallback localStorage impossible pour cette taille de document.");
            }
            fileData = await readFileAsDataURL(draft.fileBlob);
          }
        }
      } else if (!fileKey && fileData && fileData.startsWith("data:")) {
        fileData = await persistDataUrlAsset(
          fileData,
          "technical-docs",
          sanitizeFileName(fileName || `fiche-technique-${index + 1}.pdf`, `fiche-technique-${index + 1}.pdf`)
        );
        // Migrate legacy localStorage payloads to IndexedDB to avoid quota issues.
        if (fileData.startsWith("data:")) try {
          fileKey = `tech-file-${index}-${Date.now()}`;
          const legacyBlob = await dataUrlToBlob(fileData);
          await putTechnicalFileRecord(fileKey, legacyBlob, fileName, fileMime);
          fileData = "";
        } catch (error) {
          // If migration fails, drop oversized inline payload to prevent save blockage.
          if (fileData.length > 700000) {
            fileData = "";
            strippedLegacyInlineMedia = true;
          }
        }
      }

      if (draft.removedFileKey && draft.removedFileKey !== fileKey) {
        try {
          await deleteTechnicalFileRecord(draft.removedFileKey);
        } catch (error) {
          // best effort deletion
        }
      }

      if (fileKey) nextTechFileKeys.add(fileKey);

      technicalSheets.push({
        title: (draft.title || "").trim(),
        image: draft.image || "",
        fileName,
        fileData,
        fileMime,
        fileKey,
      });
    }
  } catch (error) {
    setFeedback("Impossible d'enregistrer la fiche technique. Réduisez la taille du document.");
    return;
  }

  for (const oldKey of previousTechFileKeys) {
    if (nextTechFileKeys.has(oldKey)) continue;
    try {
      await deleteTechnicalFileRecord(oldKey);
    } catch (error) {
      // best effort deletion
    }
  }

  const aboutVideos = [];
  try {
    for (let index = 0; index < 6; index += 1) {
      const draft = adminAboutVideosDraft[index] || {};
      const title =
        adminAboutVideoTitleInputs[index].value.trim() ||
        draft.title ||
        `Video ${index + 1}`;
      const fileName = draft.fileName || "";
      const videoMime = draft.videoMime || "video/mp4";
      let videoKey = typeof draft.videoKey === "string" ? draft.videoKey : "";
      let videoData = "";
      let videoWebm = typeof draft.videoWebm === "string" ? draft.videoWebm : "";

      if (draft.videoBlob instanceof Blob) {
        if (await checkDiskApiAvailable()) {
          setAdminUploadProgress(2, `Vidéo A propos ${index + 1} • conversion`);
          const uploadPayload = await uploadBlobToDiskDetailed(
            "about-videos",
            sanitizeFileName(fileName || `about-video-${index + 1}.mp4`, `about-video-${index + 1}.mp4`),
            draft.videoBlob,
            (percent, label) => {
              setAdminUploadProgress(percent, `Vidéo A propos ${index + 1} • ${label || "conversion"}`);
            }
          );
          if (uploadPayload?.path) {
            videoData = uploadPayload.path;
            videoWebm =
              typeof uploadPayload.optimized?.webm === "string" && uploadPayload.optimized.webm.trim()
                ? uploadPayload.optimized.webm.trim()
                : "";
          } else {
            throw new Error("Upload vidéo impossible.");
          }
          hideAdminUploadProgress();
          videoKey = "";
        } else {
          try {
            if (!videoKey) videoKey = `about-video-${index}`;
            await putAboutVideoRecord(videoKey, draft.videoBlob, fileName, videoMime);
            videoData = "";
            videoWebm = "";
          } catch (error) {
            // Fallback if IndexedDB is blocked/unavailable (private mode/browser policy)
            videoKey = "";
            if (draft.videoBlob.size > 8 * 1024 * 1024) {
              throw new Error("Fallback localStorage impossible pour cette taille vidéo.");
            }
            videoData = await readFileAsDataURL(draft.videoBlob);
            videoWebm = "";
          }
        }
      } else {
        videoData = typeof draft.videoData === "string" ? draft.videoData : "";
        videoWebm = typeof draft.videoWebm === "string" ? draft.videoWebm : "";
        videoData = await persistDataUrlAsset(
          videoData,
          "about-videos",
          sanitizeFileName(fileName || `about-video-${index + 1}.mp4`, `about-video-${index + 1}.mp4`)
        );
        if (!videoKey && videoData && videoData.startsWith("data:")) {
          try {
            const legacyBlob = await dataUrlToBlob(videoData);
            videoKey = `about-video-${index}-${Date.now()}`;
            await putAboutVideoRecord(videoKey, legacyBlob, fileName, videoMime);
            videoData = "";
          } catch (error) {
            if (videoData.length > 700000) {
              videoData = "";
              strippedLegacyInlineMedia = true;
            }
          }
        }
      }
      if (draft.removedVideoKey) {
        try {
          await deleteAboutVideoRecord(draft.removedVideoKey);
        } catch (error) {
          // best effort deletion
        }
      }

      aboutVideos.push({
        title,
        fileName,
        videoData,
        videoWebm,
        videoMime,
        videoKey,
      });
    }
  } catch (error) {
    hideAdminUploadProgress(0);
    setFeedback("Impossible d'enregistrer la vidéo. Essayez une vidéo plus légère.");
    return;
  }

  const aboutGalleryPhotos = [];
  const galleryPhotosDraft = Array.isArray(adminAboutGalleryDraft.photos)
    ? adminAboutGalleryDraft.photos.slice(0, MAX_ABOUT_GALLERY_PHOTOS)
    : [];
  for (let index = 0; index < galleryPhotosDraft.length; index += 1) {
    const draft = galleryPhotosDraft[index] || {};
    const title = String(draft.title || `Photo ${index + 1}`).trim();
    const fileName = sanitizeFileName(title || `about-photo-${index + 1}`, `about-photo-${index + 1}`);
    const image = await persistDataUrlAsset(draft.image || "", "about-gallery", `${fileName}.webp`);
    if (!image) continue;
    aboutGalleryPhotos.push({ title, image });
  }

  const rawGallerySpeed = Number(adminAboutGallerySpeedInput?.value || adminAboutGalleryDraft.speed || 28);
  const aboutGallery = {
    speed: Number.isFinite(rawGallerySpeed) ? Math.min(80, Math.max(8, Math.round(rawGallerySpeed))) : 28,
    direction: adminAboutGalleryDirectionSelect?.value === "right" ? "right" : "left",
    watermarkEnabled:
      adminAboutWatermarkEnabledSelect?.value !== "0" &&
      (adminAboutGalleryDraft.watermarkEnabled === undefined
        ? true
        : Boolean(adminAboutGalleryDraft.watermarkEnabled)),
    photos: aboutGalleryPhotos,
  };
  const currentCategoryFillImage = siteContent.configurator?.categoryFillImage || "";
  const currentCategoryFillImageSecondary = siteContent.configurator?.categoryFillImageSecondary || "";
  const currentSummaryTelegramImage = siteContent.configurator?.summaryTelegramImage || "";
  const persistedCategoryFillImage = await persistDataUrlAsset(
    currentCategoryFillImage,
    "configurator",
    "category-fill.webp"
  );
  const persistedCategoryFillImageSecondary = await persistDataUrlAsset(
    currentCategoryFillImageSecondary,
    "configurator",
    "category-fill-2.webp"
  );
  const persistedSummaryTelegramImage = await persistDataUrlAsset(
    currentSummaryTelegramImage,
    "configurator",
    "summary-telegram.webp"
  );

  // Anti-perte global: si un bloc média/fichier revient vide par erreur,
  // on conserve la version actuelle déjà stockée.
  const existingTechnicalSheetsSafe = normalizeTechnicalSheets(siteContent.technicalSheets || []);
  const existingAboutVideosSafe = normalizeAboutVideos(siteContent.aboutVideos || []);
  const existingAboutGallerySafe = normalizeAboutGallery(siteContent.aboutGallery || {});
  const existingGamesCatalogSafe = normalizeGamesCatalog(siteContent.gamesCatalog || []);
  const existingProcessGamesFilesSafe = normalizeProcessGamesFiles(siteContent.processus?.gamesFiles || []);
  const existingProcessGamesAssignmentsSafe = normalizeProcessGamesAssignments(siteContent.processus?.gamesAssignments || []);

  const nextTechnicalSheets = technicalSheets.length ? technicalSheets : existingTechnicalSheetsSafe;
  const nextAboutVideos = aboutVideos.length ? aboutVideos : existingAboutVideosSafe;
  const nextAboutGallery = {
    ...aboutGallery,
    photos:
      Array.isArray(aboutGallery.photos) && aboutGallery.photos.length
        ? aboutGallery.photos
        : (Array.isArray(existingAboutGallerySafe.photos) ? existingAboutGallerySafe.photos : []),
  };
  const nextGamesCatalog = adminGamesDraft.length ? adminGamesDraft : existingGamesCatalogSafe;
  const nextProcessGamesFiles = adminProcessGamesFilesDraft.length
    ? adminProcessGamesFilesDraft
    : existingProcessGamesFilesSafe;
  const nextProcessGamesAssignments = adminProcessGamesAssignmentsDraft.length
    ? adminProcessGamesAssignmentsDraft
    : existingProcessGamesAssignmentsSafe;

  siteContent = {
    adminProfileReviewPhoto:
      (typeof siteContent.adminProfileReviewPhoto === "string" && siteContent.adminProfileReviewPhoto) ||
      String(localStorage.getItem(ADMIN_PROFILE_PHOTO_KEY) || ""),
    faqSeedVersion: FAQ_SEED_VERSION,
    heroTitle: adminHeroTitle.value.trim() || DEFAULT_CONTENT.heroTitle,
    machinesTitle: adminMachinesTitle.value.trim() || DEFAULT_CONTENT.machinesTitle,
    navTheme:
      (adminNavThemeSelect && ["aurora", "frost", "obsidian"].includes(String(adminNavThemeSelect.value || "")))
        ? String(adminNavThemeSelect.value || "aurora")
        : DEFAULT_CONTENT.navTheme,
    menuBadges: normalizeMenuBadges({
      machines: getAdminMenuBadgeValue("machines", adminMenuBadgeMachinesSelect),
      configurateur: getAdminMenuBadgeValue("configurateur", adminMenuBadgeConfiguratorSelect),
      support: getAdminMenuBadgeValue("support", adminMenuBadgeSupportSelect),
      fiches: getAdminMenuBadgeValue("fiches", adminMenuBadgeFichesSelect),
      guides: getAdminMenuBadgeValue("guides", adminMenuBadgeGuidesSelect),
      jeux: getAdminMenuBadgeValue("jeux", adminMenuBadgeJeuxSelect),
      about: getAdminMenuBadgeValue("about", adminMenuBadgeAboutSelect),
      faq: getAdminMenuBadgeValue("faq", adminMenuBadgeFaqSelect),
    }),
    footerContactEmail: (adminFooterEmailInput?.value || "").trim() || DEFAULT_CONTENT.footerContactEmail,
    legal: {
      mentions: {
        label: (adminLegalMentionsLabelInput?.value || "").trim() || DEFAULT_CONTENT.legal.mentions.label,
        title: (adminLegalMentionsTitleInput?.value || "").trim() || DEFAULT_CONTENT.legal.mentions.title,
        content: (adminLegalMentionsContentInput?.value || "").trim() || DEFAULT_CONTENT.legal.mentions.content,
      },
      cgv: {
        label: (adminLegalCgvLabelInput?.value || "").trim() || DEFAULT_CONTENT.legal.cgv.label,
        title: (adminLegalCgvTitleInput?.value || "").trim() || DEFAULT_CONTENT.legal.cgv.title,
        content: (adminLegalCgvContentInput?.value || "").trim() || DEFAULT_CONTENT.legal.cgv.content,
      },
      rgpd: {
        label: (adminLegalRgpdLabelInput?.value || "").trim() || DEFAULT_CONTENT.legal.rgpd.label,
        title: (adminLegalRgpdTitleInput?.value || "").trim() || DEFAULT_CONTENT.legal.rgpd.title,
        content: (adminLegalRgpdContentInput?.value || "").trim() || DEFAULT_CONTENT.legal.rgpd.content,
      },
      cookies: {
        label: (adminLegalCookiesLabelInput?.value || "").trim() || DEFAULT_CONTENT.legal.cookies.label,
        title: (adminLegalCookiesTitleInput?.value || "").trim() || DEFAULT_CONTENT.legal.cookies.title,
        content: (adminLegalCookiesContentInput?.value || "").trim() || DEFAULT_CONTENT.legal.cookies.content,
      },
    },
    machines: adminMachinesDraft.map((machine) => ({
      ...machine,
      badge: String(machine.badge || "").trim(),
      price: normalizePriceLabel(machine.price),
      specs: machine.specs.map((spec) => spec.trim()),
      backName: String(machine.backName || machine.name || "").trim(),
      backDescription: String(machine.backDescription || machine.description || "").trim(),
      backComments: Array.from({ length: 8 }).map((_, index) =>
        String((Array.isArray(machine.backComments) ? machine.backComments[index] : "") || "").trim()
      ),
    })),
    showcase,
    technicalSheets: nextTechnicalSheets,
    aboutVideos: nextAboutVideos,
    aboutGallery: nextAboutGallery,
    reviews: adminReviewsDraft.map((item) => ({
      author: item.author.trim(),
      rating: Math.min(5, Math.max(1, Number(item.rating) || 5)),
      text: item.text.trim(),
      approved: Boolean(item.approved),
      userEmail: typeof item.userEmail === "string" ? item.userEmail.trim().toLowerCase() : "",
      createdAt: typeof item.createdAt === "string" ? item.createdAt : "",
    })),
    processus: {
      files: processFilesSource
        .map((item, index) => ({
          title:
            typeof item.title === "string" && item.title.trim()
              ? item.title.trim()
              : `Dossier confidentiel ${index + 1}`,
          fileName: inferProcessFileName(item, index),
          fileData: resolveProcessFileHref(item),
          path: String(item.path || "").trim().replace(/^\/+/, ""),
          fileMime:
            typeof item.fileMime === "string" && item.fileMime.trim()
              ? item.fileMime.trim()
              : inferProcessFileMime(inferProcessFileName(item, index), "application/pdf"),
        }))
        .filter((item) => item.fileData || item.path),
      purchases: getProcessSectionDraft("achats")
        .map((item, index) => ({
          label:
            typeof item.label === "string" && item.label.trim()
              ? item.label.trim()
              : `Lien achat ${index + 1}`,
          url: normalizeProcessLinkUrl(item.url),
        }))
        .filter((item) => item.url),
      crmLeads: adminCrmLeadsDraft
        .map((item, index) => ({
          id: typeof item.id === "string" && item.id.trim() ? item.id.trim() : `crm-${Date.now()}-${index + 1}`,
          name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : `Prospect ${index + 1}`,
          email: typeof item.email === "string" ? item.email.trim().toLowerCase() : "",
          phone: typeof item.phone === "string" ? item.phone.trim() : "",
          source: typeof item.source === "string" && item.source.trim() ? item.source.trim() : "Site",
          status:
            typeof item.status === "string" && CRM_STATUSES.includes(item.status.trim())
              ? item.status.trim()
              : "Nouveau",
          budget: Math.max(0, Number(item.budget) || 0),
          dealValue: Math.max(0, Number(item.dealValue) || 0),
          owner: typeof item.owner === "string" && item.owner.trim() ? item.owner.trim() : "Administrateur",
          priority:
            typeof item.priority === "string" && CRM_PRIORITIES.includes(item.priority.trim())
              ? item.priority.trim()
              : "Normale",
          nextReminder: typeof item.nextReminder === "string" ? item.nextReminder.trim() : "",
          configRef: typeof item.configRef === "string" ? item.configRef.trim() : "",
          lostReason: typeof item.lostReason === "string" ? item.lostReason.trim() : "",
          note: typeof item.note === "string" ? item.note.trim() : "",
          activities: Array.isArray(item.activities)
            ? item.activities
                .map((activity) => ({
                  at: typeof activity?.at === "string" ? activity.at : new Date().toISOString(),
                  text: typeof activity?.text === "string" ? activity.text.trim() : "",
                }))
                .filter((activity) => activity.text)
            : [],
          orderNumber: typeof item.orderNumber === "string" ? item.orderNumber.trim() : "",
          orderCreatedAt: typeof item.orderCreatedAt === "string" ? item.orderCreatedAt : "",
          createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }))
        .filter((item) => item.name || item.email || item.phone || item.note || item.orderNumber),
      gamesFiles: nextProcessGamesFiles
        .map((item, index) => ({
          title:
            typeof item.title === "string" && item.title.trim()
              ? item.title.trim()
              : `Archive Games ${index + 1}`,
          path: typeof item.path === "string" ? item.path.replace(/^\/+/, "").trim() : "",
          fileName:
            typeof item.fileName === "string" && item.fileName.trim()
              ? item.fileName.trim()
              : sanitizeFileName(`games-${index + 1}.zip`, `games-${index + 1}.zip`),
          sizeBytes: Math.max(0, Number(item.sizeBytes) || 0),
          createdAt:
            typeof item.createdAt === "string" && item.createdAt.trim()
              ? item.createdAt.trim()
              : new Date().toISOString(),
        }))
        .filter((item) => item.path),
      gamesAssignments: nextProcessGamesAssignments
        .map((item, index) => ({
          id: typeof item.id === "string" && item.id.trim() ? item.id.trim() : `ga-${Date.now()}-${index + 1}`,
          email: typeof item.email === "string" ? item.email.trim().toLowerCase() : "",
          filePath: typeof item.filePath === "string" ? item.filePath.replace(/^\/+/, "").trim() : "",
          fileName: typeof item.fileName === "string" ? item.fileName.trim() : "",
          title:
            typeof item.title === "string" && item.title.trim()
              ? item.title.trim()
              : `Fichier Games ${index + 1}`,
          maxDownloads: Math.max(1, Math.round(Number(item.maxDownloads) || 1)),
          downloadCount: Math.max(0, Math.round(Number(item.downloadCount) || 0)),
          expiresAt: typeof item.expiresAt === "string" ? item.expiresAt.trim() : "",
          assignedAt:
            typeof item.assignedAt === "string" && item.assignedAt.trim()
              ? item.assignedAt.trim()
              : new Date().toISOString(),
          lastDownloadAt: typeof item.lastDownloadAt === "string" ? item.lastDownloadAt.trim() : "",
          revoked: Boolean(item.revoked),
        }))
        .filter((item) => item.email && item.filePath),
      suppliersOrders: adminSupplierOrdersDraft
        .map((item, index) => ({
          firstName:
            typeof item.firstName === "string" && item.firstName.trim() ? item.firstName.trim() : `Prénom ${index + 1}`,
          lastName: typeof item.lastName === "string" ? item.lastName.trim() : "",
          address: typeof item.address === "string" ? item.address.trim() : "",
          postalCode: typeof item.postalCode === "string" ? item.postalCode.trim() : "",
          city: typeof item.city === "string" ? item.city.trim() : "",
          phone: typeof item.phone === "string" ? item.phone.trim() : "",
        }))
        .filter((item) => item.firstName || item.lastName || item.address || item.postalCode || item.city || item.phone),
      stockItems: adminStockItemsDraft
        .map((item, index) => ({
          name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : `Produit ${index + 1}`,
          quantity: Math.max(0, Math.round(Number(item.quantity) || 0)),
          buyPrice: Math.max(0, Number(item.buyPrice) || 0),
          salePrice: Math.max(0, Number(item.salePrice) || 0),
        }))
        .filter((item) => item.name),
      deliveryItems: adminDeliveryItemsDraft
        .map((item, index) => ({
          firstName:
            typeof item.firstName === "string" && item.firstName.trim() ? item.firstName.trim() : `Prénom ${index + 1}`,
          lastName: typeof item.lastName === "string" ? item.lastName.trim() : "",
          orderNumber:
            typeof item.orderNumber === "string" && item.orderNumber.trim() ? item.orderNumber.trim() : `CMD-${index + 1}`,
          fees: Math.max(0, Number(item.fees) || 0),
        }))
        .filter((item) => item.firstName || item.lastName || item.orderNumber || Number(item.fees) > 0),
      savItems: adminSavItemsDraft
        .map((item, index) => ({
          firstName:
            typeof item.firstName === "string" && item.firstName.trim() ? item.firstName.trim() : `Prénom ${index + 1}`,
          lastName: typeof item.lastName === "string" ? item.lastName.trim() : "",
          address: typeof item.address === "string" ? item.address.trim() : "",
          postalCode: typeof item.postalCode === "string" ? item.postalCode.trim() : "",
          city: typeof item.city === "string" ? item.city.trim() : "",
          machineType: typeof item.machineType === "string" ? item.machineType.trim() : "",
          problem: typeof item.problem === "string" ? item.problem.trim() : "",
          resolution: typeof item.resolution === "string" ? item.resolution.trim() : "",
          returned: Boolean(item.returned),
        }))
        .filter(
          (item) =>
            item.firstName ||
            item.lastName ||
            item.address ||
            item.postalCode ||
            item.city ||
            item.machineType ||
            item.problem ||
            item.resolution ||
            item.returned
        ),
    },
    faqItems: adminFaqItemsDraft.map((item) => ({
      question: item.question.trim(),
      answer: item.answer.trim(),
    })),
    gamesCatalog: nextGamesCatalog.map((item, index) => ({
      title: String(item.title || `Jeu ${index + 1}`).trim() || `Jeu ${index + 1}`,
      image: String(item.image || "").trim(),
      info: String(item.info || "").trim(),
    })),
    supportSav: {
      badge: String(adminSupportBadgeInput?.value || adminSupportSavDraft.badge || "").trim() || "Support & SAV Premium",
      title: String(adminSupportTitleInput?.value || adminSupportSavDraft.title || "").trim() || "Support & SAV VortexBox",
      subtitle:
        String(adminSupportSubtitleInput?.value || adminSupportSavDraft.subtitle || "").trim() ||
        "Accompagnement premium VortexBox.",
      telegramUrl:
        String(adminSupportTelegramUrlInput?.value || adminSupportSavDraft.telegramUrl || "").trim() ||
        "https://t.me/VortexCore460",
      cards: (Array.isArray(adminSupportSavDraft.cards) ? adminSupportSavDraft.cards : [])
        .map((item) => ({
          title: String(item?.title || "").trim(),
          text: String(item?.text || "").trim(),
          ctaLabel: String(item?.ctaLabel || "").trim() || "En savoir plus",
        }))
        .filter((item) => item.title || item.text),
      steps: (Array.isArray(adminSupportSavDraft.steps) ? adminSupportSavDraft.steps : [])
        .map((item) => ({
          title: String(item?.title || "").trim(),
          text: String(item?.text || "").trim(),
        }))
        .filter((item) => item.title || item.text),
      faq: (Array.isArray(adminSupportSavDraft.faq) ? adminSupportSavDraft.faq : [])
        .map((item) => ({
          question: String(item?.question || "").trim(),
          answer: String(item?.answer || "").trim(),
        }))
        .filter((item) => item.question && item.answer),
    },
    configurator: {
      visualImages: [0, 1, 2].map((i) => adminConfiguratorImagesDraft[i] || ""),
      categoryFillImage: persistedCategoryFillImage,
      categoryFillImageSecondary: persistedCategoryFillImageSecondary,
      summaryTelegramImage: persistedSummaryTelegramImage,
      components: adminComponentsDraft.map((component, index) => ({
        id: sanitizeId(component.id || component.label, `categorie-${index + 1}`),
        label: component.label.trim(),
        options: component.options.map((option) => ({
          name: option.name.trim(),
          price: Number(option.price),
          image: option.image || "",
          description: String(option.description || "").trim(),
        })),
      })),
      services: adminServicesDraft.map((service, index) => ({
        id: sanitizeId(service.id || service.label, `service-${index + 1}`),
        label: service.label.trim(),
        price: Number(service.price),
        checked: Boolean(service.checked),
        description: String(service.description || "").trim(),
      })),
    },
  };

  if (!persistSiteContent()) return;
  const diskSaved = await saveContentSnapshotToDisk(siteContent);
  pushAdminHistorySnapshot(siteContent);

  applyContent();
  renderAdminOverviewKpis();
  if (strippedLegacyInlineMedia) {
    setFeedback("✅ Modifications enregistrées. Certains anciens médias trop lourds ont été optimisés.", "success");
  } else if (diskSaved) {
    setFeedback("✅ Sauvegarde réussie: modifications enregistrées dans le navigateur ET sur disque.", "success");
  } else {
    setFeedback("✅ Modifications enregistrées dans le navigateur.", "success");
  }
  hideAdminUploadProgress();
});

adminReset.addEventListener("click", () => {
  const preservedUsers = localStorage.getItem(SITE_USERS_KEY);
  const preservedUserLog = localStorage.getItem(USER_LOG_KEY);
  const preservedUserConfigs = localStorage.getItem(USER_CONFIGS_KEY);
  const preservedPromoCodes = localStorage.getItem(PROMO_CODES_KEY);
  const preservedDoneKpiRecommendations = localStorage.getItem(ADMIN_KPI_DONE_RECOMMENDATIONS_KEY);
  const preservedActionedKpiRecommendations = localStorage.getItem(ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY);
  localStorage.removeItem(STORAGE_KEY);
  if (preservedUsers !== null) localStorage.setItem(SITE_USERS_KEY, preservedUsers);
  if (preservedUserLog !== null) localStorage.setItem(USER_LOG_KEY, preservedUserLog);
  if (preservedUserConfigs !== null) localStorage.setItem(USER_CONFIGS_KEY, preservedUserConfigs);
  if (preservedPromoCodes !== null) localStorage.setItem(PROMO_CODES_KEY, preservedPromoCodes);
  if (preservedDoneKpiRecommendations !== null) {
    localStorage.setItem(ADMIN_KPI_DONE_RECOMMENDATIONS_KEY, preservedDoneKpiRecommendations);
  }
  if (preservedActionedKpiRecommendations !== null) {
    localStorage.setItem(ADMIN_KPI_ACTIONED_RECOMMENDATIONS_KEY, preservedActionedKpiRecommendations);
  }
  siteContent = cloneDefaultContent();
  applyContent();
  fillAdminFields();
  setFeedback("Contenu réinitialisé sans suppression des utilisateurs inscrits.");
});

adminLogout.addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  refreshAdminLiveMode();
  setAdminState(false);
  setFeedback("Déconnecté du mode administrateur.");
});

if (adminRestoreHistoryBtn) {
  adminRestoreHistoryBtn.addEventListener("click", async () => {
    const targetId = String(adminHistorySelectEl?.value || "");
    if (!targetId) {
      setFeedback("Sélectionnez une version à restaurer.", "error");
      return;
    }
    const history = loadAdminHistory();
    const selected = history.find((entry) => entry.id === targetId);
    if (!selected?.content) {
      setFeedback("Version introuvable.", "error");
      return;
    }
    siteContent = JSON.parse(JSON.stringify(selected.content));
    if (!persistSiteContent()) return;
    const diskSaved = await saveContentSnapshotToDisk(siteContent);
    applyContent();
    fillAdminFields();
    setFeedback(
      diskSaved
        ? "Version restaurée avec succès."
        : "Version restaurée localement. Sauvegarde disque indisponible.",
      "success"
    );
  });
}

if (adminHistorySelectEl) {
  adminHistorySelectEl.addEventListener("change", () => {
    updateAdminHistoryActionButtons();
  });
}

if (adminDeleteHistoryEntryBtn) {
  adminDeleteHistoryEntryBtn.addEventListener("click", () => {
    const targetId = String(adminHistorySelectEl?.value || "");
    if (!targetId) {
      setFeedback("Sélectionnez une version à supprimer.", "error");
      return;
    }
    const removed = removeAdminHistoryEntryById(targetId);
    if (!removed) {
      setFeedback("Version introuvable.", "error");
      return;
    }
    renderAdminHistoryOptions();
    setFeedback("Version supprimée de l'historique.", "success");
  });
}

if (adminClearHistoryBtn) {
  adminClearHistoryBtn.addEventListener("click", () => {
    clearAdminHistory();
    renderAdminHistoryOptions();
    setFeedback("Historique des sauvegardes effacé.", "success");
  });
}

adminPanel.addEventListener("click", (event) => {
  if (event.target === adminPanel) adminPanel.classList.add("hidden");
});

if (adminEditor) {
  adminEditor.addEventListener("click", (event) => {
    flashAdminSaveButton(event.target);
  });

  adminEditor.addEventListener(
    "click",
    (event) => {
      const dangerButton = event.target.closest(".admin-danger");
      if (!dangerButton) return;
      const action = String(dangerButton.dataset.action || "").toLowerCase();
      const shouldConfirm =
        action.includes("remove") ||
        action.includes("delete") ||
        action.includes("blacklist") ||
        action.includes("revoke");
      if (!shouldConfirm) return;
      const confirmed = window.confirm("Confirmer cette action ?");
      if (!confirmed) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    },
    true
  );

  const triggerAutosave = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest("#admin-save") || target.closest("#admin-reset") || target.closest("#admin-logout")) return;
    if (target.matches('input[type="file"]')) return;
    scheduleAdminAutosave();
  };
  adminEditor.addEventListener("input", triggerAutosave);
  adminEditor.addEventListener("change", triggerAutosave);
  adminEditor.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.id === "admin-hero-title" || target.id === "admin-machines-title") {
      siteContent.heroTitle = String(adminHeroTitle?.value || siteContent.heroTitle || "");
      siteContent.machinesTitle = String(adminMachinesTitle?.value || siteContent.machinesTitle || "");
      renderAdminLivePreview();
    }
    if (target.id === "admin-nav-theme") {
      applyNavTheme(String(adminNavThemeSelect?.value || siteContent.navTheme || "aurora"));
    }
  });

  adminEditor.addEventListener("dragover", (event) => {
    const picker = event.target.closest(".admin-file-picker");
    if (!picker) return;
    event.preventDefault();
    picker.classList.add("is-dragover");
  });

  adminEditor.addEventListener("dragleave", (event) => {
    const picker = event.target.closest(".admin-file-picker");
    if (!picker) return;
    picker.classList.remove("is-dragover");
  });

  adminEditor.addEventListener("drop", (event) => {
    const picker = event.target.closest(".admin-file-picker");
    if (!picker) return;
    event.preventDefault();
    picker.classList.remove("is-dragover");
    const input = picker.parentElement?.querySelector(".admin-file-input");
    const files = event.dataTransfer?.files;
    if (!(input instanceof HTMLInputElement) || !files || !files.length) return;
    try {
      input.files = files;
    } catch (error) {
      return;
    }
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });

  adminEditor.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.type !== "file") return;
    const file = target.files && target.files[0];
    const fileNameEl = target.closest(".admin-file-field")?.querySelector(".admin-file-name");
    if (file && fileNameEl instanceof HTMLElement) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      fileNameEl.textContent = `${file.name} (${sizeMb} MB)`;
    }
    const picker = target.closest(".admin-file-field")?.querySelector(".admin-file-picker");
    if (!(picker instanceof HTMLElement)) return;
    picker.classList.add("is-uploading");
    window.setTimeout(() => picker.classList.remove("is-uploading"), 850);
  });
}

if (adminUsersSearchInput) {
  adminUsersSearchInput.addEventListener("input", () => {
    renderAdminUsersManager();
  });
}

if (adminDensityToggleEl) {
  adminDensityToggleEl.addEventListener("change", () => {
    setAdminDensityMode(adminDensityToggleEl.value);
  });
}

if (adminGlobalSearchInput) {
  adminGlobalSearchInput.addEventListener("input", () => {
    renderAdminSearchResults(adminGlobalSearchInput.value);
  });
}

if (adminSearchResultsEl) {
  adminSearchResultsEl.addEventListener("click", (event) => {
    const jumpBtn = event.target.closest("button[data-tab-jump]");
    if (!jumpBtn) return;
    const tabName = String(jumpBtn.dataset.tabJump || "");
    if (!tabName) return;
    setActiveAdminTab(tabName);
  });
}

if (adminKpiProceedBtn) {
  adminKpiProceedBtn.addEventListener("click", () => {
    showAdminEditor();
  });
}

if (adminKpiRefreshBtn) {
  adminKpiRefreshBtn.addEventListener("click", () => {
    renderAdminGateKpis();
  });
}

if (adminKpiRecommendationsEl) {
  adminKpiRecommendationsEl.addEventListener("click", (event) => {
    const openBtn = event.target.closest("button[data-action='kpi-reco-open']");
    if (openBtn) {
      const text = decodeURIComponent(String(openBtn.dataset.reco || ""));
      if (!text) return;
      markKpiRecommendationActioned(text);
      showAdminEditor();
      setActiveAdminTab(resolveRecommendationTargetTab(text));
      showAdminToast("Zone ouverte. Effectuez l'action puis validez en vert.", "info");
      renderAdminGateKpis();
      persistUserStateToDiskAuto();
      return;
    }

    const doneBtn = event.target.closest("button[data-action='kpi-reco-done']");
    if (!doneBtn) return;
    const text = decodeURIComponent(String(doneBtn.dataset.reco || ""));
    if (!text) return;
    const actioned = new Set(loadActionedKpiRecommendations());
    if (!actioned.has(recommendationKey(text))) {
      showAdminToast("Cliquez d'abord sur l'icône d'action.", "info");
      return;
    }
    markKpiRecommendationDone(text);
    renderAdminGateKpis();
    showAdminToast("Recommandation prioritaire effectuée.", "success");
    persistUserStateToDiskAuto();
  });
}

window.addEventListener("beforeunload", () => {
  persistConnectionTime(true);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    persistConnectionTime(true);
  }
});

form.addEventListener("change", updateSummary);
builderFieldsEl.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('input[type="radio"][data-config-component="1"], input[type="checkbox"][data-config-service="1"]')) {
    updateSummary();
  }
});

builderFieldsEl.addEventListener("change", (event) => {
  const fillInput = event.target.closest(".config-fill-input");
  if (fillInput && isAdminLiveMode()) {
    const file = fillInput.files && fillInput.files[0];
    if (!file) return;
    const slot = String(fillInput.dataset.slot || "1");
    resizeImage(file)
      .then((data) => {
        if (slot === "2") {
          siteContent.configurator.categoryFillImageSecondary = data;
        } else {
          siteContent.configurator.categoryFillImage = data;
        }
        if (!persistSiteContentAuto()) return;
        renderConfigurator();
      })
      .catch(() => {});
    return;
  }

  const select = event.target.closest("#config-category-select");
  if (!select) return;
  const tabIndex = Number(select.value);
  if (Number.isNaN(tabIndex)) return;

  builderFieldsEl.querySelectorAll(".config-panel[data-config-panel]").forEach((panel) => {
    panel.classList.toggle("active", Number(panel.dataset.configPanel) === tabIndex);
  });
});

function closeConfiguratorInfoPanels() {
  builderFieldsEl.querySelectorAll(".config-option-grid.has-info-open, .config-services-list.has-info-open").forEach((grid) => {
    grid.classList.remove("has-info-open");
  });
  builderFieldsEl.querySelectorAll(".config-option-card.info-open, .config-service-item.info-open").forEach((card) => {
    card.classList.remove("info-open");
  });
  closeConfigInfoModal();
}

builderFieldsEl.addEventListener("click", (event) => {
  const infoBtn = event.target.closest(".config-option-info-btn");
  const clearSelectedBtn = event.target.closest('button[data-action="clear-selected-option"]');
  if (infoBtn) {
    event.preventDefault();
    event.stopPropagation();
    const title = String(infoBtn.dataset.infoTitle || "").trim() || "INFO PRODUIT";
    const content = String(infoBtn.dataset.infoContent || "").trim();
    openConfigInfoModal(title, content);
    return;
  }
  const fillImage = event.target.closest('img[data-action="open-config-fill-image"]');
  if (fillImage) {
    const slot = String(fillImage.dataset.slot || "1");
    openImageModal(fillImage.src, slot === "2" ? "Visuel configurateur 2" : "Visuel configurateur 1");
    return;
  }
  if (clearSelectedBtn) {
    event.preventDefault();
    event.stopPropagation();
    const optionCard = clearSelectedBtn.closest(".config-option-card");
    const radio = optionCard?.querySelector('input[type="radio"][data-config-component="1"]');
    if (!radio) return;
    radio.checked = false;
    const componentKey = String(radio.name || "").replace("comp-", "");
    delete selectedConfiguratorState.components[componentKey];
    updateSummary();
    return;
  }

  const optionCard = event.target.closest(".config-option-card");
  if (optionCard) {
    const radio = optionCard.querySelector('input[type="radio"][data-config-component="1"]');
    if (radio && !radio.checked) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  const button = event.target.closest("button[data-action]");
  if (!button || !isAdminLiveMode()) return;

  if (button.dataset.action === "config-fill-pick") {
    const slot = String(button.dataset.slot || "1");
    const input = builderFieldsEl.querySelector(`#config-fill-input-${slot}`);
    triggerFileInput(input);
    return;
  }

  if (button.dataset.action === "config-fill-remove") {
    const slot = String(button.dataset.slot || "1");
    if (slot === "2") {
      siteContent.configurator.categoryFillImageSecondary = "";
    } else {
      siteContent.configurator.categoryFillImage = "";
    }
    if (!persistSiteContentAuto()) return;
    renderConfigurator();
  }
});

document.addEventListener("click", (event) => {
  if (!builderFieldsEl.contains(event.target)) {
    closeConfiguratorInfoPanels();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeConfiguratorInfoPanels();
});

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
    document.querySelectorAll("main section, .hero, .section, .about-section, .faq-hero, .support-sav-hero, .support-sav-grid")
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
    document.querySelectorAll(
      ".card, .machine-card, .showcase-card, .technical-card, .review-card, .why-card, .about-card, .config-option-card, .game-cover-card"
    )
  );
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

async function initializeApp() {
  await hydrateContentFromDiskIfMissing();
  const hydratedUserState = await hydrateUserStateFromDisk();
  if (!hydratedUserState) {
    persistUserStateToDiskAuto();
  }
  siteContent = loadContent();
  applyContent();
  initializeResponsiveNav();
  initializeNavSmartSearch();
  initializeBackgroundMusic();
  initializeCookieConsent();
  initializePasswordVisibilityToggle();
  initializeSegmentedCodeInput(authResetCodeEl);
  initializePasswordStrengthMeter();
  initializeForgotPasswordFlow();
  initializePageTransitions();
  initializeUltraPremiumVisuals();
  startAdminControlCenterClock();
  window.addEventListener("online", updateAdminControlCenter);
  window.addEventListener("offline", updateAdminControlCenter);
  initializeSiteAuth();
  refreshNavSessionButtons();
  window.addEventListener("pageshow", refreshNavSessionButtons);
  window.addEventListener("storage", (event) => {
    if (event.key === AUTH_SESSION_KEY || event.key === AUTH_REMEMBER_KEY || event.key === STORAGE_KEY) {
      refreshNavSessionButtons();
    }
  });
  handleAdminDeepLink();
  initializeAdminTabsReorder();
  enableHoverScrollableTabs(adminTabsContainer);
  applyAdminProcessSubtabsOrder();
  enableAdminProcessSubtabsDrag();
  enableHoverScrollableTabs(adminProcessSubtabsContainer);
  applyAdminProcessQuicklinksOrder();
  enableAdminProcessQuicklinksDrag();
  setAdminDensityMode(loadAdminDensityMode());
  initializeRevealAnimations();
  initializeVortexBot();
  tryConsumeConfiguratorDeepLink();
  tryConsumeAiAdvisorDeepLink();
}

initializeApp();
