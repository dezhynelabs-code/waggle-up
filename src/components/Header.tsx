import React, { useState, useEffect } from 'react';
import type { PageType } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Calendar
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string; href: string }[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'grooming', label: 'Grooming & Spa', href: '/grooming' },
    { id: 'shop', label: 'Shop Essentials', href: '/shop' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact & Location', href: '/contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#173F35] text-[#FAF7F0] text-xs py-2 px-4 border-b border-[#215447]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C97858]" />
              Sector 2, HSR Layout, Bengaluru
            </span>
            <span className="hidden md:inline text-[#B9CEB7]">•</span>
            <span className="flex items-center gap-1.5 text-[#DDE8DC]">
              <Clock className="w-3.5 h-3.5 text-[#C97858]" />
              Open Daily until 11:00 PM
            </span>
            <span className="hidden lg:inline text-[#B9CEB7]">•</span>
            <span className="hidden lg:inline text-[#DDE8DC] font-normal">
              Women-Owned & LGBTQ+ Friendly Pet Haven
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${BUSINESS_CONFIG.rawPhone}`}
              className="hover:text-[#DDE8DC] transition-colors flex items-center gap-1 font-semibold"
              title="Call Waggle Up Store"
            >
              <Phone className="w-3 h-3 text-[#C97858]" />
              {BUSINESS_CONFIG.phone}
            </a>
            <span className="text-[#215447]">|</span>
            <a 
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I have a question about grooming and pet supplies in HSR Layout.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#DDE8DC] hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b border-[#DDE8DC]/80 py-3' 
          : 'bg-[#FAF7F0] border-b border-[#DDE8DC]/50 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Wordmark */}
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              aria-label="Waggle Up Pet Store & Spa Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#173F35] flex items-center justify-center text-[#FAF7F0] shadow-sm group-hover:bg-[#215447] transition-colors">
                <svg className="w-6 h-6 fill-current text-[#DDE8DC]" viewBox="0 0 24 24">
                  {/* Subtle, elegant paw icon */}
                  <path d="M12 12c-2.2 0-4 1.8-4 4 0 1.9 1.3 3.5 3 3.9v.1h2v-.1c1.7-.4 3-2 3-3.9 0-2.2-1.8-4-4-4zm-5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7.5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
              </div>
              <div>
                <span className="block font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl md:text-2xl text-[#173F35] tracking-tight leading-none group-hover:text-[#215447] transition-colors">
                  Waggle Up
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-wider text-[#C97858] mt-0.5">
                  Pet Store & Spa • HSR Layout
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <a
                    key={item.id}
                    id={`nav-${item.id}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#173F35] text-[#FAF7F0] shadow-sm font-semibold' 
                        : 'text-[#252A27] hover:text-[#173F35] hover:bg-[#DDE8DC]/40'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="header-whatsapp-btn"
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I would like to enquire about pet grooming slots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#173F35] bg-[#DDE8DC]/60 hover:bg-[#DDE8DC] transition-all border border-[#DDE8DC]"
              >
                <MessageCircle className="w-4 h-4 text-[#173F35]" />
                WhatsApp
              </a>

              <button
                id="header-book-grooming-btn"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#FAF7F0] bg-[#173F35] hover:bg-[#215447] transition-all shadow-sm hover:shadow active:scale-95 btn-hover cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#FAF7F0]" />
                Book Grooming
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#173F35] text-white flex items-center gap-1 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#173F35] hover:bg-[#DDE8DC]/40 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#DDE8DC] bg-[#FAF7F0] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all block ${
                      isActive 
                        ? 'bg-[#173F35] text-[#FAF7F0] font-semibold' 
                        : 'text-[#252A27] hover:bg-[#DDE8DC]/30'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#DDE8DC]/60 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-white bg-[#173F35] flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Grooming Session
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_CONFIG.rawPhone}`}
                  className="py-2.5 px-3 rounded-xl text-center text-xs font-semibold text-[#173F35] bg-[#DDE8DC]/60 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C97858]" />
                  Call {BUSINESS_CONFIG.phone}
                </a>
                <a
                  href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! Enquiring about grooming & pet supplies in HSR Layout.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-center text-xs font-semibold text-white bg-emerald-700 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <div className="text-[11px] text-[#6C7570] text-center pt-2">
                19th Main, Garden Layout, Sector 2, HSR Layout • Open till 11 PM
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
