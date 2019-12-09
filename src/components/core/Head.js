import React from 'react'
import { Helmet } from 'react-helmet'

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <meta name="google-site-verification" content="--update--me" />
      </Helmet>
    )
  }
}

export default Head
