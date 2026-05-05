export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'performance-matters-seo-strategy',
    title: 'Performance Matters: Why Speed is the Ultimate SEO Strategy',
    excerpt: 'In 2025, user experience is the only thing that matters to search engines. Discover how we optimize for core web vitals.',
    category: 'SEO & Performance',
    author: 'WingsForShare Tech Team',
    date: 'April 15, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    readTime: '6 min read',
    content: `## The Speed-to-Revenue Connection

Website performance isn't just a technical metric; it's a financial one. Every millisecond of latency correlates directly to a decrease in conversion rates. At WingsForShare, we treat performance as the foundation of every build.

### Why Core Web Vitals are King
Google's emphasis on LCP, FID, and CLS has changed the game. It's no longer enough to have good content; your delivery must be instantaneous.

### Our Optimization Stack
- **Edge Delivery**: Serving assets from global points of presence.
- **Image Compression**: Next-gen formats and responsive sizing.
- **Code Splitting**: Only loading exactly what the user needs.

### The Business Impact
Companies that optimize their core web vitals see an average of 15-20% increase in user retention and a significant boost in search engine visibility. High speed equals high trust.`
  },
  {
    id: '2',
    slug: 'saas-architecture-infinite-scale',
    title: 'SaaS Architecture: Building for Infinite Scale',
    excerpt: 'A deep dive into the serverless and micro-frontend architectures we use to build global software products.',
    category: 'Product Engineering',
    author: 'Chief Architect',
    date: 'April 10, 2025',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    readTime: '8 min read',
    content: `## Architecture for the Future

Building a SaaS product today requires thinking about tomorrow's success. If your system can't handle 10x growth overnight, it's already obsolete.

### Micro-Frontends: Scalability in UI
We break down complex dashboards into manageable modules, allowing teams to ship features independently without breaking the entire application.

### Serverless & Edge Logic
Moving computation closer to the user reduces latency and eliminates traditional server management headaches. It also provides automatic scaling that matches your user demand perfectly.

### Security First
In a multi-tenant SaaS environment, security is paramount. We implement zero-trust architectures to ensure data isolation and protection at every layer.`
  },
  {
    id: '3',
    slug: 'ai-driven-business-intelligence',
    title: 'AI-Driven BI: Transforming Raw Data into Revenue',
    excerpt: 'How we implement custom AI layers to turn your business data into predictive growth maps.',
    category: 'Data Science',
    author: 'Data Lead',
    date: 'April 05, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min read',
    content: `## The Era of Smart Data

Raw data is a liability; processed intelligence is an asset. We build the bridges between your data sources and your decision-making table.

### Predictive Modeling
Why look at what happened last month when you can predict what will happen next year? Our AI models identify trends before they manifest, giving you a distinct competitive advantage.

### Custom Dashboards
Ditch the spreadsheets. We build immersive, real-time dashboards that tell you exactly where your growth is coming from and where you should focus your next marketing spend.

### Integrating with AI
We leverage the latest LLMs and machine learning frameworks to provide natural language interfaces to your complex datasets.`
  }
];
