import { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  premium?: boolean;
  pairing?: string;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('steaks');

  const categories = [
    { id: 'steaks', label: 'Dry-Aged Steaks' },
    { id: 'seafood', label: 'Fresh Seafood' },
    { id: 'sides', label: 'Sides & Sauces' },
  ];

  const menuItems: Record<string, MenuItem[]> = {
    steaks: [
      {
        name: '28-Day Aged Ribeye',
        description: 'Our signature cut. Rich marbling, exceptional flavor. Served with roasted garlic butter.',
        price: '£38',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80',
        premium: true,
        pairing: 'Pairs with: Malbec or Cabernet Sauvignon'
      },
      {
        name: 'Filet Mignon',
        description: 'The most tender cut. Lean, buttery-soft texture. Perfect for those who prefer a milder flavor.',
        price: '£42',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
        premium: true,
        pairing: 'Pairs with: Pinot Noir or Merlot'
      },
      {
        name: 'New York Strip',
        description: 'Bold, beefy flavor with a satisfying chew. The steak lover\'s classic.',
        price: '£35',
        image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80',
        pairing: 'Pairs with: Shiraz or Zinfandel'
      },
      {
        name: 'T-Bone',
        description: 'Two steaks in one—the tenderloin and strip, separated by the iconic T-bone.',
        price: '£45',
        image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&q=80',
        pairing: 'Pairs with: Bordeaux or Rioja'
      }
    ],
    seafood: [
      {
        name: 'Fresh Catch of the Day',
        description: 'Locally caught, prepared simply to let the natural flavors shine. Ask your server for today\'s catch.',
        price: 'Market Price',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
        pairing: 'Pairs with: Sauvignon Blanc or Chablis'
      },
      {
        name: 'Pan-Seared Scallops',
        description: 'Diver-caught scallops, golden-seared, served with cauliflower purée and crispy pancetta.',
        price: '£28',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&q=80',
        pairing: 'Pairs with: Chardonnay or Champagne'
      },
      {
        name: 'Grilled Lobster Tail',
        description: 'Cold-water lobster, grilled with garlic butter. Served with seasonal vegetables.',
        price: '£48',
        image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?w=400&q=80',
        premium: true,
        pairing: 'Pairs with: Champagne or White Burgundy'
      }
    ],
    sides: [
      {
        name: 'Truffle Parmesan Fries',
        description: 'Hand-cut potatoes, truffle oil, aged Parmesan.',
        price: '£8',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
      },
      {
        name: 'Creamed Spinach',
        description: 'Fresh spinach in a rich cream sauce with nutmeg.',
        price: '£6',
        image: 'https://images.unsplash.com/photo-1515616238870-1a0d43f8d42d?w=400&q=80'
      },
      {
        name: 'Roasted Bone Marrow',
        description: 'Served with toasted sourdough and parsley salad.',
        price: '£12',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
      },
      {
        name: 'Béarnaise Sauce',
        description: 'Classic French sauce with tarragon and shallots.',
        price: '£4',
        image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'
      }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
            Our Menu
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3">
            The Finest Ingredients
          </h2>
          <p className="text-[#F5F0E8]/60 mt-4 text-lg max-w-2xl mx-auto">
            Every dish crafted with passion. Steaks aged on-site, seafood caught locally.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C17817] text-white'
                  : 'bg-[#1A1A1A] text-[#F5F0E8]/70 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, i) => (
            <article 
              key={i}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg card-lift flex"
            >
              {/* Image */}
              <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.premium && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-[#D4AF37] text-[#0D0D0D] px-2 py-1 rounded text-xs font-bold">
                    Premium
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#D4AF37] ml-4">{item.price}</span>
                </div>
                
                <p className="text-[#F5F0E8]/60 text-sm mb-auto">
                  {item.description}
                </p>

                {item.pairing && (
                  <p className="text-xs text-[#722F37] mt-3 italic">
                    {item.pairing}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
