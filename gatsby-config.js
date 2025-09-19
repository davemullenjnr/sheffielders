module.exports = {
  siteMetadata: {
    title: `Sheffielders`,
    titleTemplate: `%s | Sheffielders`,
    description: `A collective of businesses, projects and creatives who have one thing in common — we're all Sheffielders! Discover local talent, businesses, and innovative projects in Sheffield, South Yorkshire.`,
    author: `@davemullenjnr`,
    siteUrl: `https://sheffielders.org`,
    image: `/icons/icon-512x512.png`,
    twitterUsername: `@davemullenjnr`,
    keywords: [
      `Sheffield`,
      `creative community`,
      `local businesses`,
      `South Yorkshire`,
      `creative collective`,
      `Sheffield entrepreneurs`,
      `local directory`,
      `business directory`,
      `creative services`,
      `Sheffield talent`,
    ],
    social: {
      twitter: `https://twitter.com/davemullenjnr`,
    },
    organization: {
      name: `Sheffielders`,
      url: `https://sheffielders.org`,
      logo: `https://sheffielders.org/icons/icon-512x512.png`,
    },
    location: {
      addressLocality: `Sheffield`,
      addressRegion: `South Yorkshire`,
      addressCountry: `GB`,
      postalCode: ``,
      latitude: `53.3811`,
      longitude: `-1.4701`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/brand/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
