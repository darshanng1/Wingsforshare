import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, CheckCircle, User, Building2, Briefcase, Sparkles, 
  Upload, Globe, Search, Smartphone, BarChart3, ChevronRight, 
  ChevronLeft, FileText, Image as ImageIcon, Link as LinkIcon,
  DollarSign, Layers
} from 'lucide-react';
import { ProjectIntakeData, ServiceType } from '../types';

export default function ProjectIntakeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ProjectIntakeData>>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    selectedService: '',
    projectDescription: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project Intake Submitted:', formData);
    setIsSubmitted(true);
  };

  const updateFormData = (data: Partial<ProjectIntakeData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card-bg p-12 rounded-[3rem] border border-card-border text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-4">Project Brief Received!</h3>
        <p className="text-text-secondary mb-8">
          Thank you for sharing your vision. Our strategy team is reviewing your requirements and will get back to you with a proposal within 24-48 hours.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); }}
          className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
        >
          Start New Brief
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-transparent flex flex-col h-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-card-border flex rounded-full overflow-hidden mb-8">
        {[...Array(totalSteps)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full transition-all duration-700 ease-out ${i + 1 <= step ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-transparent'}`}
            style={{ width: `${100 / totalSteps}%` }}
          />
        ))}
      </div>

      <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Step {step} of {totalSteps}</span>
            </div>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
              {step === 1 && "Client Identity"}
              {step === 2 && "Service Selection"}
              {step === 3 && "Project Scope"}
              {step === 4 && "Final Details"}
            </span>
          </div>
          <h3 className="text-3xl font-black tracking-tight text-text-primary font-display">
            {step === 1 && "Tell us about yourself"}
            {step === 2 && "What are we building?"}
            {step === 3 && "Define the requirements"}
            {step === 4 && "Budget & Timeline"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-emerald-500 transition-colors" size={16} />
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => updateFormData({ fullName: e.target.value })}
                        className="w-full bg-card-bg border border-card-border rounded-2xl py-4 pl-12 pr-4 text-sm text-text-primary outline-none focus:border-emerald-500/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Company Name</label>
                    <div className="relative group">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-emerald-500 transition-colors" size={16} />
                      <input 
                        type="text" 
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={(e) => updateFormData({ companyName: e.target.value })}
                        className="w-full bg-card-bg border border-card-border rounded-2xl py-4 pl-12 pr-4 text-sm text-text-primary outline-none focus:border-emerald-500/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/30"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Industry</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fintech, Healthcare"
                    value={formData.industry}
                    onChange={(e) => updateFormData({ industry: e.target.value })}
                    className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 focus:bg-accent/5 transition-all placeholder:text-text-secondary/30"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { id: 'Website Development', icon: Globe, desc: 'High-performance platforms' },
                  { id: 'SEO', icon: Search, desc: 'Organic growth strategy' },
                  { id: 'Mobile App Development', icon: Smartphone, desc: 'Native iOS & Android' },
                  { id: 'Business Intelligence', icon: BarChart3, desc: 'Data-driven insights' }
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => updateFormData({ selectedService: service.id as ServiceType })}
                    className={`p-6 rounded-[2rem] border text-left transition-all duration-500 group relative overflow-hidden ${
                      formData.selectedService === service.id 
                        ? 'bg-emerald-500 border-emerald-400 text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)]' 
                        : 'bg-card-bg border-card-border text-text-secondary hover:border-emerald-500/30 hover:bg-accent/5'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      formData.selectedService === service.id ? 'bg-white/20 rotate-12' : 'bg-bg group-hover:bg-emerald-500/10'
                    }`}>
                      <service.icon 
                        size={24} 
                        className={formData.selectedService === service.id ? 'text-white' : 'text-text-secondary/40 group-hover:text-emerald-500'} 
                      />
                    </div>
                    <span className="text-sm font-black block mb-1 font-display">{service.id}</span>
                    <span className={`text-[10px] font-medium block ${formData.selectedService === service.id ? 'text-white/60' : 'text-text-secondary/30'}`}>
                      {service.desc}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {formData.selectedService === 'Website Development' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Website Type</label>
                        <select 
                          className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all appearance-none"
                          onChange={(e) => updateFormData({ webDev: { ...formData.webDev, websiteType: e.target.value as any } as any })}
                        >
                          <option value="" className="bg-card-bg">Select Type</option>
                          <option value="Corporate" className="bg-card-bg">Corporate</option>
                          <option value="Ecommerce" className="bg-card-bg">Ecommerce</option>
                          <option value="Portfolio" className="bg-card-bg">Portfolio</option>
                          <option value="SaaS" className="bg-card-bg">SaaS</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Pages Needed</label>
                        <input 
                          type="text" 
                          placeholder="e.g. 5-10" 
                          className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all"
                          onChange={(e) => updateFormData({ webDev: { ...formData.webDev, numberOfPages: e.target.value } as any })}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-2xl border border-dashed border-card-border flex flex-col items-center justify-center gap-3 hover:border-emerald-500/50 hover:bg-accent/5 transition-all cursor-pointer group">
                        <ImageIcon size={24} className="text-text-secondary/40 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest">Upload Logo</span>
                      </div>
                      <div className="p-6 rounded-2xl border border-dashed border-card-border flex flex-col items-center justify-center gap-3 hover:border-emerald-500/50 hover:bg-accent/5 transition-all cursor-pointer group">
                        <FileText size={24} className="text-text-secondary/40 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest">Content Doc</span>
                      </div>
                    </div>
                  </div>
                )}

                {formData.selectedService === 'SEO' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Target Keywords</label>
                      <input 
                        type="text" 
                        placeholder="e.g. real estate, luxury tech" 
                        className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all" 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Current URL</label>
                        <input 
                          type="url" 
                          placeholder="https://yoursite.com" 
                          className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Location</label>
                        <input 
                          type="text" 
                          placeholder="Global / Local" 
                          className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.selectedService === 'Mobile App Development' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Target Platform</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['iOS', 'Android', 'Both'].map((platform) => (
                          <button
                            key={platform}
                            type="button"
                            className="py-3 px-4 rounded-2xl border border-card-border bg-card-bg text-[10px] font-black uppercase tracking-widest text-text-secondary/40 hover:border-emerald-500 hover:text-text-primary transition-all"
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Core Features</label>
                      <textarea 
                        rows={3}
                        placeholder="Describe the main functionality..."
                        className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 outline-none focus:border-emerald-500/50 transition-all resize-none text-sm text-text-primary placeholder:text-text-secondary/30"
                      />
                    </div>
                  </div>
                )}

                {formData.selectedService === 'Business Intelligence' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Data Source</label>
                      <select className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 text-sm text-text-primary outline-none focus:border-emerald-500/50 transition-all appearance-none">
                        <option className="bg-card-bg">Excel / CSV</option>
                        <option className="bg-card-bg">CRM (Salesforce, HubSpot)</option>
                        <option className="bg-card-bg">Database (SQL, NoSQL)</option>
                        <option className="bg-card-bg">API Integration</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Key Metrics</label>
                      <textarea 
                        rows={3}
                        placeholder="What insights do you need?"
                        className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 outline-none focus:border-emerald-500/50 transition-all resize-none text-sm text-text-primary placeholder:text-text-secondary/30"
                      />
                    </div>
                  </div>
                )}

                {(!formData.selectedService || (formData.selectedService !== 'Website Development' && formData.selectedService !== 'SEO' && formData.selectedService !== 'Mobile App Development' && formData.selectedService !== 'Business Intelligence')) && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Project Description</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your specific requirements..."
                      value={formData.projectDescription}
                      onChange={(e) => updateFormData({ projectDescription: e.target.value })}
                      className="w-full bg-card-bg border border-card-border rounded-2xl py-4 px-5 outline-none focus:border-emerald-500/50 transition-all resize-none text-sm text-text-primary placeholder:text-text-secondary/30"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Estimated Budget</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          className="py-4 px-4 rounded-2xl border border-card-border bg-card-bg text-[10px] font-black uppercase tracking-widest text-text-secondary/40 hover:border-emerald-500 hover:text-text-primary transition-all"
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Desired Timeline</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['< 1 Month', '1-3 Months', '3-6 Months', 'Ongoing'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className="py-4 px-4 rounded-2xl border border-card-border bg-card-bg text-[10px] font-black uppercase tracking-widest text-text-secondary/40 hover:border-emerald-500 hover:text-text-primary transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-500/20">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-text-primary mb-1 font-display">Strategy Session Included</p>
                      <p className="text-[11px] text-text-secondary/50 leading-relaxed">Submit your brief to unlock a complimentary 30-minute consultation with our technical architects.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Footer Actions */}
      <div className="pt-10 mt-auto flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
            step === 1 ? 'opacity-0 pointer-events-none' : 'text-text-secondary/40 hover:text-text-primary'
          }`}
        >
          <ChevronLeft size={18} />
          Back
        </button>

        {step < totalSteps ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            Next Step
            <ChevronRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
          >
            Submit Brief
            <Send size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
