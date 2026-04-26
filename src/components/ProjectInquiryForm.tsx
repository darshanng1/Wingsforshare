import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare, Phone, User, Building2, Briefcase, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    businessType: '',
    projectRequirement: 'Website',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Optional: WhatsApp notification simulation
    const whatsappMessage = `New Consultation Request:
Name: ${formData.name}
Phone: ${formData.phone}
Business: ${formData.businessType}
Requirement: ${formData.projectRequirement}
Message: ${formData.message}`;
    
    // In a real app, you might trigger a backend function here
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        role="alert"
        aria-live="polite"
        className="bg-white dark:bg-[#111] p-12 rounded-[3rem] border border-black/5 dark:border-white/10 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Request Received!</h3>
        <p className="text-black/60 dark:text-white/60 mb-8">
          Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:opacity-80 transition-all"
        >
          Send Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-premium p-8 md:p-12 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />
      
      <div className="mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold uppercase tracking-widest text-accent mb-4" aria-hidden="true">
          <Sparkles size={14} />
          <span>Quick Inquiry</span>
        </div>
        <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary mb-2 tracking-tight">Book a Consultation</h3>
        <p className="text-text-secondary text-[14px] leading-relaxed">Let's discuss how we can help your business grow with custom technology.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="consult-name" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                required
                id="consult-name"
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-phone" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                required
                id="consult-phone"
                type="tel" 
                placeholder="+91 86187 64541"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="consult-business" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Business Type</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                required
                id="consult-business"
                type="text" 
                placeholder="e.g. Retail, Healthcare"
                value={formData.businessType}
                onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-requirement" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Project Requirement</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <select 
                id="consult-requirement"
                value={formData.projectRequirement}
                onChange={(e) => setFormData({...formData, projectRequirement: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium appearance-none"
              >
                <option value="Website">Website</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Business Automation">Business Automation</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Ecommerce">Ecommerce</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="consult-message" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-text-secondary opacity-50" size={18} aria-hidden="true" />
            <textarea 
              required
              id="consult-message"
              rows={4}
              placeholder="Tell us about your project goals..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-3xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium resize-none placeholder:text-text-secondary/30"
            />
          </div>
        </div>

        <button 
          type="submit"
          aria-label="Submit consultation request"
          className="btn-primary w-full justify-center"
        >
          <span>Submit Request</span>
          <Send size={20} aria-hidden="true" />
        </button>
      </form>
    </motion.div>
  );
}
