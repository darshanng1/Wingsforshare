import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Fires a GA4 page_view on every client-side route change.
 * index.html loads gtag with { send_page_view: false } so the first view
 * is not double-counted, and this component tracks SPA navigations.
 */
export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}
