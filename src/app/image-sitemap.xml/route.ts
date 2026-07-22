import { NextResponse } from "next/server";
import { SITE_ORIGIN } from "@/lib/site";
import { escapeXml, SITEMAP_PAGES } from "@/lib/sitemap-data";

export function GET() {
  const urls = SITEMAP_PAGES.filter((p) => p.images && p.images.length > 0)
    .map((page) => {
      const images = (page.images || [])
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(`${SITE_ORIGIN}${page.path === "/" ? "/" : page.path}`)}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
