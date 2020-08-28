import React from "react"
import style from "./posterItem.module.scss"
import FridaImage from "../../image/FridaImage/fridaImage"

export default function PosterItem({ poster }) {
  const { src, width, height } = poster.image
  return (
    <div className={style.root}>
      <div className={style.imageWrap}>
        {/* <img src={src}></img> */}

        <FridaImage src={src} width={width} height={height}></FridaImage>
      </div>
      <div className={style.infoWrap}>
        <h6>{poster.artistName}</h6>
        <h6>{poster.artworkName}</h6>
      </div>
    </div>
  )
}
