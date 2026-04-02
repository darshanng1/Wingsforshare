import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, MapPin, Globe, Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Software Development', link: '/services/software-development' },
    { name: 'App Development', link: '/services/app-development' },
    { name: 'Digital Marketing', link: '/services/digital-marketing' },
    { name: 'SaaS Products', link: '/services/saas-products' },
    { name: 'SEO Optimization', link: '/services/seo' }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, link: 'https://github.com/wingsforshare' },
    { icon: <Twitter size={20} />, link: 'https://twitter.com/wingsforshare' },
    { icon: <Linkedin size={20} />, link: 'https://linkedin.com/company/wingsforshare' },
    { icon: <Instagram size={20} />, link: 'https://instagram.com/wingsforshare' }
  ];

  return (
    <footer className="bg-bg border-t border-white/5 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group cursor-pointer">
              <Logo className="h-12" />
            </Link>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-8">
              We build high-performance digital systems that generate revenue and scale businesses globally.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-primary mb-8 font-display">Services</h4>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to={service.link}
                    className="text-[15px] font-medium text-text-secondary hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    {service.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-primary mb-8 font-display">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-accent mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/40 mb-1">Email Us</p>
                  <a href="mailto:info@wingsforshare.com" className="text-[15px] font-bold text-text-primary hover:text-accent transition-colors font-display">
                    info@wingsforshare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-accent mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/40 mb-1">Call Us</p>
                  <a href="tel:+918618764541" className="text-[15px] font-bold text-text-primary hover:text-accent transition-colors font-display">
                    +91 86187 64541
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-primary mb-8 font-display">Headquarters</h4>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-accent mt-1" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/40 mb-1">Location</p>
                <p className="text-[15px] font-bold text-text-primary leading-relaxed font-display">
                  15, A.K Max Layout, Kuduregere, Bangalore - 562162
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-text-secondary/50">
            © {currentYear} WingsForShare Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-[12px] text-text-secondary/50 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[12px] text-text-secondary/50 hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-[12px] text-text-secondary/50 hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
