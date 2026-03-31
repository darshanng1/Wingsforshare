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
          className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between p-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter size={16} className="text-zinc-400 ml-2 hidden md:block" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                    : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50'
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
