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

    <Artworks></Artworks>

  </Layout>
)

export default IndexPage
