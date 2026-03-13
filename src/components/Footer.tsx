import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/10 transition-colors duration-300">
      {/* Consultation CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-black/5 dark:border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-2">
              Start Growing Your Business with Technology
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg">
              Partner with us to build systems that scale your operations and revenue.
            </p>
          </div>
          <Link 
            to="/#contact" 
            className="inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-80 transition-all active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Column 1: Company Overview */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white dark:text-black font-bold text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-black dark:text-white leading-none">WingsForShare</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40">Business Tech & Growth</span>
              </div>
            </Link>
            <p className="text-black/60 dark:text-white/60 text-base leading-relaxed">
              We help businesses grow through modern websites, automation tools, digital marketing systems, and custom business applications.
            </p>
          </div>
          
          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Business Website Development</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">SEO & Digital Marketing Systems</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Business Automation Tools</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Custom Business Applications</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Analytics & Data Dashboards</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Industries</h3>
            <ul className="space-y-4">
              <li><span className="text-black/60 dark:text-white/60 font-medium">Pest Control Systems</span></li>
              <li><span className="text-black/60 dark:text-white/60 font-medium">Manufacturing Solutions</span></li>
              <li><span className="text-black/60 dark:text-white/60 font-medium">Retail & E-commerce Platforms</span></li>
              <li><span className="text-black/60 dark:text-white/60 font-medium">Professional Service Automation</span></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Contact</h3>
            <ul className="space-y-6">
              <li>
                <Link to="/#contact" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium block mb-1">Business Consultation</Link>
              </li>
              <li className="flex items-center space-x-3 text-black/60 dark:text-white/60">
                <MessageCircle size={18} className="text-emerald-500" />
                <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors font-medium">WhatsApp: +91 86187 64541</a>
              </li>
              <li className="flex items-center space-x-3 text-black/60 dark:text-white/60">
                <Mail size={18} className="text-emerald-500" />
                <a href="mailto:contact@wingsforshare.com" className="hover:text-black dark:hover:text-white transition-colors font-medium">contact@wingsforshare.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-black/40 dark:text-white/40 font-medium">
            © {new Date().getFullYear()} WingsForShare Digital Solutions.
          </p>
          <div className="flex space-x-10">
            <Link to="/" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link to="/" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Terms of Service</Link>
            <Link to="/#contact" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
