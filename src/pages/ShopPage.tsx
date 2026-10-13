import React, { useState, useMemo } from 'react';
import { PRODUCT_CATEGORIES, BUSINESS_CONFIG } from '../data/content';
import { 
  ShoppingBag, 
  Search, 
  MessageCircle, 
  Phone, 
  Info, 
  MapPin,
  Calendar
} from 'lucide-react';

interface ShopPageProps {
  onOpenBooking: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.filter(cat => {
      const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const inCatName = cat.name.toLowerCase().includes(query);
      const inCatDesc = cat.description.toLowerCase().includes(query);
      const inTags = cat.tags.some(t => t.toLowerCase().includes(query));
      const inItems = cat.featuredItems.some(i => 
        i.name.toLowerCase().includes(query) || 
        i.description.toLowerCase().includes(query)
      );

      return inCatName || inCatDesc || inTags || inItems;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 md:space-y-24">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE8DC] text-[#173F35] text-xs font-bold uppercase tracking-wider border border-[#B9CEB7]">
              <ShoppingBag className="w-3.5 h-3.5 text-[#C97858]" />
              PET ESSENTIALS & NUTRITION • HSR LAYOUT
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F35] tracking-tight leading-tight">
              Everything Your Pet Loves, <br className="hidden sm:inline" />
              <span className="text-[#C97858]">In One Neighbourhood Place.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#444B47] leading-relaxed">
              Explore everyday nutrition, healthy treats, durable chew toys, grooming care, and comfortable lifestyle gear available at our storefront in Sector 2, HSR Layout.
            </p>
          </div>
        </div>
      </section>


      {/* 2. CATALOGUE SEARCH & FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 border border-[#DDE8DC] shadow-xs space-y-5">
          
          {/* Search bar & info */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#6C7570] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search food, treats, toys, or breed essentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDE8DC] text-sm text-[#252A27] focus:outline-none focus:border-[#173F35] bg-[#FAF7F0]/40"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-[#444B47]">
              <Info className="w-4 h-4 text-[#C97858] shrink-0" />
              <span>
                Want instant availability? Message us on WhatsApp or visit our store in HSR Layout!
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#173F35] text-white shadow-xs'
                  : 'bg-[#FAF7F0] text-[#444B47] hover:bg-[#DDE8DC]/60 border border-[#DDE8DC]'
              }`}
            >
              All Categories
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#173F35] text-white shadow-xs'
                    : 'bg-[#FAF7F0] text-[#444B47] hover:bg-[#DDE8DC]/60 border border-[#DDE8DC]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* 3. PRODUCT SHOWCASE CATEGORIES & FEATURED ITEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#DDE8DC] space-y-4">
            <ShoppingBag className="w-12 h-12 text-[#6C7570] mx-auto opacity-50" />
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#173F35]">
              No items matching "{searchQuery}"
            </h3>
            <p className="text-sm text-[#444B47] max-w-md mx-auto">
              Looking for a specific food or medicine? Send us a quick photo on WhatsApp and our team will check store stock immediately.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-5 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DDE8DC] shadow-xs space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DDE8DC]/60">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {category.image && (
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#DDE8DC] shadow-xs shrink-0" 
                        loading="lazy"
                      />
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-[#173F35]">
                          {category.name}
                        </h2>
                        <span className="text-xs font-semibold text-[#173F35] bg-[#DDE8DC]/70 px-2.5 py-0.5 rounded-full border border-[#DDE8DC]">
                          {category.itemCount}
                        </span>
                      </div>
                      <p className="text-sm text-[#444B47] max-w-xl">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Waggle Up! I'd like to ask about products in the ${category.name} section at your HSR store.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#DDE8DC]/60 hover:bg-[#DDE8DC] text-[#173F35] text-xs font-bold border border-[#DDE8DC] transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#173F35]" />
                    Enquire Category on WhatsApp
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {category.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#FAF7F0] text-[#173F35] font-medium px-3 py-1 rounded-lg border border-[#DDE8DC]">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Featured Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {category.featuredItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#FAF7F0] rounded-2xl p-5 border border-[#DDE8DC] flex flex-col justify-between space-y-4 hover:border-[#173F35] transition-all"
                    >
                      <div className="space-y-2">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#C97858] bg-white px-2 py-0.5 rounded border border-[#DDE8DC]">
                          {item.tag}
                        </span>
                        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#173F35]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#444B47] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#DDE8DC]/70">
                        <a
                          href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Waggle Up! Do you have "${item.name}" available in stock at your HSR Layout store?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#173F35] text-[#173F35] hover:text-white border border-[#DDE8DC] text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                        >
                          <MessageCircle className="w-3 h-3" />
                          Check Stock & Price
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      {/* 4. HONEST ECOMMERCE DISCLAIMER & STORE VISITATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#EDF4EC] rounded-3xl p-8 sm:p-12 border border-[#DDE8DC] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C97858]">
              LOCAL STORE SHOWCASE
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#173F35]">
              Looking for Something Specific?
            </h2>
            <p className="text-sm text-[#444B47] leading-relaxed">
              We carry hundreds of verified brands at our physical storefront in Sector 2, HSR Layout. We do not do blind automated ecommerce—we offer real human conversations, batch verification, expiry checks, and doorstep delivery across HSR Layout.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.rawPhone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#DDE8DC] text-[#173F35] font-bold text-xs hover:bg-[#FAF7F0] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C97858]" />
              Call {BUSINESS_CONFIG.phone}
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF7F0] border border-[#DDE8DC] hover:bg-white text-[#173F35] font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C97858]" />
              Book Grooming Too
            </button>

            <a
              href={BUSINESS_CONFIG.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#173F35] hover:bg-[#215447] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <MapPin className="w-4 h-4 text-[#C97858]" />
              Visit Store in HSR Layout
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
