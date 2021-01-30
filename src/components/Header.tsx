import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { useSiteMetadata } from '../hooks/use-site-metadata';

type HeaderProps = {
  isRootPath: boolean
}

const Header: React.FC<HeaderProps> = ({ isRootPath }) => {
  const { siteLogo } = useSiteMetadata();
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
      {header}
    </>
  );
}

export default Header;