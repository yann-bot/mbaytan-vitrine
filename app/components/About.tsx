'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#D6CFC6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjAxMDkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="MBAYTAN Beauty Salon"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[#b77d43] mb-4">
              Qui Sommes-Nous ?
            </h2>
            <div className="w-20 h-1 bg-[#b77d43] mb-6"></div>
            <p className="text-[#533F2F] mb-4 leading-relaxed">
              MBAYTAN Beauty est la destination incontournable à Bangui pour des services professionnels de beauté et de relooking. Nous nous engageons à sublimer votre beauté naturelle grâce à des soins de la peau personnalisés et des prestations beauté transformatrices.
            </p>
            <p className="text-[#533F2F] mb-4 leading-relaxed">
              Notre équipe d'expertes en beauté allie de nombreuses années d'expérience aux techniques les plus récentes et à des produits haut de gamme afin de garantir des résultats exceptionnels. Nous croyons que chaque femme mérite de se sentir confiante et rayonnante.
            </p>
            <p className="text-[#533F2F] leading-relaxed">
              De l’élégance du quotidien aux grandes occasions, MBAYTAN Beauty s’engage à révéler la meilleure version de vous-même avec des soins luxueux adaptés à vos besoins uniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
