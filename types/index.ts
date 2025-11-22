// Core application types for Abeyta Network LLC

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'home' | 'business';
  features: string[];
  priceRange?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  process: string;
  payoff: string;
  metrics: string[];
  image?: string;
  category: 'home' | 'business';
}

export interface PricingTier {
  id: string;
  name: string;
  type: 'hourly' | 'bundle' | 'subscription';
  price: number;
  priceMax?: number;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  tags: string[];
}

export interface Ticket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  attachments: string[];
  messages: TicketMessage[];
}

export interface TicketMessage {
  id: string;
  ticketId: string;
  userId: string;
  content: string;
  createdAt: string;
  isStaff: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

export interface QuoteRequest {
  serviceType: 'home' | 'business';
  accessPoints: number;
  devices: number;
  ethernetRuns: number;
  needsMonitoring: boolean;
  needsVoIP: boolean;
  buildingSize: 'small' | 'medium' | 'large';
}

export interface Quote {
  basePrice: number;
  equipmentCost: number;
  laborCost: number;
  monthlyRecurring?: number;
  total: number;
  breakdown: {
    item: string;
    cost: number;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
