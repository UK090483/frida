const fetch = require("node-fetch")

const shop_id = "549fe38b5d6c50c2aa5af019e15eef50"
const password = "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"
const storeName = "fridateststore"

const { logError } = require("./logger")

const shopifyFetch = async (slug, method, body) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": password,
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  let res = null
  try {
    await fetch(
      `https://${shop_id}:${password}@${storeName}.myshopify.com/admin/api/2020-10/${slug}.json`,
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
