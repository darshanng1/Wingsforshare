import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Phone, 
  MessageSquare, 
  Mail,
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Globe, 
  Cpu, 
  Network 
} from 'lucide-react';

export const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-bg relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-[5%] text-accent/20 pointer-events-none hidden lg:block"
      >
        <Cpu size={120} strokeWidth={0.5} />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[5%] text-blue-500/20 pointer-events-none hidden lg:block"
      >
        <Network size={140} strokeWidth={0.5} />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA Header */}
          <div className="text-center mb-32">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            >
              <Rocket size={14} className="animate-pulse" />
              <span>Enterprise Solutions</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-12"
            >
              Let's Build Your <br />
              <span className="relative inline-block">
                <span className="text-accent italic font-light">Digital Future.</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-4 left-0 h-2 bg-accent/20 -z-10"
                />
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-3xl text-text-secondary mx-auto max-w-3xl font-medium leading-relaxed tracking-tight"
            >
              Empowering global enterprises with cutting-edge technology to <span className="text-text-primary underline decoration-accent/30 decoration-4 underline-offset-8">automate, analyze, and scale</span> with precision.
            </motion.p>
          </div>

          {/* Unified Contact Bar */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="card-premium p-2 md:p-4 bg-card-bg/40 backdrop-blur-3xl border-accent/20 shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-accent/10">
                
                {/* Direct Consultation */}
                <div className="p-8 md:p-12 flex flex-col items-center text-center group/item">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-3">Direct Consultation</h4>
                  <p className="text-2xl md:text-3xl font-black text-text-primary mb-8 tracking-tighter">+91 86187 64541</p>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="tel:+918618764541"
                    className="inline-flex items-center justify-center space-x-3 bg-accent text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.1em] text-[12px] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 w-full"
                  >
                    <span>Call Now</span>
                    <ArrowRight size={16} />
                  </motion.a>
                </div>

                {/* WhatsApp Ecosystem */}
                <div className="p-8 md:p-12 flex flex-col items-center text-center group/item">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover/item:scale-110 group-hover/item:-rotate-6 transition-all duration-500">
                    <MessageSquare size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-3">WhatsApp Ecosystem</h4>
                  <p className="text-2xl md:text-3xl font-black text-text-primary mb-8 tracking-tighter">Quick Sync</p>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/918618764541"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 bg-accent text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.1em] text-[12px] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 w-full"
                  >
                    <span>Message</span>
                    <ArrowRight size={16} />
                  </motion.a>
                </div>

                {/* Email Inquiry */}
                <div className="p-8 md:p-12 flex flex-col items-center text-center group/item">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500">
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-3">Email Inquiry</h4>
                  <p className="text-2xl md:text-3xl font-black text-text-primary mb-8 tracking-tighter">info@wingsforshare.com</p>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="mailto:info@wingsforshare.com"
                    className="inline-flex items-center justify-center space-x-3 bg-accent text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.1em] text-[12px] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 w-full"
                  >
                    <span>Send Email</span>
                    <ArrowRight size={16} />
                  </motion.a>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Trust Badges Bar */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 py-20 border-t border-card-border">
            {[
              { icon: <ShieldCheck size={24} />, text: 'Encrypted' },
              { icon: <Zap size={24} />, text: 'Real-time' },
              { icon: <TrendingUp size={24} />, text: 'Scalable' },
              { icon: <Globe size={24} />, text: 'Global' }
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center space-x-5 text-text-secondary group cursor-default"
              >
                <div className="text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{badge.icon}</div>
                <span className="text-[13px] font-black uppercase tracking-[0.2em] group-hover:text-text-primary transition-colors">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
