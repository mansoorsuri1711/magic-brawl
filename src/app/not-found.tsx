import Link from "next/link";
import { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Page Not Found – ${SITE_NAME}`,
  description: "The page you are looking for does not exist. Return to the Master Royale homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">Page Not Found</h2>
      <p className="text-lg mb-8 text-muted max-w-lg mx-auto">
        This URL is missing or moved. Head back to Master Royale for the free APK download guide,
        Vanilla vs Infinity notes, and PC emulator tips.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/"
          className="bg-accent hover:brightness-95 text-ink font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
        >
          Master Royale Home
        </Link>
        <Link
          href="/download-master-royale"
          className="text-accent hover:underline font-semibold"
        >
          Download APK
        </Link>
      </div>
    </div>
  );
}
