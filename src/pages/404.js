import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteLogo = data.site.siteMetadata.siteLogo
  const social = data.site.siteMetadata.social

  return (
    <Layout location={location} siteLogo={siteLogo} social={social}>
      <SEO title="Page Not Found" />
      <h1>Oh boy, looks like this page does not exist</h1>
      <p>Let's go <a href="/">back to the homepage</a></p>
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
        }
      }
    }
  }
`
