import React from "react"
import Container from "./container"
import useMouse from "../generic/Mouse/hooks/useMouse"
import PropTypes from "prop-types"
import styled from "styled-components"

export default function Section({
  children,
  backgroundColor = "default",
  type,
}) {
  const { setMouse } = useMouse()

  return (
    <Root
      onMouseOver={() => {
        backgroundColor === "red"
          ? setMouse("color", true)
          : setMouse("color", false)
      }}
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
    case "red":
      return theme.colors.red
    default:
      return "transparent"
  }
}
const Root = styled.section`
  background-color: ${({ theme, brColor }) => getColor(theme, brColor)};
`

Section.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
}
