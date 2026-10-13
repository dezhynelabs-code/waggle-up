import React from 'react';
import type { PageType } from '../types';
import { BUSINESS_CONFIG, TEAM_MEMBERS } from '../data/content';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Compass
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 md:space-y-28">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE8DC] text-[#173F35] text-xs font-bold uppercase tracking-wider border border-[#B9CEB7]">
              <Heart className="w-3.5 h-3.5 text-[#C97858]" />
              OUR STORY & PHILOSOPHY • HSR LAYOUT
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F35] tracking-tight leading-tight">
              Built on Kindness, Patience, & <br className="hidden sm:inline" />
              <span className="text-[#C97858]">Genuine Care for Animals.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#444B47] leading-relaxed">
              Waggle Up Pet Store & Spa brings together everyday pet essentials and gentle grooming services in the heart of HSR Layout, Bengaluru.
            </p>
          </div>
        </div>
      </section>


      {/* 2. OUR STORY & INCLUSIVE IDENTITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C97858]">
              WHY WE STARTED WAGGLE UP
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#173F35] leading-snug">
              "We wanted a neighbourhood pet space where pets feel understood, not hurried."
            </h2>
            <p className="text-base text-[#444B47] leading-relaxed">
              Too often, grooming salons can feel loud, crowded, and rushed. We created Waggle Up as a quiet sanctuary where first-time puppies, sensitive cats, and fidgety older dogs can receive patient, gentle care at their own pace.
            </p>
            <p className="text-base text-[#444B47] leading-relaxed">
              Whether you are dropping in for grain-free food after work at 10 PM, asking advice on your Indie rescue's tick routine, or treating your companion to a spa bath, our team welcomes you with warmth and respect.
            </p>

            {/* Inclusivity & Community Statement */}
            <div className="p-6 rounded-2xl bg-[#DDE8DC]/50 border border-[#DDE8DC] space-y-3">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C97858]" />
                An Inclusive, Safe Community Space
              </h3>
              <p className="text-xs sm:text-sm text-[#444B47] leading-relaxed">
                Waggle Up is proudly <strong>women-owned</strong> and an <strong>LGBTQ+ friendly</strong> safe space. We celebrate diversity in all its forms—in our human community and across every breed, size, and temperament of pet that walks through our doors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[4/3]">
              <img
                src="/images/store-supplies.jpg"
                alt="Waggle Up Pet Store & Spa welcoming interior in Bangalore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 3. FOUR CORE VALUES */}
      <section className="bg-[#FAF7F0] border-y border-[#DDE8DC] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C97858]">
              WHAT GUIDES OUR WORK
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#173F35] tracking-tight">
              Our Service Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Patience Above Pacing
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                If a dog needs three breaks during nail trimming, we take three breaks. We never force or rush an animal to beat the clock.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Spotless Hygiene
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Grooming tables, stainless steel tubs, shears, and towels are disinfected between every pet session to protect pet health.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                First-Timer Support
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                No question is too basic. We love helping first-time pet parents learn home coat maintenance and choose right foods.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5 text-[#C97858]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Accessible Hours
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Open till 11 PM every evening so working professionals in Bengaluru have peace of mind regarding pet care.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 4. THE TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C97858]">
            THE PEOPLE BEHIND WAGGLE UP
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#173F35] tracking-tight">
            Meet Our Passionate Caretakers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-[#DDE8DC] space-y-4 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#173F35] text-white flex items-center justify-center font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#C97858] mt-0.5">{member.role}</div>
                </div>
              </div>

              <p className="text-sm text-[#444B47] leading-relaxed">
                {member.bio}
              </p>

              <div className="pt-3 border-t border-[#DDE8DC]/60 text-xs text-[#173F35]">
                <strong>Core Focus:</strong> {member.speciality}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. LOCATION & CONNECT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#173F35] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl text-white">
              We'd Love to Welcome You & Your Pet
            </h2>
            <p className="text-sm text-[#DDE8DC] leading-relaxed">
              Drop by 19th Main, Garden Layout, Sector 2, HSR Layout, or get in touch online. We can't wait to meet you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="/grooming"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('grooming');
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20 inline-flex items-center justify-center cursor-pointer"
            >
              View Grooming Menu
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF7F0] text-[#173F35] font-bold text-xs hover:bg-white transition-all shadow-sm"
            >
              Book Grooming Session
            </button>
            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I'd like to ask a question about your HSR Layout store.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#215447] text-white font-bold text-xs hover:bg-[#2d6f5e] transition-colors border border-[#2d6f5e]"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
