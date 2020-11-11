import React, { useContext } from "react"
import ShopIcon from "../../assets/shop_icon.svg"
import useMouse from "../../components/generic/Mouse/hooks/useMouse"
import UiContext from "../../context/UiContext"

export default function CheckOutLink() {
  const { openCard, itemCount } = useContext(UiContext)
  const { setMouse } = useMouse()

  return (
    <React.Fragment>
      {itemCount > 0 && (
        <div
          style={{
            pointerEvents: "auto",
            width: 50,
            height: 50,
          }}
          onClick={() => openCard()}
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
            {itemCount}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
