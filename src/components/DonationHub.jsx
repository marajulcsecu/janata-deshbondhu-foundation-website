import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { QRCodeModal } from './QRCodeModal';
import { 
  Heart, 
  Copy, 
  Check, 
  QrCode, 
  Building2, 
  Smartphone, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const DonationHub = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].donation;

  const [copiedKey, setCopiedKey] = useState(null);
  const [qrModal, setQrModal] = useState({ isOpen: false, title: '', qrImage: '', number: '' });

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const openQr = (title, qrImage, number) => {
    setQrModal({
      isOpen: true,
      title,
      qrImage,
      number
    });
  };

  const accounts = [
    {
      key: 'bkash',
      name: isBn ? 'বিকাশ' : 'bKash',
      badge: isBn ? 'পার্সোনাল' : 'Personal',
      number: foundationConfig.donationAccounts.bkash.number,
      type: isBn ? 'Send Money (পার্সোনাল)' : 'Send Money (Personal)',
      qrImage: foundationConfig.donationAccounts.bkash.qrImage,
      accentBorder: 'hover:border-rose-300',
      tagBg: 'bg-rose-50 text-rose-700',
    },
    {
      key: 'nagad',
      name: isBn ? 'নগদ' : 'Nagad',
      badge: isBn ? 'পার্সোনাল' : 'Personal',
      number: foundationConfig.donationAccounts.nagad.number,
      type: isBn ? 'Send Money (পার্সোনাল)' : 'Send Money (Personal)',
      qrImage: foundationConfig.donationAccounts.nagad.qrImage,
      accentBorder: 'hover:border-orange-300',
      tagBg: 'bg-orange-50 text-orange-700',
    },
    {
      key: 'rocket',
      name: isBn ? 'রকেট' : 'Rocket',
      badge: isBn ? 'পার্সোনাল' : 'Personal',
      number: foundationConfig.donationAccounts.rocket.number,
      type: isBn ? 'Send Money (পার্সোনাল)' : 'Send Money (Personal)',
      qrImage: foundationConfig.donationAccounts.rocket.qrImage,
      accentBorder: 'hover:border-purple-300',
      tagBg: 'bg-purple-50 text-purple-700',
    },
  ];

  const bank = foundationConfig.donationAccounts.bank;

  return (
    <section id="donate" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            {t.subtitle}
          </p>

          {/* Trust Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0" />
            <span>{t.trustPledge}</span>
          </div>
        </div>

        {/* Mobile Banking Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {accounts.map((acc) => {
            const isCopied = copiedKey === acc.key;

            return (
              <div
                key={acc.key}
                className={`rounded-2xl border border-stone-200 bg-stone-50/60 p-6 flex flex-col justify-between shadow-xs transition-all duration-200 ${acc.accentBorder} hover:shadow-md hover:bg-white`}
              >
                <div>
                  {/* Account Type Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-slate-700" />
                      </div>
                      <span className="font-bold text-lg text-slate-900">{acc.name}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${acc.tagBg}`}>
                      {acc.badge}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 mb-3">{acc.type}</p>

                  {/* Account Number Box */}
                  <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-slate-900 text-base tracking-wider">
                      {acc.number}
                    </span>
                    <button
                      onClick={() => copyToClipboard(acc.number, acc.key)}
                      className={`p-2 rounded-lg transition-colors ${
                        isCopied
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                      title={t.copyBtn}
                      aria-label={`Copy ${acc.name} number`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Actions: Copy & QR */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => copyToClipboard(acc.number, acc.key)}
                    className={`flex-1 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors ${
                      isCopied
                        ? 'bg-emerald-700 text-white'
                        : 'bg-brand-700 hover:bg-brand-800 text-white'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{t.copyBtn}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => openQr(acc.name, acc.qrImage, acc.number)}
                    className="py-2.5 px-3 rounded-xl border border-stone-300 hover:border-brand-500 bg-white text-stone-700 hover:text-brand-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-1 transition-colors"
                    title={t.qrBtn}
                  >
                    <QrCode className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.qrBtn}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bank Account Details Card */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 sm:p-8 mb-12 hover:bg-white transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isBn ? bank.bankNameBn : bank.bankNameEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  {isBn ? bank.branchBn : bank.branchEn}
                </p>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(bank.accNumber, 'bank')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors self-start sm:self-auto ${
                copiedKey === 'bank'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {copiedKey === 'bank' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isBn ? 'অ্যাকাউন্ট নম্বর কপি' : 'Copy Acc Number'}</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">
                {isBn ? 'অ্যাকাউন্টের নাম' : 'Account Name'}
              </span>
              <span className="font-semibold text-slate-900">
                {isBn ? bank.accNameBn : bank.accNameEn}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">
                {isBn ? 'অ্যাকাউন্ট নম্বর' : 'Account Number'}
              </span>
              <span className="font-mono font-bold text-slate-900">
                {bank.accNumber}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">
                {isBn ? 'শাখা' : 'Branch'}
              </span>
              <span className="font-semibold text-slate-900">
                {isBn ? bank.branchBn : bank.branchEn}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">
                {isBn ? 'রাউটিং নম্বর' : 'Routing Number'}
              </span>
              <span className="font-mono font-semibold text-slate-900">
                {bank.routing}
              </span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guidance Box */}
        <div className="rounded-2xl bg-brand-50/60 border border-brand-200/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-brand-900">
            <HelpCircle className="w-5 h-5 text-brand-700" />
            <h4 className="font-bold text-base sm:text-lg">
              {t.sendGuideTitle}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/80 p-4 rounded-xl border border-brand-100">
                <span className="w-6 h-6 rounded-full bg-brand-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-sans">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp confirmation prompt */}
          <div className="mt-6 text-center">
            <a
              href={`https://wa.me/${foundationConfig.whatsapp}?text=${encodeURIComponent(
                isBn
                  ? 'আসসালামু আলাইকুম। আমি জনতা-দেশবন্ধু ফাউন্ডেশনে একটি অনুদান পাঠিয়েছি। ট্রানজেকশন আইডি: '
                  : 'Greetings. I have sent a donation to Janata-Deshbondhu Foundation. Transaction ID: '
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-800 hover:text-brand-950 underline underline-offset-4"
            >
              <span>{isBn ? 'অনুদান পাঠানোর পর WhatsApp-এ নিশ্চিত করুন' : 'Confirm your transaction via WhatsApp'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({ ...qrModal, isOpen: false })}
        title={qrModal.title}
        qrImage={qrModal.qrImage}
        number={qrModal.number}
        isBn={isBn}
      />
    </section>
  );
};
