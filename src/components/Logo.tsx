import React from 'react';
import { ASSETS } from '../constants/assets';
import { useTheme } from '../contexts/ThemeContext';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-14 md:h-12 w-auto",
  variant = 'primary'
}) => {

  const { theme } = useTheme();

  const logoUrl =
    variant === 'primary'
      ? ASSETS.LOGO.PRIMARY
      : ASSETS.LOGO.SYMBOL;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Wingsforshare Logo"
        className={`h-full w-auto object-contain transition-all duration-300 
          ${theme === 'light' 
            ? 'brightness-95 contrast-125 saturate-110' 
            : ''
          }`}
      />
    </div>
  );
};
