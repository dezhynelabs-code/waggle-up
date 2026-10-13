import React from 'react';
import type { PageType } from '../types';
import { 
  BUSINESS_CONFIG, 
  SERVICES, 
  PRODUCT_CATEGORIES, 
  REVIEWS, 
  TEAM_MEMBERS 
} from '../data/content';
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  ArrowRight, 
  Check, 
  Star, 
  ShieldCheck, 
  Scissors, 
  ShoppingBag, 
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 md:space-y-28">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-7">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE8DC] text-[#173F35] text-xs font-bold uppercase tracking-wider border border-[#B9CEB7]">
                <Sparkles className="w-3.5 h-3.5 text-[#C97858]" />
                YOUR NEIGHBOURHOOD PET STORE & SPA • HSR LAYOUT
              </div>

              {/* Main Headline */}
              <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F35] leading-[1.12] tracking-tight">
                A Little More Love in <span className="text-[#C97858]">Every Wag.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#444B47] leading-relaxed max-w-2xl">
                From everyday essentials to gentle grooming and spa days, we're here to help your furry family feel their best in a calm, patient, and welcoming environment.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-book-grooming-btn"
                  onClick={() => onOpenBooking()}
                  className="px-7 py-4 rounded-xl bg-[#173F35] hover:bg-[#215447] text-[#FAF7F0] font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-95 btn-hover cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#FAF7F0]" />
                  Book a Grooming Session
                </button>

                <button
                  id="hero-explore-shop-btn"
                  onClick={() => onNavigate('shop')}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-[#DDE8DC]/40 text-[#173F35] font-semibold text-base border border-[#DDE8DC] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5 text-[#C97858]" />
                  Explore Pet Essentials
                </button>
              </div>

              {/* Trust statement & Local tags */}
              <div className="pt-4 border-t border-[#DDE8DC] flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#444B47]">
                <div className="font-semibold text-[#173F35] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C97858]" />
                  Thoughtful care. Friendly people. Happy pets.
                </div>
                <div className="hidden sm:inline text-[#B9CEB7]">|</div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#C97858]" /> Women-Owned
                  </span>
                  <span>•</span>
                  <span>LGBTQ+ Friendly</span>
                  <span>•</span>
                  <span>Open Daily till 11 PM</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative organic aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#DDE8DC]/80 via-[#FAF7F0] to-[#E09071]/20 rounded-3xl -rotate-2 -z-10 blur-sm"></div>

                {/* Main Hero Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[4/3] bg-[#FAF7F0]">
                  <img
                    src="/images/hero-dog.jpg"
                    alt="Happy freshly groomed golden retriever smiling in Waggle Up Pet Store & Spa studio"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Overlaid caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#173F35] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Calm, Fear-Free Environment
                      </div>
                      <div className="text-[11px] text-[#6C7570] mt-0.5">
                        Gentle hydrobaths & precision scissor styling
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#C97858] bg-[#FAF7F0] px-2.5 py-1 rounded-md border border-[#DDE8DC]">
                      Sector 2, HSR
                    </span>
                  </div>
                </div>

                {/* Overlapping mini trust card */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FAF7F0] border border-[#DDE8DC] rounded-xl p-3 shadow-lg items-center gap-2.5 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="w-9 h-9 rounded-lg bg-[#173F35] text-white flex items-center justify-center font-bold text-xs">
                    11 PM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#173F35]">Open Late Night</div>
                    <div className="text-[10px] text-[#6C7570]">Daily until 11:00 PM</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. QUICK SERVICE & BENEFIT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#DDE8DC]/50 rounded-2xl p-6 sm:p-8 border border-[#DDE8DC]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#173F35] flex items-center justify-center shrink-0 shadow-xs border border-[#B9CEB7]">
                <Scissors className="w-5 h-5 text-[#C97858]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">Gentle Grooming</h3>
                <p className="text-xs text-[#444B47] mt-1 leading-relaxed">
                  Patient, unhurried handling tailored to your pet's comfort and coat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#173F35] flex items-center justify-center shrink-0 shadow-xs border border-[#B9CEB7]">
                <ShoppingBag className="w-5 h-5 text-[#C97858]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">Everyday Essentials</h3>
                <p className="text-xs text-[#444B47] mt-1 leading-relaxed">
                  Carefully chosen pet foods, healthy treats, durable toys, and hygiene care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#173F35] flex items-center justify-center shrink-0 shadow-xs border border-[#B9CEB7]">
                <Sparkles className="w-5 h-5 text-[#C97858]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">Friendly Guidance</h3>
                <p className="text-xs text-[#444B47] mt-1 leading-relaxed">
                  Supportive conversations for experienced owners and first-time pet parents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#173F35] flex items-center justify-center shrink-0 shadow-xs border border-[#B9CEB7]">
                <MapPin className="w-5 h-5 text-[#C97858]" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">Convenient HSR Location</h3>
                <p className="text-xs text-[#444B47] mt-1 leading-relaxed">
                  Garden Layout, Sector 2, with convenient evening hours up to 11 PM.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. GROOMING AND SPA SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Scissors className="w-3.5 h-3.5" /> PET GROOMING & SPA SERVICES
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            Good Grooming. Great Feelings.
          </h2>
          <p className="text-base text-[#444B47] leading-relaxed">
            A thoughtful grooming experience tailored to your pet's needs, comfort, and coat.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl border border-[#DDE8DC] overflow-hidden flex flex-col justify-between card-hover group shadow-xs"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F0]">
                  <img
                    src={service.image}
                    alt={`${service.name} for pets at Waggle Up HSR Layout`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {service.isPopular && (
                    <span className="absolute top-3 right-3 bg-[#173F35] text-[#FAF7F0] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      Popular Choice
                    </span>
                  )}
                </div>

                {/* Service Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35] group-hover:text-[#215447] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#444B47] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 text-xs text-[#6C7570] border-t border-[#DDE8DC]/60">
                    <span className="font-semibold text-[#173F35]">Best for:</span> {service.suitableFor}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-semibold text-center transition-all shadow-xs"
                >
                  Book Session
                </button>
                <a
                  href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Waggle Up! I would like to enquire about ${service.name} for my pet in HSR Layout.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#DDE8DC]/60 hover:bg-[#DDE8DC] text-[#173F35] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#DDE8DC]"
                  title={`Enquire on WhatsApp about ${service.name}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#173F35]" />
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Banner Below Cards */}
        <div className="mt-12 bg-[#FAF7F0] border-2 border-dashed border-[#B9CEB7] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
              Not Sure What Your Pet Needs? Let's Talk.
            </h4>
            <p className="text-sm text-[#444B47]">
              Every coat is unique. Call or send a quick WhatsApp picture of your pet to our stylists for friendly guidance.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.rawPhone}`}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-xs font-bold text-[#173F35] hover:bg-[#EDF4EC] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C97858]" />
              Call {BUSINESS_CONFIG.phone}
            </a>
            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I'm not sure which grooming service my pet needs. Could you give me advice?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-xs font-bold text-white transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* 4. PET SUPPLIES & ESSENTIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <ShoppingBag className="w-3.5 h-3.5" /> PET STORE & NUTRITION
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            Everything Your Pet Loves, in One Place.
          </h2>
          <p className="text-base text-[#444B47] leading-relaxed">
            Explore everyday essentials, tasty treats, playful toys, and accessories for your furry companion.
          </p>
        </div>

        {/* Feature store showcase banner */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-[#DDE8DC] shadow-sm bg-white grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold text-[#C97858] uppercase tracking-wider">
              IN-STORE AT SECTOR 2, HSR LAYOUT
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#173F35] leading-snug">
              Curated Brands. Verified Nutrition. No Compromises.
            </h3>
            <p className="text-sm text-[#444B47] leading-relaxed">
              We stock only pet foods, treats, and supplements we would confidently give our own dogs and cats. From hypoallergenic diets to durable dental chews and interactive brain games.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onNavigate('shop')}
                className="px-5 py-2.5 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-bold flex items-center gap-2 transition-all"
              >
                Browse Full Showcase <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#FAF7F0] relative min-h-[260px] lg:min-h-full">
            <img 
              src="/images/store-supplies.jpg"
              alt="Shelves of premium pet food, treats, toys, and accessories in Waggle Up pet store Bangalore"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-2xl border border-[#DDE8DC] overflow-hidden flex flex-col justify-between card-hover shadow-xs group"
            >
              {/* Category Image Banner */}
              {cat.image && (
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#DDE8DC]/40">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute top-3 right-3 text-[11px] font-semibold text-[#173F35] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#DDE8DC] shadow-xs">
                    {cat.itemCount}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {!cat.image && (
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[#DDE8DC]/60 text-[#173F35] flex items-center justify-center font-bold">
                        <ShoppingBag className="w-4 h-4 text-[#C97858]" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#6C7570] bg-[#FAF7F0] px-2 py-0.5 rounded-md border border-[#DDE8DC]">
                        {cat.itemCount}
                      </span>
                    </div>
                  )}

                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#173F35] group-hover:text-[#C97858] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#444B47] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium bg-[#FAF7F0] text-[#173F35] px-2 py-0.5 rounded border border-[#DDE8DC]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DDE8DC]/60 flex items-center justify-between">
                  <a
                    href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Waggle Up! Could you please share available brands and pricing for ${cat.name}?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#173F35] hover:text-[#C97858] flex items-center gap-1 transition-colors"
                  >
                    Ask About Products <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. WHY PET PARENTS CHOOSE US */}
      <section className="bg-[#EDF4EC]/60 py-16 md:py-20 border-y border-[#DDE8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
              <ShieldCheck className="w-3.5 h-3.5" /> OUR CARE STANDARDS
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
              Care That Goes Beyond the Cut.
            </h2>
            <p className="text-base text-[#444B47] leading-relaxed">
              We know your pet is family. Here is what you can always expect when you walk through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold text-lg border border-[#DDE8DC]">
                01
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Patient, Gentle Handling
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                A thoughtful, fear-aware approach to helping pets feel safe. We never drag or force pets through services when they need a gentle breather.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold text-lg border border-[#DDE8DC]">
                02
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Attention to Detail
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Grooming that pays attention to skin health, coat condition, paw hygiene, and your exact requested scissor length.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold text-lg border border-[#DDE8DC]">
                03
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                Friendly Guidance
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                Honest, non-judgmental conversations for first-time pet parents on home brushing, dematting prevention, and dietary wellbeing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold text-lg border border-[#DDE8DC]">
                04
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                A Familiar Place for Your Pet
              </h3>
              <p className="text-xs text-[#444B47] leading-relaxed">
                An opportunity to build a comfortable, ongoing routine where familiar groomers recognize your pet's name, preferences, and quirks.
              </p>
            </div>

          </div>

          {/* Emotional photography strip */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[#DDE8DC] grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="p-8 sm:p-10 flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C97858] uppercase">
                <Heart className="w-3.5 h-3.5" /> Compassionate Hands
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#173F35]">
                "We measure our success by how happily a dog walks into our door the next time."
              </h3>
              <p className="text-sm text-[#444B47] leading-relaxed">
                Grooming shouldn't be an ordeal. By taking a little more time, using warm water, praising positive behavior, and keeping our salon clean and calm, we help pets feel comfortable with every visit.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <img
                src="/images/happy-pet-parent.jpg"
                alt="Happy Bengaluru pet owner hugging clean freshly groomed dog"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 6. CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <Star className="w-3.5 h-3.5 fill-[#C97858]" /> VERIFIED COMMUNITY FEEDBACK
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            Happy Pets. Happier Pet Parents.
          </h2>
          <p className="text-base text-[#444B47] leading-relaxed">
            Real feedback from pet parents in HSR Layout and surrounding neighbourhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-[#DDE8DC] flex flex-col justify-between space-y-5 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#173F35] bg-[#DDE8DC]/60 px-2.5 py-0.5 rounded-full border border-[#DDE8DC]">
                    {rev.highlightTheme}
                  </span>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">
                  "{rev.excerpt}"
                </p>

                <p className="text-sm text-[#444B47] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE8DC]/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#173F35]">{rev.author}</div>
                  <div className="text-[#6C7570]">Parent of {rev.petName} ({rev.petBreed})</div>
                </div>
                <div className="text-[11px] text-[#6C7570] text-right font-medium">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS_CONFIG.maps.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#DDE8DC] text-xs font-bold text-[#173F35] hover:bg-[#FAF7F0] shadow-xs transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C97858]" />
            Read or Write a Review on Google Maps
          </a>
        </div>
      </section>


      {/* 7. MEET THE TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] border border-[#DDE8DC] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
              <Heart className="w-3.5 h-3.5 text-[#C97858]" /> MEET THE TEAM
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
              Good Hands Make All the Difference.
            </h2>
            <p className="text-base text-[#444B47] leading-relaxed">
              We are pet lovers first, groomers and shopkeepers second. Meet the faces who welcome you and your furry companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#DDE8DC] space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#173F35] text-[#FAF7F0] flex items-center justify-center font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#173F35]">
                      {member.name}
                    </h3>
                    <div className="text-xs text-[#C97858] font-semibold">{member.role}</div>
                  </div>
                </div>

                <p className="text-xs text-[#444B47] leading-relaxed">
                  {member.bio}
                </p>

                <div className="pt-3 border-t border-[#DDE8DC]/60 text-xs text-[#173F35]">
                  <strong>Focus:</strong> {member.speciality}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. ABOUT THE BUSINESS & LOCAL COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#173F35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#215447] text-[#DDE8DC] text-xs font-semibold uppercase tracking-wider border border-[#2d6f5e]">
              <Sparkles className="w-3.5 h-3.5 text-[#C97858]" /> YOUR LOCAL PET-CARE COMMUNITY
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF7F0] leading-tight">
              A Welcoming Space for All Pets & Pet Parents.
            </h2>

            <p className="text-base sm:text-lg text-[#DDE8DC] leading-relaxed">
              Waggle Up Pet Store & Spa brings together everyday pet essentials and gentle grooming services in the heart of HSR Layout, Bengaluru. Whether you're picking up your pet's favourite treats or planning their next grooming session, our goal is to make every visit welcoming, helpful, and full of care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-[#DDE8DC]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C97858] shrink-0" />
                <span>Proudly Women-Owned & Independent</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C97858] shrink-0" />
                <span>Safe, Inclusive & LGBTQ+ Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C97858] shrink-0" />
                <span>Fear-Aware, Patient Handling Mindset</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C97858] shrink-0" />
                <span>Open till 11:00 PM Every Single Day</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-[#FAF7F0] text-[#173F35] font-bold text-xs hover:bg-white transition-colors"
              >
                Read Our Story & Values
              </button>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-xl bg-[#215447] text-[#FAF7F0] font-bold text-xs hover:bg-[#2d6f5e] transition-colors border border-[#2d6f5e]"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 9. LOCATION AND CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97858]">
            <MapPin className="w-3.5 h-3.5" /> VISIT US IN HSR LAYOUT
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#173F35] tracking-tight">
            Come Say Hello. Bring Your Furry Friend.
          </h2>
          <p className="text-base text-[#444B47] leading-relaxed">
            Conveniently located in Sector 2, Garden Layout with easy parking and late hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#DDE8DC] flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center shrink-0 border border-[#DDE8DC]">
                  <MapPin className="w-6 h-6 text-[#C97858]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">Store Address</h3>
                  <p className="text-sm text-[#444B47] mt-1 leading-relaxed">
                    {BUSINESS_CONFIG.address.line1}<br />
                    {BUSINESS_CONFIG.address.line2}<br />
                    {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center shrink-0 border border-[#DDE8DC]">
                  <Clock className="w-6 h-6 text-[#C97858]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">Business & Grooming Hours</h3>
                  <p className="text-sm text-[#444B47] mt-1 leading-relaxed">
                    <strong>Monday to Sunday:</strong> 10:00 AM – 11:00 PM<br />
                    <span className="text-xs text-[#6C7570]">Open late daily for convenient evening grooming & food runs</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center shrink-0 border border-[#DDE8DC]">
                  <Phone className="w-6 h-6 text-[#C97858]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#173F35]">Direct Contact</h3>
                  <p className="text-sm text-[#444B47] mt-1">
                    Phone: <a href={`tel:${BUSINESS_CONFIG.rawPhone}`} className="font-bold text-[#173F35] hover:underline">{BUSINESS_CONFIG.phone}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Direct buttons */}
            <div className="pt-4 border-t border-[#DDE8DC]/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C97858]" />
                Get Directions
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.rawPhone}`}
                className="py-3 px-3 rounded-xl bg-white border border-[#DDE8DC] hover:bg-[#FAF7F0] text-[#173F35] text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C97858]" />
                Call Now
              </a>

              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I would like directions or details on store availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Directions Card */}
          <div className="lg:col-span-6 bg-[#DDE8DC]/40 rounded-3xl p-6 sm:p-8 border border-[#DDE8DC] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#173F35] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C97858]" /> GOOGLE MAPS DESTINATION
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Verified Local Address
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#DDE8DC] space-y-3">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#173F35]">
                  Waggle Up Pet Store & Spa
                </h4>
                <p className="text-xs text-[#444B47] leading-relaxed">
                  19th Main Road, 799, 23rd Cross Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                </p>
                <div className="pt-2 text-xs text-[#6C7570] flex items-center gap-4">
                  <span>📍 Garden Layout Landmark</span>
                  <span>🚗 Easy street parking</span>
                </div>
              </div>

              {/* Map preview box with live direction trigger */}
              <div className="relative rounded-2xl overflow-hidden border border-[#DDE8DC] aspect-[16/9] bg-emerald-50 flex items-center justify-center text-center p-6">
                <div className="space-y-3 z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-[#173F35] text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-6 h-6 text-[#C97858]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#173F35]">Tap to Navigate in Google Maps</h5>
                    <p className="text-xs text-[#444B47] mt-0.5">
                      Direct GPS route to Waggle Up storefront in HSR Sector 2
                    </p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#173F35] text-white text-xs font-bold hover:bg-[#215447] transition-all shadow-sm"
                  >
                    Open Live Navigation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            <div className="mt-4 text-[11px] text-[#6C7570] text-center">
              Coordinates: 12.9116° N, 77.6534° E • HSR Layout Sector 2
            </div>
          </div>

        </div>
      </section>


      {/* 10. FINAL CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#FAF7F0] rounded-3xl border-2 border-[#DDE8DC] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="max-w-2xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C97858]">
              READY FOR A FRESH, COMFORTABLE GROOM?
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F35] tracking-tight">
              Their Next Happy Grooming Day Starts Here.
            </h2>
            <p className="text-base text-[#444B47] leading-relaxed">
              Tell us a little about your pet, and we'll help you explore the right grooming options tailored to their comfort and coat.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 btn-hover"
              >
                <Calendar className="w-4 h-4" />
                Book a Grooming Session
              </button>

              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I'd like to book a grooming appointment for my pet in HSR Layout.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
