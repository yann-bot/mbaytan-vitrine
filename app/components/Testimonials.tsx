'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Demona',
    text: 'MBAYTAN Beauty a transformé mon apparence pour mon mariage. L\'équipe était professionnelle, attentionnée et m\'a fait me sentir absolument belle !',
    rating: 5
  },
  {
    id: 2,
    name: 'Sophie Ndongo',
    text: 'Le soin MBAYTAN Glow Diamond m\'a donné la peau éclatante dont j\'ai toujours rêvé. Je recommande vivement leurs services !',
    rating: 5
  },
  {
    id: 3,
    name: 'Samira Abakar',
    text: 'Professionnalisme, élégance et service exceptionnel. MBAYTAN Beauty est la meilleure agence de beauté à Bangui !',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#b77d43] text-center mb-4">
          Ce Que Nos Clients Disent
        </h2>
        <div className="w-20 h-1 bg-[#b77d43] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#D6CFC6]"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#b77d43] fill-[#b77d43]" size={20} />
                ))}
              </div>
              <p className="text-[#533F2F] mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-[#b77d43]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
