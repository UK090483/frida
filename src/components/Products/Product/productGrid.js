import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  padding-top: 50px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 7%;
  }
`

export default function ProductGrid({ children }) {
  return <Root>{children}</Root>
}

ProductGrid.propTypes = {
  children: PropTypes.node,
}
