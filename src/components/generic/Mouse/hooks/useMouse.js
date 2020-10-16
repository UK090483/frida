// import React from 'react';
import { useEffect, useRef } from "react"
import MouseClassNames from "../classNames"
import tester from "../../../../testPonycode/testPony"

export { tester }
export default function Mouse() {
  const mouse = useRef()
  useEffect(() => {
    console.log("mouuussssssseee")
    mouse.current = document.querySelector("#mouse")
  }, [])

  const setMouse = (type, e) => {
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

  return { mouse: mouse.current, setMouse: setMouse }
}
