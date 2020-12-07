const { sanity } = require("../../../g-node/sanityClient")
const { logSuccses, logError } = require("./logger")

const addSyncDataToSanity = async (product, artwork) => {
  await sanity
    .patch(artwork.uuid)
    .set({
      shopify_product_id: product.id + "",
      shopify_updated_at: product.updated_at,
      shopify_variant_id: product.variants[0].id + "",
    })
    .commit()
    .then(artwork => {
      logSuccses(`updated SyncData for Artwork ${artwork.name} on Sanity`)
    })
    .catch(err => {
      logError(`update SyncData  failed for Artwork ${artwork.name} on Sanity`)
    })
}

exports.addSyncDataToSanity = addSyncDataToSanity
