import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/10 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white dark:text-black font-bold text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-black dark:text-white leading-none">WingsForShare</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Digital Solutions</span>
              </div>
            </Link>
            <p className="text-black/60 dark:text-white/60 text-lg max-w-sm mb-10 leading-relaxed">
              Custom Web Development, Business Apps & Digital Marketing Solutions designed to grow your business faster.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Web Development</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">App Development</Link></li>
              <li><Link to="/#services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Digital Marketing</Link></li>
              <li><Link to="/#products" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Ready-made Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Our Story</Link></li>
              <li><Link to="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Careers</Link></li>
              <li><Link to="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Press Kit</Link></li>
              <li><Link to="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-8">Support</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-black/60 dark:text-white/60">
                <MessageCircle size={18} />
                <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors font-medium">WhatsApp: +91 86187 64541</a>
              </li>
              <li className="flex items-center space-x-3 text-black/60 dark:text-white/60">
                <Phone size={18} />
                <a href="tel:+918618764541" className="hover:text-black dark:hover:text-white transition-colors font-medium">Phone: +91 86187 64541</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-black/40 dark:text-white/40 font-medium">
            © {new Date().getFullYear()} WingsForShare Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-10">
            <Link to="/" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link to="/" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Terms of Service</Link>
            <Link to="/" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
