export const locales = ["tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const localeNames: Record<
  Locale,
  { label: string; native: string; flag: string }
> = {
  tr: { label: "Turkish", native: "TÜRKÇE", flag: "🇹🇷" },
};

export const pathnames = {
  "/": "/",
  "/magic-brawl-apk-indir": "/magic-brawl-apk-indir",
  "/magic-brawl-ios-indir": "/magic-brawl-ios-indir",
  "/magic-brawl-pc": "/magic-brawl-pc",
  "/blog": "/blog",
  "/blog/magic-brawl-guvenli-mi": "/blog/magic-brawl-guvenli-mi",
  "/blog/magic-brawl-nulls-brawl-farki": "/blog/magic-brawl-nulls-brawl-farki",
  "/blog/hileli-brawl-stars-2026": "/blog/hileli-brawl-stars-2026",
  "/blog/eski-brawl-stars-apk": "/blog/eski-brawl-stars-apk",
  "/hakkimizda": "/hakkimizda",
  "/iletisim": "/iletisim",
  "/gizlilik-politikasi": "/gizlilik-politikasi",
  "/sorumluluk-reddi": "/sorumluluk-reddi",
} as const;
