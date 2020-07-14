import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Artworks from "../components/artworks/artworks/artworks"
import Section from '../components/container/section'


const Ausstellung = () => (
    <Layout title={'NewArtists'}>
        <SEO title="Ausstellung" />
        <Hero backgroundColor='lila'>

            <h4>AUSSTELLUNG</h4>
            <h1>Entdecke</h1>

        </Hero>
        <Section type={'text'}>
            <div style={{ paddingTop: 100 }}>

                <p>
                    Gute Kunst kaufen und Künstler*innen direkt unterstützen
                </p>

                <p>
                    Du möchtest eines der Werke kaufen? Dann nimm direkt Kontakt mit den
                    Künstler*innen auf. Der Verkauf wird direkt abgewickelt, die
                    Erlöse gehen zu 100% an die Künstler*innen.
                </p>
                {/* <p >
                    Wir bringen die Kunst dahin, wo alle sie sehen:
                    Dafür nutzen wir im August (digitale) Werbeflächen, die wegen der Corona-Krise nicht
                    gebucht werden, und zeigen dort Kunst statt Werbung.
                </p>

                <p>
                    Diese Kunst zeigen wir aber zugleich auch online. Meet Frida.
                    Any buy art
                </p> */}
            </div>
        </Section>
        <Artworks filter={true} infinite={true}></Artworks>
    </Layout>
)

export default Ausstellung
