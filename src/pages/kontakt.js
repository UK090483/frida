import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"
import TeamImage from "../components/image/heroImage"

const IndexPage = props => (
  <Layout title={"TheMakers"}>
    <SEO title="Kontakt" path={props.location.pathname} />
    <Section backgroundColor="lila" type={"full"}>
      <TeamImage></TeamImage>
    </Section>
    <Section type={"text"} backgroundColor="lila">
      <p style={{ paddingTop: 100, paddingBottom: 100 }}>
        {/* Du willst wissen, wer hinter <Frida /> steckt?
        <br />
        <br />
        Du willst wissen wer wir sind? Wir sind ein Creative Think Tank, der
        Inhalte relevant und komplexe Themen zu nachhaltigen Kampagnen macht.
        Seit 2015 denken wir täglich neu – vernetzt, digital, unabhängig.
        <br />
        <br />
        Wir greifen aktuelle Trends auf und geben Botschaften einen Mehrwert -
        gesellschaftlich, ökologisch, kulturell, politisch. */}
        Initiator von <Frida></Frida> ist Schwan Communications, ein Creative
        Think Tank, der Inhalte relevant und komplexe Themen zu nachhaltigen
        Kampagnen macht. Seit 2015 denken wir täglich neu – vernetzt, digital,
        unabhängig.
        <br />
        Wir greifen aktuelle Trends auf und geben Botschaften einen Mehrwert -
        gesellschaftlich, ökologisch, kulturell, politisch. Kunstprojekte sind
        uns dabei besonders wichtig, deshalb arbeiten wir unter anderem zusammen
        mit: Affordable Art Fair, Ernst Barlach Museum Ratzeburg, Imagine the
        CityHamburg, Hamburger Symphoniker oder der Hamburger Theaternacht.
        <br />
        <br />
        <br />
        Kontakt:
        <br />
        Dr. Anna Schwan
        <br />
        CEO Schwan Communications
        <br />
        und Mitinitiatorin <Frida></Frida>,
        <br />
        <a
          style={{ color: "#fa464c" }}
          href="mailto:as@schwan-communications.com"
        >
          as@schwan-communications.com
        </a>
        <br />
        <a
          href="http://schwan-communications.com/"
          target="_blank"
          rel="noreferrer"
        >
          www.schwan-communications.com
        </a>
        <br></br>
        +49(0)40.466.372.94
      </p>
    </Section>
  </Layout>
)

export default IndexPage
