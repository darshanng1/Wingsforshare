import { Product } from '../types';
export type { Product };

export const products: Product[] = [
  {
    id: '1',
    slug: 'architect-portfolio',
    name: 'Architecture Portfolio Website',
    description:
      'A premium architecture portfolio platform designed to showcase projects, attract high-value clients, and build a strong digital presence for architects and studios.',
    shortDescription:
      'High-end portfolio website for architects to attract premium clients.',
    category: 'Websites',
    sector: 'industrial',
    industry: 'Architecture',
    result: '+80% Client Inquiries',
    status: 'live',
    highlight: true,
    screenshot: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    demoLink: 'https://architectswebsite.online/',
    features: [
      'Project gallery showcase',
      'Modern UI design',
      'Mobile responsive',
      'SEO optimized structure'
    ],
    fullDescription:
      'This platform helps architecture firms present their projects professionally. It enhances brand positioning, improves visibility, and generates high-quality client inquiries through a clean, modern interface.'
  },
  {
    id: '2',
    slug: 'digital-vcard-website',
    name: 'Digital Business vCard',
    description:
      'A smart digital identity solution that replaces traditional visiting cards with an interactive web-based profile.',
    shortDescription:
      'Digital visiting card with instant sharing and lead capture.',
    category: 'Digital Visiting Card-Web Based',
    sector: 'business',
    industry: 'Business',
    result: '+120 Leads / Month',
    status: 'coming',
    screenshot: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop',
    demoLink: '',
    features: [
      'One-click sharing',
      'Lead capture form',
      'Mobile optimized',
      'WhatsApp integration'
    ],
    fullDescription:
      'This solution allows professionals to instantly share their contact details, portfolio, and services digitally. It improves networking efficiency and generates consistent leads.'
  },
  {
    id: '3',
    slug: 'garment-ecommerce',
    name: 'Garment Ecommerce Store (Vastra)',
    description:
      'A complete ecommerce platform designed for clothing brands to sell products online with a seamless shopping experience.',
    shortDescription:
      'Fashion ecommerce platform with optimized UI and checkout.',
    category: 'Ecommerce',
    sector: 'ecommerce',
    industry: 'Fashion',
    result: '+40% Sales Growth',
    status: 'coming',
    screenshot: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    demoLink: '',
    features: [
      'Product catalog system',
      'Cart & checkout flow',
      'Responsive UI',
      'Conversion optimized design'
    ],
    fullDescription:
      'Built for fashion brands, this ecommerce system focuses on user experience, fast browsing, and high conversions. It supports product listing, smooth checkout, and mobile-first design.'
  },
  {
    id: '4',
    slug: 'pest-management-app',
    name: 'Pest Management Business Intelligence System',
    description:
      'A comprehensive Business Intelligence (BI) and automation platform specifically engineered for pest control enterprises to streamline operations, track field performance, and maximize profitability through real-time data analytics.',
    shortDescription:
      'Advanced BI dashboard for automation, analytics, and total business control.',
    category: 'BI Tools',
    sector: 'business',
    industry: 'Service Management',
    result: '300% Operational Efficiency',
    status: 'live',
    highlight: true,
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    demoLink: 'https://pest-nine.vercel.app/',
    userLogin: 'googlepehai1@',
    features: [
      'Real-time analytics & revenue tracking',
      'Automated scheduling & dispatching',
      'Customer lifecycle management (CRM)',
      'Field technician performance monitoring',
      'Inventory & chemical usage tracking',
      'Automated invoicing & payment reminders'
    ],
    fullDescription:
      'Our Pest Management BI System is a game-changer for service-based businesses. It eliminates manual paperwork by automating the entire workflow from lead capture to service delivery. Key benefits include: 1. **Data-Driven Decisions:** Access instant reports on revenue, technician efficiency, and customer retention. 2. **Operational Excellence:** Reduce travel time and fuel costs with optimized routing. 3. **Enhanced Customer Experience:** Automated notifications and easy payment portals keep clients happy. **Demo Access:** Use password "googlepehai1@" to explore the full dashboard capabilities.'
  },
  {
    id: '5',
    slug: 'gardenwalla-nursery',
    name: 'GardenWalla Nursery Ecommerce',
    description:
      'An ecommerce platform for plant nurseries to sell products online with smooth navigation and easy ordering.',
    shortDescription:
      'Online nursery store with product browsing and ordering system.',
    category: 'Ecommerce',
    sector: 'ecommerce',
    industry: 'Plants & Nursery',
    result: '+60% Orders',
    status: 'coming',
    screenshot: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop',
    demoLink: '',
    features: [
      'Category-based browsing',
      'Add to cart',
      'Mobile optimized UI',
      'Fast loading performance'
    ],
    fullDescription:
      'This platform enables nursery businesses to sell plants online. It provides a clean interface, easy navigation, and optimized ordering experience for customers.'
  },
  {
    id: '6',
    slug: 'green-nest-electronics',
    name: 'Green Nest – Refurbished Electronics',
    description:
      'A modern ecommerce platform for selling refurbished electronics with a focus on trust and conversion.',
    shortDescription:
      'Refurbished electronics store with trust-driven UI.',
    category: 'Ecommerce',
    sector: 'ecommerce',
    industry: 'Electronics',
    result: '+2x Conversions',
    status: 'live',
    screenshot: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop',
    demoLink: 'https://green-nest-lime.vercel.app/',
    features: [
      'Product catalog',
      'Trust-focused design',
      'Mobile responsive',
      'Optimized checkout'
    ],
    fullDescription:
      'Designed for refurbished product sellers, this platform improves trust and conversions through clean UI, strong product presentation, and optimized checkout flow.'
  },
  {
    id: '7',
    slug: 'attendance-app',
    name: 'Enterprise Attendance & Workforce App',
    description:
      'A high-performance mobile and web application designed for modern enterprises to manage workforce attendance, track real-time location, and automate payroll processing with biometric and geo-fencing integration.',
    shortDescription:
      'Next-gen employee tracking and workforce management system.',
    category: 'Business Apps',
    sector: 'business',
    industry: 'HR & Workforce',
    result: '100% Mobile Adoption',
    status: 'live',
    screenshot: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    demoLink: 'https://wings-attendance.vercel.app/',
    features: [
      'Geo-fencing & GPS tracking',
      'Biometric & Face-ID integration',
      'Automated leave management',
      'Real-time productivity analytics',
      'Seamless payroll integration',
      'Offline sync capabilities'
    ],
    fullDescription:
      'The Enterprise Attendance App solves the complexity of managing a distributed workforce. Benefits include: 1. **Eliminate Buddy Punching:** Secure biometric and geo-fenced check-ins ensure integrity. 2. **Real-time Visibility:** Know exactly where your field staff is and what they are working on. 3. **Reduced Admin Overhead:** Automate leave approvals and payroll calculations, saving hours of manual HR work every month.'
  },
  {
    id: '8',
    slug: 'icecream-brand',
    name: 'Ice Cream Brand Website',
    description:
      'A visually appealing website for an ice cream brand to showcase products and attract customers.',
    shortDescription:
      'Food brand website (Coming Soon)',
    category: 'Websites',
    sector: 'local',
    industry: 'Food & Beverage',
    result: 'Coming Soon',
    status: 'coming',
    screenshot: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?q=80&w=800&auto=format&fit=crop',
    demoLink: '',
    features: [],
    fullDescription:
      'This website will focus on branding, product showcase, and customer engagement for a food business.'
  },
  {
    id: '9',
    slug: 'wooden-door',
    name: 'Wooden Door Manufacturing Website',
    description:
      'A professional website for a manufacturing business to showcase products and generate leads.',
    shortDescription:
      'Manufacturing website (Coming Soon)',
    category: 'Websites',
    sector: 'industrial',
    industry: 'Manufacturing',
    result: 'Coming Soon',
    status: 'coming',
    screenshot: 'https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=800&auto=format&fit=crop',
    demoLink: '',
    features: [],
    fullDescription:
      'This platform will help showcase product catalogs, generate inquiries, and build credibility in the manufacturing sector.'
  }
];
