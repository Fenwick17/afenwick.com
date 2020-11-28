import React from "react"
import { Link } from "gatsby"

import Nav from "./nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <p className="header-logo">
          {title}
        </p>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title} 
        </Link>
      </div>
    )
  }

  return (
    <>
      <a href="#main" class="skip-link">Skip to main content</a>
      <div class="container" data-is-root-path={isRootPath}>
        <header className="global-header">
          {header}
          <Nav />
        </header>
        <main id="main" class="main-content wrapper">{children}</main>
      </div>
      <footer>
        <div class="container">
          <h2 class="u-no-margin-top">Follow me on:</h2>
          <ul>
            <li>Twitter</li>
            <li>Github</li>
            <li class="u-no-margin-bottom">LinkedIn</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Layout
