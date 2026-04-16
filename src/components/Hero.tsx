import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80" 
          alt="Pier 36 Steakhouse"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Award Badge */}
        <div className="inline-flex items-center gap-2 bg-[#722F37]/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <svg viewBox="0 0 24 24" fill="#D4AF37" className="w-4 h-4">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Ireland's Finest Dry-Aged Steaks
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Pier 36
          <br />
          <span className="text-[#D4AF37]">Steakhouse</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-2">
          Quayside Dining in Donaghadee
        </p>
        <p className="text-base text-white/60 mb-8">
          Established 1999 • 28-day dry-aged steaks • Fresh local seafood
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#reservations"
            className="px-8 py-4 bg-[#C17817] text-white font-semibold rounded-lg hover:bg-[#A06314] transition-all hover:-translate-y-1 hover:shadow-xl text-lg"
          >
            Reserve Your Table
          </a>
          <a 
            href="#menu"
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all text-lg"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
