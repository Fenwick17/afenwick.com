import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({
  description,
  lang,
  meta,
  title,
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
      <html lang={lang} />
      <title>{title} — {site.siteMetadata?.author.name}</title>
      <link rel="preconnect" href="https://images.ctfassets.net" />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta name="og:image" content={`${site.siteMetadata?.siteUrl}/logo-shareable.png`} />
      <meta name="og:image:alt" content={site.siteMetadata?.author.name} />
      <meta name="og:image:height" content="200" />
      <meta name="og:image:width" content="200" />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter} />
      <meta name="twitter:site" content={site.siteMetadata?.social?.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:domain" content={site.siteMetadata?.siteUrl} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${site.siteMetadata?.siteUrl}/logo-shareable.png`} />
      <meta name="twitter:image:alt" content={site.siteMetadata?.author.name} />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: 'en',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
