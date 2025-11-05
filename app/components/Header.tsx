'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sm:p-5 fixed top-0 left-0 right-0 z-[60] bg-[#D6CFC6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[#b77d43] cursor-pointer" onClick={() => scrollToSection('hero')}>
                <Image
                  src="/image/full-logo/svg/Gold.svg"
                  alt="MBAYTAN Beauty"
                  width={100}
                  height={100}
                  className="object-contain w-auto  w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
                />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-[#533F2F] hover:text-[#b77d43] transition-colors">
              Acceuil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#533F2F] hover:text-[#b77d43] transition-colors">
              A Propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#533F2F] hover:text-[#b77d43] transition-colors">
              Nos Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#533F2F] hover:text-[#b77d43] transition-colors">
              Gallerie
            </button>
           
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#b77d43] text-white px-6 py-2 rounded-full hover:bg-[#ffda96] hover:text-[#533F2F] transition-all duration-300"
            >
              Contactez-nous
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-[#533F2F] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#D6CFC6] flex flex-col items-center justify-center space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full max-w-xs text-center text-[#533F2F] hover:text-[#b77d43] transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full max-w-xs text-center text-[#533F2F] hover:text-[#b77d43] transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full max-w-xs text-center text-[#533F2F] hover:text-[#b77d43] transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full max-w-xs text-center text-[#533F2F] hover:text-[#b77d43] transition-colors py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full max-w-xs text-center text-[#533F2F] hover:text-[#b77d43] transition-colors py-2">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="w-full max-w-xs bg-[#b77d43] text-white px-6 py-2 rounded-full hover:bg-[#ffda96] hover:text-[#533F2F] transition-all duration-300 text-center"
            >
              Contact us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
