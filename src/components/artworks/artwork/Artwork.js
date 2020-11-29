import React from "react"
import Frida from "../../frida/frida"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "./container/artworkContainer"
import ArtworkImage from "./artworkImage/artworkImage"
import ArtworkInfo from "./artworkInfo/ArtworkInfo"
import Banner from "./banner/banner"

function Artwork({ artwork, color = "pink", preventClick }) {
  const {
    availability,
    artworkName,
    artistName,
    price,
    image,
    banner,
  } = artwork

  return (
    <Container artwork={artwork} preventClick={preventClick}>
      <ArtworkImage
        alt={`artwork ${artworkName} from ${artistName}`}
        image={image}
        fluid={image.fluid500}
      />
      {banner === "hinzundkunzt" && <Banner></Banner>}
      <ArtistName>
        <Frida text={artistName} textColor={color}></Frida>
      </ArtistName>

      <ArtworkInfo
        availability={availability}
        price={price}
        artworkName={artworkName}
      />
    </Container>
  )
}

const ArtistName = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
  margin-bottom: 5px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.35rem;
  }
`
ArtistName.defaultProps = {
  theme: {
    device: { tablet: 100 },
  },
}

Artwork.propTypes = {
  artwork: PropTypes.object,
  handleClick: PropTypes.func,
  handleLoaded: PropTypes.func,
}

Artwork.defaultProps = {
  artwork: { price: 99999999999999 },
  handleClick: () => {},
  handleLoaded: () => {},
}

export default Artwork
