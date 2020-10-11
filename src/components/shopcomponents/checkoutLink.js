import React from "react"
import ShopIcon from "../../assets/shop_icon.svg"
import useShop from "./hooks/useShop"
import useMouse from "../../components/generic/Mouse/hooks/useMouse"
export default function CheckOutLink() {
  const { openCard, itemCount } = useShop()
  const { setMouse } = useMouse()
  const onClick = () => {
    openCard()
  }

  return (
    <React.Fragment>
      {itemCount > 0 && (
        <div
          style={{
            pointerEvents: "auto",
            width: 50,
            height: 50,
          }}
          onClick={onClick}
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
