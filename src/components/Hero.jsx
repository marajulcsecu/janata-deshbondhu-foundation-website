import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { MapPin, Heart, BookOpen, ArrowRight, ShieldCheck, Users, Droplet } from 'lucide-react';

export const Hero = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden crest-network-bg border-b border-gold-300/30 scroll-mt-20"
    >
      {/* Royal Emerald & Gold Theme Ambient Glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-200/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-gold-200/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Mononshil Brand Sticker Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-2xs text-brand-900 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-brand-700" />
                <span>{t.locationBadge}</span>
              </div>

              {/* Mononshil Name with Official Brand Sticker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-900 to-brand-800 border border-gold-400/70 text-white text-xs sm:text-sm font-semibold shadow-sm">
                <span className="text-gold-200">{t.collaboratorPrefix}</span>
                <img
                  src={foundationConfig.collaboratorSticker}
                  alt="Mononshil Brand Sticker"
                  className="w-6 h-6 object-contain drop-shadow-xs"
                />
                <span className="font-bold text-gold-300 tracking-wide">{t.collaboratorName}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-950 tracking-tight leading-[1.18]">
              <span>{t.titleStart} </span>
              <span className="text-brand-800 relative inline-block">
                {t.titleHighlight}
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-gold-400 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-slate-800">{t.titleEnd}</span>
            </h1>

            {/* Official Banner Motto */}
            <blockquote className="p-4 rounded-xl bg-white/95 border-l-4 border-gold-500 gold-border-glow text-xs sm:text-sm font-semibold text-brand-900 italic leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.motto}
            </blockquote>

            {/* Subtitle */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white border border-gold-400/50 font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <Heart className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span>{t.ctaDonate}</span>
              </a>

              <a
                href="#blood-donation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Droplet className="w-4 h-4 fill-white text-white" />
                <span>{t.ctaBlood}</span>
              </a>

              <a
                href="#activities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-ivory-100 border border-gold-400/60 text-brand-900 font-semibold text-base shadow-2xs transition-all duration-200"
              >
                <span>{t.ctaActivities}</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </a>
            </div>

            {/* Notice Quick Link Bar */}
            <div className="pt-1">
              <a
                href="#notices"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-800 hover:text-brand-950 font-semibold transition-colors border-b border-gold-500/60 hover:border-brand-800 pb-0.5"
              >
                <BookOpen className="w-4 h-4 text-gold-600" />
                <span>{t.ctaNotice}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Assurance Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs sm:text-sm text-stone-600 border-t border-gold-300/40">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
                <span>{isBn ? '১০০% অলাভজনক ও স্বচ্ছ' : '100% Non-profit & Transparent'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-gold-600" />
                <span>{isBn ? 'স্থাপিত: ২০২৬ • ফুলবাড়ী, দিনাজপুর' : 'Est. 2026 • Phulbari, Dinajpur'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Classroom Image (activity-4: Boy receiving notebook) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer metallic gold & emerald ring */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-brand-800/30 via-gold-400/35 to-brand-700/30 blur-md -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-gold-300/80 shadow-xl bg-stone-100 aspect-[4/3]">
                <img
                  src="/images/activity-4.jpeg"
                  alt="Janata Deshbondhu Foundation Classroom Activities in Phulbari"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold tracking-wide uppercase text-gold-300">
                    {isBn ? 'মাঠপর্যায়ের চিত্র • ফুলবাড়ী, দিনাজপুর' : 'Field Action • Phulbari, Dinajpur'}
                  </p>
                  <p className="text-sm font-bold drop-shadow-xs">
                    {isBn ? 'শিক্ষার্থীদের মাঝে ফ্রি শিক্ষা উপকরণ ও গাইডেন্স প্রদান' : 'Free Educational Materials & Mentorship'}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-3.5 rounded-xl shadow-lg border border-gold-300/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-800 flex items-center justify-center text-gold-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {isBn ? 'ফ্রি শিক্ষা ও মেন্টরশিপ' : 'Free Education'}
                  </div>
                  <div className="text-sm font-bold text-brand-950">
                    {isBn ? 'ইংরেজি ও গণিত' : 'English & Math'}
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3 sm:p-3.5 rounded-xl shadow-lg border border-rose-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                  <Droplet className="w-5 h-5 fill-rose-600" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {isBn ? 'জীবন রক্ষাকারী উদ্যোগ' : 'Lifesaving Drive'}
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {isBn ? 'স্বেচ্ছায় রক্তদান' : 'Blood Donation'}
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
