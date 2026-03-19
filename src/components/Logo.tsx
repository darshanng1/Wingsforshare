import React from 'react';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10 w-auto", 
  variant = 'primary',
  showText = true 
}) => {
  const logoUrl = variant === 'primary' ? ASSETS.LOGO.PRIMARY : ASSETS.LOGO.SYMBOL;

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="WingsForShare Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/logo.png'; // Fallback
        }}
      />
    </div>
  );
};
