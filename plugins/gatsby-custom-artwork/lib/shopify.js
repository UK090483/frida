const { logSuccses, logError, logInfo } = require("./logger")
const { urlFor } = require("../../../g-node/sanityClient")
const { shopifyFetch } = require("../../../g-node/shopifyClient")

const getAllShopifyProducts = async () => {
  let res = await shopifyFetch("products", "GET", null)
  if (!res) {
    logError("imposible to get Products from shopify ", "shopify.js")
    return null
  }
  logSuccses(`fetched ${res.products.length} from Shopify`)
  return res.products
}

const addToProductListing = async id => {
  let res = await shopifyFetch(`product_listings/${id}`, "PUT", {
    product_listing: { product_id: id },
  })
  return res
}

const getValues = product => {
  const { title, image, price, slug, description, variants } = product
  if (!variants || variants.length < 1) {
    return {
      variants: [
        {
          inventory_management: "shopify",
          inventory_quantity: 1,
          price: price,
          requires_shipping: false,
        },
      ],
      images: [
        {
          src: urlFor(image.asset._ref).width(1000).url(),
        },
      ],
      hasVariants: false,
    }
  }

  const res = {
    variants: [],
    images: [
      {
        src: urlFor(image.asset._ref).width(1000).url(),
      },
    ],
    hasVariants: true,
  }

  variants.forEach(variant => {
    console.log(variant)
    const { price, image, title } = variant
    res.variants.push({
      title,
      handle: slug + "/" + title,
      inventory_management: "shopify",
      inventory_quantity: 1,
      price: price,
      requires_shipping: false,
    })
    res.images.push({
      src: urlFor(image.asset._ref).width(1000).url(),
    })
  })

  return res
}

const buildProductObject = (type, sanityProduct) => {
  const { title, image, price, slug, description } = sanityProduct

  const { variants, images, hasVariants } = getValues(sanityProduct)

  return {
    title,
    product_type: type,
    handle: slug,
    body_html: `<p>${description}</p>`,
    published_scope: "global",
    variants,
    images,
  }
}

const makeProduct = async (type, artwork) => {
  let product = buildProductObject(type, artwork)

  if (!product) {
    logInfo(`imposible to create productObject for ${type}`)
    return
  }

  logInfo(`start creating ${type}  ${product.title}`)

  let res = await shopifyFetch("products", "POST", {
    product: product,
  })

  if (!res.product) {
    return null
  }

  await addToProductListing(res.product.id)
  logSuccses("making product " + product.title + " done")
  return res.product
}

const updateProduct = async (type, artwork, id) => {
  const product = buildProductObject(type, artwork)
  console.log("start update product " + product.title)
  let res = await shopifyFetch(`products/${id}`, "PUT", {
    product: product,
  })
  return res
}

exports.getAllShopifyProducts = getAllShopifyProducts
exports.makeProduct = makeProduct
exports.updateProduct = updateProduct
