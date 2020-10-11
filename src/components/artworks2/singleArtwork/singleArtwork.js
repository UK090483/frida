import React from "react"
import style from "./singleArtwork.module.scss"
import Tab from "./tab/tab"
import FridaImage from "./fridaImage/fridaImage"
import SendMail from "./sendMail/sendMail"
import ArtworkName from "./artworkName/artworkName"
import getPriceWithTax from "../helper/getPriceWithTax"
import transformImage from "../helper/transformImage"
import BuyButton from "./Buybutton/buybutton"

export default function Artworks({ artwork }) {
  const {
    images,
    availability,
    artworkName,
    price,
    artistDescription,
    artworkDescription,
    instagramLink,
    artistWebLink,
    height,
    medium,
    stil,
    width,
    depth,
    imageUrl,
  } = artwork

  return (
    <div className={style.root}>
      <div className={style.inner}>
        <div className={style.imageRoot}>
          <FridaImage images={images} artwork={artwork}></FridaImage>
        </div>

        <div className={style.infoRoot}>
          <Tab
            text1={artistDescription}
            text2={artworkDescription}
            artistWebLink={artistWebLink}
            instagramLink={instagramLink}
          ></Tab>
          <div className={style.nameRoot}>
            <ArtworkName
              artworkName={artworkName}
              availability={availability}
            ></ArtworkName>
          </div>
          <div className={style.props}>
            {`${medium}, ${width}*${height} ${
              depth ? "*" + depth : ""
            } cm ${stil}`}
          </div>
          <div className={style.price}>{getPriceWithTax(price)}€</div>

          <BuyButton artwork={artwork}></BuyButton>
          {/* <button className="snipcart-add-item"
  data-item-id={artworkName}
  data-item-price={getPriceWithTax(price)}
  data-item-url="/paintings/starry-night"
  data-item-description={artistDescription}
  data-item-image={transformImage(imageUrl, "500x0")}
  data-item-name={artworkName}>
  Add to cart
</button> */}

          {/* <SendMail artwork={artwork}></SendMail> */}
        </div>
      </div>
    </div>
  )
}
