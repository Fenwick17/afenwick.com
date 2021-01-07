import React from "react"
import { Link } from "gatsby"

import Nav from "./nav";

const Layout = ({ data, location, children, siteLogo, social }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <span className="header-logo">
          {siteLogo}
        </span>
      </div>
    )
  } else {
    header = (
      <div>
        <span>
          <Link className="header-link-home header-logo" to="/">
            {siteLogo}
          </Link>
        </span>
      </div>
    )
  }

  return (
    <>
      <a id="skip-link" href="#main-content" class="skip-link">Skip to main content</a>
      <header className="global-header">
        <div class="container">
          <div class="navigation">
            {header}
            <Nav />
          </div>
        </div>
      </header>
      <div class="container" data-is-root-path={isRootPath}>
        <main id="main-content" class="main-content wrapper">{children}</main>
      </div>
      <footer>
        <div class="container">
          <h2 class="u-no-margin-top">Socials:</h2>
          <ul>
            <li><a href={`https://www.twitter.com/${social.twitter}`}>Twitter</a></li>
            <li class="u-no-margin-bottom"><a href={`https://www.github.com/${social.github}`}>Github</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Layout