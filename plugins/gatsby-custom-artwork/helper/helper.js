const { logSuccses } = require("../lib/logger")
const { getAllShopifyProducts } = require("../lib/shopify")
const { shopifyFetch } = require("../../../lib/shopifyClient")
var _remove = require("lodash/remove")

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
// const isExistend = products.filter(product => {
//   return product.handle === artwork.shopify_handle
// })
const checkforNotconnected = async (artworks, products) => {
  artworks.forEach(artwork => {
    _remove(products, p => {
      return p.handle === artwork.shopify_handle
    })
  })

  products.forEach(p => {
    console.log(p.title)
  })
}

exports.checkforNotconnected = checkforNotconnected

exports.eraseAllProducts = eraseAllProducts
exports.logAllProducts = logAllProducts
