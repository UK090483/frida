import React from "react"
// import getPriceWithTax from "../../helper/getPriceWithTax"
// import transformImage from "../../helper/transformImage"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import useShopSnipCart from "../../../shopcomponents/hooks/useShopSnipcart"
import styled from "styled-components"
import { getFluidImage } from "~components/helper/sanityImage"

export default function Buybutton({ artwork }) {
  const {
    artworkName,
    price,
    artistDescription,
    // imageUrl,
    slug,
    availability,
    uuid,
    image,
  } = artwork

  const { openCard, onCard, eraseItem } = useShopSnipCart(uuid)
  const { setMouse } = useMouse()

  const imageSrc = getFluidImage(image.imageAssetId, {
    maxWidth: 200,
    quality: 60,
  }).src

  return (
    <Root>
      {!onCard ? (
        <React.Fragment>
          {availability === "sold" ? (
            <BuyButton
              show={true}
              sold={true}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            >
              {"Leider Verkauft"}
            </BuyButton>
          ) : (
            <BuyButton
              key="snipcart-add-item"
              show={true}
              className={"snipcart-add-item"}
              data-item-id={uuid}
              data-item-min-quantity={1}
              data-item-max-quantity={1}
              data-item-price={price}
              data-item-url={"/artwork/" + slug}
              data-item-description={artistDescription}
              data-item-image={imageSrc}
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
          )}
        </React.Fragment>
      ) : (
        <BuyButton
          key="snipcart-erase"
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
        key="snipcart-show"
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
  flex-wrap: wrap-reverse;

  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
  }
`

const BuyButton = styled.div`
  overflow: hidden;
  outline: none;
  transition: color 0.3s, background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.green};
  opacity: ${({ sold }) => (sold ? "0.8" : "1")};
  min-height: 70px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 1.4em;
  font-weight: 900;
  text-decoration: none;
  border: ${({ theme }) => theme.colors.green} solid 3px;
  transform-origin: right;
  width: ${({ show }) => (show ? "100%" : "0")};
  overflow: hidden;
  white-space: nowrap;
  border-width: ${({ show }) => (show ? "3px" : "0")};
  padding: ${({ show }) => (show ? "1px 6px" : "0")};
  margin-top: 10px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: ${({ margin, show }) => (margin && show ? "20px" : "0")};
    margin-top: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  transition: width 0.3s cubic-bezier(0.47, 0.71, 0.42, 1.12);
`
