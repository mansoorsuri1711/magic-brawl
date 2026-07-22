import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { APP, HERO_IMAGE, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Master Royale for PC – BlueStacks & LDPlayer Guide",
  description:
    "Play Master Royale on PC with Android emulators like BlueStacks or LDPlayer. Requirements, install steps, and tips for the Clash Royale-style private server APK.",
  keywords: [
    "Master Royale for PC",
    "Master Royale BlueStacks",
    "Master Royale LDPlayer",
    "Master Royale emulator",
    "Clash Royale private server PC",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/master-royale-for-pc`,
  },
  openGraph: {
    title: "Master Royale for PC – BlueStacks & LDPlayer Guide",
    description:
      "Run Master Royale APK on Windows or macOS using popular Android emulators. Clear steps and performance tips.",
    url: `${SITE_ORIGIN}/master-royale-for-pc`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: HERO_IMAGE, width: 1024, height: 1024, alt: "Master Royale for PC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royale for PC – Emulator Guide",
    description: "Install Master Royale on PC via BlueStacks or LDPlayer with this walkthrough.",
    images: [HERO_IMAGE],
  },
};

export default function MasterRoyaleForPcPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/master-royale-for-pc#webpage`,
        url: `${SITE_ORIGIN}/master-royale-for-pc`,
        name: "Master Royale for PC – BlueStacks & LDPlayer Guide",
        description: "How to play Master Royale private server on PC using Android emulators.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "HowTo",
        name: "Play Master Royale on PC with an Android emulator",
        description: "Install BlueStacks or LDPlayer, then sideload the Master Royale APK.",
        totalTime: "PT20M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Install an Android emulator",
            text: "Download BlueStacks, LDPlayer, or a similar Android emulator for your PC and complete setup.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download Master Royale APK",
            text: `Get the free APK from ${SITE_ORIGIN}/download-master-royale#apk-download.`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Sideload the APK",
            text: "Drag the APK into the emulator window or use the Install APK button.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Launch and register",
            text: "Open Master Royale inside the emulator and create a private-server account.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="pc-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "PC Version" },
            ]}
          />

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Royale for PC
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Run the Master Royale private server APK on Windows or macOS through an Android
              emulator — bigger screen, mouse aiming, and keyboard macros if your emulator allows them.
            </p>
          </header>

          <div className="flex justify-center mb-10">
            <Image
              src="/master-royale.webp"
              alt="Master Royale for PC via Android emulator"
              title="Master Royale PC version guide"
              width={220}
              height={220}
              className="object-contain"
              priority
            />
          </div>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">
              Why Play Master Royale on a PC Emulator?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Emulators mirror Android on your computer so the same{" "}
                <Link href="/download-master-royale" className="text-accent hover:underline">
                  Master Royale APK
                </Link>{" "}
                runs without a phone. Many players prefer PC for longer sessions, clearer card
                visibility, and cooler thermals than mid-range handsets.
              </p>
              <p>
                This is still the unofficial private-server client — not a native Steam build and not
                an official Supercell PC release. Progress lives on the third-party server you join.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">
              Suggested PC Requirements
            </h2>
            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Windows 10/11 or a modern macOS release that your emulator supports</li>
              <li>At least 8 GB RAM (16 GB preferred for smooth 60 FPS)</li>
              <li>Multi-core CPU; dedicated GPU helps when running high FPS modes</li>
              <li>5 GB+ free disk space for the emulator image plus the {APP.fileSize} APK and cache</li>
              <li>Stable broadband — private servers need a continuous connection</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">
              Step-by-Step: BlueStacks or LDPlayer Style Setup
            </h2>
            <ol className="space-y-5 text-gray-300 list-decimal list-inside leading-relaxed">
              <li>
                <strong className="text-white">Install the emulator.</strong> Download BlueStacks,
                LDPlayer, or a comparable Android emulator from its official site and finish the first-run
                wizard.
              </li>
              <li>
                <strong className="text-white">Grab Master Royale.</strong> On the same PC, open{" "}
                <Link href="/download-master-royale#apk-download" className="text-accent hover:underline">
                  Download Master Royale
                </Link>{" "}
                and save the APK ({APP.version}).
              </li>
              <li>
                <strong className="text-white">Sideload the package.</strong> Drag the APK onto the
                emulator window, or use the built-in “Install APK” / “Plus” button and browse to the file.
              </li>
              <li>
                <strong className="text-white">Launch the game.</strong> Open Master Royale from the
                emulator home screen, create a private-server account, and select Vanilla or Infinity.
              </li>
              <li>
                <strong className="text-white">Tune performance.</strong> In emulator settings, allocate
                2–4 CPU cores, 3–4 GB RAM, and enable high FPS if your hardware allows.
              </li>
            </ol>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-6">PC Emulator Tips</h2>
            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Map elixir-heavy cards to keyboard shortcuts for faster cycle plays.</li>
              <li>Close Chrome tabs and background games so the emulator keeps CPU priority.</li>
              <li>Use a wired connection when possible; Wi-Fi packet loss hurts tower races.</li>
              <li>Keep the emulator’s Android image updated, then reinstall Master Royale if the server bumps its client version.</li>
              <li>
                Read safety notes on the{" "}
                <Link href="/" className="text-accent hover:underline">
                  homepage
                </Link>{" "}
                — never reuse official Clash Royale passwords inside the emulator.
              </li>
            </ul>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFC107] mb-4">
              Common Emulator Problems
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Black screen:</strong> Restart the emulator with
                compatibility / OpenGL mode toggled, or lower resolution.
              </p>
              <p>
                <strong className="text-white">APK won’t install:</strong> Confirm the download finished
                at {APP.fileSize} and that the emulator Android version meets {APP.os}.
              </p>
              <p>
                <strong className="text-white">Lag spikes:</strong> Cap FPS, disable unnecessary
                emulator plugins, and ensure virtualization (VT-x / AMD-V) is enabled in BIOS when
                available.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-4 text-center border border-[#FFC107]/30">
            <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Get the APK for Your Emulator</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Download from {SITE_DOMAIN}, then drop the file into BlueStacks or LDPlayer.
            </p>
            <DownloadButton />
          </section>
        </div>
      </article>
    </>
  );
}
