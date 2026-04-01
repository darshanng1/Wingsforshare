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
        className="bg-white dark:bg-[#111] p-12 rounded-[3rem] border border-black/5 dark:border-white/10 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Project Brief Received!</h3>
        <p className="text-black/60 dark:text-white/60 mb-8">
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
    <div className="bg-white dark:bg-[#0d0d0d] rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 flex">
        {[...Array(totalSteps)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full transition-all duration-500 ${i + 1 <= step ? 'bg-emerald-500' : 'bg-transparent'}`}
            style={{ width: `${100 / totalSteps}%` }}
          />
        ))}
      </div>

      <div className="p-8 md:p-10 flex-grow overflow-y-auto custom-scrollbar">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-emerald-500">Step {step} of {totalSteps}</span>
            <span className="text-[10px] font-medium text-zinc-400">
              {step === 1 && "Client Identity"}
              {step === 2 && "Service Selection"}
              {step === 3 && "Project Scope"}
              {step === 4 && "Final Details"}
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {step === 1 && "Tell us about yourself"}
            {step === 2 && "What are we building?"}
            {step === 3 && "Define the requirements"}
            {step === 4 && "Budget & Timeline"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <input 
                        type="text" 
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => updateFormData({ fullName: e.target.value })}
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <input 
                        type="text" 
                        placeholder="Enter your company name"
                        value={formData.companyName}
                        onChange={(e) => updateFormData({ companyName: e.target.value })}
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Industry</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Real Estate, Healthcare"
                    value={formData.industry}
                    onChange={(e) => updateFormData({ industry: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { id: 'Website Development', icon: Globe, color: 'emerald' },
                  { id: 'SEO', icon: Search, color: 'blue' },
                  { id: 'Mobile App Development', icon: Smartphone, color: 'purple' },
                  { id: 'Business Intelligence', icon: BarChart3, color: 'orange' }
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => updateFormData({ selectedService: service.id as ServiceType })}
                    className={`p-6 rounded-3xl border text-left transition-all group ${
                      formData.selectedService === service.id 
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                        : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 text-zinc-500 hover:border-emerald-500/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      formData.selectedService === service.id ? 'bg-white/20' : 'bg-zinc-100 dark:bg-zinc-800 group-hover:bg-emerald-500/10'
                    }`}>
                      <service.icon 
                        size={20} 
                        className={formData.selectedService === service.id ? 'text-white' : 'text-zinc-400 group-hover:text-emerald-500'} 
                      />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-900 dark:text-white block leading-tight">{service.id}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {formData.selectedService === 'Website Development' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Website Type</label>
                        <select 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none"
                          onChange={(e) => updateFormData({ webDev: { ...formData.webDev, websiteType: e.target.value as any } as any })}
                        >
                          <option value="">Select Type</option>
                          <option value="Corporate">Corporate</option>
                          <option value="Ecommerce">Ecommerce</option>
                          <option value="Portfolio">Portfolio</option>
                          <option value="SaaS">SaaS</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Pages Needed</label>
                        <input 
                          type="text" 
                          placeholder="e.g. 5-10" 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          onChange={(e) => updateFormData({ webDev: { ...formData.webDev, numberOfPages: e.target.value } as any })}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-2 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                        <ImageIcon size={18} className="text-zinc-400 group-hover:text-emerald-500" />
                        <span className="text-[10px] font-semibold text-zinc-400">Upload Logo</span>
                      </div>
                      <div className="p-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-2 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                        <FileText size={18} className="text-zinc-400 group-hover:text-emerald-500" />
                        <span className="text-[10px] font-semibold text-zinc-400">Content Doc</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Reference Website</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                        <input 
                          type="url" 
                          placeholder="https://example.com" 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.selectedService === 'SEO' && (
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Target Keywords</label>
                      <input 
                        type="text" 
                        placeholder="e.g. real estate bangalore, luxury villas" 
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Current Website URL</label>
                        <input 
                          type="url" 
                          placeholder="https://yourwebsite.com" 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Target Location</label>
                        <input 
                          type="text" 
                          placeholder="e.g. USA, Bangalore" 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all" 
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">Content Availability</p>
                        <p className="text-[10px] text-zinc-500">Do you have existing content?</p>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <button type="button" className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg text-[10px] font-semibold">Yes</button>
                        <button type="button" className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg text-[10px] font-semibold">No</button>
                      </div>
                    </div>
                  </div>
                )}

                {formData.selectedService === 'Mobile App Development' && (
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Target Platform</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['iOS', 'Android', 'Both'].map((platform) => (
                          <button
                            key={platform}
                            type="button"
                            className="py-2 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-emerald-500 transition-all"
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Core Features</label>
                      <textarea 
                        rows={3}
                        placeholder="e.g. User login, Payment gateway, Push notifications..."
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none text-sm"
                      />
                    </div>
                  </div>
                )}

                {formData.selectedService === 'Business Intelligence' && (
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Data Source</label>
                      <select className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none">
                        <option>Excel / CSV</option>
                        <option>CRM (Salesforce, HubSpot)</option>
                        <option>Database (SQL, NoSQL)</option>
                        <option>API Integration</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Key Metrics to Track</label>
                      <textarea 
                        rows={3}
                        placeholder="e.g. Monthly Revenue, Customer Acquisition Cost, Churn Rate..."
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none text-sm"
                      />
                    </div>
                  </div>
                )}

                {(!formData.selectedService || (formData.selectedService !== 'Website Development' && formData.selectedService !== 'SEO' && formData.selectedService !== 'Mobile App Development' && formData.selectedService !== 'Business Intelligence')) && (
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Project Description</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your specific requirements..."
                        value={formData.projectDescription}
                        onChange={(e) => updateFormData({ projectDescription: e.target.value })}
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none text-sm"
                      />
                    </div>
                  </div>
                )}
                
                <div className="p-6 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <Upload size={20} className="text-zinc-400 group-hover:text-emerald-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">Click to upload files</p>
                    <p className="text-[10px] text-zinc-500 mt-1">PDF, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Estimated Budget</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          className="py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-emerald-500 transition-all"
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Desired Timeline</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['< 1 Month', '1-3 Months', '3-6 Months', 'Ongoing'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className="py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-emerald-500 transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white mb-1">Premium Strategy Session</p>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed">By submitting this brief, you'll also receive a complimentary 30-minute strategy session with our lead architect.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Footer Actions */}
      <div className="p-8 border-t border-black/5 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02] flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className={`flex items-center gap-2 text-xs font-semibold transition-all ${
            step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
          }`}
        >
          <ChevronLeft size={16} />
          Back
        </button>

        {step < totalSteps ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl text-xs font-bold hover:opacity-90 transition-all shadow-xl"
          >
            Next Step
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl text-xs font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
          >
            Submit Brief
            <Send size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
