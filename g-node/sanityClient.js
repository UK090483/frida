const sanityClient = require("@sanity/client")
const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})

exports.sanity = client
