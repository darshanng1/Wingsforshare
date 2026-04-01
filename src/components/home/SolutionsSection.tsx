import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Smartphone, Search, BarChart3, Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const solutions = [
  {
    icon: Globe,
    iconColor: 'text-emerald-500',
    title: 'Web Development',
    desc: 'High-Converting, Fast & SEO-Optimized Websites designed to turn visitors into loyal customers.',
    href: '/services/web-development',
    isPrimary: true
  },
  {
    icon: Smartphone,
    iconColor: 'text-blue-500',
    title: 'Mobile App Development',
    desc: 'Custom Android & iOS App Development built for seamless performance and user engagement.',
    href: '/services/app-development'
  },
  {
    icon: Search,
    iconColor: 'text-purple-500',
    title: 'SEO Services',
    desc: 'Rank Higher on Google & Get More Traffic with data-driven strategies and keyword optimization.',
    href: '/services/seo-growth'
  },
  {
    icon: Share2,
    iconColor: 'text-pink-500',
    title: 'SMM (Social Media Marketing)',
    desc: 'Grow Your Brand on Social Media with targeted campaigns and creative content strategies.',
    href: '/services/smm'
  },
  {
    icon: BarChart3,
    iconColor: 'text-orange-500',
    title: 'Business Intelligence Tools',
    desc: 'Data Dashboards & Business Insights to transform raw data into actionable intelligence.',
    href: '/services/business-intelligence'
  }
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding bg-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end mb-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} />
              <span>Our Expertise</span>
            </motion.div>
            <h2 className="mb-0">Solutions that <br /> <span className="text-text-secondary">Scale Revenue.</span></h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[16px] md:text-[18px] text-text-secondary mb-0 leading-relaxed">
              We don't just build software; we build growth engines. Every solution is engineered for maximum performance and conversion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "card-premium group bg-card-bg border-card-border shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500",
                solution.isPrimary && "lg:col-span-1 border-l-4 border-l-accent"
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-bg flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-card-border group-hover:border-accent shadow-sm">
                <solution.icon size={28} className={solution.iconColor + " group-hover:text-white transition-colors"} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[24px] font-semibold tracking-tight text-text-primary mb-0">{solution.title}</h3>
                {solution.isPrimary && (
                  <span className="text-[10px] font-extrabold bg-accent text-white px-2.5 py-1 rounded-full uppercase tracking-wider">Primary</span>
                )}
              </div>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8 font-medium">
                {solution.desc}
              </p>
              <Link 
                to={solution.href}
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-accent hover:gap-4 transition-all"
              >
                Explore Solution <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
