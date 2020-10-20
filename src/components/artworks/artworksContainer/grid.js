import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"
import { breackingpoints } from "../../../Styles/theme"

const breakpointColumnsObj = {
  default: 3,
  [breackingpoints.laptopM]: 2,
  [breackingpoints.tablet]: 1,
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
}

export default function Grid({ children, loadMore, page, infinite, loading }) {
  const loader = useRef(null)

  const _loadMore = entries => {
    if (entries[0].isIntersecting) {
      // console.log(entries[0])
      loadMore()
    }
  }
  useEffect(() => {
    if (infinite && loader.current) {
      const observer = new IntersectionObserver(_loadMore, observerOptions)

      observer.observe(loader.current)

      return () => {
        observer.unobserve(loader.current)
      }
    }
  }, [loader.current, page])

  return (
    <React.Fragment>
      <StyledMasoury
        breakpointCols={breakpointColumnsObj}
        columnClassName="my-masonry-grid_column"
        style={{ border: loading ? "red solid 1px" : "" }}
      >
        {children}
      </StyledMasoury>

      <div ref={loader} style={{ transform: "translateY(-150vh)" }}></div>
    </React.Fragment>
  )
}
const StyledMasoury = styled(Masonry)`
  display: flex;
  width: 100%;
  margin: 0 auto;
  transform: translateX(0px);
  max-width: 1600px;
  .my-masonry-grid_column {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    max-width: 500px;
    background-clip: padding-box;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 90%;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    .my-masonry-grid_column {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`
Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
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
