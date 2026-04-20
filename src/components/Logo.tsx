import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

const logoBasePath = import.meta.env.BASE_URL;

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();

  const logoSrc = `${logoBasePath}logos/${theme === 'dark' ? 'logo-dark.png' : 'logo-light.png'}`;

  return (
    <img
      id="logo"
      src={logoSrc}
      alt="WingsforShare"
      className={cn('h-10 w-auto object-contain', className)}
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // Ensure we don't loop infinitely
        if (!target.dataset.triedFallback) {
          target.dataset.triedFallback = 'true';
          target.src = `${logoBasePath}logos/${theme === 'dark' ? 'logo-dark.png' : 'logo-light.png'}`;
        }
      }}
    />
  );
};
