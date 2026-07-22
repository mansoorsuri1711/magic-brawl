import { NextResponse } from "next/server";
import { SITE_ORIGIN } from "@/lib/site";
import { escapeXml, SITEMAP_PAGES } from "@/lib/sitemap-data";

export function GET() {
  const urls = SITEMAP_PAGES.map((page) => {
    return `  <url>
    <loc>${escapeXml(`${SITE_ORIGIN}${page.path === "/" ? "/" : page.path}`)}</loc>
    <lastmod>${escapeXml(page.lastMod)}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
