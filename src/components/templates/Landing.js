// core
import React from 'react'
import PropTypes from 'prop-types'
import './../../theme/base.css'

// components
import Head from '../core/Head'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { BackgroundUnite, BackgroundPink, Scafolding, Main } from '../elements/Layout';

// render
const Landing = ({ children }) => (
  <BackgroundPink>
    <BackgroundUnite />
      <Scafolding>
        <Head />
        <Header />
        <Main center>{children}</Main>
        <Footer />
      </Scafolding>
  </BackgroundPink>
)

Landing.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Landing
