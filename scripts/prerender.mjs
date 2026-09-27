// Post-build prerender: writes a per-route index.html with that page's own
// <title>, meta description/keywords, canonical, OG/Twitter tags and <h1>.
// Non-JS crawlers (Bing, social link previews) then see correct per-page meta.
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const shellPath = path.join(dist, 'index.html');
const SITE = 'https://wingsforshare.com';

const ROUTES = [
  { p: '/services', h1: 'Digital services that drive revenue', t: 'Digital Services | Web Development, SEO, SMM, App Development & Analytics | WingsForShare', d: 'WingsForShare delivers web development, SEO, social media marketing, app development, business analytics and custom software - global digital services engineered for growth.', k: 'digital services, web development agency, seo agency, social media marketing agency, app development agency, business analytics services, digital agency' },
  { p: '/services/web-development', h1: 'Web Development Agency', t: 'Web Development Agency | Custom Websites & Web Apps | WingsForShare', d: 'Custom web development - fast, secure, SEO-ready websites and web apps built with React and Next.js. Global web development agency for startups and enterprises.', k: 'web development agency, web development services, custom website development, react development, next.js development, ecommerce website development, web development cost' },
  { p: '/services/seo', h1: 'SEO Services & Search Engine Optimization', t: 'SEO Agency | Search Engine Optimization Services | WingsForShare', d: 'Data-driven SEO services: technical SEO audits, on-page optimisation, keyword strategy, content and link building. Rank globally and turn search traffic into revenue.', k: 'seo agency, seo services, technical seo, on-page seo, international seo agency, link building, seo audit' },
  { p: '/services/social-media-marketing', h1: 'Social Media Marketing (SMM) Services', t: 'Social Media Marketing Agency (SMM) | WingsForShare', d: 'Full-service social media marketing: strategy, content, paid campaigns and community growth across Instagram, LinkedIn, Facebook, YouTube and X.', k: 'social media marketing agency, smm services, social media management, instagram marketing, linkedin marketing agency, paid social campaigns' },
  { p: '/services/app-development', h1: 'Mobile App Development Services', t: 'App Development Agency | iOS, Android & Cross-Platform Apps | WingsForShare', d: 'Expert mobile app development for iOS and Android - native and cross-platform (React Native, Flutter) apps with secure back ends and App Store Optimization built in.', k: 'app development agency, mobile app development, ios app development, android app development, react native app development, flutter app development, app development cost' },
  { p: '/services/business-analytics', h1: 'Business Analytics & Business Intelligence', t: 'Business Analytics & BI Services | Dashboards & Reporting | WingsForShare', d: 'Business analytics and intelligence services - dashboards, predictive models, data warehousing and reporting that give you real-time visibility and confident decisions.', k: 'business analytics services, business intelligence consulting, data analytics services, power bi development, predictive analytics, dashboard development' },
  { p: '/services/custom-software', h1: 'Custom Software Development Agency', t: 'Custom Software Development Agency | You Own the Code | WingsForShare', d: 'Custom software development - robust, scalable applications, APIs and platforms tailored to your workflows, with full ownership of your IP.', k: 'custom software development agency, enterprise software development, saas development, api development, bespoke software solutions' },
  { p: '/services/digital-transformation', h1: 'Digital Transformation Services', t: 'Digital Transformation Services | Modernise Your Business | WingsForShare', d: 'Digital transformation consulting and delivery - cloud migration, process automation and modern tooling that make your business faster, leaner and ready to scale.', k: 'digital transformation services, digital transformation consulting, legacy modernisation, cloud migration services, business process automation' },
  { p: '/services/saas-development', h1: 'SaaS Product Development Services', t: 'SaaS Development Agency | Build & Scale Your SaaS | WingsForShare', d: 'End-to-end SaaS development: product strategy, MVP builds, multi-tenant architecture, subscription billing and scaling - everything you need to launch your SaaS.', k: 'saas development agency, saas product development, mvp development, multi tenant saas architecture, subscription software development' },
  { p: '/portfolio', h1: 'Selected work', t: 'Portfolio: Web, Mobile & BI Projects Delivered | WingsForShare', d: 'Explore the WingsForShare portfolio: websites, ecommerce stores, business intelligence systems and custom apps built for measurable business results.', k: 'web development portfolio, app development portfolio, ecommerce development portfolio, business intelligence case studies, digital agency portfolio' },
  { p: '/blog', h1: 'Knowledge Hub', t: 'Digital Marketing, Web Development & SEO Blog | WingsForShare', d: 'Practical guides on web development, SEO, social media marketing, app development and business analytics, written to help growing businesses rank on Google and convert.', k: 'web development blog, seo blog, social media marketing blog, app development cost, digital agency tips' },
  { p: '/contact', h1: 'Contact WingsForShare', t: 'Contact WingsForShare | Free Consultation for Web, App & SEO Projects', d: 'Talk to WingsForShare for a free consultation on web development, SEO, social media marketing, mobile apps and business analytics. Fast quotes, clear pricing, no jargon.', k: 'contact digital agency, hire web development agency, seo consultation, app development quote, free seo audit' },
  { p: '/start-project', h1: 'Start your project', t: 'Start Your Project | Web, SEO, App & Analytics | WingsForShare', d: 'Ready to scale? Start your project with WingsForShare. Tell us your goals for web development, SEO, app development, business analytics or custom software.', k: 'start a web project, software development quote, website project enquiry, app development brief' }
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const shell = fs.readFileSync(shellPath, 'utf8');
const setMeta = (html, re, value) => html.replace(re, (_m, a, b) => a + esc(value) + b);

let count = 0;
for (const r of ROUTES) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.t)}</title>`);
  html = setMeta(html, /(<meta name="title" content=")([\s\S]*?)(" \/>)/, r.t);
  html = setMeta(html, /(<meta name="description" content=")([\s\S]*?)(" \/>)/, r.d);
  html = setMeta(html, /(<meta name="keywords" content=")([\s\S]*?)(" \/>)/, r.k);
  html = setMeta(html, /(<link rel="canonical" href=")([\s\S]*?)(" \/>)/, SITE + r.p);
  html = setMeta(html, /(<meta property="og:title" content=")([\s\S]*?)(" \/>)/, r.t);
  html = setMeta(html, /(<meta property="og:description" content=")([\s\S]*?)(" \/>)/, r.d);
  html = setMeta(html, /(<meta property="og:url" content=")([\s\S]*?)(" \/>)/, SITE + r.p);
  html = setMeta(html, /(<meta name="twitter:title" content=")([\s\S]*?)(" \/>)/, r.t);
  html = setMeta(html, /(<meta name="twitter:description" content=")([\s\S]*?)(" \/>)/, r.d);
  html = setMeta(html, /(<meta name="twitter:url" content=")([\s\S]*?)(" \/>)/, SITE + r.p);
  // First <h1> in the shell is the noscript heading - make it page-specific.
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${esc(r.h1)} - WingsForShare</h1>`);

  const dir = path.join(dist, r.p.replace(/^\/+/, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  count++;
}

console.log(`prerender: wrote ${count} route HTML files`);
