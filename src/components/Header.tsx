'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import MobileNavigation from './MobileNavigation';
import { SITE_NAME } from '@/lib/site';

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
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl py-3 px-4 md:px-8 border-b border-slate-200/70 shadow-[0_8px_30px_rgba(6,20,40,0.08)] supports-[backdrop-filter]:bg-white/75">
        <div className="container mx-auto flex justify-between items-center gap-3">
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/magic-brawl.webp"
                alt={`${SITE_NAME} Logo`}
                width={40}
                height={40}
                className="object-contain w-10 h-10"
                priority
                fetchPriority="high"
              />
            </div>
            <span className="font-display text-ink text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-accent">Magic</span> Brawl
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-colors pb-1 group uppercase text-sm tracking-wide ${
                  isActive(href) ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                    isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </header>
      {/* Spacer so page content is not hidden under the fixed header */}
      <div className="h-[4.25rem]" aria-hidden="true" />
    </>
  );
}
