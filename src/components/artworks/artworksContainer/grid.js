import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"
import { breackingpoints } from "../../../theme"

const breakpointColumnsObj = {
  default: 3,
  [breackingpoints.laptopM]: 2,
  [breackingpoints.tablet]: 1,
}

export default function Grid({ children }) {
  return (
    <StyledMasoury
      breakpointCols={breakpointColumnsObj}
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </StyledMasoury>
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
