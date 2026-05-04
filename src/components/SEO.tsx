import React from 'react';
import { Helmet } from 'react-helmet-async';

export type SchemaType = 
  | 'Organization' 
  | 'LocalBusiness' 
  | 'WebSite' 
  | 'WebPage' 
  | 'Article' 
  | 'Service' 
  | 'Product' 
  | 'FAQPage' 
  | 'ContactPage' 
  | 'AboutPage';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  schemaType?: SchemaType;
  schemaMarkup?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  alternateLangs?: Array<{ lang: string; url: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  robots?: string;
  twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "WingsForShare – Business Technology Growth Agency",
  description = "WingsForShare builds revenue-driven digital systems. Custom software development, web applications, mobile apps, and business automation solutions.",
  keywords = "business technology growth, digital transformation, custom software development, web development, mobile app development, business automation, SaaS development, enterprise software",
  canonical = "https://wingsforshare.com",
  ogImage = "https://wingsforshare.com/og-image.jpg",
  ogType = "website",
  schemaType = 'WebPage',
  schemaMarkup,
  noindex = false,
  nofollow = false,
  lang = "en",
  alternateLangs = [],
  publishedTime,
  modifiedTime,
  author = "WingsForShare",
  section,
  tags,
  robots,
  twitterHandle = "@wingsforshare"
}) => {
  const siteTitle = title.includes("WingsForShare") ? title : `${title} | WingsForShare`;
  const robotsContent = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;

  // Default Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WingsForShare",
    "url": "https://wingsforshare.com",
    "logo": "https://wingsforshare.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-86187-64541",
      "contactType": "customer service",
      "areaServed": ["IN", "US", "GB", "AU", "CA"],
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/wingsforshare",
      "https://twitter.com/wingsforshare",
      "https://linkedin.com/company/wingsforshare",
      "https://instagram.com/wingsforshare"
    ]
  };

  // WebSite Schema for search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WingsForShare",
    "url": "https://wingsforshare.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wingsforshare.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WingsForShare",
    "description": description,
    "url": canonical,
    "logo": "https://wingsforshare.com/logo.png",
    "telephone": "+91-86187-64541",
    "email": "contact@wingsforshare.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": "Worldwide"
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "image": ogImage,
    "inLanguage": lang,
    "isPartOf": {
      "@type": "WebSite",
      "name": "WingsForShare",
      "url": "https://wingsforshare.com"
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(author && { 
      "author": {
        "@type": "Organization",
        "name": author
      }
    })
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "url": canonical,
    "inLanguage": lang,
    "isPartOf": {
      "@type": "WebSite",
      "name": "WingsForShare",
      "url": "https://wingsforshare.com"
    },
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "WingsForShare",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wingsforshare.com/logo.png"
      }
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(section && { "articleSection": section }),
    ...(tags && { "keywords": tags.join(', ') })
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "WingsForShare",
      "url": "https://wingsforshare.com"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Digital Services",
      "serviceUrl": canonical
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  };

  const getDefaultSchema = () => {
    switch (schemaType) {
      case 'Organization':
        return organizationSchema;
      case 'LocalBusiness':
        return localBusinessSchema;
      case 'WebSite':
        return websiteSchema;
      case 'WebPage':
        return webPageSchema;
      case 'Article':
        return articleSchema;
      case 'Service':
        return serviceSchema;
      case 'FAQPage':
        return faqSchema;
      default:
        return webPageSchema;
    }
  };

  const finalSchema = schemaMarkup || getDefaultSchema();

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Alternate Languages */}
      {alternateLangs.map((alt) => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="WingsForShare" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article Specific Meta */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
      
      {/* Always include Organization and WebSite schema */}
      {schemaType !== 'Organization' && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      {schemaType !== 'WebSite' && schemaType !== 'Organization' && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
