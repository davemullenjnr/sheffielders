// core
import React from 'react'
import PropTypes from 'prop-types'
import './../../theme/base.css'

// components
import Head from '../core/Head'
import HeaderMenu from '../core/HeaderMenu'
import { Scafolding, Main, Background } from '../elements/Layout'
import { variables } from '../../theme'

// render
const MenuOpen = ({ children }) => (
  <Background black>
    <Scafolding>
      <Head />
      <HeaderMenu logofill={variables.white} />
      <Main center>{children}</Main>
    </Scafolding>
  </Background>
)

MenuOpen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuOpen
