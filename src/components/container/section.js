import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "./container"
import { setMouse } from "../generic/Mouse/mouseRemote"

export default function Section(props) {
  const {
    children,
    backgroundColor = "default",
    type,
    topSpace,
    bottomSpace,
  } = props

  return (
    <Root
      onMouseOver={() => {
        backgroundColor === "red"
          ? setMouse("color", true)
          : setMouse("color", false)
      }}
      bottomSpace={bottomSpace}
      topSpace={topSpace}
      data-color={backgroundColor}
      brColor={backgroundColor}
    >
      <Container type={type}>{children}</Container>
    </Root>
  )
}

const getColor = (theme, c) => {
  switch (c) {
    case "black":
      return theme.colors.black
    case "white":
      return theme.colors.white
    case "lila":
      return theme.colors.pink
    case "pink":
      return theme.colors.pink
    case "red":
      return theme.colors.red
    default:
      return "transparent"
  }
}
const Root = styled.section`
  background-color: ${({ theme, brColor }) => getColor(theme, brColor)};
  padding-top: ${({ theme, topSpace }) =>
    theme.space[topSpace] ? theme.space[topSpace] : ""};
  padding-bottom: ${({ theme, bottomSpace }) =>
    theme.space[bottomSpace] ? theme.space[bottomSpace] : ""};
`

Section.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
}
