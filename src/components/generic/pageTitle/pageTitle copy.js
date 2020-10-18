import React, { useEffect, useRef, useState, useCallback } from "react"
import { Link } from "gatsby"
import { setMouse } from "../Mouse/mouseRemote"
import style from "./pageTitle.module.scss"
import styled from "styled-components"
import Frida from "../../frida/frida"
import { flexUnit } from "../../../Styles/theme"
import throttle from "lodash/throttle"

export default function PageTitle({
  title,
  color = "white",
  link = true,
  checkInter = true,
}) {
  const interItems = useRef()
  const ref = useRef()
  const [colorShift, setColorShift] = useState(false)

  let finalColor = colorShift ? "pink" : "white"

  const checkInterfering = throttle(() => {
    if (interItems.current) {
      const root = document.querySelector("." + style.name)
      let sholdAdd = false
      interItems.current.forEach(element => {
        const clientRect = element.getBoundingClientRect()
        if (clientRect.top < 60 && clientRect.bottom > 60) {
          sholdAdd = true
          root && root.classList.add(style.lila)
        }
      })

      if (sholdAdd) {
        !colorShift && setColorShift(true)
      } else {
        colorShift && setColorShift(false)
      }
    }
  }, 100)

  useEffect(() => {
    if (checkInter) {
      interItems.current = document.querySelectorAll("[data-color=default]")
      if (interItems.current.length > 0) {
        document.addEventListener("scroll", checkInterfering)
      }
    }
    return () => {
      document.removeEventListener("scroll", checkInterfering)
    }
  }, [checkInter])

  return (
    <React.Fragment>
      {link ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <Root
            // className={style.root}
            onMouseEnter={() => {
              setMouse("link", true)
              setMouse("color", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
              setMouse("color", false)
            }}
          >
            <h1 ref={ref}>
              <Frida text={title} textColor={finalColor}></Frida>
            </h1>
          </Root>
        </Link>
      ) : (
        <Root
        //  className={style.root}
        >
          <h1>
            <Frida text={title} textColor={finalColor}></Frida>
          </h1>
        </Root>
      )}
    </React.Fragment>
  )
}

const Root = styled.div`
  text-decoration: none;
  pointer-events: all;
  cursor: none;
  color: ${({ theme }) => theme.colors.black};

  h1 {
    margin: 0;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 250px;
    ${flexUnit(6, 20, 60)}
  }
`
