import React from "react"

const SPACE = 50
export default function Spacer(props) {
  const { size } = props

  const getSize = () => {
    switch (size) {
      case "s":
        return SPACE
      case "m":
        return SPACE * 2
      case "l":
        return SPACE * 3
      case "xl":
        return SPACE * 4
      case "xxl":
        return SPACE * 5
      default:
        return 100
    }
  }
  return <div style={{ height: getSize(), width: "100%" }} />
}
