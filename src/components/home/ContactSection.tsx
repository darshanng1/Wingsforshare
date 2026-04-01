import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Phone, MessageSquare, CheckCircle, ArrowRight, ShieldCheck, Zap, TrendingUp, Globe } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Header */}
          <div className="text-center mb-16 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-bold uppercase tracking-widest text-accent mb-8"
            >
              <Rocket size={14} />
              <span>Ready to Scale?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              Let's Build Your <br />
              <span className="text-text-secondary italic font-light">Digital Future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] md:text-[24px] text-text-secondary mx-auto max-w-2xl font-light leading-relaxed"
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
              className="group relative card-premium p-10 md:p-16 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent text-bg rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:rotate-6 transition-transform duration-500">
                  <Phone size={28} />
                </div>

                <h4 className="text-[12px] font-bold uppercase tracking-widest text-text-secondary mb-4">Direct Consultation</h4>
                <p className="text-[28px] md:text-[36px] font-bold text-text-primary mb-10 tracking-tight">+91 86187 64541</p>

                <div className="space-y-4 mb-12">
                  {['Instant response', 'Technical guidance', 'Project scoping'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-accent" />
                      <span className="text-[14px] font-bold uppercase tracking-widest text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+918618764541"
                  className="btn-primary w-full justify-center"
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
              className="group relative card-premium p-10 md:p-16 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:-rotate-6 transition-transform duration-500">
                  <MessageSquare size={28} />
                </div>

                <h4 className="text-[12px] font-bold uppercase tracking-widest text-text-secondary mb-4">WhatsApp Support</h4>
                <p className="text-[28px] md:text-[36px] font-bold text-text-primary mb-10 tracking-tight">Quick Chat</p>

                <div className="space-y-4 mb-12">
                  {['24/7 Availability', 'Quick queries', 'Portfolio sharing'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-emerald-500" />
                      <span className="text-[14px] font-bold uppercase tracking-widest text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/918618764541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 w-full bg-emerald-500 text-white px-8 py-6 rounded-2xl font-bold uppercase tracking-widest text-[14px] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-emerald-500/20"
                >
                  <span>Message on WhatsApp</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges Bar */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-12 border-t border-white/10">
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
                className="flex items-center space-x-3 text-text-secondary"
              >
                <div className="text-accent">{badge.icon}</div>
                <span className="text-[12px] font-bold uppercase tracking-widest">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
