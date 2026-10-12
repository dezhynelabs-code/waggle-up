export type PageType = 'home' | 'grooming' | 'shop' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  suitableFor: string;
  image: string;
  durationEstimate?: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  itemCount: string;
  iconName: string;
  tags: string[];
  featuredItems: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  petName: string;
  petBreed: string;
  excerpt: string;
  quote: string;
  date: string;
  highlightTheme: string;
  verifiedLocal: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  speciality: string;
}

export interface BookingFormData {
  parentName: string;
  phone: string;
  petName: string;
  petType: 'dog' | 'cat' | 'other';
  breed: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
