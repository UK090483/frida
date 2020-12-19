function getShopifyImage(src, size) {
  if (!size) {
    console.error(
      "second argument size need to be existend in getShopifyImage.js"
    )
  }
  return src
    .replace(
      /_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g,
      "."
    )
    .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function (match) {
      return "_" + size + match
    })
}

export { getShopifyImage }
