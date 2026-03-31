import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, ArrowUpRight, ArrowRight, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';

/**
 * ProductCard: A reusable card component for showcasing individual projects or products.
 * Features: Category badges, hover animations, and demo/detail links.
 */
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative bg-white dark:bg-[#111] rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
  >
    {/* Category Badge */}
    <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
      <div className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl border border-black/5 dark:border-white/10">
        {product.category}
      </div>
      {product.highlight && (
        <div className="px-4 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl shadow-emerald-500/20">
          Featured
        </div>
      )}
    </div>

    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <motion.img
        src={product.screenshot || product.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-white text-sm font-medium mb-6 line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {product.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {product.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[8px] font-bold text-white uppercase tracking-wider">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          <a
            href={product.demoLink || product.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-emerald-600 transition-colors flex items-center space-x-2"
          >
            <span>Live Demo</span>
            <Play size={12} fill="currentColor" />
          </a>
          <Link
            to={`/portfolio/${product.slug}`}
            className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <span>Details</span>
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex-grow flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">{product.industry}</span>
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={10} fill="currentColor" />
          <span className="text-[10px] font-bold">4.9</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors tracking-tight">
        {product.name}
      </h4>
      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6 flex-grow">
        {product.shortDescription || product.description}
      </p>

      {product.password && (
        <div className="mb-6 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700">
          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Demo Access</p>
          <p className="text-xs font-mono text-emerald-500">Password: {product.password}</p>
        </div>
      )}
      
      <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Result: {product.result}</span>
        </div>
        <ArrowRight className="text-zinc-300 group-hover:text-emerald-500 group-hover:translate-x-2 transition-all" size={20} />
      </div>
    </div>
  </motion.div>
);

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
