import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "PestControl India",
    role: "Operations Director",
    content: "Wings Technology transformed our manual tracking into a high-performance BI system. Our operational efficiency increased by 300% within the first quarter. Their technical precision is unmatched.",
    image: "https://i.pravatar.cc/150?u=rajesh",
    rating: 5,
    tag: "Enterprise BI"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    company: "Global Logistics Co.",
    role: "CTO",
    content: "The mobile app developed by Wings has become the backbone of our field operations. The geo-fencing and real-time tracking features are flawless. A truly professional team.",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    tag: "Mobile Ecosystem"
  },
  {
    id: 3,
    name: "Amit Shah",
    company: "TechScale Solutions",
    role: "Founder",
    content: "Their SEO growth strategy took us from page 10 to the top 3 results for our most competitive keywords. The ROI we've seen is incredible. Highly recommended for any scaling business.",
    image: "https://i.pravatar.cc/150?u=amit",
    rating: 5,
    tag: "Growth Strategy"
  }
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Column: Context & Controls */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <Star size={14} className="fill-accent" />
              <span>Verified Partnerships</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-text-primary leading-[0.95] mb-8"
            >
              What Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">Partners</span> Say.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-text-secondary/60 max-w-md mb-12 leading-relaxed font-medium"
            >
              We don't just build software; we engineer long-term growth engines. Here's how we've transformed industry leaders.
            </motion.p>

            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <button 
                  onClick={prev}
                  className="w-14 h-14 rounded-2xl border border-card-border bg-card-bg/50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all duration-500 group"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={next}
                  className="w-14 h-14 rounded-2xl border border-card-border bg-card-bg/50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all duration-500 group"
                >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="h-px w-24 bg-card-border hidden sm:block" />
              <div className="text-[11px] font-black uppercase tracking-widest text-text-secondary/40">
                {String(activeIdx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Right Column: Immersive Testimonial */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-20 -right-20 text-accent/5 pointer-events-none">
              <Quote size={300} />
            </div>
            
            <div className="relative z-10 min-h-[500px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="p-12 md:p-16 rounded-[3.5rem] bg-card-bg border border-card-border shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                      <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Verified Result</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-10">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-[1.3] text-text-primary mb-12">
                      "{active.content}"
                    </blockquote>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-12 border-t border-card-border/50">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-accent/20 p-1 bg-bg">
                          <img 
                            src={active.image} 
                            alt={active.name}
                            className="w-full h-full object-cover rounded-2xl"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="text-2xl font-display font-bold tracking-tight text-text-primary">{active.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] text-accent font-black uppercase tracking-widest">{active.role}</span>
                            <div className="w-1 h-1 rounded-full bg-text-secondary/20" />
                            <span className="text-[11px] text-text-secondary/40 font-black uppercase tracking-widest">{active.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-text-secondary/30 uppercase tracking-widest mb-2">Project Focus</span>
                        <div className="px-4 py-2 rounded-xl bg-bg border border-card-border text-[11px] font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
                          {active.tag}
                          <ArrowUpRight size={14} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Stack Effect */}
            <div className="absolute top-8 left-8 w-full h-full bg-accent/5 rounded-[3.5rem] -z-10 translate-y-4" />
            <div className="absolute top-12 left-12 w-full h-full bg-blue-500/5 rounded-[3.5rem] -z-20 translate-y-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
