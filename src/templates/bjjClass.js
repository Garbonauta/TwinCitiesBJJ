import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import { BjjClassContainer } from 'app/BjjClass';

const Header = React.memo(({ pageTitle }) => (
  <Helmet>
    <title>{pageTitle}</title>
  </Helmet>
));
Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

const BjjClass = ({ data: { contentfulClass } }) => {
  const { shortTitle } = contentfulClass;
  return (
    <Fragment>
      <Header pageTitle={shortTitle} />
      <BjjClassContainer data={contentfulClass} />
    </Fragment>
  );
};
BjjClass.propTypes = {
  data: PropTypes.shape({
    contentfulClass: PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortTitle: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      content: PropTypes.shape({
        json: PropTypes.object,
      }),
    }).isRequired,
  }).isRequired,
};

export default BjjClass;

export const query = graphql`
  query BjjClassQuery($slug: String!) {
    contentfulClass(slug: { eq: $slug }) {
      title
      shortTitle
      slug
      duration
      content {
        json
      }
    }
    # dropdown info
    allContentfulClass {
      edges {
        node {
          id
          shortTitle
          slug
          display
        }
      }
    }
  }
`;
