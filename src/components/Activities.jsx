import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { 
  BookOpen, 
  Droplet, 
  Trees, 
  Briefcase, 
  Award, 
  HandHeart, 
  ArrowUpRight 
} from 'lucide-react';

export const Activities = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].activities;

  const activityIcons = {
    1: <BookOpen className="w-4 h-4 text-brand-800" />,
    2: <Droplet className="w-4 h-4 text-rose-600 fill-rose-600" />,
    3: <Trees className="w-4 h-4 text-emerald-700" />,
    4: <Briefcase className="w-4 h-4 text-blue-700" />,
    5: <Award className="w-4 h-4 text-gold-600" />,
    6: <HandHeart className="w-4 h-4 text-rose-700" />,
  };

  return (
    <section id="activities" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-800 text-gold-300 border border-gold-400/50 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Activities Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gold-300/60 bg-ivory-50/60 hover:bg-white hover:border-gold-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-stone-200 border-b border-gold-200/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-900/90 text-gold-200 border border-gold-400/50 shadow-xs backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gold-300/60 flex items-center justify-center shadow-2xs">
                      {activityIcons[item.id]}
                    </div>
                    <span className="text-xs font-bold text-brand-800 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-800 transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* View Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={item.id === 2 ? '#blood-donation' : foundationConfig.facebookPage}
                  target={item.id === 2 ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 transition-colors"
                >
                  <span>
                    {item.id === 2
                      ? isBn
                        ? 'রক্তদান কেন্দ্রে যান'
                        : 'Go to Blood Donation Hub'
                      : isBn
                      ? 'ফেসবুকে কার্যক্রম দেখুন'
                      : 'View on Facebook'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
