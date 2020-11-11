import React, { useContext, useRef } from "react"
import DropIn from "braintree-web-drop-in-react"
import Loading from "../../../../assets/loading.svg"
import UiContext from "../../../../context/UiContext"

export default function Payment({ back }) {
  const instance = useRef(null)

  // const [loading, setLoading] = useState(true)
  const { clientToken } = useContext(UiContext)

  const instantsReady = i => {
    console.log("READYYYYYY FOR PAYMENT")
    instance.current = i
    i.on("paymentMethodRequestable", () => {
      console.log("ready To try")
    })
  }
  return (
    <React.Fragment>
      {clientToken ? (
        <DropIn
          options={{
            authorization: clientToken,
            locale: "de_DE",
            card: {
              cardholderName: true,
            },
          }}
          onInstance={i => {
            instantsReady(i)
          }}
        ></DropIn>
      ) : (
        <div style={{ width: 100, margin: "0 auto" }}>
          <Loading />
        </div>
      )}
    </React.Fragment>
  )
}

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
