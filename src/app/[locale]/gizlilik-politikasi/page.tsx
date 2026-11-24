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
  const url = localeUrl(locale, "/gizlilik-politikasi");

  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/gizlilik-politikasi"),
    },
    openGraph: {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Privacy");
  const tc = await getTranslations("Common");
  const tf = await getTranslations("Footer");
  const sections = t.raw("sections") as Array<{ title: string; body: string }>;

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: tc("breadcrumbsHome"), href: "/" },
            { label: tf("privacy") },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ink">{t("h1")}</h1>
          <p className="text-lg text-slate-500">{t("updated")}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={
                index === 0
                  ? "bg-secondary border-l-4 border-accent rounded-r-lg p-6"
                  : undefined
              }
            >
              <h2
                className={
                  index === 0
                    ? "text-2xl font-bold mb-4 text-ink"
                    : "text-3xl font-bold mb-6 text-ink"
                }
              >
                {section.title}
              </h2>
              <p className="text-muted leading-relaxed whitespace-pre-line">{section.body}</p>
            </section>
          ))}

          <p className="text-slate-500 text-sm">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
            {" · "}
            <Link href="/iletisim" className="text-accent hover:underline">
              Contact
            </Link>
            {" · "}
            <Link href="/sorumluluk-reddi" className="text-accent hover:underline">
              {tf("disclaimer")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
