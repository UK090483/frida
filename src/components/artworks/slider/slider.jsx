import React from "react"
// import Slide from "react-reveal/Slide"
import Header from "../../header/header"
import Kreutz from "../../../assets/Menu_Kreutz.svg"
import SingleArtwork from "../singleArtwork/singleArtwork"
import style from "./slider.module.scss"
import useMouse from "../../Mouse/hooks/useMouse"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
