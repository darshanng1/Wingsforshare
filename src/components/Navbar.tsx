import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Facebook, Linkedin, Link as LinkIcon, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy } from '../contexts/ScrollContext';
import { motion, AnimatePresence } from 'motion/react';

import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const { activeSection } = useScrollSpy();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');

      if (location.pathname !== '/') {
        navigate('/');

        setTimeout(() => {
          scrollToSection(targetId);
        }, 300);
      } else {
        scrollToSection(targetId);
      }
      setIsOpen(false);
    }
  };

  const handleMobileNav = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        scrollToSection(targetId);
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500`}
    >
      <div className="w-full">
        <nav 
          className={`relative flex items-center justify-between px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-500 bg-bg/80 backdrop-blur-xl border border-text-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isExternal = !link.href.startsWith('#');
              
              if (isExternal) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative text-[11px] font-black uppercase tracking-[0.3em] transition-all group py-2 font-display ${
                      location.pathname === link.href
                        ? 'text-accent' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left transition-transform duration-300 ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[11px] font-black uppercase tracking-[0.3em] transition-all group py-2 font-display ${
                    isActive 
                      ? 'text-accent' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-all"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="w-[1px] h-4 bg-text-primary/10" />
            <Link 
              to="/start-project" 
              className="btn-primary py-2.5 px-6 text-[11px]"
            >
              <span>Start Project</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3 relative z-10">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-primary bg-text-primary/5 border border-text-primary/10"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 mt-4 bg-bg/95 backdrop-blur-2xl rounded-[2.5rem] border border-text-primary/10 shadow-2xl lg:hidden overflow-hidden"
              >
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Navigation</p>
                    {navLinks.map((link, i) => {
                      const isExternal = !link.href.startsWith('#');
                      const isActive = isExternal 
                        ? location.pathname === link.href 
                        : activeSection === link.href.replace('#', '');
                      
                      return (
                        <motion.button
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => handleMobileNav(link.href)}
                          className={`group flex items-center justify-between w-full py-3 text-left transition-all ${
                            isActive 
                              ? 'text-accent' 
                              : 'text-text-primary'
                          }`}
                        >
                          <span className="text-3xl font-black tracking-tighter uppercase">{link.name}</span>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: isActive ? 1 : 0 }}
                            className="w-2 h-2 rounded-full bg-accent"
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  <div className="h-[1px] bg-text-primary/5 my-2" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {[Facebook, Linkedin, MessageCircle, Share2].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          className="w-10 h-10 rounded-xl bg-text-primary/5 flex items-center justify-center text-text-secondary"
                        >
                          <Icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        to="/start-project"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary w-full justify-center py-5 text-lg"
                      >
                        <span>Start Your Project</span>
                        <ArrowRight size={20} className="ml-2" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
