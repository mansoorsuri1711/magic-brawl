import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us – Master Royale APK Guides",
  description: `Learn about ${SITE_NAME} on ${SITE_DOMAIN} — an informational hub for Master Royale private server APK downloads, Vanilla & Infinity guides, and PC emulator tips.`,
  keywords: ["about Master Royale", "masterroyaleapk.com", "Master Royale private server info"],
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us – Master Royale APK Guides",
    description: `Who we are at ${SITE_DOMAIN}: clear Master Royale APK information, not affiliated with Supercell.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}/master-royale-apk-logo.webp`, width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: "About Us – Master Royale",
    description: `Informational Master Royale APK guides on ${SITE_DOMAIN}.`,
    images: [`${SITE_ORIGIN}/master-royale-apk-logo.webp`],
  },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-lg text-gray-400">Master Royale guides on {SITE_DOMAIN}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <Link href="/" className="block">
                <div className="relative w-[240px] h-[240px] rounded-lg overflow-hidden bg-[#0A1029]">
                  <Image
                    src="/master-royale-apk.webp"
                    alt="Master Royale – Clash Royale private server APK"
                    title="About Master Royale on masterroyaleapk.com"
                    width={240}
                    height={240}
                    className="object-contain p-4 w-full h-full"
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="md:w-2/3 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Welcome to{" "}
                <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">
                  {SITE_DOMAIN}
                </a>
                , an informational website focused on{" "}
                <Link href="/" className="text-accent hover:underline font-semibold">
                  Master Royale
                </Link>{" "}
                — a Clash Royale-style private server / mod APK with Vanilla and Infinity play styles.
              </p>
              <p>
                We publish download steps, APK details, PC emulator instructions, and safety reminders
                so players can understand what they are installing. Master Royale is third-party software
                and is <strong className="text-white">not affiliated with Supercell</strong>. This site
                does not sell real-money gambling products and does not offer JazzCash or EasyPaisa
                cash-out features.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">What We Cover</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>
              Android{" "}
              <Link href="/download-master-royale" className="text-accent hover:underline">
                Master Royale APK download
              </Link>{" "}
              and install walkthroughs
            </li>
            <li>
              <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                PC emulator guides
              </Link>{" "}
              for BlueStacks / LDPlayer-style setups
            </li>
            <li>Vanilla vs Infinity explanations and practical battle tips</li>
            <li>Clear disclaimers about private-server risks and account safety</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">Our Approach</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Pages are written in straightforward English for players in Pakistan and elsewhere who
            search for Master Royale APK information. We keep claims honest: unlimited gems and gold
            refer to private-server gameplay resources, not bankable cash. When features change on the
            live server, we update version numbers and install notes as soon as we can verify them.
          </p>

          <h2 className="text-2xl font-bold text-[#FDB402] mb-4">Get in Touch</h2>
          <p className="text-gray-300 leading-relaxed">
            Questions about this website? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            or visit{" "}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
