import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-[#111] rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.05)] transition-all duration-700"
    >
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center space-x-1.5 bg-white/80 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-xl">
          <Sparkles size={12} className="text-emerald-500" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black dark:text-white">
            {product.category}
          </span>
        </div>
      </div>

      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] relative">
        <img 
          src={product.screenshot} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Hover Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          <Link 
            to={`/products/${product.slug}`}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-transform"
          >
            Explore Product
          </Link>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white tracking-tighter leading-none">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">
            <TrendingUp size={12} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Live</span>
          </div>
        </div>
        
        <p className="text-sm text-black/50 dark:text-white/50 mb-8 line-clamp-2 leading-relaxed font-medium">
          {product.shortDescription}
        </p>

        {/* Features/Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.03] text-black/40 dark:text-white/40 border border-black/5 dark:border-white/5">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/10">
          <a 
            href={product.demoLink} 
            target="_blank" 
            rel="noreferrer"
            className="group/link inline-flex items-center space-x-2 text-sm font-bold text-black dark:text-white"
          >
            <span className="border-b-2 border-emerald-500/30 group-hover/link:border-emerald-500 transition-all">View Live Demo</span>
            <ExternalLink size={14} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
          </a>
          
          <Link 
            to={`/products/${product.slug}`}
            className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/10"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
