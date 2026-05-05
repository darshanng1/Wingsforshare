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
    <div className="space-y-3">
      <div className="flex justify-between items-center ml-2">
        <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        {selectedFile && (
          <button 
            type="button"
            onClick={() => onFileSelect(undefined)}
            className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"
          >
            <Trash2 size={12} />
            <span>Remove</span>
          </button>
        )}
      </div>
      
      <div 
        onClick={() => !selectedFile && inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-300 ${
          selectedFile 
            ? 'border-accent bg-accent/5' 
            : error 
              ? 'border-red-500/30 bg-red-500/5' 
              : 'border-card-border hover:border-accent/50 bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-accent/5'
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
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            selectedFile ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-black/10 dark:bg-white/10 text-text-secondary'
          }`}>
            {selectedFile ? <CheckCircle size={24} /> : <Upload size={24} />}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-bold truncate ${selectedFile ? 'text-accent' : 'text-text-primary'}`}>
              {selectedFile ? selectedFile.name : `Upload ${label}`}
            </p>
            {!selectedFile && <p className="text-[11px] font-medium text-text-secondary mt-1">Drag & drop or click to browse (Max 20MB)</p>}
          </div>
        </div>
      </div>
      {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{error}</p>}
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
    
    const currentYear = new Date().getFullYear();
    const newId = `PRJ-${currentYear}-` + Math.floor(1000 + Math.random() * 9000);
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
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                currentStep === step.id 
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-110 ring-4 ring-accent/10' 
                  : currentStep > step.id 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-black/5 dark:bg-white/5 text-text-secondary'
              }`}>
                {currentStep > step.id ? <CheckCircle size={24} /> : step.icon}
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                currentStep === step.id ? 'text-accent' : 'text-text-secondary'
              }`}>{step.title}</span>
            </div>
          ))}
        </div>
        <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            className="h-full bg-accent shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-card-bg backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-card-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />
        
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
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-4">Client Details</h3>
                <p className="text-text-secondary text-lg font-medium">Please provide your contact information to begin.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Full Name *</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      id="fullName"
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullname-error' : undefined}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.fullName ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                    />
                  </div>
                  {errors.fullName && <p id="fullname-error" className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1" role="alert">{errors.fullName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Company Name *</label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.companyName ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                    />
                  </div>
                  {errors.companyName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.companyName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Email Address *</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Phone Number *</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.phone ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.phone}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Country *</label>
                  <div className="relative group">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. United States"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.country ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                    />
                  </div>
                  {errors.country && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.country}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Industry *</label>
                  <div className="relative group">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. Technology, Healthcare"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 pl-12 pr-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.industry ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
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
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-4">Select Your Service</h3>
                <p className="text-text-secondary text-lg font-medium">Choose the primary service for this project request.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => selectService(service.id)}
                    className={`p-8 rounded-[2rem] border transition-all duration-500 text-left flex items-start space-x-6 relative overflow-hidden group ${
                      formData.selectedService === service.id
                        ? 'bg-accent border-accent text-white shadow-[0_20px_40px_rgba(16,185,129,0.25)] scale-[1.03]'
                        : 'bg-black/5 dark:bg-white/5 border-card-border text-text-primary hover:border-accent/40 hover:bg-accent/5'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 ${
                      formData.selectedService === service.id ? 'bg-white/20' : 'bg-accent/10 text-accent'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="relative z-10">
                      <p className="font-bold text-xl mb-2">{service.label}</p>
                      <p className={`text-sm leading-relaxed font-medium ${formData.selectedService === service.id ? 'text-white/90' : 'text-text-secondary'}`}>
                        {service.description}
                      </p>
                    </div>
                    {formData.selectedService === service.id && (
                      <motion.div 
                        layoutId="activeService"
                        className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover -z-10"
                      />
                    )}
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
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-4">Service Requirements</h3>
                <p className="text-text-secondary text-lg font-medium">Specific details for {formData.selectedService}.</p>
              </div>

              {/* Website Development Fields */}
              {formData.selectedService === 'Website Development' && formData.webDev && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Website Type *</label>
                      <div className="relative">
                        <select 
                          value={formData.webDev.websiteType}
                          onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, websiteType: e.target.value as any }})}
                          className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all appearance-none text-text-primary ${errors.websiteType ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                        >
                          <option value="">Select Type</option>
                          <option value="Corporate">Corporate</option>
                          <option value="Ecommerce">Ecommerce</option>
                          <option value="Portfolio">Portfolio</option>
                          <option value="SaaS">SaaS</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-text-secondary pointer-events-none" size={18} />
                      </div>
                      {errors.websiteType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.websiteType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Number of Pages *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 10-15"
                        value={formData.webDev.numberOfPages}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, numberOfPages: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.numberOfPages ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.numberOfPages && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.numberOfPages}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Target Audience *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Small Business Owners"
                        value={formData.webDev.targetAudience}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, targetAudience: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.targetAudience ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.targetAudience && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.targetAudience}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Required Features *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Blog, Contact Form, Payment"
                        value={formData.webDev.requiredFeatures}
                        onChange={(e) => setFormData({...formData, webDev: { ...formData.webDev!, requiredFeatures: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.requiredFeatures ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.requiredFeatures && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.requiredFeatures}</p>}
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
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Website URL *</label>
                      <input 
                        type="url" 
                        placeholder="https://example.com"
                        value={formData.seo.websiteUrl}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, websiteUrl: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.websiteUrl ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.websiteUrl && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.websiteUrl}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Target Country *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. United Kingdom"
                        value={formData.seo.targetCountry}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, targetCountry: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.targetCountry ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.targetCountry && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.targetCountry}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Business Category *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Real Estate"
                        value={formData.seo.businessCategory}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, businessCategory: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.businessCategory ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.businessCategory && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.businessCategory}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Competitor Websites *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. comp1.com, comp2.com"
                        value={formData.seo.competitorWebsites}
                        onChange={(e) => setFormData({...formData, seo: { ...formData.seo!, competitorWebsites: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.competitorWebsites ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.competitorWebsites && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.competitorWebsites}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-card-border">
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
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Platform *</label>
                      <div className="relative">
                        <select 
                          value={formData.appDev.platform}
                          onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, platform: e.target.value as any }})}
                          className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all appearance-none text-text-primary ${errors.platform ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                        >
                          <option value="">Select Platform</option>
                          <option value="Android">Android</option>
                          <option value="iOS">iOS</option>
                          <option value="Both">Both</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-text-secondary pointer-events-none" size={18} />
                      </div>
                      {errors.platform && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.platform}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">App Type *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Social Media, Delivery"
                        value={formData.appDev.appType}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, appType: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.appType ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.appType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.appType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Core Features *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Chat, Map, Payments"
                        value={formData.appDev.coreFeatures}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, coreFeatures: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.coreFeatures ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.coreFeatures && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.coreFeatures}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Number of User Roles *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Admin, Customer, Driver"
                        value={formData.appDev.userRoles}
                        onChange={(e) => setFormData({...formData, appDev: { ...formData.appDev!, userRoles: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.userRoles ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.userRoles && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.userRoles}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-card-border">
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
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Data Source Type *</label>
                      <div className="relative">
                        <select 
                          value={formData.bi.dataSourceType}
                          onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, dataSourceType: e.target.value as any }})}
                          className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all appearance-none text-text-primary ${errors.dataSourceType ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                        >
                          <option value="">Select Source</option>
                          <option value="Excel">Excel</option>
                          <option value="CRM">CRM</option>
                          <option value="ERP">ERP</option>
                          <option value="API">API</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-text-secondary pointer-events-none" size={18} />
                      </div>
                      {errors.dataSourceType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.dataSourceType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Dashboard Type *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Sales Analytics"
                        value={formData.bi.dashboardType}
                        onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, dashboardType: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.dashboardType ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.dashboardType && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.dashboardType}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Key Metrics Needed *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. ROI, Conversion Rate"
                        value={formData.bi.keyMetrics}
                        onChange={(e) => setFormData({...formData, bi: { ...formData.bi!, keyMetrics: e.target.value }})}
                        className={`w-full bg-black/5 dark:bg-white/5 border rounded-2xl py-4 px-6 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 ${errors.keyMetrics ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                      />
                      {errors.keyMetrics && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.keyMetrics}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-card-border">
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
              className="space-y-12 relative z-10"
            >
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-4">Project Description</h3>
                <p className="text-text-secondary text-lg font-medium">Describe your project in detail. This field is mandatory.</p>
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-secondary ml-2 mb-2 block">Describe your project in detail *</label>
                <textarea 
                  rows={8}
                  placeholder="Tell us everything... What problem are we solving? Who is the audience? What does success look like?"
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                  className={`w-full bg-black/5 dark:bg-white/5 border rounded-[2rem] p-8 text-[16px] outline-none transition-all text-text-primary placeholder:text-text-secondary/50 leading-relaxed ${errors.projectDescription ? 'border-red-500/50 bg-red-500/5' : 'border-card-border focus:border-accent focus:ring-4 focus:ring-accent/10'}`}
                />
                {errors.projectDescription && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-2">{errors.projectDescription}</p>}
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
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-4">Final Review</h3>
                <p className="text-text-secondary text-lg font-medium">Review your details and confirm to start your project journey.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-[2rem] border border-card-border">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-secondary mb-6">Client Summary</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary font-medium">Name</span>
                      <span className="text-sm font-bold text-text-primary">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary font-medium">Company</span>
                      <span className="text-sm font-bold text-text-primary">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary font-medium">Email</span>
                      <span className="text-sm font-bold text-text-primary">{formData.email}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-[2rem] border border-card-border">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-secondary mb-6">Service Selection</h4>
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/5">
                      {serviceOptions.find(s => s.id === formData.selectedService)?.icon}
                    </div>
                    <div>
                      <p className="text-xl font-black text-text-primary">{formData.selectedService}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mt-1">Primary Category</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-accent/5 rounded-[2rem] border border-accent/20">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-accent/20">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-text-primary mb-2">Ready to Launch</h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">By clicking submit, you confirm that all provided information and documents are accurate. Our team will contact you within 24 hours to schedule a deep-dive session.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-16 pt-12 border-t border-card-border flex items-center justify-between relative z-10">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-3 px-10 py-5 rounded-[2rem] font-black transition-all duration-300 ${
              currentStep === 1 
                ? 'opacity-0 pointer-events-none' 
                : 'bg-black/5 dark:bg-white/5 text-text-primary hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronLeft size={24} />
            <span className="text-[11px] font-bold uppercase tracking-widest">Back</span>
          </button>

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center space-x-3 px-12 py-5 rounded-[2rem] font-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-text-primary text-card-bg hover:scale-105 active:scale-95 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest">Continue</span>
              <ChevronRight size={24} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center space-x-4 bg-accent text-white px-16 py-6 rounded-[2rem] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_25px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_35px_70px_rgba(16,185,129,0.4)]"
            >
              <Rocket size={28} className="animate-bounce" />
              <span className="text-[14px] font-bold uppercase tracking-widest">Submit Project Request</span>
            </button>
          )}
        </div>
      </form>

      {/* Trust Badges */}
      <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-70">
        <div className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <ShieldCheck size={16} className="text-text-secondary group-hover:text-accent transition-colors" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">Enterprise Security</span>
        </div>
        <div className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <CheckCircle size={16} className="text-text-secondary group-hover:text-accent transition-colors" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">Confidentiality Guaranteed</span>
        </div>
        <div className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <Zap size={16} className="text-text-secondary group-hover:text-accent transition-colors" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">24h Response Time</span>
        </div>
      </div>
    </div>
  );
}
