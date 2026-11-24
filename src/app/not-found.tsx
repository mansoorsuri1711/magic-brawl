import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sayfa Bulunamadı – ${SITE_NAME}`,
  description: "Aradığınız sayfa bulunamadı. Magic Brawl ana sayfasına dönün.",
  robots: { index: false, follow: true },
};

export default function RootNotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-ink mb-4">404</h1>
      <p className="text-muted max-w-md mb-8">
        Aradığınız sayfa taşınmış veya silinmiş olabilir. Magic Brawl ücretsiz APK,
        iOS IPA ve PC emülatör rehberleri için ana sayfaya dönün.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-full border-2 border-accent text-ink font-semibold hover:bg-accent/10"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/download-magic-brawl"
          className="px-6 py-3 rounded-full border-2 border-sky text-ink font-semibold hover:bg-sky/10"
        >
          APK İndir
        </Link>
      </div>
    </main>
  );
}
