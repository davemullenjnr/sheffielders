import React from 'react'
import { Helmet } from 'react-helmet'

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,400i,600,600i"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="r5gf0fuRi3YRF0JNhBlxMhODQNdDijLaxekQfXRJNt4" />
      </Helmet>
    )
  }
}

export default Head
