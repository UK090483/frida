import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Artworks from "../components/artworks"
import StartHero from "../components/hero/StartHero/startHero"
import Quotes from "../components/Quote/Quotes/Quotes"

const IndexPage = props => {
  return (
    <Layout title={"Frida"} initialColor={"pink"}>
      <SEO title="Home" path={props.location.pathname} />
      <StartHero></StartHero>
      <Artworks></Artworks>
      <Quotes></Quotes>
    </Layout>
  )
}

export default IndexPage
