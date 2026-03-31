export interface Product {
  id: string;
  slug: string;
  name: string;
  title?: string; // Added for backward compatibility
  description: string;
  shortDescription: string;
  category: string; // Changed to string for flexibility
  screenshot: string;
  image?: string; // Added for backward compatibility
  demo?: string; // Added for backward compatibility
  demoLink: string;
  details?: string; // Added for backward compatibility
  adminLogin?: string;
  userLogin?: string;
  features: string[];
  fullDescription: string;
  result?: string; // Added for highlighting project outcomes
  sector?: string;
  industry?: string;
  status?: 'live' | 'coming';
  highlight?: boolean;
  password?: string;
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
