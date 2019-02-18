const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              sitelink
            }
          }
        }
      }
    }    
    `).then(results => {
       results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/collective/${node.frontmatter.slug}/`,
          component: path.resolve('./src/components/templates/Post.js'),
          context: {
            slug: node.frontmatter.slug
          }
        });
       })
       resolve()
    })
  })
}
