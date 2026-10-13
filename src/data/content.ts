import type { ServiceItem, ProductCategory, ReviewItem, TeamMember } from '../types';

export const BUSINESS_CONFIG = {
  name: "Waggle Up Pet Store & Spa",
  shortName: "Waggle Up",
  tagline: "A Little More Love in Every Wag.",
  category: "Pet supplies store, pet grooming & spa",
  phone: "+91 63663 19941",
  rawPhone: "+916366319941",
  whatsappNumber: "916366319941",
  whatsappBaseUrl: "https://wa.me/916366319941",
  address: {
    line1: "19th Main, 799, 23rd Cross Road",
    line2: "Garden Layout, Sector 2, HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560102",
    country: "India",
    full: "19th Main, 799, 23rd Cross Road, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, India"
  },
  hours: {
    display: "Open daily until 11:00 PM",
    schedule: "Monday – Sunday: 10:00 AM – 11:00 PM",
    closingHourNotice: "Open late until 11 PM for busy pet parents"
  },
  maps: {
    query: "Waggle+Up+Pet+Store+Spa+HSR+Layout+Sector+2+Bengaluru",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=19th+Main+799+23rd+Cross+Road+Garden+Layout+Sector+2+HSR+Layout+Bengaluru+560102",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=19th+Main+799+23rd+Cross+Road+Garden+Layout+Sector+2+HSR+Layout+Bengaluru+560102",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJWaggleUpHSRBengaluruPlaceholder" // Configurable Google Review link
  },
  highlights: [
    { title: "Gentle Grooming", desc: "Patient, unhurried handling tailored to your pet's comfort and coat." },
    { title: "Everyday Pet Essentials", desc: "Curated premium pet foods, healthy treats, durable toys, and accessories." },
    { title: "Friendly Guidance", desc: "Warm advice for first-time pet parents and seasoned companions alike." },
    { title: "Convenient HSR Location", desc: "Situated in Sector 2, Garden Layout with late hours up to 11 PM." }
  ],
  identityBadges: [
    { label: "Women-Owned Business", icon: "sparkles" },
    { label: "LGBTQ+ Friendly Space", icon: "heart" },
    { label: "Fear-Free Mindset", icon: "shield-check" },
    { label: "Open Until 11 PM", icon: "clock" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bath-blowdry",
    name: "Bath & Blow-Dry",
    shortDesc: "A warm, thorough hydrobath with gentle pet-safe shampoo, conditioning, and quiet hand blow-dry.",
    fullDesc: "Designed for a fresh, silky, and clean coat. We use hypoallergenic botanical shampoos selected for your pet's specific skin type, followed by warm water rinsing, ear cleansing, and a low-noise fluff drying technique that keeps nervous pets relaxed.",
    suitableFor: "All dog breeds, double coats, short coats, and active pets",
    image: "/images/bath-service.jpg",
    features: ["Skin-specific shampoo & conditioner", "Towel wrap & stress-free blow dry", "Ear cleaning & eye wash check", "Signature fresh coat spritz"],
    isPopular: true
  },
  {
    id: "haircut-styling",
    name: "Haircut & Styling",
    shortDesc: "Custom breed-standard haircuts, hygienic trims, or manageable lifestyle teddy-bear cuts.",
    fullDesc: "Our stylists take the time to understand your preferred length, home maintenance routine, and coat condition. Hand scissor work and smooth clippers ensure an even, beautiful finish with zero rush.",
    suitableFor: "Shih Tzus, Poodles, Doodles, Lhasa Apsos, Pomeranians, and long-coated pets",
    image: "/images/haircut-styling.jpg",
    features: ["Custom scissor face & paw styling", "Sanitary & paw-pad hygiene trim", "Full body clip to preferred length", "Comb-out and fluff finish"],
    isPopular: true
  },
  {
    id: "nail-trimming",
    name: "Nail Trimming & Paw Care",
    shortDesc: "Gentle, stress-aware claw clipping and filing with soothing paw balm application.",
    fullDesc: "Overgrown nails cause posture discomfort. We carefully locate the quick, clip in micro-increments with plenty of encouragement and treats, and apply natural moisturising balm to rough paw pads.",
    suitableFor: "Dogs & cats of all ages, especially fidgety pets",
    image: "/images/nail-trimming.jpg",
    features: ["Safe nail clipping", "Smooth filing edge", "Paw pad hydration balm", "Treat-based positive association"]
  },
  {
    id: "coat-brushing",
    name: "Coat Brushing & De-matting",
    shortDesc: "Patient, humane de-tangling, loose undercoat removal, and gentle de-shedding.",
    fullDesc: "We never yank or aggressively pull tangled fur. Using specialised detangling sprays and high-grade slicker brushes, we patiently work through knotty areas while keeping pet comfort paramount.",
    suitableFor: "Double-coated breeds, heavy shedders, and long-hair coats",
    image: "/images/cat-grooming.jpg",
    features: ["Undercoat release treatment", "Careful localized mat separation", "Skin stimulation & dead fur removal", "Soft silky texture restoration"]
  },
  {
    id: "cat-grooming",
    name: "Cat Grooming",
    shortDesc: "Quiet, specialized feline grooming in a low-stimulus environment with experienced feline handlers.",
    fullDesc: "Cats require uniquely quiet, gentle, and respectful handling. Our team works with slow movements, towel containment techniques, and gentle comb-outs to preserve their sense of calm.",
    suitableFor: "Persians, British Shorthairs, Indie cats, long-haired felines",
    image: "/images/cat-grooming.jpg",
    features: ["Low-stress quiet environment", "Gentle dry bath or water bath (temperament permitting)", "Sanitary trimming & nail clipping", "Face crease & ear cleansing"],
    isPopular: true
  },
  {
    id: "puppy-grooming",
    name: "Puppy First-Groom Introduction",
    shortDesc: "A short, positive introductory session to acclimatise young puppies to grooming sounds and sensations.",
    fullDesc: "Setting up a lifetime of happy salon visits! We let puppies sniff brushes, listen to low hairdryer whirrs, receive gentle tummy scratches and treats, followed by a warm bath and light tidy up.",
    suitableFor: "Puppies aged 3 to 8 months after completing puppy vaccinations",
    image: "/images/puppy-grooming.jpg",
    features: ["Slow acclimatization to water & sounds", "Mini face & paw pad tidy", "Abundant positive treat rewards", "Consultation for puppy parents on home brushing"]
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "food-nutrition",
    name: "Pet Food & Nutrition",
    description: "Premium dry kibble, wet food pouches, raw formulations, and vet-approved diets for dogs and cats.",
    itemCount: "40+ Varieties",
    iconName: "utensils",
    image: "/images/category-food-nutrition.jpg",
    tags: ["Grain-Free", "Puppy/Kitten", "Senior Diet", "Breed-Specific"],
    featuredItems: [
      { name: "Royal Canin Breed & Health Nutrition", description: "Targeted nutrition for specific breed requirements.", tag: "Popular" },
      { name: "Acana & Orijen Biologically Appropriate", description: "High-protein recipes with fresh regional ingredients.", tag: "Premium" },
      { name: "Farmina N&D Ancestral Grain", description: "Low-glycaemic Italian formulas for sensitive stomachs.", tag: "Holistic" },
      { name: "Sheba & Bellotta Feline Delicacies", description: "Succulent wet food broths and gravies cats adore.", tag: "Feline Favourite" }
    ]
  },
  {
    id: "treats-chews",
    name: "Treats & Natural Chews",
    description: "Single-ingredient dehydrated chews, training treats, dental sticks, and wholesome baked biscuits.",
    itemCount: "35+ Varieties",
    iconName: "cookie",
    image: "/images/category-treats-chews.jpg",
    tags: ["Natural Chews", "Dental Care", "Training Rewards", "Yak Cheese"],
    featuredItems: [
      { name: "Himalayan Yak Cheese Bars", description: "Long-lasting, lactose-free natural dental chews.", tag: "Long-Lasting" },
      { name: "Dehydrated Chicken & Fish Jerky", description: "100% real single-ingredient protein treats.", tag: "High Protein" },
      { name: "Grain-Free Soft Training Bites", description: "Pocket-friendly aromatic treats for clicker training.", tag: "Training" },
      { name: "Dental Enzymatic Chews", description: "Helps control tartar build-up and freshens breath.", tag: "Oral Health" }
    ]
  },
  {
    id: "toys-enrichment",
    name: "Toys & Mental Enrichment",
    description: "Durable rubber chew toys, squeakers, puzzle feeders, snuffle mats, and interactive cat wands.",
    itemCount: "50+ Options",
    iconName: "sparkles",
    image: "/images/category-toys-enrichment.jpg",
    tags: ["Tough Chewers", "Puzzle Feeders", "Cat Nip", "Fetch & Tug"],
    featuredItems: [
      { name: "Rubber Treat-Dispensing Puzzles", description: "Keeps energetic dogs mentally engaged for hours.", tag: "Enrichment" },
      { name: "Heavy-Duty Ballistic Squeakers", description: "Reinforced stitched plush for enthusiastic play.", tag: "Durable" },
      { name: "Feather & Bell Teaser Cat Wands", description: "Stirs natural hunting instincts in indoor cats.", tag: "Cat Toy" },
      { name: "Nosework Snuffle Mats", description: "Encourages slow eating and calming scent games.", tag: "Calming" }
    ]
  },
  {
    id: "collars-leashes",
    name: "Collars, Leashes & Harnesses",
    description: "Ergonomic Y-harnesses, shock-absorbing leashes, lightweight collars, and night-reflective gear.",
    itemCount: "30+ Designs",
    iconName: "shield",
    image: "/images/category-collars-leashes.jpg",
    tags: ["No-Pull", "Padded", "Reflective", "Lightweight"],
    featuredItems: [
      { name: "Ergonomic Padded No-Pull Harness", description: "Disperses leash pressure safely across the chest.", tag: "Ergonomic" },
      { name: "Multi-Functional 6-Way Training Leash", description: "Versatile hands-free, double clip, and tether lengths.", tag: "Multi-Use" },
      { name: "Night Reflective Waterproof Collars", description: "Vibrant high-visibility collars for night walks.", tag: "Safety" },
      { name: "Gentle Step-In Cat Harnesses", description: "Escape-resistant lightweight vests for adventurous cats.", tag: "Feline" }
    ]
  },
  {
    id: "grooming-hygiene",
    name: "Grooming & Hygiene Supplies",
    description: "Pet-safe botanical shampoos, anti-tick sprays, grooming brushes, ear cleansers, and paw wipes.",
    itemCount: "25+ Essentials",
    iconName: "sparkles",
    image: "/images/category-grooming-hygiene.jpg",
    tags: ["Natural Shampoos", "Anti-Tick", "Paw Wipes", "Slicker Brushes"],
    featuredItems: [
      { name: "Oatmeal & Aloe Soothing Shampoo", description: "Calms itchy, sensitive skin naturally.", tag: "Sensitive Skin" },
      { name: "Plant-Based Anti-Tick & Flea Spray", description: "Gentle natural essential oil defense.", tag: "Pest Defense" },
      { name: "Hypoallergenic Deodorising Paw Wipes", description: "Quick post-walk clean-ups for feet and coats.", tag: "Daily Use" },
      { name: "Stainless Steel Undercoat Rakes", description: "Professional grade de-shedding combs.", tag: "Salon Grade" }
    ]
  },
  {
    id: "beds-bowls",
    name: "Beds, Bowls & Everyday Living",
    description: "Orthopaedic memory foam pet beds, non-slip stainless steel bowls, litter trays, and travel crates.",
    itemCount: "20+ Essentials",
    iconName: "home",
    image: "/images/category-beds-bowls.jpg",
    tags: ["Orthopaedic", "Non-Slip", "Litter Care", "Travel"],
    featuredItems: [
      { name: "Orthopaedic High-Density Pet Beds", description: "Joint support with removable, washable covers.", tag: "Comfort" },
      { name: "Elevated Slow Feeder & Water Bowls", description: "Improves posture and aids digestive comfort.", tag: "Digestive Care" },
      { name: "Clumping Odour-Control Cat Litter", description: "Low dust, quick clumping bentonite and tofu litters.", tag: "Litter Care" },
      { name: "IATA-Compliant Airline Pet Carriers", description: "Sturdy travel crates for vet trips and road journeys.", tag: "Travel" }
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Pooja Ramanathan",
    petName: "Simba",
    petBreed: "Shih Tzu",
    excerpt: "The only place where Simba doesn't panic during grooming.",
    quote: "Simba is usually very anxious around groomers and hates having his face touched. The team at Waggle Up in HSR took their time, let him settle down, and gave him the neatest teddy cut without any stress. You can genuinely see they love animals.",
    date: "HSR Layout, Bengaluru",
    highlightTheme: "Patient Handling for Anxious Pets",
    verifiedLocal: true
  },
  {
    id: "rev-2",
    author: "Arjun & Sneha Roy",
    petName: "Milo",
    petBreed: "Golden Retriever",
    excerpt: "Brilliant bath, de-shedding, and smelt heavenly for days.",
    quote: "Took our golden Milo for a full bath and de-shedding session. His coat was so soft and fluffy, and the shedding at home noticeably reduced. The staff is super warm and helped us pick the right joint treats too.",
    date: "Sector 2, HSR",
    highlightTheme: "Thorough Bath & De-shedding",
    verifiedLocal: true
  },
  {
    id: "rev-3",
    author: "Deepak Menon",
    petName: "Ginger",
    petBreed: "Indie / Mixed Breed",
    excerpt: "Helpful guidance for first-time pet parents.",
    quote: "As a first-time Indie parent, I had so many questions about grooming and ticks. The team was so patient, explained what brushing routine works best, and handled Ginger with immense kindness. So glad to have them nearby!",
    date: "Garden Layout, HSR",
    highlightTheme: "First-Time Pet Parent Support",
    verifiedLocal: true
  },
  {
    id: "rev-4",
    author: "Ananya Iyer",
    petName: "Luna",
    petBreed: "Persian Cat",
    excerpt: "Extremely gentle cat grooming—rare to find in Bangalore.",
    quote: "Finding groomers who know how to handle cats patiently without forceful restraint is tough. Waggle Up did a wonderful comb-out and hygiene trim for Luna. Calm environment, very hygienic, and open till late!",
    date: "HSR Layout Sector 1",
    highlightTheme: "Gentle Feline Care",
    verifiedLocal: true
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Priya & The Waggle Up Founders",
    role: "Founders & Pet Care Advocates",
    experience: "Devoted pet parents & community advocates",
    bio: "Passionate about creating a kind, inclusive, and fear-aware pet space in HSR Layout. Focused on gentle handling where pets are treated with calm patience rather than rushed through an assembly line.",
    speciality: "Pet wellbeing, nutrition consultation, fear-free salon experience"
  },
  {
    name: "Master Grooming Specialists",
    role: "Certified Pet Stylists & Handlers",
    experience: "Years of gentle grooming expertise across breeds",
    bio: "Trained in breed-specific hand scissoring, de-matting techniques, and feline gentle-handling protocols. Dedicated to making every bath and trim a comfortable routine.",
    speciality: "Teddy trims, anxious pet calming, feline brush-outs, skin-sensitive hydrobaths"
  }
];

export const GROOMING_STEPS = [
  {
    step: "01",
    title: "Greeting & Coat Assessment",
    desc: "We take 5–10 minutes to introduce ourselves to your pet, check coat condition, skin sensitivity, and discuss your preferred styling goals."
  },
  {
    step: "02",
    title: "Gentle Hydrobath & Conditioning",
    desc: "Using pet-safe, pH-balanced botanical shampoos suited to their skin, we cleanse away dirt, soot, and allergens with warm soothing water."
  },
  {
    step: "03",
    title: "Low-Noise Fluff Blow-Dry",
    desc: "A combination of soft towel wraps and variable-speed, low-decibel blow dryers ensures your pet stays relaxed while fur dries thoroughly."
  },
  {
    step: "04",
    title: "Precision Styling & Hygiene Care",
    desc: "Breed styling, scissoring, nail clipping, ear cleansing, and sanitary tidying done with steady, patient hands and positive reinforcement."
  },
  {
    step: "05",
    title: "Happy Pick-Up & Care Tips",
    desc: "Your furry friend is treated to cuddles and treats, while we share personalized coat care advice for home maintenance."
  }
];

export const FAQS = [
  {
    q: "How do I book a grooming appointment at Waggle Up?",
    a: "You can easily submit our quick online booking enquiry form, message us directly on WhatsApp at +91 63663 19941, or call our store. We will confirm your preferred time slot within 30 minutes."
  },
  {
    q: "Do you groom both dogs and cats?",
    a: "Yes! We groom both dogs and cats. For feline friends, we use low-noise, gentle handling techniques in a quiet environment to minimise anxiety."
  },
  {
    q: "My pet is nervous or aggressive with nail clipping. Can you help?",
    a: "We practice patient, fear-aware handling. We do not rush or force animals. If your pet needs multiple gentle pauses, reassuring treats, or an extra pair of calming hands, we take the extra time they need."
  },
  {
    q: "What are your opening hours in HSR Layout?",
    a: "We are open daily from 10:00 AM until 11:00 PM. This makes it convenient for working pet parents to drop in after office hours or pick up pet food and essentials in the evening."
  },
  {
    q: "Can I buy pet food and toys online from this website?",
    a: "Our website is designed as a product catalogue showcase. If you need any specific food, treat, or accessory, simply tap 'Enquire on WhatsApp' on any category card, and our store team will confirm availability, pricing, and local delivery in HSR Layout."
  },
  {
    q: "Where exactly are you located in HSR Layout?",
    a: "We are located at 19th Main, 799, 23rd Cross Road, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102. You can tap 'Get Directions' anywhere on this site to open exact Google Maps navigation."
  }
];
