import React, { useContext, useEffect, useState } from "react"

import styled from "styled-components"
import { navigate } from "gatsby"
import shopContext from "~context/shopifyContext"
import { setMouse } from "~components/generic/Mouse/mouseRemote"

export default function BuybuttonShopify({ availability, shopifyId }) {
  const isBrowser = typeof window !== "undefined"

  const shop = useContext(shopContext)

  const {
    removeLineItem,
    addVariantToCart,
    store: { client, checkout, lineItems },
  } = shop

  const onCard = isBrowser
    ? lineItems.find(item => item.variantId === shopifyId)
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, onCard.lineItemId)
  }

  // useEffect(() => {
  //   client.product
  //     .fetchByHandle(slug)
  //     .then(product => {
  //       setShopifyId(product.variants[0].id)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [client.product, shop.checkout, slug])

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
              show={true}
              onClick={() => {
                addVariantToCart(shopifyId, 1)
              }}
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
            handleRemove()
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
          navigate("/checkout")
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
    /* background-color: transparent; */
    color: ${({ theme }) => theme.colors.black};
  }
  transition: width 0.3s cubic-bezier(0.47, 0.71, 0.42, 1.12);
`
