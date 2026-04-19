import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Rocket, ChevronRight, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Portfolio() {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 6;

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      if (!searchLower) return matchesCategory;

      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.slug.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        (product.industry && product.industry.toLowerCase().includes(searchLower));
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  // Reset page when filters change
  useEffect(() => {
    setPage(0);
  }, [searchQuery, selectedCategory]);

  // Automatic switching effect
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage(prev => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const displayedProducts = useMemo(() => {
    const start = page * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, page]);

  const handleNextPage = () => {
    setPage(prev => (prev + 1) % totalPages);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg transition-colors duration-500">
      {/* Version Indicator for Debugging */}
      <div className="hidden">Portfolio v2.3</div>
      {/* Top Section */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-accent/5"
          >
            <Rocket size={14} className="fill-accent" />
            <span>Project Explorer System</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[64px] md:text-[110px] font-display font-black tracking-[-0.04em] leading-[0.85] mb-12"
          >
            Digital <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-blue-500 italic font-light">Showcase</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[20px] md:text-[24px] text-text-secondary/60 max-w-2xl mx-auto leading-relaxed font-medium mb-24"
          >
            A curated selection of high-performance digital solutions developed for industry-leading clients.
          </motion.p>
        </div>

        {/* Professional Agency Command Hub */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-12"
        >
          <div className="relative group max-w-5xl mx-auto">
            {/* Dynamic Energy Aura */}
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full blur-[100px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 rounded-3xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.1)] dark:shadow-[0_48px_100px_-24px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-focus-within:scale-[1.01] group-focus-within:border-accent group-focus-within:ring-4 group-focus-within:ring-accent/5">
              
              <div className="relative z-10 flex items-center px-10 py-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
                  <Search size={24} strokeWidth={2.5} />
                </div>
                
                <input 
                  id="portfolio-search-input"
                  type="text"
                  placeholder="What solution can we find for you?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-zinc-900 dark:text-zinc-50 text-xl md:text-2xl font-medium tracking-tight placeholder:text-zinc-300 dark:placeholder:text-zinc-800 pl-8 pr-32 h-full"
                />
                
                {/* HUD Result Badge */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
                  <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
                  <motion.div 
                    key={filteredProducts.length}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-end"
                  >
                    <span className="text-xl font-display font-bold text-accent italic">
                      {filteredProducts.length}
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Results</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                  selectedCategory === cat 
                    ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105' 
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-500 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Showing {displayedProducts.length} of {filteredProducts.length} projects
          </div>
          {totalPages > 1 && (
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-1.5 rounded-full transition-all ${
                    page === i ? 'bg-emerald-500 w-12' : 'bg-zinc-200 dark:bg-zinc-800'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[800px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 col-span-full"
                >
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Switch Button */}
            {totalPages > 1 && (
              <div className="mt-16 text-center">
                <button
                  onClick={handleNextPage}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                  <span>Explore More Demos</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-400 mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-zinc-500">Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  );
}
