import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

import styles from './index.module.css';

const BlogIndex = ({ data, location }) => {
  const { siteLogo, social, description } = data.site.siteMetadata;
  const posts = data.allContentfulBlogPost.nodes;

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title={description} />
      <Bio />
      <div className={styles.blogPosts}>
        <h1
          className="u-no-margin-top u-no-margin-bottom"
          style={{
            padding: '0.5em',
          }}
        >
          Latest Posts
        </h1>
        {posts.map((post) => {
          const { title } = post;
          const titleId = title.replace(/\s/g, '-').toLowerCase();
          const postUrl = `/blog/${post.postYear}/${post.slug}/`;
          return (
            <article
              className={styles.blogPostItem}
              itemScope
              itemType="http://schema.org/Article"
              aria-labelledby={titleId}
              key={post.id}
            >
              <h2 id={titleId} className={styles.blogHeading}>
                <Link to={postUrl} itemProp="url">
                  {title}
                </Link>
              </h2>
              <time dateTime={post.publishDate}>{post.formatted_date}</time>
              <p
                className={styles.blogPostDescription}
                dangerouslySetInnerHTML={{
                  __html: post.description.description,
                }}
                itemProp="description"
              />
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        siteLogo,
        description
        social {
          twitter,
          twitterURL,
          github,
          githubURL
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        id
        title
        slug
        formatted_date: publishDate(formatString: "DD MMMM YYYY")
        postYear: publishDate(formatString: "YYYY")
        publishDate(formatString: "YYYY-M-DD")
        description {
          description
        }
      }
    }
  }
`;

BlogIndex.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
