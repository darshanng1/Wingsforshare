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
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <Zap size={14} className="fill-accent" />
              <span>Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-bold text-text-primary leading-[0.9] tracking-tighter mb-0"
            >
              Solutions that <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">Scale Revenue.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-text-secondary/60 mb-0 leading-relaxed font-medium"
            >
              We don't just build software; we build growth engines. Every solution is engineered for maximum performance, conversion, and global scale.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={cn(
                "group relative p-10 rounded-[2.5rem] bg-card-bg border border-card-border/50 hover:border-accent/30 transition-all duration-500 overflow-hidden",
                solution.isPrimary && "lg:col-span-1"
              )}
            >
              {/* Card Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-bg border border-card-border flex items-center justify-center mb-10 group-hover:bg-accent group-hover:border-accent group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-500 group-hover:-translate-y-2">
                  <solution.icon size={32} className={cn(solution.iconColor, "group-hover:text-white transition-colors duration-500")} />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-display font-bold tracking-tight text-text-primary mb-0 leading-none">{solution.title}</h3>
                  {solution.isPrimary && (
                    <span className="text-[10px] font-black bg-accent/10 text-accent px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent/20">Core</span>
                  )}
                </div>
                
                <p className="text-text-secondary/60 text-[16px] leading-relaxed mb-10 font-medium">
                  {solution.desc}
                </p>
                
                <Link 
                  to={solution.href}
                  className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.2em] text-text-primary group/link"
                >
                  <span className="relative">
                    Explore Solution
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-text-primary/5 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-text-primary text-bg rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl shadow-black/10"
          >
            <span>View All Services</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
