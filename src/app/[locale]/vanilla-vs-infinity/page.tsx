import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import {
  DISCORD_URL,
  DOWNLOAD_INFINITY_URL,
  DOWNLOAD_VANILLA_URL,
  HERO_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SUPPORT_EMAIL,
} from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

type CompareRow = { feature: string; vanilla: string; infinity: string };
type Guide = { title: string; heading: string; text: string; tipLabel: string; tip: string };
type Card = { title: string; text: string };
type Step = { title: string; text: string; note: string };
type Trouble = { title: string; text: string; try: string };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/vanilla-vs-infinity");

  return {
    title: t("compareTitle"),
    description: t("compareDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/vanilla-vs-infinity"),
    },
    openGraph: {
      title: t("compareTitle"),
      description: t("compareDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: HERO_IMAGE, width: 512, height: 512, alt: t("compareTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("compareTitle"),
      description: t("compareDescription"),
      images: [HERO_IMAGE],
    },
  };
}

function VersionCard({
  title,
  tag,
  desc,
  cta,
  href,
  accent,
  imageSrc,
  imageAlt,
}: {
  title: string;
  tag: string;
  desc: string;
  cta: string;
  href: string;
  accent: "vanilla" | "infinity";
  imageSrc: string;
  imageAlt: string;
}) {
  const border =
    accent === "vanilla" ? "border-[#FDB402]/50" : "border-[#0ea5e9]/50";
  const tagColor = accent === "vanilla" ? "text-[#FDB402]" : "text-[#0ea5e9]";

  return (
    <div className={`bg-[#0A1029] rounded-2xl p-8 border ${border} flex flex-col h-full`}>
      <div className="flex justify-center mb-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={180}
          height={180}
          className="object-contain w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
        />
      </div>
      <p className={`text-sm font-semibold uppercase tracking-wide mb-2 ${tagColor}`}>{tag}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed flex-1 mb-8">{desc}</p>
      <a
        href={href}
        className="download-btn inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
      >
        <span>{cta}</span>
        <span className="download-icon ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default async function VanillaVsInfinityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Compare");
  const tc = await getTranslations("Common");
  const pageUrl = localeUrl(locale, "/vanilla-vs-infinity");

  const rows = t.raw("rows") as CompareRow[];
  const guides = t.raw("guides") as Guide[];
  const advanced = t.raw("advanced") as Card[];
  const installSteps = t.raw("installSteps") as Step[];
  const trouble = t.raw("trouble") as Trouble[];
  const badges = t.raw("badges") as string[];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("h1"),
        description: t("subtitle"),
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t("compareHeading"),
            acceptedAnswer: {
              "@type": "Answer",
              text: `${t("vanillaDesc")} ${t("infinityDesc")}`,
            },
          },
          {
            "@type": "Question",
            name: t("unsureTitle"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("unsureText"),
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="compare-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: tc("breadcrumbsHome"), href: "/" },
              { label: t("breadcrumb") },
            ]}
          />

          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/master-royale-king.webp"
                alt="Master Royale King"
                width={200}
                height={200}
                className="object-contain w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
          </header>

          {/* Comparison table */}
          <section className="mb-14" id="compare">
            <p className="text-[#FDB402] text-sm font-semibold uppercase tracking-widest mb-2 text-center">
              {t("compareTitle")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {t("compareHeading")}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr className="bg-[#0A1029]">
                      <th className="py-4 px-5 text-left text-[#FDB402] font-semibold">{t("colFeature")}</th>
                      <th className="py-4 px-5 text-left text-white font-semibold">{t("colVanilla")}</th>
                      <th className="py-4 px-5 text-left text-white font-semibold">{t("colInfinity")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {rows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-[#06091F]/80" : "bg-[#0a1029]/50"}>
                        <td className="py-3.5 px-5 text-white font-medium">{row.feature}</td>
                        <td className="py-3.5 px-5 text-gray-300">{row.vanilla}</td>
                        <td className="py-3.5 px-5 text-gray-300">{row.infinity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Dual download cards */}
          <section className="mb-14" id="download-versions">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4 text-center">
              {t("downloadSectionTitle")}
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">{t("downloadSectionIntro")}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <VersionCard
                title={t("vanillaTitle")}
                tag={t("vanillaTag")}
                desc={t("vanillaDesc")}
                cta={t("vanillaCta")}
                href={DOWNLOAD_VANILLA_URL}
                accent="vanilla"
                imageSrc="/master-royale-chest.webp"
                imageAlt="Master Royale Vanilla"
              />
              <VersionCard
                title={t("infinityTitle")}
                tag={t("infinityTag")}
                desc={t("infinityDesc")}
                cta={t("infinityCta")}
                href={DOWNLOAD_INFINITY_URL}
                accent="infinity"
                imageSrc="/master-royale-infinity-server.webp"
                imageAlt="Master Royale Infinity"
              />
            </div>
          </section>

          {/* Gameplay guide */}
          <section className="mb-14" id="gameplay-guide">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <Image
                src="/master-royale-gems.webp"
                alt="Master Royale gems"
                width={120}
                height={120}
                className="object-contain w-[100px] h-[100px]"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">{t("guideTitle")}</h2>
                <p className="text-gray-300 leading-relaxed">{t("guideIntro")}</p>
              </div>
            </div>
            <div className="space-y-6">
              {guides.map((g, idx) => {
                const icons = [
                  "/master-royale-emote.webp",
                  "/master-royale-wizard.webp",
                  "/master-royale-tournaments.webp",
                ];
                return (
                <div key={g.title} className="bg-secondary rounded-2xl p-6 md:p-8 border border-gray-800">
                  <div className="flex gap-4 items-start">
                    <Image
                      src={icons[idx % icons.length]}
                      alt=""
                      width={64}
                      height={64}
                      className="object-contain w-14 h-14 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-[#FDB402] text-sm font-semibold uppercase tracking-wide mb-1">{g.title}</p>
                      <h3 className="text-xl font-bold text-white mb-3">{g.heading}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{g.text}</p>
                      <div className="bg-[#0A1029] rounded-xl px-4 py-3 border-l-4 border-[#FDB402]">
                        <p className="text-sm text-gray-300">
                          <span className="text-[#FDB402] font-semibold">{g.tipLabel}</span> {g.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </section>

          {/* Advanced */}
          <section className="mb-14" id="advanced">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-8">{t("advancedTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {advanced.map((item) => (
                <div key={item.title} className="bg-[#0A1029] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Discord unsure */}
          <section className="mb-14 bg-secondary rounded-2xl p-8 text-center border border-[#0ea5e9]/30">
            <h2 className="text-2xl font-bold text-white mb-3">{t("unsureTitle")}</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-6">{t("unsureText")}</p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-[#5865F2] text-white font-semibold hover:bg-[#5865F2]/20 transition-all"
            >
              {t("discordCta")}
            </a>
          </section>

          {/* Install */}
          <section className="mb-14" id="install">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">{t("installTitle")}</h2>
            <p className="text-gray-300 mb-8">{t("installIntro")}</p>
            <ol className="space-y-6">
              {installSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4 bg-[#0A1029] rounded-2xl p-6 border border-gray-800">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDB402] text-primary font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-2">{step.text}</p>
                    <p className="text-sm text-[#FDB402]">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-gray-400 text-sm">
              <Link href="/download-master-royale" className="text-accent hover:underline">
                {t("downloadSectionTitle")}
              </Link>
              {" · "}
              <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                PC
              </Link>
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mb-14" id="troubleshooting">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-8">{t("troubleTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {trouble.map((item) => (
                <div key={item.title} className="bg-secondary rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{item.text}</p>
                  <p className="text-xs text-[#FDB402]">{item.try}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ready CTA */}
          <section className="mb-14 text-center bg-[#0A1029] rounded-2xl p-8 border border-[#FDB402]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">{t("readyTitle")}</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">{t("readyText")}</p>
            <a
              href="#download-versions"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-[#0ea5e9] text-white font-semibold hover:bg-[#0ea5e9]/10 transition-all"
            >
              {t("readyCta")}
            </a>
          </section>

          {/* Safety */}
          <section className="mb-8 bg-secondary rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-[#FDB402] mb-4">{t("safetyTitle")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t("safetyP1")}</p>
            <p className="text-gray-300 leading-relaxed mb-6">{t("safetyP2")}</p>
            <ul className="flex flex-wrap gap-3 mb-4">
              {badges.map((b) => (
                <li
                  key={b}
                  className="text-sm bg-[#0A1029] text-gray-200 px-4 py-2 rounded-full border border-gray-700"
                >
                  ✓ {b}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                {SUPPORT_EMAIL}
              </a>
              {" · "}
              <Link href="/disclaimer" className="text-accent hover:underline">
                Disclaimer
              </Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
