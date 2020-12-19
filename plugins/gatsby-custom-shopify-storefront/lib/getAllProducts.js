const productQuery = require("./product-query")

const getAllProducts = async (
  client,
  first = 50,
  after = null,
  aggregatedResponse = null
) => {
  const variables = {
    first,
    after,
  }

  const response = await client.query(productQuery, variables)
  const edges = response.data.shop.products.edges.map(edge => edge)
  const nodes = edges.map(edge => edge.node)

  aggregatedResponse = aggregatedResponse
    ? aggregatedResponse.concat(nodes)
    : nodes

  if (response.data.shop.products.pageInfo.hasNextPage) {
    return getAllProducts(
      client,
      first,
      edges[edges.length - 1].cursor,
      aggregatedResponse
    )
  }
  console.log("loaded " + aggregatedResponse.length + " artikel from shopify")
  return aggregatedResponse
}

module.exports = getAllProducts
