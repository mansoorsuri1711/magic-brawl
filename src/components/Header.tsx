'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import MobileNavigation from './MobileNavigation';
import { DOWNLOAD_APK_URL, SITE_NAME } from '@/lib/site';

export default function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/magic-brawl-apk-indir' as const, label: t('download') },
    { href: '/magic-brawl-ios-indir' as const, label: t('ios') },
    { href: '/magic-brawl-pc' as const, label: t('pc') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/hakkimizda' as const, label: t('about') },
    { href: '/iletisim' as const, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <div className="pointer-events-none fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <header className="pointer-events-auto mx-auto max-w-7xl rounded-full border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(6,20,40,0.10)]">
          <div className="flex items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:gap-4 md:px-5">
            <div className="flex min-w-0 items-center gap-2 md:gap-6 lg:gap-8">
              <Link href="/" className="flex shrink-0 items-center gap-2.5">
                <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-secondary ring-1 ring-slate-200 sm:h-10 sm:w-10">
                  <Image
                    src="/magic-brawl.webp"
                    alt={`${SITE_NAME} Logo`}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 sm:w-9 sm:h-9"
                    priority
                    fetchPriority="high"
                  />
                </span>
                <span className="font-display text-ink text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
                  <span className="text-accent">Magic</span> Brawl
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive(href)
                        ? 'bg-slate-100 text-ink font-semibold'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-ink'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={DOWNLOAD_APK_URL}
                aria-label={t('downloadNow')}
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 md:px-5 md:py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-95 hover:shadow-md whitespace-nowrap"
              >
                {t('downloadNow')}
              </a>
              <div className="lg:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Spacer for floating pill header (top inset + bar height) */}
      <div className="h-[5.25rem] sm:h-[5.5rem]" aria-hidden="true" />
    </>
  );
}
