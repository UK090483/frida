const { sanity } = require("./sanityClient")

const loadArtworksSanity = async () => {
  console.log("sanity _ start")
  console.time("SANITY_____Load")
  const query = `
    *[_type == 'artwork' && !(_id in path('drafts.**'))]{
      "uuid":_id,
      "slug" : slug.current,
      "artworkName":name,
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
      shopify_variant_id,
      shopify_product_id
    }[0...10]`
  const params = {}

  const res = await sanity.fetch(query, params)

  console.timeEnd("SANITY_____Load")

  return res
}

async function createArtworNodes(actions, createNodeId, createContentDigest) {
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
      shopify_variant_id,
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
      price: getPriceWithTax(price),
      image: {
        imageAssetId,
      },
      shopify_variant_id,
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

function getPriceWithTax(price) {
  if (!price) {
    return ""
  }
  const withTax = (price / 84) * 100
  const roundTen = Math.ceil(withTax / 10) * 10
  // console.log(`Preis: ${price}/ mitMwSt: ${withTax}/ gerundet: ${roundTen}`)
  return roundTen
}

exports.createArtworNodes = createArtworNodes
