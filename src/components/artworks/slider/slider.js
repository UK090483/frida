import React from "react"
import Header from "../../generic/header/header"
import Kreutz from "../../../assets/Menu_Kreutz.svg"
import SingleArtwork from "../singleArtwork/singleArtwork"
import useMouse from "../../generic/Mouse/hooks/useMouse"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import PropTypes from "prop-types"

function Slider({ artwork, open, handleCloseClick }) {
  const { setMouse } = useMouse()

  return (
    <AnimatePresence>
      {open && (
        <Root
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{ pointerEvents: open ? "auto" : "none" }}
        >
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
        </Root>
      )}
    </AnimatePresence>
  )
}

const Root = styled(motion.div)`
  position: fixed;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 200;
  background-color: white;
`

Slider.propTypes = {
  handleCloseClick: PropTypes.func,
  artwork: PropTypes.object,
  open: PropTypes.bool,
}
export default Slider
