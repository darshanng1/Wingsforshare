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
            className="lg:col-span-5 p-8 md:p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative">
              <Link to="/" className="inline-block mb-10">
                <Logo className="h-12" />
              </Link>
              <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mb-8 leading-tight">
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
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all shadow-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {/* Services Link Map */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Capabilities</h4>
              <ul className="space-y-6">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.link}
                      className="text-[15px] font-medium text-text-secondary hover:text-white transition-all flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Connect</h4>
              <div className="space-y-10">
                <a href="mailto:info@wingsforshare.com" className="block group">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/30 mb-2">Direct Mail</p>
                  <p className="text-[16px] font-bold text-white group-hover:text-accent transition-colors">info@wingsforshare.com</p>
                </a>
                <a href="tel:+918618764541" className="block group">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/30 mb-2">Global Comms</p>
                  <p className="text-[16px] font-bold text-white group-hover:text-accent transition-colors">+91 86187 64541</p>
                </a>
              </div>
            </div>

            {/* HQ Node */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">HQ Node</h4>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                <MapPin size={24} className="text-accent mb-6" />
                <p className="text-[14px] font-medium text-text-secondary leading-loose">
                  15, A.K Max Layout,<br />
                  Kuduregere, Bangalore<br />
                  KA - 562162, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-medium text-text-secondary/40">
              © {currentYear} WingsForShare Digital Solutions. All parameters secured.
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/50">System Status: Optimal</p>
          </div>
          
          <div className="flex items-center gap-10">
            {['Blog', 'Privacy', 'Terms', 'Sitemap'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="text-[11px] font-black uppercase tracking-[0.3em] text-text-secondary/30 hover:text-white transition-all underline-offset-8 hover:underline"
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
