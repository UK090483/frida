import React, { useState } from "react"
import Frida from "../../frida/frida"
import style from "./artwork.module.scss"
import useMouse from '../../Mouse/hooks/useMouse'

export default function Artwork({ artwork, handleClick, handleLoaded }) {
  const { images, availability, artworkName, artistName, price } = artwork
  const [loaded, setloaded] = useState(false)


  const { setMouse } = useMouse()

  // const srcSet = images.srcSet
  const src = images.src

  const makeVisilbe = () => {

    handleLoaded()

    setTimeout(() => {
      setloaded(true)
    }, 200);

  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <React.Fragment>
      {images && (
        <div
          className={`${style.root}  ${loaded ? style.loaded : ""}`}
          onClick={() => handleClick(artwork)}
          onMouseEnter={() => {
            setMouse('link', true)
          }}
          onMouseLeave={() => {
            setMouse('link', false)
          }}
        >
          <img
            className={style.image}
            alt={`artwork ${artworkName} from ${artistName}`}
            onLoad={() => {
              makeVisilbe()
            }}
            src={src}
          ></img>
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
            <div className={style.price}>{price}€</div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
