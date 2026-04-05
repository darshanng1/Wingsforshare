import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();

  const logoSrc =
    theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <img
      src={logoSrc}
      alt="WingsforShare"
      className={cn("h-10 w-auto object-contain", className)}
      onError={(e) => {
        const target = e.currentTarget;

        // fallback to a guaranteed safe logo
        target.src = '/logo-dark.png';

        // optional: remove error handler to avoid loop
        target.onerror = null;
      }}
    />
  );
};