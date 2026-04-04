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
      id="logo"
      src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} 
      alt="WingsforShare" 
      className={cn("h-10 w-auto object-contain", className)}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // Ensure we don't loop infinitely
        if (!target.dataset.triedFallback) {
          target.dataset.triedFallback = 'true';
          target.src = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';
        }
      }}
    />
  );
};
