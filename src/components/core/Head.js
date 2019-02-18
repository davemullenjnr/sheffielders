import React from 'react'
import { Helmet } from 'react-helmet'

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:600,600i"
          rel="stylesheet"
        />
      </Helmet>
    )
  }
}

export default Head
