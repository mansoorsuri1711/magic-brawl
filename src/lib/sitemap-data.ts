import { SITE_ORIGIN } from "./site";
import { BLOG_POSTS } from "./blog-posts";

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
        loc: `${SITE_ORIGIN}/magic-brawl.webp`,
        title: "Magic Brawl Logo",
        caption: "Magic Brawl özel sunucu uygulaması logosu",
      },
      {
        loc: `${SITE_ORIGIN}/pin-wizard-67.webp`,
        title: "Magic Brawl Six Seven Pin",
        caption: "Magic Brawl ücretsiz Six Seven sihirbaz rozeti",
      },
      {
        loc: `${SITE_ORIGIN}/fumey-team-pin.webp`,
        title: "Magic Brawl Fumey Takım Rozeti",
        caption: "MBS Fumey ücretsiz pin — Magic Brawl",
      },
      {
        loc: `${SITE_ORIGIN}/feature/og-image.webp`,
        title: "Magic Brawl OG Görseli",
        caption: "magicbrawl.tr paylaşım görseli",
      },
    ],
  },
  {
    path: "/download-magic-brawl",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: `${SITE_ORIGIN}/magic-brawl.webp`,
        title: "Magic Brawl APK İndir",
        caption: "Magic Brawl Android APK indirme rehberi",
      },
    ],
  },
  {
    path: "/magic-brawl-ios",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.92,
    images: [
      {
        loc: `${SITE_ORIGIN}/magic-brawl.webp`,
        title: "Magic Brawl iOS IPA",
        caption: "Magic Brawl iPhone IPA yükleme rehberi",
      },
    ],
  },
  {
    path: "/magic-brawl-for-pc",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE_ORIGIN}/coolglass_pin.webp`,
        title: "Magic Brawl PC",
        caption: "Magic Brawl PC emülatör rehberi",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: today(),
    changeFreq: "weekly",
    priority: 0.85,
  },
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastMod: post.updated,
    changeFreq: "monthly" as const,
    priority: 0.8,
    images: [
      {
        loc: `${SITE_ORIGIN}${post.image}`,
        title: post.title.tr,
        caption: post.excerpt.tr,
      },
    ],
  })),
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

/** Turkish-only: one URL set, no locale prefixes. */
export const SITEMAP_PAGES: SitemapPage[] = BASE_PAGES.map((page) => ({
  ...page,
}));

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
