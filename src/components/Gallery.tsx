import { useEffect, useState } from 'react';

const photos: { src: string; alt: string }[] = [
  { src: '/photos/WhatsApp Image 2025-11-06 at 7.02.43 AM.jpeg', alt: 'NSS Event photo 1' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.25 PM (1).jpeg', alt: 'NSS Event photo 2' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.25 PM.jpeg', alt: 'NSS Event photo 3' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.26 PM.jpeg', alt: 'NSS Event photo 4' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.27 PM (1).jpeg', alt: 'NSS Event photo 5' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.27 PM.jpeg', alt: 'NSS Event photo 6' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.28 PM (1).jpeg', alt: 'NSS Event photo 7' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.28 PM.jpeg', alt: 'NSS Event photo 8' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.29 PM.jpeg', alt: 'NSS Event photo 9' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.30 PM (1).jpeg', alt: 'NSS Event photo 10' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.30 PM.jpeg', alt: 'NSS Event photo 11' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.31 PM (1).jpeg', alt: 'NSS Event photo 12' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.31 PM.jpeg', alt: 'NSS Event photo 13' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.32 PM (1).jpeg', alt: 'NSS Event photo 14' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.32 PM.jpeg', alt: 'NSS Event photo 15' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.33 PM (1).jpeg', alt: 'NSS Event photo 16' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.33 PM.jpeg', alt: 'NSS Event photo 17' },
  { src: '/photos/WhatsApp Image 2025-11-06 at 8.58.34 PM.jpeg', alt: 'NSS Event photo 18' }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((idx) => (idx === null ? null : (idx - 1 + photos.length) % photos.length));
  const showNext = () =>
    setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % photos.length));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <section id="photo-gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Photo Gallery</h2>
          <a
            href="#"
            className="inline-block text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full w-10 h-10 shadow hover:bg-gray-100"
              aria-label="Close"
            >
              ×
            </button>

            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 rounded-full w-10 h-10 shadow hover:bg-white"
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 rounded-full w-10 h-10 shadow hover:bg-white"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}



