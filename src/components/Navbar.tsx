import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Facebook, Linkedin, Link as LinkIcon, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

  const handleMobileNav = (targetId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      scrollToSection(targetId);
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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4' 
          : 'py-6 md:py-8'
      }`}
    >
      <div className="container-custom">
        <nav 
          className={`relative flex items-center justify-between px-6 py-3 md:px-8 md:py-4 rounded-[2rem] transition-all duration-500 ${
            scrolled 
              ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <Logo className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-emerald-500 ${
                    isActive 
                      ? 'text-emerald-500' 
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" />
            <Link 
              to="/start-project" 
              className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3 relative z-10">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute top-full left-0 right-0 mt-4 p-6 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl lg:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => {
                    const targetId = link.href.replace('#', '');
                    const isActive = activeSection === targetId;
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleMobileNav(targetId)}
                        className={`text-left text-2xl font-bold tracking-tight transition-all ${
                          isActive 
                            ? 'text-emerald-500 translate-x-2' 
                            : 'text-zinc-900 dark:text-white'
                        }`}
                      >
                        {link.name}
                      </button>
                    );
                  })}
                  <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-2" />
                  <Link
                    to="/start-project"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-emerald-500 text-white rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
