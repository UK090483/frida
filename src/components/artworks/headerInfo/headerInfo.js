import React from "react"
// import ArtworkName from "../shared/artworkName"
import styled from "styled-components"
import BuyButtonSnipCart from "../singleArtwork/Buybutton/buybuttonSnipcart"

const ArtworkHeaderInfo = ({ artwork }) => {
  // const { artworkName, availability, price } = artwork

  return (
    <Root>
      {/* <h6>
        <ArtworkName artworkName={artworkName} availability={availability} />
      </h6>
      <h6>{price}€</h6> */}
      <ButtonWrap>
        <BuyButtonSnipCart artwork={artwork}></BuyButtonSnipCart>
      </ButtonWrap>
    </Root>
  )
}

const Root = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h6 {
    margin: 0;
    padding: 0;
  }
`
const ButtonWrap = styled.div`
  margin-left: auto;
  pointer-events: all;
  width: 600px;
`

export default ArtworkHeaderInfo
