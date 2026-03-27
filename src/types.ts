export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'Websites' | 'Business Apps' | 'Ecommerce' | 'Marketing Services' | 'Automation Tools' | 'BI Tools' | 'Retail' | 'Digital Visiting Card-Web Based';
  screenshot: string;
  demoLink: string;
  adminLogin?: string;
  userLogin?: string;
  features: string[];
  fullDescription: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  businessType: string;
  projectRequirement: string;
  message: string;
}

export type ServiceType = 'Website Development' | 'SEO' | 'Mobile App Development' | 'Business Intelligence';

export interface ProjectIntakeData {
  // Step 1: Client Info
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;

  // Step 2: Service Selection
  selectedService: ServiceType | '';

  // Step 3: Dynamic Requirements
  webDev?: {
    websiteType: 'Corporate' | 'Ecommerce' | 'Portfolio' | 'SaaS' | '';
    numberOfPages: string;
    targetAudience: string;
    requiredFeatures: string;
    // Uploads (stored as File objects or metadata)
    logo?: File;
    contentDoc?: File;
    images?: File;
    references?: File;
  };
  seo?: {
    websiteUrl: string;
    targetCountry: string;
    businessCategory: string;
    competitorWebsites: string;
    // Uploads
    keywordList?: File;
    auditReport?: File;
    analyticsData?: File;
  };
  appDev?: {
    platform: 'Android' | 'iOS' | 'Both' | '';
    appType: string;
    coreFeatures: string;
    userRoles: string;
    // Uploads
    wireframe?: File;
    featureDoc?: File;
    references?: File;
  };
  bi?: {
    dataSourceType: 'Excel' | 'CRM' | 'ERP' | 'API' | '';
    dashboardType: string;
    keyMetrics: string;
    // Uploads
    sampleData?: File;
    reportTemplate?: File;
    existingDashboards?: File;
  };

  // Step 4: Description
  projectDescription: string;
}
