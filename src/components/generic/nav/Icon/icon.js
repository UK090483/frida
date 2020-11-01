import React from "react"
import Burger from "../../../../assets/Menu_Burger.svg"
import { setMouse } from "../../Mouse/mouseRemote"
import CheckoutLink from "../../../shopcomponents/checkoutLink"
import styled from "styled-components"

export default function Icon({ onClick }) {
  return (
    <Root aria-haspopup="true" aria-controls="main-menu" role="button">
      <div
        onMouseEnter={() => {
          setMouse("link", true)
          setMouse("color", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
          setMouse("color", false)
        }}
        onClick={onClick}
      >
        <Burger></Burger>
      </div>

      <div style={{ position: "absolute", transform: "translateX(-3px)" }}>
        <CheckoutLink></CheckoutLink>
      </div>
    </Root>
  )
}

const Root = styled.div`
  width: 40px;
  pointer-events: all;
  transform: translate3d(6px, 5px, 0);
`
