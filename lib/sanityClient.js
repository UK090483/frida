const sanityClient = require("@sanity/client")
const { sanityConfig } = require("./sanityConfig")

const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})

const imageUrlBuilder = require("@sanity/image-url")
const builder = imageUrlBuilder(sanityConfig)

function urlFor(source) {
  return builder.image(source)
}

exports.sanity = client
exports.sanityConfig = sanityConfig
exports.urlFor = urlFor
