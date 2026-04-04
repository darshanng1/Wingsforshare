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

          {/* Search and Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 space-y-12"
          >
            <div className="relative group max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
              <div className="relative">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-accent transition-colors" size={24} />
                <input
                  type="text"
                  placeholder="Search projects by name, industry, or technology..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-20 pr-8 py-8 bg-card-bg/50 backdrop-blur-xl border border-card-border rounded-full focus:outline-none focus:border-accent/50 transition-all text-text-primary text-lg font-medium placeholder:text-text-secondary/20 shadow-2xl"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.05) }}
                  onClick={() => setFilter(cat)}
                  className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                    filter === cat
                      ? 'bg-accent text-white border-accent shadow-2xl shadow-accent/40 scale-105'
                      : 'bg-card-bg/40 text-text-secondary/60 hover:text-text-primary border-card-border hover:border-accent/30'
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
