import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { GraduationCap, HeartPulse, Trees, Compass, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].about;

  const pillarIcons = [
    <GraduationCap className="w-6 h-6 text-brand-700" key="edu" />,
    <HeartPulse className="w-6 h-6 text-rose-600" key="health" />,
    <Trees className="w-6 h-6 text-emerald-600" key="env" />,
    <Compass className="w-6 h-6 text-amber-600" key="youth" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Narrative & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image collage or primary feature photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                <img
                  src="/images/activity-4.jpeg"
                  alt="Janata Deshbondhu Foundation Mentors with Students"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Smaller overlay card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {isBn ? 'মেধাবী শিক্ষার্থীদের সম্মিলিত উদ্যোগ' : 'Scholars Supporting Scholars'}
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {isBn ? 'দিনাজপুরের প্রত্যন্ত অঞ্চলে শিক্ষা ও সামাজিক পরিবর্তনের প্রতিশ্রুতি।' : 'Driving grassroots transformation in rural Dinajpur.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission statement */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider">
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center mb-4">
                    {pillarIcons[idx]}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
