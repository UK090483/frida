import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"


const IndexPage = () => (
    <Layout title={'NewCustomers'}>
        <SEO title="Teilnehmen" />
        <Hero color='#FA464C'>

            <h4>TEILNEHMEN</h4>
            <h2 className={`text-white`}>Open Call: <br></br>Mitmachen und Deine Kunst in ganz Deutschland zeigen</h2>
            <h2 className={`text-lila`}>Submissions open 15 June-Deadline 1 August</h2>

        </Hero>
        <Section type={'text'} backgroundColor='#fa464c'>


            <p style={{ paddingTop: 100, paddingBottom: 100 }}>
                Du hast ein abgeschlossenes Kunststudium oder arbeitest seit mindestens
                drei Jahren als Kunstschaffende*r oder hattest schon mindestens zwei Ausstellungen?
                Dann bewirb dich mit den Werken, die Du bei MeetFrida zeigen willst.
            </p>
        </Section>


    </Layout>
)

export default IndexPage
