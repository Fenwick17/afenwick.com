import { useStaticQuery, graphql } from 'gatsby';

interface SiteMetaData {
  title: string,
  siteLogo: string,
  author: {
    name: string,
    summary: string,
  }
  description: string,
  siteuUrl: string,
  social: {
    twitter: string,
    twitterURL: string,
    github: string,
    githubURL: string,
    email: string,
  }
}

export const useSiteMetadata = (): SiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteLogo
            author {
              name,
              summary
            }
            description
            siteUrl
            social {
              twitter,
              twitterURL
              github
              githubURL
              email
            }
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
