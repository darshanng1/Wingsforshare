import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionValue } from 'motion/react';
import { Smartphone, Search, BarChart3, Globe, Activity, Cpu, Zap, TrendingUp, Layers, MousePointer2, Code2, Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeroVisualProps {
  rotateX: MotionValue<string>;
  rotateY: MotionValue<string>;
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

const simulationSteps = [
  { 
    id: 'web',
    title: 'High-Converting Websites', 
    icon: Globe, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-500/10',
    label: 'Web Performance',
    metric: 'Web Development',
    isPrimary: true
  },
  { 
    id: 'bi',
    title: 'Dashboards, Analytics & Data Insights', 
    icon: BarChart3, 
    color: 'text-orange-500', 
    bg: 'bg-orange-500/10',
    label: 'Data Intelligence',
    metric: 'Business Intelligence',
    isPremium: true
  },
  { 
    id: 'mobile',
    title: 'Android & iOS Apps', 
    icon: Smartphone, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10',
    label: 'App Metrics',
    metric: 'Mobile Apps'
  },
  { 
    id: 'seo',
    title: 'Rank Higher on Google', 
    icon: Search, 
    color: 'text-purple-500', 
    bg: 'bg-purple-500/10',
    label: 'Search Rankings',
    metric: 'SEO Services'
  },
  { 
    id: 'smm',
    title: 'Social Media Growth', 
    icon: TrendingUp, 
    color: 'text-pink-500', 
    bg: 'bg-pink-500/10',
    label: 'Social Growth',
    metric: 'SMM'
  },
];

export const HeroVisual = ({ rotateX, rotateY, textX, textY }: HeroVisualProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % simulationSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStep = simulationSteps[activeStep];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="relative flex items-center justify-center w-full"
    >
      <motion.div
        style={{ x: textX, y: textY }}
        className="relative z-30 w-full max-w-[720px] glass-panel overflow-hidden group"
      >
        {/* --- System Header --- */}
        <div className="px-6 py-4 border-b border-card-border flex items-center justify-between bg-text-primary/[0.02]">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Live Project Dashboard</span>
            </div>
            <div className="w-px h-4 bg-card-border" />
            <div className="text-[10px] font-mono text-text-secondary/40">v2.4.0-stable</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[540px] relative">
          {/* --- Left: Navigation & Status --- */}
          <div className="w-full md:w-[340px] border-b md:border-b-0 md:border-r border-card-border bg-text-primary/[0.01] flex flex-col relative">
            {/* Edge Fades */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card-bg/40 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-[88px] left-0 right-0 h-8 bg-gradient-to-t from-card-bg/40 to-transparent z-20 pointer-events-none" />
            
            <div 
              className="flex-grow p-4 space-y-3 overflow-y-auto scrollbar-hide scroll-smooth relative z-10 max-h-[400px] md:max-h-none"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {simulationSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "w-full text-left rounded-xl transition-all duration-500 group relative overflow-hidden border",
                    activeStep === index 
                      ? "bg-accent/5 border-accent scale-[1.02] shadow-[0_15px_35px_rgba(16,185,129,0.15)] z-10" 
                      : "bg-card-bg border-card-border hover:bg-card-bg hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]",
                    step.isPrimary && activeStep !== index && "border-l-4 border-l-accent",
                    step.isPremium && activeStep !== index && "border-l-4 border-l-orange-400"
                  )}
                >
                  {/* Subtle Inner Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-3 relative z-10 p-3.5">
                    {/* Active Indicator Dot */}
                    {activeStep === index && (
                      <motion.div 
                        layoutId="active-dot"
                        className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] z-20"
                      />
                    )}

                    <div className={cn(
                      "rounded-full flex items-center justify-center transition-all duration-500 shadow-md shrink-0",
                      step.isPrimary || step.isPremium ? "w-12 h-12" : "w-10 h-10",
                      activeStep === index 
                        ? "bg-accent text-white ring-4 ring-accent/20" 
                        : cn("bg-card-bg border border-card-border", step.color)
                    )}>
                      <step.icon size={step.isPrimary || step.isPremium ? 24 : 20} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className={cn(
                          "font-semibold transition-colors truncate tracking-tight leading-tight",
                          step.isPrimary || step.isPremium ? "text-[14px]" : "text-[13px]",
                          "text-text-primary"
                        )}>
                          {step.title}
                        </h4>
                        {step.isPrimary && (
                          <span className="text-[8px] font-bold bg-accent text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 ml-2 shadow-sm">Primary</span>
                        )}
                        {step.isPremium && (
                          <span className="text-[8px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 ml-2 shadow-sm">Premium</span>
                        )}
                      </div>
                      <p className={cn(
                        "text-[10px] font-normal leading-relaxed truncate text-text-secondary tracking-tight",
                      )}>{step.metric}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* --- Status Card --- */}
            <div className="p-4 border-t border-card-border bg-card-bg/50 backdrop-blur-sm relative z-30">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={12} className="text-accent" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-text-secondary">Engine Status</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-text-primary/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["20%", "80%", "40%", "90%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-accent" 
                  />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-text-secondary/40">
                  <span>LOAD</span>
                  <span>74%</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right: Simulation Display --- */}
          <div className="flex-grow p-6 md:p-8 relative overflow-hidden bg-card-bg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.98, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.02, x: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full flex flex-col"
              >
                <div className="mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">{currentStep.label}</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{currentStep.title}</h3>
                </div>

                <div className="flex-grow rounded-2xl border border-card-border bg-text-primary/[0.04] p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 bg-grid opacity-[0.08]" />
                  
                  {/* --- Web Visual --- */}
                  {currentStep.id === 'web' && (
                    <div className="w-full h-full flex flex-col gap-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="h-2 w-12 bg-accent/30 rounded-full" />
                          <div className="h-2 w-8 bg-text-primary/20 rounded-full" />
                        </div>
                        <Activity size={16} className="text-accent" />
                      </div>
                      <div className="flex-grow grid grid-cols-6 gap-2 items-end">
                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            className="bg-accent/40 rounded-t-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* --- Mobile Visual --- */}
                  {currentStep.id === 'mobile' && (
                    <div className="relative w-24 md:w-28 h-40 md:h-48 border-2 border-text-primary/20 rounded-[24px] p-3 bg-card-bg shadow-2xl relative z-10">
                      <div className="w-10 h-1 bg-text-primary/20 rounded-full mx-auto mb-4" />
                      <div className="space-y-3">
                        <div className="h-8 md:h-10 w-full bg-blue-500/20 rounded-xl border border-blue-500/30" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 md:h-12 bg-text-primary/10 rounded-xl" />
                          <div className="h-10 md:h-12 bg-text-primary/10 rounded-xl" />
                        </div>
                        <div className="h-6 md:h-8 w-full bg-text-primary/10 rounded-xl" />
                      </div>
                    </div>
                  )}

                  {/* --- SEO Visual --- */}
                  {currentStep.id === 'seo' && (
                    <div className="w-full space-y-3 relative z-10">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card-bg border border-card-border shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center">
                              <TrendingUp size={12} className="text-purple-500" />
                            </div>
                            <div className="h-2 w-20 bg-text-primary/10 rounded-full" />
                          </div>
                          <span className="text-[11px] font-bold text-accent">#1</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* --- BI Visual --- */}
                  {currentStep.id === 'bi' && (
                    <div className="grid grid-cols-2 gap-3 w-full relative z-10">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 rounded-2xl bg-card-bg border border-orange-500/20 shadow-sm">
                          <div className="h-2 w-8 bg-orange-500/30 rounded-full mb-3" />
                          <div className="h-5 w-12 bg-text-primary/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* --- SMM Visual --- */}
                  {currentStep.id === 'smm' && (
                    <div className="w-full h-full flex flex-col gap-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="h-2 w-16 bg-pink-500/20 rounded-full" />
                          <div className="h-2 w-10 bg-text-primary/10 rounded-full" />
                        </div>
                        <Share2 size={16} className="text-pink-500" />
                      </div>
                      <div className="flex-grow flex items-center justify-center">
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                           <motion.div 
                             animate={{ scale: [1, 1.1, 1] }}
                             transition={{ duration: 2, repeat: Infinity }}
                             className="absolute inset-0 rounded-full border-4 border-pink-500/20" 
                           />
                           <div className="absolute inset-4 rounded-full bg-pink-500/10 flex items-center justify-center">
                             <TrendingUp size={24} className="text-pink-500" />
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Zap size={12} className="text-accent" />
                    </div>
                    <span className="text-[10px] font-bold text-text-primary uppercase tracking-widest">Optimized Output</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-card-bg bg-text-primary/10" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* --- Background Elements --- */}
      <div className="absolute -inset-40 bg-accent/5 blur-[160px] -z-10 rounded-full opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[200px] -z-20 rounded-full opacity-30" />
    </motion.div>
  );
};
