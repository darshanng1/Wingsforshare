import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  const logoPath = theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png';

  return (
    <img 
      id="logo-image"
      src={`${logoPath}?v=${Date.now()}`} 
      alt="WingsforShare" 
      className={cn("h-10 w-auto object-contain", className)}
      referrerPolicy="no-referrer"
    />
  );
};
