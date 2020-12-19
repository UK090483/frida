const { logSuccses, logError, logInfo } = require("./logger")
const { urlFor } = require("../../../lib/sanityClient")
const { shopifyFetch } = require("../../../lib/shopifyClient")
const { getPriceWithTax } = require("../../../lib/getPriceWithTax")

function compare(a, b) {
  if (a.handle < b.handle) {
    return -1
  }
  if (a.handle > b.handle) {
    return 1
  }
  return 0
}

const getAllShopifyProducts = async () => {
  let res = await getAllShopifyProductsPaginated()

  // res.sort(compare)

  // res.forEach(e => {
  //   console.log(e.handle)
  // })

  if (!res) {
    logError("imposible to get Products from shopify ", "shopify.js")
    return null
  }
  logSuccses(`fetched ${res.length} from Shopify`)

  return res
}

const addToProductListing = async id => {
  let res = await shopifyFetch(`product_listings/${id}`, "PUT", {
    product_listing: { product_id: id },
  })
  return res
}

const buildProductObject = (type, sanityProduct) => {
  const {
    image,
    price,
    description,
    artistName,
    artworkName,
    stil,
    medium,
  } = sanityProduct

  return {
    title: `${artworkName} von ${artistName}`,
    product_type: type,
    body_html: `<p>${description}</p>`,
    published_scope: "global",
    tags: `${stil},${medium}`,
    variants: [
      {
        inventory_management: "shopify",
        inventory_quantity: 1,
        price: getPriceWithTax(price),
        requires_shipping: false,
      },
    ],
    images: [
      {
        src: urlFor(image.asset._ref).width(1500).url(),
      },
    ],
    hasVariants: false,
  }
}
const buildProductUpdateObject = (type, sanityProduct, product) => {
  const {
    image,
    price,
    description,
    artistName,
    artworkName,
    stil,
    medium,
  } = sanityProduct

  const { variants } = product

  return {
    title: `${artworkName} von ${artistName}`,
    body_html: `<p>${description}</p>`,
    tags: `${stil},${medium}`,
    variants: [
      {
        inventory_management: "shopify",
        inventory_quantity: variants[0].inventory_quantity,
        price: getPriceWithTax(price),
        requires_shipping: false,
      },
    ],
    images: [
      {
        src: urlFor(image.asset._ref).width(1500).url(),
      },
    ],
    hasVariants: false,
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

const updateProduct = async (type, artwork, product) => {
  const Nextproduct = buildProductUpdateObject(type, artwork, product)
  console.log("start update product " + Nextproduct.title)
  let res = await shopifyFetch(`products/${product.id}`, "PUT", {
    product: Nextproduct,
  })

  if (!res.product) {
    return null
  }
  return res.product
}

const getAllShopifyProductsPaginated = async (
  since_id = null,
  aggregatedResponse = null
) => {
  let response = await shopifyFetch(
    "products",
    "GET",
    null,
    `?limit=250&product_type=artwork&order=id&direction=next${
      since_id ? `&last_id=${since_id}` : ""
    }`
  )

  const products = response.products

  aggregatedResponse = aggregatedResponse
    ? aggregatedResponse.concat(products)
    : products

  if (products.length === 250) {
    const lastId = response.products[response.products.length - 1].id
    return getAllShopifyProductsPaginated(lastId, aggregatedResponse)
  }
  return aggregatedResponse
}

const getAllProducts = async (
  client,
  first = 50,
  after = null,
  aggregatedResponse = null
) => {
  const variables = {
    first,
    after,
  }

  const response = await client.query(productQuery, variables)
  const edges = response.data.shop.products.edges.map(edge => edge)
  const nodes = edges.map(edge => edge.node)

  aggregatedResponse = aggregatedResponse
    ? aggregatedResponse.concat(nodes)
    : nodes

  if (response.data.shop.products.pageInfo.hasNextPage) {
    return getAllProducts(
      client,
      first,
      edges[edges.length - 1].cursor,
      aggregatedResponse
    )
  }
  console.log("loaded " + aggregatedResponse.length + " artikel from shopify")
  return aggregatedResponse
}

const checkForProduct = async id => {
  let res = await shopifyFetch(`products/${id}`, "GET")
  if (res.errors === "Not Found") {
    return null
  }
  return res.product
}
exports.checkForProduct = checkForProduct
exports.getAllShopifyProducts = getAllShopifyProducts
exports.makeProduct = makeProduct
exports.updateProduct = updateProduct
exports.getAllShopifyProductsPaginated = getAllShopifyProductsPaginated
