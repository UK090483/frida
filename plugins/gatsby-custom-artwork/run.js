const path = require("path")
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env.development"),
})

const { logStart } = require("./lib/logger")
const { getAllShopifyProducts, checkForProduct } = require("./lib/shopify")
const { getAllArtworksSanity, getAllProductsSanity } = require("./lib/sanity")
const { SantityToShopify } = require("./lib/functions")
const {
  eraseAllProducts,
  logAllProducts,
  checkforNotconnected,
} = require("./helper/helper")

const SyncToShopify = async () => {
  logStart("STARTING UP SANITY TO SHOPIFY")

  // const artworks = await getAllArtworksSanity()

  // console.log(artworks[200].shopify_product_id)
  // const products = await getAllShopifyProducts()

  // const notConected = await checkforNotconnected(artworks, products)
  // products.forEach(p => {
  //   console.log(p.handle)
  // })
  // await SantityToShopify("artwork", artworks)
}

//eraseAllProducts();

SyncToShopify()
//logAllProducts();

// const run = async () => {
//   res = await getAllShopifyProductsPaginated();
//   console.log(res.length);
// };

// run();
