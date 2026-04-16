import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "The ribeye was absolutely perfect. 28 days of aging makes all the difference. Best steak I've had anywhere.",
      author: "Michael T.",
      location: "Belfast",
      rating: 5,
      ordered: "28-Day Aged Ribeye"
    },
    {
      quote: "Our anniversary dinner was unforgettable. The waterfront views, the service, the food—everything was exceptional.",
      author: "Sarah & James",
      location: "Dublin",
      rating: 5,
      ordered: "T-Bone, Grilled Lobster"
    },
    {
      quote: "The aging room tour was fascinating. You can taste the care that goes into every cut. A true gem in Donaghadee.",
      author: "Claire W.",
      location: "London",
      rating: 5,
      ordered: "Filet Mignon"
    },
    {
      quote: "Fresh scallops caught that morning, perfectly seared. The seafood here rivals any coastal restaurant I've visited.",
      author: "David M.",
      location: "Edinburgh",
      rating: 5,
      ordered: "Pan-Seared Scallops"
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
            What Our Guests Say
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3">
            Unforgettable Evenings
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-[#1A1A1A] rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 text-[#D4AF37]/20 font-playfair text-7xl leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="#D4AF37" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair text-xl text-[#F5F0E8] mb-6 relative z-10 italic leading-relaxed">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#F5F0E8]/10 pt-4">
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-[#F5F0E8]/50">{t.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#F5F0E8]/50">Ordered:</p>
                  <p className="text-sm text-[#D4AF37]">{t.ordered}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
