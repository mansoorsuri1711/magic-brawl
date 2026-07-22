import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { Link } from "@/i18n/navigation";
import { fillAppVars, hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/download-master-royale");

  return {
    title: t("downloadTitle"),
    description: t("downloadDescription", {
      version: APP.version,
      fileSize: APP.fileSize,
    }),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/download-master-royale"),
    },
    openGraph: {
      title: t("downloadTitle"),
      description: t("downloadDescription", {
        version: APP.version,
        fileSize: APP.fileSize,
      }),
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: HERO_IMAGE, width: 512, height: 512, alt: t("downloadTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("downloadTitle"),
      description: t("downloadDescription", {
        version: APP.version,
        fileSize: APP.fileSize,
      }),
      images: [HERO_IMAGE],
    },
  };
}

export default async function DownloadMasterRoyalePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Download");
  const tn = await getTranslations("Nav");
  const tc = await getTranslations("Common");
  const th = await getTranslations("Home");
  const pageUrl = localeUrl(locale, "/download-master-royale");

  const installSteps = (t.raw("installSteps") as string[]).map(fillAppVars);
  const iosSteps = t.raw("iosSteps") as string[];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("h1"),
        description: fillAppVars(t("intro")),
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: APP.name,
        alternateName: APP.displayName,
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        image: HERO_IMAGE,
        logo: LOGO_IMAGE,
        softwareVersion: APP.version,
        fileSize: APP.fileSize,
        downloadUrl: `${SITE_ORIGIN}/download-master-royale#apk-download`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: APP.ratingValue,
          bestRating: "5",
          ratingCount: APP.ratingCount,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: fillAppVars(t("intro")),
      },
      {
        "@type": "HowTo",
        name: t("installTitle"),
        description: t("installTitle"),
        totalTime: "PT10M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
        step: installSteps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: text.split(".")[0],
          text,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="download-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: tc("breadcrumbsHome"), href: "/" },
              { label: tn("download") },
            ]}
          />

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{fillAppVars(t("intro"))}</p>
          </header>

          <div
            className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 bg-secondary rounded-2xl px-5 py-4 border border-gray-800 mb-10"
            aria-label={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCountDisplay} ratings`}
          >
            <div className="flex items-center gap-2 justify-center">
              <span className="text-[#FDB402] text-xl" aria-hidden="true">
                ★★★★☆
              </span>
              <span className="text-white text-2xl font-bold">{APP.ratingValue}</span>
            </div>
            <div className="text-gray-300 text-center sm:text-left text-sm sm:text-base">
              <span className="text-white font-semibold">{APP.ratingCountDisplay}</span>{" "}
              {tc("ratings")}
              <span className="mx-2 text-gray-600">·</span>
              {tc("freeAndroidGame")}
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <Image
              src="/master-royale-king.webp"
              alt={t("h1")}
              title={t("h1")}
              width={240}
              height={240}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          <section
            id="apk-download"
            className="bg-secondary rounded-2xl p-8 mb-10 text-center border border-[#0ea5e9]/40"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">{t("ctaTitle")}</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">{t("ctaText")}</p>
            <DownloadButton />
            <p className="text-gray-500 text-sm mt-4">
              {APP.packageId} · {APP.os} · {APP.price}
            </p>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">{t("infoTitle")}</h2>
            <div className="overflow-hidden rounded-xl border border-gray-800">
              <table className="min-w-full divide-y divide-gray-800">
                <tbody className="divide-y divide-gray-800 text-white">
                  {[
                    [th("table.appName"), APP.displayName],
                    [th("table.package"), APP.packageId],
                    [th("table.category"), APP.category],
                    [th("table.version"), `${APP.version} (${APP.versionAlt})`],
                    [th("table.size"), APP.fileSize],
                    [th("table.os"), `${APP.os} — ${APP.osNote}`],
                    [th("table.price"), APP.price],
                    [
                      th("table.rating"),
                      `${APP.ratingValue} / 5 · ${APP.ratingCountDisplay} ${tc("ratings")} · ${tc("freeAndroidGame")}`,
                    ],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                      <td className="py-3 px-5 font-medium">{label}</td>
                      <td className="py-3 px-5">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">{t("installTitle")}</h2>
            <ol className="space-y-5 text-gray-300 list-decimal list-inside leading-relaxed">
              {installSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-gray-400 text-sm mt-6">
              <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                {tn("pc")}
              </Link>
            </p>
          </section>

          <section id="ios-install" className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">{t("iosTitle")}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>{t("iosIntro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                {iosSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <p>
                <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                  {tn("pc")}
                </Link>
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">{t("afterTitle")}</h2>
            <p className="text-gray-300 leading-relaxed">{t("afterP")}</p>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-4 text-center">
            <h2 className="text-2xl font-bold text-[#FDB402] mb-4">{t("againTitle")}</h2>
            <DownloadButton />
          </section>
        </div>
      </article>
    </>
  );
}
