import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Quote from "./Quote"
import Carousel from "react-multi-carousel"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
// import { useIntersection } from "react-use"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

export default function Quotes() {
  const intersectionRef = React.useRef(null)

  const data = useStaticQuery(graphql`
    query quotesQuerry {
      allFridaQuote {
        nodes {
          artworkImage
          id
          author
          image {
            asset {
              _ref
            }
            hotspot {
              y
              x
              width
              height
            }
          }
          subtitle
          quote
        }
      }
    }
  `)

  const carousel = useRef(null)

  useEffect(() => {
    if (carousel.current) {
      // carousel.current.goToSlide(1, true)
    }
  }, [carousel])
  const [state, setState] = useState({ isMoving: false, currentSlide: 0 })

  const setCarousel = dir => {
    if (carousel.current) {
      if (dir === "next") {
        carousel.current.next()
      } else {
        carousel.current.previous()
      }
    }
  }

  // const intersection = useIntersection(intersectionRef, {
  //   root: null,
  //   rootMargin: "0px 0px -95%  0px",
  //   threshold: 0,
  // })
  // console.log(intersection && intersection.isIntersecting)
  return (
    <Root ref={intersectionRef} data-color={"black"}>
      <Carousel
        ref={el => (carousel.current = el)}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        arrows={false}
        // autoPlay={true}
        // autoPlaySpeed={3000}

        infinite={true}
        beforeChange={(e, { currentSlide }) => {
          setState({ ...state, currentSlide: currentSlide, isMoving: true })
        }}
        afterChange={(e, { currentSlide }) => {
          setState({ ...state, currentSlide: currentSlide, isMoving: false })
        }}
      >
        {data.allFridaQuote.nodes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))}
      </Carousel>

      <Navigation>
        <MdKeyboardArrowLeft
          size={"100px"}
          color={"white"}
          onClick={() => {
            setCarousel("prev")
          }}
        />

        <MdKeyboardArrowRight
          size={"100px"}
          color={"white"}
          onClick={() => {
            setCarousel("next")
          }}
        />
      </Navigation>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
`

const Navigation = styled.div`
  position: absolute;
  bottom: 40px;
  background-color: ${({ theme }) => theme.colors.black};
`
