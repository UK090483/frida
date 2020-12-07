import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Products from "../components/Products/Product/product"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"

const StartNext = () => (
  <Layout title={"Frida"}>
    <SEO title="Poster" />
    <Hero backgroundColor="lila" height={"medium"}>
      <h1>Who do you wanna meet?</h1>
      <p style={{ paddingTop: 20, paddingBottom: 20 }}>
        Eins dieser Motive kann schon bald dein Wohn-, Schlaf- oder
        Arbeitszimmer schmücken - aber vorher hast du die Qual der Wahl. Deine
        Auswahl kannst du uns bei StartNext mitteilen, verrate uns dafür einfach
        im Eingabefeld den Namen des/der Künstlers*in oder des Kunstwerks.
      </p>
    </Hero>

    <Products />
  </Layout>
)

export default StartNext
