import React, { useState } from "react"
import styled from "styled-components"
import { getFluidImage, urlFor } from "~components/helper/sanityImage"
import Img from "gatsby-image"

export default function Quote({ quote: quoteObject }) {
  const { quote, image, author, subtitle, artworkImage } = quoteObject

  const [hover, setHover] = useState(false)
  const fluidpropsArtwork = getFluidImage(artworkImage, { maxWidth: 300 })

  return (
    <Root
      data-color={"black"}
      onMouseLeave={() => {
        setHover(false)
      }}
      onMouseEnter={() => {
        setHover(true)
      }}
    >
      <Collumn1>
        <QuoteWrap>"{quote}"</QuoteWrap>
        <AutorWrap>{author}</AutorWrap>
        <SubTitleWrap>{subtitle}</SubTitleWrap>
      </Collumn1>
      <Collumn2>
        <ArtworkImage hover={hover}>
          <Img
            alt={"alt"}
            fluid={fluidpropsArtwork}
            style={{ width: "100%" }}
          />
        </ArtworkImage>

        {image && (
          <AuthorImage
            hover={hover}
            style={{
              backgroundImage: `url(${urlFor(image).width(300).url()})`,
            }}
          ></AuthorImage>
        )}
      </Collumn2>
    </Root>
  )
}

const AuthorImage = styled.div`
  width: 50vw;
  height: 50vw;
  max-width: 250px;
  max-height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  position: absolute;
  left: 20px;
  bottom: 0;
  transition: transform 0.3s;
  ${({ hover }) => hover && "transform: scale(1.05) translate3d(-20px,0,0);"};
`
const ArtworkImage = styled.div`
  width: 50%;
  max-width: 200px;
  padding: 30px 0;
  transition: transform 0.3s;
  ${({ hover }) => hover && "transform: scale(1.05) translate3d(20px,0,0);"};
`

const Root = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  padding-bottom: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  @media ${({ theme }) => theme.device.laptopM} {
    flex-wrap: nowrap;
    padding-bottom: 100px;
  }
`
const Collumn1 = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 70%;
  }
`
const Collumn2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.laptopM} {
    width: 30%;
  }
`

const QuoteWrap = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.pink};
  padding: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 40px 40px 10px 40px;
  }
`
const AutorWrap = styled.h6`
  margin: 0;
  padding: 0 20px 0 20px;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 40px 0 10px 40px;
  }
`
const SubTitleWrap = styled.p`
  margin: 0;
  padding: 0 20px 20px 20px;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 0 40px 40px;
  }
`
