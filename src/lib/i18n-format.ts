import { defaultLocale } from "@/i18n/config";
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

/** Absolute URL for a path (Turkish-only site — no locale prefix). */
export function localeUrl(_locale: string, path: string = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${p}`;
}

/** hreflang map — Turkish only. */
export function hreflangLanguages(path: string = "/"): Record<string, string> {
  const url = localeUrl(defaultLocale, path);
  return {
    tr: url,
    "x-default": url,
  };
}
