import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "./src/Styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

const HtmlAttributes = {
  lang: "de",
}

const HeadComponents = [
  <link
    key="snipcartCss"
    rel="stylesheet"
    href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css"
  />,
]
const postBody = [
  // <script
  //   id="snipcartJs"
  //   defer
  //   key="snipcartJs"
  //   src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"
  // />,
  // <div
  //   hidden
  //   key="snipcart"
  //   id="snipcart"
  //   data-api-key="MDQ0ODFjNTYtNDY4Mi00MDkwLWJjNjYtMzhlYzUzMTdkNmZlNjM3Mzc5MzIyODc1OTQyODk2"
  //   data-config-add-product-behavior="none"
  // ></div>,
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

const BodyAttributes = {
  "data-themee": "dark",
}

export const onRenderBody = (
  {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPostBodyComponents,
  },
  pluginOptions
) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setPostBodyComponents(postBody)
}
