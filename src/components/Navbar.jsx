import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Menu, X, Globe, Heart, ChevronRight, Droplet } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLanguage, isBn } = useLanguage();
  const t = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.notices, href: '#notices' },
    { label: t.activities, href: '#activities' },
    { label: t.blood, href: '#blood-donation', isBlood: true },
    { label: t.gallery, href: '#gallery' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-md border-b border-gold-400/30 py-2.5'
          : 'bg-ivory-50/90 backdrop-blur-sm border-b border-gold-300/20 py-3.5'
      }`}
    >
      {/* Top thin metallic gold & emerald accent bar inspired by Group Crest Theme */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-800 via-gold-500 to-brand-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-gold-600 via-gold-300 to-brand-700 shadow-xs">
              <img
                src="/logo/logo.jpeg"
                alt="Janata Deshbondhu Foundation Logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-white transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-900 text-lg leading-tight tracking-tight group-hover:text-brand-700 transition-colors">
                {isBn ? 'জনতা-দেশবন্ধু ফাউন্ডেশন' : 'Janata-Deshbondhu Foundation'}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                <span>{isBn ? 'ফুলবাড়ী, দিনাজপুর' : 'Phulbari, Dinajpur'}</span>
                <span className="text-gold-600">•</span>
                <span className="text-brand-800 font-semibold">{isBn ? 'স্থাপিত: ২০২৬' : 'Est. 2026'}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors relative py-1 flex items-center gap-1 ${
                  link.isBlood
                    ? 'text-rose-700 hover:text-rose-800 font-bold'
                    : 'text-stone-700 hover:text-brand-800 hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300'
                }`}
              >
                {link.isBlood && <Droplet className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle & Donate CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/50 text-brand-900 hover:border-brand-700 bg-white text-xs font-semibold tracking-wider transition-colors shadow-2xs"
              title={isBn ? 'Switch to English' : 'বাংলায় দেখুন'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-700" />
              <span>{isBn ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Donate CTA */}
            <a
              href="#donate"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-800 hover:bg-brand-900 text-white border border-gold-400/50 font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span>{t.donate}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gold-400/50 text-brand-900 text-xs font-medium bg-white"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-brand-700" />
              <span>{isBn ? 'EN' : 'বাংলা'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-gold-300/40 bg-ivory-50/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-base transition-colors ${
                  link.isBlood
                    ? 'bg-rose-50 text-rose-800 font-bold'
                    : 'text-stone-800 hover:bg-stone-100 hover:text-brand-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isBlood && <Droplet className="w-4 h-4 fill-rose-600 text-rose-600" />}
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-stone-200">
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-800 text-white border border-gold-400/40 font-semibold text-base shadow-sm"
              >
                <Heart className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span>{t.donate}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
