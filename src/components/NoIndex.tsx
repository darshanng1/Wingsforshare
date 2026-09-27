import React from 'react';
import { Helmet } from 'react-helmet-async';

// Renders a noindex directive for private/utility pages that must stay out of Google.
export default function NoIndex() {
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}