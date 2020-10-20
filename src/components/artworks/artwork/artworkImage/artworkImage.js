import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-storyblok-image"

const ArtworkImage = ({ src, alt }) => {
  const fluidProps = getFluidGatsbyImage(src, {
    maxWidth: 400,
    quality: 60,
    smartCrop: false,
    useBase64: false,
  })

  return (
    <Img
      alt={alt}
      // onLoad={() => {
      //   onLoad()
      // }}
      fluid={fluidProps}
    />
  )
}

ArtworkImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
}

export default React.memo(ArtworkImage)
