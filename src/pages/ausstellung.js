import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Artworks from "../components/artworks/artworks/artworks"
import Section from "../components/container/section"

const Ausstellung = () => (
  <Layout title={"NewArtists"}>
    <SEO title="Ausstellung" />
    <Hero backgroundColor="lila">
      <h6>AUSSTELLUNG</h6>
      <h1>Gute Kunst kaufen und Künstler*innen direkt unterstützen</h1>
    </Hero>
    <Section type={"text"}>
      <div style={{ paddingTop: 100 }}>


        <p>
          Du möchtest eines der Werke kaufen? In
          unserer Online-Galerie kannst du die Werke direkt erwerben.
          Die Erlöse gehen zu 100% an die Künstler*innen.
        </p>

      </div>
    </Section>
    <Artworks filter={true} infinite={true}></Artworks>
  </Layout>
)

export default Ausstellung
