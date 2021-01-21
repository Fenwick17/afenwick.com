import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = ({ data, location }) => {
  const { siteLogo, social, title } = data.site.siteMetadata;
  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title="Contact" description={`Contact ${title}`} />
      <h1 className="u-no-margin-top">Contact me</h1>
      <p>
        You can <a href={`mailto:${social.email}`}>email me</a> or <a href={social.twitterURL}>contact me on Twitter</a>, my DMs are always open.
      </p>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteLogo 
        social {
          twitterURL
          email
          githubURL
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  siteLogo: PropTypes.string.isRequired,
  social: PropTypes.objectOf(PropTypes.string).isRequired,
};
