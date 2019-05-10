/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

// eslint-disable-next-line no-undef
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allContentfulClass {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allContentfulClass.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/bjjClass.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
