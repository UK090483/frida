import React from "react"
import Burger from "../../../../assets/Menu_Burger.svg"
import { setMouse } from "../../Mouse/mouseRemote"
import CheckoutLink from "../../../shopcomponents/checkoutLink"
import styled from "styled-components"

export default function Icon({ onClick }) {
  return (
    <Root>
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
  transform: translateY(5px);
`
