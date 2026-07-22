import Image from "next/image";
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
  const url = localeUrl(locale, "/about-us");

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/about-us"),
    },
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");
  const tn = await getTranslations("Nav");
  const tc = await getTranslations("Common");
  const coverItems = t.raw("coverItems") as string[];

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: tc("breadcrumbsHome"), href: "/" },
            { label: tn("about") },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t("h1")}</h1>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <Link href="/" className="block">
                <div className="relative w-[240px] h-[240px] rounded-lg overflow-hidden bg-[#0A1029]">
                  <Image
                    src="/master-royale-apk.webp"
                    alt={SITE_NAME}
                    title={t("h1")}
                    width={240}
                    height={240}
                    className="object-contain p-4 w-full h-full"
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="md:w-2/3 space-y-4 text-gray-300 leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">{t("coverTitle")}</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            {coverItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">{t("approachTitle")}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{t("approachP")}</p>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">{t("touchTitle")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("touchP")}{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            ·{" "}
            <Link href="/contact-us" className="text-accent hover:underline">
              {tn("contact")}
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
