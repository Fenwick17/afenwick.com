import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({
  description,
  lang,
  meta,
  title,
  embedImage,
  embedImageAlt,
  blogUrl,
  isBlogPost
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const pageUrl = blogUrl ? site.siteMetadata?.siteUrl + blogUrl : site.siteMetadata?.siteUrl;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="preconnect" href="https://images.ctfassets.net" />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {isBlogPost ? <meta name="og:image" content={`https:${embedImage}`} /> : null}
      {isBlogPost ? <meta name="og:image:secure_url" content={`https:${embedImage}`} /> : null}
      {isBlogPost ? <meta name="og:image:alt" content={embedImageAlt} /> : null}
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter} />
      <meta name="twitter:site" content={site.siteMetadata?.social?.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:domain" content={site.siteMetadata?.siteUrl} />
      <meta name="twitter:description" content={metaDescription} />
      {isBlogPost ? <meta name="twitter:image" content={`https:${embedImage}`} /> : null}
      {isBlogPost ? <meta name="twitter:image:alt" content={embedImageAlt} /> : null}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
