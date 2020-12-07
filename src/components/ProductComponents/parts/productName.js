import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export default function ProductName({ availability, name, size }) {
  const stringArray = [...name.split(" ")]
  const firstWord = stringArray.shift()
  const rest = stringArray.join(" ")

  return (
    <Root as={size === "l" ? "h5" : ""}>
      <Span sold={!availability}>{firstWord + " "}</Span>
      {rest}
    </Root>
  )
}

const Root = styled.div`
  /* font-size: 1em;
  font-weight: 800;
  line-height: 1.2em; */
  padding-top: 15px;

  width: fit-content;
  min-height: 10px;
  margin-left: 29px;
`

const Span = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-30px);
    border-radius: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: ${({ theme, sold }) =>
      sold ? theme.colors.red : theme.colors.green};
  }
`

Span.defaultProps = {
  theme: {
    colors: {
      green: "green",
      red: "red",
    },
  },
}

ProductName.defaultProps = {
  availability: true,
  name: "prop artworkName is missing",
  size: "l",
}

ProductName.propTypes = {
  availability: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
}
