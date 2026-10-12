import React, { useState, useEffect } from 'react';
import { SERVICES, BUSINESS_CONFIG } from '../data/content';
import type { BookingFormData } from '../types';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle, 
  Sparkles,
  Heart
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  isEmbedded?: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  isEmbedded = false
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    parentName: '',
    phone: '',
    petName: '',
    petType: 'dog',
    breed: '',
    serviceId: initialServiceId || SERVICES[0].id,
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isEmbedded) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isEmbedded, onClose]);

  if (!isOpen && !isEmbedded) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter your name.';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your mobile or WhatsApp number.';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.petName.trim()) {
      newErrors.petName = "Please enter your pet's name.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulating instant submission & validation
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getWhatsAppEnquiryUrl = () => {
    const selectedService = SERVICES.find(s => s.id === formData.serviceId)?.name || 'Grooming';
    const text = `Hi Waggle Up! I would like to book a grooming enquiry:
- Parent: ${formData.parentName}
- Phone: ${formData.phone}
- Pet: ${formData.petName} (${formData.petType.toUpperCase()}${formData.breed ? `, ${formData.breed}` : ''})
- Service: ${selectedService}
- Date: ${formData.preferredDate}
- Time: ${formData.preferredTime}
- Notes: ${formData.notes || 'None'}

Could you please confirm slot availability at HSR Layout?`;
    return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  const content = (
    <div className="bg-[#FAF7F0] rounded-2xl border border-[#DDE8DC] shadow-xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Modal Header */}
      <div className="bg-[#173F35] text-[#FAF7F0] px-6 py-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#DDE8DC] font-medium tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C97858]" />
            Waggle Up Grooming & Spa • HSR Layout
          </div>
          <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-white mt-0.5">
            Request a Grooming Appointment
          </h3>
        </div>
        {!isEmbedded && (
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#DDE8DC] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="p-6 md:p-8">
        {isSubmitted ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#173F35] font-['Plus_Jakarta_Sans']">
                Enquiry Received!
              </h4>
              <p className="text-[#444B47] text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#173F35]">{formData.parentName}</strong>! We've received your request for{' '}
                <strong className="text-[#173F35]">{formData.petName}</strong>. Our HSR Layout team will review the calendar and contact you via call or WhatsApp within 30 minutes to confirm your final appointment time.
              </p>
            </div>

            <div className="bg-[#DDE8DC]/50 rounded-xl p-4 text-xs text-[#252A27] text-left max-w-md mx-auto space-y-1.5 border border-[#DDE8DC]">
              <div className="font-semibold text-[#173F35] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C97858]" /> Enquiry Summary
              </div>
              <div>• Service: <strong>{SERVICES.find(s => s.id === formData.serviceId)?.name}</strong></div>
              <div>• Date: <strong>{formData.preferredDate}</strong> ({formData.preferredTime})</div>
              <div>• Phone: <strong>{formData.phone}</strong></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Send Instantly to WhatsApp
              </a>

              {!isEmbedded && (
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl border border-[#DDE8DC] hover:bg-[#DDE8DC]/40 text-[#173F35] font-medium text-sm transition-all"
                >
                  Done & Close
                </button>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="bg-[#DDE8DC]/40 p-3.5 rounded-xl border border-[#DDE8DC] flex items-start gap-3 text-xs text-[#444B47]">
              <AlertCircle className="w-4 h-4 text-[#C97858] shrink-0 mt-0.5" />
              <div>
                <strong>Appointment Notice:</strong> Submitting this form sends an official booking enquiry. Our team confirms exact slot availability to avoid pet overlap and ensure gentle, unhurried attention.
              </div>
            </div>

            {/* Parent Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-parent-name" className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Your Name *
                </label>
                <input
                  id="booking-parent-name"
                  type="text"
                  required
                  placeholder="e.g. Aditi Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#252A27] focus:outline-none transition-colors ${
                    errors.parentName ? 'border-rose-500' : 'border-[#DDE8DC] focus:border-[#173F35]'
                  }`}
                />
                {errors.parentName && <p className="text-rose-600 text-xs mt-1">{errors.parentName}</p>}
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#252A27] focus:outline-none transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-[#DDE8DC] focus:border-[#173F35]'
                  }`}
                />
                {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Pet Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="booking-pet-name" className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Pet's Name *
                </label>
                <input
                  id="booking-pet-name"
                  type="text"
                  required
                  placeholder="e.g. Bruno"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#252A27] focus:outline-none transition-colors ${
                    errors.petName ? 'border-rose-500' : 'border-[#DDE8DC] focus:border-[#173F35]'
                  }`}
                />
                {errors.petName && <p className="text-rose-600 text-xs mt-1">{errors.petName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Pet Type *
                </label>
                <select
                  value={formData.petType}
                  onChange={(e) => setFormData({ ...formData, petType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35]"
                >
                  <option value="dog">Dog 🐕</option>
                  <option value="cat">Cat 🐈</option>
                  <option value="other">Other Companion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Breed (if known)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shih Tzu, Indie, Golden"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35]"
                />
              </div>
            </div>

            {/* Service & Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Preferred Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full px-3.5 py-2 rounded-xl bg-white border text-sm text-[#252A27] focus:outline-none transition-colors ${
                    errors.preferredDate ? 'border-rose-500' : 'border-[#DDE8DC] focus:border-[#173F35]'
                  }`}
                />
                {errors.preferredDate && <p className="text-rose-600 text-xs mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                  Time Window *
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35]"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM – 1 PM)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM – 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM – 8 PM)</option>
                  <option value="Late Evening (8 PM - 10:30 PM)">Late Evening (8 PM – 10:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Special Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#173F35] mb-1">
                Special Care Notes & Pet Personality (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Nervous with hair dryers, sensitive paws, has mats behind ears, first salon visit..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35]"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DDE8DC]/60">
              <div className="text-xs text-[#6C7570] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C97858]" />
                Store opens 10 AM to 11 PM daily
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {!isEmbedded && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2.5 text-sm font-medium text-[#444B47] hover:bg-[#DDE8DC]/30 rounded-xl"
                  >
                    Cancel
                  </button>
                )}
                <button
                  id="btn-submit-booking"
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#173F35] hover:bg-[#215447] text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-95 btn-hover cursor-pointer"
                >
                  {submitting ? 'Submitting...' : 'Send Grooming Request'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {content}
      </div>
    </div>
  );
};
