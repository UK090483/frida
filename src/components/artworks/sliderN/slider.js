import React from "react"
import Header from "../../generic/header/header"
import Kreutz from "../../../assets/Menu_Kreutz.svg"
import SingleArtwork from "../singleArtwork/singleArtwork"
import useMouse from "../../generic/Mouse/hooks/useMouse"
import styled from "styled-components"
import PropTypes from "prop-types"

function Slider({ artwork, open, handleCloseClick }) {
  const { setMouse } = useMouse()

  return (
    <React.Fragment>
      <Root open={open} style={{ pointerEvents: open ? "auto" : "none" }}>
        <React.Fragment>
          <Header
            title={artwork ? artwork.artistName : ""}
            color="lila"
            link={false}
          >
            <div
              style={{ width: 40, pointerEvents: "all" }}
              onClick={handleCloseClick}
            >
              <Kreutz
                onMouseEnter={() => {
                  setMouse("link", true)
                }}
                onMouseLeave={() => {
                  setMouse("link", false)
                }}
              />
            </div>
          </Header>
          {artwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
        </React.Fragment>
      </Root>
    </React.Fragment>
  )
}

const Root = styled.div`
  position: fixed;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 200;
  background-color: white;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) =>
    open ? "translate3d(0,0,0)" : "translate3d(100%,0,0)"};
  transition: transform 0.5s, opacity 0.5s;
`

Slider.propTypes = {
  handleCloseClick: PropTypes.func,
  artwork: PropTypes.object,
  open: PropTypes.bool,
}
export default Slider
