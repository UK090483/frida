import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Poster from "../components/Poster/Poster/poster"
import Hero from "../components/hero/hero"
import Button from "../components/buttons/button"
import Section from "../components/container/section"

import Header from "../components/generic/header/header"

const StartNext = () => (
  <Layout
    title={"Frida"}
    header={
      <Header title={"Frida"} link={false}>
        <Button
          size={"small"}
          type={"externalLink"}
          label={"STARTNEXT"}
          link={"https://www.startnext.com/meetfrida"}
          backgroundColor={"lila"}
        />
      </Header>
    }
  >
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
    <Section>
      <Poster />
    </Section>
  </Layout>
)

export default StartNext
