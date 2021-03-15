import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const IndexPage = props => (
  <Layout title={"Frida"}>
    <SEO title="about" path={props.location.pathname} />
    <Hero backgroundColor="lila">
      <h6 style={{ fontWeight: 800 }}>ABOUT</h6>

      <h1 style={{ fontWeight: 800 }}>
        Wer ist Frida? <br />
        Und wie kann man sie treffen?
      </h1>
    </Hero>
    <Section backgroundColor="lila" type="text">
      <div>
        <p>
          #MeetFrida ist eine neuartige Initiative zur Förderung von
          Kunstschaffenden in Deutschland. Seit August 2020 zeigen wir Kunst
          online und im öffentlichen Raum. Ob Malerei, Fotografie oder Skulptur,
          wir haben hunderte Kunstwerke für unsere Online-Gallery kuratiert. Uns
          ist es wichtig, dass auch für kleinere Geldbeutel etwas dabei ist.
          Deshalb haben wir von allen Künstler*innen mindestens ein Werk unter
          500 EUR im Programm.
        </p>
        <br />
        <p>
          Neben der Online-Gallery www.meetfrida.art sind ausgewählte Arbeiten
          unserer Künstler*innen im öffentlichen Raum zu sehen: In
          Outdoor-Ausstellungen zeigen wir Kunstwerke auf großflächigen
          Plakatwänden in ganz Deutschland. Wir machen Innenstädte im Rahmen von
          City Art Weeks mit riesigen Kunstdrucken zu Museen auf Zeit. Und
          unsere Künstler*innen bespielen mit offenen Ateliers Leerstände in
          verschiedenen Innenstädten. So geben wir unseren Künstler*innen neue
          Möglichkeiten, ihre Kunst zu zeigen und neue Verkaufswege zu finden.
        </p>
        <br />
        <p>
          #MeetFrida macht Kunst sichtbar, selbst für Menschen, die sonst nicht
          mit Kultur in Berührung kommen. Und nebenbei erschaffen wir die größte
          Outdoor-Gallery, die es in Deutschland je gab.
        </p>

        <br />
      </div>
    </Section>
  </Layout>
)

export default IndexPage
