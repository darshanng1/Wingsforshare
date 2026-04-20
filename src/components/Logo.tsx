import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src={theme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png'} 
        alt="WingsForShare Logo" 
        className="h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
