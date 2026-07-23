import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { routing } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import {
  APP,
  HERO_IMAGE,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFFFFF",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = l === "en" ? SITE_ORIGIN : `${SITE_ORIGIN}/${l}`;
  }
  languages["x-default"] = SITE_ORIGIN;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: t("homeTitle"),
      template: `%s | ${SITE_NAME}`,
    },
    description: t("homeDescription"),
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
        { url: "/master-royale-apk-logo.ico", type: "image/x-icon", sizes: "256x256" },
        { url: "/master-royale-apk-logo.webp", type: "image/webp", sizes: "512x512" },
        { url: "/master-royale-apk.webp", type: "image/webp", sizes: "512x512" },
      ],
      apple: [{ url: "/master-royale-apk-logo.webp", sizes: "180x180" }],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    },
    alternates: {
      canonical: locale === "en" ? SITE_ORIGIN : `${SITE_ORIGIN}/${locale}`,
      languages,
    },
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: locale === "en" ? SITE_ORIGIN : `${SITE_ORIGIN}/${locale}`,
      siteName: SITE_NAME,
      locale,
      type: "website",
      images: [
        { url: OG_IMAGE, width: 512, height: 512, alt: SITE_NAME },
        {
          url: `${SITE_ORIGIN}/feature/og-image-square.webp`,
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        {
          url: `${SITE_ORIGIN}/feature/twitter-card.webp`,
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    applicationName: SITE_NAME,
    category: "Gaming",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" href="/master-royale-apk-logo.ico" type="image/x-icon" sizes="256x256" />
        <link rel="apple-touch-icon" href="/master-royale-apk-logo.webp" sizes="180x180" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${outfit.className} antialiased bg-primary text-ink min-h-screen flex flex-col`}
        style={{ minHeight: "100vh" }}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <MobileMenuProvider>
            <Header />
            <main className="relative z-10 flex-1">{children}</main>
            <DeferredStyles />
            <Footer />
            <ScrollToTopWrapper />
          </MobileMenuProvider>
          <WebVitalsTracker />
        </NextIntlClientProvider>

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
