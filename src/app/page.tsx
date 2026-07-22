import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import DownloadButton from "@/components/DownloadButton";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SUPPORT_EMAIL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Master Royale APK 2026 – Free Download Private Server",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download Master Royale APK free for Android. Clash Royale-style private server with unlimited gems, gold, unlocked cards, Vanilla & Infinity modes. Install guide, PC emulator tips & FAQ.",
  keywords: [
    "Master Royale",
    "Master Royale APK",
    "Master Royale download",
    "Master Royale private server",
    "Master Royale Infinity",
    "Master Royale Vanilla",
    "Clash Royale private server",
    "Master Royale Android",
    "unlimited gems Master Royale",
    "Master Royale 2026",
    "Master Royale APK download",
    "Master Royale for PC",
  ],
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "Master Royale APK 2026 – Free Download Private Server",
    description:
      "Free Master Royale APK for Android. Private server with unlimited gems & gold, Vanilla and Infinity modes. Fast install guide on masterroyaleapk.com.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1024,
        height: 1024,
        alt: "Master Royale APK – Clash Royale private server for Android",
      },
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Master Royale – Free APK Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royale APK 2026 – Free Download Private Server",
    description:
      "Download Master Royale APK free. Unlimited gems, gold, Vanilla & Infinity on a Clash Royale-style private server.",
    images: [HERO_IMAGE, OG_IMAGE],
  },
};

const FAQS = [
  {
    q: "What is Master Royale?",
    a: "Master Royale is a free Clash Royale-style private server / mod APK for Android. It lets you play arena battles with server-side resources such as unlimited gems and gold, unlocked cards, and two popular modes: Vanilla and Infinity. It is not affiliated with Supercell and is not a real-money earning app.",
  },
  {
    q: "How do I download Master Royale APK?",
    a: "Open masterroyaleapk.com, go to the Download Master Royale page, tap DOWNLOAD NOW, save the APK, enable Install unknown apps for your browser or file manager, then open the file and install. Full steps are on /download-master-royale.",
  },
  {
    q: "What is the difference between Vanilla and Infinity?",
    a: "Vanilla keeps gameplay closer to classic ladder rules with boosted resources. Infinity focuses on heavily unlocked decks, faster progression, and experimental card access so you can try almost every combination without long grinding.",
  },
  {
    q: "Is Master Royale free?",
    a: "Yes. The Master Royale APK listed on this site is free to download (price 0). In-game gems and gold on the private server are provided by the modded environment — this is not a cash-out or JazzCash-style earning product.",
  },
  {
    q: "Does Master Royale work on PC?",
    a: "Yes. Install an Android emulator such as BlueStacks or LDPlayer, then install the same Master Royale APK inside the emulator. See our Master Royale for PC guide for requirements and tips.",
  },
  {
    q: "Is Master Royale safe to install?",
    a: "Only install the APK from trusted informational pages like masterroyaleapk.com, keep Unknown Sources limited to the installer you use, and never share your main Supercell ID password. Private servers are third-party software — use a separate account and read our Disclaimer.",
  },
  {
    q: "What Android version does Master Royale need?",
    a: `Master Royale requires ${APP.os}. The current package size is about ${APP.fileSize} and the listed version is ${APP.version}.`,
  },
  {
    q: "Can I use my official Clash Royale account?",
    a: "No. Master Royale runs on a separate private server. Create a new login inside the mod APK. Do not enter your official Clash Royale / Supercell credentials on third-party servers.",
  },
  {
    q: "Why won't the APK install?",
    a: `Common fixes: enable Install unknown apps, free storage above 500 MB, download the full ${APP.fileSize} file again, and temporarily disable aggressive antivirus blocks that quarantine sideloaded APKs. See the troubleshooting section on this page.`,
  },
  {
    q: "How do I contact Master Royale support on this site?",
    a: `For questions about this informational website (guides, broken links, privacy), email ${SUPPORT_EMAIL} or visit the Contact Us page. In-game private-server issues are handled by the third-party server operators, not Supercell.`,
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "Master Royale APK download hub — Clash Royale-style private server guides for Android and PC emulators.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Master Royale APK 2026 – Free Download Private Server",
        description:
          "Download Master Royale APK free for Android. Private server with unlimited gems, gold, Vanilla & Infinity modes.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#software` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#what-is-master-royale",
            "#vanilla-vs-infinity",
            "#features",
            "#how-to-download-install",
            "#faq",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: HERO_IMAGE,
          width: 1024,
          height: 1024,
          name: SITE_NAME,
          description:
            "Master Royale APK – Clash Royale private server brand image for Android download.",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${HERO_IMAGE}#primary`,
        url: HERO_IMAGE,
        contentUrl: HERO_IMAGE,
        name: SITE_NAME,
        description:
          "Master Royale – free Clash Royale-style private server APK with Vanilla and Infinity modes.",
        width: 1024,
        height: 1024,
        ...imageObjectLicensing,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: LOGO_IMAGE,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: `${SITE_NAME} logo`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_ORIGIN}/#software`,
        name: APP.name,
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        image: HERO_IMAGE,
        logo: LOGO_IMAGE,
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
        downloadUrl: `${SITE_ORIGIN}/download-master-royale#apk-download`,
        softwareVersion: APP.version,
        fileSize: APP.fileSize,
        description:
          "Master Royale is a free Clash Royale-style private server APK for Android featuring unlimited gems and gold, unlocked cards, and Vanilla plus Infinity play modes. Informational download guides on masterroyaleapk.com.",
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
      {
        "@type": "HowTo",
        name: "How to Download and Install Master Royale APK",
        description:
          "Step-by-step guide to download and install the Master Royale private server APK on Android.",
        totalTime: "PT10M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open the download page",
            text: "Visit masterroyaleapk.com and open Download Master Royale.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download the APK",
            text: `Tap DOWNLOAD NOW and wait until the full ${APP.fileSize} file finishes saving.`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Allow unknown apps",
            text: "Enable Install unknown apps for your browser or file manager in Android settings.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Install Master Royale",
            text: "Open the APK, tap Install, then Open and create a new private-server account.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Master Royale</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#FFC107]">
                Free APK Download — Clash Royale Private Server
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">
                Master Royale
              </Link>{" "}
              is a free Android private-server APK built around Clash Royale-style arena battles.
              Grab unlimited gems and gold on the modded server, pick Vanilla or Infinity, and jump
              into ladder fights without real-money deposits. Follow the{" "}
              <Link href="/download-master-royale" className="text-accent hover:underline">
                Master Royale download guide
              </Link>{" "}
              or play on a PC emulator via our{" "}
              <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                PC version page
              </Link>
              .
            </p>

            {/* Visible rating UI matching SoftwareApplication schema */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 bg-[#0A1029] rounded-2xl px-5 py-4 border border-gray-800"
              aria-label={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCountDisplay} ratings`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#FFC107] text-xl tracking-tight" aria-hidden="true">
                  ★★★★☆
                </span>
                <span className="text-white text-2xl font-bold">{APP.ratingValue}</span>
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-white font-semibold">{APP.ratingCountDisplay}</span> ratings
                <span className="mx-2 text-gray-600">·</span>
                <span>Free · Android · Game</span>
              </div>
            </div>

            <div className="flex justify-center my-8">
              <DownloadButton />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FFC107] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP.downloadsDisplay}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FFC107] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">120K</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-[#FFC107] mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">
              *Android APK · private server / third-party mod · not affiliated with Supercell
            </p>
          </div>

          <figure
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content={SITE_NAME} />
            <meta
              itemProp="description"
              content="Master Royale APK – Clash Royale private server for Android with Vanilla and Infinity modes."
            />
            <meta itemProp="url" content={HERO_IMAGE} />
            <Image
              src="/master-royale.webp"
              alt="Master Royale APK – Clash Royale private server download"
              title="Master Royale – Free APK for Android"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
              itemProp="image"
            />
            <figcaption className="sr-only">
              Master Royale – free Clash Royale-style private server APK for Android.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="apk-details">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFC107]">Master Royale APK Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-white">{APP.name}</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-white">{APP.version}</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 font-medium text-white">File Size</td>
                  <td className="py-4 px-6 text-white">{APP.fileSize}</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-white">{APP.os}</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-white">{APP.category}</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 font-medium text-white">Package</td>
                  <td className="py-4 px-6 text-white">{APP.packageId}</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 font-medium text-white">Rating</td>
                  <td className="py-4 px-6 text-white">
                    {APP.ratingValue} / 5 ({APP.ratingCountDisplay} ratings) · Free · Android · Game
                  </td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-white">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="what-is-master-royale" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">What Is Master Royale?</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Master Royale is a community-run Clash Royale-style private server packaged as an Android
              APK. Instead of grinding seasons on the official client, you connect to a third-party
              environment where resources such as gems, gold, and card unlocks are controlled by the
              modded server. Players in Pakistan and worldwide use it to practice decks, test rare
              cards early, and enjoy faster progression — purely for fun, not for cash withdrawals.
            </p>
            <p>
              The experience still feels familiar: towers, elixir timing, three-minute battles, and
              clan-style social features depending on the live build. What changes is the economy and
              unlock pace. On Master Royale you spend less time waiting for chests and more time
              refining strategies. Always remember this project is unofficial and not endorsed by
              Supercell.
            </p>
            <p>
              On {SITE_DOMAIN} we publish clear install steps, Vanilla vs Infinity explanations, PC
              emulator tips, and safety notes so you can decide whether a private server fits your
              play style before you sideload anything.
            </p>
          </div>
        </div>
      </section>

      <section id="vanilla-vs-infinity" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Vanilla vs Infinity Modes</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Most Master Royale builds highlight two play lanes. Choosing the right one depends on
              whether you want a boosted-but-familiar ladder or a fully unlocked sandbox.
            </p>
            <h3 className="text-xl font-semibold text-white">Vanilla</h3>
            <p>
              Vanilla keeps match flow closer to classic Clash Royale rules. You still get generous
              gems and gold from the private server, but card availability and ladder structure feel
              more grounded. It is ideal if you want to practice real ladder habits with less waiting.
            </p>
            <h3 className="text-xl font-semibold text-white">Infinity</h3>
            <p>
              Infinity leans into maximum freedom: nearly every card unlocked, rapid upgrades, and
              experimental decks that would take months on the official game. Use Infinity to stress-test
              synergies, meme comps, and max-level interactions without worrying about chest cycles.
            </p>
            <p>
              Many players keep both: Vanilla for “serious” practice sessions and Infinity when they
              want chaotic fun. Mode names can vary slightly by APK build, so check the in-app server
              picker after install.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Master Royale Features Players Look For</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <span className="text-[#FFC107] font-bold">•</span>
              <span>
                <strong className="text-white">Unlimited gems &amp; gold (server-side):</strong> shop and
                upgrade loops without real-money purchases.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC107] font-bold">•</span>
              <span>
                <strong className="text-white">Unlocked card pools:</strong> try legendaries and evolving
                cards without long collection walls (especially in Infinity).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC107] font-bold">•</span>
              <span>
                <strong className="text-white">Fast arena battles:</strong> short matches focused on
                elixir timing and tower pressure.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC107] font-bold">•</span>
              <span>
                <strong className="text-white">Android + emulator support:</strong> phone install or{" "}
                <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                  Master Royale on PC
                </Link>{" "}
                via BlueStacks / LDPlayer-style emulators.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC107] font-bold">•</span>
              <span>
                <strong className="text-white">Separate private accounts:</strong> create a fresh login so
                your official Supercell ID stays untouched.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="how-to-download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">How to Download &amp; Install Master Royale</h2>
          <ol className="space-y-6 text-gray-300 list-decimal list-inside">
            <li>
              <strong className="text-white">Open the download hub.</strong> Go to{" "}
              <Link href="/download-master-royale" className="text-accent hover:underline">
                /download-master-royale
              </Link>{" "}
              on {SITE_DOMAIN}.
            </li>
            <li>
              <strong className="text-white">Tap DOWNLOAD NOW.</strong> Save the APK ({APP.fileSize},
              version {APP.version}) and wait until the transfer completes.
            </li>
            <li>
              <strong className="text-white">Allow installation from that source.</strong> In Android
              Settings → Apps → Special access → Install unknown apps, enable your browser or Files app.
            </li>
            <li>
              <strong className="text-white">Install and open.</strong> Open the downloaded APK, tap
              Install, then Open. Create a new Master Royale private-server account — never use your
              official Clash Royale password.
            </li>
          </ol>
          <div className="mt-8 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      <section id="create-account-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Create Account &amp; Log In</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              After the first launch, Master Royale usually asks you to register with a nickname, email
              or guest ID, and password defined by that private server build. Treat this as a throwaway
              gaming login. Do not recycle banking passwords or your Supercell ID.
            </p>
            <h3 className="text-xl font-semibold text-white">First-time setup tips</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Write down the server name you join (Vanilla / Infinity / seasonal shard).</li>
              <li>Enable a simple PIN on your phone so sideloaded apps are harder for others to open.</li>
              <li>If login fails, check internet, VPN interference, and whether the APK version matches the live server.</li>
            </ul>
            <p>
              Returning players tap Login, enter the same credentials, and pick the mode they used
              before. If the server wiped progress during a reset, you may need to start a fresh profile.
            </p>
          </div>
        </div>
      </section>

      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Practical Tips for Better Matches</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Unlimited resources do not replace fundamentals. Elixir counting, cycle awareness, and
              tower trading still decide most games — even when every card is unlocked.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Practice one win condition for a full session instead of swapping decks every battle.</li>
              <li>In Infinity, force yourself to play mid-ladder comps so muscle memory transfers to the official game.</li>
              <li>Watch replays when available; private servers are best used as a training gym.</li>
              <li>Keep storage free — {APP.fileSize} plus cache adds up quickly on budget Android phones common in Pakistan.</li>
              <li>Update only from this site’s download page so you do not mix incompatible APK forks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Pros &amp; Cons of Master Royale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Pros</h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-6">
                <li>Free APK with no paid storefront gate</li>
                <li>Fast card access for theory-crafting</li>
                <li>Vanilla / Infinity choice for different moods</li>
                <li>Works on many Android 5.0+ devices and emulators</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cons</h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-6">
                <li>Unofficial — progress can reset when servers update</li>
                <li>Not affiliated with Supercell; features may break</li>
                <li>Sideloading requires careful permission habits</li>
                <li>Online population varies by time zone and shard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Safety Notes Before You Sideload</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Master Royale is third-party software. Download only through the CTA on{" "}
              <Link href="/download-master-royale" className="text-accent hover:underline">
                our download page
              </Link>
              , keep “Install unknown apps” enabled only for the installer you trust, and revoke it
              afterward. Never share SMS OTPs, bank details, or official Clash Royale credentials inside
              a private-server client.
            </p>
            <p>
              This website is informational. We do not claim Master Royale replaces the official Clash
              Royale experience, and we do not promise real-money earnings. Read the{" "}
              <Link href="/disclaimer" className="text-accent hover:underline">
                Disclaimer
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              before installing.
            </p>
          </div>
        </div>
      </section>

      <section id="troubleshooting" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Troubleshooting Common Install Issues</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">APK parse error</h3>
              <p>Re-download the full file; incomplete transfers often corrupt the package.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Blocked by Play Protect</h3>
              <p>
                Sideloaded private-server APKs may trigger warnings. Review the warning carefully; only
                proceed if you intentionally installed Master Royale from this site.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">App crashes on launch</h3>
              <p>
                Free RAM, update WebView/Android System components if available, or try an emulator on{" "}
                <Link href="/master-royale-for-pc" className="text-accent hover:underline">
                  PC
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Cannot connect to server</h3>
              <p>
                Switch networks, disable conflicting VPN routes, and confirm you installed version{" "}
                {APP.version}. Private servers sometimes go offline for maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Website Support</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Need help with guides on {SITE_DOMAIN}, broken download anchors, or privacy requests? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            or open{" "}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>
            . We cover this informational site — not Supercell customer care and not every third-party
            server outage.
          </p>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC107]">Master Royale FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group bg-[#0A1029] rounded-xl border border-gray-800 open:border-[#FFC107]/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white flex justify-between items-center gap-4">
                  <span>{item.q}</span>
                  <span className="text-[#FFC107] group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="closing-cta" className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-8">
        <div className="bg-secondary rounded-xl p-8 text-center border border-[#FFC107]/30">
          <h2 className="text-3xl font-bold mb-4 text-[#FFC107]">Ready to Try Master Royale?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download the free Android APK, create a private-server account, and explore Vanilla or
            Infinity at your own pace. Prefer a bigger screen? Follow the{" "}
            <Link href="/master-royale-for-pc" className="text-accent hover:underline">
              Master Royale for PC
            </Link>{" "}
            emulator walkthrough after you grab the file.
          </p>
          <DownloadButton />
        </div>
      </section>
    </>
  );
}
