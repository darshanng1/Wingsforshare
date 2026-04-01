import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="lg:col-span-5 flex flex-col justify-center">
      {/* --- Badge Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8 w-fit shadow-[0_0_15px_rgba(16,185,129,0.1)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        <span>Business Technology Growth</span>
      </motion.div>

      {/* --- Headline Section --- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-text-primary mb-6 text-balance leading-[1.1]"
      >
        Build High-Converting <br className="hidden md:block" />
        <span className="text-accent">Websites, Apps & SEO Systems</span>
      </motion.h1>

      {/* --- Description Section --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-text-secondary max-w-xl mb-10 leading-[1.6] font-normal text-lg"
      >
        We design and develop high-performance websites, mobile apps, and SEO strategies that help your business generate leads, increase traffic, and grow faster in the digital world.
      </motion.p>

      {/* --- CTA Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap gap-4 mb-16"
      >
        <Link to="/start-project" className="btn-primary group">
          Start Your Project
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link to="/portfolio" className="btn-secondary">
          View Our Work
        </Link>
      </motion.div>

      {/* --- Trust Metrics --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-3 gap-8 pt-8 border-t border-text-primary/5"
      >
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-text-primary">100+</span>
          <span className="text-[11px] uppercase tracking-widest text-text-secondary font-semibold">Projects Delivered</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-text-primary">99.9%</span>
          <span className="text-[11px] uppercase tracking-widest text-text-secondary font-semibold">System Uptime</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-text-primary">10+</span>
          <span className="text-[11px] uppercase tracking-widest text-text-secondary font-semibold">Industries Served</span>
        </div>
      </motion.div>
    </div>
  );
};
