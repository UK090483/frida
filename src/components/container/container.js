import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default function Container({ children, maxWidth, type }) {
  const extraStyle = {}
  if (maxWidth) {
    extraStyle.maxWidth = maxWidth
  }
  return <Root type={type}>{children}</Root>
}

const Root = styled.div`
  width: 100%;
  max-width: ${({ type }) => (type === "text" ? "900px" : "2600px")};
  padding: ${props => {
    switch (props.type) {
      case "text":
        return "0 20px"
      case "full":
        return "0"
      default:
        return "0 7%"
    }
  }};
  margin: 0 auto;
  p {
    margin: 0;
  }
`

Container.propTypes = {
  maxWidth: PropTypes.number,
  type: PropTypes.string,
  children: PropTypes.node,
}
