import React from "react"
import style from "./singleArtwork.module.scss"
import Tab from "./tab"
import FridaImage from "./fridaImage"
import SendMail from "./sendMail/sendMail"
import ArtworkName from "./artworkName/artworkName"
import getPriceWithTax from "../helper/getPriceWithTax"

export default function Artworks({ artwork }) {
  const {
    images,
    availability,
    artworkName,
    price,
    artistDescription,
    artworkDescription,
    height,
    medium,
    stil,
    width,
    depth,
  } = artwork

  return (
    <div className={style.root}>
      <div className={style.inner}>
        <div className={style.imageRoot}>
          <FridaImage images={images} artwork={artwork}></FridaImage>
        </div>

        <div className={style.infoRoot}>
          <Tab text1={artistDescription} text2={artworkDescription}></Tab>
          <div className={style.nameRoot}>
            {/* <div
              className={`${style.dot} ${
                availability === "sold" && style.dotSold
              }`}
            ></div> */}

            <ArtworkName
              artworkName={artworkName}
              availability={availability}
            ></ArtworkName>
            {/* <ReactFitText maxFontSize={40}>
              <div className={style.artworkName}>
                <span
                  className={`${style.dot} ${
                    availability === "sold" ? style.dotSold : ""
                  }`}
                >
                  b
                </span>
                {artworkName}
              </div>
            </ReactFitText> */}
          </div>
          <div className={style.props}>
            {" "}
            {`${medium}, ${width}*${height} ${
              depth ? "*" + depth : ""
            } cm ${stil}`}{" "}
          </div>
          <div className={style.price}>{getPriceWithTax(price)}€</div>

          <SendMail artwork={artwork}></SendMail>
        </div>
      </div>
    </div>
  )
}
