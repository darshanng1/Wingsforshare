import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, ArrowRight } from 'lucide-react';
import { ProductCard } from './MiniMockups';
import { Product } from '../../data/products';

interface LiveDemoSectionProps {
  search: string;
  setSearch: (val: string) => void;
  filter: string;
  setFilter: (val: string) => void;
  categories: string[];
  displayedProjects: Product[];
  filteredProjects: Product[];
  visibleItems: number;
  setVisibleItems: (val: any) => void;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({
  search,
  setSearch,
  filter,
  setFilter,
  categories,
  displayedProjects,
  filteredProjects,
  visibleItems,
  setVisibleItems
}) => {
  return (
    <section id="portfolio" className="section-padding bg-bg relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-10 shadow-xl shadow-accent/5"
          >
            <Sparkles size={14} className="fill-accent" />
            <span>Live Demo Showcase</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-10"
          >
            Explore Our <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-blue-500 italic font-light">Working Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-text-secondary/70 text-[18px] md:text-[22px] leading-relaxed font-medium"
          >
            Don't just take our word for it. Interact with our live demos and see the quality of our work firsthand.
          </motion.p>

          {/* Immersion Search and Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-32 space-y-20"
          >
            <div className="relative group max-w-5xl mx-auto">
              {/* Dynamic Energy Aura */}
              <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full blur-[100px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -inset-1 border-2 border-accent/20 rounded-[3.5rem] blur-sm opacity-0 group-focus-within:opacity-100 transition-all duration-1000" />
              
              {/* Professional Agency Command Hub */}
              <div className="relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 rounded-3xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.1)] dark:shadow-[0_48px_100px_-24px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-focus-within:scale-[1.01] group-focus-within:border-accent group-focus-within:ring-4 group-focus-within:ring-accent/5">
                
                <div className="relative z-10 flex items-center px-10 py-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
                    <Search size={24} strokeWidth={2.5} />
                  </div>
                  
                  <input
                    id="showcase-search-input"
                    type="text"
                    placeholder="Search by service or industry..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-zinc-900 dark:text-zinc-50 text-xl md:text-2xl font-medium tracking-tight placeholder:text-zinc-300 dark:placeholder:text-zinc-800 pl-8 pr-32 h-full"
                  />
                  
                  {/* Performance Metric Result */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
                    <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
                    <motion.div 
                      key={filteredProjects.length}
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="flex flex-col items-end"
                    >
                      <span className="text-xl font-display font-bold text-accent italic">
                        {filteredProjects.length}
                      </span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Results</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    filter === cat
                      ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {visibleItems < filteredProjects.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <button
              onClick={() => setVisibleItems((prev: number) => prev + 6)}
              className="group relative inline-flex items-center gap-6 px-12 py-6 bg-text-primary text-bg rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Load More Projects</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <p className="mt-6 text-[10px] font-bold text-text-secondary/40 uppercase tracking-widest">
              Showing {displayedProjects.length} of {filteredProjects.length} Solutions
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
