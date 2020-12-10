const { sanity } = require("../../lib/sanityClient")

const { SantityToShopify } = require("./lib/functions")
const { getAllShopifyProducts } = require("./lib/shopify")
const { getPriceWithTax } = require("../../lib/getPriceWithTax")

const loadArtworksSanity = async () => {
  console.log("sanity _ start")
  console.time("SANITY_____Load")
  const query = `
  *[_type == 'artwork' && !(_id in path('drafts.**'))]{
    "uuid":_id,
    "slug" : slug.current,
    "artworkName":name,
    'title': name,
    availability,
    description,
    width,
    height,
    depth,
    price,
    "stil":stil->name,
    "medium":medium->name,
    "artistName": artist->anzeigeName,
    "artistWebLink": artist->webLink,
    "artistDescription": artist->description,
    "instagramLink": artist->instagramLink,
    "artistId": artist->_id,
    image,
    "rating":coalesce(rating, 0),
    "banner":coalesce(banner, 'unknown'),
    shopify_handle,
    }[0...50]`
  const params = {}

  const res = await sanity.fetch(query, params)

  console.timeEnd("SANITY_____Load")

  return res
}
async function createArtworNodes(actions, createNodeId, createContentDigest) {
  const sanityArtworksbefore = await loadArtworksSanity()

  await SantityToShopify("artwork", sanityArtworksbefore)

  const sanityArtworks = await loadArtworksSanity()
  const { createNode } = actions
  sanityArtworks.forEach(item => {
    const {
      slug,
      uuid,
      artworkName,
      availability,
      description,
      width,
      height,
      depth,
      price,
      rating,
      banner,
      stil,
      medium,
      artistName,
      artistWebLink,
      artistDescription,
      instagramLink,
      artistId,
      shopify_handle,
      image: {
        asset: { _ref: imageAssetId },
      },
    } = item

    const data = {
      ransortNumber: getWithRating(rating),
      uuid,
      availability,
      description,
      artistName,
      artistWebLink,
      artistDescription,
      instagramLink,
      medium,
      stil,
      artworkName,
      artistId,
      slug,
      width,
      height,
      depth,
      rating,
      banner,
      shopify_handle,
      price: getPriceWithTax(price),
      image: {
        imageAssetId,
      },
    }

    const nodeContent = JSON.stringify(data)
    const nodeMeta = {
      id: createNodeId(`frida-artwork-${uuid}`),
      parent: null,
      children: [],
      internal: {
        type: `FridaArtwork`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    }
    const node = Object.assign({}, data, nodeMeta)
    createNode(node)
  })
}

function getWithRating(rating) {
  return rating === 0 ? Math.random() : (rating + Math.random() - 1) * 0.1
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  await createArtworNodes(actions, createNodeId, createContentDigest)
}
