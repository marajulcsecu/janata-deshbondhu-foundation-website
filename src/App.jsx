import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NoticeBoard } from './components/NoticeBoard';
import { About } from './components/About';
import { ImpactStats } from './components/ImpactStats';
import { Activities } from './components/Activities';
import { Gallery } from './components/Gallery';
import { DonationHub } from './components/DonationHub';
import { ContactVolunteer } from './components/ContactVolunteer';
import { Footer } from './components/Footer';
import { Heart, MessageSquare } from 'lucide-react';
import { foundationConfig } from './data/foundationData';

const MainContent = () => {
  const { isBn } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NoticeBoard />
        <About />
        <ImpactStats />
        <Activities />
        <Gallery />
        <DonationHub />
        <ContactVolunteer />
      </main>
      <Footer />

      {/* Floating Action Pill for Mobile / Quick Action */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Quick WhatsApp Chat */}
        <a
          href={`https://wa.me/${foundationConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
          title={isBn ? 'সরাসরি WhatsApp বার্তা' : 'Direct WhatsApp'}
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Quick Donate Button */}
        <a
          href="#donate"
          className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Heart className="w-4 h-4 fill-white text-white" />
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
