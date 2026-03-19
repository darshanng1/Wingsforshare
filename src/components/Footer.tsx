import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/10 transition-colors duration-300">
      {/* Consultation CTA Section */}
      <div className="container-custom py-10 md:py-20 border-b border-black/5 dark:border-white/10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Start Growing Your Business with Technology
            </h2>
            <p className="text-black/60 dark:text-white/60 text-base md:text-lg">
              Partner with us to build systems that scale your operations and revenue.
            </p>
          </div>
          <Link 
            to="/start-project" 
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-80 transition-all active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="container-custom py-10 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Company Overview */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Logo className="h-10" showText={true} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40">Business Technology Growth</span>
              </div>
            </Link>
            <p className="text-black/60 dark:text-white/60 text-sm md:text-base leading-relaxed max-w-xs">
              We help businesses grow through modern websites, automation tools, digital marketing systems, and custom business applications.
            </p>
          </div>
          
          {/* Column 2: Solutions */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-6 md:mb-8">Solutions</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><Link to="/services/web-development" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Web Development Company</Link></li>
              <li><Link to="/services/app-development" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Mobile App Development</Link></li>
              <li><Link to="/services/business-intelligence" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Business Intelligence Solutions</Link></li>
              <li><Link to="/services/business-consulting" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Business Development Consulting</Link></li>
              <li><Link to="/services/digital-transformation" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Digital Transformation Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-6 md:mb-8">Industries</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><span className="text-sm md:text-base text-black/60 dark:text-white/60 font-medium">Pest Control Systems</span></li>
              <li><span className="text-sm md:text-base text-black/60 dark:text-white/60 font-medium">Manufacturing Solutions</span></li>
              <li><span className="text-sm md:text-base text-black/60 dark:text-white/60 font-medium">Retail & E-commerce Platforms</span></li>
              <li><span className="text-sm md:text-base text-black/60 dark:text-white/60 font-medium">Professional Service Automation</span></li>
            </ul>
          </div>

          {/* Column 4: Start Project */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-6 md:mb-8">Connect</h3>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link to="/contact" className="text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium block mb-1">Contact Us</Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 text-black/60 dark:text-white/60">
                <MessageCircle size={16} className="text-emerald-500" />
                <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-black dark:hover:text-white transition-colors font-medium">WhatsApp: +91 86187 64541</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 text-black/60 dark:text-white/60">
                <Mail size={16} className="text-emerald-500" />
                <a href="mailto:darshanng@gmail.com" className="text-sm md:text-base hover:text-black dark:hover:text-white transition-colors font-medium">darshanng@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="mt-10 md:mt-24 pt-8 md:pt-12 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-xs md:text-sm text-black/40 dark:text-white/40 font-medium text-center md:text-left">
            © {new Date().getFullYear()} WingsForShare Digital Solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="/" className="text-xs md:text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link to="/" className="text-xs md:text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Terms of Service</Link>
            <Link to="/start-project" className="text-xs md:text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Start Project</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
