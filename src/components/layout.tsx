import React from 'react';
import { PageProps } from 'gatsby';

import Nav from './nav';
import Header from './Header';
import Footer from './Footer';
import SkipLink from '../js/utilities';

interface LayoutProps extends PageProps {
  locationPath: string
}

const Layout = ({ locationPath, children }: LayoutProps): JSX.Element => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath: boolean = locationPath === rootPath;
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
