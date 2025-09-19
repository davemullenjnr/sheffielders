import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  type,
  schemaMarkup,
  image,
  url,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title
        const metaUrl =
          url ||
          `${data.site.siteMetadata.siteUrl}${
            typeof window !== 'undefined' ? window.location.pathname : ''
          }`
        const metaImage =
          image || `${data.site.siteMetadata.siteUrl}/icons/icon-512x512.png`

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `robots`,
                content: `index, follow`,
              },
              {
                name: `author`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `viewport`,
                content: `width=device-width, initial-scale=1`,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: type || 'website',
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:image:width`,
                content: `512`,
              },
              {
                property: `og:image:height`,
                content: `512`,
              },
              {
                property: `og:site_name`,
                content: data.site.siteMetadata.title,
              },
              {
                property: `og:locale`,
                content: `en_GB`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
              {
                name: `geo.region`,
                content: `GB-SYK`,
              },
              {
                name: `geo.placename`,
                content: `Sheffield`,
              },
              {
                name: `geo.position`,
                content: `53.3811;-1.4701`,
              },
              {
                name: `ICBM`,
                content: `53.3811, -1.4701`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            {schemaMarkup &&
              (Array.isArray(schemaMarkup) ? (
                schemaMarkup.map((schema, index) => (
                  <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                  </script>
                ))
              ) : (
                <script type="application/ld+json">
                  {JSON.stringify(schemaMarkup)}
                </script>
              ))}
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en-GB`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  schemaMarkup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  image: PropTypes.string,
  url: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
