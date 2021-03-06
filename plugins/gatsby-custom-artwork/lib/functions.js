const { logSuccses, logInfo } = require("./logger")
const {
  makeProduct,
  updateProduct,
  getAllShopifyProducts,
  checkForProduct,
} = require("./shopify")
const { addSyncDataToSanity } = require("./sanity")

const checkIfUpdateNeeded = (sanity, shopify) => {
  const sa = new Date(sanity).getTime()
  const sh = new Date(shopify).getTime()

  return sa - sh > 10000
}

const SantityToShopify = async (type, sanityProduckts) => {
  const products = await getAllShopifyProducts()

  let created = 0
  let updated = 0
  let needsTowait = false

  for (const SanityProduct of sanityProduckts) {
    const { action = null, product = null } = await checkNeededActions(
      products,
      SanityProduct
    )
    if (action === "create") {
      needsTowait = true
      created++
      console.log(".................handle create")
      await createProduct(type, SanityProduct)
    }
    if (action === "update") {
      needsTowait = true
      updated++
      console.log(".................handle update")
      await handleUpdateProduct(type, SanityProduct, product)
    }
  }

  if (needsTowait) {
    await waitSomeTime()
  }

  return { created, updated, needsTowait }
}

async function waitSomeTime() {
  console.log("waitSomeTime")
  await sleep(10000)
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const createProduct = async (type, artwork) => {
  const newProduct = await makeProduct(type, artwork)

  if (!newProduct) {
    console.log(
      "artwork " + artwork.title + " unable to create Shopify product"
    )
    return
  }
  await addSyncDataToSanity(newProduct, artwork)
}

const handleUpdateProduct = async (type, SanityProduct, product) => {
  const updatedProduct = await updateProduct(type, SanityProduct, product)

  if (!updatedProduct) {
    console.log(
      "artwork " + SanityProduct.title + " unable to create Shopify product"
    )
    return
  }
  await addSyncDataToSanity(updatedProduct, SanityProduct)
}

checkNeededActions = async (products, artwork) => {
  const isExistend = products.filter(product => {
    return product.handle === artwork.shopify_handle
  })

  let product = isExistend.length > 0 ? isExistend[0] : null

  if (!product) {
    logInfo("couldnt find product in first run ... check specific")
    product = await checkForProduct(artwork.shopify_product_id)

    if (!product) {
      logInfo("couldnt find product in second run ... ")
      logInfo("needs do be created")
      return { action: "create" }
    }
  }

  if (checkIfUpdateNeeded(artwork._updatedAt, product.updated_at)) {
    logSuccses(
      " ----already exists ---- but needs update " + artwork.artworkName
    )
    return { action: "update", product }
  }

  //logSuccses(" ----already exists ---- needs no update" + artwork.artworkName)

  return { action: null }
}

exports.SantityToShopify = SantityToShopify
