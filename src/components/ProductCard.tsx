import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Lock, CheckCircle, Calendar } from 'lucide-react';
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500"
    >
      {/* Screenshot */}
      <div className="aspect-[16/10] w-full overflow-hidden relative cursor-pointer">
        <img
          src={product.screenshot}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-bold flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Demo <ExternalLink size={12} />
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/10 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1.5 tracking-tight group-hover:text-emerald-500 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-snug min-h-[3.75rem]">
            {product.shortDescription}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mb-6 space-y-1.5">
          {product.features.slice(0, 5).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (idx * 0.1), duration: 0.3 }}
              className="flex items-start gap-2"
            >
              <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section (Fixed at bottom) */}
        <div className="mt-auto space-y-4">
          {/* Demo Access Info (Password) */}
          {product.userLogin && (
            <motion.div
              animate={{
                boxShadow: ["0 0 0 0px rgba(16, 185, 129, 0)", "0 0 0 4px rgba(16, 185, 129, 0.1)", "0 0 0 0px rgba(16, 185, 129, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-[#e6f7ef] dark:bg-emerald-500/10 text-[#008a4e] dark:text-emerald-400 rounded-lg text-[12px] font-semibold border border-emerald-500/20"
            >
              <Lock size={13} />
              <span>🔒 {product.userLogin}</span>
            </motion.div>
          )}

          {/* Buttons */}
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={product.demoLink}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 h-11 bg-emerald-500 text-white rounded-lg text-[13px] font-bold hover:bg-emerald-600 transition-all shadow-sm hover:shadow-emerald-500/25 active:scale-95"
              >
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </motion.div>
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center w-full h-11 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-[13px] font-bold hover:opacity-90 transition-all shadow-sm active:scale-95"
                >
                  View Details
                </Link>
              </motion.div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={bookDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 h-11 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-lg text-[13px] font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all active:scale-95"
            >
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-2"
              >
                <Calendar size={14} />
                <span>Book Demo</span>
              </motion.div>
            </motion.a>

            {product.adminLogin && (
              <a
                href={product.adminLogin}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-9 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 rounded-lg text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                <ShieldCheck size={13} />
                <span>Admin Panel</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}


