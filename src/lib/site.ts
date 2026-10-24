export const SITE_NAME = "Master Royale";
export const SITE_ORIGIN = "https://masterroyaleapk.com";
export const SITE_DOMAIN = "masterroyaleapk.com";
export const SUPPORT_EMAIL = "support@masterroyaleapk.com";

/** Direct APK file (homepage download CTAs use this) */
export const DOWNLOAD_APK_URL =
  "https://dl.masterroyaleapk.com/file/master-royale/master-royale.apk";
export const DOWNLOAD_VANILLA_URL = DOWNLOAD_APK_URL;
export const DOWNLOAD_INFINITY_URL =
  "https://dl.masterroyaleapk.com/file/master-royale/mr-infinity.apk";

/** Download guide page. Its CTAs send users to the homepage. Kept noindex to avoid cannibalizing homepage download queries. */
export const DOWNLOAD_PAGE_URL = "/download-master-royale";

/** Update when Discord invite is ready */
export const DISCORD_URL = "https://discord.com/invite/masterroyale";

export const APP = {
  name: "Master Royale",
  displayName: "Master Royale MOD APK / Master Royale Infinity",
  shortName: "Master Royale",
  version: "v17 (3.2730.0)",
  versionAlt: "3.2729.1",
  fileSize: "145 MB",
  fileSizeShort: "145 MB",
  os: "Android 4.4+",
  osNote: "Best on Android 5.0+ / recommended Android 8+",
  category: "Arcade / Strategy / Action",
  packageId: "net.master.royale",
  ratingValue: "4.6",
  ratingCount: "120000",
  ratingCountDisplay: "120,000",
  downloadsDisplay: "500K+",
  price: "100% Free",
  updated: "October 24, 2026",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/download-master-royale", label: "Download" },
  { href: "/master-royale-for-pc", label: "PC Version" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const OG_IMAGE = `${SITE_ORIGIN}/feature/og-image.webp`;
export const LOGO_IMAGE = `${SITE_ORIGIN}/master-royale-apk-logo.webp`;
export const HERO_IMAGE = `${SITE_ORIGIN}/master-royale-king.webp`;
export const FAVICON = `${SITE_ORIGIN}/favicon.ico`;
export const HERO_PATH = "/master-royale-king.webp";
export const LOGO_PATH = "/master-royale-apk-logo.webp";
