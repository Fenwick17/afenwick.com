import React from 'react';
import { Link } from 'gatsby';

import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.mainNav} aria-label="Primary navigation">
    <ul>
      <li><Link to="/" activeClassName="active-page">Home</Link></li>
      <li><Link to="/contact/" activeClassName="active-page">Contact</Link></li>
    </ul>
  </nav>
);

export default Nav;
