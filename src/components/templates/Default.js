// core
import React from 'react'
import PropTypes from 'prop-types'
import './../../theme/base.css'

// components
import Head from '../core/Head'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { BackgroundWhite, Scafolding, Main } from '../elements/Layout';

// render
const Default = ({ children }) => (
  <BackgroundWhite>
      <Scafolding>
        <Head />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Scafolding>
  </BackgroundWhite>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
