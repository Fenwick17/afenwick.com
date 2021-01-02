/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio" style={{
      display: `table-header-group`
    }}>
      {author?.name && (
        <p className="u-no-margin-bottom" style={{
          fontSize: `1.5em`
        }}>
          Hello there. I'm <strong>{author.name}</strong>.
        </p>
      )}
        <p style={{
          marginTop: `0`,
          fontSize: `1.5em`,
          fontWeight: `700`
        }}>Frontend developer and accessibility engineer.</p>
    </div>
  )
}

export default Bio
