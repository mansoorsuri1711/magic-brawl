import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { requireLocale } from "@/i18n/locale";
import { hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/sorumluluk-reddi");

  return {
    title: t("disclaimerTitle"),
    description: t("disclaimerDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/sorumluluk-reddi"),
    },
    openGraph: {
      title: t("disclaimerTitle"),
      description: t("disclaimerDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Disclaimer({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Disclaimer");
  const tc = await getTranslations("Common");
  const tf = await getTranslations("Footer");
  const sections = t.raw("sections") as Array<{ title: string; body: string }>;

  const [notice, ...rest] = sections;

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: tc("breadcrumbsHome"), href: "/" },
            { label: tf("disclaimer") },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ink">{t("h1")}</h1>
          <p className="text-lg text-slate-500">{t("subtitle")}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          {notice && (
            <div className="bg-secondary border-l-4 border-accent p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-bold text-accent mb-2">{notice.title}</h2>
              <p className="text-accent mb-0">{notice.body}</p>
            </div>
          )}

          <div className="space-y-8 text-muted leading-relaxed">
            {rest.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-ink mb-3">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <p className="text-slate-500 text-sm mt-8">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
            {" · "}
            <Link href="/iletisim" className="text-accent hover:underline">
              Contact
            </Link>
            {" · "}
            <Link href="/gizlilik-politikasi" className="text-accent hover:underline">
              {tf("privacy")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
