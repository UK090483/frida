const postCssPlugins = require("./postcss-config.js")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Frida`,
    description: ``,
    author: ``,
    siteUrl: `https://www.meetfrida.art`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     query: `
    //       {
    //         allSitePage {
    //           nodes {
    //             path
    //           }
    //         }
    //     }`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-sanity`,
    //   options: {
    //     projectId: "ypuaahj7",
    //     dataset: "test2",
    //     // a token with read permissions is required
    //     // if you have a private dataset
    //     token: process.env.SANITY_TOKEN,

    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { "~components": "src/components", "~context": "src/context" },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: "#___gatsby",
        modalProps: {
          htmlOpenClassName: "Frida_no_scroll",
          portalClassName: "Frida_ReactModalPortal",
          closeTimeoutMS: 300,
        },
      },
    },
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
        trackingId: "UA-173386755-1",
        enableDevelopment: false,
        anonymizeIP: true,
        autoStartWithCookiesEnabled: false,
        reactGaOptions: {
          debug: false,
          gaOptions: {
            sampleRate: 10,
          },
        },
      },
    },
    // {
    //   resolve: "gatsby-source-storyblok",
    //   options: {
    //     accessToken: "ObvzIeHZVi9TkIUctkrfHQtt",
    //     homeSlug: "home",
    //     version: process.env.NODE_ENV === "production" ? "published" : "draft",
    //     resolveRelations: ["artist", "stil", "medium"],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
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
        icon: `src/images/frida-icon.png`,
      },
    },
  ],
}
