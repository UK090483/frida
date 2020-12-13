import React from "react"
import styled from "styled-components"

import FridaImage from "../fridaImage/fridaImage"
import SozialShare from "~components/SozialShare/SozialShare"
import useShopify from "../../../hooks/useShopify"

import {
  BuyButton,
  BuyButtonWrap,
  Price,
  ProductName,
  PaymenInfo,
  ImageWrap,
  InfoWrap,
  Wrap,
} from "../../../lib/ProductComponents"

export default function Head({ artwork, shopifyProduct }) {
  const { artworkName, height, medium, stil, width, depth } = artwork

  const { inCart, addToCart, availability, variant, checkoutUrl } = useShopify(
    shopifyProduct
  )

  return (
    <Wrap>
      <ImageWrap>
        <FridaImage artwork={artwork}></FridaImage>
      </ImageWrap>
      <InfoWrap>
        <Info>
          <ProductName
            size="l"
            name={artworkName}
            availability={availability}
          ></ProductName>
          <Props>
            {`${medium}, ${width}*${height} ${
              depth ? "*" + depth : ""
            } cm ${stil}`}
          </Props>
          <Price price={variant.price} />
          <IconWrap>
            <SozialShare />
          </IconWrap>
          <BuyButtonWrap>
            <BuyButton
              checkoutUrl={checkoutUrl}
              availability={availability}
              addToCart={addToCart}
              inCart={inCart}
            />
          </BuyButtonWrap>
        </Info>
        <PaymenInfo />
      </InfoWrap>
    </Wrap>
  )
}

const IconWrap = styled.div`
  padding-bottom: 50px;
`
const Props = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1rem;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`
