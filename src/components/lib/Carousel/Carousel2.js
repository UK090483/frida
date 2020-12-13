import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { setMouse } from "../../generic/Mouse/mouseRemote"

import Swiper from "react-id-swiper"

import "swiper/swiper.scss"
// import "swiper/components/navigation/navigation.scss"
// import "swiper/components/scrollbar/scrollbar.scss"

// SwiperCore.use([Navigation, Scrollbar, A11y, Mousewheel, Keyboard])

const Carousel2 = ({ children, breakpoints, loop, uiColor, autoHeight }) => {
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    let elements = []
    const handleMouseIn = () => {
      setMouse("link", true)
    }
    const handleMouseOut = () => {
      setMouse("link", false)
    }
    if (swiper) {
      if (!swiper.$wrapperEl[0]) {
        return
      }
      const wrapper = swiper.$el[0]
      elements = wrapper.querySelectorAll(
        ".swiper-button-prev,.swiper-button-next,.swiper-scrollbar"
      )
      elements.forEach(element => {
        element.addEventListener("mouseenter", handleMouseIn)
        element.addEventListener("mouseleave", handleMouseOut)
      })
    }

    return () => {
      elements.forEach(element => {
        element.removeEventListener("mouseenter", handleMouseIn)
        element.removeEventListener("mouseleave", handleMouseOut)
      })
    }
  }, [swiper])

  return (
    <Root
      uicolor={uiColor}
      loop={loop}
      direction={"horizontal"}
      onSwiper={setSwiper}
      autoHeight={autoHeight}
      spaceBetween={100}
      breakpoints={breakpoints}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      keyboard
      mousewheel={{ forceToAxis: true }}
      scrollbar={{ draggable: true, dragSize: 200 }}
    >
      {children}
    </Root>
  )
}

const Root = styled(Swiper)`
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    cursor: none;
    color: ${({ theme, uicolor }) =>
      uicolor === "bright" ? theme.colors.white : theme.colors.pink};
  }
  .swiper-scrollbar {
    height: 10px;
    background-color: ${({ theme, uiColor }) =>
      uiColor === "bright" ? theme.colors.pink : theme.colors.grey};
    .swiper-scrollbar-drag {
    }
  }
`

Carousel2.defaultProps = {
  uiColor: "bright",
  loop: false,
  autoHeight: false,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1439: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
}

export { Carousel2 }
