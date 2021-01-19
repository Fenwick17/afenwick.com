require('dotenv').config({
  path: `.env`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: `Adam Fenwick, frontend developer and accessibility engineer.`,
    siteLogo: `Adam Fenwick`,
    author: {
      name: `Adam Fenwick`,
      summary: `a frontend developer and accessibility engineer.`,
    },
    description: `Articles on web accessibility and frontend development.`,
    siteUrl: `https://www.afenwick.com/`,
    social: {
      twitter: `@AdamFenwickFE`,
      twitterURL: `https://www.twitter.com/AdamFenwickFE`,
      github: `Fenwick17`,
      githubURL: `https://www.github.com/Fenwick17`,
      email: `hello@afenwick.com`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
              showCaptions: true,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Fenwick Blog`,
        short_name: `afenwickBlog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicons/favicon-32x32.png`,
        icons: [
          {
            src: `static/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ]
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.afenwick.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      option: {
        domain: `afenwick.com`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-sitemap`
  ],
}
