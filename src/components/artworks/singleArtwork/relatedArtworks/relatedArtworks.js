import React, { useState, useRef, useEffect } from "react"
import Artwork from "../../artwork/Artwork"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function RelatedArtworks({ artworks, header, color }) {
  const fridaColor = color === "white" ? "pink" : "white"
  const carousel = useRef(null)

  useEffect(() => {
    if (carousel.current && artworks.length > 3) {
      carousel.current.goToSlide(1, true)
    }
  }, [artworks.length, carousel])
  const [state, setState] = useState({ isMoving: false })

  return (
    <Root color={color}>
      <Header>{header}</Header>
      <Carousel
        ref={el => (carousel.current = el)}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        arrows={false}
        // autoPlay={true}
        // autoPlaySpeed={3000}
        centerMode={true}
        infinite={true}
        beforeChange={e => {
          setState({ ...state, isMoving: true })
        }}
        afterChange={e => {
          setState({ ...state, isMoving: false })
        }}
      >
        {artworks &&
          artworks.map(artwork => {
            return (
              <ArtWortWrap key={artwork.slug}>
                <Artwork
                  artwork={artwork}
                  color={fridaColor}
                  preventClick={state.isMoving}
                />
              </ArtWortWrap>
            )
          })}
      </Carousel>
      {/* <div>{carousel.current ? carousel.current.state.currentSlide : 0}</div> */}
    </Root>
  )
}

const ArtWortWrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  /* transform: scale(0.8); */
  /* border: red solid 1px; */
`
const Header = styled.h5`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`
const Root = styled.div`
  /* border: red solid 1px; */
  background-color: ${({ theme, color }) => theme.colors[color]};

  .react-multi-carousel-list {
    /* border: green solid 1px; */
    height: fit-content;

    .react-multi-carousel-item {
      /* border: blue solid 1px; */
      padding: 0 20px;
    }
  }
`
