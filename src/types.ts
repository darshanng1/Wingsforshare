export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'Websites' | 'Business Apps' | 'Ecommerce' | 'Marketing Services' | 'Automation Tools' | 'BI Tools';
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
