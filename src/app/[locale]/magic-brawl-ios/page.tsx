import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { requireLocale } from "@/i18n/locale";
import { fillAppVars, hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP,
  DOWNLOAD_IPA_URL,
  HERO_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";
import { ASSETS } from "@/lib/assets";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/magic-brawl-ios");

  return {
    title: t("iosTitle"),
    description: t("iosDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/magic-brawl-ios"),
    },
    openGraph: {
      title: t("iosTitle"),
      description: t("iosDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: HERO_IMAGE, width: 512, height: 512, alt: t("iosTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("iosTitle"),
      description: t("iosDescription"),
      images: [HERO_IMAGE],
    },
  };
}

export default async function MagicBrawlIosPage({ params }: PageProps) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations("Ios");
  const tn = await getTranslations("Nav");
  const pageUrl = localeUrl(locale, "/magic-brawl-ios");

  const steps = (t.raw("steps") as string[]).map(fillAppVars);
  const tips = (t.raw("tips") as string[]).map(fillAppVars);
  const trouble = (
    t.raw("trouble") as { title: string; text: string }[]
  ).map((item) => ({
    title: fillAppVars(item.title),
    text: fillAppVars(item.text),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: localeUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("h1"),
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t("stepsTitle"),
        description: t("intro"),
        step: steps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: text.split(".")[0],
          text,
        })),
      },
      {
        "@type": "WebPage",
        name: t("h1"),
        url: pageUrl,
        description: t("intro"),
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ios-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: tn("home"), href: "/" },
            { label: tn("ios"), href: "/magic-brawl-ios" },
          ]}
        />

        <section className="mt-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t("h1")}</h1>
            <p className="text-muted text-lg leading-relaxed mb-6">{t("intro")}</p>
            <a
              href={DOWNLOAD_IPA_URL}
              className="download-btn inline-flex items-center px-8 py-4 text-ink font-semibold text-lg rounded-full border-2 border-sky bg-white hover:bg-sky/10 shadow-sm transition-all"
            >
              <span>{tn("downloadNow")} IPA</span>
              <div className="download-icon ml-3 bg-[#f97316] text-white rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
            <p className="text-slate-500 text-sm mt-4">
              {APP.version} · Magic Brawl iOS / IPA
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={ASSETS.hero}
              alt={t("h1")}
              width={320}
              height={320}
              className="object-contain w-64 h-64 md:w-80 md:h-80"
              priority
            />
          </div>
        </section>

        <section className="mt-12 bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold text-accent mb-4">{t("whyTitle")}</h2>
          <p className="text-muted leading-relaxed">{t("whyP")}</p>
        </section>

        <section className="mt-12 bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold text-accent mb-6">{t("stepsTitle")}</h2>
          <ol className="space-y-5 text-muted list-decimal list-inside">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="mt-12 bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold text-accent mb-6">{t("tipsTitle")}</h2>
          <ul className="list-disc pl-6 space-y-3 text-muted">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold text-accent mb-6">{t("troubleTitle")}</h2>
          <div className="space-y-4">
            {trouble.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 mb-8 bg-secondary rounded-xl p-8 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4">{t("ctaTitle")}</h2>
          <p className="text-muted max-w-2xl mx-auto mb-6">{t("ctaText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DOWNLOAD_IPA_URL}
              className="inline-flex items-center justify-center min-h-[3.5rem] px-8 py-3 rounded-full border-2 border-sky bg-white text-ink font-semibold hover:bg-sky/10"
            >
              IPA {tn("downloadNow")}
            </a>
            <Link
              href="/download-magic-brawl"
              className="inline-flex items-center justify-center min-h-[3.5rem] px-8 py-3 rounded-full border-2 border-accent text-ink font-semibold hover:bg-accent/10"
            >
              Android APK
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            <Link href="/magic-brawl-for-pc" className="text-accent hover:underline">
              {tn("pc")}
            </Link>
            {" · "}
            <Link href="/" className="text-accent hover:underline">
              {SITE_ORIGIN.replace("https://", "")}
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
