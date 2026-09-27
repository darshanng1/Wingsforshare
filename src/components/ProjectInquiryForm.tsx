import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare, Phone, User, Building2, Briefcase, Sparkles, Mail, AlertCircle, Loader2 } from 'lucide-react';

interface InquiryFields {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  projectRequirement: string;
  message: string;
}

const EMPTY: InquiryFields = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  projectRequirement: 'Website Development',
  message: ''
};

const SERVICE_OPTIONS = [
  'Website Development',
  'SEO Services',
  'Social Media Marketing',
  'Mobile App Development',
  'Business Analytics',
  'Custom Software',
  'Other'
];

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState<InquiryFields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFields, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: keyof InquiryFields, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (value.replace(/\D/g, '').length < 8) return 'Please enter a valid phone number';
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

  const handleBlur = (field: keyof InquiryFields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleChange = (field: keyof InquiryFields, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFields, string>> = {};
    (Object.keys(formData) as Array<keyof InquiryFields>).forEach(key => {
      if (key !== 'projectRequirement') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, businessType: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.projectRequirement,
          message: `Business type: ${formData.businessType}\n\n${formData.message}`
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Something went wrong. Please email info@wingsforshare.com.');
      }
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err?.message ||
          'We could not send your request right now. Please email info@wingsforshare.com or WhatsApp +91 86187 64541.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        role="alert"
        aria-live="polite"
        className="bg-card-bg p-12 rounded-[3rem] border border-card-border text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-4">Request Received!</h3>
        <p className="text-text-secondary mb-8">
          Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsSubmitted(false); setFormData(EMPTY); setErrors({}); setTouched({}); }}
          className="btn-primary px-8 py-3"
        >
          <span>Send Another Request</span>
        </motion.button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof InquiryFields) =>
    `w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium placeholder:text-text-secondary/30 ${
      errors[field] && touched[field] ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-accent/50'
    }`;

  const errText = (field: keyof InquiryFields) =>
    errors[field] && touched[field] ? (
      <p id={`${field}-error`} className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4" role="alert">
        {errors[field]}
      </p>
    ) : null;

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
        <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary mb-2 tracking-tight">Book a Free Consultation</h3>
        <p className="text-text-secondary text-[14px] leading-relaxed">Tell us about your project and we'll reply within 24 hours with a plan and quote.</p>
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
                id="consult-name" type="text" value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="John Doe" className={inputClass('name')}
              />
            </div>
            {errText('name')}
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-email" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Email <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input
                id="consult-email" type="email" value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="you@company.com" className={inputClass('email')}
              />
            </div>
            {errText('email')}
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-phone" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Phone / WhatsApp <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input
                id="consult-phone" type="tel" value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="+91 86187 64541" className={inputClass('phone')}
              />
            </div>
            {errText('phone')}
          </div>

          <div className="space-y-2">
            <label htmlFor="consult-business" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
              Business Type <span aria-label="required">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
              <input
                id="consult-business" type="text" value={formData.businessType}
                onChange={(e) => handleChange('businessType', e.target.value)}
                onBlur={() => handleBlur('businessType')}
                aria-invalid={!!errors.businessType} aria-describedby={errors.businessType ? 'businessType-error' : undefined}
                placeholder="e.g. Retail, Healthcare, SaaS" className={inputClass('businessType')}
              />
            </div>
            {errText('businessType')}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="consult-requirement" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
            Service You Need
          </label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50" size={18} aria-hidden="true" />
            <select
              id="consult-requirement" value={formData.projectRequirement}
              onChange={(e) => handleChange('projectRequirement', e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium appearance-none"
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s} className="bg-[#111]">{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="consult-message" className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">
            Project Details <span aria-label="required">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-text-secondary opacity-50" size={18} aria-hidden="true" />
            <textarea
              id="consult-message" rows={4} value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Goals, timeline, budget range, and anything else that helps us help you..."
              className={`${inputClass('message')} rounded-3xl resize-none`}
            />
          </div>
          {errText('message')}
        </div>

        {submitError && (
          <div role="alert" className="flex items-start gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
            <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[12px] text-red-400 font-medium leading-relaxed">{submitError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          aria-label="Submit consultation request"
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? <Loader2 size={20} className="animate-spin" aria-hidden="true" /> : <Send size={20} aria-hidden="true" />}
          <span>{submitting ? 'Sending…' : 'Submit Request'}</span>
        </button>

        <p className="text-[11px] text-text-secondary/50 text-center leading-relaxed">
          Prefer instant? WhatsApp <a href="https://wa.me/918618764541" className="text-accent hover:underline">+91 86187 64541</a> or email{' '}
          <a href="mailto:info@wingsforshare.com" className="text-accent hover:underline">info@wingsforshare.com</a>.
        </p>
      </form>
    </motion.div>
  );
}
