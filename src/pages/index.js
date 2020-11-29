import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Artworks from "../components/artworks"
import StartHero from "../components/hero/StartHero/startHero"

const IndexPage = props => {
  return (
    <Layout title={"Frida"}>
      <SEO title="Home" path={props.location.pathname} />
      <StartHero></StartHero>

      <Artworks></Artworks>
    </Layout>
  )
}

export default IndexPage
