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
    <section id="portfolio" className="section-padding bg-zinc-50 dark:bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} />
            <span>Live Demo Showcase</span>
          </motion.div>
          <h2 className="mb-6">Explore Our <br /> <span className="text-zinc-400 dark:text-zinc-600">Working Solutions</span></h2>
          <p className="max-w-2xl mx-auto">
            Don't just take our word for it. Interact with our live demos and see the quality of our work firsthand.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mt-16 space-y-10">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, industry, or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-6 py-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-zinc-900 dark:text-white font-medium shadow-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-white dark:bg-zinc-900/50 text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-100 dark:border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {visibleItems < filteredProjects.length && (
          <div className="mt-24 text-center">
            <button
              onClick={() => setVisibleItems((prev: number) => prev + 6)}
              className="btn-secondary group"
            >
              <span>Load More Projects</span>
              <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
