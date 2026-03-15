import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "WingsForShare – Digital Solutions Agency & Custom Software Development",
  description = "WingsForShare is a leading digital solutions agency specializing in custom software development, business automation tools, and SEO services to scale your business.",
  keywords = "digital solutions agency, custom software development, business automation, SEO services, digital marketing, WingsForShare, software marketplace",
  canonical = "https://wingsforshare.com",
  ogImage = "https://wingsforshare.com/og-image.jpg",
  ogType = "website",
  schemaMarkup
}) => {
  const siteTitle = title.includes("WingsForShare") ? title : `${title} | WingsForShare`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WingsForShare",
    "url": "https://wingsforshare.com",
    "logo": "https://wingsforshare.com/logo.png",
    "description": description,
    "sameAs": [
      "https://facebook.com/wingsforshare",
      "https://twitter.com/wingsforshare",
      "https://linkedin.com/company/wingsforshare"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-86187-64541",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
