import React from 'react'

import Default from '../components/templates/Default'
import SEO from '../components/core/Seo'
import Directory from '../components/templates/Directory';

const Collective = () => (
  <Default>
    <SEO title="Collective" keywords={[`sheffielders`]} />
    <Directory />
  </Default>
)

export default Collective
