import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Facebook, Linkedin, Link as LinkIcon, MessageCircle, Share2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  const shareUrl = window.location.href;
  const shareTitle = "WingsForShare Digital Solutions – Premium Software & Marketing";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Demos', href: '#products' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const shareButtons = [
    { icon: <MessageCircle size={16} />, href: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, label: 'WhatsApp' },
    { icon: <Facebook size={16} />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, label: 'Facebook' },
    { icon: <Linkedin size={16} />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, label: 'LinkedIn' },
    { icon: <LinkIcon size={16} />, onClick: handleCopyLink, label: 'Copy Link' },
  ];

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Top Share Bar - Hidden on small mobile */}
      <div className="hidden sm:block bg-black dark:bg-white text-white dark:text-black py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4">
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Share WingsForShare:</span>
          <div className="flex space-x-2">
            {shareButtons.map((btn, idx) => (
              btn.onClick ? (
                <button
                  key={idx}
                  onClick={btn.onClick}
                  className="w-6 h-6 flex items-center justify-center border border-white/20 dark:border-black/20 rounded-md hover:bg-white/10 dark:hover:bg-black/10 transition-all"
                  title={btn.label}
                >
                  {btn.icon}
                </button>
              ) : (
                <a
                  key={idx}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center border border-white/20 dark:border-black/20 rounded-md hover:bg-white/10 dark:hover:bg-black/10 transition-all"
                  title={btn.label}
                >
                  {btn.icon}
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      <nav className={`${
        scrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white dark:text-black font-bold text-lg md:text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tighter text-black dark:text-white leading-none">WingsForShare</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Digital Systems</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10" />
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
              Login
            </Link>
            
            <Link to="/payment" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all shadow-xl shadow-black/10 dark:shadow-white/5">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-black border-b border-black/5 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-bold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Share WingsForShare</p>
                <div className="flex px-4 space-x-3">
                  {shareButtons.map((btn, idx) => (
                    btn.onClick ? (
                      <button
                        key={idx}
                        onClick={btn.onClick}
                        className="w-10 h-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        title={btn.label}
                      >
                        {btn.icon}
                      </button>
                    ) : (
                      <a
                        key={idx}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        title={btn.label}
                      >
                        {btn.icon}
                      </a>
                    )
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center text-lg font-bold text-black dark:text-white border border-black/10 dark:border-white/10 rounded-2xl"
                >
                  Login
                </Link>
                <Link 
                  to="/payment" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center text-lg font-bold bg-black dark:bg-white text-white dark:text-black rounded-2xl shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </div>
  );
}
