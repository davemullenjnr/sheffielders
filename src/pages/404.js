import React from 'react'

import Default from '../components/templates/Default'
import SEO from '../components/core/Seo'
import { LayoutWrapper } from '../components/elements/Layout';

const NotFoundPage = () => (
  <Default>
    <LayoutWrapper>
      <SEO title="404: Not found" />
      <h1>Four Zero Four</h1>
      <p>Yikes! You just hit a route that doesn&#39;t exist...</p>
    </LayoutWrapper>
  </Default>
)

export default NotFoundPage
