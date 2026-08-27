import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Locale } from "./config";
import { routing } from "./routing";

/** Invalid `[locale]` values (scanner paths, typos) must 404, not 5xx. */
export function requireLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return locale;
}
