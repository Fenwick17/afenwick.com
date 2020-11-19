import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css";
  
const Nav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;