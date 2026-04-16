import { useState, useRef, useEffect } from 'react';

export default function TheAgingRoom() {
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

  const steps = [
    {
      day: 'Day 1',
      title: 'Selection',
      description: 'Hand-selected cuts from local Irish farms, delivered fresh to our aging room.'
    },
    {
      day: 'Day 7',
      title: 'The Bloom',
      description: 'Natural enzymes begin breaking down muscle fibers. Flavor starts to develop.'
    },
    {
      day: 'Day 14',
      title: 'Tenderizing',
      description: 'Texture transforms. The meat becomes noticeably more tender.'
    },
    {
      day: 'Day 28',
      title: 'Perfection',
      description: 'Peak flavor and tenderness. Ready for your plate.'
    }
  ];

  return (
    <section id="aging-room" className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=800&q=80"
                alt="Dry-aging room"
                className="w-full h-[500px] object-cover"
              />
              <div className="aging-overlay absolute inset-0" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#722F37] text-white px-6 py-4 rounded-xl shadow-xl">
              <span className="font-caveat text-3xl text-[#D4AF37]">28 Days</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
              Our Signature Process
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              The Aging Room
            </h2>
            
            <p className="text-[#F5F0E8]/70 text-lg mb-8 leading-relaxed">
              Every steak at Pier 36 is dry-aged on-site for a minimum of 28 days. 
              This time-honored process concentrates flavor and breaks down connective tissue, 
              resulting in the most tender, flavorful steaks in Ireland.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#722F37] border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold text-sm">{i + 1}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-[#722F37]/50 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-[#D4AF37] text-sm font-semibold">{step.day}</p>
                    <h4 className="text-white font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-[#F5F0E8]/60 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
