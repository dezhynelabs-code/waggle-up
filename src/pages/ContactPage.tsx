import React from 'react';
import { BUSINESS_CONFIG } from '../data/content';
import { BookingModal } from '../components/BookingModal';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Calendar
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE8DC] text-[#173F35] text-xs font-bold uppercase tracking-wider border border-[#B9CEB7]">
              <MapPin className="w-3.5 h-3.5 text-[#C97858]" />
              FIND US IN HSR LAYOUT • BENGALURU
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F35] tracking-tight leading-tight">
              Get in Touch or <br className="hidden sm:inline" />
              <span className="text-[#C97858]">Visit Us Today.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#444B47] leading-relaxed">
              We're open daily until 11:00 PM in Sector 2, HSR Layout. Whether you want to book a grooming slot, check stock, or get directions, we're here to help.
            </p>
          </div>
        </div>
      </section>


      {/* 2. DIRECT CONTACT CHANNELS & NAP CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone */}
          <div className="bg-white rounded-3xl p-8 border border-[#DDE8DC] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center border border-[#DDE8DC]">
                <Phone className="w-6 h-6 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
                Call Our Store
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Direct phone assistance for immediate questions, appointment confirmations, and inventory.
              </p>
              <div className="pt-2 font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-[#173F35]">
                {BUSINESS_CONFIG.phone}
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_CONFIG.rawPhone}`}
              className="w-full py-3 px-4 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#C97858]" />
              Call Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl p-8 border border-[#DDE8DC] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <MessageCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
                WhatsApp Us
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Send photos of your pet's coat, ask about specific products, or schedule a grooming time.
              </p>
              <div className="pt-2 font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-emerald-800">
                Fast Response Online
              </div>
            </div>

            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I have an enquiry about grooming services and store visits in HSR Layout.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Open WhatsApp Chat
            </a>
          </div>

          {/* Hours & Schedule */}
          <div className="bg-white rounded-3xl p-8 border border-[#DDE8DC] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center border border-[#DDE8DC]">
                <Clock className="w-6 h-6 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
                Store & Spa Hours
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Open 7 days a week, morning to late night for your convenience.
              </p>
              <div className="pt-2 text-sm text-[#173F35] font-semibold">
                Mon – Sun: 10:00 AM – 11:00 PM
              </div>
            </div>

            <div className="py-2.5 px-3 rounded-xl bg-[#EDF4EC] text-[#173F35] text-xs font-semibold text-center border border-[#DDE8DC]">
              ✓ Open Late Everyday Till 11 PM
            </div>
          </div>

        </div>
      </section>


      {/* 3. STORE LOCATION & INTERACTIVE DIRECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] border border-[#DDE8DC] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
              <MapPin className="w-3.5 h-3.5" /> PHYSICAL STORE LOCATION
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl text-[#173F35]">
              Sector 2, HSR Layout, Bengaluru
            </h2>
            <div className="text-sm text-[#444B47] space-y-1.5 leading-relaxed bg-white p-5 rounded-2xl border border-[#DDE8DC]">
              <div className="font-bold text-[#173F35]">Waggle Up Pet Store & Spa</div>
              <div>{BUSINESS_CONFIG.address.line1}</div>
              <div>{BUSINESS_CONFIG.address.line2}</div>
              <div>{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}</div>
              <div>Landmark: Garden Layout, Sector 2</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-[#C97858]" />
                Open Live GPS Navigation
              </a>
              <a
                href={BUSINESS_CONFIG.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white border border-[#DDE8DC] text-[#173F35] text-xs font-bold hover:bg-[#FAF7F0] flex items-center justify-center gap-2 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-[#DDE8DC] shadow-xs text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#173F35] text-white flex items-center justify-center mx-auto shadow-sm">
              <MapPin className="w-7 h-7 text-[#C97858]" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#173F35]">
              Easy Access in HSR Layout
            </h3>
            <p className="text-xs text-[#444B47] max-w-sm mx-auto leading-relaxed">
              Quiet residential street with convenient drop-off parking for dogs and carriers right outside our door.
            </p>
            <div className="p-3 bg-[#FAF7F0] rounded-xl text-[11px] text-[#6C7570] border border-[#DDE8DC]">
              Serving HSR Layout Sector 1 to 7, Koramangala, Haralur, Bellandur & BTM Layout
            </div>
          </div>

        </div>
      </section>


      {/* 4. EMBEDDED GROOMING ENQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Calendar className="w-3.5 h-3.5" /> GROOMING APPOINTMENT
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#173F35] tracking-tight">
            Send an Online Booking Request
          </h2>
          <p className="text-sm text-[#444B47]">
            Complete this form and our team will get in touch with slot availability.
          </p>
        </div>

        <BookingModal
          isOpen={true}
          onClose={() => {}}
          isEmbedded={true}
        />
      </section>

    </div>
  );
};
