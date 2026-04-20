import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Layout, Smartphone, BarChart, Briefcase, Zap, 
  CheckCircle, ArrowRight, Rocket, Shield, Cpu,
  Database, Search, Target, MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';
import { ConsultationForm } from '@/components';

const servicesData: Record<string, any> = {
  'web-development': {
    title: 'Web Development Company',
    subtitle: 'High-Performance Websites That Drive Results',
    description: 'As a leading web development company, we specialize in creating custom, SEO-optimized websites that serve as powerful growth engines for your business.',
    icon: <Layout className="text-blue-500" />,
    features: [
      'Custom Website Design & Development',
      'Ecommerce Solutions (Shopify, WooCommerce)',
      'Progressive Web Apps (PWA)',
      'SEO & Performance Optimization',
      'Content Management Systems (CMS)',
      'Website Maintenance & Support'
    ],
    benefits: [
      { title: 'SEO Optimized', desc: 'Rank higher on Google with our search-engine-friendly code structures.' },
      { title: 'Mobile First', desc: 'Flawless experience across all devices, ensuring you never miss a lead.' },
      { title: 'Fast Loading', desc: 'Speed-optimized pages to reduce bounce rates and improve user engagement.' }
    ],
    keywords: 'web development company, custom website development, ecommerce solutions, SEO optimized websites'
  },
  'app-development': {
    title: 'Mobile App Development Services',
    subtitle: 'Innovative Mobile Solutions for iOS & Android',
    description: 'Our expert mobile app development services focus on creating intuitive, high-performance applications that engage users and solve business challenges.',
    icon: <Smartphone className="text-emerald-500" />,
    features: [
      'iOS & Android App Development',
      'Cross-Platform Solutions (React Native, Flutter)',
      'UI/UX Design for Mobile',
      'App Store Optimization (ASO)',
      'Backend Integration & APIs',
      'Mobile App Maintenance'
    ],
    benefits: [
      { title: 'User-Centric Design', desc: 'Intuitive interfaces that provide a seamless and engaging user experience.' },
      { title: 'Scalable Architecture', desc: 'Apps built to grow with your user base and business needs.' },
      { title: 'Secure & Robust', desc: 'Enterprise-grade security to protect your data and user privacy.' }
    ],
    keywords: 'mobile app development services, iOS app development, android app development, cross-platform apps'
  },
  'business-intelligence': {
    title: 'Business Intelligence Solutions',
    subtitle: 'Turn Your Data Into Actionable Insights',
    description: 'Leverage our business intelligence solutions to gain a competitive edge. We provide data analytics for business that drive informed decision-making.',
    icon: <BarChart className="text-purple-500" />,
    features: [
      'Interactive Data Dashboards',
      'Predictive Analytics',
      'Data Warehousing & Integration',
      'Real-time Performance Tracking',
      'Custom Reporting Systems',
      'KPI Monitoring & Alerts'
    ],
    benefits: [
      { title: 'Informed Decisions', desc: 'Make choices based on data, not guesswork, to drive business growth.' },
      { title: 'Operational Efficiency', desc: 'Identify bottlenecks and optimize your processes with clear data.' },
      { title: 'Market Trends', desc: 'Stay ahead of the curve by identifying emerging market trends early.' }
    ],
    keywords: 'business intelligence solutions, data analytics for business, data dashboards, predictive analytics'
  },
  'business-consulting': {
    title: 'Business Development Consulting',
    subtitle: 'Strategic Guidance for Sustainable Growth',
    description: 'Our business development consulting services help you identify new opportunities, optimize operations, and scale your business effectively.',
    icon: <Briefcase className="text-pink-500" />,
    features: [
      'Market Research & Analysis',
      'Growth Strategy Development',
      'Operational Process Optimization',
      'Sales & Marketing Alignment',
      'Digital Strategy Consulting',
      'Business Model Innovation'
    ],
    benefits: [
      { title: 'Expert Guidance', desc: 'Access to seasoned consultants with deep industry knowledge.' },
      { title: 'Actionable Strategies', desc: 'Practical plans that you can implement immediately for results.' },
      { title: 'Long-term Success', desc: 'Focus on building a sustainable and scalable business model.' }
    ],
    keywords: 'business development consulting, growth strategy, market research, business optimization'
  },
  'digital-transformation': {
    title: 'Digital Transformation Services',
    subtitle: 'Modernize Your Business for the Digital Age',
    description: 'Our comprehensive digital transformation services help you integrate modern technology into all areas of your business, fundamentally changing how you operate.',
    icon: <Zap className="text-yellow-500" />,
    features: [
      'Legacy System Modernization',
      'Cloud Migration & Strategy',
      'Process Automation',
      'Digital Customer Experience',
      'Data-Driven Culture Building',
      'Technology Stack Optimization'
    ],
    benefits: [
      { title: 'Increased Agility', desc: 'Respond faster to market changes with a modern technology stack.' },
      { title: 'Enhanced Productivity', desc: 'Automate repetitive tasks and empower your team with better tools.' },
      { title: 'Future-Proofing', desc: 'Ensure your business remains competitive in an increasingly digital world.' }
    ],
    keywords: 'digital transformation services, business modernization, cloud migration, process automation'
  },
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions for Unique Business Challenges',
    description: 'Our custom software development services are designed to build robust, scalable, and secure applications that align perfectly with your business goals.',
    icon: <Cpu className="text-blue-500" />,
    features: [
      'Enterprise Software Development',
      'SaaS Product Development',
      'API Development & Integration',
      'Legacy System Refactoring',
      'Cloud-Native Applications',
      'Software Architecture Design'
    ],
    benefits: [
      { title: 'Perfect Fit', desc: 'Software built specifically for your workflows, eliminating unnecessary bloat.' },
      { title: 'Full Ownership', desc: 'Own your IP and have complete control over your technology roadmap.' },
      { title: 'Competitive Edge', desc: 'Unique features that set you apart from competitors using off-the-shelf tools.' }
    ],
    keywords: 'custom software development, enterprise software, SaaS development, software architecture'
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <SEO 
        title={`${service.title} – WingsForShare Digital Solutions`}
        description={service.description}
        keywords={service.keywords}
        canonical={`https://wingsforshare.com/services/${slug}`}
      />

      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-6 border border-black/5 dark:border-white/10"
          >
            <div className="text-emerald-500">{service.icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Professional Technology Services</span>
          </motion.div>
          
          <h1 className="mb-6 tracking-tighter flex items-center justify-center gap-4">
            <span className="shrink-0 opacity-80">{service.icon}</span>
            {service.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-black/40 dark:text-white/40 italic serif mb-8">{service.subtitle}</h2>
          
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-3xl mx-auto leading-relaxed mb-12">
            {service.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              Get a Free Quote
            </a>
            <Link 
              to="/start-project" 
              className="bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Features & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8">Core Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-black/[0.02] dark:bg-white/[0.02] rounded-xl border border-black/5 dark:border-white/10">
                  <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-black/80 dark:text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="mb-8">Why It Matters</h3>
            {service.benefits.map((benefit: any, idx: number) => (
              <div key={idx} className="group">
                <h4 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">{benefit.title}</h4>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h3 className="mb-6">Ready to Transform Your Business?</h3>
            <p className="text-black/60 dark:text-white/60 mb-8 leading-relaxed">
              Our team of experts is ready to help you implement the best {service.title} for your business. 
              Fill out the form to schedule a free consultation and get a custom quote.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                  <Rocket size={20} />
                </div>
                <span className="font-bold">Fast Project Kickoff</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <span className="font-bold">Secure & Confidential</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center">
                  <Target size={20} />
                </div>
                <span className="font-bold">Results-Driven Approach</span>
              </div>
            </div>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
