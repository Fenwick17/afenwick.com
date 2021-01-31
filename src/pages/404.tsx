import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: React.FC<PageProps> = ({ location }) => (
  <Layout locationPath={location.pathname}>
    <SEO title="Page Not Found" />
    <h1>Oh, looks like this page does not exist</h1>
    <p>
      <a href="/">Back to the homepage</a>
    </p>
  </Layout>
);

export default NotFoundPage;
