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
    1: <BookOpen className="w-5 h-5 text-brand-600" />,
    2: <Briefcase className="w-5 h-5 text-blue-600" />,
    3: <Award className="w-5 h-5 text-amber-600" />,
    4: <Trees className="w-5 h-5 text-emerald-600" />,
    5: <HandHeart className="w-5 h-5 text-rose-600" />,
    6: <Laptop className="w-5 h-5 text-indigo-600" />,
  };

  return (
    <section id="activities" className="py-20 md:py-28 bg-white">
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

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-xs">
                    {activityIcons[item.id]}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-800 transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* View On Facebook Link */}
              <div className="mt-6 pt-4 border-t border-stone-200/60">
                <a
                  href={foundationConfig.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  <span>{isBn ? 'ফেসবুকে বিস্তারিত দেখুন' : 'View Updates on Facebook'}</span>
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
