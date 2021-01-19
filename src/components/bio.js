import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing 'siteMetadata' in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      {author?.name && (
        <p className="u-no-margin-bottom">
          I am <span>{author.name}</span>
        </p>
      )}
      <p className="bio-role">Frontend developer and accessibility engineer.</p>
    </div>
  );
};

export default Bio;
