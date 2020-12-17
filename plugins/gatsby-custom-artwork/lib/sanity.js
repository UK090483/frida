const { sanity } = require("../../../lib/sanityClient")
const { logSuccses, logError } = require("./logger")

const getAllArtworksSanity = async () => {
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
          shopify_updated_at,
          shopify_handle,
          _updatedAt
        }`
  const params = {}

  try {
    const res = await sanity.fetch(query, params)
    logSuccses(`fetched ${res.length} artworks from sanity`)
    return res
  } catch (error) {
    logError(`failed to fetch artworks from sanity`, "sanity.js")
  }
}

const getAllProductsSanity = async () => {
  const query = `
        *[_type == 'product']{
          title,
          "uuid":_id,
          "slug" : slug.current,
          "artworkName":name,
          availability,
          description,
          width,
          height,
          depth,
          price,
          image,
          shopify_updated_at,
           variants,
          _updatedAt
        }[0...30]`
  const params = {}

  try {
    const res = await sanity.fetch(query, params)
    logSuccses(`fetched ${res.length} products from sanity`)
    return res
  } catch (error) {
    logError(`failed to fetch products from sanity`, "sanity.js")
  }
}

const addSyncDataToSanity = async (product, artwork) => {
  await sanity
    .patch(artwork.uuid)
    .set({
      // shopify_product_handle: product.handle + "",
      shopify_handle: product.handle + "",
      shopify_product_id: product.id + "",
      // shopify_updated_at: product.updated_at,
      // shopify_variant_id: product.variants[0].id + "",
    })
    .commit()
    .then(artwork => {
      logSuccses(`updated SyncData for Artwork ${artwork.name} on Sanity`)
    })
    .catch(err => {
      logError(`update SyncData  failed for Artwork ${artwork.name} on Sanity`)
    })
}

exports.getAllProductsSanity = getAllProductsSanity
exports.getAllArtworksSanity = getAllArtworksSanity
exports.addSyncDataToSanity = addSyncDataToSanity
