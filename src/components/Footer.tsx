import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Globe, Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

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
    <footer className="bg-zinc-50 dark:bg-[#050505] border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">WINGSFORSHARE</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              We build high-performance digital systems that generate revenue and scale businesses globally.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-8">Services</h4>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.link}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2 group"
                  >
                    {service.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-emerald-500 mt-1" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email Us</p>
                  <a href="mailto:info@wingsforshare.com" className="text-sm font-bold text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors">
                    info@wingsforshare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-emerald-500 mt-1" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Call Us</p>
                  <a href="tel:+918618764541" className="text-sm font-bold text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors">
                    +91 86187 64541
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-8">Headquarters</h4>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-emerald-500 mt-1" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Location</p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white leading-relaxed">
                  15, A.K Max Layout, Kuduregere, Bangalore - 562162
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            © {currentYear} WingsForShare Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Terms of Service</a>
            <a href="/sitemap" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
