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
      <a id="skip-link" href="#main-content" className="skip-link">Skip to main content</a>
      <div className="container">
        <header className="global-header">
          <div className="navigation">
            {header}
            <Nav />
          </div>
        </header>
        <div data-is-root-path={isRootPath}>
          <main id="main-content" className="main-content" style={{}}>{children}</main>
        </div>
        <footer>
            <h2 className="u-no-margin-top">Socials:</h2>
            <ul>
              <li><a href={`https://www.twitter.com/${social.twitter}`}>Twitter</a></li>
              <li className="u-no-margin-bottom"><a href={`https://www.github.com/${social.github}`}>Github</a></li>
            </ul>
        </footer>
      </div>
    </>
  )
}

export default Layout