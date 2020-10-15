const postCssPlugins = require("./postcss-config.js")
// const { createProxyMiddleware } = require("http-proxy-middleware")
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

//process.env.GATSBY_CONCURRENT_DOWNLOAD = 1

module.exports = {
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },

  siteMetadata: {
    title: `Frida`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
          fix: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-173386755-1",
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false,
        // Optional parameter - Configuration for react-ga and google analytics
        reactGaOptions: {
          debug: false,
          gaOptions: {
            sampleRate: 10,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "ObvzIeHZVi9TkIUctkrfHQtt",
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        // version: "published",
        resolveRelations: ["artist", "stil", "medium"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "StoryQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "storyQL",
        // Url to query from
        url: "https://gapi.storyblok.com/v1/api",

        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Token: `ObvzIeHZVi9TkIUctkrfHQtt`,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://fridaadmin.konradullrich.com/wp-json/frida/v1/poster/",
        imageKeys: ["images"],
        rootKey: "fridaPoster",
        schemas: {
          fridaPoster: `
            images: [images]
          `,
          images: `
            url: String,
            modified: Int
          `,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`500`, `800`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `#MeetFrida`,
        short_name: `#MeetFrida`,
        start_url: `/`,
        background_color: `#f5c5d9`,
        theme_color: `#f5c5d9`,
        display: `minimal-ui`,
        icon: `src/images/frida-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby - plugin - offline`,
  ],
}
