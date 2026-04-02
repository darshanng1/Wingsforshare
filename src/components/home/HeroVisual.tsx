import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionValue } from 'motion/react';
import { 
  Smartphone, Search, BarChart3, Globe, Activity, Cpu, Zap, 
  TrendingUp, Layout, Code2, Share2, ArrowUpRight, Users, 
  Heart, MessageSquare, Shield, MousePointer2, ExternalLink, 
  MoreHorizontal, Bell, Plus, CheckCircle2, ChevronRight,
  Target, Rocket, Layers, CreditCard, ShoppingCart
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeroVisualProps {
  rotateX: MotionValue<string>;
  rotateY: MotionValue<string>;
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

const simulationSteps = [
  { id: 'web', title: 'High-Quality Websites', icon: Globe, color: 'text-emerald-500', label: 'Web Development', metric: 'Engaging & Performant' },
  { id: 'bi', title: 'Business Intelligence', icon: BarChart3, color: 'text-orange-500', label: 'Data Intelligence', metric: 'Dashboards & Analytics' },
  { id: 'mobile', title: 'Mobile App Development', icon: Smartphone, color: 'text-blue-500', label: 'App Development', metric: 'Android & iOS Apps' },
  { id: 'seo', title: 'SEO & Search Growth', icon: Search, color: 'text-purple-500', label: 'Search Rankings', metric: 'Rank Higher on Google' },
  { id: 'social', title: 'Social Media Marketing', icon: Share2, color: 'text-pink-500', label: 'Social Growth', metric: 'Growth & Engagement' },
];

// --- 1. Web Development: Full Landing Page Preview ---
const WebPreview = () => (
  <div className="w-full h-full bg-[#020617] relative overflow-hidden flex flex-col no-scrollbar overflow-y-auto">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />
    
    {/* Browser UI */}
    <div className="sticky top-0 z-30 h-11 px-4 flex items-center gap-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
      </div>
      <div className="flex-grow h-7 bg-white/5 rounded-lg flex items-center px-4 border border-white/5">
        <div className="w-3 h-3 rounded-full bg-emerald-500/20 mr-2" />
        <div className="h-1 w-48 bg-white/10 rounded-full" />
      </div>
      <div className="flex gap-3">
        <div className="w-4 h-4 rounded bg-white/10" />
        <div className="w-4 h-4 rounded bg-white/10" />
      </div>
    </div>
    
    {/* Website Content */}
    <div className="flex-grow flex flex-col">
    {/* Header */}
    <header className="h-16 px-8 flex items-center justify-between relative z-10 bg-[#050505]/50 border-b border-white/5">
      <nav className="flex gap-10 items-center mx-auto">
        {['Home', 'About', 'Contact'].map((item) => (
          <button key={item} className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] hover:text-emerald-500 transition-all hover:scale-110">
            {item}
          </button>
        ))}
      </nav>
    </header>

      {/* Hero Section */}
      <section className="px-8 py-16 md:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Premium Development</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Professional <br />
              <span className="text-emerald-500">Website Design.</span>
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm md:text-lg max-w-md leading-relaxed"
            >
              We create high-quality, responsive websites that help your business grow and reach more customers.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="h-14 w-44 bg-emerald-500 rounded-2xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer">Start Project</div>
            <div className="h-14 w-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/60 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer">Our Work</div>
          </motion.div>
        </div>

        {/* High-Fidelity Mockup Visual */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[2.5rem] border border-white/10 p-10 flex items-center justify-center overflow-hidden">
            
            {/* Desktop Mockup - Centered and Clear */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[85%] bg-[#0a0a0b] border border-white/10 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden z-10"
            >
              <div className="h-8 px-3 flex items-center gap-1.5 border-b border-white/5 bg-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
              </div>
              <div className="p-6 space-y-6">
                <div className="flex justify-center items-center">
                  <div className="flex gap-6">
                    {['H', 'A', 'C'].map(i => <div key={i} className="text-[8px] font-black text-white/20 tracking-widest">{i}</div>)}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-6 w-3/4 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-5/6 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="space-y-2">
                      <div className="h-20 bg-white/[0.02] border border-white/5 rounded-xl" />
                      <div className="h-1.5 w-12 bg-white/10 rounded-full mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements - Spaced out to avoid overlap confusion */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-4 p-3 bg-emerald-500 rounded-xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={12} className="text-white" />
                <p className="text-[10px] font-black text-white">+142%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-4 p-3 bg-[#1a1a1b] border border-white/10 rounded-xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-2">
                <Users size={12} className="text-emerald-500" />
                <p className="text-[10px] font-black text-white">12k+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: 'Ultra Fast', d: 'Sub-second load times for better SEO.', i: Zap },
            { t: 'Responsive', d: 'Perfect viewing on every device.', i: Layout },
            { t: 'Secure', d: 'Enterprise-grade protection.', i: Shield }
          ].map((f, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto border border-emerald-500/20">
                <f.i size={24} />
              </div>
              <h5 className="text-white font-black text-lg tracking-tight">{f.t}</h5>
              <p className="text-white/30 text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Trust */}
      <section className="px-8 py-20 relative z-10 space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '250+', l: 'Projects' },
            { v: '99.9%', l: 'Uptime' },
            { v: '15M+', l: 'Traffic' },
            { v: '24/7', l: 'Support' }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-2 truncate tracking-tighter">{s.v}</p>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10"><MessageSquare size={60} className="text-emerald-500" /></div>
          <p className="text-white/60 text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl">"Their expertise in web development transformed our business. The new site is faster, looks incredible, and our sales have doubled."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-black text-sm border border-emerald-500/20">AS</div>
            <div>
              <p className="text-white font-black text-sm">Alex Smith</p>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Founder, InnovateX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// --- 2. BI: Full Dashboard Preview ---
const BIPreview = () => (
  <div className="w-full h-full bg-[#020203] p-4 md:p-6 flex flex-col gap-3 md:gap-4">
    <div className="flex items-center justify-between mb-1 md:mb-2">
      <div className="space-y-0.5">
        <h4 className="text-base md:text-lg font-black text-white tracking-tight">Data Intelligence</h4>
        <p className="text-[7px] md:text-[8px] text-white/30 font-bold uppercase tracking-widest">We turn your data into growth.</p>
      </div>
      <div className="flex gap-2">
        <div className="hidden sm:block px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black text-white/60">30 Days</div>
        <div className="w-7 h-7 md:w-8 md:h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20"><TrendingUp size={14} /></div>
      </div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
      {[
        { l: 'Revenue', v: '₹12.4L', g: '+18%', c: 'text-orange-500' },
        { l: 'Conv.', v: '4.2%', g: '+0.8%', c: 'text-emerald-500' },
        { l: 'Users', v: '8.4k', g: '+12%', c: 'text-blue-500' },
        { l: 'Session', v: '4m 12s', g: '+24%', c: 'text-purple-500' }
      ].map((s, i) => (
        <div key={i} className="p-2.5 md:p-3 bg-white/[0.02] border border-white/5 rounded-xl">
          <p className="text-[7px] md:text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">{s.l}</p>
          <div className="flex items-end justify-between gap-1">
            <span className="text-sm md:text-base font-black text-white truncate">{s.v}</span>
            <span className={cn("text-[7px] md:text-[8px] font-bold shrink-0", s.c)}>{s.g}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 min-h-0">
      <div className="sm:col-span-2 bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <p className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-widest">Revenue Growth</p>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="flex items-end gap-1.5 md:gap-2 h-24 md:h-32 w-full">
          {[40, 65, 35, 90, 55, 75, 45, 85, 60, 40, 95, 70, 40, 60, 85, 50, 90, 65, 40, 80].map((h, i) => (
            <motion.div 
              key={i} 
              initial={{ height: 0 }} 
              animate={{ height: `${h}%` }} 
              transition={{ duration: 1, delay: i * 0.02 }}
              className="flex-grow bg-gradient-to-t from-orange-500/40 via-orange-500/10 to-transparent rounded-t-sm md:rounded-t-md"
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:flex bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex-col">
        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-6">Live Feed</p>
        <div className="space-y-4">
          {[
            { u: 'R. Sharma', a: 'Premium', v: '₹14,999' },
            { u: 'A. Gupta', a: 'Enterprise', v: '₹49,999' },
            { u: 'S. Verma', a: 'Basic', v: '₹4,999' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-black text-white/40">{item.u[0]}</div>
                <div>
                  <p className="text-[10px] font-bold text-white">{item.u}</p>
                  <p className="text-[8px] text-white/20 font-bold uppercase">{item.a}</p>
                </div>
              </div>
              <p className="text-[10px] font-black text-orange-500">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 3. Mobile App: Full App Showcase ---
const MobilePreview = () => (
  <div className="w-full h-full bg-[#020617] flex items-center justify-center p-4 gap-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
    {/* Main Phone */}
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative w-48 h-[420px] border-[8px] border-[#1e293b] rounded-[2.5rem] bg-black overflow-hidden shadow-2xl z-20 shrink-0"
    >
      <div className="h-5 w-20 bg-[#1e293b] mx-auto rounded-b-xl mb-3 flex items-center justify-center">
        <div className="w-3 h-0.5 bg-black/40 rounded-full" />
      </div>
      <div className="px-4 space-y-5">
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 bg-white/20 rounded-full" />
          <Bell size={14} className="text-white/40" />
        </div>
        <div className="p-4 rounded-2xl bg-blue-600 space-y-3 shadow-lg shadow-blue-600/30">
          <div className="flex justify-between items-start">
            <CreditCard size={18} className="text-white/80" />
            <div className="h-1 w-8 bg-white/30 rounded-full" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <p className="text-[8px] text-white/60 font-bold uppercase">Balance</p>
            <p className="text-sm md:text-base font-black text-white truncate">₹2,84,500</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Payment Received', amount: '+₹12,400', color: 'text-emerald-400' },
            { label: 'Cloud Services', amount: '-₹4,200', color: 'text-white/60' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <div className="w-4 h-4 rounded bg-white/10" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] font-bold text-white truncate">{item.label}</p>
                <p className={cn("text-[10px] font-black", item.color)}>{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    {/* Secondary Screen / Floating Elements */}
    <div className="hidden lg:flex flex-col gap-4 relative z-10">
      <motion.div 
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-xl"
      >
        <h4 className="text-lg font-black text-white mb-1">We build <br /> Mobile Apps.</h4>
        <p className="text-white/30 text-[10px] max-w-[150px]">High-performance native and cross-platform applications.</p>
      </motion.div>
      <motion.div 
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20"><Rocket size={18} /></div>
        <div>
          <p className="text-sm font-black text-white">99.9%</p>
          <p className="text-[8px] text-white/40 font-bold uppercase">Crash-Free</p>
        </div>
      </motion.div>
    </div>
  </div>
);

// --- 4. SEO: Full Search Results Preview ---
const SEOPreview = () => (
  <div className="w-full h-full bg-[#020203] p-4 md:p-8 flex flex-col gap-4 md:gap-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />
    <div className="flex items-center justify-between relative z-10">
      <div className="space-y-1">
        <h4 className="text-base md:text-xl font-black text-white tracking-tighter">Search Growth</h4>
        <p className="text-white/30 text-[10px] md:text-sm">We rank your business #1 on Google.</p>
      </div>
      <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/5 border border-white/10 rounded-xl">
        <Search size={14} className="text-purple-500" />
        <div className="h-1 w-20 md:w-32 bg-white/10 rounded-full" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 md:gap-4 relative z-10">
      {[
        { label: 'Organic', value: '142k', growth: '+42%' },
        { label: 'Rankings', value: '#1', growth: 'Top 3' },
        { label: 'Authority', value: '78', growth: '+12' }
      ].map((item, i) => (
        <div key={i} className="p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-1 md:space-y-2">
          <p className="text-[7px] md:text-[8px] font-black text-white/20 uppercase tracking-widest">{item.label}</p>
          <div className="flex items-end justify-between gap-1 overflow-hidden">
            <span className="text-sm md:text-xl font-black text-white truncate">{item.value}</span>
            <span className="text-[7px] md:text-[8px] font-bold text-emerald-500 shrink-0">{item.growth}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex-grow bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-6 relative z-10 overflow-hidden">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <p className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-widest">SERP Performance</p>
        <div className="flex items-center gap-1.5 text-emerald-500 font-black text-[8px] md:text-[9px]"><TrendingUp size={10} /> +240%</div>
      </div>
      <div className="space-y-3 md:space-y-4">
        {[
          { kw: 'Best Tech Agency India', r: 'Rank #1' },
          { kw: 'Software Dev Mumbai', r: 'Rank #1' },
          { kw: 'Mobile App Solutions', r: 'Rank #2' }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-black text-[8px] md:text-[10px]">{i + 1}</div>
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs font-bold text-white group-hover:text-purple-400 transition-colors truncate">{item.kw}</p>
                <p className="text-[8px] md:text-[9px] text-white/20 font-bold uppercase mt-0.5">{item.r}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 5. Social Media: Full Campaign Preview ---
const SocialPreview = () => (
  <div className="w-full h-full bg-[#020203] p-4 md:p-8 flex flex-col gap-4 md:gap-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.05),transparent)]" />
    <div className="flex items-center justify-between relative z-10">
      <div className="space-y-0.5 md:space-y-1">
        <h4 className="text-base md:text-xl font-black text-white tracking-tight">Social Marketing</h4>
        <p className="text-[7px] md:text-[8px] text-white/30 font-bold uppercase tracking-widest">Brand Growth & Engagement</p>
      </div>
      <div className="flex -space-x-2 md:-space-x-2.5">
        {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#020203] bg-white/5" />)}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 md:gap-3 relative z-10">
      {[
        { l: 'Followers', v: '240k', i: Users, c: 'text-pink-500' },
        { l: 'Reach', v: '1.2M', i: TrendingUp, c: 'text-blue-500' },
        { l: 'Engagement', v: '8.4%', i: Heart, c: 'text-emerald-500' }
      ].map((item, i) => (
        <div key={i} className="p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
          <div className={cn("w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/5 mx-auto mb-2 md:mb-3 flex items-center justify-center", item.c)}><item.i size={14} /></div>
          <p className="text-base md:text-xl font-black text-white mb-0.5">{item.v}</p>
          <p className="text-[7px] md:text-[8px] font-bold text-white/20 uppercase tracking-widest">{item.l}</p>
        </div>
      ))}
    </div>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col justify-center gap-3 md:gap-4">
        <h5 className="text-base md:text-xl font-black text-white leading-tight">We grow your <br /> brand presence.</h5>
        <p className="text-white/40 text-[9px] md:text-[10px]">Strategic content and data-driven campaigns that drive results.</p>
        <div className="h-9 md:h-10 w-28 md:w-32 bg-pink-500 rounded-lg shadow-lg shadow-pink-500/20" />
      </div>
      <div className="hidden sm:flex flex-col gap-3">
        {[
          { label: 'Ad ROI', roi: '5.2x', color: 'bg-pink-500' },
          { label: 'Leads', roi: '84%', color: 'bg-blue-500' },
          { label: 'Conv.', roi: '12.4%', color: 'bg-emerald-500' }
        ].map((item, i) => (
          <div key={i} className="p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[8px] font-bold text-white/60">{item.label}</p>
              <p className="text-xs md:text-sm font-black text-white mt-0.5">{item.roi}</p>
            </div>
            <div className={cn("w-1 h-6 md:w-1.5 md:h-8 rounded-full", item.color)} />
          </div>
        ))}
      </div>
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
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] relative">
                 <motion.div 
                   animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 rounded-full bg-emerald-500"
                 />
               </div>
               <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">Core System: Optimal</span>
             </div>
             <div className="w-px h-5 bg-white/10" />
             <div className="text-[11px] font-mono text-white/20 tracking-tighter">INTERNAL_OS_V4.0</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[720px] bg-[#050505]">
          {/* --- Navigation Side Panel --- */}
          <div className="w-full md:w-[260px] flex flex-col border-b md:border-b-0 md:border-r border-white/5">
            <div className="p-4 md:p-5 pb-4">
              <h2 className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 md:mb-5">Service Ecosystem</h2>
              <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
                {simulationSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onMouseEnter={() => { setActiveStep(index); setIsAutoPlaying(false); }}
                    onClick={() => { setActiveStep(index); setIsAutoPlaying(false); }}
                    className={cn(
                      "flex-shrink-0 md:w-full text-left p-3 md:p-3.5 rounded-xl transition-all duration-500 flex items-center gap-3 md:gap-3.5 border",
                      activeStep === index 
                        ? "bg-white/[0.03] border-white/10 shadow-2xl scale-[1.02] z-10" 
                        : "bg-transparent border-transparent grayscale opacity-40 hover:opacity-100 hover:grayscale-0 hover:bg-white/[0.01]"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-700 relative overflow-hidden",
                      activeStep === index ? "bg-accent text-white rotate-[360deg] shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-[#0a0a0b] text-white/40"
                    )}>
                      {activeStep === index && (
                        <motion.div 
                          layoutId="icon-glow"
                          className="absolute inset-0 bg-white/20 blur-lg"
                        />
                      )}
                      <step.icon size={14} className="relative z-10 md:size-[16px]" />
                    </div>
                    <div className="flex-grow min-w-0 relative z-10 hidden md:block">
                      <h4 className={cn("text-xs font-black transition-colors mb-0.5", activeStep === index ? "text-white" : "text-white/40")}>{step.title}</h4>
                      <p className="text-[8px] text-white/20 font-bold uppercase tracking-wider">{step.metric}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* --- Power Status --- */}
            <div className="hidden md:flex mt-auto p-5 border-t border-white/5 bg-[#080809] flex-col">
               <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2 font-black text-[8px] text-white/40 uppercase tracking-widest"><Activity size={10} className="text-accent" /> System Performance</div>
                 <span className="text-[9px] font-mono text-accent">99.9%</span>
               </div>
               <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                 <motion.div animate={{ width: ['20%', '85%', '40%', '95%', '60%'] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-full bg-accent relative z-10" />
               </div>
            </div>
          </div>

          {/* --- Main Simulation Display --- */}
          <div className="flex-grow p-4 md:p-7 flex flex-col relative overflow-hidden bg-[#020203]">
             {/* Dynamic Heading */}
             <div className="mb-4 md:mb-5 relative z-10">
               <motion.div key={`lbl-${currentStep.id}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2.5 mb-1.5">
                 <span className="h-px w-6 bg-accent" />
                 <span className="text-[9px] font-black text-accent uppercase tracking-[0.4em]">{currentStep.label}</span>
               </motion.div>
               <motion.h3 key={`tit-${currentStep.id}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-lg md:text-2xl font-black text-white leading-tight tracking-tight">
                 {currentStep.title}
               </motion.h3>
             </div>

             {/* UI Preview Container */}
             <div className="h-[450px] md:h-auto md:flex-grow relative z-10 rounded-lg overflow-hidden bg-[#050505]">
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-20 pointer-events-none"
                />
                <AnimatePresence mode="wait">
                   <DynamicPreview type={currentStep.id} />
                </AnimatePresence>
             </div>

             {/* Functional Footer */}
             <div className="mt-4 md:mt-5 flex items-center justify-between border-t border-white/5 pt-4 md:pt-5 relative z-10">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center p-1">
                   <div className="w-full h-full rounded-full border border-accent/40 flex items-center justify-center animate-spin-slow"><Zap size={12} className="text-accent md:size-[14px]" /></div>
                 </div>
                 <div>
                   <p className="text-[8px] md:text-[9px] font-black text-white tracking-widest uppercase">System Status: Active</p>
                   <p className="text-[7px] md:text-[8px] text-white/30 font-bold">Uptime: 99.9% | Global Infrastructure</p>
                 </div>
               </div>
               <div className="hidden sm:flex -space-x-2.5">
                 {[1, 2, 3, 4].map(i => <div key={i} className="w-7 h-7 rounded-full border-[2px] border-[#020203] bg-white/5 flex items-center justify-center text-white/20 font-black text-[8px]">{i}</div>)}
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