import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, Moon, Menu, Linkedin, Twitter, Instagram, Github, 
  ArrowRight, Headphones
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from '../Navbar';
import Footer from '../Footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
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
    <div className="min-h-screen relative overflow-x-hidden bg-bg text-text-primary transition-colors duration-500">
      <div className="noise pointer-events-none" />
      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
