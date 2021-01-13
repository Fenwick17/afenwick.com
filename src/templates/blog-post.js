import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./blog-post.module.css";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const siteLogo = data.site.siteMetadata?.siteLogo || `Title`
  const social = data.site.siteMetadata.social
  const { previous, next } = data
  const showNav = previous || next;

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO
        title={post.title}
        description={post.description.description || post.excerpt}
      />
      <article
        className={`blog-post ${styles.blogPost}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <h1 itemProp="headline">{post.title}</h1>
        <time datetime={post.publishDate}>{post.formatted_date}</time>
        <section
          dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
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
                  <Link to={`/blog/${previous.slug}`} rel="prev"
                    style={{
                      display: `block`
                    }}
                  >
                    {previous.title}
                  </Link>
                </>
              </li>
            )}
            {next && (
              <li>
                  <>
                    Next:
                    <Link to={`/blog/${next.slug}`} rel="next"
                      style={{
                        display: `block`
                      }}
                    >
                      {next.title}
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
      title
    }
    next: contentfulBlogPost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
