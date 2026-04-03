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
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
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
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Version Indicator for Debugging */}
      <div className="hidden">Portfolio v2.1</div>
      {/* Top Section */}
      <section className="container-custom mb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Rocket size={14} />
            <span>Our Marketplace</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6"
          >
            Our <span className="text-emerald-500">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Explore our latest websites, apps, and business solutions. 
            We build high-performance digital products tailored for growth.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 space-y-8"
        >
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-accent transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search projects by name, industry, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-card-bg/50 backdrop-blur-xl border border-card-border rounded-full focus:outline-none focus:border-accent/50 transition-all text-text-primary font-medium placeholder:text-text-secondary/20 shadow-xl"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  selectedCategory === cat 
                    ? 'bg-accent text-white border-accent shadow-2xl shadow-accent/40 scale-105' 
                    : 'bg-card-bg/40 text-text-secondary/60 hover:text-text-primary border-card-border hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
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
