// import React, { useState, useRef, useEffect } from "react"
// import Artwork from "../../artwork/Artwork"
// import styled from "styled-components"
// import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"
// import { isBrowser, isMobile } from "react-device-detect"
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1281 },
//     items: 3,
//   },
//   mobile: {
//     breakpoint: { max: 1280, min: 0 },
//     items: 1,
//   },
// }

// export default function RelatedArtworks({ artworks, header, color }) {
//   const fridaColor = color === "white" ? "pink" : "white"
//   const carousel = useRef(null)

//   useEffect(() => {
//     if (carousel.current && artworks.length > 3) {
//       carousel.current.goToSlide(1, true)
//     }
//   }, [artworks.length, carousel])
//   const [state, setState] = useState({ isMoving: false })

//   const setCarousel = dir => {
//     if (carousel.current) {
//       if (dir === "next") {
//         carousel.current.next()
//       } else {
//         carousel.current.previous()
//       }
//     }
//   }

//   return (
//     <Root color={color} data-color={color}>
//       <Header>{header}</Header>
//       <Carousel
//         ref={el => (carousel.current = el)}
//         responsive={responsive}
//         ssr={true}
//         keyBoardControl={true}
//         arrows={false}
//         autoPlay={isMobile}
//         autoPlaySpeed={3000}
//         centerMode={isBrowser}
//         infinite={true}
//         beforeChange={e => {
//           setState({ ...state, isMoving: true })
//         }}
//         afterChange={e => {
//           setState({ ...state, isMoving: false })
//         }}
//       >
//         {artworks &&
//           artworks.map(artwork => {
//             return (
//               // <ArtWortWrap key={artwork.slug}>
//               <Artwork
//                 key={artwork.slug}
//                 artwork={artwork}
//                 color={fridaColor}
//                 preventClick={state.isMoving}
//                 reactOnMouseDown={false}
//               />
//               // </ArtWortWrap>
//             )
//           })}
//       </Carousel>
//       {/* <div>{carousel.current ? carousel.current.state.currentSlide : 0}</div> */}
//       <Navigation>
//         <NavIcon
//           as={MdKeyboardArrowLeft}
//           size={"100px"}
//           color={"black"}
//           onClick={() => {
//             setCarousel("prev")
//           }}
//         />

//         <NavIcon
//           as={MdKeyboardArrowRight}
//           size={"100px"}
//           color={"black"}
//           onClick={() => {
//             setCarousel("next")
//           }}
//         />
//       </Navigation>
//     </Root>
//   )
// }

// const ArtWortWrap = styled.div`
//   max-width: 420px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   height: 100%;
//   /* transform: scale(0.8); */
//   /* border: red solid 1px; */
// `
// const Header = styled.h5`
//   padding-top: 50px;
//   padding-bottom: 50px;
//   text-align: center;
// `
// const Root = styled.div`
//   /* border: red solid 1px; */
//   position: relative;
//   background-color: ${({ theme, color }) => theme.colors[color]};

//   .react-multi-carousel-list {
//     /* border: green solid 1px; */
//     height: fit-content;

//     .react-multi-carousel-item {
//       /* border: blue solid 1px; */
//       padding: 0 20px;
//     }
//   }
// `
// const Navigation = styled.div`
//   position: absolute;
//   bottom: 0px;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   @media ${({ theme }) => theme.device.tablet} {
//     width: fit-content;
//   }
// `
// const NavIcon = styled.div`
//   max-width: 50px;
//   max-height: 50px;
//   @media ${({ theme }) => theme.device.tablet} {
//     max-width: 100px;
//     max-height: 100px;
//   }
// `
