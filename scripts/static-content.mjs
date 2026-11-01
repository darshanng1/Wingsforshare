import { buildSync } from 'esbuild';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

/* ------------------------------------------------------------------ */
/* Load the real site data (services, products, blogs) at build time.  */
/* ------------------------------------------------------------------ */
export async function loadContent() {
  const out = path.join(os.tmpdir(), `wings-seo-data-${process.pid}-${Date.now()}.mjs`);
  buildSync({
    stdin: {
      contents: `
        export { services } from './src/data/services.ts';
        export { products } from './src/data/products.ts';
        export { blogs } from './src/data/blogs.ts';
      `,
      resolveDir: process.cwd(),
      loader: 'ts',
      sourcefile: 'seo-data-entry.ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: out,
    logLevel: 'silent',
  });
  const mod = await import(pathToFileURL(out).href);
  return { services: mod.services, products: mod.products, blogs: mod.blogs };
}

/* ------------------------------------------------------------------ */
/* HTML helpers                                                        */
/* ------------------------------------------------------------------ */
export const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function inline(value) {
  let out = esc(value);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

function renderTable(rows) {
  const parsed = rows.map((line) =>
    line
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.trim())
  );
  const isSeparator = (cells) => cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  const head = parsed[0] || [];
  const body = parsed.slice(1).filter((cells) => !isSeparator(cells));
  const th = head.map((cell) => `<th>${inline(cell)}</th>`).join('');
  const tb = body
    .map((cells) => `<tr>${cells.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="wf-table-wrap"><table><thead><tr>${th}</tr></thead><tbody>${tb}</tbody></table></div>`;
}

export function mdToHtml(markdown) {
  const lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let para = [];
  let list = null;
  let table = null;
  let code = null;

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      out.push(`<${list.type}>${list.items.map((item) => `<li>${inline(item)}</li>`).join('')}</${list.type}>`);
      list = null;
    }
  };
  const flushTable = () => {
    if (table) {
      out.push(renderTable(table));
      table = null;
    }
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushTable();
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    if (code) {
      if (line.startsWith('```')) {
        out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
        code = null;
      } else {
        code.push(raw);
      }
      continue;
    }
    if (line.startsWith('```')) {
      flushAll();
      code = [];
      continue;
    }
    if (!line) {
      flushAll();
      continue;
    }

    if (line.startsWith('|')) {
      flushPara();
      flushList();
      flushTable();
      table = [line];
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('|')) {
        i++;
        table.push(lines[i].trim());
      }
      flushTable();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(line)) {
      flushAll();
      out.push('<hr>');
      continue;
    }

    const unordered = line.match(/^[-*+]\s+(.*)$/);
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushPara();
      flushTable();
      const type = unordered ? 'ul' : 'ol';
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    if (line.startsWith('>')) {
      flushAll();
      out.push(`<blockquote><p>${inline(line.replace(/^>\s?/, ''))}</p></blockquote>`);
      continue;
    }

    flushList();
    flushTable();
    para.push(line);
  }

  if (code) out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
  flushAll();
  return out.join('\n');
}

/* ------------------------------------------------------------------ */
/* Shared layout                                                       */
/* ------------------------------------------------------------------ */
const CSS = `
.wf-static{--wf-bg:#050505;--wf-panel:#0b0b10;--wf-line:#26262e;--wf-text:#f4f4f5;--wf-muted:#a1a1aa;--wf-accent:#818cf8;background:var(--wf-bg);color:var(--wf-text);font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.7;min-height:100vh}
.wf-static *{box-sizing:border-box}
.wf-static a{color:#c7d2fe;text-decoration:none}
.wf-static a:hover{text-decoration:underline}
.wf-static .wf-header{position:sticky;top:0;z-index:10;background:rgba(5,5,5,.94);border-bottom:1px solid var(--wf-line);backdrop-filter:blur(12px)}
.wf-static .wf-header-inner{max-width:1120px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;gap:22px;flex-wrap:wrap}
.wf-static .wf-brand{font-weight:800;font-size:18px;letter-spacing:-.03em;color:#fff}
.wf-static .wf-nav{display:flex;gap:18px;flex-wrap:wrap;margin-left:auto}
.wf-static .wf-nav a{font-size:14px;color:var(--wf-muted)}
.wf-static .wf-btn{display:inline-block;background:var(--wf-accent);color:#0b0b10;font-weight:700;padding:12px 20px;border-radius:10px;font-size:14px}
.wf-static .wf-btn:hover{background:#a5b4fc;text-decoration:none}
.wf-static .wf-btn-sm{padding:9px 14px;font-size:13px}
.wf-static .wf-main{max-width:980px;margin:0 auto;padding:56px 24px 80px}
.wf-static .wf-kicker{margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--wf-accent)}
.wf-static h1{margin:0 0 18px;font-size:clamp(34px,6vw,58px);line-height:1.05;letter-spacing:-.03em;color:#fff}
.wf-static h2{margin:2.2em 0 .6em;font-size:clamp(24px,3.4vw,34px);line-height:1.2;letter-spacing:-.02em;color:#fff}
.wf-static h3{margin:1.6em 0 .4em;font-size:20px;line-height:1.3;color:#fff}
.wf-static p{margin:0 0 1em;color:#d4d4d8}
.wf-static .wf-lead{font-size:19px;line-height:1.6;color:#e4e4e7;max-width:800px}
.wf-static .wf-meta{font-size:13px;color:var(--wf-muted);margin:0 0 1.2em}
.wf-static .wf-actions{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0 8px}
.wf-static .wf-list{margin:0 0 1.4em 1.2em;padding:0;color:#d4d4d8}
.wf-static .wf-list li{margin:.4em 0}
.wf-static .wf-checklist{list-style:none;margin:0 0 1.4em;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px}
.wf-static .wf-checklist li{background:var(--wf-panel);border:1px solid var(--wf-line);border-radius:12px;padding:16px 18px;color:#d4d4d8}
.wf-static .wf-checklist strong{display:block;color:#fff;margin-bottom:4px}
.wf-static .wf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin:18px 0 8px}
.wf-static .wf-card{background:var(--wf-panel);border:1px solid var(--wf-line);border-radius:14px;padding:20px}
.wf-static .wf-card h3{margin-top:0}
.wf-static .wf-card p{font-size:15px;color:#b4b4bc}
.wf-static .wf-card-kicker{margin:0 0 8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#818cf8}
.wf-static .wf-link{display:inline-block;margin-top:8px;font-size:14px;font-weight:600}
.wf-static .wf-section{border-top:1px solid var(--wf-line);padding-top:12px;margin-top:28px}
.wf-static .wf-faq{border-bottom:1px solid var(--wf-line);padding:4px 0 14px}
.wf-static .wf-faq h3{margin:1.2em 0 .35em;font-size:19px}
.wf-static .wf-faq p{color:#b4b4bc}
.wf-static .wf-cta{margin:48px 0 0;padding:28px;border:1px solid #3730a3;border-radius:16px;background:linear-gradient(135deg,#111126,#0b0b10)}
.wf-static .wf-cta h2{margin-top:0}
.wf-static .wf-article h2{margin:2.2em 0 .6em;font-size:30px}
.wf-static .wf-article h3{margin:1.8em 0 .5em;font-size:22px}
.wf-static .wf-article p{margin:0 0 1.1em;color:#d4d4d8}
.wf-static .wf-article ul,.wf-static .wf-article ol{margin:0 0 1.2em 1.2em;padding:0}
.wf-static .wf-article li{margin:.35em 0}
.wf-static .wf-article table{width:100%;border-collapse:collapse;margin:1.4em 0;font-size:15px}
.wf-static .wf-article th,.wf-static .wf-article td{border:1px solid #26262e;padding:10px 12px;text-align:left;vertical-align:top}
.wf-static .wf-article th{background:#111116;color:#fff}
.wf-static .wf-article blockquote{border-left:3px solid #818cf8;margin:1.4em 0;padding:0 0 0 18px;color:#c4b5fd}
.wf-static .wf-article code{background:#18181f;padding:2px 6px;border-radius:5px;font-size:.9em}
.wf-static .wf-table-wrap{overflow-x:auto}
.wf-static .wf-footer{border-top:1px solid var(--wf-line);margin-top:40px;padding:36px 24px 28px;background:#030303}
.wf-static .wf-footer-inner{max-width:980px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:24px}
.wf-static .wf-footer p{margin:0 0 8px;font-size:13px;color:#8b8b94}
.wf-static .wf-footer nav{display:flex;flex-direction:column;gap:8px;font-size:13px}
.wf-static .wf-copy{max-width:980px;margin:26px auto 0;padding-top:16px;border-top:1px solid #1c1c22;font-size:12px;color:#67676f}
@media(max-width:760px){.wf-static .wf-header-inner{gap:12px}.wf-static .wf-nav{order:3;width:100%;margin-left:0;gap:12px}.wf-static .wf-footer-inner{grid-template-columns:1fr}.wf-static .wf-main{padding:36px 18px 60px}}
`;

const NAV = [
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
];

const header = () => `<header class="wf-header"><div class="wf-header-inner"><a class="wf-brand" href="/">WingsForShare</a><nav class="wf-nav">${NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}</nav><a class="wf-btn wf-btn-sm" href="/start-project">Start a project</a></div></header>`;

const footer = () => `<footer class="wf-footer"><div class="wf-footer-inner"><div><p class="wf-brand">WingsForShare</p><p>Global web development, SEO, social media marketing, app development and business analytics agency.</p></div><div><p><a href="mailto:info@wingsforshare.com">info@wingsforshare.com</a></p><p><a href="https://wa.me/918618764541">WhatsApp: +91 86187 64541</a></p></div><nav><a href="/services">Services</a><a href="/portfolio">Portfolio</a><a href="/blog">Blog</a><a href="/contact">Contact</a><a href="/start-project">Start a project</a></nav></div><p class="wf-copy">© ${new Date().getFullYear()} WingsForShare Digital Solutions. All rights reserved.</p></footer>`;

const page = (body) => `<div id="root"><style>${CSS}</style><div class="wf-static">${header()}${body}${footer()}</div></div>`;

const cta = (title, text, href, label) =>
  `<section class="wf-cta"><h2>${esc(title)}</h2><p>${esc(text)}</p><a class="wf-btn" href="${esc(href)}">${esc(label)}</a></section>`;

const faq = (item) => `<div class="wf-faq"><h3>${esc(item.q)}</h3><p>${esc(item.a)}</p></div>`;

const PROCESS = [
  ['Discovery & scope', 'We learn your business, audience and goals, then agree on a fixed scope, timeline and price in writing.'],
  ['Strategy & plan', 'We map the pages, features, keywords and technical architecture before any design or code is written.'],
  ['Build & review', 'A senior engineer builds in short review cycles, so you see progress early and there are no surprises at launch.'],
  ['Launch & support', 'We ship, monitor performance, and stay available for fixes, improvements and the next phase of growth.'],
];

const COMMITMENTS = [
  ['Reply within 24 hours', 'Every enquiry is answered the next working day — most within a few hours.'],
  ['You own your code', 'Full source-code and IP ownership on delivery. No lock-in, no hostage repos.'],
  ['Fixed scope, fixed price', 'A written timeline and price before we start. No surprise invoices mid-project.'],
  ['Global delivery', 'We work with clients across India, the US, UK, Australia and the Middle East.'],
  ['Reported against outcomes', 'We track leads, traffic and rankings — not vanity metrics.'],
  ['A senior engineer on every build', 'No hand-offs to juniors after the sales call. The people who scope it, build it.'],
];

const HOME_FAQS = [
  ['What does WingsForShare do?', 'WingsForShare is a global digital agency. We deliver web development, SEO, social media marketing (SMM), mobile app development and business analytics — everything you need to grow online, under one roof.'],
  ['Do you work with clients worldwide?', 'Yes. We work with businesses across the US, UK, Europe, Australia, the Middle East and India, and we optimise for global as well as local search rankings.'],
  ['How long does a website or app take to build?', 'A marketing website typically ships in 2–4 weeks, web apps and ecommerce in 4–10 weeks, and mobile apps or SaaS MVPs in 6–12 weeks. You get a fixed timeline before we start.'],
  ['How long until I see SEO results?', 'Technical and on-page wins often move within weeks; competitive keyword rankings build over 3–6 months. We report progress monthly and only target buyer-intent keywords.'],
  ['Can you run social media marketing and paid ads?', 'Yes. We handle social strategy, content, community management and paid campaigns across Instagram, LinkedIn, Facebook, YouTube and X, measured against real leads and revenue.'],
  ['How do we get started?', 'Send us your goals via the contact or start-project form. We reply with a tailored plan, timeline and quote — no obligation.'],
].map(([q, a]) => ({ q, a }));

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */
function serviceCard(service) {
  return `<article class="wf-card"><p class="wf-card-kicker">${esc(service.name)}</p><h3><a href="/services/${esc(service.slug)}">${esc(service.title)}</a></h3><p>${esc(service.description)}</p><ul class="wf-list">${service.bullets
    .slice(0, 4)
    .map((item) => `<li>${esc(item)}</li>`)
    .join('')}</ul><a class="wf-link" href="/services/${esc(service.slug)}">Explore ${esc(service.name)} →</a></article>`;
}

function productCard(product) {
  return `<article class="wf-card"><p class="wf-card-kicker">${esc(product.category)}${product.industry ? ` · ${esc(product.industry)}` : ''}</p><h3><a href="/product/${esc(product.slug)}">${esc(product.name)}</a></h3><p>${esc(product.shortDescription || product.description)}</p><p class="wf-meta">Outcome: ${esc(product.result || 'Delivered')}</p><a class="wf-link" href="/product/${esc(product.slug)}">View case study →</a></article>`;
}

function postCard(blog) {
  return `<article class="wf-card"><p class="wf-card-kicker">${esc(blog.category)} · ${esc(blog.readTime)}</p><h3><a href="/blog/${esc(blog.slug)}">${esc(blog.title)}</a></h3><p>${esc(blog.excerpt)}</p><a class="wf-link" href="/blog/${esc(blog.slug)}">Read the guide →</a></article>`;
}

/* ------------------------------------------------------------------ */
/* Page builders                                                       */
/* ------------------------------------------------------------------ */
function renderHome({ services, products, blogs }) {
  return page(`<main class="wf-main">
<p class="wf-kicker">WingsForShare — Digital Solutions</p>
<h1>Web Development, SEO, Apps &amp; Business Analytics</h1>
<p class="wf-lead">WingsForShare is a global digital agency building websites, web apps, mobile apps, SEO systems and business intelligence platforms that drive measurable revenue.</p>
<p>We work with businesses across India, the US, UK, Australia and the Middle East. Every engagement is scoped in writing, built by senior engineers, and measured against leads, traffic and revenue — not vanity metrics.</p>
<div class="wf-actions"><a class="wf-btn" href="/start-project">Start your project</a><a class="wf-btn" style="background:#18181f;color:#e4e4e7;border:1px solid #37373f" href="/portfolio">View our work</a></div>
<h2>What we do</h2>
<p>From a marketing website to a multi-tenant SaaS platform, we cover the full digital stack: strategy, design, engineering, SEO and analytics.</p>
<div class="wf-grid">${services.map(serviceCard).join('')}</div>
<h2>Selected work</h2>
<p>A sample of the websites, ecommerce stores, business intelligence systems and custom apps we have delivered.</p>
<div class="wf-grid">${products.slice(0, 6).map(productCard).join('')}</div>
<h2>How we work with every client</h2>
<ul class="wf-checklist">${COMMITMENTS.map(([title, text]) => `<li><strong>${esc(title)}</strong>${esc(text)}</li>`).join('')}</ul>
<h2>Frequently asked questions</h2>
${HOME_FAQS.map(faq).join('')}
<h2>From the blog</h2>
<p>Practical guides on web development, SEO, social media and business analytics.</p>
<div class="wf-grid">${blogs.slice(0, 3).map(postCard).join('')}</div>
${cta('Start your digital transformation', 'Tell us about your goals. We reply within one working day with a tailored plan, timeline and fixed quote.', '/start-project', 'Start your project')}
</main>`);
}

function renderServicesIndex({ services }) {
  const blocks = services
    .map(
      (service) => `<section class="wf-section">
<h2><a href="/services/${esc(service.slug)}">${esc(service.title)}</a></h2>
<p class="wf-lead">${esc(service.subtitle)}</p>
<p>${esc(service.description)}</p>
<h3>What we deliver</h3>
<ul class="wf-list">${service.bullets.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
<h3>Why choose WingsForShare</h3>
<ul class="wf-list">${service.benefits.map((item) => `<li><strong>${esc(item.title)}</strong> — ${esc(item.desc)}</li>`).join('')}</ul>
<a class="wf-link" href="/services/${esc(service.slug)}">Explore ${esc(service.name)} →</a>
</section>`
    )
    .join('');

  return page(`<main class="wf-main">
<p class="wf-kicker">Services</p>
<h1>Digital services that drive revenue</h1>
<p class="wf-lead">WingsForShare delivers web development, SEO, social media marketing, app development, business analytics and custom software — global digital services engineered for growth.</p>
<p>Each service is delivered by senior specialists, scoped in writing, and tied to a business outcome. Choose a service below to see what is included, how we work and the questions clients ask most.</p>
${blocks}
${cta('Not sure which service you need?', 'Tell us your goal and we will recommend the shortest path to it — no obligation.', '/contact', 'Talk to us')}
</main>`);
}

function renderService(service, services) {
  const related = service.related
    .map((slug) => services.find((item) => item.slug === slug))
    .filter(Boolean);

  return page(`<main class="wf-main">
<p class="wf-kicker">Service</p>
<h1>${esc(service.title)}</h1>
<p class="wf-lead">${esc(service.subtitle)}</p>
<p>${esc(service.description)}</p>
<h2>What we deliver</h2>
<ul class="wf-list">${service.bullets.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
<h2>Why choose WingsForShare</h2>
<ul class="wf-list">${service.benefits.map((item) => `<li><strong>${esc(item.title)}</strong> — ${esc(item.desc)}</li>`).join('')}</ul>
<h2>How we work</h2>
<ol class="wf-list">${PROCESS.map(([title, text]) => `<li><strong>${esc(title)}</strong> — ${esc(text)}</li>`).join('')}</ol>
<h2>Frequently asked questions</h2>
${service.faqs.map(faq).join('')}
<h2>Related services</h2>
<div class="wf-grid">${related.map(serviceCard).join('')}</div>
${cta(`Ready to start your ${service.name.toLowerCase()} project?`, 'Tell us about your goals and we will reply within one working day with a plan, timeline and fixed quote.', '/start-project', 'Start your project')}
</main>`);
}

function renderPortfolio({ products }) {
  const blocks = products
    .map(
      (product) => `<section class="wf-section">
<p class="wf-kicker">${esc(product.category)}${product.industry ? ` · ${esc(product.industry)}` : ''}</p>
<h2><a href="/product/${esc(product.slug)}">${esc(product.name)}</a></h2>
<p class="wf-lead">${esc(product.shortDescription || product.description)}</p>
<p>${esc(product.description)}</p>
<h3>What we built</h3>
<ul class="wf-list">${product.features.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
<p><strong>Outcome:</strong> ${esc(product.result || 'Delivered')}</p>
<a class="wf-link" href="/product/${esc(product.slug)}">Read the case study →</a>
</section>`
    )
    .join('');

  return page(`<main class="wf-main">
<p class="wf-kicker">Portfolio</p>
<h1>Selected work</h1>
<p class="wf-lead">Websites, ecommerce stores, business intelligence systems and custom apps built for measurable business results.</p>
<p>Every project below was scoped, designed and engineered by WingsForShare. Browse the case studies to see the brief, the build and the outcome.</p>
${blocks}
${cta('Have a similar project in mind?', 'Send us the brief and we will tell you what is realistic, what it costs and how long it takes.', '/start-project', 'Start your project')}
</main>`);
}

function renderProduct(product, services) {
  const related = ['web-development', 'app-development', 'business-analytics']
    .map((slug) => services.find((item) => item.slug === slug))
    .filter(Boolean);

  return page(`<main class="wf-main">
<p class="wf-kicker">${esc(product.category)}${product.industry ? ` · ${esc(product.industry)}` : ''}</p>
<h1>${esc(product.name)}</h1>
<p class="wf-lead">${esc(product.shortDescription || product.description)}</p>
<p>${esc(product.description)}</p>
${product.fullDescription ? `<p>${esc(product.fullDescription)}</p>` : ''}
<h2>What we built</h2>
<ul class="wf-list">${product.features.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
<h2>Project outcome</h2>
<p><strong>Result:</strong> ${esc(product.result || 'Delivered')}</p>
<p><strong>Status:</strong> ${product.status === 'live' ? 'Live' : 'In development'}</p>
${product.demoLink ? `<p><a class="wf-btn" href="${esc(product.demoLink)}" target="_blank" rel="noopener">View live demo</a></p>` : ''}
<h2>Related services</h2>
<div class="wf-grid">${related.map(serviceCard).join('')}</div>
${cta('Want a build like this?', 'Tell us what you need. We will reply with a scope, timeline and fixed price.', '/start-project', 'Start your project')}
</main>`);
}

function renderBlogIndex({ blogs }) {
  return page(`<main class="wf-main">
<p class="wf-kicker">Knowledge Hub</p>
<h1>Digital marketing, web development &amp; SEO blog</h1>
<p class="wf-lead">Practical guides on web development, SEO, social media marketing, app development and business analytics — written to help growing businesses rank on Google and convert.</p>
<p>No jargon, no theory for its own sake. Each guide is based on the work we do for clients and the questions they ask before starting a project.</p>
<div class="wf-grid">${blogs.map(postCard).join('')}</div>
${cta('Want help applying this to your business?', 'Send us your situation and we will tell you what we would prioritise first.', '/contact', 'Talk to us')}
</main>`);
}

function renderBlogPost(blog, blogs) {
  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);

  return page(`<main class="wf-main">
<p class="wf-kicker">${esc(blog.category)}</p>
<h1>${esc(blog.title)}</h1>
<p class="wf-meta">By ${esc(blog.author)} · ${esc(blog.date)} · ${esc(blog.readTime)}</p>
<p class="wf-lead">${esc(blog.excerpt)}</p>
<div class="wf-article">${mdToHtml(blog.content)}</div>
<h2>Related reading</h2>
<div class="wf-grid">${related.map(postCard).join('')}</div>
${cta('Need help with your website, SEO or app?', 'Tell us about your project and we will reply within one working day.', '/contact', 'Talk to us')}
</main>`);
}

function renderContact(services) {
  return page(`<main class="wf-main">
<p class="wf-kicker">Contact</p>
<h1>Contact WingsForShare</h1>
<p class="wf-lead">Talk to us for a free consultation on web development, SEO, social media marketing, mobile apps and business analytics. Fast quotes, clear pricing, no jargon.</p>
<div class="wf-grid">
<article class="wf-card"><h3>WhatsApp</h3><p>Chat with us directly for a free consultation, wherever you are.</p><p><a class="wf-link" href="https://wa.me/918618764541">Chat on WhatsApp →</a></p></article>
<article class="wf-card"><h3>Email</h3><p>For detailed proposals and partnership inquiries.</p><p><a class="wf-link" href="mailto:info@wingsforshare.com">info@wingsforshare.com</a></p></article>
<article class="wf-card"><h3>Quick sync</h3><p>Book a short Google Meet with our team to scope your project.</p><p><a class="wf-link" href="mailto:info@wingsforshare.com?subject=Quick%20Sync%20-%20Schedule%20a%20Google%20Meet">Schedule a meet →</a></p></article>
</div>
<h2>What happens next</h2>
<ol class="wf-list"><li>You tell us about your business, goals and timeline.</li><li>We reply within one working day with questions, a recommended approach and a fixed quote.</li><li>If it is a fit, we agree the scope in writing and start with a clear plan.</li></ol>
<h2>Services</h2>
<ul class="wf-list">${services.map((service) => `<li><a href="/services/${esc(service.slug)}">${esc(service.name)}</a> — ${esc(service.subtitle)}</li>`).join('')}</ul>
<h2>Response time</h2>
<p>We reply within one working day, usually much sooner. For urgent enquiries, WhatsApp is the fastest channel.</p>
${cta('Prefer to send a brief?', 'Use the project form and include your goals, budget range and timeline. We will reply with a tailored plan.', '/start-project', 'Start your project')}
</main>`);
}

function renderStartProject(services) {
  return page(`<main class="wf-main">
<p class="wf-kicker">Start a project</p>
<h1>Start your project</h1>
<p class="wf-lead">Tell us what you want to build. We will reply within one working day with a clear scope, timeline and fixed price — no obligation.</p>
<h2>What to include in your brief</h2>
<ul class="wf-list"><li>What your business does and who your customers are.</li><li>The outcome you want: more leads, online sales, a new app, better reporting or stronger search visibility.</li><li>Any existing website, brand assets or systems we need to work with.</li><li>Your budget range and target launch date.</li><li>Examples of sites or products you like — and what you like about them.</li></ul>
<h2>Our process</h2>
<ol class="wf-list">${PROCESS.map(([title, text]) => `<li><strong>${esc(title)}</strong> — ${esc(text)}</li>`).join('')}</ol>
<h2>Services</h2>
<ul class="wf-list">${services.map((service) => `<li><a href="/services/${esc(service.slug)}">${esc(service.name)}</a> — ${esc(service.subtitle)}</li>`).join('')}</ul>
<h2>Prefer email or WhatsApp?</h2>
<p>Email <a href="mailto:info@wingsforshare.com">info@wingsforshare.com</a> or <a href="https://wa.me/918618764541">chat on WhatsApp</a>. We reply within one working day.</p>
${cta('Ready when you are', 'Send your brief and we will come back with a plan, timeline and fixed quote.', 'mailto:info@wingsforshare.com?subject=New%20project%20brief', 'Email your brief')}
</main>`);
}

/* ------------------------------------------------------------------ */
/* Public entry                                                        */
/* ------------------------------------------------------------------ */
export function renderStaticPage({ kind, route, service, product, blog, services, products, blogs }) {
  switch (kind) {
    case 'home':
      return renderHome({ services, products, blogs });
    case 'services-index':
      return renderServicesIndex({ services });
    case 'service':
      return renderService(service, services);
    case 'portfolio':
      return renderPortfolio({ products });
    case 'product':
      return renderProduct(product, services);
    case 'blog-index':
      return renderBlogIndex({ blogs });
    case 'blog-post':
      return renderBlogPost(blog, blogs);
    case 'contact':
      return renderContact(services);
    case 'start-project':
      return renderStartProject(services);
    default:
      return page(`<main class="wf-main"><h1>${esc(route?.h1 || 'WingsForShare')}</h1><p>${esc(route?.d || '')}</p><p><a href="/">Return to the homepage</a></p></main>`);
  }
}
