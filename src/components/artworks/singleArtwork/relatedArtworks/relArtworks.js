import React from "react"
import Artwork from "../../artwork/Artwork"
import styled from "styled-components"
import { Carousel, CarouselItem } from "../../../lib/Carousel"

export default function RelatedArtworks({ artworks, header, color }) {
  const fridaColor = color === "white" ? "pink" : "white"

  return (
    <Root color={color} data-color={color}>
      <Header>{header}</Header>
      <Carousel superResponsive={true}>
        {artworks &&
          artworks.map(artwork => {
            return (
              <CarouselItem key={artwork.slug}>
                <ArtWortWrap>
                  <Artwork
                    artwork={artwork}
                    color={fridaColor}
                    preventClick={false}
                    reactOnMouseDown={false}
                  />
                </ArtWortWrap>
              </CarouselItem>
            )
          })}
      </Carousel>
    </Root>
  )
}

const ArtWortWrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  /* transform: scale(0.6);
  border: red solid 1px;
  @media ${({ theme }) => theme.device.tablet} {
    transform: scale(0.8);
  } */
`
const Header = styled.h5`
  /* border: red solid 1px; */
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;

  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 120px;
    padding-bottom: 80px;
  }
`
const Root = styled.div`
  padding-bottom: 100px;
  position: relative;
  background-color: ${({ theme, color }) => theme.colors[color]};

  .react-multi-carousel-list {
    height: fit-content;

    .react-multi-carousel-item {
      padding: 0 20px;
    }
  }
`
