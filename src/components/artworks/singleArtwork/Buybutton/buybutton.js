import React from "react"
import getPriceWithTax from "../../helper/getPriceWithTax"
import transformImage from "../../helper/transformImage"
import { setMouse } from "../../../generic/Mouse/mouseRemote"
import useShop from "../../../shopcomponents/hooks/useShop"
import styled from "styled-components"

export default function Buybutton({ artwork }) {
  const { artworkName, price, artistDescription, imageUrl, slug } = artwork
  const { openCard, onCard, eraseItem } = useShop(artworkName)

  return (
    <Root>
      {!onCard ? (
        <BuyButton
          show={true}
          className={"snipcart-add-item "}
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
        </BuyButton>
      ) : (
        <BuyButton
          show={true}
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
        </BuyButton>
      )}

      <BuyButton
        show={onCard}
        margin
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
      </BuyButton>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`

const BuyButton = styled.div`
  overflow: hidden;
  outline: none;
  transition: color 0.3s, background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.red};
  min-height: 70px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 1.4em;
  font-weight: 900;
  text-decoration: none;
  border: ${({ theme }) => theme.colors.red} solid 3px;
  transform-origin: right;
  width: ${({ show }) => (show ? "100%" : "0")};
  overflow: hidden;
  white-space: nowrap;
  border-width: ${({ show }) => (show ? "3px" : "0")};
  padding: ${({ show }) => (show ? "1px 6px" : "0")};
  margin-left: ${({ margin, show }) => (margin && show ? "20px" : "0")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
  }
  transition: width 0.3s cubic-bezier(0.47, 0.71, 0.42, 1.12);
`
