import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { Link } from "@/i18n/navigation";
import { requireLocale } from "@/i18n/locale";
import { fillAppVars, hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { HERO_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/magic-brawl-for-pc");

  return {
    title: t("pcTitle"),
    description: t("pcDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/magic-brawl-for-pc"),
    },
    openGraph: {
      title: t("pcTitle"),
      description: t("pcDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: HERO_IMAGE, width: 512, height: 512, alt: t("pcTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("pcTitle"),
      description: t("pcDescription"),
      images: [HERO_IMAGE],
    },
  };
}

export default async function MagicBrawlForPcPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("PC");
  const tn = await getTranslations("Nav");
  const tc = await getTranslations("Common");
  const pageUrl = localeUrl(locale, "/magic-brawl-for-pc");

  const req = (t.raw("req") as string[]).map(fillAppVars);
  const steps = (t.raw("steps") as string[]).map(fillAppVars);
  const tips = (t.raw("tips") as string[]).map(fillAppVars);
  const problems = (
    t.raw("problems") as Array<{ title: string; text: string }>
  ).map((p) => ({
    title: fillAppVars(p.title),
    text: fillAppVars(p.text),
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("h1"),
        description: t("intro"),
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "HowTo",
        name: t("stepsTitle"),
        description: t("intro"),
        totalTime: "PT20M",
        step: steps.map((text, i) => ({
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
        id="pc-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: tc("breadcrumbsHome"), href: "/" },
              { label: tn("pc") },
            ]}
          />

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t("h1")}</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">{t("intro")}</p>
          </header>

          <div className="flex justify-center mb-10">
            <Image
              src="/coolglass_pin.webp"
              alt={t("h1")}
              title={t("h1")}
              width={220}
              height={220}
              className="object-contain"
              priority
            />
          </div>

          <section className="bg-white rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">{t("whyTitle")}</h2>
            <p className="text-muted leading-relaxed mb-4">{t("whyP")}</p>
            <p>
              <Link href="/download-magic-brawl" className="text-accent hover:underline">
                {tn("download")}
              </Link>
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">{t("reqTitle")}</h2>
            <ul className="space-y-3 text-muted list-disc pl-6">
              {req.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">{t("stepsTitle")}</h2>
            <ol className="space-y-5 text-muted list-decimal list-inside leading-relaxed">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="bg-white rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">{t("tipsTitle")}</h2>
            <ul className="space-y-3 text-muted list-disc pl-6">
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-8 mb-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">{t("problemsTitle")}</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              {problems.map((p) => (
                <p key={p.title}>
                  <strong className="text-ink">{p.title}:</strong> {p.text}
                </p>
              ))}
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-4 text-center border border-accent/30">
            <h2 className="text-2xl font-bold text-accent mb-4">{t("ctaTitle")}</h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">{t("ctaText")}</p>
            <DownloadButton />
          </section>
        </div>
      </article>
    </>
  );
}
