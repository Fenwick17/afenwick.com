import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Page Not Found" />
      <h1>Oh, looks like this page does not exist</h1>
      <p>
        <a href="/">Back to the homepage</a>
      </p>
    </Layout>
  );
};

export default NotFoundPage;

NotFoundPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
