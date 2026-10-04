import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Layout, Smartphone, Search, Megaphone, BarChart3, Cpu, Zap, Rocket, ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { services, type Service } from '../data/services';

const ICONS: Record<Service['icon'], React.ReactNode> = {
  layout: <Layout size={26} />,
  smartphone: <Smartphone size={26} />,
  search: <Search size={26} />,
  megaphone: <Megaphone size={26} />,
  chart: <BarChart3 size={26} />,
  cpu: <Cpu size={26} />,
  zap: <Zap size={26} />,
  rocket: <Rocket size={26} />
};

const ACCENTS: Record<string, string> = {
  blue: 'text-blue-500',
  emerald: 'text-emerald-500',
  pink: 'text-pink-500',
  purple: 'text-purple-500',
  amber: 'text-amber-500'
};

export default function Services() {
  const url = 'https://wingsforshare.com/services';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'WingsForShare Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${url}/${s.slug}`
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wingsforshare.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: url }
    ]
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 bg-bg transition-colors duration-300">
      <SEO
        title="Services | Web Development, SEO, SMM, App Development & Business Analytics | WingsForShare"
        description="WingsForShare delivers web development, SEO, social media marketing (SMM), mobile app development, business analytics and custom software — global digital services engineered for growth."
        keywords="digital services, web development agency, seo agency, social media marketing agency, app development agency, business analytics services, custom software development agency, full service digital agency, digital transformation"
        canonical={url}
        schemaMarkup={itemListSchema}
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 bg-card-bg border border-card-border">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary">What we do</span>
          </div>
          <h1 className="font-display font-black tracking-[-0.02em] text-4xl md:text-6xl text-text-primary mb-6">
            Digital services that drive revenue
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            From high-performance websites and search rankings to mobile apps, social campaigns and
            business analytics — everything you need to grow online, in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full p-8 rounded-[2rem] bg-card-bg border border-card-border hover:border-accent/40 transition-all"
              >
                <div className={`mb-6 ${ACCENTS[service.accent] || 'text-accent'}`}>{ICONS[service.icon]}</div>
                <h2 className="font-display font-black text-2xl text-text-primary mb-3">{service.name}</h2>
                <p className="text-text-secondary leading-relaxed mb-6 flex-1">{service.subtitle}</p>
                <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-accent">
                  Explore {service.name}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/start-project" className="btn-primary py-4 px-8 text-base">
            <span>Start your project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
