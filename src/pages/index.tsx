import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import { useSiteMetadata } from '../hooks/use-site-metadata';

import styles from './index.module.css';

interface IndexProps extends PageProps {
  data: {
    allContentfulBlogPost: {
      nodes: Post[],
    }
  }
}

interface Post {
  id: string,
  title: string,
  slug: string,
  formatted_date: string,
  postYear: string,
  publishDate: string,
  description: {
    description: string,
  },
}

const BlogIndex: React.FC<IndexProps> = ({ data, location }) => {
  const { description }: { description: string } = useSiteMetadata();
  const posts = data.allContentfulBlogPost.nodes;
  return (
    <Layout locationPath={location.pathname}>
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
