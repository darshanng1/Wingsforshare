import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();
  const [error, setError] = React.useState(false);
  
  if (error) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
          <span className="text-white font-black text-lg">W</span>
        </div>
        <span className="text-xl font-display font-black tracking-tighter text-text-primary">
          WingsForShare
        </span>
      </div>
    );
  }

  return (
    <img 
      id="logo-image"
      src={theme === 'dark' ? `/logos/logo-dark.png` : `/logos/logo-light.png`} 
      alt="WingsforShare" 
      className={cn("h-10 w-auto object-contain", className)}
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // Don't retry more than twice
        const retryCount = parseInt(target.dataset.retries || '0');
        
        if (retryCount < 2) {
          target.dataset.retries = (retryCount + 1).toString();
          // Add a timestamp to bust any cache that might be serving a 404
          const newSrc = theme === 'dark' ? `/logos/logo-dark.png` : `/logos/logo-light.png`;
          target.src = `${newSrc}?t=${Date.now()}`;
          return;
        }
        setError(true);
      }}
    />
  );
};
