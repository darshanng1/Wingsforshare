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
    <section className="py-12 md:py-16 bg-bg text-text-primary overflow-hidden relative">
      {/* Background Textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02),transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-premium aspect-square flex flex-col justify-center p-12 md:p-20 relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                    <CheckCircle size={14} className="fill-accent/20" />
                    <span>Growth Architecture</span>
                  </div>
                  <h4 className="text-[40px] md:text-[64px] font-black mb-10 tracking-[-0.04em] text-text-primary leading-[0.9]">
                    SCALABLE <br />
                    <span className="text-accent">ECOSYSTEMS.</span>
                  </h4>
                  <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-12 font-medium">
                    We don't just build websites; we engineer digital infrastructure that drives measurable revenue growth and operational efficiency.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      'Lead Generation',
                      'Digital Infrastructure',
                      'Process Automation',
                      'Custom Applications'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4 group/item">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(16,185,129,0.6)] group-hover/item:scale-125 transition-transform" />
                        <span className="text-[14px] font-black text-text-primary uppercase tracking-[0.15em]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="text-[56px] md:text-[80px] font-black mb-12 leading-[0.9] tracking-[-0.04em]">
              ENGINEERING <br />
              <span className="text-text-secondary/40">FOR SUCCESS.</span>
            </h2>

            <div className="space-y-12">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-8 group"
                >
                  <div className="w-16 h-16 rounded-3xl bg-card-bg border border-card-border flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:border-accent group-hover:scale-110 shadow-lg">
                    <CheckCircle size={24} className="group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[24px] font-black mb-3 text-text-primary group-hover:text-accent transition-colors duration-300 tracking-tight uppercase">{item.title}</h4>
                    <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed max-w-md font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Impact Metrics - New Section to fill space */}
        <div className="pt-24 border-t border-card-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Revenue Generated', value: '$250M+', desc: 'For our global partners' },
              { label: 'Projects Delivered', value: '1,200+', desc: 'Across 15 industries' },
              { label: 'Client Retention', value: '98%', desc: 'Long-term partnerships' },
              { label: 'Global Reach', value: '24', desc: 'Countries transformed' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left group"
              >
                <div className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4 group-hover:tracking-[0.5em] transition-all duration-500">{stat.label}</div>
                <div className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter mb-4">{stat.value}</div>
                <p className="text-sm text-text-secondary font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
