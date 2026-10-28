import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { ArrowUp, Heart, Share2, MapPin } from 'lucide-react';

export const Footer = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-stone-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo.jpeg"
                alt="Logo"
                className="w-10 h-10 rounded-full border-2 border-brand-500 object-cover"
              />
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">
                  {t.orgName}
                </h3>
                <p className="text-xs text-stone-400">
                  {isBn ? 'ফুলবাড়ী, দিনাজপুর, বাংলাদেশ' : 'Phulbari, Dinajpur, Bangladesh'}
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-sm max-w-md leading-relaxed">
              {t.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-3 py-1.5 rounded-lg w-fit">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.legal}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {nav.about}
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">
                  {nav.notices}
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors">
                  {nav.activities}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {nav.gallery}
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:text-white transition-colors">
                  {nav.donate}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              {isBn ? 'সোশ্যাল মিডিয়া' : 'Social Media'}
            </h4>
            <div className="space-y-2.5">
              <a
                href={foundationConfig.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4 text-blue-400" />
                <span>{isBn ? 'অফিসিয়াল ফেসবুক পেজ' : 'Official Facebook Page'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} {t.orgName}. {t.rights}
          </div>

          <div className="flex items-center gap-4">
            <span>{t.developedFor}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-stone-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
