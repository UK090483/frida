import React from "react"
import Frida from "../../frida/frida"
import style from "./artwork.module.scss"

import getPriceWithTax from "../helper/getPriceWithTax"
import Container from "./container/artworkContainer"
import ArtworkImage from "./artworkImage/artworkImage"
import ArtworkInfo from "./artworkInfo/ArtworkInfo"

export default function Artwork({ artwork, handleClick, handleLoaded }) {
  const { availability, artworkName, artistName, price, imageUrl } = artwork

  // const [loaded, setloaded] = useState(false)

  const makeVisilbe = () => {
    handleLoaded()
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Container
      onClick={() => handleClick(artwork)}
      loaded={true}
      artwork={artwork}
    >
      <ArtworkImage
        alt={`artwork ${artworkName} from ${artistName}`}
        onLoad={makeVisilbe}
        src={imageUrl}
      />

      <h3 className={style.artistName}>
        <Frida text={artistName} textColor="#f5c5d9"></Frida>
      </h3>

      <ArtworkInfo
        availability={availability}
        price={getPriceWithTax(price)}
        artworkName={artworkName}
      />
      {/* <div className={style.infoRoot}>
        <div
          className={`${style.dot} ${
            availability === "sold" ? style.dotSold : ""
          }`}
        ></div>
        <div className={style.artworkName}> {artworkName}</div>
        <div className={style.price}>{getPriceWithTax(price)}€</div>
      </div> */}
    </Container>
  )
}
