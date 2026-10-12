import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/content';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FAF7F0]/95 backdrop-blur-md border-t border-[#DDE8DC] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_CONFIG.rawPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-[#DDE8DC] text-[#173F35] active:bg-[#EDF4EC] transition-colors"
          aria-label="Call Waggle Up Store"
        >
          <Phone className="w-4 h-4 text-[#C97858]" />
          <span className="text-[11px] font-semibold mt-0.5">Call</span>
        </a>

        <a
          href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent("Hi Waggle Up! I'd like to ask about grooming services and pet supplies in HSR Layout.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-700 text-white active:bg-emerald-800 transition-colors shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#173F35] text-white active:bg-[#215447] transition-all shadow-sm"
          aria-label="Book Grooming Appointment"
        >
          <Calendar className="w-4 h-4 text-[#FAF7F0]" />
          <span className="text-xs font-bold">Book Grooming</span>
        </button>
      </div>
    </div>
  );
};
