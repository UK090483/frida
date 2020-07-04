import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from '../components/Frida/frida'


const IndexPage = () => (
    <Layout title={'OurSupporters'}>
        <SEO title="Teilnehmen" />
        <Hero backgroundColor='lila'>

            <h4>UNTERSTÜTZEN</h4>
            <h1>Unterstützen Sie <Frida /> und werden Sie teil der größten Kunstschau Deutschlands</h1>


        </Hero>
        <Section backgroundColor='lila' type={'text'}>
            <div style={{ paddingTop: 100, paddingBottom: 100 }}>
                <p >
                    Nicht nur Kunst braucht Förderer, auch unsere Kunstaktion braucht Unterstützer, die das Projekt in ihre Netzwerke streuen. Oder die uns unterstützen, indem sie die Produktionskosten für diese Aktion übernehmen.
                </p>
                <p>
                    Schirmherr der Aktion
                    Carsten Brosda, Kultursenator der Stadt Hamburg
                </p>
                <p>
                    Unsere Kooperationspartner
                </p>
                <p>
                    Unsere Supporter
                </p>

            </div>
        </Section>


    </Layout>
)

export default IndexPage
