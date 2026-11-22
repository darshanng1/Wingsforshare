import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

/**
 * Theme-aware logo.
 * The two files are different ink colours, so which one shows is decided by CSS
 * (.dark on <html>), not by React state. That means it is correct on first paint,
 * before hydration, and it cannot get stuck on the wrong variant.
 */
export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex items-center">
      <img
        src="/static/images/logo-dark.png"
        alt="WingsForShare"
        className={cn('logo-on-light w-auto object-contain', className)}
        referrerPolicy="no-referrer"
      />
      <img
        src="/static/images/logo-light.png"
        alt=""
        aria-hidden="true"
        className={cn('logo-on-dark w-auto object-contain', className)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
