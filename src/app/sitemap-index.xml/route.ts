import { NextResponse } from "next/server";
import { SITE_ORIGIN } from "@/lib/site";
import { escapeXml } from "@/lib/sitemap-data";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${escapeXml(`${SITE_ORIGIN}/index.xml`)}</loc>
  </sitemap>
  <sitemap>
    <loc>${escapeXml(`${SITE_ORIGIN}/image-sitemap.xml`)}</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
