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
      className="group flex flex-col h-full bg-card-bg backdrop-blur-xl rounded-[2.5rem] border border-card-border overflow-hidden transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
    >
      {/* Visual Header */}
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <img 
          src={product.screenshot} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Overlay */}
        <div className="absolute top-6 left-6 z-30">
          <span className="px-4 py-2 bg-card-bg/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-accent rounded-full border border-accent/20 shadow-xl">
            {product.category}
          </span>
        </div>

        {/* Live Status Indicator */}
        <div className="absolute top-6 right-6 z-30">
          <a 
            href={product.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-accent/40 transition-colors pointer-events-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Live Demo</span>
          </a>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] pointer-events-none z-0">
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={product.demoLink}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/20 pointer-events-auto z-10"
            >
              <ExternalLink size={20} />
            </motion.a>
            <Link
              to={`/product/${product.slug}`}
              className="w-14 h-14 bg-white text-bg rounded-2xl flex items-center justify-center shadow-2xl shadow-black/10 pointer-events-auto z-10"
            >
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content Body */}
      <div className="p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-card-bg/30">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl font-black text-text-primary tracking-tight leading-none group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 shrink-0">{product.industry}</span>
          </div>
          <p className="text-[15px] text-text-secondary/70 line-clamp-2 leading-relaxed font-medium">
            {product.shortDescription}
          </p>
        </div>

        {/* Result Highlight */}
        {product.result && (
          <div className="mb-8 p-5 bg-accent/5 rounded-[1.5rem] border border-accent/10 group-hover:border-accent/20 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">Key Result</span>
            </div>
            <p className="text-sm font-bold text-text-primary">
              {product.result}
            </p>
          </div>
        )}

        {/* Features List */}
        <div className="mb-10 space-y-3">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
              <span className="text-[13px] font-medium text-text-secondary/80">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-8 border-t border-card-border flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {product.userLogin && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-text-primary/5 rounded-lg border border-card-border">
                <Lock size={12} className="text-text-secondary/40" />
                <span className="text-[9px] font-black text-text-secondary/60 uppercase tracking-widest">Protected</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 relative z-30">
            <a 
              href={bookDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-accent transition-colors"
            >
              Book Demo
            </a>
            <a 
              href={product.demoLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-text-primary text-bg rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all active:scale-95 shadow-xl shadow-black/5"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


