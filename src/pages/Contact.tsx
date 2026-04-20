import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  Clock, 
  Briefcase,
  Cpu,
  Network,
  Zap,
  Rocket,
  ArrowUpRight,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const CONTACT_METHODS = [
  {
    id: 'call',
    title: 'Direct Consultation',
    value: '+91 86187 64541',
    description: 'Instant response for urgent technical scoping.',
    icon: <Phone size={24} />,
    color: 'emerald',
    link: 'tel:+918618764541',
    features: ['Instant response', 'Technical guidance', 'Project scoping']
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Support',
    value: 'Quick Sync',
    description: '24/7 availability for quick queries and updates.',
    icon: <MessageSquare size={24} />,
    color: 'emerald',
    link: 'https://wa.me/918618764541',
    features: ['24/7 Availability', 'Quick queries', 'Portfolio sharing']
  },
  {
    id: 'email',
    title: 'Email Inquiry',
    value: 'info@wingsforshare.com',
    description: 'For detailed proposals and partnership inquiries.',
    icon: <Mail size={24} />,
    color: 'emerald',
    link: 'mailto:info@wingsforshare.com',
    features: ['Detailed proposals', 'Partnership inquiries', '24h response']
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-bg pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-accent/10 blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[140px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-accent/40" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Contact Operations</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[64px] md:text-[110px] font-display font-black tracking-[-0.05em] leading-[0.9] mb-12"
            >
              Start Your <br />
              <span className="text-accent italic font-light">Digital Evolution.</span>
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-secondary leading-relaxed font-medium"
              >
                Connect with our elite engineering team to architect and scale your next digital infrastructure. Precision, performance, and results driven.
              </motion.p>
              
              <div className="flex items-center gap-10 md:justify-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">Response Time</span>
                  <span className="text-lg font-bold text-text-primary px-3 py-1 bg-accent/10 rounded-lg border border-accent/20">&lt; 24h</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">Operational Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-lg font-bold text-text-primary">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Direct Connect Column */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-text-secondary/40">Direct Channels</h3>
                <div className="space-y-4">
                  {CONTACT_METHODS.map((method, idx) => (
                    <motion.a
                      key={method.id}
                      href={method.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex flex-col p-8 bg-card-bg/40 backdrop-blur-xl border border-card-border rounded-[2rem] transition-all hover:bg-card-bg/60 hover:border-accent/40"
                    >
                      <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-card-bg flex items-center justify-center border border-card-border group-hover:border-accent/40 group-hover:text-accent transition-colors shadow-sm`}>
                        {method.icon}
                      </div>
                      <ArrowUpRight size={18} className="text-text-secondary/20 group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/50 mb-1">{method.title}</span>
                    <span className="text-2xl font-bold text-text-primary mb-2">{method.value}</span>
                    <p className="text-sm text-text-secondary">{method.description}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-accent/5 border border-accent/10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                  <ShieldCheck size={200} />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-4">Security Guaranteed</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">All data transmitted through our systems is protected by end-to-end encryption and enterprise-grade security protocols.</p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-bg bg-accent/20" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Trusted by 500+ Global Partners</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card-bg/40 backdrop-blur-3xl border border-card-border rounded-[3rem] p-8 md:p-16 relative"
              >
                <div className="absolute top-10 right-10 opacity-10">
                  <Cpu size={120} />
                </div>

                <div className="mb-14 relative">
                  <h2 className="text-4xl font-display font-bold tracking-tight mb-4">Initialize Project</h2>
                  <p className="text-text-secondary font-medium">Define your parameters below to begin technical scoping.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary/60">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        Professional Identity
                      </label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alexander Pierce"
                        className="w-full bg-transparent border-b-2 border-card-border px-0 py-4 focus:border-accent transition-all outline-none font-bold text-text-primary placeholder:text-text-secondary/20"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary/60">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        Communication Node
                      </label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ap@enterprise.com"
                        className="w-full bg-transparent border-b-2 border-card-border px-0 py-4 focus:border-accent transition-all outline-none font-bold text-text-primary placeholder:text-text-secondary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary/60">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        Contact Vector
                      </label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-transparent border-b-2 border-card-border px-0 py-4 focus:border-accent transition-all outline-none font-bold text-text-primary placeholder:text-text-secondary/20"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary/60">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        Service Module
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-card-border px-0 py-4 focus:border-accent transition-all outline-none font-bold text-text-primary appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-bg">Select Matrix</option>
                        <option value="Enterprise Software" className="bg-bg">Enterprise Software</option>
                        <option value="SaaS Architecture" className="bg-bg">SaaS Architecture</option>
                        <option value="Infrastructure" className="bg-bg">Infrastructure</option>
                        <option value="Machine Learning" className="bg-bg">Machine Learning</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary/60">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Project Specification
                    </label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements..."
                      className="w-full bg-transparent border-b-2 border-card-border px-0 py-4 focus:border-accent transition-all outline-none font-bold text-text-primary placeholder:text-text-secondary/20 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={status === 'loading'}
                    className="group w-full h-20 bg-accent text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : status === 'success' ? (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-white" />
                        <span>Transmission Complete</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Initialize Sequence</span>
                        <Zap size={16} className="group-hover:scale-125 transition-transform" />
                      </div>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Global HQ Visual */}
      <div className="mt-32 border-t border-card-border pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold tracking-tighter mb-8 shadow-sm">Our Studio Hub</h2>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-card-bg rounded-[1.5rem] border border-card-border flex items-center justify-center shrink-0">
                    <MapPin size={32} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/40 mb-2 block">Location Matrix</span>
                    <p className="text-2xl font-bold text-text-primary leading-tight">15, A.K Max Layout, Kuduregere, Bangalore, KA - 562162, IN</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-card-bg rounded-[1.5rem] border border-card-border flex items-center justify-center shrink-0">
                    <Globe size={32} className="text-blue-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/40 mb-2 block">Global Presence</span>
                    <p className="text-2xl font-bold text-text-primary leading-tight">Servicing Enterprise Partners Across APAC, EMEA, and NAMER.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-square lg:aspect-video rounded-[3rem] bg-card-bg border border-card-border overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.344400782352!2d77.4988478!3d13.1407337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239639555555%3A0x5555555555555555!2sKuduregere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712240000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
