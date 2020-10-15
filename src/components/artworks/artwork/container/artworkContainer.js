import React from "react"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"

function ArtworkContainer({ children, onClick, loaded, artwork }) {
  const { setMouse } = useMouse()
  return (
    <RootCSS
      loaded={loaded}
      onClick={() => onClick(artwork)}
      onMouseEnter={() => {
        setMouse("link", true)
      }}
      onMouseLeave={() => {
        setMouse("link", false)
      }}
    >
      {children}
    </RootCSS>
  )
}

const RootCSS = styled.div`
  width: 100%;
  background-clip: padding-box;
  margin-bottom: 80px;
`

ArtworkContainer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  loaded: PropTypes.bool,
}

export default withTheme(ArtworkContainer)
