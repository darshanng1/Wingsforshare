import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Layout, Smartphone, Search, Megaphone, BarChart3, Cpu, Zap, Rocket,
  CheckCircle, ArrowRight, Shield, Target, ChevronRight, ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import { ProjectInquiryForm } from '@components';
import { getService, services, type Service } from '../data/services';

const ICONS: Record<Service['icon'], React.ReactNode> = {
  layout: <Layout size={40} />,
  smartphone: <Smartphone size={40} />,
  search: <Search size={40} />,
  megaphone: <Megaphone size={40} />,
  chart: <BarChart3 size={40} />,
  cpu: <Cpu size={40} />,
  zap: <Zap size={40} />,
  rocket: <Rocket size={40} />
};

const ACCENTS: Record<string, string> = {
  blue: 'text-blue-500',
  emerald: 'text-emerald-500',
  pink: 'text-pink-500',
  purple: 'text-purple-500',
  amber: 'text-amber-500'
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const url = `https://wingsforshare.com/services/${service.slug}`;
  const accentClass = ACCENTS[service.accent] || 'text-accent';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wingsforshare.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wingsforshare.com/services' },
      { '@type': 'ListItem', position: 3, name: service.name, item: url }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.name,
    description: service.description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'WingsForShare',
      url: 'https://wingsforshare.com',
      logo: 'https://wingsforshare.com/static/images/logo-light.png'
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'USD' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as Service[];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 bg-bg transition-colors duration-300">
      <SEO
        title={`${service.title} | WingsForShare`}
        description={service.description}
        keywords={service.keywords}
        canonical={url}
        ogType="website"
        schemaType="Service"
        schemaMarkup={serviceSchema}
      />

      {/* Breadcrumb + FAQ + service schema */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-text-secondary/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} /></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} /></li>
            <li className="text-text-primary" aria-current="page">{service.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 bg-card-bg border border-card-border"
          >
            <span className={accentClass}>{ICONS[service.icon]}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary">Professional Technology Services</span>
          </motion.div>

          <h1 className="font-display font-black tracking-[-0.02em] text-4xl md:text-6xl text-text-primary mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary italic font-light mb-8">{service.subtitle}</p>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary py-4 px-8 text-base">
              <span>Get a Free Quote</span>
            </Link>
            <Link
              to="/start-project"
              className="px-8 py-4 rounded-2xl font-bold text-base bg-card-bg border border-card-border text-text-primary hover:border-accent transition-all active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24 md:mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl md:text-3xl font-black text-text-primary mb-8">What's included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.bullets.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-card-bg/60 rounded-xl border border-card-border">
                  <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-text-primary/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="font-display text-2xl md:text-3xl font-black text-text-primary mb-8">Why it matters</h2>
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24 md:mb-32">
          <h2 className="font-display text-2xl md:text-3xl font-black text-text-primary mb-8 text-center">
            {service.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-card-bg border border-card-border rounded-2xl p-5 open:border-accent/40">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                  <ChevronDown size={18} className="text-text-secondary shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related services — internal linking for SEO */}
        {related.length > 0 && (
          <div className="mb-24 md:mb-32">
            <h2 className="font-display text-2xl md:text-3xl font-black text-text-primary mb-8 text-center">Related services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="group p-6 rounded-3xl bg-card-bg border border-card-border hover:border-accent/40 transition-all"
                >
                  <div className={`mb-4 ${ACCENTS[rel.accent] || 'text-accent'}`}>{ICONS[rel.icon]}</div>
                  <h3 className="font-display font-black text-lg text-text-primary mb-2">{rel.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{rel.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-accent">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-black text-text-primary mb-6">
              Ready to start with {service.name}?
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Tell us about your goals and we'll send a tailored plan and quote for {service.title.toLowerCase()} — no obligation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center"><Rocket size={20} /></div>
                <span className="font-bold text-text-primary">Fast project kickoff</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center"><Shield size={20} /></div>
                <span className="font-bold text-text-primary">Secure &amp; confidential</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center"><Target size={20} /></div>
                <span className="font-bold text-text-primary">Results-driven approach</span>
              </div>
            </div>
          </div>
          <ProjectInquiryForm />
        </div>
      </div>
    </div>
  );
}
