import React from "react"
import styled from "styled-components"

import FridaImage from "../fridaImage/fridaImage"
import SozialShare from "~components/SozialShare/SozialShare"

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
  const {
    availability,
    artworkName,
    price,
    height,
    medium,
    stil,
    width,
    depth,
    shopify_handle,
  } = artwork

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
            availability={availability === "availabil"}
          ></ProductName>
          <Props>
            {`${medium}, ${width}*${height} ${
              depth ? "*" + depth : ""
            } cm ${stil}`}
          </Props>
          <Price price={price} />
          <IconWrap>
            <SozialShare />
          </IconWrap>
          <BuyButtonWrap>
            <BuyButton
              availability={artwork.availability === "availabil"}
              shopifyId={shopifyProduct.variants[0].shopifyId}
              shopifyHandle={shopify_handle}
            ></BuyButton>
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
