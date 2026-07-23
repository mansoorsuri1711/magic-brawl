'use client';

import { useTranslations } from 'next-intl';
import { DOWNLOAD_APK_URL } from '@/lib/site';

export default function DownloadButton({
  className = '',
  label,
}: {
  className?: string;
  label?: string;
}) {
  const t = useTranslations('Nav');
  const text = label ?? t('downloadNow');

  return (
    <a
      href={DOWNLOAD_APK_URL}
      aria-label={text}
      className={`download-btn relative inline-flex items-center px-8 py-4 text-ink font-semibold text-lg rounded-full border-2 border-sky bg-white hover:bg-sky/10 shadow-sm transition-all group ${className}`}
    >
      <span>{text}</span>
      <div className="download-icon ml-3 bg-[#f97316] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );
}
