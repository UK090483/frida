const { sanity } = require("./sanityClient")

async function createQuoteNodes(actions, createNodeId, createContentDigest) {
  const sanityQuotes = await loadQuotesSanity()
  const { createNode, createTypes } = actions

  const typeDefs = `
    type FridaQuote implements Node @dontInfer {
      artworkImage: String!
      artworkUuid: String!
      author: String!
      quote: String!
      image: String
      subtitle: String
    }
  `
  createTypes(typeDefs)

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
  *[_type == 'quote' && !(_id in path('drafts.**'))]{
    "artworkImage":Artwork->image.asset._ref,
    "artworkUuid":Artwork->_id,
    "uuid":_id,
    author,
    quote,
    subtitle,
    'image':image.asset._ref
  }`
  const params = {}

  const res = await sanity.fetch(query, params)

  console.timeEnd("SANITY_____Load___quotes")

  return res
}

exports.createQuoteNodes = createQuoteNodes
