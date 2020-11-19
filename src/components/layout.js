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
        Home 
      </Link>
    )
  }

  return (
    <>
      <a href="#main" class="skip-link">Skip to main content</a>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          {header}
          <Nav />
        </header>
        <main id="main">{children}</main>
        <footer>
          <ul>
            Follow me on
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
