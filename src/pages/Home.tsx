import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
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
import SEO from '../components/SEO';
import { ASSETS } from '../constants/assets';

// --- Mini Mockup Components for Floating Cards ---

const MiniWebMockup = () => (
  <div className="mt-3 w-full aspect-[16/10] bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex flex-col shadow-2xl relative group-hover/card:border-emerald-500/30 transition-colors">
    <div className="h-3 bg-slate-50 dark:bg-slate-900 border-b border-black/5 dark:border-white/5 flex items-center px-2 space-x-1">
      <div className="w-1 h-1 rounded-full bg-red-400/60" />
      <div className="w-1 h-1 rounded-full bg-amber-400/60" />
      <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
    </div>
    <div className="flex flex-grow">
      <div className="w-6 border-r border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 p-1 space-y-1">
        <div className="h-1 w-full bg-emerald-500/20 rounded-full" />
        <div className="h-1 w-2/3 bg-black/5 dark:bg-white/5 rounded-full" />
        <div className="h-1 w-3/4 bg-black/5 dark:bg-white/5 rounded-full" />
      </div>
      <div className="flex-grow p-2 space-y-2">
        <div className="h-2 w-3/4 bg-emerald-500/10 rounded-sm" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-video bg-emerald-500/5 rounded-sm border border-emerald-500/10" />
          <div className="aspect-video bg-black/5 dark:bg-white/5 rounded-sm" />
        </div>
        <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full" />
      </div>
    </div>
  </div>
);

const MiniAppMockup = () => (
  <div className="mt-3 w-20 mx-auto aspect-[9/16] bg-[#0a0a0a] rounded-2xl p-1.5 border border-white/10 shadow-2xl relative group-hover/card:border-blue-500/30 transition-colors">
    <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-[#0d0d0d] flex flex-col relative">
      <div className="h-2 bg-blue-500 w-full flex items-center justify-center">
        <div className="w-4 h-0.5 bg-white/30 rounded-full" />
      </div>
      <div className="p-2 space-y-2">
        <div className="h-8 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-blue-500/20" />
        </div>
        <div className="space-y-1">
          <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full" />
          <div className="h-1 w-2/3 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="h-4 bg-black/5 dark:bg-white/5 rounded-md" />
          <div className="h-4 bg-black/5 dark:bg-white/5 rounded-md" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-slate-50 dark:bg-slate-900 border-t border-black/5 dark:border-white/5 flex items-center justify-around px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  </div>
);

const MiniBIMockup = () => (
  <div className="mt-3 w-full aspect-[16/10] bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 p-2.5 flex flex-col shadow-2xl relative group-hover/card:border-orange-500/30 transition-colors">
    <div className="flex justify-between items-center mb-2">
      <div className="h-1.5 w-10 bg-orange-500/20 rounded-full" />
      <div className="text-[8px] font-black text-orange-500">84%</div>
    </div>
    <div className="flex-grow flex items-end space-x-1.5">
      {[30, 60, 45, 80, 55, 95].map((h, i) => (
        <div
          key={i}
          className={`flex-grow rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-orange-500' : 'bg-orange-500/20'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="absolute top-6 left-2 right-2 h-8 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 40">
        <path
          d="M0 35 Q 20 10, 40 25 T 80 5 T 100 15"
          fill="none"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

const MiniSEOMockup = () => (
  <div className="mt-3 w-full p-2 bg-white dark:bg-slate-950 rounded-lg border border-black/10 dark:border-white/10 shadow-2xl relative group-hover/card:border-emerald-500/30 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <div className="h-1 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
      <span className="text-[8px] font-black text-emerald-500">#1 Rank</span>
    </div>
    <div className="flex items-end gap-1 h-10">
      {[20, 40, 30, 60, 50, 80, 70, 100].map((h, i) => (
        <div
          key={i}
          className={`flex-grow rounded-t-[1px] ${i === 7 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="mt-2 flex justify-between items-center">
      <div className="h-1 w-12 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="flex items-center gap-0.5">
        <TrendingUp size={8} className="text-emerald-500" />
        <span className="text-[6px] font-bold text-emerald-500">+124%</span>
      </div>
    </div>
  </div>
);

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

  // 3D Tilt & Parallax Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Parallax for text and background
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], [15, -15]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);

  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const solutions = [
    {
      icon: <Globe className="text-emerald-500" />,
      title: 'Web Development',
      desc: 'High-performance, SEO-optimized websites designed to convert visitors into loyal customers.',
      href: '/services/web-development'
    },
    {
      icon: <Smartphone className="text-blue-500" />,
      title: 'App Development',
      desc: 'Custom mobile applications for iOS and Android with a focus on seamless user experience.',
      href: '/services/app-development'
    },
    {
      icon: <TrendingUp className="text-orange-500" />,
      title: 'SEO & Growth',
      desc: 'Data-driven SEO and digital marketing strategies to scale your organic reach and revenue.',
      href: '/services/seo-growth'
    },
    {
      icon: <BarChart className="text-purple-500" />,
      title: 'Business Intelligence',
      desc: 'Advanced analytics and BI tools to transform your raw data into actionable business insights.',
      href: '/services/business-intelligence'
    },
    {
      icon: <Cpu className="text-emerald-500" />,
      title: 'Custom Software',
      desc: 'Tailor-made software solutions built to solve your unique business challenges and workflows.',
      href: '/services/custom-software'
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: 'Digital Transformation',
      desc: 'Modernizing your business with cutting-edge technology to stay ahead in a digital-first world.',
      href: '/services/digital-transformation'
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
      name: 'Real Estate',
      desc: 'Lead management, property portals, automated follow-ups, and virtual tour integrations.',
      tech: ['Lead Generation', 'Property Portal', 'Marketing Automation']
    },
    {
      icon: <ShoppingCart />,
      name: 'E-commerce',
      desc: 'High-conversion stores, inventory management, multi-channel selling, and customer loyalty.',
      tech: ['E-commerce Platform', 'Inventory Sync', 'Customer Analytics']
    }
  ];

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

  return (
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <SEO
        title="Wings Technology - Software, Web, App & Growth Agency"
        description="Wings Technology helps businesses scale through custom software, high-performance web development, mobile apps, and data-driven growth strategies."
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[80vh] md:min-h-screen flex items-center pt-12 md:pt-32 pb-8 md:pb-24 overflow-hidden hero-text"
      >
        {/* Background Video/Effects */}
        <motion.div
          style={{
            opacity,
            x: bgX,
            y: bgY
          }}
          className="absolute inset-0 -z-20 pointer-events-none scale-110"
        >
          <div className="absolute inset-0 bg-white/70 dark:bg-black/60 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-30"
          >
            <source src={ASSETS.VIDEOS.TECH_BACKGROUND} type="video/mp4" />
          </video>

          {/* Whiteboard / Design Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 dark:from-emerald-500/5 via-transparent to-transparent blur-3xl opacity-50" />
        </motion.div>

        <div className="container-custom mt-10 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              style={{ x: textX, y: textY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
             {/* Removed badge line */}
              <div className="mb-6 md:mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-gray-900 dark:text-white"
                >
                  Grow Your <br className="hidden md:block" />
                  Business with <br className="hidden md:block" />
                  <span className="text-emerald-500">Smart Tech.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10 font-medium tracking-tight"
              >
                “We drive business growth through scalable web platforms, high-performing mobile apps, strategic SEO, and actionable data intelligence and more.”
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
              >
                <Link
                  to="/start-project"
                  className="group relative px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center space-x-3 overflow-hidden hover:scale-[1.02] active:scale-95 shadow-[0_15px_40px_rgba(16,185,129,0.3)] dark:shadow-[0_15px_40px_rgba(16,185,129,0.15)] tracking-tighter"
                >
                  {/* Primary Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 transition-transform duration-500 group-hover:scale-110" />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  </div>

                  <span className="relative z-10 text-white tracking-tight">Get Consultation</span>
                  <ArrowRight size={18} className="relative z-10 text-white group-hover:translate-x-1.5 transition-transform duration-300" />

                  {/* Outer Glow Bloom */}
                  <div className="absolute -inset-2 bg-emerald-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>

                <a
                  href="#portfolio"
                  className="group relative px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center space-x-3 overflow-hidden border border-black/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:scale-[1.02] active:scale-95 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-xl hover:shadow-emerald-500/10 tracking-tighter"
                >
                  <span className="relative z-10 text-gray-900 dark:text-white">View Our Work</span>
                  <ChevronRight size={18} className="relative z-10 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />

                  {/* Subtle Background Hover */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>

              {/* Service Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-wrap gap-3 mb-12 md:mb-16"
              >
                {[
                  'Website Development',
                  'Mobile Apps',
                  'SEO & Growth',
                  'Business Intelligence'
                ].map((tag, i) => (
                  <div key={i} className="flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span>{tag}</span>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            <motion.div
              style={{
                scale,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1200
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative block"
            >
              {/* Whiteboard / Design Elements Background */}
              <div className="absolute inset-0 -z-10 overflow-visible hidden lg:block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 border border-emerald-500/10 rounded-full border-dashed"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
              </div>

              {/* Main Composition Container */}
              <div className="relative w-full aspect-square lg:aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center">
                {/* Glow Background */}
                <div className="absolute w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-emerald-500/10 blur-[80px] lg:blur-[120px] rounded-full -z-10"></div>

                {/* CENTRAL FOCUS: Mobile Device Mockup */}
                <motion.div
                  style={{ translateZ: 150 }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-30 w-48 lg:w-64 aspect-[9/19] rounded-[2.5rem] lg:rounded-[3rem] bg-[#1a1a1a] p-2.5 lg:p-3 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10"
                >
                  <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-gray-50 dark:bg-[#0d0d0d] flex flex-col">
                    {/* App Header */}
                    <div className="h-12 lg:h-14 bg-emerald-500 px-4 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                          <Cpu size={12} className="text-white" />
                        </div>
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">Wings OS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bell size={12} className="text-white/70" />
                        <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-grow p-3 lg:p-4 space-y-3 lg:space-y-4 overflow-hidden">
                      {/* Stat Cards */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white dark:bg-white/5 p-2 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                          <span className="text-[7px] font-bold text-gray-400 uppercase block mb-1">Revenue</span>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-gray-900 dark:text-white">$12.4k</span>
                            <TrendingUp size={8} className="text-emerald-500" />
                          </div>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-2 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                          <span className="text-[7px] font-bold text-gray-400 uppercase block mb-1">Growth</span>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-gray-900 dark:text-white">+18%</span>
                            <Activity size={8} className="text-blue-500" />
                          </div>
                        </div>
                      </div>

                      {/* Chart Section */}
                      <div className="bg-white dark:bg-white/5 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-black text-gray-900 dark:text-white">Performance</span>
                          <span className="text-[7px] text-emerald-500 font-bold">Live</span>
                        </div>
                        <div className="flex items-end gap-1 h-12">
                          {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-grow rounded-t-[2px] ${i === 7 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* List Section */}
                      <div className="space-y-2">
                        <span className="text-[8px] font-black text-gray-400 uppercase block">Recent Activity</span>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between bg-white dark:bg-white/5 p-2 rounded-lg border border-black/5 dark:border-white/5">
                            <div className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${i === 1 ? 'bg-emerald-500/10 text-emerald-500' : i === 2 ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                                {i === 1 ? <ShoppingCart size={10} /> : i === 2 ? <Users size={10} /> : <Zap size={10} />}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[8px] font-bold text-gray-900 dark:text-white">{i === 1 ? 'New Sale' : i === 2 ? 'New User' : 'System Update'}</span>
                                <span className="text-[6px] text-gray-400">2 mins ago</span>
                              </div>
                            </div>
                            <ChevronRight size={8} className="text-gray-300" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tab Bar */}
                    <div className="h-10 lg:h-12 bg-white dark:bg-white/5 border-t border-black/5 dark:border-white/5 flex items-center justify-around px-4 shrink-0">
                      <Layout size={12} className="text-emerald-500" />
                      <BarChart size={12} className="text-gray-400" />
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 -mt-4 border-4 border-gray-50 dark:border-[#0d0d0d]">
                        <Rocket size={12} className="text-white" />
                      </div>
                      <Users size={12} className="text-gray-400" />
                      <Bell size={12} className="text-gray-400" />
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-5 lg:h-6 bg-[#1a1a1a] rounded-b-2xl" />
                </motion.div>

                {/* 3. Floating Premium Cards */}
                <div className="absolute inset-0 z-40 pointer-events-none">
                  {/* Web Development Card - Top Left */}
                  <motion.div
                    style={{ translateZ: 200 }}
                    animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] -left-4 lg:-top-10 lg:-left-20 bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-xl p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 w-40 lg:w-52 pointer-events-auto group/card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 group-hover/card:bg-emerald-500 group-hover/card:text-white transition-colors">
                        <Globe size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs lg:text-sm font-black text-gray-900 dark:text-white tracking-tighter">Web Dev</span>
                        <span className="text-[9px] lg:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Scalable Sites</span>
                      </div>
                    </div>
                    <MiniWebMockup />
                  </motion.div>

                  {/* SEO & Growth Card - Top Right */}
                  <motion.div
                    style={{ translateZ: 250 }}
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-[10%] -right-4 lg:-top-5 lg:-right-16 bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-xl p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 w-40 lg:w-52 pointer-events-auto group/card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 group-hover/card:bg-emerald-500 group-hover/card:text-white transition-colors">
                        <TrendingUp size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs lg:text-sm font-black text-gray-900 dark:text-white tracking-tighter">SEO Growth</span>
                        <span className="text-[9px] lg:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Top rankings & organic traffic</span>
                      </div>
                    </div>
                    <MiniSEOMockup />
                  </motion.div>

                  {/* Business Intelligence Card - Bottom Left */}
                  <motion.div
                    style={{ translateZ: 300 }}
                    animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[10%] -left-8 lg:-bottom-5 lg:-left-24 bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-xl p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 w-40 lg:w-52 pointer-events-auto group/card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 group-hover/card:bg-orange-500 group-hover/card:text-white transition-colors">
                        <BarChart3 size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs lg:text-sm font-black text-gray-900 dark:text-white tracking-tighter">BI Tools</span>
                        <span className="text-[9px] lg:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Data insights & analytics</span>
                      </div>
                    </div>
                    <MiniBIMockup />
                  </motion.div>

                  {/* App Development Card - Bottom Right */}
                  <motion.div
                    style={{ translateZ: 350 }}
                    animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[5%] -right-8 lg:-bottom-10 lg:-right-24 bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-xl p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 w-40 lg:w-52 pointer-events-auto group/card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 group-hover/card:bg-blue-500 group-hover/card:text-white transition-colors">
                        <Smartphone size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs lg:text-sm font-black text-gray-900 dark:text-white tracking-tighter">App Dev</span>
                        <span className="text-[9px] lg:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">iOS & Android Apps</span>
                      </div>
                    </div>
                    <MiniAppMockup />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust/Service Indicators Row */}
          <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Web Development', icon: <Globe size={24} />, desc: 'High-performance sites' },
                { label: 'App Development', icon: <Smartphone size={24} />, desc: 'iOS & Android apps' },
                { label: 'SEO & Growth', icon: <Target size={24} />, desc: 'Organic traffic systems' },
                { label: 'Business Intelligence', icon: <BarChart3 size={24} />, desc: 'Actionable data insights' }
              ].map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cap.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-gray-900 dark:text-white">{cap.label}</h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section id="solutions" className="section-padding relative border-y border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-24">
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 md:mb-6">Our Solutions</p>
            <h3 className="text-gray-900 dark:text-white">Customized & <span className="text-gray-400 dark:text-gray-600">Ready-Made</span></h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="p-8 md:p-10 bg-white dark:bg-[#111] rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(sol.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-gray-900 dark:text-white tracking-tight">{sol.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6">{sol.desc}</p>
                <Link
                  to={sol.href}
                  className="inline-flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Live Demo Showcase Section */}
      <section id="portfolio" className="section-padding bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">
        <motion.div
          style={{ y: springY1, opacity: 0.1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-8 md:mb-24">
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">Live Demo Showcase</p>
            <h3>Explore Our <br /> <span className="text-gray-400 dark:text-white/40">Working Apps</span></h3>
            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
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
      <section id="industries" className="section-padding bg-white dark:bg-[#0a0a0a] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="text-emerald-500 font-bold uppercase tracking-widest mb-6">Industry Expertise</p>
              <h3 className="mb-8 leading-tight text-gray-900 dark:text-white">
                How We Transform <br />
                <span className="text-gray-400 dark:text-gray-600">Businesses with Technology</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-10 md:mb-12">
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
                    className="p-6 md:p-8 bg-gray-50 dark:bg-white/[0.02] rounded-[1.5rem] md:rounded-[2rem] border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                        {React.cloneElement(ind.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <h4 className="text-gray-900 dark:text-white">{ind.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {ind.tech.map((t, i) => (
                              <span key={i} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{ind.desc}</p>
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Wings Growth Engine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 h-6 bg-black/5 dark:bg-white/5 rounded-full flex items-center px-2">
                      <Search size={10} className="text-gray-300 dark:text-gray-600 mr-2" />
                      <div className="h-1 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20" />
                  </div>
                </div>

                <div className="flex-grow flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-12 border-r border-black/5 dark:border-white/5 flex flex-col items-center py-6 space-y-6 bg-gray-50/30 dark:bg-white/[0.02]">
                    <Layout size={14} className="text-emerald-500" />
                    <Users size={14} className="text-gray-300 dark:text-gray-600" />
                    <Target size={14} className="text-gray-300 dark:text-gray-600" />
                    <Search size={14} className="text-gray-300 dark:text-gray-600" />
                    <Cpu size={14} className="text-gray-300 dark:text-gray-600" />
                    <div className="flex-grow" />
                    <Bell size={14} className="text-gray-300 dark:text-gray-600" />
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
                        <p className="text-sm font-bold text-gray-900 dark:text-white">+42.5%</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 uppercase">Leads</span>
                          <Users size={10} className="text-blue-500" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">1,284</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8px] font-bold text-purple-600 dark:text-purple-400 uppercase">ROI</span>
                          <Activity size={10} className="text-purple-500" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">3.8x</p>
                      </div>
                    </div>

                    {/* Main Chart: Growth Analytics */}
                    <div className="flex-grow p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-900 dark:text-white">Growth Analytics</span>
                          <span className="text-[8px] text-gray-400 dark:text-gray-500">Marketing Performance Tracker</span>
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
                        <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase block mb-3">Recent Leads</span>
                        <div className="space-y-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5" />
                                <div className="h-1.5 w-12 bg-gray-200 dark:bg-white/10 rounded" />
                              </div>
                              <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Automation Workflow */}
                      <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                        <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase block mb-3">Active Workflows</span>
                        <div className="flex-grow flex flex-col justify-center space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                              <Zap size={10} />
                            </div>
                            <div className="flex-grow h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
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
                            <div className="flex-grow h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
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
      <section className="section-padding bg-gray-900 dark:bg-black text-white overflow-hidden">
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
              <p className="text-emerald-500 font-bold uppercase tracking-widest mb-6">Why Choose Us</p>
              <h3 className="mb-8 leading-tight text-white">
                Engineering Excellence <br />
                <span className="text-white/40">For Your Business Success</span>
              </h3>

              <div className="space-y-6 md:space-y-8">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4 md:space-x-6 group"
                  >
                    <div className="w-10 h-10 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-500 transition-colors duration-300">
                      <CheckCircle size={20} className="text-emerald-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h4>
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
      <section id="start-project" className="section-padding bg-black/[0.01] dark:bg-white/[0.01] relative overflow-hidden border-y border-black/5 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 md:mb-4">Project Planning</h2>
            <h3 className="mb-2 md:mb-4 text-gray-900 dark:text-white">Start Your <span className="text-gray-400 dark:text-gray-600">Digital Transformation</span></h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              Choose the best way to start your project. Fill out our inquiry form for a quick quote or book a direct strategy session.
            </p>
            <Link
              to="/start-project"
              className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
            >
              <Rocket size={20} />
              <span>Use Universal Intake Form</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <ConsultationForm />
            <MeetingBooking />
          </div>
        </div>
      </section>

      {/* Contact & Final CTA Section */}
      <section id="contact" className="section-padding bg-white dark:bg-[#0a0a0a] relative overflow-hidden hero-text">
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
            <div className="text-center mb-10 md:mb-32">
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
                className="mb-8 tracking-tighter"
              >
                Let's Build Your <br />
                <span className="relative inline-block">
                  <span className="text-gray-400 dark:text-gray-500 italic serif">Digital Future</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500/30 rounded-full" />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 dark:text-gray-400 mx-auto"
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
                  <div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:rotate-6 transition-transform duration-500">
                    <Phone size={28} />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Direct Consultation</h4>
                  <p className="font-bold text-gray-900 dark:text-white mb-10 tracking-tighter">+91 86187 64541</p>

                  <div className="space-y-4 mb-12">
                    {['Instant response', 'Technical guidance', 'Project scoping'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:+918618764541"
                    className="inline-flex items-center justify-center space-x-3 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/10"
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

                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">WhatsApp Support</h4>
                  <p className="font-bold text-gray-900 dark:text-white mb-10 tracking-tighter">+91 86187 64541</p>

                  <div className="space-y-4 mb-12">
                    {['24/7 Availability', 'Quick queries', 'Portfolio sharing'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-[#25D366]" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item}</span>
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
                  className="flex items-center space-x-3 text-gray-400 dark:text-gray-500"
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
