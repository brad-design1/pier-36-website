import { useState, useRef, useEffect } from 'react';

export default function HopeStreet() {
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

  return (
    <section className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Content */}
          <div>
            <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
              More Than Food
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              As Seen on
              <br />
              <span className="text-[#D4AF37]">BBC's Hope Street</span>
            </h2>
            
            <p className="text-[#F5F0E8]/70 text-lg mb-6 leading-relaxed">
              Pier 36 isn't just known for its delightful dining and spirited atmosphere — 
              it's also a star on the screen.
            </p>

            <p className="text-[#F5F0E8]/70 text-lg mb-8 leading-relaxed">
              For several days each year, our establishment transforms into <strong className="text-white">'The Commodore'</strong> 
              {" "}as seen on the beloved BBC series, <em>Hope Street</em>. Step into the limelight and 
              experience the charm of a venue that's captured the hearts of viewers, right here in the real world.
            </p>

            {/* BBC Badge */}
            <div className="inline-flex items-center gap-3 bg-[#722F37]/30 border border-[#D4AF37]/30 rounded-xl px-5 py-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">BBC</span>
              </div>
              <div>
                <p className="text-white font-semibold">Hope Street</p>
                <p className="text-[#F5F0E8]/60 text-sm">Filming Location</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
                alt="Pier 36 - Hope Street filming location"
                className="w-full h-[500px] object-cover"
              />
              <div className="aging-overlay absolute inset-0" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#722F37] text-white px-6 py-4 rounded-xl shadow-xl border border-[#D4AF37]/30">
              <span className="font-caveat text-3xl text-[#D4AF37]">The Commodore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
