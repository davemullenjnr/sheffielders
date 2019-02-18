// core
import React from 'react'

// components
import Landing from '../components/templates/Landing'
import SEO from '../components/core/Seo'
import Intro from '../components/Intro';

// styles

//render
const LandingPage = () => (
  <Landing>
    <SEO title="A collective of businesses, creatives, and projects" keywords={[`sheffielders`, `Sheffield`]} />
    <Intro />
  </Landing>
)

export default LandingPage
