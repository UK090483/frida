import React, { useState, useEffect } from "react"
import style from "./buyButton.module.scss"
import getPriceWithTax from "../../helper/getPriceWithTax"
import transformImage from "../../helper/transformImage"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import useShop from "../../../shopcomponents/hooks/useShop"
import { motion, AnimatePresence } from "framer-motion"

export default function Buybutton({ artwork }) {
  const { artworkName, price, artistDescription, imageUrl, slug } = artwork

  const { openCard, onCard, eraseItem } = useShop(artworkName)

  const { setMouse } = useMouse()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`${style.buttons} ${onCard ? style.active : 0}`}
    >
      {!onCard ? (
        <button
          className={"snipcart-add-item " + style.buyButton}
          data-item-id={artworkName}
          data-item-min-quantity={1}
          data-item-max-quantity={1}
          // onClick={handleClick}
          data-item-price={getPriceWithTax(price)}
          data-item-url={"/artwork/" + slug}
          data-item-description={artistDescription}
          data-item-image={transformImage(imageUrl, "500x0")}
          data-item-name={artworkName}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          {"In den Warenkorb"}
        </button>
      ) : (
        <div
          className={style.buyButton}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
          onClick={() => {
            eraseItem()
          }}
        >
          Entfernen
        </div>
      )}

      <AnimatePresence>
        {onCard && (
          <motion.div
            initial={{ width: 0, marginLeft: 0 }}
            animate={{ width: "100%", marginLeft: 20 }}
            exit={{ width: 0, marginLeft: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.15, type: "tween" }}
          >
            <button
              className={style.buyButton}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
              onClick={() => {
                openCard()
              }}
            >
              {"zum Warenkorb"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
