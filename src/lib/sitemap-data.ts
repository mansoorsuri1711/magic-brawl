import { defaultLocale, locales } from "@/i18n/config";
import { SITE_ORIGIN } from "./site";

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const today = () => new Date().toISOString().split("T")[0];

type BasePage = Omit<SitemapPage, "path"> & { path: string };

const BASE_PAGES: BasePage[] = [
  {
    path: "/",
    lastMod: today(),
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: `${SITE_ORIGIN}/master-royale-apk.webp`,
        title: "Master Royale APK – Official App Icon",
        caption:
          "Master Royale APK icon for the Clash Royale private server. Download free for Android.",
      },
      {
        loc: `${SITE_ORIGIN}/master-royale-apk-logo.webp`,
        title: "Master Royale Logo",
        caption: "Master Royale logo used across masterroyaleapk.com",
      },
    ],
  },
  {
    path: "/download-master-royale",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: `${SITE_ORIGIN}/master-royale-apk.webp`,
        title: "Download Master Royale APK",
        caption: "Download Master Royale APK for Android with install steps",
      },
    ],
  },
  {
    path: "/vanilla-vs-infinity",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.92,
    images: [
      {
        loc: `${SITE_ORIGIN}/master-royale-apk.webp`,
        title: "Master Royale Vanilla vs Infinity",
        caption: "Compare Master Royale Vanilla and Infinity private server experiences",
      },
    ],
  },
  {
    path: "/master-royale-for-pc",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE_ORIGIN}/master-royale-apk.webp`,
        title: "Master Royale for PC",
        caption: "Play Master Royale on PC with an Android emulator",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: today(),
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact-us",
    lastMod: today(),
    changeFreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: today(),
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: today(),
    changeFreq: "yearly",
    priority: 0.4,
  },
];

function localizedPath(locale: string, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export const SITEMAP_PAGES: SitemapPage[] = locales.flatMap((locale) =>
  BASE_PAGES.map((page) => ({
    ...page,
    path: localizedPath(locale, page.path),
  }))
);

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
