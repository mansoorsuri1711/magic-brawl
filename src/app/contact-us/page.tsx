import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us – Master Royale Support",
  description: `Contact ${SITE_NAME} on ${SITE_DOMAIN}. Email ${SUPPORT_EMAIL} for help with guides, privacy requests, or site issues.`,
  keywords: ["Master Royale contact", "masterroyaleapk support", SUPPORT_EMAIL],
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "Contact Us – Master Royale Support",
    description: `Reach the ${SITE_NAME} team at ${SUPPORT_EMAIL}.`,
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us – Master Royale",
    description: `Email ${SUPPORT_EMAIL} for website support.`,
  },
  robots: { index: true, follow: true },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg text-gray-400">We are here to help with this website</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Use this page to reach the team behind{" "}
            <Link href="/" className="text-accent hover:underline font-semibold">
              {SITE_DOMAIN}
            </Link>
            . We can help with Master Royale APK guide questions, broken links,{" "}
            <Link href="/about-us" className="text-accent hover:underline font-semibold">
              About Us
            </Link>{" "}
            clarifications, and{" "}
            <Link href="/privacy" className="text-accent hover:underline font-semibold">
              privacy
            </Link>{" "}
            requests. We do not provide official Supercell support and cannot restore private-server
            accounts controlled by third parties.
          </p>

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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email Us</h2>
            <p className="text-center mb-4 text-gray-400">
              Send questions or concerns about this informational site
            </p>
            <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                aria-label="Send email to Master Royale support"
                className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-4 md:py-4 md:px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full min-w-0 overflow-hidden"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
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
                <span className="break-all">{SUPPORT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">APK Guides</h3>
            <p className="text-gray-400 text-sm mb-3">Install steps and version details</p>
            <Link href="/download-master-royale" className="text-accent hover:underline font-semibold">
              Download page
            </Link>
          </div>
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">PC Version</h3>
            <p className="text-gray-400 text-sm mb-3">Emulator setup help</p>
            <Link href="/master-royale-for-pc" className="text-accent hover:underline font-semibold">
              PC guide
            </Link>
          </div>
          <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Legal</h3>
            <p className="text-gray-400 text-sm mb-3">Private server disclosure</p>
            <Link href="/disclaimer" className="text-accent hover:underline font-semibold">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
