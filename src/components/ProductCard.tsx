import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Lock, CheckCircle, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "918618764541";
  const bookDemoUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in booking a demo for ${product.name}`)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col h-full bg-white dark:bg-zinc-900/50 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800/50 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]"
    >
      {/* Visual Header */}
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <img 
          src={product.screenshot} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/10 shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={product.demoLink}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-2xl"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
      
      {/* Content Body */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              {product.name}
            </h3>
            <Link 
              to={`/products/${product.slug}`}
              className="w-10 h-10 rounded-full border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all shrink-0"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Result Highlight (New Feature) */}
        {product.result && (
          <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={14} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Key Result</span>
            </div>
            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              {product.result}
            </p>
          </div>
        )}

        {/* Features List */}
        <div className="mb-8 space-y-2.5">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {product.userLogin && (
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                <Lock size={12} />
                <span>Demo Access</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href={bookDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-bold text-zinc-500 hover:text-emerald-500 transition-colors"
            >
              Book Demo
            </a>
            <a 
              href={product.demoLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold hover:opacity-90 transition-all active:scale-95"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


