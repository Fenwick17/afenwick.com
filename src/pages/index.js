import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

import styles from "./index.module.css"

const BlogIndex = ({ data, location }) => {
  const siteLogo = data.site.siteMetadata?.siteLogo || `Title`
  const social = data.site.siteMetadata.social
  const posts = data.allContentfulBlogPost.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} social={social}>
        <SEO title="Articles on accessibility and frontend performance." />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title="Articles on accessibility and frontend performance." />
      <Bio />
      <div className={styles.blogPosts}>
        <h1 class="u-no-margin-top u-no-margin-bottom" style={{
          padding: `0.5em`
        }}>Latest Posts</h1>
        {posts.map(post => {
          const title = post.title
          const titleId = title.replace(/\s/g, "-").toLowerCase();
          return (
            <article
              className={styles.blogPostItem}
              itemScope
              itemType="http://schema.org/Article"
              aria-labelledby={titleId}
            >
              <h2 id={titleId} className={styles.blogHeading}>{title}</h2>
              <time datetime={post.publishDate}>{post.formatted_date}</time>
              <p className={styles.blogPostDescription}
                dangerouslySetInnerHTML={{
                  __html: post.description.description || post.excerpt,
                }}
                itemProp="description"
              />
              <Link className="button" aria-label={`Read ${title}`} to={`/blog/${post.slug}`} itemProp="url">
                Read more
              </Link>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        siteLogo,
        social {
          twitter,
          github
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        formatted_date: publishDate(formatString: "DD MMMM YYYY")
        publishDate(formatString: "YYYY-M-DD")
        description {
          description
        }
      }
    }
  }
`
