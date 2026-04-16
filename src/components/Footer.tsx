import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white py-16 border-t border-[#F5F0E8]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-[#D4AF37]">Pier 36</h3>
            <p className="text-[#F5F0E8]/60 mb-6 max-w-sm leading-relaxed">
              Ireland's finest dry-aged steaks, fresh local seafood, and warm hospitality 
              on the quayside in Donaghadee since 1999.
            </p>
            {/* Sister Venue */}
            <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-lg px-4 py-3 w-fit">
              <span className="text-[#F5F0E8]/50 text-sm">Sister venue:</span>
              <a href="https://bowbellscoffee.com" className="text-[#C17817] hover:underline font-medium">
                Bow Bells Coffee
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {['The Story', 'Menu', 'Aging Room', 'Reservations', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#F5F0E8]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Stay Updated</h4>
            <p className="text-[#F5F0E8]/60 text-sm mb-4">
              Special events, seasonal menus, and more.
            </p>
            {subscribed ? (
              <div className="text-[#7A8B69] font-medium">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#F5F0E8]/10 text-white placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]"
                />
                <button 
                  type="submit"
                  className="px-5 py-3 bg-[#C17817] rounded-lg font-semibold hover:bg-[#A06314] transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F5F0E8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F5F0E8]/40 text-sm">
          <p>© 2026 Pier 36 Steakhouse. All rights reserved.</p>
          <p>
            Crafted with <span className="font-caveat text-lg text-[#722F37]">passion</span> in Donaghadee
          </p>
        </div>
      </div>
    </footer>
  );
}
