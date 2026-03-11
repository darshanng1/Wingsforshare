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
    alert("Link copied to clipboard!");
  };

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Live Demos', href: '/#products' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Book Consultation', href: '/#consultation' },
    { name: 'Contact', href: '/#contact' },
  ];

  const shareButtons = [
    { icon: <MessageCircle size={16} />, href: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, label: 'WhatsApp' },
    { icon: <Facebook size={16} />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, label: 'Facebook' },
    { icon: <Linkedin size={16} />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, label: 'LinkedIn' },
    { icon: <LinkIcon size={16} />, onClick: handleCopyLink, label: 'Copy Link' },
  ];

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Top Share Bar */}
      <div className="bg-black dark:bg-white text-white dark:text-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Share WingsForShare:</span>
          <div className="flex space-x-2">
            {shareButtons.map((btn, idx) => (
              btn.onClick ? (
                <button
                  key={idx}
                  onClick={btn.onClick}
                  className="w-7 h-7 flex items-center justify-center border border-white/20 dark:border-black/20 rounded-md hover:bg-white/10 dark:hover:bg-black/10 transition-all"
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
                  className="w-7 h-7 flex items-center justify-center border border-white/20 dark:border-black/20 rounded-md hover:bg-white/10 dark:hover:bg-black/10 transition-all"
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
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white dark:text-black font-bold text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-black dark:text-white leading-none">WingsForShare</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10" />
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link to="/login" className="text-sm font-bold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
              Login
            </Link>
            
            <Link to="/payment" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10 dark:shadow-white/5">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-black dark:text-white"
                >
                  {link.name}
                </a>
              ))}
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-black dark:text-white"
              >
                Login
              </Link>
              <Link 
                to="/payment" 
                onClick={() => setIsOpen(false)}
                className="block bg-black dark:bg-white text-white dark:text-black px-4 py-4 rounded-2xl text-lg font-bold text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </div>
  );
}
