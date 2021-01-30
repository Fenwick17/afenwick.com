import React from 'react';

import { useSiteMetadata } from '../hooks/use-site-metadata';

const Bio: React.FC = () => {
  const { author: { name, summary } } = useSiteMetadata();
  return (
    <div className="bio">
      {name && (
        <p className="u-no-margin-bottom">
          I am <span>{ name }</span>
        </p>
      )}
      <p className="bio-role">{ summary }</p>
    </div>
  );
};

export default Bio;
