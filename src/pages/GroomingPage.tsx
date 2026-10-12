import React, { useState } from 'react';
import { 
  SERVICES, 
  GROOMING_STEPS, 
  FAQS, 
  BUSINESS_CONFIG 
} from '../data/content';
import { BookingModal } from '../components/BookingModal';
import { 
  Scissors, 
  Calendar, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Clock, 
  Heart
} from 'lucide-react';

interface GroomingPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const GroomingPage: React.FC<GroomingPageProps> = ({ onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 md:space-y-28">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE8DC] text-[#173F35] text-xs font-bold uppercase tracking-wider border border-[#B9CEB7]">
              <Sparkles className="w-3.5 h-3.5 text-[#C97858]" />
              GENTLE GROOMING & PET SPA • HSR LAYOUT
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F35] tracking-tight leading-tight">
              Gentle Care for Every Coat, <br className="hidden sm:inline" />
              <span className="text-[#C97858]">Calm Patience for Every Pet.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#444B47] leading-relaxed">
              We believe grooming should feel like a refreshing day of care, not a stressful ordeal. Our certified handlers take the time your pet needs to feel safe and relaxed.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 btn-hover"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I'd like to ask about available grooming slots in HSR Layout.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Our Stylists
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 2. CONFIRMED SERVICE CATEGORIES & DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Scissors className="w-3.5 h-3.5" /> GROOMING MENU
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            Tailored Services For Dogs & Cats
          </h2>
          <p className="text-base text-[#444B47]">
            Select a service to explore the detailed inclusions and process.
          </p>
        </div>

        {/* Interactive service tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start lg:justify-center scrollbar-none">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedServiceId(s.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedServiceId === s.id
                  ? 'bg-[#173F35] text-white shadow-sm'
                  : 'bg-white text-[#444B47] hover:bg-[#DDE8DC]/50 border border-[#DDE8DC]'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="mt-6 bg-white rounded-3xl border border-[#DDE8DC] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C97858] uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Service Breakdown
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#173F35]">
                {activeService.name}
              </h3>
              <p className="text-sm text-[#444B47] leading-relaxed">
                {activeService.fullDesc}
              </p>

              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                  What's Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#444B47]">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#FAF7F0] p-2.5 rounded-lg border border-[#DDE8DC]/60">
                      <Check className="w-3.5 h-3.5 text-[#173F35] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#EDF4EC] border border-[#DDE8DC] text-xs text-[#173F35]">
                <strong>Ideal for:</strong> {activeService.suitableFor}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(activeService.id)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 btn-hover"
              >
                <Calendar className="w-4 h-4" />
                Book This Service
              </button>
              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Waggle Up! I'd like to book ${activeService.name} for my pet. Could you share price and availability?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-[#DDE8DC] text-[#173F35] hover:bg-[#FAF7F0] text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#173F35]" />
                Enquire via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF7F0] relative min-h-[320px] lg:min-h-full">
            <img
              src={activeService.image}
              alt={`${activeService.name} at Waggle Up Pet Store & Spa HSR Layout`}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* 3. BEFORE & AFTER GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] border border-[#DDE8DC] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
              <Scissors className="w-3.5 h-3.5" /> REAL TRANSFORMATIONS
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
              Before & After Grooming Care
            </h2>
            <p className="text-base text-[#444B47]">
              Notice the gentle eye clearing, sanitary grooming, and clean, fluffy teddy coat finish.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#DDE8DC] shadow-md bg-white">
            <img
              src="/images/before-after.jpg"
              alt="Side by side before and after grooming comparison of a dog at Waggle Up HSR Layout"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white text-xs text-[#444B47] text-center border-t border-[#DDE8DC]">
              Gentle teddy trim and eye contouring done with patient scissoring — zero harsh pulling.
            </div>
          </div>
        </div>
      </section>


      {/* 4. GROOMING PROCESS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Clock className="w-3.5 h-3.5" /> STEP-BY-STEP
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            The Waggle Up Grooming Journey
          </h2>
          <p className="text-base text-[#444B47]">
            How we ensure a smooth, comfortable experience from drop-off to happy tail wagging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {GROOMING_STEPS.map((step) => (
            <div 
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-[#DDE8DC] space-y-2 relative shadow-xs"
            >
              <div className="font-['Plus_Jakarta_Sans'] font-black text-2xl text-[#C97858]">
                {step.step}
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">
                {step.title}
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Heart className="w-3.5 h-3.5" /> COMMON QUESTIONS
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#173F35] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-[#DDE8DC] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-[#173F35]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#C97858] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6C7570] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#444B47] leading-relaxed border-t border-[#DDE8DC]/60 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 6. EMBEDDED BOOKING ENQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Calendar className="w-3.5 h-3.5" /> SCHEDULE A VISIT
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#173F35] tracking-tight">
            Book Your Pet's Grooming Appointment
          </h2>
          <p className="text-sm text-[#444B47]">
            Fill out the form below and our HSR Layout team will confirm your time slot promptly.
          </p>
        </div>

        <BookingModal
          isOpen={true}
          onClose={() => {}}
          initialServiceId={selectedServiceId}
          isEmbedded={true}
        />
      </section>

    </div>
  );
};
