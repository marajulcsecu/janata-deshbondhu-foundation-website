import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { ArrowUp, Share2, MapPin } from 'lucide-react';

export const Footer = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-950 text-stone-300 pt-16 pb-12 border-t-2 border-gold-500/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo.jpeg"
                alt="Logo"
                className="w-11 h-11 rounded-full border-2 border-gold-400 object-cover"
              />
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">
                  {t.orgName}
                </h3>
                <p className="text-xs text-gold-300 font-medium">
                  {isBn ? 'ফুলবাড়ী, দিনাজপুর, বাংলাদেশ • স্থাপিত: ২০২৬' : 'Phulbari, Dinajpur, Bangladesh • Est. 2026'}
                </p>
              </div>
            </div>

            <p className="text-stone-300 text-sm max-w-md leading-relaxed">
              {t.tagline}
            </p>

            {/* Collaborator Sticker Pill in Footer */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-brand-900/90 border border-gold-500/40 text-xs text-gold-200">
              <img
                src={foundationConfig.collaboratorSticker}
                alt="Mononshil Brand Sticker"
                className="w-6 h-6 object-contain"
              />
              <span>
                {isBn ? 'সহযোগিতায়: ' : 'In Collaboration with: '}
                <strong className="text-white">{isBn ? 'মননশীল ইন্টারন্যাশনাল' : 'Mononshil International'}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-300 bg-brand-900/50 border border-brand-800 px-3 py-1.5 rounded-lg w-fit">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.legal}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gold-300 tracking-wide uppercase">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  {nav.about}
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-gold-300 transition-colors">
                  {nav.notices}
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-gold-300 transition-colors">
                  {nav.activities}
                </a>
              </li>
              <li>
                <a href="#blood-donation" className="hover:text-gold-300 transition-colors">
                  {nav.blood}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">
                  {nav.gallery}
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:text-gold-300 transition-colors">
                  {nav.donate}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Emergency Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gold-300 tracking-wide uppercase">
              {isBn ? 'সোশ্যাল মিডিয়া ও যোগাযোগ' : 'Social & Contact'}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={foundationConfig.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-300 hover:text-gold-300 transition-colors"
              >
                <Share2 className="w-4 h-4 text-gold-400" />
                <span>{isBn ? 'অফিসিয়াল ফেসবুক পেজ' : 'Official Facebook Page'}</span>
              </a>
              <p className="text-stone-400 font-mono text-xs pt-2">
                {isBn ? 'হটলাইন: ০১৩৪০২৩২৯৭৯, ০১৭৮০৫৫৫৭৩২' : 'Hotline: 01340232979, 01780555732'}
              </p>
              <p className="text-stone-400 font-mono text-xs">
                {isBn ? 'বিকাশ: ০১৭৮৬৭৪৩৮০২' : 'bKash: 01786743802'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {new Date().getFullYear()} {t.orgName}. {t.rights}
          </div>

          <div className="flex items-center gap-4">
            <span>{t.developedFor}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-brand-900 hover:bg-brand-800 border border-gold-500/40 text-gold-300 hover:text-white transition-colors"
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
