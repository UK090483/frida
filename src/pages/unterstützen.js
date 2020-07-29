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
    <SEO title="Unterstützen" />
    <Hero backgroundColor="lila">
      <h6>UNTERSTÜTZEN</h6>
      <h1>
        Unterstütze <Frida /> und werde Teil der größten Kunstschau Deutschlands

      </h1>
    </Hero>
    <Section backgroundColor="lila" type={"text"}>
      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <p>
          Nicht nur Kunst braucht Förderung, auch unsere Kunstaktion braucht Unterstützer*innen, die das Projekt bekannt machen.
          Oder die uns helfen, indem sie Produktionskosten für <Frida /> übernehmen. Wenn wir mehr einnehmen,
          können wir mehr ausstellen – die Ausstellung wird immer größer.
        </p>


        <div style={{ padding: "60px 0" }}>
          <Button label={"Jetzt Unterstützen"} backgroundColor={'lila'}></Button>
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
