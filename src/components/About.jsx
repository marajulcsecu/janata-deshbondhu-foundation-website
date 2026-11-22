import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { GraduationCap, Droplet, HeartPulse, Trees, HandHeart } from 'lucide-react';

export const About = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].about;

  const pillarIcons = [
    <GraduationCap className="w-6 h-6 text-brand-800" key="edu" />,
    <Droplet className="w-6 h-6 text-rose-600 fill-rose-600" key="blood" />,
    <HeartPulse className="w-6 h-6 text-emerald-700" key="health" />,
    <Trees className="w-6 h-6 text-green-700" key="env" />,
    <HandHeart className="w-6 h-6 text-gold-600" key="relief" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-ivory-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Narrative & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Real photo with official foundation banner */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-gold-400/60 aspect-[4/3]">
                <img
                  src="/images/activity-22.jpeg"
                  alt="Janata Deshbondhu Foundation Official Banner at Saraswatipur Srirampur High School"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    {isBn ? 'জনকল্যাণে আমাদের পথচলা' : 'Our Grassroots Journey'}
                  </p>
                  <p className="text-sm font-bold">
                    {isBn ? 'সরস্বতীপুর শ্রীরামপুর উচ্চ বিদ্যালয়, ফুলবাড়ী, দিনাজপুর' : 'Saraswatipur Srirampur High School, Phulbari'}
                  </p>
                </div>
              </div>

              {/* Collaborator Mononshil Card with Brand Sticker */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white border border-gold-400/70 shadow-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-xs border border-gold-300">
                    <img
                      src={foundationConfig.collaboratorSticker}
                      alt="Mononshil Brand Sticker"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gold-300 font-semibold">
                      {isBn ? 'সার্বিক সহযোগিতায়' : 'In Strategic Collaboration With'}
                    </div>
                    <h4 className="text-base font-extrabold text-white flex items-center gap-1.5">
                      <span>{isBn ? 'মননশীল ইন্টারন্যাশনাল' : 'Mononshil International'}</span>
                    </h4>
                    <p className="text-xs text-gold-200/90 mt-0.5 font-sans">
                      Education, Research & Business Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission statement */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-800 text-gold-300 border border-gold-400/50 text-xs font-semibold uppercase tracking-wider">
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
              {t.title}
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            {/* Official Digital Banner Preview Strip */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border-2 border-gold-400/50 shadow-sm">
                <img
                  src="/images/official-banner.jpg"
                  alt="জনকল্যাণে আমাদের পথচলা - অফিসিয়াল ব্যানার"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 5 Core Pillars Grid */}
        <div className="pt-10 border-t border-gold-300/50">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-950">
              {t.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gold-300/60 hover:border-gold-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-ivory-100 border border-gold-300/60 flex items-center justify-center mb-4">
                    {pillarIcons[idx]}
                  </div>
                  <h4 className="text-base font-bold text-brand-950 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
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
