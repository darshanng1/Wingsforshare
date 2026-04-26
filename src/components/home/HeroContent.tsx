import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start pt-12">
      {/* --- Headline Section --- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-text-primary mb-6 text-balance leading-[1.05] tracking-tighter font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)]"
      >
        Build High-Converting <br className="hidden md:block" />
        <span className="text-accent italic font-light">Websites, Apps & SEO Systems</span>
      </motion.h1>

      {/* --- Description Section --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-text-secondary max-w-[540px] mb-10 leading-[1.6] font-normal text-base md:text-lg"
      >
        Empower your brand with premium web development and custom mobile apps. We build scalable business systems designed to increase conversions and grow revenue through data-driven digital strategies.
      </motion.p>

      {/* --- CTA Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
      >
        <Link to="/start-project" className="btn-primary group px-8 h-[52px]">
          Start Your Project
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link to="/portfolio" className="btn-secondary px-8 h-[52px]">
          View Our Work
        </Link>
      </motion.div>

      {/* --- Trust Metrics --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-text-primary/10 w-full max-w-md lg:max-w-none"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-2xl font-bold text-text-primary">100+</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Projects Delivered</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-2xl font-bold text-text-primary">99.9%</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">System Uptime</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-2xl font-bold text-text-primary">10+</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Industries Served</span>
        </div>
      </motion.div>
    </div>
  );
};
