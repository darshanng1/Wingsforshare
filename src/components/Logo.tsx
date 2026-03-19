import React from 'react';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-16 w-auto", // 👈 increased size here
  variant = 'primary'
}) => {

  const logoUrl =
    variant === 'primary'
      ? ASSETS.LOGO.PRIMARY
      : ASSETS.LOGO.SYMBOL;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Wingsforshare Logo"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
