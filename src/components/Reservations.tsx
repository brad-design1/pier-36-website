import { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation:', formData);
    alert('Thank you! We\'ll confirm your reservation shortly.');
  };

  return (
    <section id="reservations" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
            Book Your Table
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3">
            Make a Reservation
          </h2>
          <p className="text-[#F5F0E8]/60 mt-4 text-lg">
            Join us for an unforgettable dining experience.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#0D0D0D] rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Name *</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Email *</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Phone *</label>
              <input 
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="+44 ..."
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Number of Guests *</label>
              <select 
                required
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="9+">9+ Guests (Private Dining)</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Date *</label>
              <input 
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Time *</label>
              <select 
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="">Select time</option>
                {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Occasion */}
            <div className="md:col-span-2">
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Special Occasion?</label>
              <select 
                value={formData.occasion}
                onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="date">Date Night</option>
                <option value="other">Other Celebration</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-[#F5F0E8]/70 text-sm mb-2">Special Requests</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#F5F0E8]/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Dietary requirements, seating preferences, etc."
              />
            </div>
          </div>

          {/* Submit */}
          <button 
            type="submit"
            className="w-full mt-8 py-4 bg-[#C17817] text-white font-semibold rounded-lg hover:bg-[#A06314] transition-all hover:-translate-y-0.5 text-lg"
          >
            Request Reservation
          </button>

          <p className="text-center text-[#F5F0E8]/50 text-sm mt-4">
            We'll confirm your reservation within 24 hours
          </p>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-[#F5F0E8]/70">
            Prefer to call? <a href="tel:+44XXXXXXXXX" className="text-[#D4AF37] hover:underline">+44 XXXX XXXXXX</a>
          </p>
        </div>
      </div>
    </section>
  );
}
