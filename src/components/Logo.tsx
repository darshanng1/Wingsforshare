import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-[56px] w-auto", // balanced size for navbar
}) => {
  const { theme } = useTheme();

  // ✅ Correct logo mapping (fixed)
  const logoUrl =
    theme === 'dark'
      ? '/assets/logo-dark.png'   // for dark background
      : '/assets/logo-light.png'; // for light background

  return (
    <div className="flex items-center">
      <img
        src={logoUrl}
        alt="Wingsforshare Logo"
        className={`${className} object-contain transition-all duration-300`}
        loading="eager"
        draggable={false}
      />
    </div>
  );
};