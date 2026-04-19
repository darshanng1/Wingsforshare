import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Building2, HardHat, ShoppingCart, Cpu, TrendingUp, Zap, ArrowRight
} from 'lucide-react';

interface IndustriesSectionProps {}

const transformations = [
  {
    icon: HardHat,
    industry: 'Field Services',
    title: 'Service Automation',
    impact: '+42% Efficiency',
    desc: 'Unified field service engine automating dispatch and reporting.',
    color: 'emerald'
  },
  {
    icon: Building2,
    industry: 'Real Estate',
    title: 'Conversion Engine',
    impact: '3.5x Lead Growth',
    desc: 'High-performance property ecosystem with smart lead scoring.',
    color: 'blue'
  },
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    title: 'Global Scale',
    impact: '210% Revenue Lift',
    desc: 'Headless commerce architecture for sub-second performance.',
    color: 'accent'
  }
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section ref={targetRef} id="industries" className="relative h-[120vh] bg-bg">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Immersive Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] select-none flex items-center justify-center">
            <span className="text-[40vw] font-black leading-none tracking-tighter whitespace-nowrap">STRATEGY</span>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-24 px-[15vw] items-center">
          {/* Intro Slide */}
          <div className="w-[70vw] md:w-[35vw] shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-12 w-fit"
            >
              <Zap size={12} className="fill-accent" />
              <span>Transformation Framework</span>
            </motion.div>
            <h2 className="text-7xl md:text-[120px] font-display font-bold tracking-tighter text-text-primary leading-[0.85] mb-10">
              CORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">ENGINE.</span>
            </h2>
            <p className="text-text-secondary/60 text-xl max-w-md leading-relaxed font-medium mb-12">
              We don't just build features; we re-engineer business models through custom automation and high-performance architecture.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-bg bg-card-bg flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Partner" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                Trusted by <span className="text-text-primary">50+ Enterprises</span>
              </div>
            </div>
          </div>

          {/* Transformation Slides */}
          {transformations.map((item, idx) => (
            <div key={idx} className="w-[85vw] md:w-[65vw] shrink-0">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-16 rounded-[5rem] bg-card-bg border border-card-border/50 relative overflow-hidden group shadow-2xl shadow-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-bg border border-card-border rounded-3xl flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <item.icon size={36} />
                  </div>
                  <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-8">
                    <span className="text-sm font-black text-emerald-500 uppercase tracking-[0.2em]">{item.impact}</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-text-primary mb-8 leading-none">
                    {item.industry}
                  </h3>
                  <p className="text-text-secondary/60 text-xl leading-relaxed mb-10 font-medium">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-4 text-accent font-black uppercase tracking-[0.3em] text-xs group/btn">
                    <span className="relative">
                      View Case Study
                      <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300" />
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>

                <div className="relative z-10 aspect-square rounded-[3rem] bg-bg border border-card-border p-10 overflow-hidden shadow-inner">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-text-primary">Live Metrics</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                      <TrendingUp size={14} className="text-accent" />
                      <span className="text-[10px] font-black text-accent">OPTIMIZED</span>
                    </div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="flex items-end gap-3 h-40">
                      {[40, 70, 45, 90, 65, 100, 85, 120, 95, 140, 110, 160].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(h/160)*100}%` }}
                          transition={{ delay: i * 0.05, duration: 0.8 }}
                          className={`flex-grow rounded-t-xl ${i > 9 ? 'bg-accent shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-text-primary/5'}`}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 rounded-3xl bg-card-bg border border-card-border group-hover:border-accent/20 transition-colors">
                        <span className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest block mb-2">Growth Velocity</span>
                        <div className="text-3xl font-black text-emerald-500 tracking-tighter">+124%</div>
                      </div>
                      <div className="p-6 rounded-3xl bg-card-bg border border-card-border group-hover:border-accent/20 transition-colors">
                        <span className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest block mb-2">System Efficiency</span>
                        <div className="text-3xl font-black text-accent tracking-tighter">98.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TransformationCard = ({ item, delay }: { item: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 rounded-[3rem] bg-card-bg border border-card-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
  >
    <div className="flex items-center justify-between mb-8">
      <div className="w-12 h-12 bg-bg border border-card-border rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
        <item.icon size={22} />
      </div>
      <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{item.impact}</span>
      </div>
    </div>
    
    <h4 className="text-2xl font-black tracking-tight text-text-primary mb-4 group-hover:text-accent transition-colors">
      {item.industry}
    </h4>
    
    <p className="text-text-secondary/60 text-sm leading-relaxed mb-6 flex-grow">
      {item.desc}
    </p>

    <div className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest group-hover:gap-3 transition-all">
      <span>Case Study</span>
      <ArrowRight size={14} />
    </div>
  </motion.div>
);
