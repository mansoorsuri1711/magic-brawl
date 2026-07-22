import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Master Royale APK – Free Android & iOS Install Guide",
  description: `Download Master Royale APK ${APP.version} (${APP.fileSize}) free for Android. Step-by-step private server install, iOS sideload notes, APK details, and safety tips on ${SITE_DOMAIN}.`,
  keywords: [
    "download Master Royale",
    "Master Royale APK download",
    "Master Royale install",
    "Master Royale Android",
    "Master Royale iOS",
    "Clash Royale private server APK",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/download-master-royale`,
  },
  openGraph: {
    title: "Download Master Royale APK – Free Android & iOS Install Guide",
    description: `Free Master Royale APK ${APP.version}. Full install steps for Android private server with Vanilla & Infinity, plus iOS sideload notes.`,
    url: `${SITE_ORIGIN}/download-master-royale`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: HERO_IMAGE, width: 1024, height: 1024, alt: "Download Master Royale APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Master Royale APK – Free Android & iOS Install Guide",
    description: `Install Master Royale ${APP.version} (${APP.fileSize}) on Android with our clear guide.`,
    images: [HERO_IMAGE],
  },
};

export default function DownloadMasterRoyalePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/download-master-royale#webpage`,
        url: `${SITE_ORIGIN}/download-master-royale`,
        name: "Download Master Royale APK – Free Android & iOS Install Guide",
        description: `Download and install Master Royale APK ${APP.version} for Android, with iOS sideload notes.`,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: APP.name,
        alternateName: APP.displayName,
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        image: HERO_IMAGE,
        logo: LOGO_IMAGE,
        softwareVersion: APP.version,
        fileSize: APP.fileSize,
        downloadUrl: `${SITE_ORIGIN}/download-master-royale#apk-download`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: APP.ratingValue,
          bestRating: "5",
          ratingCount: APP.ratingCount,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Master Royale private server APK for Android — unlimited gems/gold environment, Vanilla and Infinity modes. Free download on masterroyaleapk.com.",
      },
      {
        "@type": "HowTo",
        name: "Install Master Royale APK on Android",
        description:
          "Enable unknown sources, download Master Royale from masterroyaleapk.com, install the APK, and launch.",
        totalTime: "PT10M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Enable unknown sources",
            text: "On Android, open Settings → Apps → Special access → Install unknown apps and allow your browser or Files app to install packages.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download from this site",
            text: `Visit ${SITE_ORIGIN}/download-master-royale, tap DOWNLOAD NOW in the apk-download section, and wait for the full ${APP.fileSize} file (${APP.version}) to finish.`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Install the APK",
            text: "Open the downloaded package, review the prompt, and tap Install.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Launch Master Royale",
            text: "Tap Open, create a new private-server account, and choose Vanilla or Infinity. Never use official Supercell credentials.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="download-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Download" },
            ]}
          />

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Download Master Royale APK
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Free Android install guide for the Master Royale Clash Royale-style private server —
              version {APP.version}, {APP.fileSize}. iOS players use IPA sideload only (see below);
              PC players use an emulator with this same APK.
            </p>
          </header>

          <div
            className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 bg-secondary rounded-2xl px-5 py-4 border border-gray-800 mb-10"
            aria-label={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCountDisplay} ratings`}
          >
            <div className="flex items-center gap-2 justify-center">
              <span className="text-[#FFC107] text-xl" aria-hidden="true">
                ★★★★☆
              </span>
              <span className="text-white text-2xl font-bold">{APP.ratingValue}</span>
            </div>
            <div className="text-gray-300 text-center sm:text-left text-sm sm:text-base">
              <span className="text-white font-semibold">{APP.ratingCountDisplay}</span> ratings
              <span className="mx-2 text-gray-600">·</span>
              Free · Android · Game
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <Image
              src="/master-royale.webp"
              alt="Master Royale APK download"
              title="Download Master Royale for Android"
              width={240}
              height={240}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          <section
            id="apk-download"
            className="bg-secondary rounded-2xl p-8 mb-10 text-center border border-[#0ea5e9]/40"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-4">
              Get the Master Royale APK
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Tap below to start the free download from {SITE_DOMAIN}. After install, create a fresh
              private-server login — never enter official Supercell credentials.
            </p>
            <DownloadButton />
            <p className="text-gray-500 text-sm mt-4">
              Package {APP.packageId} · {APP.os} · {APP.price}
            </p>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">APK Information</h2>
            <div className="overflow-hidden rounded-xl border border-gray-800">
              <table className="min-w-full divide-y divide-gray-800">
                <tbody className="divide-y divide-gray-800 text-white">
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-5 font-medium">App Name</td>
                    <td className="py-3 px-5">{APP.displayName}</td>
                  </tr>
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-5 font-medium">Package</td>
                    <td className="py-3 px-5">{APP.packageId}</td>
                  </tr>
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-5 font-medium">Category</td>
                    <td className="py-3 px-5">{APP.category}</td>
                  </tr>
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-5 font-medium">Latest Version</td>
                    <td className="py-3 px-5">
                      {APP.version}{" "}
                      <span className="text-gray-400">(also seen as {APP.versionAlt})</span>
                    </td>
                  </tr>
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-5 font-medium">File Size</td>
                    <td className="py-3 px-5">{APP.fileSize}</td>
                  </tr>
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-5 font-medium">Required OS</td>
                    <td className="py-3 px-5">
                      {APP.os} — {APP.osNote}
                    </td>
                  </tr>
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-5 font-medium">Price</td>
                    <td className="py-3 px-5">{APP.price}</td>
                  </tr>
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-5 font-medium">Rating</td>
                    <td className="py-3 px-5">
                      {APP.ratingValue} / 5 · {APP.ratingCountDisplay} ratings · Free · Android · Game
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">
              Full Android Install Walkthrough
            </h2>
            <ol className="space-y-5 text-gray-300 list-decimal list-inside leading-relaxed">
              <li>
                <strong className="text-white">Enable unknown sources.</strong> Open Settings → Apps →
                Special access → Install unknown apps and allow Chrome, Firefox, or Files to install
                packages.
              </li>
              <li>
                <strong className="text-white">Download from this site.</strong> Jump to the{" "}
                <a href="#apk-download" className="text-accent hover:underline">
                  apk-download
                </a>{" "}
                section and tap DOWNLOAD NOW. Stay on Wi-Fi if possible — the APK is about{" "}
                {APP.fileSize} ({APP.version}).
              </li>
              <li>
                <strong className="text-white">Install the APK.</strong> Open the downloaded package,
                confirm Install, and only proceed past Play Protect if you intentionally chose this
                file from {SITE_DOMAIN}.
              </li>
              <li>
                <strong className="text-white">Launch Master Royale.</strong> Tap Open, register a new
                private-server account, pick Vanilla or Infinity, and start a practice battle.
              </li>
            </ol>
            <p className="text-gray-400 text-sm mt-6">
              Prefer keyboard controls? See{" "}
              <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                Master Royale for PC
              </Link>{" "}
              for BlueStacks-style steps using this same APK.
            </p>
          </section>

          <section id="ios-install" className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">
              iOS Install Notes (IPA Sideload Only)
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Apple blocks Android APKs on iPhone and iPad. There is no Play Store–style APK install
                path on iOS. If a Master Royale IPA build is available from a source you trust, you
                must sideload it — typically with AltStore (or similar) and a free developer
                certificate that needs a roughly 7-day refresh cycle.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Install AltStore (or an equivalent sideload tool) from its official documentation,
                  then trust the developer certificate under Settings → General → VPN &amp; Device
                  Management.
                </li>
                <li>
                  Expect to refresh the IPA about every 7 days on free Apple IDs, or the app icon will
                  stop launching.
                </li>
                <li>
                  Some mirrors push enterprise provisioning profiles. Treat those carefully: enterprise
                  profiles can grant broad device trust. Only install profiles you understand, and
                  remove them immediately if anything feels off.
                </li>
                <li>
                  Minimum device guidance commonly cited for these clients: iOS 10+ on iPhone 6 or
                  newer. Performance varies — newer hardware is safer for live battles.
                </li>
              </ul>
              <p>
                If you prefer a simpler path, install the Android APK on a phone or run it inside a
                Windows emulator via our{" "}
                <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                  Master Royale for PC
                </Link>{" "}
                guide.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-4">After You Install</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Grant only the permissions the game requests to run (storage/network). You do not need
                SMS or contacts access for a private-server arena client. Keep Unknown Sources limited
                to the installer you used, then revoke it.
              </p>
              <p>
                For overview content, return to the{" "}
                <Link href="/" className="text-accent hover:underline">
                  Master Royale homepage
                </Link>
                . For legal context, read our{" "}
                <Link href="/disclaimer" className="text-accent hover:underline">
                  Disclaimer
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-4 text-center">
            <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Download again</h2>
            <DownloadButton />
          </section>
        </div>
      </article>
    </>
  );
}
