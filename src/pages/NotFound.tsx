import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center pt-20">
      <SEO title="404 - Reality Not Found" description="The page you're looking for has moved to a different dimension." />
      
      <div className="container-custom text-center relative">
        {/* Cinematic Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/5 border border-white/10 mb-12 shadow-2xl">
            <Ghost size={60} className="text-accent animate-bounce" />
          </div>
          
          <h1 className="text-[120px] md:text-[200px] font-display font-black tracking-tighter leading-none mb-4 text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] -z-10">
            404
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tight">
            Digital Void Encountered.
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed">
            The resource you're seeking has either scaled beyond this endpoint or never existed in this architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="px-10 py-5 bg-accent text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20"
            >
              <Home size={18} />
              Return to Grid
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={18} />
              Revert Path
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
