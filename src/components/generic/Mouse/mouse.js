import React, { useEffect, useRef, useContext } from "react"
import style from "./mouse.module.scss"
import UiContext from "../../../context/UiContext"

export default function () {
  const UI = useContext(UiContext)

  const MouseRef = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", e => {
      setMouseDown(true)
    })
    document.addEventListener("mouseup", e => {
      setMouseDown(false)
    })
    document.addEventListener("mouseleave", e => {
      setMouseIn(true)
    })
    document.addEventListener("mouseenter", e => {
      setMouseIn(false)
    })

    document.querySelector("body").style.cursor = "none"
  }, [UI])

  const setMouseDown = direction => {
    if (MouseRef.current) {
      direction
        ? MouseRef.current.classList.add(style.mousedown)
        : MouseRef.current.classList.remove(style.mousedown)
    }
  }
  const setMouseIn = direction => {
    if (MouseRef.current) {
      direction
        ? MouseRef.current.classList.add(style.mouseOut)
        : MouseRef.current.classList.remove(style.mouseOut)
    }
  }

  const getStyle = () => {
    return UI.mouseStyle === "link" ? style.linkhover : ""
  }
  const getColor = () => {
    return UI.mouseColor === "black" ? style.black : ""
  }

  return (
    <div
      id={"mouse"}
      ref={MouseRef}
      className={`${style.mouse} ${getStyle()} ${getColor()}`}
    >
      <div></div>
    </div>
  )
}
