import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <img
      key={theme}
      src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
      alt="WingsforShare"
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
};


