export default function AwardsMarquee() {
  const awards = [
    { title: "Ireland's Finest Steaks", org: '28-Day Dry-Aged On-Site' },
    { title: 'Quayside Since 1999', org: 'Nearly 25 Years' },
    { title: 'Waterworth Family', org: 'Award-Winning Hospitality' },
    { title: 'Local Seafood', org: 'Caught Off Our Shores' },
    { title: 'Intimate Dining', org: 'Exceptional Service' },
  ];

  // Duplicate for seamless loop
  const items = [...awards, ...awards];

  return (
    <section className="bg-[#722F37] py-6 overflow-hidden">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {items.map((award, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="#D4AF37" className="w-6 h-6">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="text-white">
              <p className="font-semibold text-lg">{award.title}</p>
              <p className="text-white/80 text-sm">{award.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
