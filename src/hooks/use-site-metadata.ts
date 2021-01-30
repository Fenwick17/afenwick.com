import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
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
