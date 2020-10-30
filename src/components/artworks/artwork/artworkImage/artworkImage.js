import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
// import { getFluidGatsbyImage } from "gatsby-storyblok-image"
import { getFluidGatsbyImage } from "../../../helper/storyBlockImagetoGatsby"
import transformImage from "../../helper/transformImage"
const ArtworkImage = props => {
  const { src, alt, onLoad } = props
  const fluidProps = getFluidGatsbyImage(src, {
    maxWidth: 400,
    quality: 60,
    smartCrop: false,
    base64: transformImage(src, "10x0/filters:quality(10)"),
    useBase64: true,
  })
  // console.log("-------------")
  // console.log(props)
  // console.log(fluidProps)
  // console.log("-------------")

  return (
    <React.Fragment>
      {src && fluidProps && (
        <Img
          alt={alt}
          onLoad={() => {
            onLoad()
          }}
          fluid={fluidProps}
        />
      )}
    </React.Fragment>
  )
}

ArtworkImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
}
ArtworkImage.defaultProps = {
  src: "",
  alt: "artworImage",
  onLoad: () => {},
}

export default ArtworkImage
