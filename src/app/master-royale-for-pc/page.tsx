import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { APP, HERO_IMAGE, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Master Royale for PC – BlueStacks Emulator Guide",
  description:
    "Play Master Royale on PC with Android emulators like BlueStacks. Windows requirements, VT-x setup, APK drag-drop install, keyboard mapping tips, and troubleshooting.",
  keywords: [
    "Master Royale for PC",
    "Master Royale BlueStacks",
    "Master Royale emulator",
    "Master Royale Windows",
    "Clash Royale private server PC",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/master-royale-for-pc`,
  },
  openGraph: {
    title: "Master Royale for PC – BlueStacks Emulator Guide",
    description:
      "Run Master Royale APK on Windows using popular Android emulators. Clear steps, requirements, and performance tips.",
    url: `${SITE_ORIGIN}/master-royale-for-pc`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: HERO_IMAGE, width: 512, height: 512, alt: "Master Royale for PC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royale for PC – Emulator Guide",
    description: "Install Master Royale on PC via BlueStacks with this walkthrough.",
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
        name: "Master Royale for PC – BlueStacks Emulator Guide",
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
        description:
          "Deploy BlueStacks with virtualization enabled, download the Master Royale APK from masterroyaleapk.com, drag-drop install, and map keyboard controls.",
        totalTime: "PT20M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Deploy an Android emulator",
            text: "Install BlueStacks (or a similar emulator) on Windows. Enable VT-x or AMD-V in BIOS if the installer prompts for hardware virtualization.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download Master Royale APK from this site",
            text: `Get the free APK (${APP.version}, ${APP.fileSize}) from ${SITE_ORIGIN}/download-master-royale#apk-download.`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Drag-drop install the APK",
            text: "Drag the APK onto the emulator window or use the Install APK button and browse to the file.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Configure keyboard mapping",
            text: "Open the emulator’s controls editor and map keys to card slots / elixir plays, then launch Master Royale and create a private-server account.",
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
              Run the Master Royale private server APK on Windows through an Android emulator —
              steadier FPS, cooler thermals than a phone, and keyboard overlays for faster card
              cycles.
            </p>
          </header>

          <div className="flex justify-center mb-10">
            <Image
              src="/master-royale-apk.webp"
              alt="Master Royale for PC via Android emulator"
              title="Master Royale PC version guide"
              width={220}
              height={220}
              className="object-contain"
              priority
            />
          </div>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">
              Why Play Master Royale on PC?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Emulators mirror Android on your computer so the same{" "}
                <Link href="/download-master-royale" className="text-accent hover:underline">
                  Master Royale APK
                </Link>{" "}
                runs without a phone. Players choose PC for higher, more consistent FPS during tower
                races, longer sessions without draining a handset battery, and keyboard overlays that
                map each card slot to a key.
              </p>
              <p>
                This is still the unofficial private-server client — not a native Steam build and not
                an official Supercell PC release. Progress lives on the third-party server you join.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">
              Windows Requirements
            </h2>
            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Windows 11 preferred (Windows 10 remains widely supported by major emulators)</li>
              <li>RAM: 8–16 GB (16 GB feels smoother when Chrome and Discord stay open)</li>
              <li>CPU: Intel Core i3 8th generation / AMD Ryzen 3000 series or better</li>
              <li>SSD strongly recommended for emulator boot and APK install speed</li>
              <li>
                Free disk space for the emulator image plus the {APP.fileSize} APK and cache (plan for
                several GB total — not hundreds of GB)
              </li>
              <li>Hardware virtualization (VT-x / AMD-V) enabled in BIOS for BlueStacks performance</li>
              <li>Stable broadband — private servers need a continuous connection</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">
              Step-by-Step: Deploy, Install, Map Controls
            </h2>
            <ol className="space-y-5 text-gray-300 list-decimal list-inside leading-relaxed">
              <li>
                <strong className="text-white">Deploy an emulator.</strong> Install BlueStacks (or a
                comparable Android emulator) from its official site. If the setup wizard complains
                about virtualization, reboot into BIOS/UEFI and enable Intel VT-x or AMD-V, then
                finish first-run.
              </li>
              <li>
                <strong className="text-white">Download the APK from this site.</strong> On the same
                PC, open{" "}
                <Link
                  href="/download-master-royale#apk-download"
                  className="text-accent hover:underline"
                >
                  Download Master Royale
                </Link>{" "}
                and save the package ({APP.version}, {APP.fileSize}). Stick to {SITE_DOMAIN} so you do
                not mix random forks.
              </li>
              <li>
                <strong className="text-white">Drag-drop install.</strong> Drag the APK onto the
                emulator window, or use the built-in “Install APK” / “Plus” button and browse to the
                file. Wait until the package finishes installing.
              </li>
              <li>
                <strong className="text-white">Configure keyboard mapping for card slots.</strong> Open
                the emulator’s controls / keymapping editor. Assign keys to each of the four card
                slots (and optional elixir-cycle macros if you use them). Save the profile, launch
                Master Royale, create a private-server account, and pick Vanilla or Infinity.
              </li>
            </ol>
            <p className="text-gray-400 text-sm mt-6">
              After install, allocate 2–4 CPU cores and 3–4 GB RAM in emulator settings, and enable
              high FPS only if your hardware stays cool.
            </p>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-6">PC Emulator Tips</h2>
            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Map elixir-heavy cards to nearby keys so cycle plays stay muscle-memory fast.</li>
              <li>Close heavy browser tabs and background games so the emulator keeps CPU priority.</li>
              <li>Use a wired connection when possible; Wi-Fi packet loss hurts tower races.</li>
              <li>
                Keep the emulator’s Android image updated, then reinstall Master Royale if the server
                bumps its client toward {APP.version} / {APP.versionAlt}.
              </li>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#FDB402] mb-4">
              Troubleshooting on PC
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Black screen:</strong> Restart the emulator with
                compatibility / OpenGL mode toggled, or lower resolution.
              </p>
              <p>
                <strong className="text-white">APK won’t install:</strong> Confirm the download finished
                at {APP.fileSize} and that the emulator Android version meets {APP.os}. Re-download
                from {SITE_DOMAIN} if the file looks truncated.
              </p>
              <p>
                <strong className="text-white">Lag spikes:</strong> Cap FPS, disable unnecessary
                emulator plugins, and ensure VT-x / AMD-V is actually enabled. Close other
                virtualization tools that fight for Hyper-V resources.
              </p>
              <p>
                <strong className="text-white">Connection / version mismatch:</strong> Private servers
                sometimes reject older clients. Install the latest APK from this site, clear the app
                cache inside the emulator, and avoid stacking multiple private-server APKs that
                conflict.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 mb-4 text-center border border-[#FDB402]/30">
            <h2 className="text-2xl font-bold text-[#FDB402] mb-4">Get the APK for Your Emulator</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Download from {SITE_DOMAIN}, then drop the file into BlueStacks or your preferred
              emulator.
            </p>
            <DownloadButton />
          </section>
        </div>
      </article>
    </>
  );
}
