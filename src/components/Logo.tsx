import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  
  return (
    <img 
      id="logo-image"
      src={theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png'} 
      alt="WingsforShare" 
      className={cn("h-10 w-auto object-contain", className)}
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // Ensure we don't loop infinitely
        if (!target.dataset.triedFallback) {
          target.dataset.triedFallback = 'true';
          target.src = theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png';
        }
      }}
    />
  );
};
