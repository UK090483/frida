const postCssPlugins = require("./postcss-config.js")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `meetFrida`,
    description: `Deutschlands größte Outdoor- und Online-Gallery für junge Kunst`,
    author: ``,
    siteUrl: `https://www.meetfrida.art`,
  },
  plugins: [
    "gatsby-plugin-next-seo",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
      },
      resolveSiteUrl: ({ site, allSitePage }) => {
        //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.siteMetadata.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        }),
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://konradullrich.us2.list-manage.com/subscribe/post?u=f8a1eaf8a1e4185054a0e48db&amp;id=a56d78dc14", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
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
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.22",
        publicApiKey: process.env.SNIPCART_KEY,
        defaultLang: "de",
        currency: "eur",
        openCartOnAdd: false,
        innerHTML: `
          <billing section="bottom">
              <!-- Customization goes here -->
          </billing>`,
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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            // variable: true,
            weights: [`500`, `800`],
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
