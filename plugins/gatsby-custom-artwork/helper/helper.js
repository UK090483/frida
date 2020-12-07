const { logSuccses } = require("../lib/logger")
const { getAllShopifyProducts } = require("../lib/shopify")
const { shopifyFetch } = require("../../../lib/shopifyClient")

const eraseAllProducts = async () => {
  let res = await shopifyFetch("products", "GET", null)
  for (const product of res.products) {
    if (product.product_type === "artwork") {
      await deletProduct(product.id)
    }
  }
}

const deletProduct = async id => {
  let res = await shopifyFetch(`products/${id}`, "DELETE", null)

  if (res) {
    logSuccses("artwork deleted")
  }
}

const logAllProducts = async () => {
  const allProducts = await getAllShopifyProducts()
  allProducts.forEach(element => {
    console.log(element)
  })
}

exports.eraseAllProducts = eraseAllProducts
exports.logAllProducts = logAllProducts
