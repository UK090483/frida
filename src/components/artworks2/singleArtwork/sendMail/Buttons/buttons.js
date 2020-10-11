import React from "react"
import style from "./buttons.module.scss"
import useMouse from "../../../../generic/Mouse/hooks/useMouse"
import { motion, AnimatePresence } from "framer-motion"

export default function Buttons({ buyProces, setBuyProces, handleClick }) {
  const { setMouse } = useMouse()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`${style.buttons} ${buyProces ? style.active : 0}`}
    >
      <button
        className={style.buyButton}
        onClick={handleClick}
        onMouseEnter={() => {
          setMouse("link", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
        }}
      >
        {buyProces ? "Send" : "Kaufen"}
      </button>

      <AnimatePresence>
        {buyProces && (
          <motion.div
            initial={{ width: 0, marginLeft: 0 }}
            animate={{ width: "100%", marginLeft: 20 }}
            exit={{ width: 0, marginLeft: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.15, type: "tween" }}
          >
            <button
              className={style.buyButton}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
              onClick={() => {
                setBuyProces(false)
                setMouse("link", false)
              }}
            >
              {"Abbrechen"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
