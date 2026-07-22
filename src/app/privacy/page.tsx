import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy – Master Royale",
  description: `Privacy policy for ${SITE_DOMAIN}. How this informational Master Royale APK website handles data, cookies, and contact emails.`,
  keywords: ["Master Royale privacy", "masterroyaleapk privacy policy"],
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
  openGraph: {
    title: "Privacy Policy – Master Royale",
    description: `Learn how ${SITE_NAME} protects information on ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/privacy`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last updated: July 22, 2026</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
          <div className="bg-[#0A1029] border-l-4 border-accent rounded-r-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy explains how{" "}
              <Link href="/" className="text-accent hover:underline font-semibold">
                {SITE_NAME}
              </Link>{" "}
              (“we”, “our”, or “us”) handles information when you visit{" "}
              <a href={SITE_ORIGIN} className="text-accent hover:underline">
                {SITE_DOMAIN}
              </a>
              , an informational website about the Master Royale private server APK.
            </p>
            <p className="text-gray-300">
              We are not the operators of every third-party Master Royale game server. Game accounts
              created inside the APK are governed by those server operators, not by this website alone.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Information We Collect</h2>
            <div className="bg-[#0A1029] rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold mb-3 text-accent">Automatically collected data</h3>
              <p className="text-gray-300 mb-3">
                Like most websites, our hosting or analytics tools may receive:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>IP address, browser type, and device approximate region</li>
                <li>Pages viewed, referrer URL, and visit timestamps</li>
                <li>Basic performance metrics (Core Web Vitals style measurements)</li>
              </ul>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-accent">Information you send us</h3>
              <p className="text-gray-300">
                If you email {SUPPORT_EMAIL}, we receive the address and content you include so we can
                reply. We do not ask for JazzCash, EasyPaisa, or bank passwords. Do not send official
                Clash Royale account credentials to us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Operate and improve {SITE_DOMAIN} guides and download pages</li>
              <li>Respond to support or privacy emails</li>
              <li>Diagnose outages, spam, or abuse</li>
              <li>Maintain security logs for a limited time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Cookies &amp; Local Storage</h2>
            <p className="text-gray-300 leading-relaxed">
              We may use essential cookies or local storage for site preferences and basic analytics.
              You can clear cookies in your browser settings. Blocking all cookies may affect some UI
              features but download guides remain readable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pages may link to APK download endpoints, emulator vendor sites, or social profiles.
              Those destinations have their own privacy policies. Installing Master Royale on your
              device is a separate action outside this website’s direct control.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We do not sell personal information. We do not operate a real-money wallet on this site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Data Retention &amp; Security</h2>
            <p className="text-gray-300 leading-relaxed">
              Email correspondence is kept only as long as needed to resolve your request or meet
              legal obligations. We use reasonable technical measures to protect the website, but no
              internet transmission is perfectly secure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Your Choices</h2>
            <p className="text-gray-300 leading-relaxed">
              To request deletion of emails you sent us, or to ask what contact data we hold, write to{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                {SUPPORT_EMAIL}
              </a>
              . Include enough detail for us to locate the message. We may decline requests that are
              unlawful or that would break security logs required for fraud prevention.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Children</h2>
            <p className="text-gray-300 leading-relaxed">
              This site discusses a strategy game APK. It is not directed at children under 13. If you
              believe a child submitted personal data to us by email, contact support and we will
              delete it where feasible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Policy Updates</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy when our practices or legal requirements change. The
              “Last updated” date at the top will change when we publish revisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Privacy questions:{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                {SUPPORT_EMAIL}
              </a>{" "}
              ·{" "}
              <Link href="/contact-us" className="text-accent hover:underline">
                Contact Us
              </Link>{" "}
              ·{" "}
              <Link href="/disclaimer" className="text-accent hover:underline">
                Disclaimer
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
