/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it



const React = require("react")

const HtmlAttributes = {
  lang: "de"
}
function createMarkup(prop) { return {__html: `{{ item.${prop} }}`}; };

const HeadComponents = [
  
  <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css" />,
  
]
const postBody = [
  <script async key='snipcartJs' src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js" />,
  <div hidden id="snipcart" data-api-key='MDQ0ODFjNTYtNDY4Mi00MDkwLWJjNjYtMzhlYzUzMTdkNmZlNjM3Mzc5MzIyODc1OTQyODk2' data-config-add-product-behavior="none"></div> 
]

const BodyAttributes = {
  "data-themee": "dark"
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  setPostBodyComponents
}, pluginOptions) => {
  
  setHeadComponents(HeadComponents)
  setPostBodyComponents(postBody)
}

