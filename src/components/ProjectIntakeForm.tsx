import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, CheckCircle, User, Building2, Briefcase, Sparkles, 
  Upload, Globe, Search, Smartphone, BarChart3, ChevronRight, 
  ChevronLeft, FileText, Image as ImageIcon, Link as LinkIcon,
  DollarSign, Layers, MousePointer2, Plus, X, Monitor, Cpu,
  Target, Zap, ShieldCheck, Clock, CreditCard, CheckCircle2
} from 'lucide-react';
import { ProjectIntakeData, ServiceType } from '../types';

interface ExtendedProjectIntakeData extends ProjectIntakeData {
  budgetRange: string;
  timeline: string;
}

export default function ProjectIntakeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ExtendedProjectIntakeData>>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    selectedService: '',
    projectDescription: '',
    budgetRange: '',
    timeline: '',
    webDev: {
      websiteType: '',
      numberOfPages: '',
      targetAudience: '',
      requiredFeatures: '',
    },
    appDev: {
      platform: '',
      appType: '',
      coreFeatures: '',
      userRoles: '',
    }
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const totalSteps = 4;

  const handleNext = () => {
    setDirection(1);
    setStep(prev => Math.min(prev + 1, totalSteps));
  };
  const handleBack = () => {
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project Intake Submitted:', formData);
    setIsSubmitted(true);
  };

  const updateFormData = (data: Partial<ExtendedProjectIntakeData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const updateNestedData = (key: 'webDev' | 'appDev' | 'seo' | 'bi', data: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: { ...(prev[key] || {}), ...data }
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-card-bg p-16 rounded-[4rem] border border-card-border text-center shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-emerald-500/20">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-4xl font-black text-text-primary mb-4 tracking-tight">Project Request Received</h3>
        <p className="text-text-secondary/60 mb-10 max-w-md mx-auto leading-relaxed font-medium">
          Our technical architects are analyzing your requirements. You'll receive a detailed roadmap and resource estimate within 24 hours.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); }}
          className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-xl shadow-white/10"
        >
          Start New Transformation
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-transparent flex flex-col h-full max-w-3xl mx-auto">
      {/* Progress Architecture */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-black text-accent uppercase tracking-[0.3em]">Phase {step} / {totalSteps}</span>
            </div>
            <h3 className="text-4xl font-black tracking-tight text-text-primary leading-none">
              {step === 1 && "Contact Information"}
              {step === 2 && "Select Service"}
              {step === 3 && "Project Details"}
              {step === 4 && "Budget & Timeline"}
            </h3>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[11px] font-black text-text-secondary/30 uppercase tracking-widest">Completion</span>
            <div className="text-2xl font-black text-text-primary">{(step / totalSteps) * 100}%</div>
          </div>
        </div>
        <div className="h-1.5 w-full bg-card-border rounded-full overflow-hidden flex gap-1 p-0.5">
          {[...Array(totalSteps)].map((_, i) => (
            <div 
              key={i} 
              className={`h-full rounded-full transition-all duration-700 ease-out ${i + 1 <= step ? 'bg-accent shadow-[0_0_15px_rgba(0,255,157,0.5)]' : 'bg-white/5'}`}
              style={{ width: `${100 / totalSteps}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex-grow">
        <form onSubmit={handleSubmit} className="h-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/20 group-focus-within:text-accent transition-colors" size={18} />
                      <input 
                        type="text" 
                        placeholder="e.g. Alexander Wright"
                        value={formData.fullName}
                        onChange={(e) => updateFormData({ fullName: e.target.value })}
                        className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 pl-14 pr-6 text-sm text-text-primary outline-none focus:border-accent/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/20 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Company Name</label>
                    <div className="relative group">
                      <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/20 group-focus-within:text-accent transition-colors" size={18} />
                      <input 
                        type="text" 
                        placeholder="e.g. Nexus Global"
                        value={formData.companyName}
                        onChange={(e) => updateFormData({ companyName: e.target.value })}
                        className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 pl-14 pr-6 text-sm text-text-primary outline-none focus:border-accent/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/20 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="alex@nexus.com"
                      value={formData.email}
                      onChange={(e) => updateFormData({ email: e.target.value })}
                      className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 px-6 text-sm text-text-primary outline-none focus:border-accent/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/20 font-medium"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Industry Sector</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Fintech', 'Healthcare', 'E-commerce', 'SaaS', 'Real Estate', 'Other'].map((ind) => (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => updateFormData({ industry: ind })}
                          className={`py-4 px-4 rounded-2xl border text-[11px] font-black uppercase tracking-widest transition-all ${
                            formData.industry === ind 
                              ? 'bg-accent border-accent text-bg shadow-lg shadow-accent/20' 
                              : 'bg-card-bg border-card-border text-text-secondary/40 hover:border-accent/30 hover:text-text-primary'
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'Website Development', icon: Globe, desc: 'High-Performance Platforms', color: 'text-blue-500' },
                    { id: 'Mobile App Development', icon: Smartphone, desc: 'Native iOS & Android Ecosystems', color: 'text-purple-500' },
                    { id: 'SEO', icon: Search, desc: 'Organic Growth & Market Dominance', color: 'text-emerald-500' },
                    { id: 'Business Intelligence', icon: BarChart3, desc: 'Data-Driven Decision Engines', color: 'text-orange-500' }
                  ].map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => updateFormData({ selectedService: service.id as ServiceType })}
                      className={`p-8 rounded-[2.5rem] border text-left transition-all duration-500 group relative overflow-hidden ${
                        formData.selectedService === service.id 
                          ? 'bg-accent border-accent text-bg shadow-[0_32px_64px_-16px_rgba(0,255,157,0.3)]' 
                          : 'bg-card-bg border-card-border text-text-secondary hover:border-accent/30 hover:bg-accent/5'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        formData.selectedService === service.id ? 'bg-bg/20 rotate-12' : 'bg-bg group-hover:bg-accent/10'
                      }`}>
                        <service.icon 
                          size={28} 
                          className={formData.selectedService === service.id ? 'text-bg' : `text-text-secondary/30 group-hover:${service.color}`} 
                        />
                      </div>
                      <span className="text-xl font-black block mb-2 tracking-tight">{service.id}</span>
                      <span className={`text-[11px] font-bold block leading-relaxed ${formData.selectedService === service.id ? 'text-bg/60' : 'text-text-secondary/30'}`}>
                        {service.desc}
                      </span>
                      {formData.selectedService === service.id && (
                        <motion.div 
                          layoutId="active-tick"
                          className="absolute top-6 right-6 w-6 h-6 rounded-full bg-bg flex items-center justify-center text-accent"
                        >
                          <CheckCircle2 size={14} />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  {formData.selectedService === 'Website Development' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Website Type</label>
                          <select 
                            className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 px-6 text-sm text-text-primary outline-none focus:border-accent/50 transition-all appearance-none font-medium"
                            value={formData.webDev?.websiteType}
                            onChange={(e) => updateNestedData('webDev', { websiteType: e.target.value })}
                          >
                            <option value="" className="bg-card-bg">Select Architecture</option>
                            <option value="Corporate" className="bg-card-bg">Corporate Enterprise</option>
                            <option value="Ecommerce" className="bg-card-bg">E-commerce Store</option>
                            <option value="SaaS" className="bg-card-bg">SaaS Landing Page</option>
                            <option value="Portfolio" className="bg-card-bg">High-End Portfolio</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Number of Pages</label>
                          <input 
                            type="text" 
                            placeholder="e.g. 10-15 Pages" 
                            value={formData.webDev?.numberOfPages}
                            onChange={(e) => updateNestedData('webDev', { numberOfPages: e.target.value })}
                            className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 px-6 text-sm text-text-primary outline-none focus:border-accent/50 transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Reference Platforms</label>
                        <div className="relative group">
                          <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/20 group-focus-within:text-accent transition-colors" size={18} />
                          <input 
                            type="text" 
                            placeholder="e.g. apple.com, stripe.com" 
                            className="w-full bg-card-bg border border-card-border rounded-[1.5rem] py-5 pl-14 pr-6 text-sm text-text-primary outline-none focus:border-accent/50 transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-8 rounded-[2.5rem] border border-dashed border-card-border flex flex-col items-center justify-center gap-4 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group">
                          <div className="w-12 h-12 rounded-2xl bg-card-bg flex items-center justify-center text-text-secondary/20 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                            <ImageIcon size={24} />
                          </div>
                          <div className="text-center">
                            <span className="text-[11px] font-black text-text-primary uppercase tracking-widest block mb-1">Brand Assets</span>
                            <span className="text-[10px] text-text-secondary/30 font-bold uppercase tracking-widest">Logo, Brand Guide</span>
                          </div>
                        </div>
                        <div className="p-8 rounded-[2.5rem] border border-dashed border-card-border flex flex-col items-center justify-center gap-4 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group">
                          <div className="w-12 h-12 rounded-2xl bg-card-bg flex items-center justify-center text-text-secondary/20 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                            <FileText size={24} />
                          </div>
                          <div className="text-center">
                            <span className="text-[11px] font-black text-text-primary uppercase tracking-widest block mb-1">Project Content</span>
                            <span className="text-[10px] text-text-secondary/30 font-bold uppercase tracking-widest">Copy, Images, Docs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.selectedService === 'Mobile App Development' && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Platform</label>
                        <div className="grid grid-cols-3 gap-4">
                          {['iOS', 'Android', 'Cross-Platform'].map((plat) => (
                            <button
                              key={plat}
                              type="button"
                              onClick={() => updateNestedData('appDev', { platform: plat })}
                              className={`py-5 px-4 rounded-2xl border text-[11px] font-black uppercase tracking-widest transition-all ${
                                formData.appDev?.platform === plat 
                                  ? 'bg-accent border-accent text-bg shadow-lg shadow-accent/20' 
                                  : 'bg-card-bg border-card-border text-text-secondary/40 hover:border-accent/30 hover:text-text-primary'
                              }`}
                            >
                              {plat}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Core Functionality</label>
                        <textarea 
                          rows={4}
                          placeholder="Describe the primary user journey and key features..."
                          value={formData.appDev?.coreFeatures}
                          onChange={(e) => updateNestedData('appDev', { coreFeatures: e.target.value })}
                          className="w-full bg-card-bg border border-card-border rounded-[2rem] py-6 px-8 outline-none focus:border-accent/50 transition-all resize-none text-sm text-text-primary placeholder:text-text-secondary/20 font-medium leading-relaxed"
                        />
                      </div>
                      <div className="p-8 rounded-[2.5rem] border border-dashed border-card-border flex flex-col items-center justify-center gap-4 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group">
                        <Layers size={24} className="text-text-secondary/20 group-hover:text-accent transition-colors" />
                        <div className="text-center">
                          <span className="text-[11px] font-black text-text-primary uppercase tracking-widest block mb-1">Upload Wireframes</span>
                          <span className="text-[10px] text-text-secondary/30 font-bold uppercase tracking-widest">Figma, PDF, or Sketches</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {(!formData.selectedService || (formData.selectedService !== 'Website Development' && formData.selectedService !== 'Mobile App Development')) && (
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Detailed Requirements</label>
                      <textarea 
                        rows={6}
                        placeholder="Tell us about your specific vision, goals, and any technical constraints..."
                        value={formData.projectDescription}
                        onChange={(e) => updateFormData({ projectDescription: e.target.value })}
                        className="w-full bg-card-bg border border-card-border rounded-[2.5rem] py-8 px-10 outline-none focus:border-accent/50 transition-all resize-none text-sm text-text-primary placeholder:text-text-secondary/20 font-medium leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Budget Range</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['$5k - $15k', '$15k - $50k', '$50k - $150k', 'Enterprise ($150k+)'].map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => updateFormData({ budgetRange: range })}
                            className={`py-6 px-6 rounded-[1.5rem] border text-[11px] font-black uppercase tracking-widest transition-all text-left flex items-center justify-between group ${
                              formData.budgetRange === range 
                                ? 'bg-accent border-accent text-bg shadow-lg shadow-accent/20' 
                                : 'bg-card-bg border-card-border text-text-secondary/40 hover:border-accent/30 hover:text-text-primary'
                            }`}
                          >
                            {range}
                            <CreditCard size={16} className={formData.budgetRange === range ? 'text-bg' : 'text-text-secondary/20 group-hover:text-accent'} />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-text-secondary/40 uppercase tracking-widest ml-1">Timeline</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['Rapid (1-2 Months)', 'Standard (3-4 Months)', 'Strategic (6+ Months)', 'Ongoing Partnership'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => updateFormData({ timeline: time })}
                            className={`py-6 px-6 rounded-[1.5rem] border text-[11px] font-black uppercase tracking-widest transition-all text-left flex items-center justify-between group ${
                              formData.timeline === time 
                                ? 'bg-accent border-accent text-bg shadow-lg shadow-accent/20' 
                                : 'bg-card-bg border-card-border text-text-secondary/40 hover:border-accent/30 hover:text-text-primary'
                            }`}
                          >
                            {time}
                            <Clock size={16} className={formData.timeline === time ? 'text-bg' : 'text-text-secondary/20 group-hover:text-accent'} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-10 rounded-[3rem] bg-accent/5 border border-accent/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000" />
                    <div className="flex items-start gap-8 relative z-10">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-text-primary mb-2 tracking-tight">Technical Review Included</p>
                        <p className="text-[13px] text-text-secondary/60 leading-relaxed font-medium">Your brief will be reviewed by a Senior Solutions Architect. We'll provide a technical feasibility report alongside our proposal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </form>
      </div>

      {/* Navigation Architecture */}
      <div className="pt-12 mt-auto flex items-center justify-between border-t border-card-border/50">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
            step === 1 ? 'opacity-0 pointer-events-none' : 'text-text-secondary/40 hover:text-text-primary hover:-translate-x-2'
          }`}
        >
          <ChevronLeft size={20} />
          Previous Phase
        </button>

        {step < totalSteps ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-4 bg-white text-black px-12 py-6 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_32px_64px_-16px_rgba(255,255,255,0.2)] group"
          >
            Next Phase
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-4 bg-accent text-bg px-12 py-6 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_32px_64px_-16px_rgba(0,255,157,0.3)] group"
          >
            Submit Project
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
