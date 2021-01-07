import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./blog-post.module.css";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteLogo = data.site.siteMetadata?.siteLogo || `Title`
  const social = data.site.siteMetadata.social
  const { previous, next } = data
  const showNav = previous || next;

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={`blog-post ${styles.blogPost}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <time datetime={post.frontmatter.date}>{post.frontmatter.formatted_date}</time>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      {showNav && (
        <nav className="blog-post-nav" aria-label="Blog post pagination navigation">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            {previous && (
              <li>
                <>
                  Previously:
                  <Link to={previous.fields.slug} rel="prev"
                    style={{
                      display: `block`
                    }}
                  >
                    {previous.frontmatter.title}
                  </Link>
                </>
              </li>
            )}
            {next && (
              <li>
                  <>
                    Next:
                    <Link to={next.fields.slug} rel="next"
                      style={{
                        display: `block`
                      }}
                    >
                      {next.frontmatter.title}
                    </Link>
                  </>
              </li>
            )}
          </ul>
        </nav>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        formatted_date: date(formatString: "DD MMMM YYYY")
        date(formatString: "YYYY-M-DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
