import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Sparkles, Zap, Shield, Globe, Play, Layers, 
  Users, MessageSquare, CheckCircle, Star, TrendingUp, 
  Award, Clock, BarChart3, ArrowUpRight, ShieldCheck,
  Monitor, Smartphone, Rocket, Search, Target, Briefcase,
  Building2, ShoppingBag, HardHat, Store, Laptop, Tablet,
  Phone, Video, Send, ChevronRight, Layout, Cpu, Database,
  BarChart, ShoppingCart, MessageCircle
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ConsultationForm from '../components/ConsultationForm';
import MeetingBooking from '../components/MeetingBooking';

export default function Home() {
  const heroRef = useRef(null);
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

  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const heroTexts = [
    "Custom Apps.",
    "Ready-Made Tools.",
    "Powerful Websites."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    { icon: <HardHat />, name: 'Pest Control', desc: 'Operational dashboards & field team tracking.' },
    { icon: <Building2 />, name: 'Manufacturing', desc: 'Inventory management & process automation.' },
    { icon: <ShoppingBag />, name: 'Retail', desc: 'Omnichannel eCommerce & customer loyalty.' },
    { icon: <Briefcase />, name: 'Architects', desc: 'Visual-first portfolios & project showcases.' },
    { icon: <Store />, name: 'Small Businesses', desc: 'Digital presence & local SEO optimization.' }
  ];

  const whyChooseUs = [
    { title: 'Fast Development', desc: 'Launch your project in weeks, not months, with our optimized workflows.' },
    { title: 'Affordable Solutions', desc: 'Premium quality software at prices that make sense for growing businesses.' },
    { title: 'Custom Business Software', desc: 'We build tools that solve your specific operational challenges.' },
    { title: 'SEO Ready Websites', desc: 'Every site we build is engineered to rank high on search engines.' },
    { title: 'Automation & CRM Tools', desc: 'Reduce manual work with smart systems that handle the heavy lifting.' }
  ];

  return (
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      <ScrollToTopButton />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 dark:from-emerald-500/5 via-transparent to-transparent blur-3xl opacity-50" />
          <motion.div style={{ y: springY1 }} className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <motion.div style={{ y: springY2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-8 border border-black/5 dark:border-white/10 backdrop-blur-sm"
              >
                <Rocket size={16} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">WingsForShare Digital Solutions</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white mb-8 leading-[0.85]">
                Custom Apps, <br />
                <span className="text-black/40 dark:text-white/40">Ready-Made Software</span> <br />
                & Modern Websites
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-xl mb-12 leading-relaxed"
              >
                We design powerful websites and business applications tailored to your needs.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
                <a href="#products" className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-2xl shadow-black/20 dark:shadow-white/10">
                  <span>View Live Demo</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#consultation" className="w-full sm:w-auto bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center space-x-2">
                  <MessageSquare size={18} className="text-emerald-500" />
                  <span>Book Consultation</span>
                </a>
                <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-emerald-500/20">
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="flex items-center space-x-8 border-t border-black/5 dark:border-white/10 pt-12">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] overflow-hidden bg-gray-200">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">Trusted by 500+ Businesses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/20 border-8 border-white dark:border-[#111] bg-gray-100 dark:bg-[#1a1a1a] aspect-[4/5]">
                <img 
                  src="https://picsum.photos/seed/software/1000/1250" 
                  alt="Software Development" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <p className="text-white font-bold text-lg mb-2">Customized Solutions</p>
                    <p className="text-white/60 text-sm">We build tools that solve your specific operational challenges.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white dark:bg-[#111] p-6 rounded-3xl shadow-2xl border border-black/5 dark:border-white/10 z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">+140% Lead Gen</p>
                    <p className="text-[10px] text-black/40 dark:text-white/40">Marketing Results</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-[#111] p-6 rounded-3xl shadow-2xl border border-black/5 dark:border-white/10 z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Mobile Ready</p>
                    <p className="text-[10px] text-black/40 dark:text-white/40">iOS & Android Apps</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Demos Ticker */}
      <section className="py-12 bg-black text-white border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...products, ...products].map((product, idx) => (
            <div key={idx} className="flex items-center space-x-4 px-12 border-r border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">{product.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 relative border-y border-black/5 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-6">Our Solutions</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">Customized & <span className="text-black/40 dark:text-white/40">Ready-Made</span></h3>
            <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              We provide a full spectrum of digital tools to power your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white dark:bg-[#111] rounded-[3rem] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(sol.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">{sol.title}</h3>
                <p className="text-black/60 dark:text-white/60 leading-relaxed mb-8">{sol.desc}</p>
                <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Showcase Section */}
      <section id="products" className="py-32 bg-black text-white relative overflow-hidden">
        <motion.div 
          style={{ y: springY1, opacity: 0.1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Live Demo Showcase</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Explore Our <br /> <span className="text-white/40">Working Apps</span></h3>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Don't just take our word for it. Interact with our live demos and see the quality of our work firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-6">Our Portfolio</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-8 leading-tight">Delivering Results <br /> <span className="text-black/40 dark:text-white/40">Across Industries</span></h3>
              <p className="text-xl text-black/60 dark:text-white/60 mb-12 leading-relaxed">
                We've helped businesses across various sectors transform their digital presence and streamline their operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((ind, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-black/[0.02] dark:bg-white/[0.02] rounded-3xl border border-black/5 dark:border-white/10"
                  >
                    <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-4">
                      {ind.icon}
                    </div>
                    <p className="text-lg font-bold text-black dark:text-white mb-1">{ind.name}</p>
                    <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed">{ind.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 dark:border-white/10 shadow-xl">
                  <img src="https://picsum.photos/seed/ind1/600/800" alt="Industry 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 dark:border-white/10 shadow-xl">
                  <img src="https://picsum.photos/seed/ind2/600/600" alt="Industry 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 dark:border-white/10 shadow-xl">
                  <img src="https://picsum.photos/seed/ind3/600/600" alt="Industry 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 dark:border-white/10 shadow-xl">
                  <img src="https://picsum.photos/seed/ind4/600/800" alt="Industry 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div 
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[4rem] border border-white/10 flex items-center justify-center p-12"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-white text-black rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <TrendingUp size={48} />
                  </div>
                  <p className="text-5xl font-bold mb-4 tracking-tighter">Save 90%</p>
                  <p className="text-xl text-white/60">On development costs and time-to-market compared to traditional agencies.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Why Clients Choose Us</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9]">The WingsForShare <br /> <span className="text-white/40">Advantage</span></h3>
              
              <div className="space-y-8">
                {whyChooseUs.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={18} className="text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Meeting Section */}
      <section id="consultation" className="py-32 bg-black/[0.02] dark:bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ConsultationForm />
            <MeetingBooking />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
        <motion.div 
          style={{ y: springY2 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: springY1 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-black dark:text-white mb-12 leading-[0.85]">Ready to Launch Your <br /> <span className="text-black/40 dark:text-white/40 italic">Business Online?</span></h2>
            <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 mb-16 leading-relaxed">
              Join 500+ successful businesses. Get your custom software, website, or marketing system setup in record time.
            </p>
            
            <div className="bg-black/5 dark:bg-white/5 p-12 rounded-[3rem] border border-black/5 dark:border-white/10 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Direct Call</p>
                  <p className="text-3xl font-bold text-black dark:text-white">+91 86187 64541</p>
                  <a href="tel:+918618764541" className="inline-flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold hover:opacity-80 transition-all">
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">WhatsApp Chat</p>
                  <p className="text-3xl font-bold text-black dark:text-white">+91 86187 64541</p>
                  <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:opacity-80 transition-all">
                    <MessageSquare size={20} />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 opacity-40">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-emerald-500" />
                <span className="text-sm font-bold uppercase tracking-widest">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-emerald-500" />
                <span className="text-sm font-bold uppercase tracking-widest">SEO Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-emerald-500" />
                <span className="text-sm font-bold uppercase tracking-widest">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
