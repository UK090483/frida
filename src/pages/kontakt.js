import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from '../components/Frida/frida'


const IndexPage = () => (
    <Layout title={'us'}>
        <SEO title="Kontakt" />
        <Hero backgroundColor='lila'>

            <h4>KONTAKT</h4>
            <h1>Meet the Team</h1>


        </Hero>
        <Section type={'text'} backgroundColor='lila'>

            <p style={{ paddingTop: 100, paddingBottom: 100 }}>

                Du willst wissen, wer hinter <Frida /> steckt? Wir sind ein Creative Think
                Tank, der Inhalte relevant und komplexe Themen zu
                nachhaltigen Kampagnen macht. Seit 2015 denken wir täglich neu – vernetzt,
                digital, unabhängig. Wir greifen aktuelle Trends auf und geben Botschaften
                einen Mehrwert –
                gesellschaftlich, ökologisch, kulturell, politisch.
            </p>
        </Section>

    </Layout>
)

export default IndexPage
