import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { ExternalLink, CheckCircle, ArrowLeft, MessageCircle, Sparkles, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import InquiryForm from '../components/InquiryForm';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-32 bg-bg transition-colors duration-500 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <Link to="/portfolio" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-text-secondary hover:text-accent transition-colors mb-16 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
          <span>Back to Solutions</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-6 py-2.5 rounded-full mb-10 shadow-xl shadow-accent/5">
              <Sparkles size={14} className="text-accent fill-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-text-primary mb-10 leading-[0.9]">
              {product.name}
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-text-secondary/70 mb-16 leading-relaxed font-medium max-w-2xl">
              {product.fullDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-card-bg border border-card-border rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 group-hover:-translate-y-1">
                    <CheckCircle size={24} />
                  </div>
                  <div className="pt-1">
                    <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-500">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={product.demoLink} 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex items-center justify-center gap-4 bg-accent text-white px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Launch Live Demo</span>
                <ExternalLink size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </a>
              <Link 
                to="/start-project"
                className="flex items-center justify-center gap-4 border border-card-border bg-card-bg/50 backdrop-blur-xl text-text-primary px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:bg-card-bg hover:border-accent/30 transition-all duration-500 active:scale-95 shadow-xl"
              >
                <span>Get This Solution</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          {/* Right: Media & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-card-border shadow-2xl bg-card-bg">
                <img 
                  src={product.screenshot} 
                  alt={product.name} 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-card-border via-card-bg to-transparent border border-card-border shadow-2xl backdrop-blur-xl">
              <div className="bg-bg rounded-[2.25rem] p-8 md:p-10">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-black text-text-primary mb-2 tracking-tight">Inquire About This Solution</h3>
                  <p className="text-[10px] font-black text-text-secondary/40 uppercase tracking-[0.3em]">Direct Response within 24h</p>
                </div>
                <InquiryForm productName={product.name} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
