import React from 'react'

import Default from '../components/templates/Default'
import SEO from '../components/core/Seo'
import Directory from '../components/templates/Directory'

const Collective = () => {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sheffielders Collective Directory',
    description:
      'A comprehensive directory of Sheffield-based businesses, creatives, and projects',
    url: 'https://sheffielders.org/collective',
    numberOfItems: '15+',
    itemListElement: [],
  }

  return (
    <Default>
      <SEO
        title="Collective Directory"
        description="Browse our directory of Sheffield-based businesses, creatives, and projects. Discover local talent and innovative companies in the Steel City."
        keywords={[
          `sheffielders collective`,
          `Sheffield directory`,
          `local businesses`,
          `Sheffield creatives`,
          `South Yorkshire companies`,
          `Sheffield entrepreneurs`,
          `creative directory`,
          `local talent`,
        ]}
        type="website"
        schemaMarkup={[itemListSchema]}
      />
      <Directory />
    </Default>
  )
}

export default Collective
