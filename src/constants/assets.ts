import logoLight from '@/assets/logo-light.png';
import logoDark from '@/assets/logo-dark.png';

export const ASSETS = {
  LOGO: {
    LIGHT: logoLight, // Upload your light mode logo to /public/logo-light.png
    DARK: logoDark,   // Upload your dark mode logo to /public/logo-dark.png
    SYMBOL: '/logo-symbol.png' // Optional symbol logo
  },
  IMAGES: {
    HERO: 'https://picsum.photos/seed/wings-hero/1920/1080',
    ABOUT: 'https://picsum.photos/seed/wings-about/1200/800',
    PLACEHOLDER: 'https://picsum.photos/seed/wings-placeholder/800/600',
    SERVICES: {
      WEB: 'https://picsum.photos/seed/wings-web/800/600',
      APP: 'https://picsum.photos/seed/wings-app/800/600',
      BI: 'https://picsum.photos/seed/wings-bi/800/600',
      CONSULTING: 'https://picsum.photos/seed/wings-consulting/800/600'
    }
  }
};
