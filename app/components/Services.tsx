'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Heart, Calendar, GraduationCap } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Sparkles,
    name: 'MBAYTAN Glow',
    description: 'Soins du visage haut de gamme incluant les forfaits Platinum, Gold, Diamond et VVIP pour une peau éclatante et saine.',
    image: 'https://images.unsplash.com/photo-1643684460412-76908d8e5a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRyZWF0bWVudCUyMHNwYXxlbnwxfHx8fDE3NjIxMDIxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    icon: Heart,
    name: 'MBAYTAN Wedding Shine',
    description: 'Transformation beauté complète de la mariée : maquillage, coiffure et soins du visage pour le plus beau jour de votre vie.',
    image: 'https://images.unsplash.com/photo-1553540751-988bd7918c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjB3ZWRkaW5nfGVufDF8fHx8MTc2MjEwMjExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    icon: Calendar,
    name: 'MBAYTAN Events Track',
    description: 'Maquillage et coiffure professionnels pour tous vos événements, fêtes et célébrations spéciales.',
    image: 'https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMTAyMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    icon: GraduationCap,
    name: 'MBAYTAN Academy',
    description: 'Formations professionnelles en beauté pour développer vos compétences en maquillage, soins du visage et services esthétiques.',
    image: '/image/galerie/academy.jpg'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#b77d43] text-center mb-4">
          Nos Services
        </h2>
        <div className="w-20 h-1 bg-[#b77d43] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-[#b77d43]"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#533F2F]/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="text-[#ffda96]" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#b77d43] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#533F2F] mb-4">
                    {service.description}
                  </p>
                  <button className="bg-[#b77d43] text-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#b77d43] hover:to-[#ffda96] transition-all duration-300">
                    En savoir plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
