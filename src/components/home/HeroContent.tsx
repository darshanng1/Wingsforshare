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
        Web Development, SEO, Apps <br className="hidden md:block" />
        <span className="text-accent italic font-light">&amp; Business Analytics</span>
      </motion.h1>

      {/* --- Description Section --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-text-secondary max-w-[540px] mb-10 leading-[1.6] font-normal text-base md:text-lg"
      >
We're a global web development agency building high-performance websites, mobile apps, SEO systems, social media marketing and business analytics — engineered to increase conversions and grow revenue.
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
          <span className="text-xl md:text-2xl font-bold text-text-primary">Global</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Delivery</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-2xl font-bold text-text-primary">&lt; 24h</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Reply Time</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-2xl font-bold text-text-primary">Yours</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary font-semibold">Code Ownership</span>
        </div>
      </motion.div>
    </div>
  );
};
