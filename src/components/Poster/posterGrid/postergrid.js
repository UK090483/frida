import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Root = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px 0;
margin: 50px auto;
`

export default function PosterGrid({ children }) {
  return <Root>{children}</Root>
}

PosterGrid.propTypes = {
  children: PropTypes.node,
}