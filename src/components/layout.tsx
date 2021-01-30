import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Nav from './nav';
import Header from './Header';
import Footer from './Footer';
import SkipLink from '../js/utilities';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <a id="skip-link" href="#main-content" className="skip-link" onClick={SkipLink}>Skip to main content</a>
      <div className="container">
        <header className="global-header">
          <div className="navigation">
            <Header isRootPath={isRootPath} /> 
            <Nav />
          </div>
        </header>
        <div data-is-root-path={isRootPath}>
          <main id="main-content" className="main-content">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};
