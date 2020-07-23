import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"
import Supporter from "../components/Supporter/supporter"
import Kooperation from "../components/Supporter/kooperation"
import Button from "../components/buttons/button"

const IndexPage = () => (
  <Layout title={"OurSupporters"}>
    <SEO title="Teilnehmen" />
    <Hero backgroundColor="lila">
      <h4>UNTERSTÜTZEN</h4>
      <h1>
        Unterstützen Sie <Frida /> und werden Sie Teil der größten Kunstschau
        im öffentlichen Raum
      </h1>
    </Hero>
    <Section backgroundColor="lila" type={"text"}>
      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <p>
          Nicht nur Kunst braucht Förderer, auch unsere Kunstaktion braucht
          Unterstützer, die das Projekt in ihre Netzwerke streuen. Oder die uns
          unterstützen, indem sie die Produktionskosten für diese Aktion
          übernehmen.
        </p>


        <div style={{ padding: "60px 0" }}>
          <Button label={"Jetzt Unterstützen"}></Button>
        </div>
        <p>
          <span style={{ fontWeight: 800 }}>
            {" "}
            Unsere Kooperationspartner*innen:{" "}
          </span>
        </p>
        <Kooperation></Kooperation>
        <p>
          <span style={{ fontWeight: 800 }}> Unsere Supporter*innen </span>
        </p>
        <Supporter></Supporter>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
