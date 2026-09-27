// Central services data — drives /services and /services/:slug.
// Slugs are the canonical URLs (keep in sync with public/sitemap.xml and internal links).

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  /** short label for nav/footer/cards */
  name: string;
  /** page H1 */
  title: string;
  subtitle: string;
  /** meta description + intro paragraph */
  description: string;
  /** icon key -> mapped in the components */
  icon: 'layout' | 'smartphone' | 'search' | 'megaphone' | 'chart' | 'cpu' | 'zap' | 'rocket';
  /** accent hue used on cards */
  accent: string;
  bullets: string[];
  benefits: ServiceBenefit[];
  keywords: string;
  faqs: ServiceFaq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    title: 'Web Development Agency',
    subtitle: 'High-performance websites and web apps that convert',
    description:
      'Custom web development services — fast, secure, SEO-optimised websites and web applications built with React, Next.js and modern cloud stacks. We build web experiences that rank on Google and turn visitors into revenue.',
    icon: 'layout',
    accent: 'blue',
    bullets: [
      'Custom website design & development',
      'React / Next.js web applications',
      'Ecommerce (Shopify, WooCommerce, headless)',
      'Progressive Web Apps (PWA)',
      'Core Web Vitals & speed optimisation',
      'CMS & headless CMS integration',
      'API development & third-party integrations',
      'Ongoing maintenance & support'
    ],
    benefits: [
      { title: 'SEO-ready by default', desc: 'Semantic markup, clean structure and fast pages so you rank higher on Google.' },
      { title: 'Mobile-first & responsive', desc: 'Flawless experience on every device, so you never lose a lead to a broken layout.' },
      { title: 'Built for speed', desc: 'Core Web Vitals tuning that cuts bounce rate and lifts conversion.' }
    ],
    keywords:
      'web development agency, web development services, custom website development, react development, next.js development, ecommerce website development, responsive web design, hire web developer',
    faqs: [
      { q: 'How long does a website take to build?', a: 'A marketing site typically ships in 2–4 weeks; larger web apps and ecommerce stores run 4–10 weeks depending on scope. You get a fixed timeline before we start.' },
      { q: 'Do you build SEO-friendly websites?', a: 'Yes. Every site ships with semantic HTML, clean URLs, optimised metadata, sitemap and schema markup — technical SEO is part of the build, not an add-on.' },
      { q: 'Which technologies do you use?', a: 'Primarily React and Next.js on the front end, with Node/Express, PostgreSQL, Firebase or serverless functions on the back end — chosen to fit your product.' }
    ],
    related: ['seo', 'app-development', 'custom-software']
  },
  {
    slug: 'seo',
    name: 'SEO Services',
    title: 'SEO Services & Search Engine Optimization',
    subtitle: 'Rank on page one and win qualified, global traffic',
    description:
      'Data-driven SEO services: technical SEO audits, on-page optimisation, keyword strategy, content and authority building. We help businesses rank globally for competitive keywords and turn search traffic into revenue.',
    icon: 'search',
    accent: 'emerald',
    bullets: [
      'Technical SEO audits & fixes',
      'On-page & content optimisation',
      'Keyword research & search intent mapping',
      'Local SEO & Google Business Profile',
      'Link building & digital PR',
      'Core Web Vitals & page-speed SEO',
      'Schema / structured data markup',
      'SEO reporting & analytics dashboards'
    ],
    benefits: [
      { title: 'Rank for buyer keywords', desc: 'We target the searches your customers actually make, not vanity traffic.' },
      { title: 'Compounding growth', desc: 'Unlike ads, SEO keeps delivering traffic month after month.' },
      { title: 'Measurable ROI', desc: 'Transparent reports tying rankings and traffic to leads and revenue.' }
    ],
    keywords:
      'seo services, seo agency, search engine optimization agency, technical seo, on-page seo, local seo, seo audit, rank on google, international seo agency',
    faqs: [
      { q: 'How long until I see SEO results?', a: 'Technical wins can move in weeks; competitive keyword rankings usually build over 3–6 months. We report progress monthly from day one.' },
      { q: 'Do you do international / global SEO?', a: 'Yes. We handle hreflang, multi-region keyword targeting and global content strategy for businesses ranking worldwide.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No ethical SEO agency can guarantee exact positions — but we do commit to a clear strategy, transparent reporting and measurable organic growth.' }
    ],
    related: ['social-media-marketing', 'web-development', 'business-analytics']
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    title: 'Social Media Marketing (SMM) Services',
    subtitle: 'Build brand demand across every social platform',
    description:
      'Full-service social media marketing: strategy, content, paid campaigns and community growth across Instagram, LinkedIn, Facebook, YouTube and X — engineered to turn followers into customers.',
    icon: 'megaphone',
    accent: 'pink',
    bullets: [
      'Social strategy & channel planning',
      'Content creation & scheduling',
      'Paid social campaigns (Meta, LinkedIn, YouTube)',
      'Community management & engagement',
      'Influencer & creator collaborations',
      'Social analytics & performance reporting',
      'Short-form video & reels strategy',
      'Lead-gen funnels from social traffic'
    ],
    benefits: [
      { title: 'Demand creation', desc: 'Reach and warm up audiences before they ever search for you.' },
      { title: 'Consistent brand', desc: 'A cohesive voice and visual identity across every platform.' },
      { title: 'ROI on spend', desc: 'Paid and organic campaigns measured against real business outcomes.' }
    ],
    keywords:
      'social media marketing agency, smm services, social media management, instagram marketing, linkedin marketing, paid social campaigns, content marketing agency',
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, LinkedIn, Facebook, YouTube and X — we recommend the mix based on where your buyers actually spend time.' },
      { q: 'Do you create the content?', a: 'Yes — strategy, copy, graphics and short-form video are all handled by our team.' },
      { q: 'Can you run paid ads too?', a: 'Absolutely. We run Meta, LinkedIn and YouTube ad campaigns with full tracking and reporting.' }
    ],
    related: ['seo', 'business-analytics', 'web-development']
  },
  {
    slug: 'app-development',
    name: 'App Development',
    title: 'Mobile App Development Services',
    subtitle: 'iOS & Android apps users love to open',
    description:
      'Expert mobile app development for iOS and Android — native and cross-platform (React Native, Flutter) apps with secure back ends, smooth UX and App Store Optimization built in.',
    icon: 'smartphone',
    accent: 'emerald',
    bullets: [
      'iOS & Android app development',
      'Cross-platform apps (React Native, Flutter)',
      'Mobile UI/UX design',
      'App Store Optimization (ASO)',
      'Backend, APIs & cloud integration',
      'Payments, auth & push notifications',
      'Offline-first & real-time features',
      'App maintenance & scaling'
    ],
    benefits: [
      { title: 'User-centric design', desc: 'Intuitive flows that keep people coming back and reduce churn.' },
      { title: 'Scalable architecture', desc: 'Apps built to grow with your user base without a rewrite.' },
      { title: 'Secure & reliable', desc: 'Enterprise-grade security and performance from day one.' }
    ],
    keywords:
      'mobile app development agency, app development services, ios app development, android app development, react native app development, flutter app development, custom mobile apps',
    faqs: [
      { q: 'Native or cross-platform — which should I choose?', a: 'Cross-platform (React Native/Flutter) is faster and cheaper for most products; native is worth it for heavy graphics or platform-specific features. We recommend the best fit in a free consult.' },
      { q: 'Will you publish the app to the stores?', a: 'Yes — we handle App Store and Play Store submission, plus ongoing release management.' },
      { q: 'Can you take over an existing app?', a: 'Yes, we regularly audit, refactor and scale existing mobile apps.' }
    ],
    related: ['web-development', 'custom-software', 'business-analytics']
  },
  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    title: 'Business Analytics & Business Intelligence Solutions',
    subtitle: 'Turn your data into decisions that grow revenue',
    description:
      'Business analytics and intelligence services — dashboards, predictive models, data warehousing and reporting that give you real-time visibility and confident, data-driven decisions.',
    icon: 'chart',
    accent: 'purple',
    bullets: [
      'Interactive BI dashboards',
      'Predictive & prescriptive analytics',
      'Data warehousing & ETL pipelines',
      'Real-time KPI tracking',
      'Customer & revenue analytics',
      'Custom reporting systems',
      'Forecasting & trend analysis',
      'Data governance & quality'
    ],
    benefits: [
      { title: 'Informed decisions', desc: 'Decide with data, not guesswork, to grow faster and safer.' },
      { title: 'Operational efficiency', desc: 'Spot bottlenecks and optimise processes with clear, live numbers.' },
      { title: 'Market edge', desc: 'Catch emerging trends early and act before competitors do.' }
    ],
    keywords:
      'business analytics services, business intelligence solutions, data analytics for business, power bi dashboard development, predictive analytics, data dashboard development, kpi reporting',
    faqs: [
      { q: 'What tools do you build dashboards in?', a: 'Power BI, Looker Studio, Metabase and custom React dashboards — chosen to match your data stack and budget.' },
      { q: 'Can you connect to our existing data?', a: 'Yes — we connect to SQL databases, spreadsheets, CRMs, ERPs and SaaS APIs to build a single source of truth.' },
      { q: 'How quickly can we get a first dashboard?', a: 'A focused first dashboard usually goes live in 1–3 weeks.' }
    ],
    related: ['custom-software', 'seo', 'social-media-marketing']
  },
  {
    slug: 'custom-software',
    name: 'Custom Software',
    title: 'Custom Software Development Agency',
    subtitle: 'Software built exactly for your business',
    description:
      'Custom software development — robust, scalable and secure applications, APIs and platforms tailored precisely to your workflows, with full ownership of your IP.',
    icon: 'cpu',
    accent: 'blue',
    bullets: [
      'Enterprise software development',
      'SaaS product development',
      'API development & integration',
      'Legacy system modernisation',
      'Cloud-native applications',
      'Software architecture & auditing'
    ],
    benefits: [
      { title: 'Perfect fit', desc: 'Software shaped to your workflows — no bloat from off-the-shelf tools.' },
      { title: 'Full ownership', desc: 'You own your IP and your roadmap, with no vendor lock-in.' },
      { title: 'Competitive edge', desc: 'Capabilities your competitors simply cannot copy.' }
    ],
    keywords:
      'custom software development agency, enterprise software development, saas development, api development, bespoke software solutions, software consulting',
    faqs: [
      { q: 'How do you price custom software?', a: 'Fixed-scope milestones or a monthly dedicated-team model — agreed up front after a discovery call.' },
      { q: 'Do we own the source code?', a: 'Yes. You own the code and IP; we hand over the full repository on delivery.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes — we regularly integrate with CRMs, ERPs, payment gateways and legacy databases.' }
    ],
    related: ['web-development', 'app-development', 'digital-transformation']
  },
  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    title: 'Digital Transformation Services',
    subtitle: 'Modernise your business for the digital age',
    description:
      'Digital transformation consulting and delivery — cloud migration, process automation and modern tooling that make your business faster, leaner and ready to scale.',
    icon: 'zap',
    accent: 'amber',
    bullets: [
      'Legacy system modernisation',
      'Cloud migration & strategy',
      'Process automation & AI workflows',
      'Digital customer experience',
      'Data-driven culture & tooling',
      'Technology stack optimisation'
    ],
    benefits: [
      { title: 'Increased agility', desc: 'Respond to market change faster on a modern stack.' },
      { title: 'Higher productivity', desc: 'Automate repetitive work and give teams better tools.' },
      { title: 'Future-proofed', desc: 'Stay competitive in an increasingly digital market.' }
    ],
    keywords:
      'digital transformation services, digital transformation consulting, legacy modernisation, cloud migration services, business process automation, digital strategy',
    faqs: [
      { q: 'Where do we start with digital transformation?', a: 'With a discovery audit — we map your current systems and processes, then prioritise the highest-ROI changes.' },
      { q: 'Do you handle cloud migration?', a: 'Yes, including AWS, Azure, Google Cloud and Oracle Cloud migrations with minimal downtime.' },
      { q: 'Is this only for large enterprises?', a: 'No — small and mid-sized businesses often see the fastest returns from targeted automation.' }
    ],
    related: ['custom-software', 'business-analytics', 'web-development']
  },
  {
    slug: 'saas-development',
    name: 'SaaS Development',
    title: 'SaaS Product Development Services',
    subtitle: 'From idea to a scalable, multi-tenant SaaS product',
    description:
      'End-to-end SaaS development: product strategy, MVP builds, multi-tenant architecture, subscription billing and scaling — everything you need to launch and grow a SaaS business.',
    icon: 'rocket',
    accent: 'blue',
    bullets: [
      'SaaS product strategy & MVP',
      'Multi-tenant architecture',
      'Subscription billing (Stripe, Razorpay)',
      'User management, roles & auth',
      'Usage analytics & dashboards',
      'Onboarding & self-serve flows',
      'Scaling & infrastructure',
      'SLA monitoring & support'
    ],
    benefits: [
      { title: 'Launch fast', desc: 'A focused MVP that reaches market in weeks, not quarters.' },
      { title: 'Built to scale', desc: 'Multi-tenant foundations ready for thousands of accounts.' },
      { title: 'Revenue-ready', desc: 'Billing, plans and analytics wired in from the start.' }
    ],
    keywords:
      'saas development agency, saas product development, mvp development, build a saas product, multi tenant saas architecture, subscription software development',
    faqs: [
      { q: 'How long does an MVP take?', a: 'A focused SaaS MVP typically takes 6–12 weeks depending on features.' },
      { q: 'Do you build the billing system?', a: 'Yes — we integrate Stripe, Razorpay or Paddle with plans, trials and usage-based pricing.' },
      { q: 'Can you scale it after launch?', a: 'Yes, we offer ongoing development and DevOps as your user base grows.' }
    ],
    related: ['custom-software', 'web-development', 'business-analytics']
  }
];

export const getService = (slug?: string): Service | undefined =>
  slug ? services.find((s) => s.slug === slug) : undefined;

export default services;
