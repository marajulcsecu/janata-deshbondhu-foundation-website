import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NoticeBoard } from './components/NoticeBoard';
import { About } from './components/About';
import { ImpactStats } from './components/ImpactStats';
import { Activities } from './components/Activities';
import { BloodDonation } from './components/BloodDonation';
import { Gallery } from './components/Gallery';
import { DonationHub } from './components/DonationHub';
import { ContactVolunteer } from './components/ContactVolunteer';
import { Footer } from './components/Footer';
import { Heart, MessageSquare, Droplet } from 'lucide-react';
import { foundationConfig } from './data/foundationData';

const MainContent = () => {
  const { isBn } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NoticeBoard />
        <About />
        <ImpactStats />
        <Activities />
        <BloodDonation />
        <Gallery />
        <DonationHub />
        <ContactVolunteer />
      </main>
      <Footer />

      {/* Floating Action Pill for Mobile / Quick Action */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Quick Blood Support Button */}
        <a
          href="#blood-donation"
          className="p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
          title={isBn ? 'জরুরি রক্তদান ও সহায়তা' : 'Blood Donation Support'}
          aria-label="Blood Donation Support"
        >
          <Droplet className="w-5 h-5 fill-white" />
        </a>

        {/* Quick WhatsApp Chat */}
        <a
          href={`https://wa.me/${foundationConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-brand-800 hover:bg-brand-900 border border-gold-400/60 text-gold-300 shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
          title={isBn ? 'সরাসরি WhatsApp বার্তা' : 'Direct WhatsApp'}
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Quick Donate Button */}
        <a
          href="#donate"
          className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-brand-900 hover:bg-brand-950 border border-gold-400/60 text-white font-semibold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Heart className="w-4 h-4 fill-gold-400 text-gold-400" />
          <span>{isBn ? 'অনুদান দিন' : 'Donate'}</span>
        </a>
      </div>
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
