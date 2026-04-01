import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-bg border-t border-card-border text-text-primary overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[150px] -z-10 rounded-full" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-10 border border-accent/20"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Let's Get Started</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-10 leading-[0.9]">
            READY TO SCALE <br /> <span className="text-accent">YOUR BUSINESS?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl">
            Join 50+ successful businesses that transformed their operations using our premium digital systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="/start-project" className="btn-primary px-12 py-6 text-lg flex items-center justify-center gap-3 group">
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="btn-outline border-text-primary/20 text-text-primary hover:bg-text-primary hover:text-bg px-12 py-6 text-lg flex items-center justify-center gap-3">
              <MessageCircle size={20} />
              Talk to Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
