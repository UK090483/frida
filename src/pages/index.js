import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Frida from "../components/Frida/frida"
import Artworks from "../components/artworks/artworks/artworks"
import StartHero from '../components/StartHero/startHero'


const IndexPage = () => (
  <Layout title={'frida'}>
    <SEO title="Home" />

    <StartHero></StartHero>
    <Hero backgroundColor='lila'>

      <h4>500 Werke, 200 Ausstellungsorte, 1 Hashtag.</h4>
      <h1><Frida></Frida>-Deutschlands
        größte Kunstschau digital und analog</h1>

    </Hero>
    <Artworks></Artworks>

  </Layout>
)

export default IndexPage
