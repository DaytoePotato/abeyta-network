import { Service, PricingTier, FAQ, Testimonial, SocialLink } from '@/types';

// Company Information
export const COMPANY = {
  name: 'Abeyta Network LLC',
  tagline: 'Veteran-Led: Secure Networks, Unyielding Service',
  phone: '(254) 226-9122',
  email: 'aabeyta@abeyta.org',
  address: 'Killeen, TX 76542',
  hours: 'By Appointment',
  founded: 2024,
  serviceArea: 'Killeen, Temple, Fort Hood, Harker Heights, Belton, Copperas Cove',
};

// Services Data
export const SERVICES: Service[] = [
  // HOME SERVICES - $100 first hour, $50/hr after
  {
    id: 'home-tech',
    title: 'Home Tech Services',
    description: 'We handle all your home technology needs at a modest $50/hour (after the first hour at $100). From device repairs to network setups, we come to you and get things working.',
    icon: 'tool',
    category: 'home',
    features: [
      'Security camera & device troubleshooting',
      'Computer & device repair',
      'Gaming PC builds & upgrades',
      'WiFi setup & optimization',
      'Ethernet hardline installation',
      'Smart home device configuration',
      'Printer & peripheral setup',
      'Virus removal & data recovery',
    ],
    priceRange: '$100 first hour, $50/hr after',
  },
  {
    id: 'network-home',
    title: 'Home Network Setup',
    description: 'Professional network installation for seamless coverage throughout your home. We run ethernet hardlines, optimize your WiFi, and eliminate dead zones.',
    icon: 'wifi',
    category: 'home',
    features: [
      'WiFi dead zone elimination',
      'Mesh network installation',
      'Ethernet cable runs throughout home',
      'Router & modem configuration',
      'Network security setup',
      'Guest network configuration',
      'Parental controls setup',
    ],
    priceRange: '$100 first hour, $50/hr after',
  },
  {
    id: 'pc-building',
    title: 'Custom PC Building',
    description: 'Custom gaming PCs and workstations built to your specifications. We help you get the best performance for your budget with quality components.',
    icon: 'computer',
    category: 'home',
    features: [
      'Gaming PC builds',
      'Workstation builds',
      'Component selection advice',
      'Assembly & cable management',
      'OS installation & drivers',
      'Performance tuning & overclocking',
      'Upgrades to existing systems',
    ],
    priceRange: '$100 first hour, $50/hr after',
  },
  {
    id: 'security-home',
    title: 'Security & Smart Home',
    description: 'Protect your home with professional security camera installation and smart home automation. We set it up right the first time.',
    icon: 'shield',
    category: 'home',
    features: [
      'Security camera installation',
      'DVR/NVR setup & configuration',
      'Smart doorbell installation',
      'Smart lock setup',
      'Home automation integration',
      'Remote viewing setup',
      'Motion detection & alerts',
    ],
    priceRange: '$100 first hour, $50/hr after',
  },
  // BUSINESS SERVICES - CompTIA A+ & Network+ Certified Tech
  {
    id: 'it-consulting',
    title: 'IT Consulting & Support',
    description: 'CompTIA A+ and Network+ certified tech support and consulting for your business. We provide robust solutions tailored to your needs.',
    icon: 'tool',
    category: 'business',
    features: [
      'Hardware troubleshooting & repair',
      'Software installation & configuration',
      'System optimization & maintenance',
      'IT infrastructure planning',
      'Technology recommendations',
      'Staff training & documentation',
      'Remote & on-site support',
    ],
    priceRange: 'Custom Quote',
  },
  {
    id: 'network-business',
    title: 'Business Network Solutions',
    description: 'Complete network infrastructure design and implementation with professional-grade equipment. From small offices to multi-location setups.',
    icon: 'network',
    category: 'business',
    features: [
      'Network design & planning',
      'Router & switch installation',
      'WiFi access point deployment',
      'Firewall & security configuration',
      'VPN setup for remote access',
      'Structured cabling & cable management',
      'Documentation & network diagrams',
    ],
    priceRange: 'Custom Quote',
  },
  {
    id: 'website-design',
    title: 'Website Design & Development',
    description: 'Professional websites for your business starting at $200. From simple landing pages to full-featured sites with booking systems and e-commerce.',
    icon: 'web',
    category: 'business',
    features: [
      'Mobile responsive design',
      'Contact forms & lead capture',
      'SEO optimization',
      'Social media integration',
      'Google Maps & business listings',
      'E-commerce & booking systems',
      'Content management systems',
      'Ongoing maintenance available',
    ],
    priceRange: '$200 - $1,000',
  },
  {
    id: 'managed-services',
    title: 'Managed IT Services',
    description: 'Proactive monitoring and support to keep your business running smoothly. We catch issues before they become problems.',
    icon: 'monitor',
    category: 'business',
    features: [
      '24/7 network monitoring',
      'Automated alerts & response',
      'Regular maintenance & updates',
      'Monthly performance reports',
      'Help desk support',
      'Backup & disaster recovery',
      'Security monitoring',
    ],
    priceRange: 'See Monthly Plans',
  },
];

// Pricing Tiers
export const PRICING_TIERS: PricingTier[] = [
  // HOURLY - Home Services
  {
    id: 'hourly',
    name: 'Home Tech Services',
    type: 'hourly',
    price: 100,
    unit: 'first hour',
    description: '$100 first hour, then $50/hr after',
    features: [
      'On-site or remote support',
      'Device repair & troubleshooting',
      'Network setup & WiFi optimization',
      'PC building & upgrades',
      'Security device setup',
      '$50/hour after first hour',
    ],
  },
  // WEBSITE PACKAGES
  {
    id: 'website-basic',
    name: 'Basic Website',
    type: 'bundle',
    price: 200,
    unit: 'project',
    description: 'Simple professional website',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form',
      'Basic SEO',
      '30-day support',
    ],
  },
  {
    id: 'website-standard',
    name: 'Standard Website',
    type: 'bundle',
    price: 500,
    unit: 'project',
    description: 'Full-featured business website',
    features: [
      'Up to 10 pages',
      'Content management system',
      'Blog capability',
      'Advanced SEO',
      'Analytics setup',
      '60-day support',
    ],
    popular: true,
  },
  {
    id: 'website-complex',
    name: 'Complex Website',
    type: 'bundle',
    price: 1000,
    unit: 'project',
    description: 'Custom web application',
    features: [
      'Unlimited pages',
      'E-commerce or booking',
      'Custom integrations',
      'Database functionality',
      'User authentication',
      '90-day support',
    ],
  },
  // MONTHLY PLANS
  {
    id: 'monthly-basic',
    name: 'Basic Support',
    type: 'subscription',
    price: 100,
    unit: 'month',
    description: 'Phone & email support for your business',
    features: [
      'Phone & email support',
      'Business hours availability',
      '48-hour response time',
      'Remote troubleshooting',
      'Monthly check-in call',
    ],
  },
  {
    id: 'monthly-pro',
    name: 'Professional Support',
    type: 'subscription',
    price: 200,
    unit: 'month',
    description: 'Priority support with faster response',
    features: [
      'Everything in Basic',
      'Extended hours support',
      '24-hour response time',
      '1 on-site visit/month',
      'Network monitoring',
      'Monthly reports',
    ],
    popular: true,
  },
  {
    id: 'monthly-premium',
    name: '24/7 Monitoring',
    type: 'subscription',
    price: 350,
    unit: 'month',
    description: 'Round-the-clock monitoring and support',
    features: [
      'Everything in Professional',
      '24/7 monitoring & alerts',
      '4-hour response time',
      '2 on-site visits/month',
      'ISP outage documentation',
      'Quarterly reviews',
    ],
  },
];

// FAQs
export const FAQS: FAQ[] = [
  {
    id: 'service-area',
    question: 'What areas do you serve?',
    answer: 'We serve Killeen, Temple, Fort Hood, Harker Heights, Belton, Copperas Cove, and the greater Central Texas area. We travel to your location for on-site support.',
    category: 'General',
  },
  {
    id: 'minimum-charge',
    question: 'Is there a minimum charge for service calls?',
    answer: 'Yes, we have a 2-hour minimum ($100) for on-site visits. This covers travel time and ensures we can thoroughly address your issues.',
    category: 'Pricing',
  },
  {
    id: 'remote-support',
    question: 'Do you offer remote support?',
    answer: 'Yes! Many issues can be resolved remotely via screen sharing. Remote sessions are billed at the same $50/hour rate with no minimum.',
    category: 'Support',
  },
  {
    id: 'website-timeline',
    question: 'How long does it take to build a website?',
    answer: 'Basic websites typically take 1-2 weeks. Standard sites take 2-4 weeks. Complex projects with custom functionality can take 4-8 weeks depending on requirements.',
    category: 'Websites',
  },
  {
    id: 'veteran-discount',
    question: 'Do you offer military/veteran discounts?',
    answer: 'Yes! We offer 10% off all services for active military, veterans, and their immediate families. Just mention your service when booking.',
    category: 'Pricing',
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, check, credit/debit cards, Venmo, and Zelle. For larger projects, we offer payment plans.',
    category: 'Pricing',
  },
];

// Testimonials (commented out for now - uncomment when ready)
export const TESTIMONIALS: Testimonial[] = [
  // {
  //   id: '1',
  //   name: 'Client Name',
  //   role: 'Role/Title',
  //   company: 'Company Name',
  //   content: 'Testimonial content here...',
  //   rating: 5,
  // },
];

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  // { href: '/case-studies', label: 'Case Studies' }, // Uncomment when ready
  // { href: '/portfolio', label: 'Portfolio' }, // Uncomment when ready
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// Social Links (commented out for now - uncomment and update URLs when ready)
export const SOCIAL_LINKS: SocialLink[] = [
  // { name: 'Facebook', href: 'https://facebook.com/abeytanetwork', icon: 'facebook' },
  // { name: 'LinkedIn', href: 'https://linkedin.com/company/abeytanetwork', icon: 'linkedin' },
  // { name: 'Google', href: 'https://g.page/abeytanetwork', icon: 'google' },
];

// SEO Keywords
export const SEO_KEYWORDS = [
  'tech support Killeen TX',
  'computer repair Temple TX',
  'WiFi installation Central Texas',
  'website design Killeen',
  'IT support Fort Hood',
  'network setup Harker Heights',
  'veteran owned tech support',
  'small business IT Killeen',
  'computer help Temple TX',
  'managed IT services Central Texas',
];
