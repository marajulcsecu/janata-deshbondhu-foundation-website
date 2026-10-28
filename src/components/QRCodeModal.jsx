import React from 'react';
import { X, QrCode } from 'lucide-react';

export const QRCodeModal = ({ isOpen, onClose, title, qrImage, number, isBn }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl border border-stone-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close QR Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-xs text-stone-500 mt-1 mb-4">
          {isBn
            ? 'অ্যাপ থেকে সরাসরি স্ক্যান করে অনুদান পাঠাতে পারেন'
            : 'Scan with your mobile app to send donation'}
        </p>

        {/* QR Image Frame */}
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 inline-block mb-4">
          <img
            src={qrImage}
            alt={`${title} QR Code`}
            className="w-48 h-48 object-contain mx-auto rounded-lg"
          />
        </div>

        {/* Number Display */}
        <div className="bg-stone-100 py-2 px-3 rounded-lg text-sm font-mono font-bold text-slate-800">
          {number}
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors"
        >
          {isBn ? 'বন্ধ করুন' : 'Close'}
        </button>
      </div>
    </div>
  );
};
