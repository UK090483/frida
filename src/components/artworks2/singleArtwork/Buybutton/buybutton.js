import React from "react"
import style from "./buyButton.module.scss"
import getPriceWithTax from "../../helper/getPriceWithTax"
import transformImage from "../../helper/transformImage"

export default function Buybutton({ artwork }) {
  const { artworkName, price, artistDescription, imageUrl, slug } = artwork

  return (
    <button
      className={"snipcart-add-item " + style.buyButton}
      data-item-id={artworkName}
      data-item-price={getPriceWithTax(price)}
      data-item-url={"/artwork/" + slug}
      data-item-description={artistDescription}
      data-item-image={transformImage(imageUrl, "500x0")}
      data-item-name={artworkName}
    >
      Add to cart
    </button>
  )
}
