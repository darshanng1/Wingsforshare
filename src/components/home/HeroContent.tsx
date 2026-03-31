import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

/**
 * HeroContentProps: Defines the properties required by the HeroContent component.
 */
interface HeroContentProps {
  /** The current index of the rotating service word. */
  wordIndex: number;
  /** The array of service words with their associated metadata (text, color, etc.). */
  words: Array<{
    text: string;
    color: string;
    bg: string;
    label: string;
    keywords: string[];
  }>;
}

/**
 * HeroContent: Renders the left column of the Hero section.
 * Features:
 * - A "Next-Gen Digital Systems" badge with a pulse animation.
 * - A massive headline with a rotating service word (Web Dev, Mobile Apps, etc.).
 * - A descriptive paragraph highlighting the agency's core offerings.
 * - Primary and secondary Call-to-Action (CTA) buttons.
 * - A social proof section showing client avatars and a 4.9/5 rating.
 */
export const HeroContent = ({ wordIndex, words }: HeroContentProps) => {
  return (
    <div className="lg:col-span-7 text-left">
      {/* --- Badge Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-10"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Next-Gen Digital Systems</span>
      </motion.div>

      {/* --- Headline Section --- */}
      <div className="relative mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-tight md:leading-[0.8] mb-4"
        >
          DEVELOPMENT <br />
          {/* Rotating Service Word Container */}
          <div className="h-[1.2em] overflow-visible relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className={`absolute left-0 italic serif ${words[wordIndex].color} whitespace-nowrap`}
              >
                {words[wordIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>
      </div>

      {/* --- Description Section --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-xl mb-12 leading-relaxed font-medium"
      >
        We build high-performance **Web Solutions**, **Mobile Apps**, and **BI Tools** integrated with **SEO Strategies** to dominate your market.
      </motion.p>

      {/* --- CTA Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-6 mb-20"
      >
        <Link 
          to="/start-project" 
          className="btn-primary w-full sm:w-auto px-12 py-6 text-lg flex items-center justify-center gap-3 group shadow-2xl shadow-emerald-500/20"
        >
          Launch Project
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
        <a href="#portfolio" className="btn-outline w-full sm:w-auto px-12 py-6 text-lg backdrop-blur-sm">
          Explore Work
        </a>
      </motion.div>

      {/* --- Social Proof Section --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-10"
      >
        {/* Client Avatars */}
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map(i => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, zIndex: 10 }}
              className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-zinc-100 dark:bg-zinc-800 overflow-hidden shadow-xl"
            >
              <img 
                src={`https://i.pravatar.cc/100?u=agency${i}`} 
                alt="Client" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Ratings and Trust Badge */}
        <div className="text-left">
          <div className="flex items-center gap-1.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" className="text-amber-500" />
            ))}
            <span className="text-sm font-black text-zinc-900 dark:text-white ml-2">4.9/5 Rating</span>
          </div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">
            Trusted by 500+ Enterprises
          </p>
        </div>
      </motion.div>
    </div>
  );
};
