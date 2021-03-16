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
    <SEO title="Sheffielders" description="A collective of businesses, creatives, and projects from people living and working in Sheffield, UK." keywords={[`sheffielders`, `Sheffield`]} />
    <Intro />
  </Landing>
)

export default LandingPage
