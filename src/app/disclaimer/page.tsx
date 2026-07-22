import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer – Master Royale Private Server",
  description: `Disclaimer for ${SITE_DOMAIN}: Master Royale is a third-party Clash Royale-style private server / mod APK, not affiliated with Supercell. Informational site only.`,
  keywords: [
    "Master Royale disclaimer",
    "private server disclaimer",
    "not affiliated with Supercell",
  ],
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
  openGraph: {
    title: "Disclaimer – Master Royale Private Server",
    description: "Important legal notice: unofficial APK, third-party servers, not Supercell.",
    url: `${SITE_ORIGIN}/disclaimer`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer – Master Royale",
    description: "Private server / third-party APK disclaimer for masterroyaleapk.com.",
  },
  robots: { index: true, follow: true },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
          <p className="text-lg text-gray-400">
            Please read before downloading Master Royale
          </p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h2 className="text-xl font-bold text-accent mb-2">Important Notice</h2>
                <p className="text-accent mb-0">
                  By using {SITE_DOMAIN}, you acknowledge the terms below about unofficial APKs and
                  private servers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Not Affiliated with Supercell</h2>
              <p>
                <Link href="/" className="text-accent hover:underline font-semibold">
                  Master Royale
                </Link>{" "}
                is an unofficial Clash Royale-style private server / mod APK. Clash Royale® and related
                marks are trademarks of Supercell Oy. This website and the third-party Master Royale
                client are <strong className="text-white">not endorsed, sponsored, or affiliated</strong>{" "}
                with Supercell. Using unofficial clients may violate Supercell’s terms of service for
                the official game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Third-Party APK &amp; Private Servers</h2>
              <p>
                Download links and install guides on {SITE_DOMAIN} describe third-party software. Private
                servers can go offline, wipe progress, change package names, or ship modified binaries
                without notice. Always create a separate account and never reuse your official Supercell
                ID password, email OTP, or payment credentials inside a modded client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Informational Website Only</h2>
              <p>
                Content on this site is for general information: APK version notes, Vanilla vs Infinity
                explanations, Android and{" "}
                <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                  PC emulator
                </Link>{" "}
                tips. We do not guarantee uninterrupted availability of any download host, server shard,
                or feature set such as “unlimited gems.” Those resources exist inside the private-server
                environment and can change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">No Real-Money Earning Claims</h2>
              <p>
                Master Royale as described here is a strategy / arcade private-server experience. This
                website does not promote JazzCash, EasyPaisa, or other real-cash deposit/withdraw
                gambling products. In-game gems and gold are not redeemable bank balances through{" "}
                {SITE_NAME}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Sideloading Risks</h2>
              <p>
                Installing APKs from outside official app stores carries security risk. Enable “Install
                unknown apps” only for sources you trust, scan devices regularly, and uninstall builds
                you no longer use. You are responsible for complying with local laws regarding modified
                game clients and software you install.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {SITE_NAME} and {SITE_DOMAIN} are not liable for
                device damage, data loss, account bans on official games, malware from mirror sites you
                visit outside our CTA, or disputes with private-server operators. Use the software at
                your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">External Links</h2>
              <p>
                We may link to emulator vendors or download mirrors. Those sites are outside our control.
                Review their terms before installing anything.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this disclaimer:{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                  {SUPPORT_EMAIL}
                </a>{" "}
                or{" "}
                <Link href="/contact-us" className="text-accent hover:underline">
                  Contact Us
                </Link>
                . Also see our{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
