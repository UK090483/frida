import React from "react"

// import UiContext from "~context/UiContext"

import { PayPalButtons } from "@paypal/react-paypal-js"
// import Paypal from "gatsby-plugin-paypal"

function PPP() {
  return (
    <div>
      {typeof window !== "undefined" && (
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            console.log("create")
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: "0.01",
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING", // default is "GET_FROM_FILE"
              },
            })
          }}
        />
      )}
    </div>
  )
}

export default PPP
