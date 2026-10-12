import React from 'react';
import type { PageType } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  ExternalLink, 
  Calendar, 
  Sparkles 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#173F35] text-[#FAF7F0] border-t border-[#215447] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#215447]">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#173F35] flex items-center justify-center font-bold">
                <svg className="w-6 h-6 fill-current text-[#173F35]" viewBox="0 0 24 24">
                  <path d="M12 12c-2.2 0-4 1.8-4 4 0 1.9 1.3 3.5 3 3.9v.1h2v-.1c1.7-.4 3-2 3-3.9 0-2.2-1.8-4-4-4zm-5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7.5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-white tracking-tight">
                Waggle Up
              </span>
            </div>

            <p className="text-sm text-[#DDE8DC] leading-relaxed">
              Your neighbourhood pet store and gentle grooming spa in HSR Layout, Bengaluru. A safe, patient haven built for the wellbeing of dogs, cats, and the people who love them.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-[#215447] text-[#DDE8DC] border border-[#2d6f5e] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C97858]" /> Women-Owned
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#215447] text-[#DDE8DC] border border-[#2d6f5e] flex items-center gap-1">
                <Heart className="w-3 h-3 text-[#C97858]" /> LGBTQ+ Friendly
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white tracking-wide uppercase text-xs">
              Explore Waggle Up
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DDE8DC]">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('grooming'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Pet Grooming & Spa Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Pet Food & Essentials Showcase
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Our Story & Values
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Store Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white tracking-wide uppercase text-xs">
              Store & Grooming Hours
            </h4>
            <div className="space-y-3 text-sm text-[#DDE8DC]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C97858] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Open Daily</div>
                  <div>10:00 AM – 11:00 PM</div>
                  <div className="text-xs text-[#B9CEB7] mt-0.5">Open late for working pet parents</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#C97858] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Call or WhatsApp</div>
                  <a href={`tel:${BUSINESS_CONFIG.rawPhone}`} className="hover:text-white transition-colors">
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Directions */}
          <div className="space-y-4">
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white tracking-wide uppercase text-xs">
              Visit In HSR Layout
            </h4>
            <div className="text-sm text-[#DDE8DC] space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C97858] shrink-0 mt-0.5" />
                <div>
                  {BUSINESS_CONFIG.address.line1},<br />
                  {BUSINESS_CONFIG.address.line2},<br />
                  {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.pincode}
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={BUSINESS_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAF7F0] bg-[#215447] hover:bg-[#2d6f5e] py-2 px-3 rounded-lg border border-[#2d6f5e] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C97858]" />
                  Get Google Maps Directions
                </a>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#173F35] bg-[#FAF7F0] hover:bg-white py-2 px-3 rounded-lg transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Grooming Online
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO & Neighbourhood note */}
        <div className="py-6 border-b border-[#215447] text-xs text-[#B9CEB7] leading-relaxed">
          <p>
            <strong>Serving Bengaluru pet parents in:</strong> HSR Layout (Sector 1, Sector 2, Sector 3, Sector 4, Sector 5, Sector 6, Sector 7), Garden Layout, Teacher's Colony, Koramangala, Bellandur, Haralur Road, Kasavanahalli, BTM Layout, and South Bengaluru. Gentle dog grooming, cat baths & haircuts, puppy introduction grooming, and premium pet supplies.
          </p>
        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DDE8DC]/80">
          <div>
            © {new Date().getFullYear()} Waggle Up Pet Store & Spa. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>GST & Local Trade Registered</span>
            <span>•</span>
            <a 
              href={BUSINESS_CONFIG.maps.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F0] hover:underline"
            >
              Google Reviews
            </a>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#DDE8DC]">
              Crafted with <Heart className="w-3 h-3 text-[#C97858] fill-[#C97858]" /> for pets
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
