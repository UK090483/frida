import React from "react"
import Components from "./components.js"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"

const Page = props => {
  return (
    <Layout title={props.blok.name || "Not Set"}>
      <SEO title={props.blok.name} />
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
    </Layout>
  )
}

export default Page
