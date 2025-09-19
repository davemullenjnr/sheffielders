// core
import React from 'react'

// components
import Landing from '../components/templates/Landing'
import SEO from '../components/core/Seo'
import Intro from '../components/Intro'

// styles

//render
const LandingPage = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sheffielders',
    description:
      "A collective of businesses, projects and creatives who have one thing in common — we're all Sheffielders!",
    url: 'https://sheffielders.org',
    logo: 'https://sheffielders.org/icons/icon-512x512.png',
    sameAs: ['https://twitter.com/davemullenjnr'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sheffield',
      addressRegion: 'South Yorkshire',
      addressCountry: 'GB',
    },
    founder: {
      '@type': 'Person',
      name: 'Dave Mullen Jnr',
      url: 'https://davemullenjnr.co.uk',
    },
    foundingDate: '2020',
    knowsAbout: [
      'Sheffield creative community',
      'Local businesses',
      'Creative projects',
      'Sheffield entrepreneurs',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sheffielders',
    description:
      "A collective of businesses, projects and creatives who have one thing in common — we're all Sheffielders!",
    url: 'https://sheffielders.org',
    publisher: {
      '@type': 'Organization',
      name: 'Sheffielders',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sheffielders.org/collective?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Landing>
      <SEO
        title="Sheffielders"
        description="A collective of businesses, creatives, and projects from people living and working in Sheffield, UK."
        keywords={[
          `sheffielders`,
          `Sheffield`,
          `creative community`,
          `Sheffield businesses`,
          `local directory`,
          `South Yorkshire`,
          `creative collective`,
          `Sheffield entrepreneurs`,
          `local creatives`,
        ]}
        type="website"
        schemaMarkup={[organizationSchema, websiteSchema]}
      />
      <Intro />
    </Landing>
  )
}

export default LandingPage
