import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-16 md:h-14 w-auto", // slightly bigger for better visibility
}) => {

  const { theme } = useTheme();

  // ✅ Correct mapping
  const logoUrl =
    theme === 'dark'
      ? '/assets/logo-light.png'   // dark mode → light logo
      : '/assets/logo-dark.png';  // light mode → dark logo

  return (
    <div className={`flex flex-col items-start leading-tight`}>

      {/* Logo Image */}
      <img
        src={logoUrl}
        alt="Wingsforshare Logo"
        className={`${className} object-contain`}
      />

      {/* Tagline (VISIBLE ALWAYS) */}
      <span className="text-[11px] tracking-wide text-black/70 dark:text-white/70 mt-1">
        Business Technology Growth
      </span>

    </div>
  );
};