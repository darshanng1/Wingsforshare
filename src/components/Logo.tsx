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

  // Get logo URL from assets
  const logoUrl =
    variant === 'primary'
      ? ASSETS.LOGO.PRIMARY
      : ASSETS.LOGO.SYMBOL;

  // Fallback URL (use SAME drive link to avoid local failure)
  const fallbackUrl =
    "https://drive.google.com/uc?export=view&id=1uoJPkATVnUfb8dOKSm-X28t8ZjW3Trpk";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="WingsForShare Logo"
        className="h-full w-auto object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== fallbackUrl) {
            target.src = fallbackUrl;
          }
        }}
      />
    </div>
  );
};
