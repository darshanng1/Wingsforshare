import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryFormProps {
  productName?: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
}

interface TouchedFields {
  fullName?: boolean;
  phone?: boolean;
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateField = (name: keyof typeof formData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) {
          return 'Please enter a valid phone number';
        }
        break;
    }
    return undefined;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const nameError = validateField('fullName', formData.fullName);
    const phoneError = validateField('phone', formData.phone);
    if (nameError) newErrors.fullName = nameError;
    if (phoneError) newErrors.phone = phoneError;
    setErrors(newErrors);
    setTouched({ fullName: true, phone: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    
    const data = {
      name: formData.fullName,
      phone: formData.phone,
      service: productName || 'General Inquiry',
      message: formData.message,
      email: 'not-provided@wingsforshare.com'
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Inquiry error:", error);
      setStatus('idle');
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            role="alert"
            aria-live="polite"
            className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 p-12 rounded-[2.5rem] text-center shadow-2xl shadow-emerald-500/10"
          >
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
              <CheckCircle size={40} aria-hidden="true" />
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
            aria-busy={status === 'loading'}
            className="space-y-6 bg-white dark:bg-[#111] p-10 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-white/5 transition-colors duration-300"
            noValidate
          >
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2 tracking-tight">Request Information</h3>
              <p className="text-black/60 dark:text-white/60 text-sm">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full-name" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">
                  Full Name <span aria-label="required">*</span>
                </label>
                <input 
                  id="full-name"
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  onBlur={() => handleBlur('fullName')}
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'fullname-error' : undefined}
                  className={`w-full px-6 py-4 bg-black/5 dark:bg-white/5 border rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all ${
                    errors.fullName && touched.fullName 
                      ? 'border-red-500 bg-red-500/5' 
                      : 'border-transparent focus:border-black/10 dark:focus:border-white/10'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && touched.fullName && (
                  <p id="fullname-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">
                  Phone / WhatsApp <span aria-label="required">*</span>
                </label>
                <input 
                  id="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`w-full px-6 py-4 bg-black/5 dark:bg-white/5 border rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all ${
                    errors.phone && touched.phone 
                      ? 'border-red-500 bg-red-500/5' 
                      : 'border-transparent focus:border-black/10 dark:focus:border-white/10'
                  }`}
                  placeholder="+91 86187 64541"
                />
                {errors.phone && touched.phone && (
                  <p id="phone-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="product" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Product</label>
              <input 
                id="product"
                type="text" 
                readOnly
                value={productName || 'General Inquiry'}
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl text-sm text-black/40 dark:text-white/40 outline-none cursor-not-allowed"
                aria-readonly="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-2 ml-1">Message (Optional)</label>
              <textarea 
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl text-sm text-black dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all resize-none"
                placeholder="Tell us about your business needs..."
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                aria-label={status === 'loading' ? 'Sending inquiry...' : 'Send Inquiry'}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:opacity-80 transition-all disabled:opacity-50 active:scale-[0.98] shadow-2xl shadow-black/10 dark:shadow-white/5"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-3 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={20} aria-hidden="true" />
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
