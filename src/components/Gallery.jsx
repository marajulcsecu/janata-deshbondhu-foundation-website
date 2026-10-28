import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { foundationConfig } from '../data/foundationData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Camera, Maximize2, Layers } from 'lucide-react';

export const Gallery = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].gallery;

  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = foundationConfig.galleryImages;

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-300 hover:border-brand-500'
            }`}
          >
            {t.all}
          </button>
          <button
            onClick={() => setActiveFilter('education')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'education'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-300 hover:border-brand-500'
            }`}
          >
            {t.education}
          </button>
          <button
            onClick={() => setActiveFilter('events')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'events'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-300 hover:border-brand-500'
            }`}
          >
            {t.events}
          </button>
          <button
            onClick={() => setActiveFilter('plantation')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'plantation'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-300 hover:border-brand-500'
            }`}
          >
            {t.plantation}
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => {
            const title = isBn ? img.titleBn : img.titleEn;

            return (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-stone-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80"
              >
                <img
                  src={img.src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm font-semibold leading-snug pr-2">
                      {title}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        images={filteredImages}
        currentIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        isBn={isBn}
      />
    </section>
  );
};
