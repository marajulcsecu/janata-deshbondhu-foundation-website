import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { 
  MessageSquare, 
  Phone, 
  MapPin, 
  Mail, 
  Share2, 
  Users, 
  HeartHandshake,
  ExternalLink
} from 'lucide-react';

export const ContactVolunteer = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].contact;

  const whatsappUrl = `https://wa.me/${foundationConfig.whatsapp}?text=${encodeURIComponent(
    t.whatsappMsg
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory-50 border-t border-gold-300/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-800 text-gold-300 border border-gold-400/50 text-xs font-semibold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Main Grid: Direct Actions & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Buttons */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gold-300/70 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-brand-950 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-700" />
              <span>{isBn ? 'সরাসরি যোগাযোগ, রক্তদান ও ভলান্টিয়ার টিম' : 'Direct Connect, Blood Support & Volunteer Team'}</span>
            </h3>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-brand-800 hover:bg-brand-900 border border-gold-400/50 text-white font-semibold transition-all duration-200 shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-950/60 border border-gold-400/40 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-gold-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">{t.whatsappBtn}</div>
                    <div className="text-xs text-gold-200">{isBn ? 'ইনস্ট্যান্ট মেসেজ ও সহায়তা (+৮৮০১৭৮৬৭৪৩৮০২)' : 'Instant chat & query (+8801786743802)'}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gold-300" />
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${foundationConfig.phone}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-200 shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">{t.callBtn}</div>
                    <div className="text-xs text-slate-300">{isBn ? 'প্রয়োজনে যোগাযোগ: ০১৩৪০২৩২৯৭৯, ০১৭৮০৫৫৫৭৩২' : 'Direct call: 01340232979, 01780555732'}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              {/* Facebook Page Button */}
              <a
                href={foundationConfig.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-800/80 flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">{t.facebookBtn}</div>
                    <div className="text-xs text-blue-100">{isBn ? 'প্রতিদিনের কাজের আপডেট ও ইভেন্ট' : 'Daily updates & events'}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-200" />
              </a>
            </div>

            {/* Collaborator Mononshil with Brand Sticker */}
            <div className="mt-8 p-4 rounded-xl bg-ivory-100 border border-gold-400/60 text-xs sm:text-sm text-brand-950 leading-relaxed space-y-2.5">
              <div className="flex items-center gap-2.5 font-bold text-brand-900">
                <img
                  src={foundationConfig.collaboratorSticker}
                  alt="Mononshil Brand Sticker"
                  className="w-7 h-7 object-contain"
                />
                <span>{isBn ? 'সহযোগিতায়: মননশীল ইন্টারন্যাশনাল' : 'In Collaboration with: Mononshil International'}</span>
              </div>
              <p className="text-stone-700">
                <strong>{isBn ? 'ভলান্টিয়ার বা রক্তদাতা হতে চান?' : 'Want to volunteer or donate blood?'}</strong>{' '}
                {isBn
                  ? 'আপনি যদি দিনাজপুর বা ফুলবাড়ী অঞ্চলের সন্তান হয়ে থাকেন এবং সুবিধাবঞ্চিত শিশুদের পড়াতে, রক্তদান করতে বা সামাজিক কাজে সময় দিতে আগ্রহী হন, তবে সরাসরি WhatsApp-এ বার্তা দিন।'
                  : 'If you are from Dinajpur/Phulbari and wish to mentor rural children, donate blood, or contribute your skills, kindly message us via WhatsApp.'}
              </p>
            </div>
          </div>

          {/* Right Column: Organization Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-gold-300/60 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ivory-100 border border-gold-300/50 text-brand-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {t.addressTitle}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {t.addressText}
                </p>
              </div>
            </div>

            {/* Helpline Card */}
            <div className="p-6 rounded-2xl bg-white border border-gold-300/60 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ivory-100 border border-gold-300/50 text-brand-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {t.phoneTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-900 font-mono font-bold">
                  {t.phoneText}
                </p>
                <p className="text-xs text-stone-600 font-mono mt-1">
                  {t.phoneSecondary}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-gold-300/60 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ivory-100 border border-gold-300/50 text-brand-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {t.emailTitle}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-mono">
                  {t.emailText}
                </p>
              </div>
            </div>

            {/* Dinajpur Scope Note */}
            <div className="p-5 rounded-2xl bg-brand-900 text-stone-200 border border-gold-500/40 text-xs leading-relaxed">
              <span className="font-bold text-gold-300 block mb-1">
                {isBn ? 'কাজের কর্মপরিধি (স্থাপিত: ২০২৬):' : 'Scope of Work (Est. 2026):'}
              </span>
              {isBn
                ? 'দিনাজপুর জেলার ফুলবাড়ী উপজেলা ও আশপাশের গ্রামীণ ইউনিয়নসমূহে শিক্ষা সহায়তা, রক্তদান, বৃক্ষরোপণ ও সমাজসেবা কার্যক্রম পরিচালিত হচ্ছে।'
                : 'Operating across Phulbari upazila and surrounding rural unions of Dinajpur district, Bangladesh.'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
