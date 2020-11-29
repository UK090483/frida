import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { getFluidImage } from "~components/helper/sanityImage"

const ArtworkImage = props => {
  const { alt, image } = props

  const fluidprops = getFluidImage(image.imageAssetId, { maxWidth: 500 })

  return (
    <React.Fragment>
      {/* <CustomImg alt={alt} imageAssetId={image.imageAssetId} /> */}
      {<Img alt={alt} fluid={fluidprops} draggable={false} />}
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

// const CustomImg = ({ alt, imageAssetId }) => {
//   const getImageWebp = w => {
//     return urlFor(imageAssetId).width(w).format("webp").url()
//   }
//   const getImage = w => {
//     return urlFor(imageAssetId).width(w).url()
//   }

//   return (
//     <picture>
//       <source
//         type="image/webp"
//         srcset={`${getImageWebp(320)} 500w,${getImageWebp(500)} 1000w,`}
//       ></source>
//       <StyledImg
//         sizes="(min-width: 500px) 500px,100vw"
//         srcset={`${getImage(320)} 500w,${getImage(500)} 1000w,`}
//         src={getImage(500)}
//         alt={alt}
//         loading="lazy"
//       ></StyledImg>
//     </picture>
//   )
// }

// const StyledImg = styled.img`
//   width: 100%;
// `
