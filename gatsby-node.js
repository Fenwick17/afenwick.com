const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost(sort: { fields: [publishDate], order: ASC }) {
          edges {
            next {
              id
            }
            previous {
              id
            }
            node {
              title
              slug
              publishDate
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.edges

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = post.previous?.id 
      const nextPostId = post.next?.id 
      const postYear = new Date(post.node.publishDate).getFullYear()

      createPage({
        path: `/blog/${postYear}/${post.node.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          slug: post.node.slug
        },
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      github: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      siteLogo: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
