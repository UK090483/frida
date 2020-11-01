import React, { useState, useEffect } from "react"
import Burger from "./Icon/icon"
import Header from "./header/header"
import Circle from "./Circle/circle"
import Links from "./Links/links"
import BigButtons from "./BigButtons/bigButtons"

import styled from "styled-components"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    return () => {
      document.querySelector("html").style.overflow = "auto"
    }
  }, [])

  const handleMenu = () => {
    if (open) {
      setOpen(!open)
      document.querySelector("html").style.overflow = "auto"
    } else {
      document.querySelector("html").style.overflow = "hidden"
      setOpen(!open)
      setInitialRender(false)
    }
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <React.Fragment>
      <Burger
        onClick={() => {
          handleMenu()
        }}
      ></Burger>

      <Root
        open={open}
        style={{ pointerEvents: open ? "auto" : "none" }}
        id="main-menu"
      >
        <Circle type={"big"} open={open} initialRender={initialRender} />
        <Circle open={open} initialRender={initialRender} />

        {open && <Header onClick={() => handleMenu()} />}
        <Links open={open} />
        <BigButtons open={open}></BigButtons>
      </Root>
    </React.Fragment>
  )
}

const Root = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 200;
  background-color: transparent;
  opacity: 1;
  transition: opacity 0.5s 1s;
`
