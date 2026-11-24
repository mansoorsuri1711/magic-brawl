import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale, pathnames } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  /** Turkish-only site: never prefix URLs with /tr */
  localePrefix: "never",
  pathnames,
});
