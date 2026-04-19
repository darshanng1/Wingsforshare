import { Link } from 'react-router-dom';
import { ExternalLink, Lock, ArrowUpRight, Sparkles } from 'lucide-react';
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

        {/* Category */}
        <div className="absolute top-6 left-6 z-30">
          <span className="px-4 py-2 bg-card-bg/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-accent rounded-full border border-accent/20 shadow-xl">
            {product.category}
          </span>
        </div>

        {/* Live Demo Button */}
        <div className="absolute top-6 right-6 z-30">
          <a
            href={product.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-accent/40 transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">
              Live Demo
            </span>
          </a>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={product.demoLink}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <ExternalLink size={20} />
            </motion.a>

            <Link
              to={`/product/${product.slug}`}
              className="w-14 h-14 bg-white text-bg rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-black">
              {product.name}
            </h3>
            <span className="text-[10px] uppercase text-accent">
              {product.industry}
            </span>
          </div>

          <p className="text-sm text-text-secondary">
            {product.shortDescription}
          </p>
        </div>

        {/* Result */}
        {product.result && (
          <div className="mb-6 p-4 bg-accent/5 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} />
              <span className="text-xs font-bold">Key Result</span>
            </div>
            <p>{product.result}</p>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          {product.features.slice(0, 3).map((f, i) => (
            <div key={i} className="text-sm">
              • {f}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex justify-between items-center">
          {product.userLogin && (
            <div className="flex items-center gap-2 text-xs">
              <Lock size={12} />
              Protected
            </div>
          )}

          <div className="flex gap-3">
            <a href={bookDemoUrl} target="_blank" rel="noreferrer">
              Book Demo
            </a>

            <a
              href={product.demoLink}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}