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
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFormData, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: keyof InquiryFormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) {
          return 'Please enter a valid phone number';
        }
        break;
      case 'businessType':
        if (!value.trim()) return 'Business type is required';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleBlur = (field: keyof InquiryFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof InquiryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    (Object.keys(formData) as Array<keyof InquiryFormData>).forEach(key => {
      if (key !== 'projectRequirement') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      businessType: true,
      message: true
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
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
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              businessType: '',
              projectRequirement: 'Website',
              message: ''
            });
            setErrors({});
            setTouched({});
          }}
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

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="consult-name" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Full Name <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                id="consult-name"
                type="text" 
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="John Doe"
                className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30 ${
                  errors.name && touched.name ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-accent/50'
                }`}
              />
            </div>
            {errors.name && touched.name && (
              <p id="name-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-phone" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Phone Number <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                id="consult-phone"
                type="tel" 
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="+91 86187 64541"
                className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30 ${
                  errors.phone && touched.phone ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-accent/50'
                }`}
              />
            </div>
            {errors.phone && touched.phone && (
              <p id="phone-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="consult-business" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Business Type <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input 
                id="consult-business"
                type="text" 
                value={formData.businessType}
                onChange={(e) => handleChange('businessType', e.target.value)}
                onBlur={() => handleBlur('businessType')}
                aria-invalid={errors.businessType ? 'true' : 'false'}
                aria-describedby={errors.businessType ? 'business-error' : undefined}
                placeholder="e.g. Retail, Healthcare"
                className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30 ${
                  errors.businessType && touched.businessType ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-accent/50'
                }`}
              />
            </div>
            {errors.businessType && touched.businessType && (
              <p id="business-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4" role="alert">
                {errors.businessType}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-requirement" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Project Requirement
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <select 
                id="consult-requirement"
                value={formData.projectRequirement}
                onChange={(e) => handleChange('projectRequirement', e.target.value)}
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
          <label htmlFor="consult-message" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
            Message <span aria-label="required">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-text-secondary opacity-50" size={18} aria-hidden="true" />
            <textarea 
              id="consult-message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell us about your project goals..."
              className={`w-full bg-white/5 border rounded-3xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium resize-none placeholder:text-text-secondary/30 ${
                errors.message && touched.message ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-accent/50'
              }`}
            />
          </div>
          {errors.message && touched.message && (
            <p id="message-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4" role="alert">
              {errors.message}
            </p>
          )}
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
