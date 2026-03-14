import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { ExternalLink, CheckCircle, ArrowLeft, MessageCircle, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import InquiryForm from '../components/InquiryForm';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-sm font-bold text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Marketplace</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-8 border border-black/5 dark:border-white/10 shadow-sm">
              <Sparkles size={16} className="text-black dark:text-white" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-8 leading-[0.9]">
              {product.name}
            </h1>
            
            <p className="text-xl text-black/60 dark:text-white/60 mb-12 leading-relaxed">
              {product.fullDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-lg font-medium text-black/80 dark:text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={product.demoLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-80 transition-all active:scale-95 shadow-2xl shadow-black/10 dark:shadow-white/10"
              >
                <span>View Live Demo</span>
                <ExternalLink size={20} />
              </a>
              <Link 
                to="/payment"
                className="flex items-center justify-center space-x-3 border border-black/10 dark:border-white/10 text-black dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
              >
                <span>Get This Website</span>
              </Link>
            </div>
          </motion.div>
          
          {/* Right: Media & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-white/10 group">
              <img 
                src={product.screenshot} 
                alt={product.name} 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <InquiryForm productName={product.name} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
