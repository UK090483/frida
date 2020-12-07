import React from "react"

import FridaImage from "../fridaImage/fridaImage"
import ArtworkName from "../../shared/artworkName"
// import BuyButton from "./Buybutton/buybutton"
// import BuyButtonSnipCart from "../Buybutton/buybuttonSnipcart"
import styled from "styled-components"
import PaymentHelp from "./paymentHelp/paymentHelp"
import { useIntersection } from "react-use"
import SozialShare from "~components/SozialShare/SozialShare"
import BuyButtonShopify from "../Buybutton/buybuttonShopify"

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
  } = artwork

  const intersectionRef = React.useRef(null)

  const bIntersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px 0px 100% 0px",
    threshold: 0,
  })

  return (
    <Root>
      <ImageRoot>
        <FridaImage artwork={artwork}></FridaImage>
      </ImageRoot>

      <InfoRoot>
        <Info>
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
          <IconWrap>
            <SozialShare />
          </IconWrap>

          <BuyButtonOutWrap>
            <div ref={intersectionRef} />
            <BuyButtonWrap
              isOut={bIntersection ? !bIntersection.isIntersecting : false}
            >
              <BuyButtonShopify
                artwork={artwork}
                shopifyProduct={shopifyProduct}
              ></BuyButtonShopify>
            </BuyButtonWrap>
          </BuyButtonOutWrap>
        </Info>
        <PaymentHelp />
      </InfoRoot>
    </Root>
  )
}

const BuyButtonWrap = styled.div`
  ${({ isOut }) =>
    isOut &&
    "position: fixed; bottom: 10px;left:20px; width:calc(100vw - 40px);z-index:9999;"}
  

  @media ${({ theme }) => theme.device.laptopM} {
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: 80px;
    ${({ isOut }) =>
      isOut &&
      "position: fixed; top: 10px;right:20px; width:500px; z-index:9999;"}
  }
`
const BuyButtonOutWrap = styled.div`
  height: 80px;
`
const Price = styled.div`
  margin-bottom: 20px;
  font-size: 1.9em;
  font-weight: 800;
`
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

const Root = styled.div`
  padding: 100px 20px 60px 20px;
  position: relative;

  min-height: 650px;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    height: calc(100vh - 130px);
    height: 100vh;
    /* padding: 100px 30px 30px 30px; */
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
  justify-content: flex-end;
  padding-top: 20px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    padding-top: 0;
    padding-left: 20px;
  }
`
