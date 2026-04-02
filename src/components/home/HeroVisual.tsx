import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionValue } from 'motion/react';
import { 
  Smartphone, Search, BarChart3, Globe, Activity, Cpu, Zap, 
  TrendingUp, Layout, Code2, Share2, ArrowUpRight, Users, 
  Heart, MessageSquare, Shield, MousePointer2, ExternalLink, 
  MoreHorizontal, Bell, Plus, CheckCircle2, ChevronRight,
  Target, Rocket, Layers, CreditCard
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeroVisualProps {
  rotateX: MotionValue<string>;
  rotateY: MotionValue<string>;
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

const simulationSteps = [
  { id: 'web', title: 'High-Converting Websites', icon: Globe, color: 'text-emerald-500', label: 'Web Performance', metric: 'Web Development' },
  { id: 'bi', title: 'Business Intelligence', icon: BarChart3, color: 'text-orange-500', label: 'Data Intelligence', metric: 'Dashboards & Analytics' },
  { id: 'mobile', title: 'Mobile App Development', icon: Smartphone, color: 'text-blue-500', label: 'App Metrics', metric: 'Android & iOS Apps' },
  { id: 'seo', title: 'SEO & Search Growth', icon: Search, color: 'text-purple-500', label: 'Search Rankings', metric: 'Rank Higher on Google' },
  { id: 'social', title: 'Social Media Marketing', icon: Share2, color: 'text-pink-500', label: 'Social Growth', metric: 'Growth & Engagement' },
];

// --- 1. Web Development: A high-end Landing Page Mockup ---
const WebPreview = () => (
  <div className="w-full h-full flex flex-col rounded-2xl border border-white/5 bg-[#020617] overflow-hidden shadow-2xl">
    <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
      <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/20" /><div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" /><div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" /></div>
      <div className="flex gap-4">
        {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-8 bg-white/5 rounded-full" />)}
        <div className="h-5 w-16 bg-emerald-500/20 rounded-md border border-emerald-500/30" />
      </div>
    </div>
    <div className="p-8 space-y-8 overflow-y-auto scrollbar-hide">
      <div className="space-y-4 max-w-md">
        <div className="h-8 w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl opacity-20" />
        <div className="space-y-2">
          <div className="h-2.5 w-full bg-white/10 rounded-full" />
          <div className="h-2.5 w-2/3 bg-white/5 rounded-full" />
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-10 w-32 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/20" />
          <div className="h-10 w-10 bg-white/5 rounded-lg border border-white/10" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map(i => (
          <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-emerald-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Rocket size={20} /></div>
            <div className="h-2 w-24 bg-white/10 rounded-full" />
            <div className="h-1.5 w-full bg-white/5 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 2. BI: A realistic Analytics SaaS Dashboard ---
const BIPreview = () => (
  <div className="w-full h-full flex flex-col gap-5">
    <div className="grid grid-cols-3 gap-4">
      {[
        { l: 'Revenue', v: '$42,850', g: '+14%', c: 'text-orange-500' },
        { l: 'Churn', v: '1.2%', g: '-0.4%', c: 'text-emerald-500' },
        { l: 'New Users', v: '1,204', g: '+28%', c: 'text-blue-500' }
      ].map((s, i) => (
        <div key={i} className="p-4 bg-[#0a0a0b] border border-white/5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-tighter mb-1.5">{s.l}</p>
          <div className="flex items-end justify-between">
            <span className="text-lg font-black text-white">{s.v}</span>
            <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/5", s.c)}>{s.g}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex-grow bg-[#0a0a0b] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="h-3 w-32 bg-white/10 rounded-full" />
          <div className="h-2 w-20 bg-white/5 rounded-full" />
        </div>
        <div className="flex gap-2">
          {[1, 2].map(i => <div key={i} className="w-6 h-6 rounded-lg bg-white/5 border border-white/10" />)}
        </div>
      </div>
      <div className="flex items-end gap-2 h-40 w-full px-2">
        {[30, 45, 25, 90, 60, 75, 45, 85, 55, 40, 95, 65, 30, 50, 80].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-grow bg-gradient-to-t from-orange-500/50 via-orange-500/10 to-transparent rounded-t-lg" />
        ))}
      </div>
      <div className="absolute bottom-4 left-6 right-6 h-px bg-white/5" />
    </div>
  </div>
);

// --- 3. Mobile App: Detailed Device Simulator ---
const MobilePreview = () => (
  <div className="relative w-52 h-[480px] mx-auto border-[10px] border-[#1e293b] rounded-[3.5rem] bg-black overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.15)] flex flex-col">
    <div className="h-7 w-28 bg-[#1e293b] mx-auto rounded-b-2xl mb-4 flex items-center justify-center">
      <div className="w-4 h-1 bg-black/40 rounded-full" />
    </div>
    <div className="px-5 flex-grow space-y-6">
      <div className="flex items-center justify-between pt-2">
        <div className="h-3 w-20 bg-white/20 rounded-full" />
        <Bell size={18} className="text-white/40" />
      </div>
      <div className="p-5 rounded-3xl bg-blue-600 space-y-4 shadow-xl shadow-blue-600/30">
        <div className="flex justify-between items-start">
          <CreditCard size={24} className="text-white/80" />
          <div className="h-1.5 w-8 bg-white/30 rounded-full" />
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] text-white/60 font-bold uppercase">Balance</p>
          <p className="text-2xl font-black text-white">$12,480.00</p>
        </div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400"><Activity size={18} /></div>
             <div className="flex-grow space-y-1.5"><div className="h-2 w-24 bg-white/20 rounded-full" /><div className="h-1.5 w-16 bg-white/5 rounded-full" /></div>
             <ChevronRight size={14} className="text-white/20" />
          </div>
        ))}
      </div>
    </div>
    <div className="h-16 mt-auto border-t border-white/10 bg-white/[0.02] flex items-center justify-around px-6">
      {[1, 2, 3, 4].map(i => <div key={i} className={cn("w-6 h-6 rounded-lg", i === 1 ? "bg-blue-500/20" : "bg-white/5")} />)}
    </div>
  </div>
);

// --- 4. SEO: Google Search Result & Analytics Simulator ---
const SEOPreview = () => (
  <div className="w-full h-full flex flex-col gap-6">
    <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-2xl flex items-center gap-4 shadow-xl">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><Search size={20} className="text-purple-500" /></div>
      <div className="flex-grow space-y-1.5"><div className="h-2.5 w-48 bg-white/10 rounded-full" /><div className="h-1.5 w-32 bg-white/5 rounded-full" /></div>
    </div>
    <div className="flex-grow space-y-3">
      <div className="px-1 flex justify-between items-center mb-2">
        <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Keyword Rankings</h4>
        <TrendingUp size={14} className="text-purple-500" />
      </div>
      {[
        { kw: 'Enterprise SaaS Solutions', r: '#1', t: '12.4k' },
        { kw: 'Custom API Development', r: '#1', t: '8.2k' },
        { kw: 'Cloud Infrastructure', r: '#2', t: '15.9k' }
      ].map((item, i) => (
        <div key={i} className="group p-4 flex items-center justify-between bg-[#0a0a0b] border border-white/5 rounded-2xl hover:border-purple-500/40 transition-all cursor-default">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-black text-xs">{item.r}</div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{item.kw}</p>
              <div className="h-1 w-20 bg-emerald-500/20 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-emerald-500" /></div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono font-bold text-white">{item.t}</p>
            <p className="text-[10px] text-white/20 font-bold uppercase">Traffic</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 5. Social Media: High-End Analytics & Post Simulator ---
const SocialPreview = () => (
  <div className="w-full h-full flex flex-col gap-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-[2rem] flex flex-col items-center justify-center text-center">
        <Users size={28} className="text-pink-500 mb-3" />
        <p className="text-3xl font-black text-white tracking-tighter">142k</p>
        <p className="text-[10px] font-black text-pink-500/60 uppercase tracking-widest mt-1">Growth</p>
      </div>
      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2.2rem] flex flex-col items-center justify-center text-center">
        <Heart size={28} className="text-blue-500 mb-3" />
        <p className="text-3xl font-black text-white tracking-tighter">8.4%</p>
        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Engagement</p>
      </div>
    </div>
    <div className="flex-grow space-y-4">
      <div className="flex items-center justify-between px-2">
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Campaign Insights</p>
        <CheckCircle2 size={16} className="text-emerald-500" />
      </div>
      {[1, 2].map(i => (
        <div key={i} className="p-4 bg-[#0a0a0b] border border-white/5 rounded-2xl flex gap-5">
          <div className="w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-xl shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center"><Share2 size={24} className="text-white/20" /></div>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-3">
             <div className="space-y-1.5"><div className="h-2 w-full bg-white/10 rounded-full" /><div className="h-1.5 w-2/3 bg-white/5 rounded-full" /></div>
             <div className="flex gap-5">
               <div className="flex items-center gap-1.5"><Heart size={12} className="text-pink-500" /><span className="text-[10px] font-bold text-white/40">2.4k</span></div>
               <div className="flex items-center gap-1.5"><MessageSquare size={12} className="text-blue-400" /><span className="text-[10px] font-bold text-white/40">142</span></div>
             </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DynamicPreview = ({ type }: { type: string }) => {
  const content = { web: <WebPreview />, bi: <BIPreview />, mobile: <MobilePreview />, seo: <SEOPreview />, social: <SocialPreview /> };
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(20px)' }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.1, y: -40, filter: 'blur(20px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      {content[type as keyof typeof content] || content.web}
    </motion.div>
  );
};

export const HeroVisual = ({ rotateX, rotateY, textX, textY }: HeroVisualProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % simulationSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStep = simulationSteps[activeStep];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "circOut" }}
      style={{ rotateX: isMobile ? '0deg' : rotateX, rotateY: isMobile ? '0deg' : rotateY, perspective: 1200 }}
      className="relative flex items-center justify-center w-full"
    >
      <motion.div
        style={{ x: isMobile ? 0 : textX, y: isMobile ? 0 : textY }}
        className="relative z-30 w-full max-w-[840px] glass-panel overflow-hidden border-card-border/50 shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
      >
        {/* --- Top Global Bar --- */}
        <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-[#050505]/80 backdrop-blur-xl">
          <div className="flex gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/20" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500/10 border border-amber-500/20" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/20" />
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
               <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">Core System: Optimal</span>
             </div>
             <div className="w-px h-5 bg-white/10" />
             <div className="text-[11px] font-mono text-white/20 tracking-tighter">INTERNAL_OS_V4.0</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[720px] bg-[#050505]">
          {/* --- Navigation Side Panel --- */}
          <div className="w-full md:w-[360px] flex flex-col border-r border-white/5">
            <div className="p-8 pb-4">
              <h2 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">Solution Architect</h2>
              <div className="space-y-2">
                {simulationSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onMouseEnter={() => { setActiveStep(index); setIsAutoPlaying(false); }}
                    className={cn(
                      "w-full text-left p-5 rounded-3xl transition-all duration-500 flex items-center gap-5 border",
                      activeStep === index 
                        ? "bg-white/[0.03] border-white/10 shadow-2xl scale-[1.02] z-10" 
                        : "bg-transparent border-transparent grayscale opacity-40 hover:opacity-100 hover:grayscale-0 hover:bg-white/[0.01]"
                    )}
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700",
                      activeStep === index ? "bg-accent text-white rotate-[360deg] shadow-[0_0_30px_rgba(16,185,129,0.3)]" : "bg-[#0a0a0b] text-white/40"
                    )}>
                      <step.icon size={24} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className={cn("text-base font-black transition-colors mb-0.5", activeStep === index ? "text-white" : "text-white/40")}>{step.title}</h4>
                      <p className="text-[11px] text-white/20 font-bold uppercase tracking-wider">{step.metric}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* --- Power Status --- */}
            <div className="mt-auto p-8 border-t border-white/5 bg-[#080809]">
               <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2 font-black text-[10px] text-white/40 uppercase tracking-widest"><Cpu size={14} className="text-accent" /> Engine Load</div>
                 <span className="text-xs font-mono text-accent">98.4%</span>
               </div>
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                 <motion.div animate={{ width: ['20%', '85%', '40%', '95%', '60%'] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-full bg-accent relative z-10" />
                 <div className="absolute inset-0 bg-accent/20 blur-[4px]" />
               </div>
            </div>
          </div>

          {/* --- Main Simulation Display --- */}
          <div className="flex-grow p-12 md:p-16 flex flex-col relative overflow-hidden bg-[#020203]">
             {/* Dynamic Heading */}
             <div className="mb-14 relative z-10">
               <motion.div key={`lbl-${currentStep.id}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-4">
                 <span className="h-px w-10 bg-accent" />
                 <span className="text-[12px] font-black text-accent uppercase tracking-[0.5em]">{currentStep.label}</span>
               </motion.div>
               <motion.h3 key={`tit-${currentStep.id}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-4xl md:text-5xl font-black text-white leading-[0.95] tracking-tighter">
                 {currentStep.title}
               </motion.h3>
             </div>

             {/* UI Preview Container */}
             <div className="flex-grow relative z-10">
                <AnimatePresence mode="wait">
                   <DynamicPreview type={currentStep.id} />
                </AnimatePresence>
             </div>

             {/* Functional Footer */}
             <div className="mt-14 flex items-center justify-between border-t border-white/5 pt-10 relative z-10">
               <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center p-1">
                   <div className="w-full h-full rounded-full border border-accent/40 flex items-center justify-center animate-spin-slow"><Zap size={20} className="text-accent" /></div>
                 </div>
                 <div>
                   <p className="text-xs font-black text-white tracking-widest uppercase">Autonomous AI Mode</p>
                   <p className="text-[10px] text-white/30 font-bold">Latency: 14ms | Servers: Global Edge</p>
                 </div>
               </div>
               <div className="flex -space-x-4">
                 {[1, 2, 3, 4].map(i => <div key={i} className="w-11 h-11 rounded-full border-[3px] border-[#020203] bg-white/5 flex items-center justify-center text-white/20 font-black text-[10px]">{i}</div>)}
               </div>
             </div>

             {/* High-End Background Details */}
             <div className="absolute top-0 right-0 p-4 opacity-5"><Layers className="text-white" size={200} /></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Decorative Outer Orbs */}
      <div className="absolute -inset-[300px] bg-accent/5 blur-[250px] -z-10 rounded-full opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 blur-[350px] -z-20 rounded-full opacity-30" />
    </motion.div>
  );
};