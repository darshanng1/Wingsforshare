import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  const [error, setError] = React.useState(false);
  
  if (error) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <span className="text-white font-black text-xs">W</span>
        </div>
        <span className="text-text-primary font-black text-lg tracking-tighter uppercase">Wingsforshare</span>
      </div>
    );
  }

  return (
    <img 
      src={theme === 'dark' ? ASSETS.LOGO.DARK : ASSETS.LOGO.LIGHT} 
      alt="Wingsforshare" 
      className={cn("h-8 md:h-10 w-auto object-contain block", className)}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};
