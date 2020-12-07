import React, { useContext } from "react"
import ShopIcon from "../../assets/shop_icon.svg"
import useMouse from "../../components/generic/Mouse/hooks/useMouse"

import shopContext from "~context/shopifyContext"
import { navigate } from "gatsby"

export default function CheckOutLink() {
  const { setMouse } = useMouse()

  const shop = useContext(shopContext)

  const {
    store: { lineItems },
  } = shop

  return (
    <React.Fragment>
      {lineItems.length > 0 && (
        <div
          style={{
            pointerEvents: "auto",
            width: 50,
            height: 50,
          }}
          onMouseDown={() => {
            navigate("/checkout")
          }}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <ShopIcon></ShopIcon>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",

              top: 9,
              // transform: "translateX(-0.5px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {shop.store.lineItems.length}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
