'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import MobileNavigation from './MobileNavigation';
import LanguageSwitcher from './LanguageSwitcher';
import { SITE_NAME } from '@/lib/site';

export default function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/download-master-royale' as const, label: t('download') },
    { href: '/vanilla-vs-infinity' as const, label: t('compare') },
    { href: '/master-royale-for-pc' as const, label: t('pc') },
    { href: '/about-us' as const, label: t('about') },
    { href: '/contact-us' as const, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-slate-200/80 shadow-sm">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/master-royale-apk-logo.webp"
              alt={`${SITE_NAME} Logo`}
              width={40}
              height={40}
              className="object-contain w-10 h-10"
              priority
              fetchPriority="high"
            />
          </div>
          <span className="font-display text-ink text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-accent">Master</span> Royale
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
