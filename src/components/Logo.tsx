import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ASSETS } from '../constants/assets';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'primary'
}) => {
  const { theme } = useTheme();
  
  // Use the correct logo based on theme
  const logoSrc = theme === 'dark' ? ASSETS.LOGO.DARK : ASSETS.LOGO.LIGHT;

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="WingsForShare Logo" 
        className="h-full w-auto block object-contain"
        style={{ minWidth: '1px' }} // Ensure it's not collapsed
        referrerPolicy="no-referrer"
        onError={(e) => {
          console.error(`Failed to load logo: ${logoSrc}`);
          // Fallback to text if logo fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-display font-bold text-xl tracking-tighter">WingsForShare</span>');
        }}
      />
    </div>
  );
};
