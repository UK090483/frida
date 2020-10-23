import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-storyblok-image"
import transformImage from "../../helper/transformImage"
const ArtworkImage = ({ src, alt, onLoad }) => {
  const fluidProps = getFluidGatsbyImage(src, {
    maxWidth: 400,
    quality: 60,
    smartCrop: false,
    base64: transformImage(src, "10x0/filters:quality(10)"),
    useBase64: true,
  })

  return (
    <Img
      alt={alt}
      onLoad={() => {
        onLoad()
      }}
      fluid={fluidProps}
    />
  )
}

ArtworkImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
}

export default ArtworkImage
