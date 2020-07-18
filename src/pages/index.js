import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Artworks from "../components/artworks/artworks/artworks"
import StartHero from '../components/StartHero/startHero'


const IndexPage = () => (
  <Layout title={'Frida'}>
    <SEO title="Home" />

    <StartHero></StartHero>

    <Artworks></Artworks>

  </Layout>
)

export default IndexPage
