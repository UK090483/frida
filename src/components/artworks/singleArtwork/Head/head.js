import React, { useEffect } from "react"

import FridaImage from "../fridaImage/fridaImage"
import ArtworkName from "../../shared/artworkName"
// import BuyButton from "./Buybutton/buybutton"
import BuyButtonSnipCart from "../Buybutton/buybuttonSnipcart"
import styled from "styled-components"
import PaymentHelp from "./paymentHelp/paymentHelp"
import { useIntersection } from "react-use"
import Icon from "~components/Icon"
import { BiShareAlt } from "react-icons/bi"
import { FacebookShareButton } from "react-share"

export default function Head({ artwork, setHeaderArtworkInfo }) {
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
  const chache = React.useRef(true)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  })

  const location = typeof window !== `undefined` ? window.location.href : ""

  useEffect(() => {
    if (intersection) {
      if (chache.current !== intersection.isIntersecting) {
        chache.current = intersection.isIntersecting
        setHeaderArtworkInfo(!intersection.isIntersecting)
      }
    }
  }, [intersection, setHeaderArtworkInfo])

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
            <FacebookShareButton url={location}>
              <Icon icon={BiShareAlt} />
            </FacebookShareButton>
          </IconWrap>
          <BuyButtonSnipCart artwork={artwork}></BuyButtonSnipCart>
          <div ref={intersectionRef} />
        </Info>
        <PaymentHelp />
      </InfoRoot>
    </Root>
  )
}

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
