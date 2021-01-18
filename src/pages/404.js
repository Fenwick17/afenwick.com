import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data, location }) => {
  const { siteLogo, social } = data.site.siteMetadata;

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title="Page Not Found" />
      <h1>Oh, looks like this page does not exist</h1>
      <p>
        <a href="/">Back to the homepage</a>
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteLogo 
        social {
          twitter
          github
        }
      }
    }
  }
`;

NotFoundPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  siteLogo: PropTypes.string.isRequired,
  social: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
