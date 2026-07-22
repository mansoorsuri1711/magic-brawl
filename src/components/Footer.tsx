import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { DOWNLOAD_APK_URL, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export default async function Footer() {
  const t = await getTranslations('Footer');
  const tn = await getTranslations('Nav');

  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE_NAME}</h2>
            <p className="text-sm text-gray-300 mb-4">{t('aboutText')}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">{t('quickLinks')}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('home')}
                </Link>
              </li>
              <li>
                <Link href="/download-master-royale" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('download')}
                </Link>
              </li>
              <li>
                <Link href="/vanilla-vs-infinity" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('compare')}
                </Link>
              </li>
              <li>
                <Link href="/master-royale-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('pc')}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">{t('resources')}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/download-master-royale" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('installGuide')}
                </Link>
              </li>
              <li>
                <Link href="/vanilla-vs-infinity" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('compare')}
                </Link>
              </li>
              <li>
                <Link href="/master-royale-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  {tn('pc')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  {t('disclaimer')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">{t('downloadApp')}</h2>
            <p className="text-sm text-gray-300 mb-4">{t('downloadAppText')}</p>
            <a
              href={DOWNLOAD_APK_URL}
              aria-label={tn('downloadNow')}
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span>{tn('downloadNow')}</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            {t('copyright')} |{' '}
            <Link href="/" className="hover:text-accent">
              {SITE_ORIGIN.replace('https://', '')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
