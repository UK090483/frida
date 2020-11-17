import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { setMouse } from "../../../generic/Mouse/mouseRemote"
import { Link } from "gatsby"

function ArtworkContainer({ children, artwork }) {
  return (
    <Root className="artwork-wrap">
      <Link
        data-testid={"artwork-prev"}
        to={`/artwork/${artwork.slug}`}
        state={{ modal: true }}
        style={{ textDecoration: "none", color: "black", cursor: "none" }}
        onMouseEnter={() => {
          setMouse("link", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
        }}
      >
        {children}
      </Link>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin-bottom: 80px;
`

ArtworkContainer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default ArtworkContainer
