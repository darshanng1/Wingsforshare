import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ArrowRight, Sparkles, Zap, Shield, Globe, Play, Layers, 
  Users, MessageSquare, CheckCircle, Star, TrendingUp, 
  Award, Clock, BarChart3, ArrowUpRight, ShieldCheck,
  Monitor, Smartphone, Rocket, Search, Target, Briefcase,
  Building2, ShoppingBag, HardHat, Store, Laptop, Tablet,
  Phone, Video, Send, ChevronRight, Layout, Cpu, Database,
  BarChart, ShoppingCart, MessageCircle, Bell, Activity
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import MeetingBooking from '../components/MeetingBooking';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  const solutions = [
    {
      icon: <Cpu className="text-blue-500" />,
      title: 'Custom App Development',
      desc: 'Tailored software solutions built from the ground up to solve your unique business challenges.'
    },
    {
      icon: <Layers className="text-emerald-500" />,
      title: 'Ready-Made Apps',
      desc: 'Pre-built, high-performance SaaS tools and applications ready for instant deployment.'
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: 'Business Automation Tools',
      desc: 'Smart systems that automate repetitive tasks, reducing manual work and increasing efficiency.'
    },
    {
      icon: <ShoppingCart className="text-purple-500" />,
      title: 'Ecommerce Websites',
      desc: 'Scalable online stores with advanced product management and secure payment integrations.'
    },
    {
      icon: <BarChart className="text-pink-500" />,
      title: 'Business Intelligence Dashboards',
      desc: 'Powerful data visualization tools that turn raw information into actionable business insights.'
    }
  ];

  const industries = [
    { 
      icon: <HardHat />, 
      name: 'Pest Control', 
      desc: 'Field service automation, route tracking, customer CRM, and reporting dashboards.',
      tech: ['Business Automation', 'CRM System', 'Analytics Dashboard']
    },
    { 
      icon: <Building2 />, 
      name: 'Manufacturing', 
      desc: 'Inventory systems, production tracking, supplier management, and analytics dashboards.',
      tech: ['Web Platform', 'Analytics Dashboard', 'Business Automation']
    },
    { 
      icon: <ShoppingBag />, 
      name: 'Retail', 
      desc: 'E-commerce platforms, digital marketing automation, and customer analytics.',
      tech: ['Web Platform', 'CRM System', 'Analytics Dashboard']
    },
    { 
      icon: <Briefcase />, 
      name: 'Professional Services', 
      desc: 'CRM systems, lead tracking, and marketing performance dashboards.',
      tech: ['CRM System', 'Analytics Dashboard', 'Web Platform']
    }
  ];

  const whyChooseUs = [
    { 
      title: 'Website Development for Business Growth', 
      desc: 'Modern business website development designed to attract customers and generate high-quality leads.' 
    },
    { 
      title: 'SEO & Digital Marketing Systems', 
      desc: 'Comprehensive SEO optimization services, content strategy, and marketing automation to scale your reach.' 
    },
    { 
      title: 'Business Automation Tools', 
      desc: 'Automate operations, customer workflows, and internal processes with our custom business automation tools.' 
    },
    { 
      title: 'Custom Business Applications', 
      desc: 'Tailored custom business software solutions built to solve your unique operational challenges.' 
    },
    { 
      title: 'Data Analytics & Performance Tracking', 
      desc: 'Interactive data analytics dashboards to measure growth, track KPIs, and improve business decisions.' 
    }
  ];

  return (
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 md:pb-24 overflow-visible">
        <motion.div style={{ opacity }} className="absolute inset-0 -z-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 dark:from-emerald-500/5 via-transparent to-transparent blur-3xl opacity-50" />
          <motion.div 
            animate={{ 
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-emerald-500/5 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              y: [0, -70, 0],
              x: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-64 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-blue-500/5 rounded-full blur-[160px]" 
          />
          <motion.div 
            animate={{ 
              y: [0, -70, 0],
              x: [0, -40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" 
          />
        </motion.div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-6 md:mb-8 border border-black/5 dark:border-white/10 backdrop-blur-sm"
              >
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">WingsForShare Business Technology Partner</span>
              </motion.div>
              
              <div className="mb-6 md:mb-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-4"
                >
                  Technology Systems That <br className="hidden md:block" />
                  <span className="relative inline-block">
                    <span className="text-emerald-500 italic">Grow Your Business</span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-emerald-500/20 origin-left rounded-full -z-10"
                    />
                  </span>
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-black/60 dark:text-white/60 max-w-xl mb-10 md:mb-12 leading-relaxed"
              >
                We help businesses scale using modern websites, digital marketing systems, automation tools, analytics platforms, and custom applications.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-16"
              >
                <a 
                  href="#consultation" 
                  className="group relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 md:py-5 rounded-2xl font-bold text-base transition-all flex items-center justify-center space-x-2 shadow-2xl shadow-black/20 dark:shadow-white/10 overflow-hidden hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#products" 
                  className="group bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-base hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-95"
                >
                  <Layout size={18} className="text-emerald-500 group-hover:rotate-12 transition-transform" />
                  <span>View Live Product Demos</span>
                </a>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-black/5 dark:border-white/10 pt-8 md:pt-12">
                {[
                  { label: 'Website Development', icon: <Globe size={12} /> },
                  { label: 'SEO Optimization', icon: <Search size={12} /> },
                  { label: 'Digital Marketing', icon: <Target size={12} /> },
                  { label: 'Business Automation', icon: <Zap size={12} /> },
                  { label: 'Analytics Dashboards', icon: <BarChart3 size={12} /> },
                  { label: 'Custom Applications', icon: <Cpu size={12} /> }
                ].map((cap, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    className="flex items-center space-x-2 text-black/60 dark:text-white/60"
                  >
                    <div className="w-5 h-5 rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center text-emerald-500">
                      {cap.icon}
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">{cap.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Code Editor + Live Preview Visual */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/20 border border-black/5 dark:border-white/10 bg-[#0d1117] aspect-[4/3] flex flex-col">
                {/* Editor Header */}
                <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center justify-between px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono">GrowthEngine.ts — wings-biz-pro</div>
                  <div className="w-12" />
                </div>
                
                <div className="flex-grow flex overflow-hidden">
                  {/* Code Area */}
                  <div className="w-1/2 p-6 font-mono text-[11px] leading-relaxed border-r border-white/5 overflow-hidden">
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">1</span>
                      <span className="text-purple-400">import</span>
                      <span className="text-blue-300">{" { "}</span>
                      <span className="text-emerald-400">GrowthEngine</span>
                      <span className="text-blue-300">{" } "}</span>
                      <span className="text-purple-400">from</span>
                      <span className="text-orange-300">"@wings/growth"</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">2</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">3</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-emerald-400">bizConfig</span>
                      <span className="text-blue-300">=</span>
                      <span className="text-blue-300">{" { "}</span>
                    </div>
                    <div className="flex space-x-4 pl-8">
                      <span className="text-white/20 select-none">4</span>
                      <span className="text-blue-300">seo:</span>
                      <span className="text-orange-300">"optimized"</span>
                      <span className="text-blue-300">,</span>
                    </div>
                    <div className="flex space-x-4 pl-8">
                      <span className="text-white/20 select-none">5</span>
                      <span className="text-blue-300">marketing:</span>
                      <span className="text-orange-300">"automated"</span>
                      <span className="text-blue-300">,</span>
                    </div>
                    <div className="flex space-x-4 pl-8">
                      <span className="text-white/20 select-none">6</span>
                      <span className="text-blue-300">analytics:</span>
                      <span className="text-orange-300">"real-time"</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">7</span>
                      <span className="text-blue-300">{" } "}</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">8</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">9</span>
                      <span className="text-purple-400">export default function</span>
                      <span className="text-emerald-400">GrowthApp</span>
                      <span className="text-blue-300">() {" { "}</span>
                    </div>
                    <div className="flex space-x-4 pl-8">
                      <span className="text-white/20 select-none">10</span>
                      <span className="text-purple-400">return</span>
                      <span className="text-blue-300">{" ( "}</span>
                    </div>
                    <div className="flex space-x-4 pl-12">
                      <span className="text-white/20 select-none">11</span>
                      <span className="text-blue-300">{" < "}</span>
                      <span className="text-emerald-400">GrowthEngine</span>
                      <span className="text-blue-300">{" {...bizConfig} /> "}</span>
                    </div>
                    <div className="flex space-x-4 pl-8">
                      <span className="text-white/20 select-none">12</span>
                      <span className="text-blue-300">{" ) "}</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-white/20 select-none">13</span>
                      <span className="text-blue-300">{" } "}</span>
                    </div>
                  </div>


                  {/* Live Preview Area */}
                  <div className="w-1/2 bg-white dark:bg-[#0a0a0a] p-4 flex flex-col relative overflow-hidden border-l border-black/5 dark:border-white/5">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/5 dark:border-white/5">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-wider">Live Growth Engine</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 rounded bg-black/5 dark:bg-white/5 flex items-center justify-center">
                          <Users size={8} className="text-black/40 dark:text-white/40" />
                        </div>
                        <div className="w-4 h-4 rounded bg-black/5 dark:bg-white/5 flex items-center justify-center">
                          <Bell size={8} className="text-black/40 dark:text-white/40" />
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex-grow flex flex-col space-y-3 overflow-hidden">
                      {/* Top Stats Row */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                          <p className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Leads</p>
                          <p className="text-xs font-bold text-black dark:text-white">+124</p>
                        </div>
                        <div className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
                          <p className="text-[8px] font-bold text-blue-600 dark:text-blue-400 uppercase">Conv.</p>
                          <p className="text-xs font-bold text-black dark:text-white">18.2%</p>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-500/5 border border-purple-500/10">
                          <p className="text-[8px] font-bold text-purple-600 dark:text-purple-400 uppercase">SEO</p>
                          <p className="text-xs font-bold text-black dark:text-white">#1</p>
                        </div>
                      </div>

                      {/* Main Chart Section */}
                      <div className="flex-grow p-3 rounded-xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[8px] font-bold text-black/40 dark:text-white/40 uppercase">Growth Trend</span>
                          <TrendingUp size={10} className="text-emerald-500" />
                        </div>
                        <div className="flex-grow flex items-end space-x-1 pt-2">
                          {[30, 45, 35, 60, 50, 80, 65, 90, 75].map((h, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                              className="flex-grow bg-gradient-to-t from-emerald-500/40 to-emerald-500/10 rounded-t-[2px]" 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row: Leads & Workflows */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Recent Activity */}
                        <div className="p-2 rounded-xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                          <p className="text-[7px] font-bold text-black/40 dark:text-white/40 uppercase mb-2">Recent Leads</p>
                          <div className="space-y-1.5">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10" />
                                <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded" />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Workflows */}
                        <div className="p-2 rounded-xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                          <p className="text-[7px] font-bold text-black/40 dark:text-white/40 uppercase mb-2">Workflows</p>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <div className="h-1 w-8 bg-emerald-500/20 rounded" />
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-1 w-10 bg-blue-500/20 rounded" />
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="h-1 w-6 bg-purple-500/20 rounded" />
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Connection Lines (Subtle) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                      <motion.path 
                        d="M 0 100 Q 100 50 200 100" 
                        stroke="url(#grad)" 
                        strokeWidth="1" 
                        fill="none"
                        animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating UI Panels */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl shadow-2xl z-20 w-48 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                    <Target size={16} />
                  </div>
                  <p className="text-[10px] font-bold text-black dark:text-white uppercase tracking-widest">Marketing ROI</p>
                </div>
                <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-3/4" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl shadow-2xl z-20 w-48 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-[10px] font-bold text-black dark:text-white uppercase tracking-widest">Growth Analytics</p>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-4 w-1 bg-blue-500/40 rounded-full" />)}
                </div>
              </motion.div>

              {/* Decorative Tech Overlay */}
              <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Demos Ticker */}
      <section className="py-8 md:py-12 bg-black text-white border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...products, ...products].map((product, idx) => (
            <div key={idx} className="flex items-center space-x-4 px-8 md:px-12 border-r border-white/10">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60">{product.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding relative border-y border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 md:mb-6">Our Solutions</h2>
            <h3 className="mb-4 md:mb-6">Customized & <span className="text-black/40 dark:text-white/40">Ready-Made</span></h3>
            <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              We provide a full spectrum of digital tools to power your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 bg-white dark:bg-[#111] rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(sol.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 md:mb-4 tracking-tight">{sol.title}</h4>
                <p className="text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed mb-6 md:mb-8">{sol.desc}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Showcase Section */}
      <section id="products" className="section-padding bg-black text-white relative overflow-hidden">
        <motion.div 
          style={{ y: springY1, opacity: 0.1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </motion.div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Live Demo Showcase</h2>
            <h3 className="mb-6 md:mb-8">Explore Our <br /> <span className="text-white/40">Working Apps</span></h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Don't just take our word for it. Interact with our live demos and see the quality of our work firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Across Industries Section */}
      <section id="portfolio" className="section-padding bg-white dark:bg-[#0a0a0a] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-500 mb-6">Industry Expertise</h2>
              <h3 className="mb-8 leading-tight">
                How We Transform <br /> 
                <span className="text-black/40 dark:text-white/40">Businesses with Technology</span>
              </h3>
              <p className="text-black/60 dark:text-white/60 mb-10 md:mb-12 leading-relaxed">
                We build systems that help businesses automate operations, analyze data, and grow faster through digital platforms.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {industries.map((ind, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-6 md:p-8 bg-black/[0.02] dark:bg-white/[0.02] rounded-[1.5rem] md:rounded-[2rem] border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-black dark:bg-white text-white dark:text-black rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                        {React.cloneElement(ind.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <h4 className="text-lg md:text-xl font-bold text-black dark:text-white">{ind.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {ind.tech.map((t, i) => (
                              <span key={i} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">{ind.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0">
              {/* Dynamic Business Software Visual - Wings Growth Engine */}
              <div className="relative z-10 aspect-square rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col">
                {/* App Header */}
                <div className="h-12 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-gray-50/50 dark:bg-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Cpu size={12} className="text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Wings Growth Engine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 h-6 bg-black/5 dark:bg-white/5 rounded-full flex items-center px-2">
                      <Search size={10} className="text-black/20 dark:text-white/20 mr-2" />
                      <div className="h-1 w-12 bg-black/10 dark:bg-white/10 rounded" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20" />
                  </div>
                </div>

                <div className="flex-grow flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-12 border-r border-black/5 dark:border-white/5 flex flex-col items-center py-6 space-y-6 bg-gray-50/30 dark:bg-white/[0.02]">
                    <Layout size={14} className="text-emerald-500" />
                    <Users size={14} className="text-black/20 dark:text-white/20" />
                    <Target size={14} className="text-black/20 dark:text-white/20" />
                    <Search size={14} className="text-black/20 dark:text-white/20" />
                    <Cpu size={14} className="text-black/20 dark:text-white/20" />
                    <div className="flex-grow" />
                    <Bell size={14} className="text-black/20 dark:text-white/20" />
                  </div>

                  {/* Main Dashboard Area */}
                  <div className="flex-grow p-6 overflow-hidden flex flex-col space-y-4">
                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Traffic</span>
                          <TrendingUp size={10} className="text-emerald-500" />
                        </div>
                        <p className="text-sm font-bold text-black dark:text-white">+42.5%</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 uppercase">Leads</span>
                          <Users size={10} className="text-blue-500" />
                        </div>
                        <p className="text-sm font-bold text-black dark:text-white">1,284</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-bold text-purple-600 dark:text-purple-400 uppercase">ROI</span>
                          <Activity size={10} className="text-purple-500" />
                        </div>
                        <p className="text-sm font-bold text-black dark:text-white">3.8x</p>
                      </div>
                    </div>

                    {/* Main Chart: Growth Analytics */}
                    <div className="flex-grow p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-black dark:text-white">Growth Analytics</span>
                          <span className="text-[8px] text-black/40 dark:text-white/40">Marketing Performance Tracker</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-[8px] font-bold">7D</div>
                          <div className="px-2 py-1 rounded bg-emerald-500 text-white text-[8px] font-bold">30D</div>
                        </div>
                      </div>
                      <div className="flex-grow flex items-end space-x-1.5 pt-2">
                        {[35, 55, 40, 75, 60, 95, 80, 100, 85, 110, 90, 120].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${(h/120)*100}%` }}
                            transition={{ delay: i * 0.05, duration: 0.8 }}
                            className={`flex-grow rounded-t-sm ${i === 11 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: CRM & Automation */}
                    <div className="grid grid-cols-2 gap-4 h-32">
                      {/* CRM List */}
                      <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 overflow-hidden">
                        <span className="text-[8px] font-bold text-black/40 dark:text-white/40 uppercase block mb-3">Recent Leads</span>
                        <div className="space-y-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/5" />
                                <div className="h-1.5 w-12 bg-black/10 dark:bg-white/10 rounded" />
                              </div>
                              <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Automation Workflow */}
                      <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                        <span className="text-[8px] font-bold text-black/40 dark:text-white/40 uppercase block mb-3">Active Workflows</span>
                        <div className="flex-grow flex flex-col justify-center space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                              <Zap size={10} />
                            </div>
                            <div className="flex-grow h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: [-50, 100] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="h-full w-1/3 bg-purple-500"
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                              <MessageCircle size={10} />
                            </div>
                            <div className="flex-grow h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: [-50, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="h-full w-1/4 bg-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating SEO Tracker Overlay */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-8 w-40 p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 z-20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-500">SEO Ranking</span>
                    <Search size={10} className="text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-1 w-12 bg-black/10 dark:bg-white/10 rounded" />
                      <span className="text-[10px] font-bold text-emerald-500">#1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-1 w-16 bg-black/10 dark:bg-white/10 rounded" />
                      <span className="text-[10px] font-bold text-emerald-500">#3</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Background */}
              <div className="absolute -inset-10 bg-emerald-500/5 blur-[100px] -z-10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-black/[0.03] dark:border-white/[0.03] rounded-full -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-black/[0.02] dark:border-white/[0.02] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[2rem] md:rounded-[3rem] border border-white/10 p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="relative z-10">
                  <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-emerald-500">Business Growth Systems</h4>
                  <p className="text-base md:text-xl text-white/80 leading-relaxed mb-8 md:mb-10">
                    We design digital systems that help businesses generate leads, streamline operations, and scale using modern technology.
                  </p>
                  
                  <div className="space-y-3 md:space-y-4">
                    {[
                      'Lead Generation Systems',
                      'Digital Marketing Infrastructure',
                      'Business Process Automation',
                      'Custom Business Applications'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-base md:text-lg font-medium text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-500 mb-6">Why Businesses Choose Us</h2>
              <h3 className="mb-8 md:mb-10 leading-[1.1] md:leading-[0.9]">Technology Systems <br /> <span className="text-white/40">That Help Businesses Grow</span></h3>
              
              <div className="space-y-6 md:space-y-8">
                {whyChooseUs.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4 md:space-x-6 group"
                  >
                    <div className="w-10 h-10 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-500 transition-colors duration-300">
                      <CheckCircle size={20} className="text-emerald-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-sm md:text-base text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Meeting Section */}
      <section id="consultation" className="section-padding bg-black/[0.01] dark:bg-white/[0.01] relative overflow-hidden border-y border-black/5 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 md:mb-6">Project Planning</h2>
            <h3 className="mb-4 md:mb-6">Start Your <span className="text-black/40 dark:text-white/40">Digital Transformation</span></h3>
            <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              Choose the best way to start your project. Fill out our inquiry form for a quick quote or book a direct strategy session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ConsultationForm />
            <MeetingBooking />
          </div>
        </div>
      </section>

      {/* Contact & Final CTA Section */}
      <section id="contact" className="section-padding bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main CTA Header */}
            <div className="text-center mb-20 md:mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-8 border border-emerald-500/20"
              >
                <Rocket size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Ready to Scale?</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-8 leading-[1.1] md:leading-[0.85] text-5xl md:text-8xl font-bold tracking-tighter"
              >
                Let's Build Your <br /> 
                <span className="relative inline-block">
                  <span className="text-black/40 dark:text-white/40 italic serif">Digital Future</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500/30 rounded-full" />
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-2xl text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed"
              >
                Join successful businesses using our technology systems to automate, analyze, and grow. 
                Choose your preferred way to connect.
              </motion.p>
            </div>
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
              {/* Call Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-10 md:p-16 bg-white dark:bg-[#111] rounded-[3rem] border border-black/5 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] dark:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.02)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:rotate-6 transition-transform duration-500">
                    <Phone size={28} />
                  </div>
                  
                  <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Direct Consultation</h4>
                  <p className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10 tracking-tighter">+91 86187 64541</p>
                  
                  <div className="space-y-4 mb-12">
                    {['Instant response', 'Technical guidance', 'Project scoping'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-sm font-medium text-black/60 dark:text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="tel:+918618764541" 
                    className="inline-flex items-center justify-center space-x-3 w-full bg-black dark:bg-white text-white dark:text-black px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/10"
                  >
                    <span>Call Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-10 md:p-16 bg-white dark:bg-[#111] rounded-[3rem] border border-black/5 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] dark:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.02)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-[#25D366]/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:-rotate-6 transition-transform duration-500">
                    <MessageSquare size={28} />
                  </div>
                  
                  <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">WhatsApp Support</h4>
                  <p className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10 tracking-tighter">+91 86187 64541</p>
                  
                  <div className="space-y-4 mb-12">
                    {['24/7 Availability', 'Quick queries', 'Portfolio sharing'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-[#25D366]" />
                        <span className="text-sm font-medium text-black/60 dark:text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="https://wa.me/918618764541" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center space-x-3 w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Trust Badges Bar */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-12 border-t border-black/5 dark:border-white/10">
              {[
                { icon: <ShieldCheck size={18} />, text: 'Secure Systems' },
                { icon: <Zap size={18} />, text: 'Fast Deployment' },
                { icon: <TrendingUp size={18} />, text: 'Growth Focused' },
                { icon: <Globe size={18} />, text: 'Global Support' }
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-3 text-black/40 dark:text-white/40"
                >
                  <div className="text-emerald-500">{badge.icon}</div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
