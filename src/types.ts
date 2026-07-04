export interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string[];
  imageUrl: string;
  features: string[];
  lynkUrl: string;
  demoUrl: string;
  rating: number;
  salesCount: number;
  performanceScore: number; // e.g. 98 out of 100
  seoFriendly: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  content: string;
  rating: number;
  verifiedBuyer: boolean;
  templateBought: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
