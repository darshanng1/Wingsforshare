import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Zap, TrendingUp, Network, Cpu, Smartphone } from 'lucide-react';

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
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Feature Card */}
              <div className="card-premium min-h-[600px] flex flex-col justify-center p-12 md:p-24 relative z-10 overflow-hidden group bg-card-bg/40 backdrop-blur-3xl border-accent/20">
                {/* Animated Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-accent/20 transition-all duration-1000" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48 group-hover:bg-blue-500/20 transition-all duration-1000" />
                
                {/* Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                  >
                    <Zap size={14} className="fill-accent" />
                    <span>Growth Architecture</span>
                  </motion.div>

                  <h4 className="text-[48px] md:text-[72px] font-display font-bold mb-10 tracking-tight text-text-primary leading-[0.95]">
                    SCALABLE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">ECOSYSTEMS.</span>
                  </h4>

                  <p className="text-[20px] md:text-[24px] text-text-secondary leading-relaxed mb-16 font-medium max-w-2xl tracking-tight">
                    We don't just build websites; we engineer <span className="text-text-primary font-bold">digital infrastructure</span> that drives measurable revenue growth and operational efficiency.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {[
                      { title: 'Lead Generation', icon: <TrendingUp size={20} /> },
                      { title: 'Digital Infrastructure', icon: <Network size={20} /> },
                      { title: 'Process Automation', icon: <Cpu size={20} /> },
                      { title: 'Custom Applications', icon: <Smartphone size={20} /> }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-center space-x-5 group/item"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white group-hover/item:scale-110 transition-all duration-500 shadow-lg">
                          {item.icon}
                        </div>
                        <span className="text-[15px] font-black text-text-primary uppercase tracking-[0.2em] group-hover/item:translate-x-2 transition-transform duration-500">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 blur-[100px] rounded-full pointer-events-none" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" 
              />
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="text-[56px] md:text-[80px] font-display font-bold mb-12 leading-[0.9] tracking-tighter">
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
                    <h4 className="text-[24px] font-display font-bold mb-3 text-text-primary group-hover:text-accent transition-colors duration-300 tracking-tight uppercase">{item.title}</h4>
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
