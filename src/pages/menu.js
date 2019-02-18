// core
import React from 'react'

// components
import SEO from '../components/core/Seo'
import MenuOpen from '../components/templates/MenuOpen';
import NavLinks from '../components/NavLinks';

//render
const MenuOpenPage= () => (
  <MenuOpen>
    <SEO title="Menu" keywords={[`sheffielders`]} />
    <NavLinks />
  </MenuOpen>
)

export default MenuOpenPage
