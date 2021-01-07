import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteLogo = data.site.siteMetadata.siteLogo
  const social = data.site.siteMetadata.social

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title="Contact" />
      <h1 className="u-no-margin-top">Contact me</h1>
      <p>You can <a href={`mailto:${social.email}`}>email me</a> or <a href={`https://twitter.com/${social.twitter}`}>contact me on Twitter</a>, my DMs are always open.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteLogo 
        social {
          twitter
          github
          email
        }
      }
    }
  }
`
