import React, { useRef, useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import styled from "styled-components"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

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

export default function CustomCarousel({ children }) {
  const carouselRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(1, true)
    }
  }, [carouselRef])
  const [state, setState] = useState({ isMoving: false, currentSlide: 0 })

  const setCarousel = dir => {
    if (carouselRef.current) {
      if (dir === "next") {
        carouselRef.current.next()
      } else {
        carouselRef.current.previous()
      }
    }
  }
  return (
    <Root>
      <Carousel
        ref={el => (carouselRef.current = el)}
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
        {children}
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
  position: relative;
`

const Navigation = styled.div`
  position: absolute;
  bottom: 40px;
`
