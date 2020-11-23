import React from "react"
import { Link } from "gatsby"

import Nav from "./nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <p className="main-heading">
        {title}
      </p>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title} 
      </Link>
    )
  }

  return (
    <>
      <a href="#main" class="skip-link">Skip to main content</a>
      <div class="flex-wrapper container" data-is-root-path={isRootPath}>
        <header className="global-header">
          {header}
          <Nav />
        </header>
        <main id="main" class="main-content wrapper">{children}</main>
        <footer>
          <h2>Follow me on:</h2>
          <ul>
            <li>Twitter</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Layout
