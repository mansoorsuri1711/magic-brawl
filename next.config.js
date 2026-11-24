const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // English / old Magic Brawl paths → Turkish slugs
      {
        source: '/download-magic-brawl',
        destination: '/magic-brawl-apk-indir',
        permanent: true,
      },
      {
        source: '/magic-brawl-for-pc',
        destination: '/magic-brawl-pc',
        permanent: true,
      },
      {
        source: '/magic-brawl-ios',
        destination: '/magic-brawl-ios-indir',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/hakkimizda',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/hakkimizda',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/gizlilik-politikasi',
        permanent: true,
      },
      {
        source: '/disclaimer',
        destination: '/sorumluluk-reddi',
        permanent: true,
      },
      {
        source: '/blog/magic-brawl-vs-nulls-brawl',
        destination: '/blog/magic-brawl-nulls-brawl-farki',
        permanent: true,
      },
      {
        source: '/blog/magic-brawl-pin-voucher-rehberi',
        destination: '/blog/hileli-brawl-stars-2026',
        permanent: true,
      },
      {
        source: '/blog/magic-brawl-season-23-starr-toon',
        destination: '/blog/eski-brawl-stars-apk',
        permanent: true,
      },
      // Legacy Master Royale paths
      {
        source: '/download-master-royale',
        destination: '/magic-brawl-apk-indir',
        permanent: true,
      },
      {
        source: '/master-royale-for-pc',
        destination: '/magic-brawl-pc',
        permanent: true,
      },
      {
        source: '/vanilla-vs-infinity',
        destination: '/magic-brawl-ios-indir',
        permanent: true,
      },
      // Former multi-language prefixes → Turkish-only URLs
      {
        source: '/:locale(en|fr|es|pt|de|it|tr)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|es|pt|de|it|tr)/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Immutable cache only for fingerprinted static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = withNextIntl(nextConfig) 