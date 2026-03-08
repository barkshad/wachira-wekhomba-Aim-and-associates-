import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const siteTitle = title ? `${title} | Wachira Wekhomba & Associates` : 'Wachira Wekhomba & Associates';
  const siteDescription = description || 'Professional legal services provided by Wachira Wekhomba & Associates Advocates.';
  // Default image - user should replace this with their actual OG image
  const siteImage = image || 'https://picsum.photos/seed/legal/1200/630'; 
  const siteUrl = url || window.location.href;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
