import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function QuickContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick Contact Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-emerald-500 font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Your Name</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Work Email</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="email" 
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-zinc-400" size={18} />
          <textarea 
            required
            rows={4}
            placeholder="How can we help you scale?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none"
          />
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 group"
      >
        <span>Send Quick Message</span>
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}
