const client = require("graphql-client")({
  url: `https://${siteName}.myshopify.com/api/graphql`,
  headers: {
    "X-Shopify-Storefront-Access-Token": accessToken,
  },
})

module.exports = client
