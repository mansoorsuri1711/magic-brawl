import { DOWNLOAD_APK_URL } from '@/lib/site';

export default function DownloadButton({
  className = '',
  label = 'DOWNLOAD NOW',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={DOWNLOAD_APK_URL}
      aria-label="Download Master Royale APK for Android"
      className={`download-btn relative inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group ${className}`}
    >
      <span>{label}</span>
      <div className="download-icon ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );
}
