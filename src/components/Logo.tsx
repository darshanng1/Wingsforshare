import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2.5 group cursor-pointer", className)}>
      <div className="relative w-9 h-9">
        {/* Abstract "W" Wings shape */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform transition-transform duration-500 group-hover:rotate-12">
          <path d="M5 10L20 30L35 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
          <path d="M10 15L20 28L30 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent/50" />
          <circle cx="20" cy="8" r="3" fill="currentColor" className="text-accent" />
        </svg>
        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-xl font-display font-black tracking-tighter text-black dark:text-white">
          WINGS<span className="text-accent">FOR</span>SHARE
        </span>
        <span className="text-[8px] font-bold tracking-[0.2em] text-black/40 dark:text-white/40 uppercase">
          Digital Solutions
        </span>
      </div>
    </div>
  );
};
