import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity"
const imageUrlBuilder = require("@sanity/image-url")

const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const builder = imageUrlBuilder(sanityConfig)

function urlFor(source) {
  return builder.image(source)
}

const getFluidImage = (imageAssetId, conf) => {
  const res = getFluidGatsbyImage(imageAssetId, { ...conf }, sanityConfig)
  res.base64 = urlFor(imageAssetId).width(20).url()
  return res
}
const getFixedImage = imageAssetId => {
  const res = getFixedGatsbyImage(
    imageAssetId,
    { maxWidth: 50, quality: 60 },
    sanityConfig
  )
  res.base64 = urlFor(imageAssetId).width(20).url()
  return res
}

export { getFluidImage, getFixedImage, urlFor }
