import { motion } from 'motion/react';
import { CheckCircle, ExternalLink, ArrowRight, Camera, Layout, Smartphone, Search, Mail, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

export default function ArchitectPortfolio() {
  return (
    <div className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero */}
      <section className="py-32 bg-black text-white overflow-hidden relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Architecture Background" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/10"
          >
            <Sparkles size={16} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Industry Specialized Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]"
          >
            Portfolio Websites <br /> Designed for <span className="italic serif text-white/40">Architects</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Showcase your projects with a high-end, visual-first portfolio system. 
            Built for design excellence and professional impact.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://architect-portfolio-demo.vercel.app" target="_blank" rel="noreferrer" className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 shadow-2xl shadow-white/10">
              <span>View Live Demo</span>
              <ExternalLink size={24} />
            </a>
            <a href="#inquiry" className="bg-transparent border border-white/30 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all active:scale-95">
              Get This Website
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">The Architect's Toolkit</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white">Everything You Need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Camera />, title: 'Project Gallery', desc: 'High-resolution image galleries with lightbox support for every project.' },
              { icon: <Layout />, title: 'Architect Profile', desc: 'Dedicated pages for your firm’s history, vision, and team members.' },
              { icon: <Smartphone />, title: 'Mobile Responsive', desc: 'Perfectly optimized for tablets and smartphones for on-site presentations.' },
              { icon: <Search />, title: 'SEO Visibility', desc: 'Built-in SEO structure to help local clients find your firm easily.' },
              { icon: <Mail />, title: 'Inquiry Form', desc: 'Direct client inquiry form to capture leads straight to your inbox.' },
              { icon: <CheckCircle />, title: 'Fast Loading', desc: 'Optimized performance to ensure your high-res images load instantly.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-black/[0.02] dark:bg-white/[0.02] rounded-[2.5rem] border border-black/5 dark:border-white/10 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-32 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Design Philosophy</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-10 leading-[1.1]">A Design That Speaks Your Language</h3>
              <p className="text-xl text-black/60 dark:text-white/60 mb-10 leading-relaxed">
                We understand that for an architect, the website is an extension of their design philosophy. 
                That's why our template uses a grid-based, minimalist layout that emphasizes structure, space, and light.
              </p>
              <ul className="space-y-6 mb-12">
                {['Clean Typography', 'Minimalist UI', 'Project-Centric Navigation', 'Smooth Transitions'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-lg font-bold text-black dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://architect-portfolio-demo.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-3 text-black dark:text-white font-bold text-lg border-b-2 border-black dark:border-white pb-2 hover:opacity-70 transition-opacity">
                <span>Explore the Live Demo</span>
                <ArrowRight size={24} />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Architect Portfolio Showcase" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-[#111] p-10 rounded-[2.5rem] shadow-2xl border border-black/5 dark:border-white/10 hidden md:block">
                <p className="text-5xl font-bold text-black dark:text-white mb-2 tracking-tighter">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Customizable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-32 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Get Started</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">Start Your Project</h3>
            <p className="text-lg text-black/60 dark:text-white/60">
              Fill out the form below to request the Architect Portfolio setup. 
              Our team will get back to you with the next steps.
            </p>
          </div>
          <InquiryForm productName="Architect Portfolio Website" />
        </div>
      </section>
    </div>
  );
}
