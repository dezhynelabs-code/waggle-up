import { useState, useEffect, useCallback } from 'react';
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

export const PAGE_PATHS: Record<PageType, string> = {
  home: '/',
  grooming: '/grooming',
  shop: '/shop',
  about: '/about',
  contact: '/contact',
};

export function getPageFromUrl(): PageType {
  if (typeof window === 'undefined') return 'home';

  // 1. Check URL query params for fallback (?p=/grooming or ?page=grooming)
  const searchParams = new URLSearchParams(window.location.search);
  const paramPage = searchParams.get('p') || searchParams.get('page');
  if (paramPage) {
    const cleanParam = decodeURIComponent(paramPage).replace(/^\/+/, '').toLowerCase();
    if (cleanParam === 'grooming' || cleanParam.startsWith('grooming')) return 'grooming';
    if (cleanParam === 'shop' || cleanParam.startsWith('shop')) return 'shop';
    if (cleanParam === 'about' || cleanParam.startsWith('about')) return 'about';
    if (cleanParam === 'contact' || cleanParam.startsWith('contact')) return 'contact';
    if (cleanParam === '' || cleanParam === 'home') return 'home';
  }

  // 2. Check window.location.pathname
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (path === '/grooming' || path.startsWith('/grooming')) return 'grooming';
  if (path === '/shop' || path.startsWith('/shop')) return 'shop';
  if (path === '/about' || path.startsWith('/about')) return 'about';
  if (path === '/contact' || path.startsWith('/contact')) return 'contact';
  if (path === '' || path === '/' || path === '/home' || path === '/index.html') return 'home';

  // 3. Check window.location.hash
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  if (hash === 'grooming' || hash.startsWith('grooming')) return 'grooming';
  if (hash === 'shop' || hash.startsWith('shop')) return 'shop';
  if (hash === 'about' || hash.startsWith('about')) return 'about';
  if (hash === 'contact' || hash.startsWith('contact')) return 'contact';

  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => getPageFromUrl());
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

  // Handle URL synchronization and browser back/forward buttons (popstate)
  useEffect(() => {
    const initialPage = getPageFromUrl();
    const targetPath = PAGE_PATHS[initialPage];

    // If loaded with fallback query/hash (e.g. ?p=grooming), normalize URL to clean path
    if (window.location.search.includes('p=') || window.location.hash) {
      window.history.replaceState({ page: initialPage }, '', targetPath);
    }

    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((page: PageType) => {
    const targetPath = PAGE_PATHS[page];
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
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
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
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
