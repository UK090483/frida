import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Frida from "../components/Frida/frida"
import Artworks from "../components/artworks/artworks"


const IndexPage = () => (
  <Layout title={'frida'}>
    <SEO title="Home" />
    <Hero color='#F5C5D9'>

      <h4>500 Werke, 200 Ausstellungsorte, 1 Hashtag.</h4>
      <h1><Frida></Frida>-Deutschlands
        größte Kunstschau digital und analog</h1>

    </Hero>
    <Artworks></Artworks>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
