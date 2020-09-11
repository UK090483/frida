import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import Artworks from "../components/artworks/artworks/artworks"
import StartHero from "../components/StartHero/startHero"
import Stoerer from "../components/StartHero/stoerer"

const IndexPage = () => (
  <Layout title={"Frida"}>
    <SEO title="Home" />
    <StartHero></StartHero>
    <Stoerer></Stoerer>
    <Artworks></Artworks>
  </Layout>
)

export default IndexPage
