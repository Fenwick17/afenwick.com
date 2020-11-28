import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css";
  
const Nav = () => {
  return (
    <nav className={styles.mainNav} aria-label="primary">
      <ul>
        <li><Link to="/" activeClassName="active-page">Home</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        <li><a href="https://twitter.com/AdamFenwickFE">Twitter</a></li>
      </ul>
    </nav>
  )
}

export default Nav;