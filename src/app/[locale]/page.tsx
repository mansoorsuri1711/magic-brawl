import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DownloadButton from "@/components/DownloadButton";
import { Link } from "@/i18n/navigation";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { fillAppVars, hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SUPPORT_EMAIL,
} from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
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
  const { locale } = await params;
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
                <span className="text-white">{t("h1")}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#FDB402]">{t("subtitle")}</p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">{t("intro")}</p>

            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 bg-[#0A1029] rounded-2xl px-5 py-4 border border-gray-800"
              aria-label={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCountDisplay} ratings`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#FDB402] text-xl tracking-tight" aria-hidden="true">
                  ★★★★☆
                </span>
                <span className="text-white text-2xl font-bold">{APP.ratingValue}</span>
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-white font-semibold">{APP.ratingCountDisplay}</span>{" "}
                {tc("ratings")}
                <span className="mx-2 text-gray-600">·</span>
                <span>{tc("freeAndroidGame")}</span>
              </div>
            </div>

            <div className="flex justify-center my-8">
              <DownloadButton />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FDB402] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP.downloadsDisplay}</div>
                <div className="text-gray-400 text-sm">{tc("downloads")}</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FDB402] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">120K</div>
                <div className="text-gray-400 text-sm">{tc("ratings")}</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FDB402] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP.fileSizeShort}</div>
                <div className="text-gray-400 text-sm">{tc("appSize")}</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">{t("androidOnlyNote")}</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/master-royale-apk.webp"
              alt={t("h1")}
              title={t("h1")}
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="apk-details">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FDB402]">{t("tableTitle")}</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
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
                  <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-4 px-6 font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="what-is-master-royale" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("whatTitle")}</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>{t("whatP1")}</p>
            <p>{t("whatP2")}</p>
            <p>{t("whatP3")}</p>
          </div>
        </div>
      </section>

      <section id="private-servers" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("privateServerTitle")}</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>{t("privateServerP1")}</p>
            <h3 className="text-xl font-semibold text-white">{t("privateServerAdv1Title")}</h3>
            <p>{t("privateServerAdv1")}</p>
            <h3 className="text-xl font-semibold text-white">{t("privateServerAdv2Title")}</h3>
            <p>{t("privateServerAdv2")}</p>
            <h3 className="text-xl font-semibold text-white">{t("privateServerAdv3Title")}</h3>
            <p>{t("privateServerAdv3")}</p>
            <p className="text-accent border-l-4 border-accent pl-4">{t("accountSafetyNote")}</p>
          </div>
        </div>
      </section>

      <section id="vanilla-vs-infinity" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("modesTitle")}</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-white">{t("vanillaTitle")}</h3>
            <p>{t("vanillaP")}</p>
            <h3 className="text-xl font-semibold text-white">{t("infinityTitle")}</h3>
            <p>{t("infinityP")}</p>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("featuresTitle")}</h2>
          <ul className="space-y-4 text-gray-300">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="text-[#FDB402] font-bold">•</span>
                <span>
                  <strong className="text-white">{f.title}:</strong> {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="system-requirements" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("reqTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t("reqAndroidTitle")}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {reqAndroid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t("reqIosTitle")}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {reqIos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t("reqWinTitle")}</h3>
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
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("installTitle")}</h2>
          <ol className="space-y-6 text-gray-300 list-decimal list-inside">
            {installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      <section id="create-account-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("accountTitle")}</h2>
          <p className="text-gray-300 leading-relaxed">{t("accountP")}</p>
        </div>
      </section>

      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("tipsTitle")}</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">
            {t("prosTitle")} &amp; {t("consTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t("prosTitle")}</h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-6">
                {pros.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t("consTitle")}</h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-6">
                {cons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("safetyTitle")}</h2>
          <p className="text-gray-300 leading-relaxed">{t("safetyP")}</p>
          <p className="text-gray-300 mt-4">
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
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("troubleTitle")}</h2>
          <div className="space-y-4 text-gray-300">
            {trouble.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("supportTitle")}</h2>
          <p className="text-gray-300 leading-relaxed">
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
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FDB402]">{t("faqTitle")}</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-[#0A1029] rounded-xl border border-gray-800 open:border-[#FDB402]/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white flex justify-between items-center gap-4">
                  <span>{item.q}</span>
                  <span className="text-[#FDB402] group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="closing-cta" className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-8">
        <div className="bg-secondary rounded-xl p-8 text-center border border-[#FDB402]/30">
          <h2 className="text-3xl font-bold mb-4 text-[#FDB402]">{t("ctaTitle")}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">{t("ctaText")}</p>
          <DownloadButton />
        </div>
      </section>
    </>
  );
}
