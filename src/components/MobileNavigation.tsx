'use client';

import { useState, useEffect, useTransition, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { APP, DOWNLOAD_APK_URL, SITE_NAME } from '@/lib/site';

type NavItem = {
  href: '/' | '/download-master-royale' | '/vanilla-vs-infinity' | '/master-royale-for-pc' | '/about-us' | '/contact-us';
  label: string;
  icon: React.ReactNode;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-400" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

function MenuButton({ onClick, isOpen }: { onClick: () => void; isOpen?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-accent p-1"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}

export default function MobileNavigation() {
  const t = useTranslations('Nav');
  const { isOpen, setIsOpen } = useMobileMenu();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  const navSections: NavSection[] = useMemo(
    () => [
      {
        title: t('main'),
        items: [
          {
            href: '/',
            label: t('home'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            ),
          },
          {
            href: '/download-master-royale',
            label: t('download'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            ),
          },
        ],
      },
      {
        title: t('guides'),
        items: [
          {
            href: '/vanilla-vs-infinity',
            label: t('compare'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
            ),
          },
          {
            href: '/master-royale-for-pc',
            label: t('pc'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            ),
          },
          {
            href: '/download-master-royale',
            label: t('installGuide'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.493a2.54 2.54 0 0 0-1.835-1.835l-2.496-.496" />
              </svg>
            ),
          },
        ],
      },
      {
        title: t('info'),
        items: [
          {
            href: '/about-us',
            label: t('about'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            ),
          },
          {
            href: '/contact-us',
            label: t('contact'),
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            ),
          },
        ],
      },
    ],
    [t]
  );

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    startTransition(() => setIsOpen(!isOpen));
  };

  const closeMenu = () => {
    startTransition(() => setIsOpen(false));
  };

  if (!mounted) {
    return (
      <div className="md:hidden">
        <MenuButton onClick={() => {}} />
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <MenuButton onClick={toggleMenu} isOpen={isOpen} />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex justify-between items-center px-5 py-4 border-b border-slate-200">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/master-royale-apk-logo.webp"
                  alt={`${SITE_NAME} Logo`}
                  fill
                  sizes="36px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display text-ink text-lg font-bold tracking-tight">
                <span className="text-accent">Master</span> Royale
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-ink hover:bg-slate-200 transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto">
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-sky" aria-hidden="true" />

            <nav className="px-5 py-2 pb-6">
              {navSections.map((section) => (
                <div key={section.title} className="mb-2">
                  <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase px-1 pt-5 pb-2">
                    {section.title}
                  </p>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <li key={item.href + item.label}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`flex items-center gap-4 px-1 py-3.5 transition-colors group ${
                              active ? 'text-accent' : 'text-ink hover:text-accent'
                            }`}
                          >
                            <span
                              className={`transition-colors flex-shrink-0 ${
                                active ? 'text-accent' : 'text-slate-500 group-hover:text-accent'
                              }`}
                            >
                              {item.icon}
                            </span>
                            <span className="flex-1 text-[15px] font-medium">{item.label}</span>
                            <ChevronRight />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="px-5 pt-4 pb-8 border-t border-slate-200 flex flex-col items-center">
            <a
              href={DOWNLOAD_APK_URL}
              onClick={closeMenu}
              aria-label={t('downloadNow')}
              className="download-btn inline-flex items-center px-8 py-4 text-ink font-semibold text-lg rounded-full border-2 border-sky bg-white hover:bg-sky/10 shadow-sm transition-all group"
            >
              <span>{t('downloadNow')}</span>
              <div className="download-icon ml-3 bg-[#f97316] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
            <p className="text-center text-slate-500 text-xs mt-3">
              {APP.fileSizeShort} · {APP.os} · {APP.version}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
