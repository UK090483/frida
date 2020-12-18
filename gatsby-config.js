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
    "gatsby-custom-artwork",
    "gatsby-plugin-next-seo",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/sanityprev`, `/style`, `/cityartweek`],
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
          "https://schwan-communications.us10.list-manage.com/subscribe/post?u=0693cf0fd1f53ea9e2aa9f071&amp;id=475c170fb2", // string; add your MC list endpoint here; see instructions below
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
      resolve: "gatsby-custom-shopify-storefront",
      options: {
        // Your Shopify instance name (e.g. 'shopify-store-name',
        // if your shopify shop is located at https://shopify-store-name.myshopify.com/)
        siteName: process.env.SHOPIFY_SHOP_NAME,
        // Your Shopify Storefront API access token
        // generated in the private apps section of your store admin.
        // Refer to Shopify's Storefront API Documentation for more information
        // https://help.shopify.com/api/storefront-api/getting-started
        accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-source-shopify`,
    //   options: {
    //     // The domain name of your Shopify shop. This is required.
    //     // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
    //     // 'gatsby-source-shopify-test-shop.myshopify.com'.
    //     shopName: process.env.SHOPIFY_SHOP_NAME,

    //     // An API access token to your Shopify shop. This is required.
    //     // You can generate an access token in the "Manage private apps" section
    //     // of your shop's Apps settings. In the Storefront API section, be sure
    //     // to select "Allow this app to access your storefront data using the
    //     // Storefront API".
    //     // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
    //     accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,

    //     // Set verbose to true to display a verbose output on `npm run develop`
    //     // or `npm run build`. This prints which nodes are being fetched and how
    //     // much time was required to fetch and process the data.
    //     // Defaults to true.

    //     verbose: true,
    //     includeCollections: ["shop"],
    //   },
    // },

    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Shop",
    //     fieldName: "shop",
    //     url: `https://${process.env.SHOPIFY_SHOP_NAME}.myshopify.com/api/graphql`,
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       "X-Shopify-Storefront-Access-Token":
    //         process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    //     },
    //     // HTTP headers alternatively accepts a function (allows async)

    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },

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
