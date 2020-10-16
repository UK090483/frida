import React from "react"
import Frida from "../../frida/frida"
import styled from "styled-components"
import PropTypes from "prop-types"

import getPriceWithTax from "../helper/getPriceWithTax"
import Container from "./container/artworkContainer"
import ArtworkImage from "./artworkImage/artworkImage"
import ArtworkInfo from "./artworkInfo/ArtworkInfo"

function Artwork({ artwork, handleClick, handleLoaded }) {
  const { availability, artworkName, artistName, price, imageUrl } = artwork

  // const [loaded, setloaded] = useState(false)

  const makeVisilbe = () => {
    handleLoaded()
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Container
      onClick={() => handleClick(artwork)}
      loaded={true}
      artwork={artwork}
    >
      <ArtworkImage
        alt={`artwork ${artworkName} from ${artistName}`}
        onLoad={makeVisilbe}
        src={imageUrl}
      />

      <ArtistName>
        <Frida text={artistName} textColor="#f5c5d9"></Frida>
      </ArtistName>

      <ArtworkInfo
        availability={availability}
        price={getPriceWithTax(price)}
        artworkName={artworkName}
      />
    </Container>
  )
}

const ArtistName = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
  margin-bottom: 5px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.35rem;
  }
`

Artwork.propTypes = {
  artwork: PropTypes.object,
  handleClick: PropTypes.func,
  handleLoaded: PropTypes.func,
}

export default Artwork
