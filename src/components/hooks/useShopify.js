import React, { useState, useContext } from "react"
import shopContext from "~context/shopifyContext"

export default function useShopify(product) {
  const { variants, title, options, images } = product
  const shop = useContext(shopContext)
  const {
    store: { client },
  } = shop

  const [selImage, setSelImage] = useState(null)
  const [selectedOption, setOption] = useState(getInitialOption(variants[0]))

  const hasOptions = variants.length > 1

  const selectedVariant =
    client.product.helpers.variantForOptions(product, selectedOption) || variant

  const imagesArray = getImageArray(images, selectedVariant, selImage)

  const onImageClick = i => {
    const _v = variants.find(_variant => {
      return _variant.image.id === i.id
    })

    if (_v) {
      setOption(getInitialOption(_v))
      setSelImage(null)
    } else {
      setOption(getInitialOption(variants[0]))
      setSelImage(i.id)
    }
  }

  return {
    variant: selectedVariant,
    hasOptions,
    options,
    setOption,
    selectedOption,
    images,
    imagesArray,
    onImageClick,
    title,
  }
}

const getImageArray = (images, selectedVariant, selImage) => {
  return images.map(image => {
    return {
      src: image.originalSrc,
      id: image.id,
      active: selImage
        ? selImage === image.id
        : selectedVariant.image.id === image.id,
    }
  })
}

const getInitialOption = variant => {
  let res = {}
  variant.selectedOptions.forEach(v => {
    res[v.name] = v.value
  })
  return res
}
