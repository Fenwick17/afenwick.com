import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './blog-post.module.css';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const { siteLogo, social } = data.site.siteMetadata;
  const { previous, next } = data;
  const showNav = previous || next;
  const previousBlogUrl = `/blog/${previous?.postYear}/${previous?.slug}`;
  const nextBlogUrl = `/blog/${next?.postYear}/${next?.slug}`;
  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO
        title={post.title}
        description={post.description.description}
      />
      <article
        className={`blog-post ${styles.blogPost}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <h1 itemProp="headline">{post.title}</h1>
        <time dateTime={post.publishDate}>{post.formatted_date}</time>
        <section
          id="blog-body"
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html
          }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      {showNav && (
        <nav className={styles.blogPostPagination} aria-label="Blog post pagination navigation">
          <ul>
            {previous && (
              <li>
                <>
                  Previously:
                  <Link to={previousBlogUrl} rel="prev">
                    {previous.title}
                  </Link>
                </>
              </li>
            )}
            {next && (
              <li>
                <>
                  Next:
                  <Link to={nextBlogUrl} rel="next">
                    {next.title}
                  </Link>
                </>
              </li>
            )}
          </ul>
        </nav>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
      $previousPostId: String
      $nextPostId: String
      $slug: String!
    ) {
    site {
      siteMetadata {
        siteLogo 
        social {
          twitter,
          github
        }
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      formatted_date: publishDate(formatString: "DD MMMM YYYY")
      publishDate(formatString: "YYYY-M-DD")
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    previous: contentfulBlogPost(id: { eq: $previousPostId }) {
      slug
      postYear: publishDate(formatString: "YYYY")
      title
    }
    next: contentfulBlogPost(id: { eq: $nextPostId }) {
      postYear: publishDate(formatString: "YYYY")
      slug
      title
    }
  }
`;
