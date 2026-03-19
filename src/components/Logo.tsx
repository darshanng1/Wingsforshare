import React from 'react';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8 w-auto", 
  variant = 'primary',
  showText = true 
}) => {
  const logoUrl = variant === 'primary' ? ASSETS.LOGO.PRIMARY : ASSETS.LOGO.SYMBOL;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoUrl} 
        alt="WingsForShare Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://ais-dev-5nx7d23qzsizxwkhujw4h6-45023050426.asia-southeast1.run.app/logo.png'; // Fallback to the known URL
        }}
      />
      {showText && (
        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          WingsForShare
        </span>
      )}
    </div>
  );
};
