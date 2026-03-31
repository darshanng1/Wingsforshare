import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "PestControl India",
    role: "Operations Director",
    content: "Wings Technology transformed our manual tracking into a high-performance BI system. Our operational efficiency increased by 300% within the first quarter. Their technical precision is unmatched.",
    image: "https://i.pravatar.cc/150?u=rajesh",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    company: "Global Logistics Co.",
    role: "CTO",
    content: "The mobile app developed by Wings has become the backbone of our field operations. The geo-fencing and real-time tracking features are flawless. A truly professional team.",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Shah",
    company: "TechScale Solutions",
    role: "Founder",
    content: "Their SEO growth strategy took us from page 10 to the top 3 results for our most competitive keywords. The ROI we've seen is incredible. Highly recommended for any scaling business.",
    image: "https://i.pravatar.cc/150?u=amit",
    rating: 5
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    company: "EcoSmart Systems",
    role: "Product Manager",
    content: "Working with Wings was a seamless experience. They understood our complex data requirements and built a dashboard that even our non-technical staff loves to use.",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white dark:bg-[#030303] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-8"
            >
              <Star size={14} />
              <span>Client Success Stories</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              WHAT OUR <br />
              <span className="text-emerald-500">PARTNERS</span> SAY.
            </h2>
            
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mb-12 leading-relaxed">
              We don't just build software; we build long-term partnerships. Here's how we've helped businesses across the globe scale their operations.
            </p>

            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all group"
              >
                <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all group"
              >
                <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
              </button>
              
              <div className="ml-4 flex gap-1">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-zinc-200 dark:bg-zinc-800'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 -left-10 text-emerald-500/10 dark:text-emerald-500/5">
              <Quote size={200} />
            </div>
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 p-10 md:p-16 rounded-[3rem] shadow-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed mb-12 italic serif text-zinc-800 dark:text-zinc-200">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/20">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-emerald-500 font-bold uppercase tracking-widest">{testimonials[activeIndex].role}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mt-1">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Background Card */}
            <div className="absolute top-4 left-4 w-full h-full bg-emerald-500/5 rounded-[3rem] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
