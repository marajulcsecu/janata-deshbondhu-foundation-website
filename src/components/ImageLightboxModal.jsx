import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageLightboxModal = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  isBn
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];
  const title = isBn ? current.titleBn : current.titleEn;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close image modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-4xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />
        {title && (
          <p className="mt-3 text-center text-stone-200 text-sm sm:text-base font-medium px-4">
            {title} ({currentIndex + 1} / {images.length})
          </p>
        )}
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
