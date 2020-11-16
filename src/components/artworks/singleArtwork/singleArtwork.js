import React from "react"
import Tab from "./tab/tab"
import FridaImage from "./fridaImage/fridaImage"
import ArtworkName from "../shared/artworkName"
import BuyButton from "./Buybutton/buybutton"

import styled from "styled-components"

export default function Artworks({ artwork, relativeArtworks, isModal }) {
  const {
    availability,
    artworkName,
    price,
    artistDescription,
    artworkDescription,
    instagramLink,
    artistWebLink,
    height,
    medium,
    stil,
    width,
    depth,
  } = artwork

  return (
    <Root>
      <Inner>
        <ImageRoot>
          <FridaImage artwork={artwork}></FridaImage>
        </ImageRoot>

        <InfoRoot>
          <Tab
            isModal={isModal}
            text1={artistDescription}
            text2={artworkDescription}
            artistWebLink={artistWebLink}
            instagramLink={instagramLink}
            relativeArtworks={relativeArtworks}
          ></Tab>

          <ArtworkName
            size="big"
            artworkName={artworkName}
            availability={availability}
          ></ArtworkName>

          <Props>
            {`${medium}, ${width}*${height} ${
              depth ? "*" + depth : ""
            } cm ${stil}`}
          </Props>
          <Price>{price}€</Price>

          <BuyButton artwork={artwork}></BuyButton>
        </InfoRoot>
      </Inner>
    </Root>
  )
}

const Price = styled.div`
  margin-bottom: 20px;
  font-size: 1.9em;
  font-weight: 800;
`

const Props = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1rem;
  }
`

const Root = styled.div`
  padding: 100px 20px 60px 20px;
  height: 100vh;
  overflow: auto;
  @media ${({ theme }) => theme.device.laptop} {
    padding: 100px 30px 30px 30px;
  }
`
const Inner = styled.div`
  min-height: 650px;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    height: calc(100vh - 130px);
  }
`
const ImageRoot = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    padding-right: 20px;
  }
`
const InfoRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    padding-top: 0;
    padding-left: 20px;
  }
`
