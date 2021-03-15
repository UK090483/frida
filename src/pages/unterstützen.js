import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"
import Supporter from "../components/Supporter/supporter"
import Kooperation from "../components/Supporter/kooperation"
import Button from "../components/buttons/button"

const IndexPage = props => (
  <Layout title={"OurSupporters"}>
    <SEO title="Unterstützen" path={props.location.pathname} />
    <Hero backgroundColor="lila">
      <h6>PARTNERSCHAFTEN</h6>
      <h1>Frida liebt Euch. Denn Ihr liebt Kunst. Und zeigt es.</h1>
    </Hero>
    <Section backgroundColor="lila" type={"text"}>
      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <p>
          <Frida /> geht neue Wege, um Künstler*innen zu unterstützen und Kunst
          zu zeigen. Denn wir finden: Kunst sollte zu einem Teil unseres Alltags
          werden und uns überall begleiten. Deshalb sorgen wir mit unseren
          Aktionen im öffentlichen Raum dafür, dass Kunst sichtbar wird. Auch in
          Zeiten von Corona und auch als Möglichkeit, Innenstädte neu zu
          beleben.
        </p>
        <p>
          Mit unseren Projekten gehen wir weit über das hinaus, was Online
          Galerien normalerweise machen. Immer mit kreativen Ansätzen und gerne
          in Kollaboration mit Partnern, die genauso denken, wie wir.
        </p>

        <p>
          Deshalb freuen wir uns immer über neue Partnerschaften – mit
          Unternehmen, mit Galerien, mit Projekten, mit Architekten und Interior
          Designern. Kontaktiert uns, wenn Ihr gemeinsam neue Projekte
          realisieren wollt. Wir freuen uns schon jetzt!
        </p>

        <br />
        <br />
        <br />
        <p>
          Wir danken unseren Partnern für die tollen gemeinsamen Projekte und
          die spannende Kollaboration!
        </p>

        {/* <div style={{ padding: "60px 0" }}>
          <Button
            type={"externalLink"}
            label={"Jetzt Unterstützen"}
            link={"https://www.startnext.com/meetfrida"}
            backgroundColor={"lila"}
          />
        </div> */}
        {/* <p>
          <span style={{ fontWeight: 800 }}>
            {" "}
            Unsere Kooperationspartner*innen:{" "}
          </span>
        </p> */}
        <Kooperation></Kooperation>
        {/* <p>
          <span style={{ fontWeight: 800 }}> Unsere Supporter*innen </span>
        </p> */}
        <Supporter></Supporter>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
