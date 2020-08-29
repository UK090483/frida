import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import useMouse from "../Mouse/hooks/useMouse"
import style from "./pageTitle.module.scss"

export default function PageTitle({
  title,
  color = "white",
  link = true,
  checkInter = true,
}) {
  const interItems = useRef()
  const ref = useRef()
  const { setMouse } = useMouse()

  const getColorClass = color => {
    switch (color) {
      case "lila":
        return style.lila

      default:
        return style.white
    }
  }

  useEffect(() => {
    if (checkInter) {
      interItems.current = document.querySelectorAll("[data-color=default]")
      if (interItems.current.length > 0) {
        document.addEventListener("scroll", () => {
          checkInterfering()
        })
      }
    }
  }, [checkInter])

  const checkInterfering = () => {
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
        root && root.classList.add(style.lila)
      } else {
        root && root.classList.remove(style.lila)
      }
    }
  }

  return (
    <React.Fragment>
      {link ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className={style.root}
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
              {" "}
              #Meet
              <span className={`${style.name} ${getColorClass(color)}`}>
                {title}
              </span>
            </h1>
          </div>
        </Link>
      ) : (
        <div className={style.root}>
          <h1>
            {" "}
            #Meet
            <span className={`${style.name} ${getColorClass(color)}`}>
              {title}
            </span>
          </h1>
        </div>
      )}
    </React.Fragment>
  )
}
