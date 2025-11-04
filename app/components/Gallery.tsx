'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: '/image/galerie/beautyPortrait02.jpg',
    alt: 'beauty portrait 1'
  },
  {
    id: 2,
    url: '/image/galerie/beautyPortrait01.jpg',
    alt: 'Photo galerie 2'
  },
  {
    id: 3,
    url: '/image/galerie/soin_visage.jpg',
    alt: 'Beauty salon'
  },
  {
    id: 4,
    url: '/image/galerie/IMG-20250818-WA0026.jpg',
    alt: 'Luxury cosmetics'
  },
  {
    id: 5,
    url: '/image/galerie/makeUpArtist.jpg',
    alt: 'Makeup artist'
  },
  {
    id: 6,
    url: '/image/galerie/beautyPortrait03.jpg',
    alt: 'Bridal makeup'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-[#D6CFC6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#b77d43] text-center mb-4">
          Gallerie
        </h2>
        <div className="w-20 h-1 bg-[#b77d43] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
            >
              <ImageWithFallback 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#b77d43]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
