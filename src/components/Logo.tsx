import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  
  return (
    <img 
      src={theme === 'dark' ? ASSETS.LOGO.DARK : ASSETS.LOGO.LIGHT} 
      alt="" 
      className={cn("h-8 md:h-10 w-auto object-contain block", className)}
      referrerPolicy="no-referrer"
    />
  );
};
