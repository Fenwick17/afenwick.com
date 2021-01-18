/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div class="bio">
      {author?.name && (
        <p className="u-no-margin-bottom">
          I'm <span style={{fontWeight: `700`}}>{author.name}</span>.
        </p>
      )}
        <p style={{
          marginTop: `0`,
          marginBottom: `var(--spacing-5)`,
          fontWeight: `700`
        }}>Frontend developer and accessibility engineer.</p>
    </div>
  )
}

export default Bio
