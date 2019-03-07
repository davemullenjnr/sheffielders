// core
import React from 'react'
import PropTypes from 'prop-types'
import './../../theme/base.css'

// components
import Head from '../core/Head'
import Footer from '../core/Footer'
import { Background, Scafolding, Main } from '../elements/Layout'

// render
const Info = ({ children }) => (
  <Background>
    <Scafolding>
      <Head />
      <Main>{children}</Main>
      <Footer />
    </Scafolding>
  </Background>
)

Info.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Info
