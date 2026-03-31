import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Building2, Mail, Phone, Globe, Briefcase, 
  ChevronRight, ChevronLeft, CheckCircle, Upload, 
  X, FileText, Layout, Cpu, Target, Layers, 
  Zap, Smartphone, BarChart, Search, MessageSquare,
  ShieldCheck, Rocket, ArrowRight, AlertCircle, Trash2
} from 'lucide-react';
import { ProjectIntakeData, ServiceType } from '../types';

const steps = [
  { id: 1, title: 'Client Info', icon: <User size={18} /> },
  { id: 2, title: 'Service', icon: <Layers size={18} /> },
  { id: 3, title: 'Requirements', icon: <Zap size={18} /> },
  { id: 4, title: 'Description', icon: <MessageSquare size={18} /> },
  { id: 5, title: 'Review', icon: <ShieldCheck size={18} /> }
];

const serviceOptions: { id: ServiceType; label: string; icon: React.ReactNode; description: string }[] = [
  { 
    id: 'Website Development', 
    label: 'Website Development', 
    icon: <Layout size={24} />,
    description: 'Corporate, Ecommerce, Portfolio, or SaaS websites.'
  },
  { 
    id: 'SEO', 
    label: 'SEO', 
    icon: <Search size={24} />,
    description: 'Search engine optimization and digital marketing.'
  },
  { 
    id: 'Mobile App Development', 
    label: 'Mobile App Development', 
    icon: <Smartphone size={24} />,
    description: 'Native or cross-platform mobile applications.'
  },
  { 
    id: 'Business Intelligence', 
    label: 'Business Intelligence', 
    icon: <BarChart size={24} />,
    description: 'Data analytics, dashboards, and reporting.'
  }
];

interface FileUploadProps {
  label: string;
  required?: boolean;
  onFileSelect: (file: File | undefined) => void;
  selectedFile?: File;
  error?: string;
}

const FileUploadField: React.FC<FileUploadProps> = ({ label, required, onFileSelect, selectedFile, error }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center ml-1">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {selectedFile && (
          <button 
            type="button"
            onClick={() => onFileSelect(undefined)}
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>
      
      <div 
        onClick={() => !selectedFile && inputRef.current?.click()}
        className={`relative border border-dashed rounded-xl p-3 transition-all ${
          selectedFile 
            ? 'border-emerald-500 bg-emerald-500/5' 
            : error 
              ? 'border-red-500/30 bg-red-500/5' 
              : 'border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer'
        }`}
      >
        <input 
          type="file" 
          ref={inputRef}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              if (file.size > 20 * 1024 * 1024) {
                alert('File size exceeds 20MB limit.');
                return;
              }
              onFileSelect(file);
            }
          }}
        />
        
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            selectedFile ? 'bg-emerald-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
          }`}>
            {selectedFile ? <CheckCircle size={16} /> : <Upload size={16} />}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-xs font-semibold truncate ${selectedFile ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-700 dark:text-zinc-300'}`}>
              {selectedFile ? selectedFile.name : `Upload ${label}`}
            </p>
            {!selectedFile && <p className="text-[10px] text-zinc-400">Max 20MB</p>}
          </div>
        </div>
      </div>
      {error && <p className="text-[10px] text-red-500 font-semibold ml-1">{error}</p>}
    </div>
  );
};

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<ProjectIntakeData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    industry: '',
    selectedService: '',
    projectDescription: '',
  });

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
      if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    }
    
    if (step === 2) {
      if (!formData.selectedService) newErrors.selectedService = 'Please select a service';
    }
    
    if (step === 3) {
      if (formData.selectedService === 'Website Development') {
        if (!formData.webDev?.websiteType) newErrors.websiteType = 'Website Type is required';
        if (!formData.webDev?.numberOfPages.trim()) newErrors.numberOfPages = 'Number of Pages is required';
        if (!formData.webDev?.targetAudience.trim()) newErrors.targetAudience = 'Target Audience is required';
        if (!formData.webDev?.requiredFeatures.trim()) newErrors.requiredFeatures = 'Required Features is required';
        if (!formData.webDev?.logo) newErrors.logo = 'Logo is required';
        if (!formData.webDev?.contentDoc) newErrors.contentDoc = 'Content Document is required';
        if (!formData.webDev?.images) newErrors.images = 'Images/Media are required';
      }
      if (formData.selectedService === 'SEO') {
        if (!formData.seo?.websiteUrl.trim()) newErrors.websiteUrl = 'Website URL is required';
        if (!formData.seo?.targetCountry.trim()) newErrors.targetCountry = 'Target Country is required';
        if (!formData.seo?.businessCategory.trim()) newErrors.businessCategory = 'Business Category is required';
        if (!formData.seo?.competitorWebsites.trim()) newErrors.competitorWebsites = 'Competitor Websites are required';
      }
      if (formData.selectedService === 'Mobile App Development') {
        if (!formData.appDev?.platform) newErrors.platform = 'Platform is required';
        if (!formData.appDev?.appType.trim()) newErrors.appType = 'App Type is required';
        if (!formData.appDev?.coreFeatures.trim()) newErrors.coreFeatures = 'Core Features are required';
        if (!formData.appDev?.userRoles.trim()) newErrors.userRoles = 'Number of User Roles is required';
      }
      if (formData.selectedService === 'Business Intelligence') {
        if (!formData.bi?.dataSourceType) newErrors.dataSourceType = 'Data Source Type is required';
        if (!formData.bi?.dashboardType.trim()) newErrors.dashboardType = 'Dashboard Type is required';
        if (!formData.bi?.keyMetrics.trim()) newErrors.keyMetrics = 'Key Metrics are required';
      }
    }
    
    if (step === 4) {
      if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectService = (service: ServiceType) => {
    setFormData(prev => {
      const newData = { ...prev, selectedService: service };
      // Initialize service-specific objects
      if (service === 'Website Development' && !newData.webDev) {
        newData.webDev = { websiteType: '', numberOfPages: '', targetAudience: '', requiredFeatures: '' };
      }
      if (service === 'SEO' && !newData.seo) {
        newData.seo = { websiteUrl: '', targetCountry: '', businessCategory: '', competitorWebsites: '' };
      }
      if (service === 'Mobile App Development' && !newData.appDev) {
        newData.appDev = { platform: '', appType: '', coreFeatures: '', userRoles: '' };
      }
      if (service === 'Business Intelligence' && !newData.bi) {
        newData.bi = { dataSourceType: '', dashboardType: '', keyMetrics: '' };
      }
      return newData;
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    // Simulate API call
    console.log('Submitting Project Intake:', formData);
    
    const newId = 'PRJ-2026-' + Math.floor(1000 + Math.random() * 9000);
    setProjectId(newId);
    
    // In a real app, use FormData for file uploads
    // const payload = new FormData();
    // ...
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-white dark:bg-[#111] p-12 md:p-20 rounded-[3rem] border border-black/5 dark:border-white/10 text-center shadow-2xl"
      >
        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tighter">Project Request Received!</h2>
        <p className="text-xl text-black/60 dark:text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Your service-specific requirements have been successfully submitted. Our team will review the details and files provided.
        </p>
        
        <div className="bg-black/5 dark:bg-white/5 p-8 rounded-3xl mb-12 inline-block text-left border border-black/5 dark:border-white/10">
          <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Project ID</p>
          <p className="text-2xl font-mono font-bold text-emerald-500">{projectId}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12 md:mb-20 overflow-x-hidden">
        <div className="flex justify-between items-center mb-8 px-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center space-y-3 min-w-[80px] transition-all duration-500 ${
                currentStep >= step.id ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                currentStep === step.id 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-110' 
                  : currentStep > step.id 
                    ? 'bg-emerald-500/20 text-emerald-500' 
                    : 'bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40'
              }`}>
                {currentStep > step.id ? <CheckCircle size={20} /> : step.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            className="h-full bg-emerald-500"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111] p-8 md:p-16 rounded-[3rem] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {/* STEP 1: Client Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8 relative z-10"
            >
              <div className="mb-10">
                <h3 className="tracking-tighter">Client Details</h3>
                <p className="text-black/40 dark:text-white/40 font-medium">All fields in this step are mandatory.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.fullName ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.fullName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Company Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="text" 
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.companyName ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.companyName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.companyName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.email ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.phone ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.phone}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Country *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="text" 
                      placeholder="e.g. United States"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.country ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.country && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.country}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Industry *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                    <input 
                      type="text" 
                      placeholder="e.g. Technology, Healthcare"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.industry ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                    />
                  </div>
                  {errors.industry && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.industry}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Service Selection */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8 relative z-10"
            >
              <div className="mb-10">
                <h3 className="tracking-tighter">Select Your Service</h3>
                <p className="text-black/40 dark:text-white/40 font-medium">Choose the primary service for this project request.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => selectService(service.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 text-left flex items-start space-x-5 ${
                      formData.selectedService === service.id
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-xl shadow-emerald-500/20 scale-[1.02]'
                        : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white hover:border-emerald-500/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      formData.selectedService === service.id ? 'bg-white/20' : 'bg-zinc-100 dark:bg-zinc-800'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">{service.label}</p>
                      <p className={`text-xs leading-relaxed ${formData.selectedService === service.id ? 'text-white/80' : 'text-zinc-500'}`}>
                        {service.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              {errors.selectedService && <p className="text-xs text-red-500 font-semibold text-center">{errors.selectedService}</p>}
            </motion.div>
          )}

          {/* STEP 3: Dynamic Requirements */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10 relative z-10"
            >
              <div className="mb-10">
                <h3 className="tracking-tighter">Service Requirements</h3>
                <p className="text-black/40 dark:text-white/40 font-medium">Specific details for {formData.selectedService}.</p>
              </div>

              {/* Website Development Fields */}
              {formData.selectedService === 'Website Development' && formData.webDev && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Website Type *</label>
                      <select 
                        value={formData.webDev.websiteType}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, websiteType: e.target.value as any }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all appearance-none text-zinc-900 dark:text-zinc-100 ${errors.websiteType ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      >
                        <option value="">Select Type</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="SaaS">SaaS</option>
                      </select>
                      {errors.websiteType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.websiteType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Number of Pages *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 10-15"
                        value={formData.webDev.numberOfPages}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, numberOfPages: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.numberOfPages ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.numberOfPages && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.numberOfPages}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Target Audience *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Small Business Owners"
                        value={formData.webDev.targetAudience}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, targetAudience: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.targetAudience ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.targetAudience && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.targetAudience}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Required Features *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Blog, Contact Form, Payment"
                        value={formData.webDev.requiredFeatures}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, requiredFeatures: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.requiredFeatures ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.requiredFeatures && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.requiredFeatures}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <FileUploadField 
                      label="Logo" 
                      required 
                      selectedFile={formData.webDev.logo}
                      onFileSelect={(file) => setFormData({...formData, webDev: { ...formData.webDev!, logo: file }})}
                      error={errors.logo}
                    />
                    <FileUploadField 
                      label="Website Content Document" 
                      required 
                      selectedFile={formData.webDev.contentDoc}
                      onFileSelect={(file) => setFormData({...formData, webDev: { ...formData.webDev!, contentDoc: file }})}
                      error={errors.contentDoc}
                    />
                    <FileUploadField 
                      label="Images / Media" 
                      required 
                      selectedFile={formData.webDev.images}
                      onFileSelect={(file) => setFormData({...formData, webDev: { ...formData.webDev!, images: file }})}
                      error={errors.images}
                    />
                    <FileUploadField 
                      label="Reference Websites (Optional)" 
                      selectedFile={formData.webDev.references}
                      onFileSelect={(file) => setFormData({...formData, webDev: { ...formData.webDev!, references: file }})}
                    />
                  </div>
                </div>
              )}

              {/* SEO Fields */}
              {formData.selectedService === 'SEO' && formData.seo && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Website URL *</label>
                      <input 
                        type="url" 
                        placeholder="https://example.com"
                        value={formData.seo.websiteUrl}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, websiteUrl: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.websiteUrl ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.websiteUrl && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.websiteUrl}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Target Country *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. United Kingdom"
                        value={formData.seo.targetCountry}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, targetCountry: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.targetCountry ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.targetCountry && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.targetCountry}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Business Category *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Real Estate"
                        value={formData.seo.businessCategory}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, businessCategory: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.businessCategory ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.businessCategory && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.businessCategory}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Competitor Websites *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. comp1.com, comp2.com"
                        value={formData.seo.competitorWebsites}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, competitorWebsites: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.competitorWebsites ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.competitorWebsites && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.competitorWebsites}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <FileUploadField 
                      label="Keyword List (Optional)" 
                      selectedFile={formData.seo.keywordList}
                      onFileSelect={(file) => setFormData({...formData, seo: { ...formData.seo!, keywordList: file }})}
                    />
                    <FileUploadField 
                      label="SEO Audit Report (Optional)" 
                      selectedFile={formData.seo.auditReport}
                      onFileSelect={(file) => setFormData({...formData, seo: { ...formData.seo!, auditReport: file }})}
                    />
                    <FileUploadField 
                      label="Existing Analytics Data (Optional)" 
                      selectedFile={formData.seo.analyticsData}
                      onFileSelect={(file) => setFormData({...formData, seo: { ...formData.seo!, analyticsData: file }})}
                    />
                  </div>
                </div>
              )}

              {/* Mobile App Development Fields */}
              {formData.selectedService === 'Mobile App Development' && formData.appDev && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Platform *</label>
                      <select 
                        value={formData.appDev.platform}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, platform: e.target.value as any }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all appearance-none text-zinc-900 dark:text-zinc-100 ${errors.platform ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      >
                        <option value="">Select Platform</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                        <option value="Both">Both</option>
                      </select>
                      {errors.platform && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.platform}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">App Type *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Social Media, Delivery"
                        value={formData.appDev.appType}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, appType: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.appType ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.appType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.appType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Core Features *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Chat, Map, Payments"
                        value={formData.appDev.coreFeatures}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, coreFeatures: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.coreFeatures ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.coreFeatures && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.coreFeatures}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Number of User Roles *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Admin, Customer, Driver"
                        value={formData.appDev.userRoles}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, userRoles: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.userRoles ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.userRoles && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.userRoles}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <FileUploadField 
                      label="App Wireframe / Design" 
                      selectedFile={formData.appDev.wireframe}
                      onFileSelect={(file) => setFormData({...formData, appDev: { ...formData.appDev!, wireframe: file }})}
                    />
                    <FileUploadField 
                      label="Feature Document" 
                      selectedFile={formData.appDev.featureDoc}
                      onFileSelect={(file) => setFormData({...formData, appDev: { ...formData.appDev!, featureDoc: file }})}
                    />
                    <FileUploadField 
                      label="Reference Apps" 
                      selectedFile={formData.appDev.references}
                      onFileSelect={(file) => setFormData({...formData, appDev: { ...formData.appDev!, references: file }})}
                    />
                  </div>
                </div>
              )}

              {/* Business Intelligence Fields */}
              {formData.selectedService === 'Business Intelligence' && formData.bi && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Data Source Type *</label>
                      <select 
                        value={formData.bi.dataSourceType}
                        onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, dataSourceType: e.target.value as any }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all appearance-none text-zinc-900 dark:text-zinc-100 ${errors.dataSourceType ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      >
                        <option value="">Select Source</option>
                        <option value="Excel">Excel</option>
                        <option value="CRM">CRM</option>
                        <option value="ERP">ERP</option>
                        <option value="API">API</option>
                      </select>
                      {errors.dataSourceType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.dataSourceType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Dashboard Type *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Sales Analytics"
                        value={formData.bi.dashboardType}
                        onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, dashboardType: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.dashboardType ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.dashboardType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.dashboardType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Key Metrics Needed *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. ROI, Conversion Rate"
                        value={formData.bi.keyMetrics}
                        onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, keyMetrics: e.target.value }})}
                        className={`w-full bg-white dark:bg-zinc-900 border rounded-xl py-2.5 px-4 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 ${errors.keyMetrics ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                      />
                      {errors.keyMetrics && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.keyMetrics}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <FileUploadField 
                      label="Sample Data File" 
                      selectedFile={formData.bi.sampleData}
                      onFileSelect={(file) => setFormData({...formData, bi: { ...formData.bi!, sampleData: file }})}
                    />
                    <FileUploadField 
                      label="Report Template" 
                      selectedFile={formData.bi.reportTemplate}
                      onFileSelect={(file) => setFormData({...formData, bi: { ...formData.bi!, reportTemplate: file }})}
                    />
                    <FileUploadField 
                      label="Existing Dashboards" 
                      selectedFile={formData.bi.existingDashboards}
                      onFileSelect={(file) => setFormData({...formData, bi: { ...formData.bi!, existingDashboards: file }})}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 4: Project Description */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8 relative z-10"
            >
              <div className="mb-10">
                <h3 className="tracking-tighter">Project Description</h3>
                <p className="text-black/40 dark:text-white/40 font-medium">Describe your project in detail. This field is mandatory.</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Describe your project in detail *</label>
                <textarea 
                  rows={8}
                  placeholder="Tell us everything... What problem are we solving? Who is the audience? What does success look like?"
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                  className={`w-full bg-white dark:bg-zinc-900 border rounded-xl p-6 text-sm outline-none transition-all text-zinc-900 dark:text-zinc-100 leading-relaxed ${errors.projectDescription ? 'border-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'}`}
                />
                {errors.projectDescription && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.projectDescription}</p>}
              </div>
            </motion.div>
          )}

          {/* STEP 5: Review & Submit */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12 relative z-10"
            >
              <div className="mb-10">
                <h3 className="tracking-tighter">Final Review</h3>
                <p className="text-black/40 dark:text-white/40 font-medium">Review your details and confirm to start your project journey.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-4">Client Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-500">Name</span>
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-500">Company</span>
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-500">Email</span>
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">{formData.email}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-4">Service Selection</h4>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                      {serviceOptions.find(s => s.id === formData.selectedService)?.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">{formData.selectedService}</p>
                      <p className="text-[10px] text-zinc-500">Primary Project Category</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">Ready to Launch</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">By clicking submit, you confirm that all provided information and documents are accurate. Our team will contact you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/10 flex items-center justify-between relative z-10">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold transition-all ${
              currentStep === 1 
                ? 'opacity-0 pointer-events-none' 
                : 'bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center space-x-2 px-10 py-4 rounded-2xl font-bold transition-all shadow-xl bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95"
            >
              <span>Continue</span>
              <ChevronRight size={20} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center space-x-3 bg-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-500/20"
            >
              <Rocket size={24} />
              <span>Launch Project Request</span>
            </button>
          )}
        </div>
      </form>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={14} className="text-zinc-400" />
          <span className="text-[10px] font-semibold text-zinc-500">Enterprise Security</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle size={14} className="text-zinc-400" />
          <span className="text-[10px] font-semibold text-zinc-500">Confidentiality Guaranteed</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap size={14} className="text-zinc-400" />
          <span className="text-[10px] font-semibold text-zinc-500">24h Response Time</span>
        </div>
      </div>
    </div>
  );
}
