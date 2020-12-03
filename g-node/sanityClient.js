const sanityClient = require("@sanity/client")
const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})

const imageUrlBuilder = require("@sanity/image-url")
const builder = imageUrlBuilder({ projectId: "ypuaahj7", dataset: "test2" })

function urlFor(source) {
  return builder.image(source)
}

exports.sanity = client
exports.sanityConfig = sanityConfig
exports.urlFor = urlFor
