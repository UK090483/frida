import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { setMouse } from "../../../generic/Mouse/mouseRemote"
import { navigate } from "gatsby"

function ArtworkContainer({ children, artwork, preventClick = false }) {
  return (
    <Root className="artwork-wrap">
      <div
        // href={`/artwork/${artwork.slug}`}
        onClick={e => {
          e.preventDefault()
          // // if (preventClick) {
          // //   e.preventDefault()
          // // }
          if (!preventClick) {
            navigate(`/artwork/${artwork.slug}`, { state: { modal: true } })
          }
        }}
        // onMouseDown={() => {
        //   if (!preventClick) {
        //     navigate(`/artwork/${artwork.slug}`, { state: { modal: true } })
        //   }
        // }}
        data-testid={"artwork-prev"}
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
      </div>
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
