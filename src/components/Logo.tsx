import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  
  // Use absolute path relative to domain root for maximum stability
  const logoPath = theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png';

  return (
    <img 
      id="logo-image"
      src={logoPath} 
      alt="WingsforShare" 
      className={cn("h-10 w-auto object-contain", className)}
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        const retryCount = parseInt(target.dataset.retries || '0');
        
        // If it fails, try adding a timestamp to bust caches on the dedicated server
        if (retryCount < 2) {
          target.dataset.retries = (retryCount + 1).toString();
          target.src = `${logoPath}?v=${Date.now()}`;
        }
      }}
    />
  );
};
