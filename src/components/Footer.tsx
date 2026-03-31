import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    solutions: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'SEO & Growth', href: '/services/seo' },
      { name: 'Business Intelligence', href: '/services/business-intelligence' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/#portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', icon: <Twitter size={18} />, href: '#' },
      { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
      { name: 'GitHub', icon: <Github size={18} />, href: '#' },
      { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    ]
  };

  return (
    <footer className="bg-white dark:bg-[#030303] pt-32 pb-12 relative overflow-hidden transition-colors duration-500 border-t border-zinc-100 dark:border-zinc-900">
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none select-none">
        <h2 className="text-[25vw] font-black text-zinc-50 dark:text-zinc-900/05 leading-none tracking-tighter">
          WINGS
        </h2>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-10 group">
              <Logo className="h-10" />
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-10 max-w-sm">
              We specialize in **Custom Web Development**, **Mobile Apps**, **SEO Optimization**, and **Business Intelligence (BI)** solutions that drive real business results.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all bg-white dark:bg-zinc-900/50"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-10">Core Solutions</h4>
            <ul className="space-y-5">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-10">Company</h4>
            <ul className="space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-10">Contact</h4>
            <div className="space-y-8">
              <div className="group">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Direct Line</span>
                <a href="tel:8618764541" className="text-xl font-bold text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors">
                  +91 86187 64541
                </a>
              </div>
              <div className="group">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Email Inquiry</span>
                <a href="mailto:info@wingsforshare.com" className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 transition-colors">
                  info@wingsforshare.com
                </a>
              </div>
              <div className="group">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Headquarters</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  15, A.K Max Layout, Kuduregere,<br />Bangalore - 562162
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              © {currentYear} WingsForShare
            </p>
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
            <div className="flex gap-6">
              <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
