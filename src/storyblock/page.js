import React from "react"
import Components from "./components.js"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"

const Page = props => {
  const { title, content } = props.tree

  return (
    <Layout title={title || "Not Set"}>
      <SEO title={title} />
      {content &&
        content.map(blok =>
          React.createElement(Components(blok._type), {
            ...blok,
            key: blok._key,
          })
        )}
    </Layout>
  )
}

export default Page
