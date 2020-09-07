import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Artworks from "../components/artworks/artworks/artworks"
import StartHero from "../components/StartHero/startHero"
import Stoerer from "../components/StartHero/stoerer"
import Section from "../components/container/section"
import Button from "../components/buttons/button"
import Frida from "../components/frida/frida"

const IndexPage = () => (
  <Layout title={"Frida"}>
    <SEO title="Home" />
    <StartHero></StartHero>
    <Stoerer></Stoerer>
    <Section>
      <h3 style={{ paddingBottom: 30, marginBottom: 0 }}>
        <Frida text={"NewArtists"} textColor="#F5C5D9"></Frida>
      </h3>
    </Section>
    <Artworks></Artworks>

    <Section>
      <div
        style={{
          width: "fit-content",
          margin: "0 auto",
          padding: "30px 0",
        }}
      >
        <Button label={"mehr Kunst"} link={"/ausstellung/"}></Button>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
