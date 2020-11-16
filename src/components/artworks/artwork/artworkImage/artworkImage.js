import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ArtworkImage = props => {
  const { alt, fluid } = props

  return (
    <React.Fragment>
      {
        <Img
          alt={alt}
          fluid={{
            ...fluid,
          }}
        />
      }
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
