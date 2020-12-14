import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css";
  
const Nav = () => {
  return (
    <nav className={styles.mainNav} aria-label="primary">
      <ul>
        <li><Link to="/" activeClassName="active-page">Home</Link></li>
        <li><Link to="/about" activeClassName="active-page">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;