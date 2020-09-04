import React, { useState } from "react"
import Frida from "../../frida/frida"
import style from "./artwork.module.scss"
import useMouse from "../../Mouse/hooks/useMouse"
import getPriceWithTax from "../helper/getPriceWithTax"
import ArtworkImage from "../../image/ArtworkImage/artworkImage"
import Img from "gatsby-image"
import { CDN } from "../../../Constants"

export default function Artwork({ artwork, handleClick, handleLoaded }) {
  const { images, availability, artworkName, artistName, price, cdn } = artwork

  const cdnImage = cdn.url + "?tr=w-500"
  const [loaded, setloaded] = useState(false)

  const { setMouse } = useMouse()

  const makeVisilbe = () => {
    handleLoaded()

    setTimeout(() => {
      setloaded(true)
    }, 200)
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <React.Fragment>
      {images && (
        <div
          className={`${style.root}  ${loaded ? style.loaded : ""}`}
          onClick={() => handleClick(artwork)}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          {!CDN && (
            <Img
              placeholderClassName={style.image}
              fluid={images.fluid}
              onLoad={() => {
                makeVisilbe()
              }}
            />
          )}
          {CDN && (
            <ArtworkImage
              alt={`artwork ${artworkName} from ${artistName}`}
              onLoad={() => {
                makeVisilbe()
              }}
              src={cdnImage}
            ></ArtworkImage>
          )}
          <h3 className={style.artistName}>
            <Frida text={artistName} textColor="#f5c5d9"></Frida>
          </h3>
          <div className={style.infoRoot}>
            <div
              className={`${style.dot} ${
                availability === "sold" ? style.dotSold : ""
              }`}
            ></div>
            <div className={style.artworkName}> {artworkName}</div>
            <div className={style.price}>{getPriceWithTax(price)}€</div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
