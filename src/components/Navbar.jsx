import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Menu, X, Globe, Heart, ChevronRight } from 'lucide-react';

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
    { label: t.gallery, href: '#gallery' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-stone-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo/logo.jpeg"
              alt="Janata Deshbondhu Foundation Logo"
              className="w-11 h-11 rounded-full object-cover shadow-sm border-2 border-brand-600 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-tight tracking-tight group-hover:text-brand-700 transition-colors">
                {isBn ? 'জনতা-দেশবন্ধু ফাউন্ডেশন' : 'Janata-Deshbondhu Foundation'}
              </span>
              <span className="text-xs text-stone-500 font-medium tracking-wide">
                {isBn ? 'ফুলবাড়ী, দিনাজপুর' : 'Phulbari, Dinajpur'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-brand-700 font-medium text-sm transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-brand-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle & Donate CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-stone-700 hover:border-brand-500 hover:text-brand-700 bg-stone-50/80 text-xs font-semibold tracking-wider transition-colors"
              title={isBn ? 'Switch to English' : 'বাংলায় দেখুন'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-600" />
              <span>{isBn ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Donate CTA */}
            <a
              href="#donate"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>{t.donate}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-stone-200 text-stone-700 text-xs font-medium bg-stone-50"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-brand-600" />
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
        <div className="lg:hidden border-b border-stone-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-stone-800 hover:bg-stone-50 hover:text-brand-700 font-medium text-base transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-stone-100">
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-700 text-white font-semibold text-base shadow-sm active:scale-98"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>{t.donate}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
