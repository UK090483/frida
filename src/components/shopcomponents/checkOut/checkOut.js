import React, { useState, useRef, useEffect, useContext } from "react"

import styled from "styled-components"
import Header from "../../generic/header/header"
import useBodyScrollStop from "../../helper/useBodyScrollStop"
import ArtikelList from "./ArtikelList/ArtikelList"
import Section from "../../container/section"
import UiContext from "../../../context/UiContext"
import { useStaticQuery, graphql } from "gatsby"
import BillingPannel from "./BillingPannel"
import StripeElements from "./Stripe/StripeElements"
import { PayPalButton } from "react-paypal-button-v2"

export default function CheckOutLink() {
  const { items, checkoutOpen, setCheckoutOpen } = useContext(UiContext)

  const lasteState = useRef(false)
  const [animate, setAnimate] = useState("out")
  const { stopBodyScroll, enableBodySroll } = useBodyScrollStop()

  useEffect(() => {
    const open = () => {
      stopBodyScroll()
      setAnimate("in-active")
      setTimeout(() => {
        setAnimate("in")
      }, 500)
    }
    const close = () => {
      enableBodySroll
      setAnimate("out-active")
      setTimeout(() => {
        setAnimate("out")
      }, 500)
    }
    if (lasteState.current === !!checkoutOpen) {
    } else {
      if (checkoutOpen) {
        open()
      } else {
        close()
      }
      lasteState.current = checkoutOpen
    }

    return () => {
      enableBodySroll()
    }
  }, [checkoutOpen])

  const artworks = usePreparedData()

  const activeArtworks = items
    ? artworks.filter(item => {
        return items.includes(item.uuid)
      })
    : []

  return (
    <React.Fragment>
      <Root animate={animate}>
        <Header title={"fridaShop"}>
          <button
            style={{ pointerEvents: "all" }}
            key="close"
            onClick={() => {
              setCheckoutOpen()
            }}
          >
            close
          </button>
        </Header>

        <Inner>
          <Section>
            <ArtikelList artikel={activeArtworks}></ArtikelList>
            <BillingPannel artikel={activeArtworks} />

            <PayPalButton
              amount="0.01"
              shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                )

                // OPTIONAL: Call your server to save the transaction
                // return fetch("/paypal-transaction-complete", {
                //   method: "post",
                //   body: JSON.stringify({
                //     orderID: data.orderID,
                //   }),
                // })
              }}
              options={{
                clientId:
                  "AZIAUqiVAriu2-sfDhqQR6gWATidc0WRs0fhkp5UFi1imudSTW6QKe55n1RUtdX7DKzJKJnXMoH5Z4hK",
              }}
            />
          </Section>
        </Inner>
      </Root>
    </React.Fragment>
  )
}

const Inner = styled.div`
  padding-top: 200px;
  overflow: auto;
  height: 100vh;
`

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2000;
  transform: translate3d(100%, 0, 0);

  border: red solid 1px;

  ${({ animate }) => {
    switch (animate) {
      case "out":
        return "transform: translate3d(100%, 0, 0); opacity:0;"
      case "out-active":
        return "transition: transform 0.5s, opacity 0.5s; transform: translate3d(100%, 0, 0);  opacity:0; "
      case "in":
        return "transform: translate3d(0, 0, 0);  opacity:1;"
      case "in-active":
        return "transition: transform 0.5s, opacity 0.5s; transform: translate3d(0, 0, 0); opacity:1; "
      default:
        break
    }
  }};
`
function usePreparedData() {
  const data = useStaticQuery(graphql`
    query shop {
      allFridaArtworks {
        nodes {
          uuid
          id
          availability
          width
          artworkName
          height
          slug
          imageUrl
          depth
          artistName
          artistWebLink
          instagramLink
          medium
          stil
          price
          artistDescription
          artworkDescription: description
        }
      }
    }
  `)

  return data.allFridaArtworks.nodes
}
