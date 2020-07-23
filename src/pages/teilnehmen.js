import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
// import Embet from "../components/embet/embet"
import Button from '../components/buttons/externalLinkButton'

const IndexPage = () => (
  <Layout title={"MeetCollectors"}>
    <SEO title="Teilnehmen" />
    <Hero backgroundColor="red">
      <h4>TEILNEHMEN</h4>
      <h2 className={`text-white`}>
        Open Call: <br></br>Mitmachen und Deine Kunst in ganz Deutschland zeigen
      </h2>
      {/* <h2 className={`text-lila`}>
        Submissions open 15 June-Deadline 1 August
      </h2> */}
    </Hero>
    <Section type={"text"} backgroundColor="red">
      <p style={{ paddingTop: 100, paddingBottom: 100 }}>
        Du hast ein abgeschlossenes Kunststudium? Oder Du arbeitest seit
        mindestens drei Jahren als Kunstschaffende*r?  Oder Du hattest schon
        mindestens zwei Ausstellungen? Dann bewirb dich jetzt mit den Werken,
        die Du bei #MeetFrida zeigen willst.
        <br></br>
        Du
        kannst bis zu fünf Arbeiten einreichen - die Preise bestimmt du. Um
        bei #meetfrida teilzunehmen, muss aber eins deiner Werke weniger als
        500 Euro kosten.
      </p>
    </Section>

    <Section type={"text"} backgroundColor="red">

      <div style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button label={'Zur Form'} link={"https://form.jotform.com/201885178999377"} />
      </div>
    </Section>

    {/* <Embet></Embet> */}
  </Layout>
)

export default IndexPage
