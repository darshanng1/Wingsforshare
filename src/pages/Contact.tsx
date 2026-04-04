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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-bg pt-32 pb-20 relative overflow-hidden">
      {/* Ultra Modern Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -left-[10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]"
        />
        
        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] text-accent/10 lg:block hidden"
        >
          <Cpu size={180} strokeWidth={0.5} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[5%] text-blue-500/10 lg:block hidden"
        >
          <Zap size={200} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-24">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            >
              <Rocket size={14} className="animate-pulse" />
              <span>Global Connectivity</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-12"
            >
              Let's Build Your <br />
              <span className="text-accent italic font-light">Digital Future.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
            >
              Empowering global enterprises with cutting-edge technology to <span className="text-text-primary underline decoration-accent/30 decoration-4 underline-offset-8">automate, analyze, and scale</span> with precision.
            </motion.p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            {/* Contact Form - Large Bento Item */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 card-premium p-10 md:p-16 bg-card-bg/50 backdrop-blur-2xl border-card-border shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-display font-bold tracking-tight mb-4">Project Inquiry</h2>
                <p className="text-text-secondary font-medium">Tell us about your vision. We'll handle the complexity.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-bg/50 border-2 border-card-border rounded-2xl px-6 py-5 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none font-bold text-text-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-bg/50 border-2 border-card-border rounded-2xl px-6 py-5 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none font-bold text-text-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full bg-bg/50 border-2 border-card-border rounded-2xl px-6 py-5 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none font-bold text-text-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Service Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-bg/50 border-2 border-card-border rounded-2xl px-6 py-5 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none font-bold text-text-primary appearance-none cursor-pointer"
                    >
                      <option value="">Select Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals..."
                    className="w-full bg-bg/50 border-2 border-card-border rounded-2xl px-6 py-5 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none font-bold text-text-primary resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[14px] shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all flex items-center justify-center gap-4 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

              {/* Contact Methods - Right Bento Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {CONTACT_METHODS.map((method) => (
                <motion.a
                  key={method.id}
                  href={method.link}
                  target={method.id === 'whatsapp' ? '_blank' : undefined}
                  rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ x: 15, scale: 1.02 }}
                  className="group relative card-premium p-10 bg-card-bg/40 backdrop-blur-xl border-card-border flex items-center gap-8 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${method.color === 'emerald' ? 'bg-emerald-500/10' : 'bg-blue-500/10'} rounded-full blur-3xl -mr-16 -mt-16 group-hover:${method.color === 'emerald' ? 'bg-emerald-500/20' : 'bg-blue-500/20'} transition-all duration-500`} />
                  
                  <div className={`w-20 h-20 ${method.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'} border rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-all duration-500 shrink-0`}>
                    {method.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary mb-2">{method.title}</h4>
                    <p className="text-2xl font-black text-text-primary mb-2 tracking-tight">{method.value}</p>
                    <p className="text-[14px] text-text-secondary font-medium leading-tight">{method.description}</p>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full ${method.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500' : 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500'} flex items-center justify-center group-hover:text-white transition-all duration-500`}>
                    <ArrowUpRight size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Innovation Hub / Office Location */}
          <motion.div 
            variants={itemVariants}
            className="card-premium overflow-hidden bg-card-bg/50 backdrop-blur-xl border-card-border"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 space-y-12">
                <div>
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-6"
                  >
                    <MapPin size={12} />
                    <span>Corporate Headquarters</span>
                  </motion.div>
                  <h2 className="text-5xl font-display font-bold tracking-tighter mb-6">Visit Our Studio</h2>
                  <p className="text-xl text-text-secondary font-medium leading-relaxed">Where technology meets creativity. Join us for a coffee and a deep dive into your digital future.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase tracking-widest text-text-secondary mb-2">Headquarters</h5>
                      <p className="text-xl font-bold text-text-primary leading-tight">
                        15, A.K Max Layout, Kuduregere,<br />
                        Bangalore - 562162
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase tracking-widest text-text-secondary mb-2">Business Hours</h5>
                      <p className="text-xl font-bold text-text-primary">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] lg:h-auto relative grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.344400782352!2d77.4988478!3d13.1407337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239639555555%3A0x5555555555555555!2sKuduregere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712240000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
