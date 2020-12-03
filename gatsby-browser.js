/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { UiContextProvider } from "./src/context/UiContext"
import { StoreContextProvider } from "./src/context/shopifyContext"
import { ThemeProvider } from "styled-components"
import theme from "./src/Styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <StoreContextProvider>
      <UiContextProvider>{element}</UiContextProvider>
    </StoreContextProvider>
  </ThemeProvider>
)
