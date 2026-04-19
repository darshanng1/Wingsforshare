import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, ArrowUpRight, ArrowRight, TrendingUp, Cpu, Sparkles, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';

/**
 * ProductCard: A reusable card component for showcasing individual projects or products.
 * Features: Category badges, hover animations, and demo/detail links.
 */
export const ProductCard = React.forwardRef<HTMLDivElement, { product: Product }>(({ product }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
    whileHover={{ y: -12 }}
    className="group relative bg-card-bg backdrop-blur-xl rounded-[2.5rem] border border-card-border overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 flex flex-col h-full"
  >
    {/* Category Badge */}
    <div className="absolute top-6 left-6 z-30 flex flex-col gap-2">
      <div className="px-4 py-2 bg-card-bg/90 backdrop-blur-md text-text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl border border-card-border">
        {product.category}
      </div>
      {product.highlight && (
        <div className="px-4 py-2 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl shadow-accent/20 flex items-center gap-2">
          <Sparkles size={10} className="fill-white" />
          <span>Featured</span>
        </div>
      )}
    </div>

    {/* Live Status Indicator */}
    <div className="absolute top-6 right-6 z-30">
      <a 
        href={product.demoLink || product.demo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-accent/40 transition-colors pointer-events-auto"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        <span className="text-[9px] font-black text-white uppercase tracking-widest">Live Demo</span>
      </a>
    </div>

    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <motion.img
        src={product.screenshot || product.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Premium Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px] pointer-events-none z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-text-primary text-sm font-medium mb-8 line-clamp-3 leading-relaxed"
        >
          {product.description}
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {product.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-[9px] font-black text-accent uppercase tracking-widest">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          <a
            href={product.demoLink || product.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-white px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent/80 transition-all flex items-center gap-3 shadow-2xl shadow-accent/20"
          >
            <span>Launch Demo</span>
            <Play size={12} fill="currentColor" />
          </a>
          <Link
            to={`/product/${product.slug}`}
            className="bg-white text-bg px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl shadow-black/10"
          >
            <span>Details</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-10 flex-grow flex flex-col bg-gradient-to-b from-transparent to-card-bg/30">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent/60">{product.industry}</span>
        <div className="flex items-center gap-1.5 text-amber-500">
          <Star size={12} fill="currentColor" />
          <span className="text-[11px] font-black tracking-widest">4.9</span>
        </div>
      </div>
      
      <h4 className="text-2xl font-display font-bold text-text-primary mb-4 group-hover:text-accent transition-colors tracking-tight leading-none">
        {product.name}
      </h4>
      
      <p className="text-text-secondary/70 text-[15px] line-clamp-2 mb-8 flex-grow font-medium leading-relaxed">
        {product.shortDescription || product.description}
      </p>

      {product.password && (
        <div className="mb-8 p-4 bg-accent/5 rounded-[1.5rem] border border-dashed border-accent/20 group-hover:border-accent/40 transition-colors">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/60 mb-2">Demo Access</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-mono font-bold text-text-primary">{product.password}</p>
            <Lock size={14} className="text-accent/40" />
          </div>
        </div>
      )}
      
      <div className="pt-8 border-t border-card-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary/60">
            {product.result}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-text-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
));

/**
 * MiniWebMockup: A simplified visual representation of a web application.
 * Used in the Hero section's interactive dashboard.
 */
export const MiniWebMockup = () => (
  <div className="mt-3 w-full aspect-[16/10] bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex flex-col shadow-2xl relative group-hover/card:border-emerald-500/30 transition-colors">
    <div className="h-3 bg-slate-50 dark:bg-slate-900 border-b border-black/5 dark:border-white/5 flex items-center px-2 space-x-1">
      <div className="w-1 h-1 rounded-full bg-red-400/60" />
      <div className="w-1 h-1 rounded-full bg-amber-400/60" />
      <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
    </div>
    <div className="flex flex-grow">
      <div className="w-6 border-r border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 p-1 space-y-1">
        <div className="h-1 w-full bg-emerald-500/20 rounded-full" />
        <div className="h-1 w-2/3 bg-black/5 dark:bg-white/5 rounded-full" />
        <div className="h-1 w-3/4 bg-black/5 dark:bg-white/5 rounded-full" />
      </div>
      <div className="flex-grow p-2 space-y-2">
        <div className="h-2 w-3/4 bg-emerald-500/10 rounded-sm" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-video bg-emerald-500/5 rounded-sm border border-emerald-500/10" />
          <div className="aspect-video bg-black/5 dark:bg-white/5 rounded-sm" />
        </div>
        <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full" />
      </div>
    </div>
  </div>
);

/**
 * MiniAppMockup: A simplified visual representation of a mobile application.
 * Used in the Hero section's interactive dashboard.
 */
export const MiniAppMockup = () => (
  <div className="mt-3 w-20 mx-auto aspect-[9/16] bg-[#0a0a0a] rounded-2xl p-1.5 border border-white/10 shadow-2xl relative group-hover/card:border-blue-500/30 transition-colors">
    <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-[#0d0d0d] flex flex-col relative">
      <div className="h-2 bg-blue-500 w-full flex items-center justify-center">
        <div className="w-4 h-0.5 bg-white/30 rounded-full" />
      </div>
      <div className="p-2 space-y-2">
        <div className="h-8 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-blue-500/20" />
        </div>
        <div className="space-y-1">
          <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full" />
          <div className="h-1 w-2/3 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="h-4 bg-black/5 dark:bg-white/5 rounded-md" />
          <div className="h-4 bg-black/5 dark:bg-white/5 rounded-md" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-slate-50 dark:bg-slate-900 border-t border-black/5 dark:border-white/5 flex items-center justify-around px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  </div>
);

/**
 * MiniBIMockup: A simplified visual representation of a Business Intelligence dashboard.
 * Used in the Hero section's interactive dashboard.
 */
export const MiniBIMockup = () => (
  <div className="mt-3 w-full aspect-[16/10] bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 p-2.5 flex flex-col shadow-2xl relative group-hover/card:border-orange-500/30 transition-colors">
    <div className="flex justify-between items-center mb-2">
      <div className="h-1.5 w-10 bg-orange-500/20 rounded-full" />
      <div className="text-[8px] font-black text-orange-500">84%</div>
    </div>
    <div className="flex-grow flex items-end space-x-1.5">
      {[30, 60, 45, 80, 55, 95].map((h, i) => (
        <div
          key={i}
          className={`flex-grow rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-orange-500' : 'bg-orange-500/20'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="absolute top-6 left-2 right-2 h-8 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 40">
        <path
          d="M0 35 Q 20 10, 40 25 T 80 5 T 100 15"
          fill="none"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

/**
 * MiniSEOMockup: A simplified visual representation of SEO analytics.
 * Used in the Hero section's interactive dashboard.
 */
export const MiniSEOMockup = () => (
  <div className="mt-3 w-full p-2 bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 shadow-2xl relative group-hover/card:border-emerald-500/30 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <div className="h-1 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
      <span className="text-[8px] font-black text-emerald-500">#1 Rank</span>
    </div>
    <div className="flex items-end gap-1 h-10">
      {[20, 40, 30, 60, 50, 80, 70, 100].map((h, i) => (
        <div
          key={i}
          className={`flex-grow rounded-t-[1px] ${i === 7 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="mt-2 flex justify-between items-center">
      <div className="h-1 w-12 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="flex items-center gap-0.5">
        <TrendingUp size={8} className="text-emerald-500" />
        <span className="text-[6px] font-bold text-emerald-500">+124%</span>
      </div>
    </div>
  </div>
);
