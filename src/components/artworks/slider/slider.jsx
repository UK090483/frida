import React from "react"
// import Slide from "react-reveal/Slide"
import Header from "../../header/header"
import Kreutz from "../../../assets/Menu_Kreutz.svg"
import SingleArtwork from "../singleArtwork/singleArtwork"
import style from "./slider.module.scss"
import useMouse from "../../Mouse/hooks/useMouse"
import useFitText from "../../../hooks/useFitText"
import Frida from "../../frida/frida"
import { motion, AnimatePresence } from "framer-motion"

export default function Slider({ artwork, open, handleCloseClick }) {
  const { setMouse } = useMouse()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={style.root}
          style={{ pointerEvents: open ? "auto" : "none" }}
        >
          <Header
            titleElement={
              <TitleElement name={artwork.artistName}>Bla</TitleElement>
            }
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TitleElement({ name }) {
  return (
    <React.Fragment>
      <WithTextFit name={name} />
    </React.Fragment>
  )
}

const WithTextFit = ({ name }) => {
  const { ref } = useFitText()
  return (
    <h5
      ref={ref}
      style={{
        maxWidth: "calc(100vw - 100px)",
        margin: 0,
      }}
    >
      <Frida text={name} textColor="#f5c5d9"></Frida>
    </h5>
  )
}
