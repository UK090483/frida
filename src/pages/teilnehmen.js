import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Button from "../components/buttons/button"
import TeilnehmennCTA from "../components/teilnemenCTA/teilnemenCta"
const JOTFORM = "https://form.jotform.com/202104811201332"

const IndexPage = () => (
  <Layout title={"Collectors"}>
    <SEO title="Teilnehmen" />
    <Hero backgroundColor="red">
      <h6>TEILNEHMEN</h6>
      <h2 className={`text-white`}>
        Open Call: <br></br>Mitmachen und Deine Kunst in ganz Deutschland zeigen
      </h2>
    </Hero>
    <Section type={"text"} backgroundColor="red">
      <p style={{ paddingTop: 100, paddingBottom: 100 }}>
        #MeetFrida zeigt Kunst online und im öffentlichen Raum. Dafür nutzen wir
        Plakatflächen in vielen Städten, um Deine Kunst auszustellen. Wer Deine
        Arbeit mag, kann sie direkt kaufen. Auf unserer Website und
        Online-Gallery lädst Du dazu Deine Werke hoch. Du bestimmst den Preis,
        Teilnahmekosten gibt es nicht.
        <br />
        <br />
        Reiche jetzt Deine Kunst ein und nutze die Möglichkeit, tausende
        Menschen in ganz Deutschland zu erreichen!
        <br />
      </p>
    </Section>
    <Section type={"text"} backgroundColor="red">
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          type={"externalLink"}
          label={"Jetzt teilnehmen"}
          link={JOTFORM}
          backgroundColor={"red"}
          color={"white"}
        />
      </div>
    </Section>
    <Section type={"text"} backgroundColor="red">
      <p style={{ paddingTop: 100 }}>
        Du willst Teil von Deutschlands größter Outdoor- und Online-Gallery
        werden? Dann müsstest Du folgende Bedingungen erfüllen:
      </p>
      <ul style={{ paddingBottom: 100 }}>
        <li>Du hast ein abgeschlossenes Kunststudium.</li>
        <li>
          Du arbeitest seit mindestens drei Jahren hauptberuflich als
          Kunstschaffende*r.
        </li>
        <li>
          Du hattest schon mindestens zwei Ausstellungen in Galerien oder
          Museen.
        </li>
        <li>
          Du reichst ein Empfehlungsschreiben eines Kurators, Professors oder
          Sammlers mit ein.
        </li>
      </ul>
      <p style={{ paddingBottom: 100 }}>
        Alle eingereichten Arbeiten werden von unserer unabhängigen Jury aus
        Kunstexperten geprüft. Sobald die Entscheidung gefallen ist,
        kontaktieren wir Dich und laden Deine Werke hoch.
      </p>

      <p>
        Zeig uns die Werke, die du bei #MeetFrida ausstellen und verkaufen
        willst, und sei gespannt auf die Rückmeldung der Kurator*innen.
      </p>

      <ul style={{ paddingBottom: 100, marginBottom: 0 }}>
        <li>Du kannst fünf Arbeiten einreichen.</li>
        <li>Bitte gib immer Brutto-Endpreise an</li>
        <li>Eines der Werke muss weniger als 500 EUR brutto kosten</li>
      </ul>
    </Section>

    <TeilnehmennCTA link={JOTFORM}></TeilnehmennCTA>
  </Layout>
)

export default IndexPage
