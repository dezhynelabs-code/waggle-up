import { useState, useEffect } from 'react';
import type { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { GroomingPage } from './pages/GroomingPage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync title dynamically based on page
  useEffect(() => {
    const titles: Record<PageType, string> = {
      home: "Waggle Up Pet Store & Spa | Pet Supplies & Gentle Grooming in HSR Layout, Bengaluru",
      grooming: "Pet Grooming & Spa Services | Waggle Up HSR Layout, Bengaluru",
      shop: "Pet Food, Treats & Essentials Showcase | Waggle Up HSR Layout",
      about: "Our Story & Values | Waggle Up Pet Store & Spa HSR Layout",
      contact: "Contact, Store Hours & Directions | Waggle Up HSR Layout Sector 2"
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#252A27] font-['Inter',sans-serif]">
      {/* Sticky Header with navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'grooming' && (
          <GroomingPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={setCurrentPage}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Interactive Booking Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}

export default App;
