import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "./src/Styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

const postBody = [
  <div key="fridaMouse" id={"mouse"} className={`frida_mouse`}>
    <div></div>
  </div>,
  <script
    key="fridaMouseJS"
    dangerouslySetInnerHTML={{
      __html: `window.FridaMouse = document.querySelector("#mouse");`,
    }}
  />,
]

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(postBody)
}
