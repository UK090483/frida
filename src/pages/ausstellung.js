import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Artworks from "../components/artworks/artworks"
import Section from '../components/container/section'

const Ausstellung = () => (
    <Layout title={'NewArtists'}>
        <SEO title="Ausstellung" />
        <Hero color='#F5C5D9'>

            <h4>AUSSTELLUNG</h4>
            <h1>Entdecke</h1>

        </Hero>
        <Section >
            <div style={{ padding: '100px 400px' }}>
                <p >
                    Wir bringen die Kunst dahin, wo alle sie sehen:
                    Dafür nutzen wir im August (digitale) Werbeflächen, die wegen der Corona-Krise nicht
                    gebucht werden, und zeigen dort Kunst statt Werbung.
                </p>

                <p>
                    Diese Kunst zeigen wir aber zugleich auch online. Meet Frida.
                    Any buy art
                </p>
            </div>
        </Section>
        <Artworks></Artworks>
    </Layout>
)

export default Ausstellung
