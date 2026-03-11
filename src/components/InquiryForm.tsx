import React from 'react';
import { Send, CheckCircle, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryFormProps {
  productName?: string;
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 p-12 rounded-[2.5rem] text-center shadow-2xl shadow-emerald-500/10"
          >
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 tracking-tight">Inquiry Sent!</h3>
            <p className="text-emerald-700 dark:text-emerald-500/80 text-lg leading-relaxed">
              Thank you for your interest. Our team will contact you via WhatsApp within 24 hours to discuss your project.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:bg-[#111] p-10 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-white/5 transition-colors duration-300"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2 tracking-tight">Request Setup</h3>
              <p className="text-black/60 dark:text-white/60 text-sm">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Phone / WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all"
                  placeholder="+91 86187 64541"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Product</label>
              <input 
                type="text" 
                readOnly
                value={productName || 'General Inquiry'}
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl text-sm text-black/40 dark:text-white/40 outline-none cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Message (Optional)</label>
              <textarea 
                rows={4}
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all resize-none"
                placeholder="Tell us about your business needs..."
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:opacity-80 transition-all disabled:opacity-50 active:scale-[0.98] shadow-2xl shadow-black/10 dark:shadow-white/5"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-3 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
