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
        src={theme === 'dark' ? '/static/images/logo-dark.png' : '/static/images/logo.png'} 
        alt="WingsForShare" 
        className="h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
        id="logo-image"
      />
    </div>
  );
};
