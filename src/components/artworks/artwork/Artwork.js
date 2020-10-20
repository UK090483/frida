import React from "react"
import Frida from "../../frida/frida"
import styled from "styled-components"
import PropTypes from "prop-types"

import getPriceWithTax from "../helper/getPriceWithTax"
import Container from "./container/artworkContainer"
import ArtworkImage from "./artworkImage/artworkImage"
import ArtworkInfo from "./artworkInfo/ArtworkInfo"

function Artwork({ artwork, handleClick }) {
  const { availability, artworkName, artistName, price, imageUrl } = artwork

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Container
      onClick={() => handleClick(artwork)}
      loaded={true}
      artwork={artwork}
    >
      <ArtworkImage
        alt={`artwork ${artworkName} from ${artistName}`}
        src={imageUrl}
      />

      <ArtistName artistName={artistName}></ArtistName>

      <ArtworkInfo
        availability={availability}
        price={getPriceWithTax(price)}
        artworkName={artworkName}
      />
    </Container>
  )
}

Artwork.propTypes = {
  artwork: PropTypes.object,
  handleClick: PropTypes.func,
  handleLoaded: PropTypes.func,
}

export default React.memo(Artwork)

const StyledArtistName = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
  margin-bottom: 5px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.35rem;
  }
`

const ArtistName = React.memo(({ artistName }) => (
  <StyledArtistName>
    <Frida text={artistName} textColor="#f5c5d9"></Frida>
  </StyledArtistName>
))
