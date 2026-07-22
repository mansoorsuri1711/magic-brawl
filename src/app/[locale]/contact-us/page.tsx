import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/contact-us");

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/contact-us"),
    },
    openGraph: {
      title: t("contactTitle"),
      description: t("contactDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Contact({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");
  const tn = await getTranslations("Nav");
  const tc = await getTranslations("Common");
  const tf = await getTranslations("Footer");

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: tc("breadcrumbsHome"), href: "/" },
            { label: tn("contact") },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t("h1")}</h1>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{t("intro")}</p>

          <div className="bg-[#0A1029] rounded-xl p-6 md:p-8 border-2 border-[#FDB402]/30 overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <svg
                aria-hidden="true"
                className="w-16 h-16 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
              {t("emailTitle")}
            </h2>
            <p className="text-center mb-4 text-gray-400">{t("emailText")}</p>
            <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                aria-label={t("emailTitle")}
                className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-4 md:py-4 md:px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full min-w-0 overflow-hidden"
              >
                <span className="break-all">{SUPPORT_EMAIL}</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">{t("responseTitle")}</h2>
            <p className="text-gray-300 leading-relaxed">{t("responseP")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{tn("download")}</h3>
            <Link href="/download-master-royale" className="text-accent hover:underline font-semibold">
              {tn("installGuide")}
            </Link>
          </div>
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{tn("pc")}</h3>
            <Link href="/master-royale-for-pc" className="text-accent hover:underline font-semibold">
              {tn("pc")}
            </Link>
          </div>
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{tf("disclaimer")}</h3>
            <Link href="/disclaimer" className="text-accent hover:underline font-semibold">
              {tf("disclaimer")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
