import React, { useContext, useEffect, useState } from "react"
// import getPriceWithTax from "../../helper/getPriceWithTax"
// import transformImage from "../../helper/transformImage"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import styled from "styled-components"
import UiContext from "../../../../context/UiContext"

export default function Buybutton({ artwork }) {
  const { availability, uuid } = artwork
  const [onCard, setOnCart] = useState(false)

  const { openCard, isOnCard, eraseItem, setInCart, items } = useContext(
    UiContext
  )

  useEffect(() => {
    setOnCart(!!isOnCard(uuid))
  }, [isOnCard, items, onCard, uuid])

  const { setMouse } = useMouse()

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
              data-testid="add-to-cart-button"
              show={true}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
              onClick={() => {
                setInCart(uuid)
              }}
            >
              {"In den Warenkorb"}
            </BuyButton>
          )}
        </React.Fragment>
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
            eraseItem(uuid)
          }}
        >
          Entfernen
        </BuyButton>
      )}

      <BuyButton
        data-testid="got-to-cart-button"
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
  background-color: ${({ theme }) => theme.colors.red};
  opacity: ${({ sold }) => (sold ? "0.8" : "1")};
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
  margin-top: 10px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: ${({ margin, show }) => (margin && show ? "20px" : "0")};
    margin-top: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
  }
  transition: width 0.3s cubic-bezier(0.47, 0.71, 0.42, 1.12);
`
