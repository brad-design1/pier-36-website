import { useState, useRef, useEffect } from 'react';

export default function OurStory() {
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
    <section id="the-story" className="py-24 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Pier 36 Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="aging-overlay absolute inset-0" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#C17817] text-white px-6 py-4 rounded-xl shadow-xl">
              <span className="font-caveat text-3xl">Since 1999</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              A Quarter Century of
              <br />
              <span className="text-[#D4AF37]">Culinary Excellence</span>
            </h2>
            
            <p className="text-[#F5F0E8]/70 text-lg mb-6 leading-relaxed">
              For nearly 25 years, Pier 36 has been the heart of Donaghadee's dining scene. 
              Founded in 1999 by the Waterworth family, our quayside pub has become synonymous 
              with exceptional steaks, fresh seafood, and warm hospitality.
            </p>

            <p className="text-[#F5F0E8]/70 text-lg mb-8 leading-relaxed">
              Our intimate setting overlooks the harbor, where the fishing boats bring in 
              the day's catch. Every steak is dry-aged in our on-site aging room, and every 
              dish is prepared with the same dedication that earned us recognition as home 
              to Ireland's finest steaks.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <p className="font-playfair text-xl italic text-[#F5F0E8]">
                "Where tradition meets the pinnacle of culinary craftsmanship."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
