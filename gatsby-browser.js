/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
// import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { UiContextProvider } from "./src/context/UiContext"
import { ThemeProvider } from "styled-components"
import theme from "./src/Styles/theme"

export const wrapRootElement = ({ element }) => (
  // <PayPalScriptProvider
  //   options={{
  //     // "client-id":
  //     //   "AZIAUqiVAriu2-sfDhqQR6gWATidc0WRs0fhkp5UFi1imudSTW6QKe55n1RUtdX7DKzJKJnXMoH5Z4hK",
  //     "client-id": "sb",
  //     currency: "USD",
  //     intent: "capture",
  //     commit: false,
  //   }}
  // >
  <ThemeProvider theme={theme}>
    <UiContextProvider>{element}</UiContextProvider>
  </ThemeProvider>
  // </PayPalScriptProvider>
)
