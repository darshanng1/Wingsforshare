import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, MapPin, Globe, Linkedin, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', link: '/services/web-development' },
    { name: 'SEO Services', link: '/services/seo' },
    { name: 'Social Media Marketing', link: '/services/social-media-marketing' },
    { name: 'App Development', link: '/services/app-development' },
    { name: 'Business Analytics', link: '/services/business-analytics' },
    { name: 'Custom Software', link: '/services/custom-software' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/company/wings-for-share/' }
  ];

  return (
    <footer className="relative bg-bg pt-32 pb-16 overflow-hidden">
      {/* 3D Floor Perspective Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[600px] bg-gradient-to-t from-accent/5 to-transparent [perspective:1000px] pointer-events-none">
        <div className="absolute inset-0 [transform:rotateX(60deg)] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 md:mb-32">
          {/* Brand & Mission - Floating 3D Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 p-8 md:p-12 bg-card-bg/40 backdrop-blur-3xl rounded-[3rem] border border-card-border shadow-2xl relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative">
              <Link to="/" className="inline-block mb-10">
                <Logo className="h-12" />
              </Link>
              <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-text-primary mb-8 leading-tight">
                Engineering <span className="text-accent italic font-light">Digital Supremacy.</span>
              </h3>
              <p className="text-[18px] text-text-secondary leading-relaxed mb-10 max-w-sm">
                We don't just build software. We architect high-performance engines that power global business transformation.
              </p>
              <div className="flex items-center gap-5">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-all shadow-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {/* Services Link Map */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Capabilities</h4>
              <ul className="space-y-6">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.link}
                      className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-all flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-card-border group-hover:bg-accent transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — all contact details live on the Contact page */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Contact</h4>
              <p className="text-[15px] font-medium text-text-secondary leading-relaxed max-w-xs">
                Have a project or a question? Every enquiry goes straight to our inbox — all our contact details are on the contact page.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[15px] font-bold text-text-primary hover:text-accent transition-colors group"
              >
                Go to Contact
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Cinematic Bottom Bar */}
        <div className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-medium text-text-secondary/60">
              © {currentYear} WingsForShare Digital Solutions. All parameters secured.
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/80">System Status: Optimal</p>
          </div>
          
          <div className="flex items-center gap-10">
            {['Blog', 'Privacy', 'Terms', 'Sitemap'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="text-[11px] font-black uppercase tracking-[0.3em] text-text-secondary/60 hover:text-text-primary transition-all underline-offset-8 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
