import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { setMouse } from "../Mouse/mouseRemote"
import styled from "styled-components"
import Frida from "../../frida/frida"
import { fluidFont } from "../../../Styles/theme"
import throttle from "lodash/throttle"

export default function PageTitle({
  title,
  color = "white",
  link = true,
  checkInter = true,
}) {
  const interItems = useRef()
  const ref = useRef()

  // title = "AAAAAAAAAA" + "AAAAAAAAAA"

  const checkInterfering = throttle(() => {
    if (interItems.current) {
      let sholdAdd = false
      interItems.current.forEach(element => {
        const clientRect = element.getBoundingClientRect()
        if (clientRect.top < 60 && clientRect.bottom > 60) {
          sholdAdd = true
        }
      })

      if (sholdAdd) {
        ref.current &&
          !ref.current.classList.contains("pageHeader_pink") &&
          ref.current.classList.add("pageHeader_pink")
      } else {
        ref.current &&
          ref.current.classList.contains("pageHeader_pink") &&
          ref.current.classList.remove("pageHeader_pink")
      }
    }
  }, 300)

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
  }, [checkInter, checkInterfering])

  return (
    <React.Fragment>
      {link ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <Root
            letterCount={title.length}
            ref={ref}
            onMouseEnter={() => {
              setMouse("link", true)
              setMouse("color", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
              setMouse("color", false)
            }}
          >
            <h1>
              <Frida text={title} textColor={color}></Frida>
            </h1>
          </Root>
        </Link>
      ) : (
        <Root letterCount={title.length}>
          <h1>
            <Frida text={title} textColor={color}></Frida>
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
   
    ${({ letterCount }) => {
      return fluidFont(31 - letterCount, 45, 320, 1000)

      // if (letterCount > 10) {
      //   return fluidFont(11, 45, 320, 1920)
      // } else {
      //   return fluidFont(20, 45, 320, 1920)
      // }
    }}} 
      
   
  }
  &.pageHeader_pink {
    span {
      span {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`
