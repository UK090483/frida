import React, { useContext, useRef } from "react"
import DropIn from "braintree-web-drop-in-react"
import Loading from "../../../../assets/loading.svg"
import UiContext from "~context/UiContext"
import styled from "styled-components"
export default function Payment({ back }) {
  const instance = useRef(null)

  const { clientToken } = useContext(UiContext)

  const instantsReady = i => {
    console.log("READYYYYYY FOR PAYMENT")
    instance.current = i
    i.on("paymentMethodRequestable", () => {
      console.log("ready To try")
    })
  }
  return (
    <Root>
      {clientToken ? (
        <DropinWrap>
          <DropIn
            options={{
              authorization: clientToken,
              locale: "de_DE",
              paypal: {
                flow: "vault",
              },
              // card: {
              //   cardholderName: true,
              // },
            }}
            onInstance={i => {
              instantsReady(i)
            }}
          ></DropIn>
        </DropinWrap>
      ) : (
        <div style={{ width: 100, margin: "0 auto" }}>
          <Loading />
        </div>
      )}
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`
const DropinWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;

  .braintree-card {
    border-color: transparent;
  }
`

// const buy = async () => {
//   // Send the nonce to your server
//    const { nonce } = await instance.current.requestPaymentMethod()

//   fetch("/.netlify/functions/braintreeCheckout", {
//     method: "POST",
//     body: JSON.stringify({
//       nonce,
//     }),
//   })
//     .then(async response => {
//       const r = await response.json()
//       console.log(r)
//     })
//     .catch(err => console.log(err))
//   // await fetch(`server.test/purchase/${nonce}`);
// }
