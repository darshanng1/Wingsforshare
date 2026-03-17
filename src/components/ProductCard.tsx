import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
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
      role="article"
      aria-labelledby={`product-title-${product.slug}`}
      className="group relative bg-white dark:bg-[#111] rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.05)] transition-all duration-700"
    >
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center space-x-1.5 bg-white/80 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-xl">
          <Sparkles size={12} className="text-emerald-500" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black dark:text-white">
            {product.category}
          </span>
        </div>
      </div>

      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] relative">
        <img 
          src={product.screenshot} 
          alt={`Screenshot of ${product.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
        
        {/* Hover Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          <Link 
            to={`/products/${product.slug}`}
            aria-label={`Explore ${product.name}`}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-transform"
          >
            Explore Product
          </Link>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 sm:p-10">
        <div className="flex justify-between items-start mb-4">
          <h3 id={`product-title-${product.slug}`} className="tracking-tighter leading-none">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md" aria-label="Status: Live">
            <TrendingUp size={12} aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-tighter">Live</span>
          </div>
        </div>
        
        <p className="text-black/50 dark:text-white/50 line-clamp-2 leading-relaxed font-medium">
          {product.shortDescription}
        </p>

        {/* Features/Badges */}
        <div className="space-y-3 mb-8" role="list" aria-label="Key features">
          {product.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3 group/feat" role="listitem">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover/feat:bg-emerald-500/20 transition-colors">
                <CheckCircle size={10} className="text-emerald-500" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-black/60 dark:text-white/60 group-hover/feat:text-black dark:group-hover/feat:text-white transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-black/5 dark:border-white/10">
          <a 
            href={product.demoLink} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`View live demo of ${product.name}`}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          
          <Link 
            to={`/products/${product.slug}`}
            aria-label={`View details for ${product.name}`}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-bold hover:opacity-80 transition-all shadow-lg shadow-black/10 dark:shadow-white/10"
          >
            <span>View Details</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
