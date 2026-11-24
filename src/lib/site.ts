export const SITE_NAME = "Magic Brawl";
export const SITE_ORIGIN = "https://magicbrawl.tr";
export const SITE_DOMAIN = "magicbrawl.tr";
export const SUPPORT_EMAIL = "support@magicbrawl.tr";

/** Official Magic Team Android APK (homepage + download CTAs) */
export const DOWNLOAD_APK_URL = "https://magicbrawl.gg/latest_mb";
export const DOWNLOAD_IPA_URL = "https://magicbrawl.gg/latest_mb_ipa";

/** Download guide page. CTAs send users to the homepage download / official APK. */
export const DOWNLOAD_PAGE_URL = "/download-magic-brawl";

export const TELEGRAM_URL = "https://t.me/magics_en";
export const DISCORD_URL = "https://discord.com/invite/magicbrawl";

export const APP = {
  name: "Magic Brawl",
  displayName: "Magic Brawl APK / Özel Sunucu",
  shortName: "Magic Brawl",
  version: "v54.243",
  versionAlt: "54.243",
  fileSize: "471 MB",
  fileSizeShort: "471 MB",
  os: "Android 5.0+",
  osNote: "En iyi deneyim Android 8+ / 3 GB+ RAM",
  category: "Aksiyon / MOBA / Çok Oyunculu",
  packageId: "com.magics.brawl",
  ratingValue: "4.7",
  ratingCount: "185000",
  ratingCountDisplay: "185.000",
  downloadsDisplay: "20M+",
  price: "%100 Ücretsiz",
  updated: "Kasım 2026",
  season: "Sezon 22–23 · Starr Toon Studios",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/download-magic-brawl", label: "İndir" },
  { href: "/magic-brawl-ios", label: "iOS" },
  { href: "/magic-brawl-for-pc", label: "PC" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "Hakkımızda" },
  { href: "/contact-us", label: "İletişim" },
] as const;

export const OG_IMAGE = `${SITE_ORIGIN}/feature/og-image.webp`;
export const LOGO_IMAGE = `${SITE_ORIGIN}/magic-brawl.webp`;
export const HERO_IMAGE = `${SITE_ORIGIN}/magic-brawl.webp`;
export const FAVICON = `${SITE_ORIGIN}/favicon.ico`;
export const HERO_PATH = "/magic-brawl.webp";
export const LOGO_PATH = "/magic-brawl.webp";

export const PINS = [
  {
    id: "six-seven",
    name: "Six Seven Pin",
    image: "/pin-wizard-67.webp",
    alt: "Magic Brawl Six Seven sihirbaz rozeti",
  },
  {
    id: "fumey-team",
    name: "MBS Fumey",
    image: "/fumey-team-pin.webp",
    alt: "Magic Brawl MBS Fumey takım rozeti",
  },
  {
    id: "fumey-frog",
    name: "Fumey Frog Pin",
    image: "/fumey-frog-pin.webp",
    alt: "Magic Brawl Fumey Frog rozeti",
  },
  {
    id: "goblin-clock",
    name: "Goblin Clock Pin",
    image: "/goblin-clock-pin.webp",
    alt: "Magic Brawl Goblin Clock rozeti",
  },
  {
    id: "goblin",
    name: "Goblin Pin",
    image: "/goblin-pin.webp",
    alt: "Magic Brawl Goblin rozeti",
  },
  {
    id: "coolglass",
    name: "Cool Glass Pin",
    image: "/coolglass_pin.webp",
    alt: "Magic Brawl Cool Glass rozeti",
  },
] as const;
