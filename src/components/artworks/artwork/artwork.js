import React, { useState } from "react"
import style from "./artwork.module.scss"
import useMouse from "../../Mouse/hooks/useMouse"
import getPriceWithTax from "../helper/getPriceWithTax"
import ArtworkImage from "../../image/ArtworkImage/artworkImage"
import ArtistName from "./artistName/artistName"
import Img from "gatsby-image"
import { CDN } from "../../../Constants"

export default function Artwork({ artwork, handleClick, handleLoaded }) {
  let {
    images,
    availability,
    artworkName,
    artistName,
    price,
    cdn,
    imageUrls,
  } = artwork

  let cdnImage = cdn.url + "?tr=w-500"

  cdnImage = imageUrls.large

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
              width={cdn.width}
              height={cdn.height}
              alt={`artwork ${artworkName} from ${artistName}`}
              onLoad={() => {
                makeVisilbe()
              }}
              src={cdnImage}
            ></ArtworkImage>
          )}

          <ArtistName name={artistName}></ArtistName>

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
