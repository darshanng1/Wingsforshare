import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface TouchedFields {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export default function QuickContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateField = (name: keyof typeof formData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
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
    (Object.keys(formData) as Array<keyof typeof formData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Quick Contact Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        role="alert"
        aria-live="polite"
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setTouched({});
          }}
          className="text-emerald-500 font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <label htmlFor="quick-name" className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Your Name <span aria-label="required">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} aria-hidden="true" />
          <input 
            id="quick-name"
            type="text" 
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="John Doe"
            className={`w-full bg-zinc-50 dark:bg-zinc-800/50 border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all ${
              errors.name && touched.name ? 'border-red-500 bg-red-500/5' : 'border-zinc-100 dark:border-zinc-800'
            }`}
          />
        </div>
        {errors.name && touched.name && (
          <p id="name-error" className="text-xs text-red-500 ml-1" role="alert">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="quick-email" className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Work Email <span aria-label="required">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} aria-hidden="true" />
          <input 
            id="quick-email"
            type="email" 
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="john@company.com"
            className={`w-full bg-zinc-50 dark:bg-zinc-800/50 border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all ${
              errors.email && touched.email ? 'border-red-500 bg-red-500/5' : 'border-zinc-100 dark:border-zinc-800'
            }`}
          />
        </div>
        {errors.email && touched.email && (
          <p id="email-error" className="text-xs text-red-500 ml-1" role="alert">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="quick-message" className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Message <span aria-label="required">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-zinc-400" size={18} aria-hidden="true" />
          <textarea 
            id="quick-message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="How can we help you scale?"
            className={`w-full bg-zinc-50 dark:bg-zinc-800/50 border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none ${
              errors.message && touched.message ? 'border-red-500 bg-red-500/5' : 'border-zinc-100 dark:border-zinc-800'
            }`}
          />
        </div>
        {errors.message && touched.message && (
          <p id="message-error" className="text-xs text-red-500 ml-1" role="alert">{errors.message}</p>
        )}
      </div>

      <button 
        type="submit"
        className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 group"
      >
        <span>Send Quick Message</span>
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
      </button>
    </form>
  );
}
