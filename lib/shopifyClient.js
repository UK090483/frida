const fetch = require("node-fetch")

const API_KEY = process.env.SHOPIFY_API_KEY
const API_PASSWORD = process.env.SHOPIFY_API_PASSWORD
const STORENAME = process.env.SHOPIFY_SHOP_NAME

const { logError } = require("../plugins/gatsby-custom-artwork/lib/logger")

const shopifyFetch = async (slug, method, body, artibutes = "") => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": API_PASSWORD,
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  let res = null
  try {
    await fetch(
      `https://${API_KEY}:${API_PASSWORD}@${STORENAME}.myshopify.com/admin/api/2020-10/${slug}.json${artibutes}`,
      options
    )
      .then(result => {
        return result.json()
      })
      .then(data => {
        if (data.errors) {
          logError(JSON.stringify(data.errors), "shopifyClient.js")
        }

        res = data
      })
  } catch (error) {
    logError(error, "shopifyClient.js")
  }
  return res
}

exports.shopifyFetch = shopifyFetch
