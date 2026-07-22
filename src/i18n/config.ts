export const locales = ["en", "fr", "tr", "es", "pt", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<
  Locale,
  { label: string; native: string; flag: string }
> = {
  en: { label: "English", native: "ENGLISH", flag: "🇺🇸" },
  fr: { label: "French", native: "FRANÇAIS", flag: "🇫🇷" },
  tr: { label: "Turkish", native: "TÜRK", flag: "🇹🇷" },
  es: { label: "Spanish", native: "ESPAÑOL", flag: "🇪🇸" },
  pt: { label: "Portuguese", native: "PORTUGUESE", flag: "🇵🇹" },
  de: { label: "German", native: "DEUTSCH", flag: "🇩🇪" },
};

export const pathnames = {
  "/": "/",
  "/download-master-royale": "/download-master-royale",
  "/vanilla-vs-infinity": "/vanilla-vs-infinity",
  "/master-royale-for-pc": "/master-royale-for-pc",
  "/about-us": "/about-us",
  "/contact-us": "/contact-us",
  "/privacy": "/privacy",
  "/disclaimer": "/disclaimer",
} as const;
