import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, Moon, Menu, Linkedin, Twitter, Instagram, Github, 
  ArrowRight, Headphones
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

const Nav = ({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 transition-all duration-300",
      isScrolled ? "glass border-b border-black/5 dark:border-white/5 h-16" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-all duration-300">
            <svg viewBox="0 0 28 28" className="w-5 h-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 18L14 3L24.5 18"/><path d="M8 12.5L14 3"/><path d="M20 12.5L14 3"/>
            </svg>
          </div>
          <span className="font-black text-[15px] tracking-tight uppercase">WingsForShare</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Services', path: '/#solutions' },
            { name: 'About', path: '/#about' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={cn(
                "text-[11px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity",
                location.pathname === item.path && "opacity-100 text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="text-[11px] text-accent font-black uppercase tracking-widest border-b-2 border-accent/20 hover:border-accent transition-all">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-neutral-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>
          <button className="md:hidden w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center">
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#050505]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg viewBox="0 0 28 28" className="w-4 h-4" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M3.5 18L14 3L24.5 18"/><path d="M8 12.5L14 3"/><path d="M20 12.5L14 3"/>
              </svg>
            </div>
            <span className="font-black text-sm tracking-tight uppercase">WingsForShare</span>
          </Link>
          <p className="text-xs opacity-40 leading-relaxed mb-6">
            Architecting high-performance digital systems for revenue-driven organizations.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all">
                <Icon className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest mb-6">Services</p>
          <ul className="space-y-3 text-xs opacity-60 dark:opacity-40">
            <li>Web Engineering</li>
            <li>Mobile Systems</li>
            <li>BI Dashboards</li>
            <li>Growth Engines</li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-widest mb-6">Company</p>
          <ul className="space-y-3 text-xs opacity-60 dark:opacity-40">
            <li>Our Process</li>
            <li>Case Studies</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-widest mb-6">Newsletter</p>
          <p className="text-xs opacity-40 mb-4">Get insights on scaling digital systems.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-accent" />
            <button className="p-2 bg-accent text-white rounded-lg"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] opacity-30">© 2026 WingsForShare. All rights reserved.</p>
        <div className="flex gap-6 text-[10px] opacity-30">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-[#030303] text-black dark:text-white transition-colors duration-500">
      <div className="noise pointer-events-none" />
      <Nav toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+918618764541"
          className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-2xl shadow-accent/40"
        >
          <Headphones className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/918618764541"
          className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
