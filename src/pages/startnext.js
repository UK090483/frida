import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Poster from "../components/Poster/Poster/poster"
import Hero from "../components/hero/hero"

const IndexPage = () => (
  <Layout title={"Frida"}>
    <SEO title="Poster" />
    <Hero backgroundColor="lila" height={"medium"}>
      <h1>It's your choise</h1>
      <p style={{ paddingTop: 20, paddingBottom: 20 }}>
        Wer die Qual der Wahl hat, hat die Qual der Wahl. Von den folgenden
        Künstlern bieten wir A3 Plakate an. Bitte gib bei Startnext einfach die
        Nummer oder den Namen des Künstlern an.
      </p>
    </Hero>

    <Poster></Poster>
  </Layout>
)

export default IndexPage
