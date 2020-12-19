const crypto = require("crypto")

const getAllProducts = require("./lib/getAllProducts")

exports.sourceNodes = async ({ actions }, { siteName, accessToken }) => {
  const { createNode } = actions
  const client = require("graphql-client")({
    url: `https://${siteName}.myshopify.com/api/2020-10/graphql.json`,
    headers: {
      "X-Shopify-Storefront-Access-Token": accessToken,
    },
  })

  const nodes = await getAllProducts(client)

  if (nodes) {
    nodes.forEach(node => {
      const {
        handle,
        availableForSale,
        title,
        id,
        images,
        variants,
        description,
        productType,
        options,
      } = node

      const n = {
        handle,
        availableForSale,
        title,
        id,
        images: images.edges.map(e => e.node),
        variants: variants.edges.map(e => e.node),
        description,
        productType,
        options,
      }

      n.parent = null
      n.children = []
      n.internal = {
        mediaType: "application/json",
        type: "ShopifyProduct2",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(n))
          .digest("hex"),
        content: JSON.stringify(n),
      }
      createNode(n)
    })
  }
  return
}
