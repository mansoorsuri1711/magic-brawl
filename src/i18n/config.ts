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
  "/download-magic-brawl": "/download-magic-brawl",
  "/magic-brawl-ios": "/magic-brawl-ios",
  "/magic-brawl-for-pc": "/magic-brawl-for-pc",
  "/blog": "/blog",
  "/blog/magic-brawl-guvenli-mi": "/blog/magic-brawl-guvenli-mi",
  "/blog/magic-brawl-vs-nulls-brawl": "/blog/magic-brawl-vs-nulls-brawl",
  "/blog/hileli-brawl-stars-2026": "/blog/hileli-brawl-stars-2026",
  "/blog/eski-brawl-stars-apk": "/blog/eski-brawl-stars-apk",
  "/about-us": "/about-us",
  "/contact-us": "/contact-us",
  "/privacy": "/privacy",
  "/disclaimer": "/disclaimer",
} as const;
