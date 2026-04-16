export default function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
            Find Us
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3">
            Quayside in Donaghadee
          </h2>
          <p className="text-[#F5F0E8]/60 mt-4 text-lg max-w-2xl mx-auto">
            Overlooking the harbor where the fishing boats bring in the day's catch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#722F37]/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Location</h3>
                <p className="text-[#F5F0E8]/70">
                  Quayside<br />
                  Donaghadee, BT21 0EB<br />
                  Northern Ireland
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#722F37]/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Opening Hours</h3>
                <p className="text-[#F5F0E8]/70">
                  Tue - Sat: 5pm - 10pm<br />
                  Sunday: 5pm - 9pm<br />
                  Monday: Closed
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#722F37]/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Contact</h3>
                <p className="text-[#F5F0E8]/70">
                  Phone: (028) XXXX XXXX<br />
                  Email: hello@pier36.co.uk
                </p>
              </div>
            </div>

            {/* Sister Venue */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C17817]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Sister Venue</h3>
                <p className="text-[#F5F0E8]/70">
                  Also visit <a href="https://bowbellscoffee.com" className="text-[#C17817] hover:underline">Bow Bells Coffee House</a>
                </p>
                <p className="text-[#F5F0E8]/50 text-sm">
                  Same family, same dedication — for your morning coffee and fresh bakes
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.1234567890123!2d-5.5333!3d54.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDM5JzAwLjAiTiA1wrAzMicyMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
