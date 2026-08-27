import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DownloadButton from "@/components/DownloadButton";
import ModeIcon from "@/components/ModeIcon";
import { Link } from "@/i18n/navigation";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { requireLocale } from "@/i18n/locale";
import { fillAppVars, hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import {
  APP,
  DOWNLOAD_PAGE_URL,
  HERO_IMAGE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SUPPORT_EMAIL,
} from "@/lib/site";
import { ASSETS, HIGHLIGHT_ICONS } from "@/lib/assets";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/");

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/"),
    },
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url,
      siteName: SITE_NAME,
      locale,
      type: "website",
      images: [
        { url: HERO_IMAGE, width: 512, height: 512, alt: SITE_NAME },
        { url: OG_IMAGE, width: 512, height: 512, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [HERO_IMAGE, OG_IMAGE],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");
  const pageUrl = localeUrl(locale, "/");

  type Faq = { q: string; a: string };
  type Feature = { title: string; text: string };
  type Trouble = { title: string; text: string };

  const faqs = (t.raw("faqs") as Faq[]).map((f) => ({
    q: fillAppVars(f.q),
    a: fillAppVars(f.a),
  }));
  const features = (t.raw("features") as Feature[]).map((f) => ({
    title: fillAppVars(f.title),
    text: fillAppVars(f.text),
  }));
  const tips = (t.raw("tips") as string[]).map(fillAppVars);
  const pros = (t.raw("pros") as string[]).map(fillAppVars);
  const cons = (t.raw("cons") as string[]).map(fillAppVars);
  const installSteps = (t.raw("installSteps") as string[]).map(fillAppVars);
  const reqAndroid = (t.raw("reqAndroid") as string[]).map(fillAppVars);
  const reqIos = t.raw("reqIos") as string[];
  const reqWin = t.raw("reqWin") as string[];
  const trouble = (t.raw("trouble") as Trouble[]).map((item) => ({
    title: fillAppVars(item.title),
    text: fillAppVars(item.text),
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: pageUrl,
        name: SITE_NAME,
        description: t("intro"),
        inLanguage: locale,
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("h1"),
        description: t("subtitle"),
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#software` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#what-is-master-royale",
            "#vanilla-vs-infinity",
            "#features",
            "#how-to-download-install",
            "#faq",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          width: 512,
          height: 512,
          name: SITE_NAME,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: {
          "@type": "ImageObject",
          url: LOGO_IMAGE,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          contactType: "Customer Support",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_ORIGIN}/#software`,
        name: APP.name,
        alternateName: APP.displayName,
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        image: HERO_IMAGE,
        logo: LOGO_IMAGE,
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
        downloadUrl: `${SITE_ORIGIN}/download-master-royale#apk-download`,
        softwareVersion: APP.version,
        fileSize: APP.fileSize,
        description: t("whatP1"),
        author: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "HowTo",
        name: t("installTitle"),
        description: t("installTitle"),
        totalTime: "PT10M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
        },
        step: installSteps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: text.split(".")[0],
          text,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-ink">{t("h1")}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-accent">{t("subtitle")}</p>
            </div>

            <p className="text-lg text-muted leading-relaxed">{t("intro")}</p>

            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 bg-secondary rounded-2xl px-5 py-4 border border-slate-200"
              aria-label={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCountDisplay} ratings`}
            >
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl tracking-tight" aria-hidden="true">
                  ★★★★☆
                </span>
                <span className="text-ink text-2xl font-bold">{APP.ratingValue}</span>
              </div>
              <div className="text-muted text-sm sm:text-base">
                <span className="text-ink font-semibold">{APP.ratingCountDisplay}</span>{" "}
                {tc("ratings")}
                <span className="mx-2 text-slate-400">·</span>
                <span>{tc("freeAndroidGame")}</span>
              </div>
            </div>

            <div className="flex justify-center my-8">
              <DownloadButton href={DOWNLOAD_PAGE_URL} />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px] border border-slate-200 shadow-sm" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="text-ink text-2xl font-bold mb-1">{APP.downloadsDisplay}</div>
                <div className="text-slate-500 text-sm">{tc("downloads")}</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px] border border-slate-200 shadow-sm" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="text-ink text-2xl font-bold mb-1">120K</div>
                <div className="text-slate-500 text-sm">{tc("ratings")}</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px] border border-slate-200 shadow-sm" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="text-ink text-2xl font-bold mb-1">{APP.fileSizeShort}</div>
                <div className="text-slate-500 text-sm">{tc("appSize")}</div>
              </div>
            </div>

            <p className="text-slate-500 text-sm text-center italic">{t("androidOnlyNote")}</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={ASSETS.king}
              alt={t("h1")}
              title={t("h1")}
              width={400}
              height={400}
              className="object-contain drop-shadow-2xl w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 280px, 380px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="apk-details">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">{t("tableTitle")}</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <tbody className="divide-y divide-slate-200">
                {[
                  [t("table.appName"), APP.displayName],
                  [t("table.package"), APP.packageId],
                  [t("table.category"), APP.category],
                  [t("table.version"), `${APP.version} (${APP.versionAlt})`],
                  [t("table.size"), APP.fileSize],
                  [t("table.os"), `${APP.os} — ${APP.osNote}`],
                  [t("table.price"), APP.price],
                  [
                    t("table.rating"),
                    `${APP.ratingValue} / 5 (${APP.ratingCountDisplay} ${tc("ratings")}) · ${tc("freeAndroidGame")}`,
                  ],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-secondary/50" : "bg-white"}>
                    <td className="py-4 px-6 font-medium text-ink">{label}</td>
                    <td className="py-4 px-6 text-ink">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="what-is-master-royale" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <Image
              src={ASSETS.apkIcon}
              alt={t("whatTitle")}
              width={160}
              height={160}
              className="object-contain w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
            />
            <h2 className="text-3xl font-bold text-accent">{t("whatTitle")}</h2>
          </div>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>{t("whatP1")}</p>
            <p>{t("whatP2")}</p>
            <p>{t("whatP3")}</p>
          </div>
        </div>
      </section>

      <section id="private-servers" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("privateServerTitle")}</h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>{t("privateServerP1")}</p>
            <h3 className="text-xl font-semibold text-ink">{t("privateServerAdv1Title")}</h3>
            <p>{t("privateServerAdv1")}</p>
            <h3 className="text-xl font-semibold text-ink">{t("privateServerAdv2Title")}</h3>
            <p>{t("privateServerAdv2")}</p>
            <h3 className="text-xl font-semibold text-ink">{t("privateServerAdv3Title")}</h3>
            <p>{t("privateServerAdv3")}</p>
            <p className="text-accent border-l-4 border-accent pl-4">{t("accountSafetyNote")}</p>
          </div>
        </div>
      </section>

      <section id="vanilla-vs-infinity" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent text-center">{t("modesTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary rounded-2xl p-6 border border-accent/40 text-center">
              <div className="mb-4 flex justify-center">
                <ModeIcon src={ASSETS.vanilla} alt={t("vanillaTitle")} size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">{t("vanillaTitle")}</h3>
              <p className="text-muted leading-relaxed text-left">{t("vanillaP")}</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 border border-sky/40 text-center">
              <div className="mb-4 flex justify-center">
                <ModeIcon src={ASSETS.infinity} alt={t("infinityTitle")} size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">{t("infinityTitle")}</h3>
              <p className="text-muted leading-relaxed text-left">{t("infinityP")}</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/vanilla-vs-infinity"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-accent text-ink font-semibold hover:bg-accent/10 transition-all"
            >
              {t("modesTitle")} →
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="rounded-xl p-6 md:p-10 bg-secondary border border-slate-200">
          <h2 className="text-3xl font-bold mb-10 text-accent text-center">
            {t("highlightsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {(t.raw("highlights") as { title: string; text: string }[]).map((item, i) => (
              <div key={item.title} className="text-center px-2">
                <Image
                  src={HIGHLIGHT_ICONS[i]}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain mx-auto mb-5 w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                />
                <h3 className="text-ink font-bold uppercase tracking-wide text-sm md:text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          {features.length > 0 && (
            <ul className="mt-10 space-y-3 text-muted border-t border-slate-200 pt-8">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong className="text-ink">{f.title}:</strong> {f.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section id="system-requirements" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("reqTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-muted leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">{t("reqAndroidTitle")}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {reqAndroid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">{t("reqIosTitle")}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {reqIos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">{t("reqWinTitle")}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {reqWin.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <Image
              src={ASSETS.wizard}
              alt={t("installTitle")}
              width={140}
              height={140}
              className="object-contain w-[120px] h-[120px] flex-shrink-0 mx-auto md:mx-0"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-accent">{t("installTitle")}</h2>
              <ol className="space-y-6 text-muted list-decimal list-inside">
                {installSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <DownloadButton href={DOWNLOAD_PAGE_URL} />
          </div>
        </div>
      </section>

      <section id="create-account-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("accountTitle")}</h2>
          <p className="text-muted leading-relaxed">{t("accountP")}</p>
        </div>
      </section>

      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("tipsTitle")}</h2>
          <ul className="list-disc pl-6 space-y-3 text-muted">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">
            {t("prosTitle")} &amp; {t("consTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">{t("prosTitle")}</h3>
              <ul className="space-y-2 text-muted list-disc pl-6">
                {pros.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">{t("consTitle")}</h3>
              <ul className="space-y-2 text-muted list-disc pl-6">
                {cons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
            <Image
              src={ASSETS.emote}
              alt=""
              width={96}
              height={96}
              className="object-contain w-20 h-20"
            />
            <h2 className="text-3xl font-bold text-accent">{t("safetyTitle")}</h2>
          </div>
          <p className="text-muted leading-relaxed">{t("safetyP")}</p>
          <p className="text-muted mt-4">
            <Link href="/disclaimer" className="text-accent hover:underline">
              Disclaimer
            </Link>
            {" · "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy
            </Link>
          </p>
        </div>
      </section>

      <section id="troubleshooting" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("troubleTitle")}</h2>
          <div className="space-y-4 text-muted">
            {trouble.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("supportTitle")}</h2>
          <p className="text-muted leading-relaxed">
            {t("supportP")}{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
            {" · "}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-accent">{t("faqTitle")}</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-secondary rounded-xl border border-slate-200 open:border-accent/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-ink flex justify-between items-center gap-4">
                  <span>{item.q}</span>
                  <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-muted leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="closing-cta" className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-8">
        <div className="bg-secondary rounded-xl p-8 text-center border border-accent/30">
          <div className="flex justify-center gap-4 mb-6">
            <ModeIcon src={ASSETS.vanilla} alt="MR Vanilla" size="md" />
            <ModeIcon src={ASSETS.infinity} alt="MR Infinity" size="md" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-accent">{t("ctaTitle")}</h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">{t("ctaText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DownloadButton
              href={DOWNLOAD_PAGE_URL}
              className="min-h-[3.75rem] min-w-[17rem] justify-center"
            />
            <Link
              href="/vanilla-vs-infinity"
              className="inline-flex items-center justify-center min-h-[3.75rem] min-w-[17rem] px-8 py-4 text-lg rounded-full border-2 border-sky bg-white text-ink font-semibold hover:bg-sky/10 shadow-sm transition-all"
            >
              {t("modesTitle")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
