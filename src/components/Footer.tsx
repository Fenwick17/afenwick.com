import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Footer: React.FC = () => {
  const { social: { twitterURL, githubURL } } = useSiteMetadata();
  return (
    <footer>
      <h2 className="u-no-margin-top">Socials:</h2>
      <ul>
        <li><a href={twitterURL}>Twitter</a></li>
        <li className="u-no-margin-bottom"><a href={githubURL}>Github</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
