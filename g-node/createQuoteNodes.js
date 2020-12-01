const { sanity } = require("./sanityClient")

async function createQuoteNodes(actions, createNodeId, createContentDigest) {
  const sanityQuotes = await loadQuotesSanity()
  const { createNode } = actions
  sanityQuotes.forEach(item => {
    const {
      artworkImage,
      artworkUuid,
      author,
      image,
      quote,
      subtitle,
      uuid,
    } = item

    const data = {
      artworkImage,
      artworkUuid,
      author,
      image,
      quote,
      subtitle,
    }

    const nodeContent = JSON.stringify(data)
    const nodeMeta = {
      id: createNodeId(`frida-quote-${uuid}`),
      parent: null,
      children: [],
      internal: {
        type: `FridaQuote`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    }
    const node = Object.assign({}, data, nodeMeta)
    createNode(node)
  })
}

const loadQuotesSanity = async () => {
  console.time("SANITY_____Load___quotes")
  const query = `
  *[_type == 'quote']{
    "artworkImage":Artwork->image.asset._ref,
    "artworkUuid":Artwork->_id,
    "uuid":_id,
    author,
    image,
    quote,
    subtitle
  }`
  const params = {}

  const res = await sanity.fetch(query, params)

  console.timeEnd("SANITY_____Load___quotes")

  return res
}

exports.createQuoteNodes = createQuoteNodes
