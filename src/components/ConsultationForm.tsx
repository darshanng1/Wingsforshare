import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare, Phone, User, Building2, Briefcase, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

export default function ConsultationForm() {
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
        className="bg-white dark:bg-[#111] p-12 rounded-[3rem] border border-black/5 dark:border-white/10 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Request Received!</h3>
        <p className="text-black/60 dark:text-white/60 mb-8">
          Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:opacity-80 transition-all"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#111] p-5 md:p-12 rounded-[3rem] border border-black/5 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] dark:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.02)] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/10 transition-colors" />
      
      <div className="mb-4 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-3 py-1.5 rounded-full mb-4">
          <Sparkles size={14} className="text-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Quick Inquiry</span>
        </div>
        <h3 className="tracking-tighter">Book a Consultation</h3>
        <p className="text-black/40 dark:text-white/40 font-medium leading-relaxed">Let's discuss how we can help your business grow with custom technology.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
              <input 
                required
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
              <input 
                required
                type="tel" 
                placeholder="+91 86187 64541"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Business Type</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
              <input 
                required
                type="text" 
                placeholder="e.g. Retail, Healthcare"
                value={formData.businessType}
                onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Project Requirement</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
              <select 
                value={formData.projectRequirement}
                onChange={(e) => setFormData({...formData, projectRequirement: e.target.value})}
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium appearance-none"
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
          <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-black/20 dark:text-white/20" size={18} />
            <textarea 
              required
              rows={4}
              placeholder="Tell us about your project goals..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-3xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium resize-none"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg hover:opacity-80 transition-all flex items-center justify-center space-x-2 shadow-xl"
        >
          <span>Submit Request</span>
          <Send size={20} />
        </button>
      </form>
    </motion.div>
  );
}
