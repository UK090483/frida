import React, { useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import MouseClassNames from "./classNames"

export default function () {
  // const MouseRef = useRef()

  useEffect(() => {
    const MouseRef = { current: window.FridaMouse }
    const setMouseDown = () => {
      MouseRef.current &&
        MouseRef.current.classList.add(MouseClassNames.mouseDown)
    }
    const setMouseUp = () => {
      MouseRef.current &&
        MouseRef.current.classList.remove(MouseClassNames.mouseDown)
    }
    const setMouseIn = () => {
      MouseRef.current &&
        MouseRef.current.classList.remove(MouseClassNames.mouseOut)
    }
    const setMouseOut = () => {
      MouseRef.current &&
        MouseRef.current.classList.add(MouseClassNames.mouseOut)
    }

    document.addEventListener("mousedown", setMouseDown)
    document.addEventListener("mouseup", setMouseUp)
    document.addEventListener("mouseenter", setMouseIn)
    document.addEventListener("mouseleave", setMouseOut)

    return () => {
      document.removeEventListener("mousedown", setMouseDown)
      document.removeEventListener("mouseup", setMouseUp)
      document.removeEventListener("mouseenter", setMouseIn)
      document.removeEventListener("mouseleave", setMouseOut)
    }
  }, [])

  return <MouseStyle></MouseStyle>
}

const MouseStyle = createGlobalStyle`

.frida_mouse_active{
  #mouse {
    width: 30px;
    height: 30px;

    z-index: 99999999;
    position: absolute;
    pointer-events: none;
    border-radius: 50%;

    div {
      width: 30px;
      height: 30px;

      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.red};
      transition: all 0.3s;
      &::before {
        content: "";
        position: absolute;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: ${({ theme }) => theme.colors.red} solid 0px;
        transition: border-width 0.2s, transform 0.2s;
      }
    }

    &.${MouseClassNames.hide} {
      opacity: 0;
    }
    &.${MouseClassNames.mouseOut} {
      opacity: 0;
    }
    &.${MouseClassNames.black} {
      div {
        background-color: ${({ theme }) => theme.colors.black};
        &::before {
          border: ${({ theme }) => theme.colors.black} solid 0px;
        }
      }
    }
    &.${MouseClassNames.mouseDown} {
      div {
        &::before {
          transform: scale(2);
          border-width: 1px;
        }
      }
    }

    &.${MouseClassNames.linkHover} {
      div {
        background-color: transparent;
        &::before {
          transform: scale(2);
          border-width: 1px;
        }
      }
    }
  }
}
`
