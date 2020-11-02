import React, { useState, useRef, useEffect, useMemo } from "react"
import useShop from "./hooks/useShop"
import styled from "styled-components"
import Header from "../generic/header/header"
import useBodyScrollStop from "../helper/useBodyScrollStop"
import SendMail from "../artworks/singleArtwork/sendMail/sendMail"

export default function CheckOutLink() {
  const { openCard, checkoutOpen, setCheckoutOpen } = useShop()
  const lasteState = useRef(false)
  const [animate, setAnimate] = useState("out")
  const { stopBodyScroll, enableBodySroll } = useBodyScrollStop()

  useEffect(() => {
    const open = () => {
      stopBodyScroll()
      setAnimate("in-active")
      setTimeout(() => {
        setAnimate("in")
      }, 500)
    }
    const close = () => {
      enableBodySroll
      setAnimate("out-active")
      setTimeout(() => {
        setAnimate("out")
      }, 500)
    }
    if (lasteState.current === !!checkoutOpen) {
    } else {
      if (checkoutOpen) {
        open()
      } else {
        close()
      }
      lasteState.current = checkoutOpen
    }

    return () => {
      enableBodySroll()
    }
  }, [checkoutOpen])

  const handleCheckout = async () => {
    const response = await fetch("/.netlify/functions/stripe", {
      method: "POST",
      body: JSON.stringify({
        subject: "test",
      }),
    })
  }

  return (
    <React.Fragment>
      <Root animate={animate}>
        <Header title={"shop"}></Header>

        <Button
          key="buy"
          onClick={() => {
            handleCheckout()
          }}
        >
          Checkout
        </Button>
        <Button
          key="close"
          onClick={() => {
            setCheckoutOpen()
          }}
        >
          close
        </Button>
        <SendMail></SendMail>
      </Root>
    </React.Fragment>
  )
}

const Button = styled.button`
  width: 400px;
  height: 300px;
  margin: 300px, auto, 0, auto;
`

const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: lightblue;
  z-index: 200000;
  transform: translate3d(100%, 0, 0);

  ${({ animate }) => {
    switch (animate) {
      case "out":
        return "transform: translate3d(100%, 0, 0); opacity:0;"
      case "out-active":
        return "transition: transform 0.5s, opacity 0.5s; transform: translate3d(100%, 0, 0);  opacity:0; "
      case "in":
        return "transform: translate3d(0, 0, 0);  opacity:1;"
      case "in-active":
        return "transition: transform 0.5s, opacity 0.5s; transform: translate3d(0, 0, 0); opacity:1; "
      default:
        break
    }
  }};
`
