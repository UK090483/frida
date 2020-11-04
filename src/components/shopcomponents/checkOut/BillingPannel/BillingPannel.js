import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import UiContext from "../../../../context/UiContext"

export default function BillingPannel({ artikel }) {
  const { items } = useContext(UiContext)
  const getSum = () => {
    let sum = 0
    artikel.forEach(element => {
      sum = sum + parseInt(element.price)
    })
    let tax = Math.round(sum * 0.16 * 100) / 100
    return { sum, tax }
  }

  const { sum, tax } = getSum()

  const handleCheckout = () => {
    fetch("/.netlify/functions/stripe", {
      method: "POST",
      body: JSON.stringify({
        items,
      }),
    })
      .then(async response => {
        const r = await response.json()
        console.log(r)
      })
      .catch(err => alert(err.message))
  }

  return (
    <Root>
      <Sum>
        <span>MwSt(16%):</span> <span>{tax}€</span>
      </Sum>
      <Sum>
        <span>GESAMTBETRAG: </span> <span>{sum}€</span>
      </Sum>
      <Button
        key="buy"
        onClick={() => {
          handleCheckout()
        }}
      >
        Checkout
      </Button>
    </Root>
  )
}
const Button = styled.button`
  width: 400px;
`
const Root = styled.div``
const Sum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
