import { locales, defaultLocale } from "@/i18n/config";
import { APP, SITE_ORIGIN } from "./site";

export const appVars = {
  version: APP.version,
  versionAlt: APP.versionAlt,
  fileSize: APP.fileSize,
  os: APP.os,
  price: APP.price,
} as const;

/** Replace `{version}`, `{fileSize}`, etc. in message strings from `t.raw()`. */
export function fillAppVars(text: string): string {
  return text
    .replaceAll("{version}", APP.version)
    .replaceAll("{versionAlt}", APP.versionAlt)
    .replaceAll("{fileSize}", APP.fileSize)
    .replaceAll("{os}", APP.os)
    .replaceAll("{price}", APP.price);
}

/** Absolute URL for a path in a given locale (en has no prefix). */
export function localeUrl(locale: string, path: string = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return p === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${p}`;
  }
  return p === "/" ? `${SITE_ORIGIN}/${locale}` : `${SITE_ORIGIN}/${locale}${p}`;
}

/** hreflang map for a path across all locales. */
export function hreflangLanguages(path: string = "/"): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localeUrl(l, path);
  }
  languages["x-default"] = localeUrl(defaultLocale, path);
  return languages;
}
