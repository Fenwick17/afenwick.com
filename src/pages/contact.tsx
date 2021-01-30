import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const ContactPage = ({ location }) => {
  const { social: { twitterURL, email}, title } = useSiteMetadata();
  return (
    <Layout location={location}>
      <SEO title="Contact" description={`Contact ${title}`} />
      <h1 className="u-no-margin-top">Contact me</h1>
      <p>
        You can <a href={`mailto:${email}`}>email me</a> or <a href={twitterURL}>contact me on Twitter</a>, my DMs are always open.
      </p>
    </Layout>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
