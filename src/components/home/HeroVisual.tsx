import React from 'react';
import { motion, AnimatePresence, MotionValue } from 'motion/react';
import { Smartphone, Search, BarChart3, IndianRupee } from 'lucide-react';
import { MiniWebMockup, MiniAppMockup, MiniSEOMockup, MiniBIMockup } from './MiniMockups';
import { WingsVisual } from './WingsVisual';
import { cn } from '../../lib/utils';

/**
 * HeroVisualProps: Defines the properties required by the HeroVisual component.
 */
interface HeroVisualProps {
  /** MotionValue for X-axis rotation of the main container. */
  rotateX: MotionValue<string>;
  /** MotionValue for Y-axis rotation of the main container. */
  rotateY: MotionValue<string>;
  /** MotionValue for X-axis parallax movement of the dashboard. */
  textX: MotionValue<number>;
  /** MotionValue for Y-axis parallax movement of the dashboard. */
  textY: MotionValue<number>;
  /** The current index of the rotating service word. */
  wordIndex: number;
  /** The array of service words with their associated metadata. */
  words: Array<{
    text: string;
    color: string;
    bg: string;
    label: string;
    keywords: string[];
  }>;
}

/**
 * HeroVisual: Renders the right column of the Hero section, containing the interactive visual stack.
 * Features:
 * - A 3D-tilting container that responds to mouse movement.
 * - The `WingsVisual` component as a thematic background.
 * - A dynamic dashboard that displays different mockups based on the current service.
 * - Floating keyword tags that animate in/out.
 * - Floating status cards (App Dev, SEO Rank, BI Tools) that highlight based on the current service.
 */
export const HeroVisual = ({ rotateX, rotateY, textX, textY, wordIndex, words }: HeroVisualProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="lg:col-span-5 relative h-[500px] lg:h-[800px] flex items-center justify-center"
    >
      {/* --- Wings Visual Background --- */}
      <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30 scale-75 lg:scale-100">
        <WingsVisual />
      </div>

      {/* --- Main Visual: Dynamic Dashboard --- */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="absolute z-30 w-full max-w-[320px] lg:max-w-[480px] bg-white dark:bg-zinc-900/90 backdrop-blur-2xl rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group/mockup"
      >
        {/* Dashboard Header */}
        <div className="p-5 border-b border-zinc-100/50 dark:border-zinc-800/50 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-800/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20" />
            <div className="w-3 h-3 rounded-full bg-amber-400/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/20" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">System Live</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Performance Overview</p>
              <h3 className="text-xl font-black tracking-tight italic">Revenue Engine v4.0</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <IndianRupee size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Revenue', value: '₹12.4L', trend: '+23.4%', color: 'text-accent' },
              { label: 'Conversion', value: '4.8%', trend: '+1.2%', color: 'text-purple-400' },
              { label: 'Active Users', value: '2,847', trend: '+18%', color: 'text-blue-400' },
              { label: 'Leads', value: '342', trend: '+45%', color: 'text-emerald-400' },
            ].map((stat, i) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-1">{stat.label}</p>
                <p className="text-xl font-black tracking-tight">{stat.value}</p>
                <p className={cn("text-[9px] font-bold mt-1", stat.color)}>{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] font-black uppercase tracking-widest opacity-30">Traffic Growth</span>
              <span className="text-[9px] font-bold text-accent">Last 7 Days</span>
            </div>
            <div className="h-20 w-full relative">
              <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,80 C50,75 100,85 150,60 C200,35 250,50 300,20 C350,-10 400,10 400,10" fill="none" stroke="#ff005e" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                <path d="M0,80 C50,75 100,85 150,60 C200,35 250,50 300,20 C350,-10 400,10 400,10 L400,100 L0,100 Z" fill="url(#chartGrad)" className="opacity-20" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Floating Keywords --- */}
      <div className="absolute -top-5 -left-5 lg:-top-10 lg:-left-10 z-40 flex flex-col gap-2 lg:gap-3">
        {words[wordIndex].keywords.map((kw, i) => (
          <motion.div
            key={`${wordIndex}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-full shadow-xl text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-zinc-500"
          >
            {kw}
          </motion.div>
        ))}
      </div>

      {/* --- Floating Element: App Dev --- */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [-8, -12, -8]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-10 -left-10 lg:-top-16 lg:-left-16 z-20 w-40 lg:w-56 p-4 lg:p-6 bg-white dark:bg-zinc-900 rounded-[1.5rem] lg:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-md transition-opacity duration-500 hidden sm:block ${wordIndex === 1 ? 'opacity-100' : 'opacity-40'}`}
      >
        <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Smartphone size={16} />
          </div>
          <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">App Dev</span>
        </div>
        <div className="space-y-1.5 lg:space-y-2">
          <div className="h-1.5 lg:h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <motion.div animate={{ width: wordIndex === 1 ? "85%" : "30%" }} className="h-full bg-blue-500" />
          </div>
          <div className="h-1.5 lg:h-2 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
        </div>
      </motion.div>

      {/* --- Floating Element: SEO Rank --- */}
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [8, 12, 8]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute -bottom-10 -right-10 lg:-bottom-16 lg:-right-16 z-20 w-40 lg:w-56 p-4 lg:p-6 bg-white dark:bg-zinc-900 rounded-[1.5rem] lg:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-md transition-opacity duration-500 hidden sm:block ${wordIndex === 2 ? 'opacity-100' : 'opacity-40'}`}
      >
        <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
            <Search size={16} />
          </div>
          <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">SEO Rank</span>
        </div>
        <div className="flex items-end gap-1 lg:gap-1.5 h-8 lg:h-10">
          {[30, 60, 40, 90, 70].map((h, i) => (
            <motion.div 
              key={i} 
              animate={{ height: wordIndex === 2 ? `${h}%` : "20%" }}
              className="flex-1 bg-purple-500/20 rounded-t-sm" 
            />
          ))}
        </div>
      </motion.div>

      {/* --- Floating Element: BI Tools --- */}
      <motion.div
        animate={{ 
          x: [0, 15, 0],
          y: [0, -15, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`absolute top-1/2 -right-16 lg:-right-32 z-20 w-36 lg:w-48 p-4 lg:p-5 bg-white dark:bg-zinc-900 rounded-[1.5rem] lg:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-md transition-opacity duration-500 hidden xl:block ${wordIndex === 3 ? 'opacity-100' : 'opacity-40'}`}
      >
        <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg lg:rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
            <BarChart3 size={12} />
          </div>
          <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">BI Tools</span>
        </div>
        <div className="space-y-1 lg:space-y-1.5">
          <div className="h-1 lg:h-1.5 w-full bg-orange-500/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: wordIndex === 3 ? "85%" : "20%" }}
              className="h-full bg-orange-500" 
            />
          </div>
          <div className="h-1 lg:h-1.5 w-full bg-orange-500/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: wordIndex === 3 ? "65%" : "15%" }}
              className="h-full bg-orange-500" 
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
