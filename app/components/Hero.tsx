'use client';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className=" absolute inset-0 bg-cover bg-center"
        style={{
        // backgroundImage: `url('https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb24lMjB3b21hbnxlbnwxfHx8fDE3NjIxMDIxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        backgroundImage: `url('/image/hero/hero.jpg')`
      }}
      >
        {/* Gold Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b77d43]/40 to-[#ffda96]/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white mb-6 animate-fade-in">
          Revelez votre beauté naturelle
        </h1>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          MBAYTAN Beauty — Premier centre de beauté et de relooking à Bangui.
        </p>
        <button 
          onClick={() => scrollToSection('services')}
          className="bg-[#b77d43] text-white px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-[#b77d43] hover:to-[#ffda96] transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Decouvrez Nos Services
        </button>
      </div>

      <style>{`
          @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}
