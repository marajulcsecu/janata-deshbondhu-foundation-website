import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { MapPin, Heart, BookOpen, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const Hero = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/60 via-stone-50 to-stone-50">
      {/* Decorative subtle background shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-72 h-72 rounded-full bg-amber-100/40 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-sm text-stone-700 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-brand-700" />
              <span>{t.locationBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              <span>{t.titleStart} </span>
              <span className="text-brand-700 relative inline-block">
                {t.titleHighlight}
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-brand-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-slate-800">{t.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>{t.ctaDonate}</span>
              </a>

              <a
                href="#activities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-base shadow-sm hover:border-brand-500 transition-all duration-200"
              >
                <span>{t.ctaActivities}</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Notice Quick Link Bar */}
            <div className="pt-2">
              <a
                href="#notices"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-600 hover:text-brand-700 font-medium transition-colors border-b border-stone-300 hover:border-brand-600 pb-0.5"
              >
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>{t.ctaNotice}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Assurance Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs sm:text-sm text-stone-500 border-t border-stone-200/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>{isBn ? '১০০% অলাভজনক ও স্বচ্ছ' : '100% Non-profit & Transparent'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-600" />
                <span>{isBn ? 'মেধাবী শিক্ষার্থীদের মেন্টরশিপ' : 'Mentored by University Scholars'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Classroom Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-600/20 to-amber-500/20 blur-lg -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-stone-100 aspect-[4/3] sm:aspect-[4/3]">
                <img
                  src="/images/activity-2.jpeg"
                  alt="Janata Deshbondhu Foundation Classroom Activities in Phulbari"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold tracking-wide uppercase text-brand-200">
                    {isBn ? 'মাঠপর্যায়ের চিত্র' : 'Field Photo'}
                  </p>
                  <p className="text-sm font-bold drop-shadow-sm">
                    {isBn ? 'ফুলবাড়ীতে শিক্ষার্থীদের নিয়ে ফ্রি বেসিক ক্লাস' : 'Free Foundation Class in Phulbari'}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-3.5 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-700">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {isBn ? 'ফ্রি শিক্ষা কার্যক্রম' : 'Free Education'}
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {isBn ? 'ইংরেজি ও গণিত' : 'English & Math'}
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3 sm:p-3.5 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {isBn ? 'উপকারভোগী' : 'Beneficiaries'}
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {isBn ? '৫০০+ শিক্ষার্থী' : '500+ Students'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
