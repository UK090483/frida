import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default function Frida({ text, textColor }) {
  return (
    <Root>
      #Meet
      <Inner color={textColor}>{text || "Frida"}</Inner>
    </Root>
  )
}

Frida.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
}

const Root = styled.span`
  white-space: nowrap;
  display: inline;
`
const Inner = styled.span`
  position: relative;
  color: ${props => (props.color ? props.color : "white")};
  &:before {
    content: "";
    border-bottom: rgb(0, 0, 0) solid 0.16em;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
`
