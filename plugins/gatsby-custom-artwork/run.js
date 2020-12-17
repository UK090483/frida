const path = require("path")
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env.development"),
})

const { logStart } = require("./lib/logger")
const { getAllShopifyProducts } = require("./lib/shopify")
const { getAllArtworksSanity, getAllProductsSanity } = require("./lib/sanity")
const { SantityToShopify } = require("./lib/functions")
const { eraseAllProducts, logAllProducts } = require("./helper/helper")

const SyncToShopify = async () => {
  logStart("STARTING UP SANITY TO SHOPIFY")

  // const artworks = await getAllArtworksSanity()

  //const products = await getAllShopifyProducts()

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
