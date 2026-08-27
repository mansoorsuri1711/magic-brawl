import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { defaultLocale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";

async function resolveSafeLocale() {
  try {
    const locale = await getLocale();
    return hasLocale(routing.locales, locale) ? locale : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveSafeLocale();
  try {
    const t = await getTranslations({ locale, namespace: "Meta" });
    const tn = await getTranslations({ locale, namespace: "NotFound" });
    return {
      title: t("notFoundTitle"),
      description: tn("text"),
      robots: { index: false, follow: true },
    };
  } catch {
    return {
      title: `Page Not Found – ${SITE_NAME}`,
      robots: { index: false, follow: true },
    };
  }
}

export default async function NotFound() {
  const locale = await resolveSafeLocale();
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`;
  const downloadHref =
    locale === defaultLocale ? "/download-master-royale" : `/${locale}/download-master-royale`;

  try {
    const t = await getTranslations({ locale, namespace: "NotFound" });
    const tn = await getTranslations({ locale, namespace: "Nav" });

    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">{t("title")}</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">{t("heading")}</h2>
        <p className="text-lg mb-8 text-muted max-w-lg mx-auto">{t("text")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={homeHref}
            className="bg-accent hover:brightness-95 text-ink font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
          >
            {t("home")}
          </Link>
          <Link href={downloadHref} className="text-accent hover:underline font-semibold">
            {tn("download")}
          </Link>
        </div>
      </div>
    );
  } catch {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">Page Not Found</h2>
        <p className="text-lg mb-8 text-muted max-w-lg mx-auto">
          This URL is missing or moved. Head back to Master Royale for the free APK download guide.
        </p>
        <Link
          href="/"
          className="bg-accent hover:brightness-95 text-ink font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
        >
          Master Royale Home
        </Link>
      </div>
    );
  }
}
