import React from "react"
import SbEditable from "storyblok-react"

const SPACE = 50
export default function Spacer(props) {
  const { size } = props.blok

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
  return (
    <SbEditable content={props.blok}>
      <div style={{ height: getSize(), width: "100%" }}></div>
    </SbEditable>
  )
}
