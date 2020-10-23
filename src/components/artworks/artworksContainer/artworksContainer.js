import React, { useRef } from "react"
import Artwork from "../artwork/Artwork"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowUp from "../../../assets/arrow_up.svg"
import useInfinitScroll from "../helper/useInfinitScroll"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"
import Grid from "./grid"

function ArtworkContainer({ artworks, handleClick, infinite = false }) {
  const gridRef = useRef(false)
  const scrollRef = useRef(null)
  // const { Storyblok } = useStoryblok()

  const loadMore = setloading => {
    console.log("loadmore")
  }

  const { postCount, showScrollup } = useInfinitScroll(
    gridRef,
    artworks,
    scrollRef,
    infinite,
    loadMore
  )

  const handleLoaded = () => {
    // console.log("loadet")
    // scrollRef.current = false
  }

  return (
    <React.Fragment>
      <StyledArrow
        showScrollup={showScrollup}
        onClick={() => scrollTo("#filter")}
      >
        <ArrowUp />
      </StyledArrow>
      <div ref={gridRef}>
        <Grid>
          {[...artworks].slice(0, postCount).map((artwork, index) => (
            <Artwork
              key={artwork.id}
              artwork={artwork}
              handleLoaded={handleLoaded}
              handleClick={() => {
                handleClick(artwork)
              }}
              index={index}
            ></Artwork>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  )
}

const StyledArrow = styled.div`
  box-shadow: 0px 0px 22px -2px rgba(71, 71, 71, 0.5);
  position: fixed;
  z-index: 50;
  bottom: 20px;
  right: ${({ showScrollup }) => (showScrollup ? "20px" : "-50px")};
  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
  transform: ${({ showScrollup }) => (showScrollup ? "scale(1)" : "scale(0)")};
  transition: right 0.5s, transform 0.5s, box-shadow 1s;
  box-shadow: 0px 0px 22px -2px rgba(71, 71, 71, 0.5);
  svg {
    width: 100%;
    height: 100%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 50px;
    height: 50px;
  }
`

ArtworkContainer.propTypes = {
  handleClick: PropTypes.func,
  artwork: PropTypes.array,
  infinite: PropTypes.bool,
}
export default withTheme(ArtworkContainer)
