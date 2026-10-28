import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { 
  BookOpen, 
  Briefcase, 
  Award, 
  Trees, 
  HandHeart, 
  Laptop, 
  ArrowUpRight 
} from 'lucide-react';

export const Activities = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].activities;

  const activityIcons = {
    1: <BookOpen className="w-4 h-4 text-brand-700" />,
    2: <Briefcase className="w-4 h-4 text-blue-700" />,
    3: <Award className="w-4 h-4 text-amber-700" />,
    4: <Trees className="w-4 h-4 text-emerald-700" />,
    5: <HandHeart className="w-4 h-4 text-rose-700" />,
    6: <Laptop className="w-4 h-4 text-indigo-700" />,
  };

  return (
    <section id="activities" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
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
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-stone-800 shadow-sm backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center">
                      {activityIcons[item.id]}
                    </div>
                    <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
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

              {/* View On Facebook Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={foundationConfig.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  <span>{isBn ? 'ফেসবুকে কার্যক্রম দেখুন' : 'View on Facebook'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
