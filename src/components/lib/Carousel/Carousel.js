import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { setMouse } from "../../generic/Mouse/mouseRemote"
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
// import "swiper/components/navigation/navigation.scss"
// import "swiper/components/scrollbar/scrollbar.scss"

SwiperCore.use([Navigation, Scrollbar, A11y, Mousewheel, Keyboard])

const Carousel = ({
  children,
  breakpoints,
  loop,
  uiColor,
  autoHeight,
  superResponsive,
}) => {
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
      super_responsive={superResponsive ? "true" : ""}
      uicolor={uiColor}
      loop={loop}
      direction={"horizontal"}
      onSwiper={setSwiper}
      autoHeight={autoHeight}
      spaceBetween={100}
      breakpoints={breakpoints}
      navigation
      keyboard
      mousewheel={{ forceToAxis: true }}
      scrollbar={loop ? false : { draggable: true, dragSize: "auto" }}
      // scrollbar={false}
    >
      {children}
    </Root>
  )
}

const Root = styled(Swiper)`
   /* border: red solid 1px;  */

  ${({ super_responsive }) =>
    super_responsive === "true" &&
    css`
      transform: scale(0.5) translateX(-50%);
      width: 200%;
      margin-top: -50%;
      margin-bottom: -50%;
    `}
 
  @media ${({ theme }) => theme.device.mobileL} {
    transform: scale(1) translateX(0);
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    /* border: red solid 10px; */
    position: absolute;
    /* top: 50%; */
    bottom: 20px;
    /* width: calc(var(--swiper-navigation-size) / 44 * 27); */
    width: 60px;
    /* height: var(--swiper-navigation-size); */
    height: 60px;
    /* margin-top: calc(-1 * var(--swiper-navigation-size) / 2); */
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    &.swiper-button-disabled {
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }
    &:after {
      font-family: swiper-icons;
      /* font-size: var(--swiper-navigation-size); */
      font-size: 50px;
      text-transform: none !important;
      letter-spacing: 0;
      text-transform: none;
      font-variant: initial;
      line-height: 1;
    }

    &:hover{
      color:${({ theme, uicolor }) =>
        uicolor === "bright" ? theme.colors.pink : theme.colors.white};
  
    }

    cursor: none;
    color: ${({ theme, uicolor }) =>
      uicolor === "bright" ? theme.colors.white : theme.colors.white};
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    &:after {
      content: "prev";
    }
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    &:after {
      content: "next";
    }
    left: 80px;
    right: auto;
  }

  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 58%;
    margin: 0 auto;
  }
  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }
  .swiper-scrollbar-lock {
    display: none;
  }
  .swiper-scrollbar {
    height: 10px;
    background-color: ${({ theme, uiColor }) =>
      uiColor === "bright" ? theme.colors.pink : theme.colors.grey};
    .swiper-scrollbar-drag {
    }
  }
`

Carousel.defaultProps = {
  superResponsive: false,
  uiColor: "dark",
  loop: false,
  autoHeight: false,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
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

const CarouselItem = SwiperSlide
export { Carousel, CarouselItem }
