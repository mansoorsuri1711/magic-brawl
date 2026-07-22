import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Master Royale APK 2026 – Free Download for Android",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download Master Royale APK 2026 free for Android. Play Clash Royale private server with unlimited gems, gold, unlocked cards, Vanilla & Infinity modes. Fast install guide.",
  keywords: [
    "Master Royale",
    "Master Royale APK",
    "Master Royale download",
    "Master Royale private server",
    "Master Royale Infinity",
    "Clash Royale private server",
    "Master Royale Android",
    "unlimited gems Master Royale",
    "Master Royale 2026",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/master-royale-logo.webp", type: "image/webp", sizes: "192x192" },
      { url: "/master-royale.webp", type: "image/webp", sizes: "1024x1024" },
    ],
    apple: [{ url: "/master-royale-logo.webp", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "Master Royale APK 2026 – Free Download for Android",
    description:
      "Download Master Royale APK free. Clash Royale private server with unlimited gems, gold, unlocked cards, and Infinity mode.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Master Royale APK Download",
      },
      {
        url: `${SITE_ORIGIN}/feature/og-image-square.webp`,
        width: 800,
        height: 800,
        alt: "Master Royale APK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royale APK 2026 – Free Download for Android",
    description:
      "Download Master Royale APK free. Clash Royale private server with unlimited gems, gold, and unlocked cards.",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/twitter-card.webp`,
        width: 1200,
        height: 600,
        alt: "Master Royale APK Download",
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Gaming",
  classification: "Android Game APK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/master-royale-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/master-royale.webp" type="image/webp" sizes="1024x1024" />
        <link rel="apple-touch-icon" href="/master-royale-logo.webp" sizes="180x180" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_ORIGIN,
              logo: LOGO_IMAGE,
              description:
                "Master Royale APK download hub for the Clash Royale private server on Android.",
            }),
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE_NAME,
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              image: HERO_IMAGE,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: APP.ratingValue,
                bestRating: "5",
                ratingCount: APP.ratingCount,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
