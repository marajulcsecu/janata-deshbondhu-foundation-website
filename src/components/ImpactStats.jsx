import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Users, GraduationCap, CalendarDays, ShieldCheck } from 'lucide-react';

export const ImpactStats = () => {
  const { lang } = useLanguage();
  const t = translations[lang].stats;

  const stats = [
    {
      value: t.studentsHelped,
      label: t.studentsLabel,
      icon: <GraduationCap className="w-6 h-6 text-brand-300" />,
    },
    {
      value: t.volunteers,
      label: t.volunteersLabel,
      icon: <Users className="w-6 h-6 text-brand-300" />,
    },
    {
      value: t.programs,
      label: t.programsLabel,
      icon: <CalendarDays className="w-6 h-6 text-brand-300" />,
    },
    {
      value: t.transparency,
      label: t.transparencyLabel,
      icon: <ShieldCheck className="w-6 h-6 text-brand-300" />,
    },
  ];

  return (
    <section className="bg-brand-900 text-white py-14 sm:py-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-brand-800/80 border border-brand-700/60 flex items-center justify-center mb-1">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-brand-100 font-medium max-w-[200px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
