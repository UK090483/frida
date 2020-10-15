import React from "react"
import ReactFitText from "react-fittext"
import style from "./artworkName.module.scss"

export default function ArtworkName({ availability, artworkName }) {
  const stringArray = [...artworkName.split(" ")]
  const firstWord = stringArray.shift()
  const rest = stringArray.join(" ")

  return (
    <ReactFitText maxFontSize={40}>
      <div className={style.artworkName}>
        <span
          className={`${style.dot} ${
            availability === "sold" ? style.dotSold : ""
          }`}
        >
          {firstWord + " "}
        </span>
        {rest}
      </div>
    </ReactFitText>
  )
}
