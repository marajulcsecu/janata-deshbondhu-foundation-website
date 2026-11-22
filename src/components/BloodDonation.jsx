import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { 
  Droplet, 
  HeartPulse, 
  PhoneCall, 
  UserPlus, 
  MessageSquare, 
  CheckCircle2, 
  Activity,
  Users
} from 'lucide-react';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

export const BloodDonation = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].bloodDonation;
  const [selectedGroup, setSelectedGroup] = useState('O+');

  const requestBloodMsg = isBn
    ? `আসসালামু আলাইকুম। জনতা-দেশবন্ধু ফাউন্ডেশনের জরুরি রক্ত সহায়তা প্রয়োজন। প্রয়োজনীয় রক্তের গ্রুপ: ${selectedGroup}। রোগীর অবস্থান/হাসপাতাল: `
    : `Greetings. Requesting emergency blood support from Janata-Deshbondhu Foundation. Required Blood Group: ${selectedGroup}. Hospital/Location: `;

  const registerDonorMsg = isBn
    ? `আসসালামু আলাইকুম। আমি জনতা-দেশবন্ধু ফাউন্ডেশনের স্বেচ্ছায় রক্তদাতা তালিকায় যুক্ত হতে চাই। আমার রক্তের গ্রুপ: ${selectedGroup}। আমার নাম ও ঠিকানা: `
    : `Greetings. I would like to register as a voluntary blood donor with Janata-Deshbondhu Foundation. My Blood Group: ${selectedGroup}. Name & Location: `;

  const featureIcons = [
    <HeartPulse className="w-6 h-6 text-rose-600" key="f1" />,
    <Activity className="w-6 h-6 text-brand-700" key="f2" />,
    <Users className="w-6 h-6 text-gold-600" key="f3" />,
  ];

  return (
    <section
      id="blood-donation"
      className="py-20 md:py-28 bg-gradient-to-b from-rose-50/50 via-ivory-50 to-white border-t border-rose-100/80 scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Droplet className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Interactive Blood Hub Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left 7 Cols: Interactive Blood Group Selector & Instant Actions */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-rose-200/80 shadow-md p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-4 border-b border-stone-100">
                <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-rose-600 fill-rose-600" />
                  <span>{t.selectGroupLabel}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
                  {t.selectedGroupText} <strong className="font-mono text-sm">{selectedGroup}</strong>
                </span>
              </div>

              {/* 8 Blood Group Pills */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 sm:gap-3 mb-8">
                {BLOOD_GROUPS.map((group) => {
                  const active = selectedGroup === group;
                  return (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setSelectedGroup(group)}
                      className={`py-3 px-2 rounded-xl font-mono font-extrabold text-base sm:text-lg transition-all duration-200 border flex flex-col items-center justify-center gap-0.5 ${
                        active
                          ? 'bg-rose-600 text-white border-rose-700 shadow-md scale-105'
                          : 'bg-stone-50 text-slate-800 border-stone-200 hover:border-rose-300 hover:bg-rose-50/50'
                      }`}
                    >
                      <span>{group}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dual Action Buttons: Request Blood OR Register as Donor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${foundationConfig.whatsapp}?text=${encodeURIComponent(requestBloodMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.requestBloodBtn} ({selectedGroup})</span>
                </a>

                <a
                  href={`https://wa.me/${foundationConfig.whatsapp}?text=${encodeURIComponent(registerDonorMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm sm:text-base border border-gold-400/40 shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <UserPlus className="w-4 h-4 text-gold-300" />
                  <span>{t.becomeDonorBtn} ({selectedGroup})</span>
                </a>
              </div>
            </div>

            {/* Emergency Hotline Bar */}
            <div className="mt-8 pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-50/80 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold">{t.emergencyCallLabel}</div>
                  <div className="text-sm sm:text-base font-mono font-bold text-slate-900">
                    {isBn ? '০১৩৪০২৩২৯৭৯, ০১৭৮০৫৫৫৭৩২' : '01340232979, 01780555732'}
                  </div>
                </div>
              </div>

              <a
                href={`tel:${foundationConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{isBn ? 'এখনই কল করুন' : 'Call Hotline'}</span>
              </a>
            </div>
          </div>

          {/* Right 5 Cols: 3 Blood Program Features & Eligibility Note */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {t.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-gold-400 transition-all shadow-2xs flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                    {featureIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Eligibility Note */}
            <div className="p-4 rounded-xl bg-brand-900 text-white border border-gold-500/40 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-brand-100 leading-relaxed">
                {t.eligibilityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
