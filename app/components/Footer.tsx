'use client';

import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#533F2F] text-[#D6CFC6] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-[#b77d43] mb-4">MBAYTAN Beauty</h3>
            <p className="text-[#D6CFC6]">
             Premier centre de beauté et de relooking à Bangui.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#b77d43] mb-4">Liens Rapides</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block text-[#D6CFC6] hover:text-[#ffda96] transition-colors">
                Acceuil
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-[#D6CFC6] hover:text-[#ffda96] transition-colors">
                A Propos
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-[#D6CFC6] hover:text-[#ffda96] transition-colors">
                Nos Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-[#D6CFC6] hover:text-[#ffda96] transition-colors">
                Gallerie
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-[#D6CFC6] hover:text-[#ffda96] transition-colors">
                Contactez-nous
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#b77d43] mb-4">Nos Services</h4>
            <div className="space-y-2 text-[#D6CFC6]">
              <p>MBAYTAN Glow</p>
              <p>MBAYTAN Wedding Shine</p>
              <p>MBAYTAN Events Track</p>
              <p>MBAYTAN Academy</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#b77d43] mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#b77d43] hover:text-[#ffda96] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#b77d43] hover:text-[#ffda96] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#b77d43] hover:text-[#ffda96] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-[#b77d43] hover:text-[#ffda96] transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="mt-4 text-[#D6CFC6]">
              Restez connectés pour les mises à jour, les conseils et les offres exclusives.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#b77d43]/30 pt-8 text-center">
          <p className="text-[#D6CFC6]">
            © 2025 MBAYTAN Beauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
