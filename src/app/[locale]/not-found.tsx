import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { SITE_NAME } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const t = await getTranslations({ locale: "tr", namespace: "Meta" });
    const tn = await getTranslations({ locale: "tr", namespace: "NotFound" });
    return {
      title: t("notFoundTitle"),
      description: tn("text"),
      robots: { index: false, follow: true },
    };
  } catch {
    return {
      title: `Sayfa Bulunamadı – ${SITE_NAME}`,
      robots: { index: false, follow: true },
    };
  }
}

export default async function NotFound() {
  try {
    const t = await getTranslations({ locale: "tr", namespace: "NotFound" });
    const tn = await getTranslations({ locale: "tr", namespace: "Nav" });

    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">{t("title")}</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">{t("heading")}</h2>
        <p className="text-lg mb-8 text-muted max-w-lg mx-auto">{t("text")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-accent hover:brightness-95 text-ink font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
          >
            {t("home")}
          </Link>
          <Link href="/magic-brawl-apk-indir" className="text-accent hover:underline font-semibold">
            {tn("download")}
          </Link>
        </div>
      </div>
    );
  } catch {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">Sayfa Bulunamadı</h2>
        <p className="text-lg mb-8 text-muted max-w-lg mx-auto">
          Aradığınız sayfa taşınmış veya silinmiş olabilir. Magic Brawl ana sayfasına dönebilirsiniz.
        </p>
        <Link
          href="/"
          className="bg-accent hover:brightness-95 text-ink font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }
}
