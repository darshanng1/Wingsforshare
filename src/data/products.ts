import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'architect-portfolio',
    name: 'Architecture Portfolio Website',
    shortDescription: 'High-end, visual-first portfolio system for architects and design firms.',
    description: 'A premium showcase platform that highlights architectural vision with minimalist elegance.',
    category: 'Websites',
    screenshot: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
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
    screenshot: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800&h=600',
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
    screenshot: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800&h=600',
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
    id: '5',
    slug: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    shortDescription: 'A powerful data intelligence and analytics platform that transforms raw business data into actionable insights through interactive dashboards and automation.',
    description: 'A comprehensive BI dashboard that turns raw data into actionable business insights.',
    category: 'Business Apps',
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    demoLink: 'https://pest-nine.vercel.app', // Placeholder
    features: [
      'Real-time data visualization and analytics',
      'Customizable reporting widgets and KPI dashboards',
      'Multi-source data integration (Excel, CRM, APIs, databases)',
      'Automated reporting and alerts',
      'Decision-support insights for business growth'
    ],
    fullDescription: 'Our Business Intelligence Dashboard provides a central hub for all your business data. Monitor KPIs in real-time, generate detailed reports with a click, and use automation to stay ahead of the competition.'
  },
  {
    id: '6',
    slug: 'gardenwalla-nursery',
    name: 'GardenWalla Nursery Store',
    shortDescription: 'A comprehensive online nursery platform for selling plants, seeds, and gardening supplies.',
    description: 'A specialized eCommerce solution for plant nurseries and gardening businesses.',
    category: 'Ecommerce',
    screenshot: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800&h=600',
    demoLink: 'https://gardenwalla-17rug0fdy-darshanng1s-projects.vercel.app/',
    features: [
      'Plant category management',
      'Seasonal availability tracking',
      'Gardening tips & blog integration',
      'Secure payment gateway',
      'Order tracking for live plants'
    ],
    fullDescription: 'GardenWalla is a dedicated eCommerce platform designed specifically for the nursery industry. It features specialized product management for live plants, including care instructions and seasonal availability, ensuring a premium experience for gardening enthusiasts.'
  },
  {
    id: '7',
    slug: 'green-nest-electronics',
    name: 'Green Nest – Refurbished Appliances',
    shortDescription: 'Modern, conversion-focused website for refurbished electronics and household appliances.',
    description: 'A high-trust marketplace solution for factory seconds and surplus electronics.',
    category: 'Retail',
    screenshot: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    demoLink: 'https://green-nest-lime.vercel.app/',
    features: [
      'Premium hero section with appliance visuals',
      'Category-based browsing (TV, AC, Fridge)',
      'WhatsApp integration for quick enquiries',
      'Trust-building product presentation',
      'Lead generation for store visits'
    ],
    fullDescription: 'Green Nest is a modern website solution tailored for electronics resellers and refurbished appliance stores. It focuses on building user trust through clean design and provides seamless enquiry paths via WhatsApp, helping businesses drive both online interest and offline store visits.'
  }
];
