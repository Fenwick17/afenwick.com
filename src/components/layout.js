import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Nav from './nav';
import SkipLink from '../js/utilities';

const Layout = ({
  location,
  children,
  siteLogo,
  social,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <div>
        <span className="header-logo">
          {siteLogo}
        </span>
      </div>
    );
  } else {
    header = (
      <div>
        <Link className="header-link-home header-logo" to="/" aria-label="Adam Fenwick homepage">
          {siteLogo}
        </Link>
      </div>
    );
  }

  return (
    <>
      <a id="skip-link" href="#main-content" className="skip-link" onClick={SkipLink}>Skip to main content</a>
      <div className="container">
        <header className="global-header">
          <div className="navigation">
            {header}
            <Nav />
          </div>
        </header>
        <div data-is-root-path={isRootPath}>
          <main id="main-content" className="main-content">
            {children}
          </main>
        </div>
        <footer>
          <h2 className="u-no-margin-top">Socials:</h2>
          <ul>
            <li><a href={social.twitterURL}>Twitter</a></li>
            <li className="u-no-margin-bottom"><a href={social.githubURL}>Github</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  siteLogo: PropTypes.string.isRequired,
  social: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};
