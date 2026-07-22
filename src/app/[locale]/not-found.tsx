import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  const tn = await getTranslations("NotFound");

  return {
    title: t("notFoundTitle"),
    description: tn("text"),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const tn = await getTranslations("Nav");

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">{t("title")}</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t("heading")}</h2>
      <p className="text-lg mb-8 text-gray-300 max-w-lg mx-auto">{t("text")}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/"
          className="bg-accent hover:bg-accent-hover text-[#06091F] font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
        >
          {t("home")}
        </Link>
        <Link href="/download-master-royale" className="text-accent hover:underline font-semibold">
          {tn("download")}
        </Link>
      </div>
    </div>
  );
}
