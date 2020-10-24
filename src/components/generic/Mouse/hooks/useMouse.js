//import React from "react"
// import { useEffect, useRef } from "react"
import MouseClassNames from "../classNames"

export default function Mouse() {
  const setMouse = (type, e) => {
    const mouse = { current: window.FridaMouse }
    if (mouse.current) {
      switch (type) {
        case "move":
          mouse.current.style.left = e.pageX - 15 + "px"
          mouse.current.style.top = e.pageY - 15 + "px"
          break
        case "link":
          e
            ? mouse.current.classList.add(MouseClassNames.linkHover)
            : mouse.current.classList.remove(MouseClassNames.linkHover)

          break
        case "color":
          e
            ? mouse.current.classList.add(MouseClassNames.black)
            : mouse.current.classList.remove(MouseClassNames.black)
          break

        case "hide":
          e
            ? mouse.current.classList.add(MouseClassNames.hide)
            : mouse.current.classList.remove(MouseClassNames.hide)
          break

        default:
          break
      }
    }
  }

  return { setMouse: setMouse }
}
