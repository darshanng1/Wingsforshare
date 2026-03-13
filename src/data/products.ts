import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'architect-portfolio',
    name: 'Architecture Portfolio Website',
    shortDescription: 'High-end, visual-first portfolio system for architects and design firms.',
    description: 'A premium showcase platform that highlights architectural vision with minimalist elegance.',
    category: 'Websites',
    screenshot: 'https://picsum.photos/seed/architect/800/600',
    demoLink: 'https://architectswebsite.online/',
    features: [
      'Project gallery with high-res support',
      'Architect profile & team page',
      'Mobile responsive design',
      'SEO visibility for local searches',
      'Client inquiry form'
    ],
    fullDescription: 'Our Architecture Portfolio Website is designed to let your work speak for itself. Featuring a clean, minimalist aesthetic inspired by top design firms, it provides a seamless experience for potential clients to explore your projects on any device.'
  },
  {
    id: '2',
    slug: 'digital-vcard-website',
    name: 'Digital Business vCard Website',
    shortDescription: 'A modern digital business card website designed for professionals and businesses to share their contact details, services, and online presence through a single smart link.',
    description: 'A smart digital identity solution for modern professionals.',
    category: 'Websites',
    screenshot: 'https://picsum.photos/seed/vcard/800/600',
    demoLink: 'https://darshanngsipcvcard.pages.dev/',
    features: [
      'Professional digital business card for businesses and professionals',
      'Quick contact options (call, WhatsApp, email, location)',
      'Service or product showcase section',
      'SEO-friendly structure for better online visibility',
      'Mobile-first responsive design',
      'Easy sharing via link, QR code, or social media'
    ],
    fullDescription: 'A modern digital business card website designed for professionals and businesses to share their contact details, services, and online presence through a single smart link. This vCard solution helps businesses create a strong online identity and allows customers to quickly connect through WhatsApp, phone, or social media.'
  },
  {
    id: '3',
    slug: 'garment-ecommerce',
    name: 'Garment Ecommerce Store',
    shortDescription: 'Premium fashion eCommerce platform with advanced filtering and secure checkout.',
    description: 'A specialized online store solution for fashion brands and garment manufacturers.',
    category: 'Ecommerce',
    screenshot: 'https://picsum.photos/seed/fashion/800/600',
    demoLink: 'https://vastra-one.vercel.app',
    adminLogin: 'https://vastra-one.vercel.app/admin',
    userLogin: 'https://vastra-one.vercel.app/login',
    features: [
      'Advanced product filtering',
      'Size & color variations',
      'Secure checkout integration',
      'Order management system',
      'Inventory alerts'
    ],
    fullDescription: 'Our Garment Ecommerce Store is built for the fashion industry. It handles complex product variations with ease, providing a smooth shopping experience for your customers and a robust management system for you.'
  },
  {
    id: '4',
    slug: 'wooden-door-manufacturer',
    name: 'Wooden Door Manufacturer Website',
    shortDescription: 'Professional business website for manufacturers to showcase products and generate B2B leads.',
    description: 'A specialized website for manufacturing businesses to display catalogs and manage inquiries.',
    category: 'Websites',
    screenshot: 'https://picsum.photos/seed/door/800/600',
    demoLink: 'https://darshanngsipcvcard.pages.dev', // Placeholder or real demo
    features: [
      'Product catalog with categories',
      'B2B inquiry management',
      'Manufacturing process showcase',
      'Client testimonials',
      'Contact & location integration'
    ],
    fullDescription: 'Designed for manufacturers, this website helps you transition your B2B operations online. Showcase your full product range, explain your manufacturing process, and capture high-quality leads from business clients.'
  },
  {
    id: '5',
    slug: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    shortDescription: 'A powerful data intelligence and analytics platform that transforms raw business data into actionable insights through interactive dashboards and automation.',
    description: 'A comprehensive BI dashboard that turns raw data into actionable business insights.',
    category: 'Business Apps',
    screenshot: 'https://picsum.photos/seed/dashboard/800/600',
    demoLink: 'https://pest-nine.vercel.app', // Placeholder
    features: [
      'Real-time data visualization and analytics',
      'Customizable reporting widgets and KPI dashboards',
      'Multi-source data integration (Excel, CRM, APIs, databases)',
      'Automated reporting and alerts',
      'Decision-support insights for business growth'
    ],
    fullDescription: 'Our Business Intelligence Dashboard provides a central hub for all your business data. Monitor KPIs in real-time, generate detailed reports with a click, and use automation to stay ahead of the competition.'
  }
];
