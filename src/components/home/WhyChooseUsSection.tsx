import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const whyChooseUs = [
  {
    title: 'Custom Built Systems',
    desc: 'We don\'t use generic templates. Every line of code is written to solve your specific business challenges.'
  },
  {
    title: 'Data-First Approach',
    desc: 'Our systems are built with analytics at the core, giving you the insights you need to make informed decisions.'
  },
  {
    title: 'Scalable Architecture',
    desc: 'We build for the future. Our technology stacks are designed to grow with your business without friction.'
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-bg text-text-primary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium aspect-square flex flex-col justify-center p-12 md:p-16"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-8">
                  <CheckCircle size={12} />
                  <span>Growth Systems</span>
                </div>
                <h4 className="text-[28px] md:text-[40px] font-bold mb-8 tracking-tight text-text-primary leading-tight">
                  Business Growth <br />
                  <span className="text-accent">Systems.</span>
                </h4>
                <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-12">
                  We design digital systems that help businesses generate leads, streamline operations, and scale using modern technology.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    'Lead Generation',
                    'Digital Infrastructure',
                    'Process Automation',
                    'Custom Applications'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                      <span className="text-[14px] font-bold text-text-primary uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Background */}
            <div className="absolute -inset-20 bg-accent/5 blur-[120px] -z-10 rounded-full opacity-30" />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-bold uppercase tracking-widest mb-6"
            >
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="mb-10 leading-tight">
              Engineering Excellence <br />
              <span className="text-text-secondary">For Your Success.</span>
            </h2>

            <div className="space-y-8 md:space-y-10">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-accent group-hover:text-bg transition-all duration-500 group-hover:border-accent">
                    <CheckCircle size={20} className="group-hover:text-bg transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold mb-2 text-text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">{item.title}</h4>
                    <p className="text-[14px] md:text-[16px] text-text-secondary leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
