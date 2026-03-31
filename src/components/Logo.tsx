import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'symbol';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'primary'
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <rect width="40" height="40" rx="10" className="fill-emerald-500" />
        <path 
          d="M10 12L16 28L20 18L24 28L30 12" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      
      {variant === 'primary' && (
        <span className="font-display font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
          WingsForShare
        </span>
      )}
    </div>
  );
};
