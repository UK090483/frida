import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from '../components/Frida/frida'
import TeamImage from '../components/image/heroImage'


const IndexPage = () => (
    <Layout title={'us'}>
        <SEO title="Kontakt" />
        <Section backgroundColor='lila' type={'full'}>



            <TeamImage></TeamImage>


        </Section>
        <Section type={'text'} backgroundColor='lila'>

            <p style={{ paddingTop: 100, paddingBottom: 100 }}>

                Du willst wissen, wer hinter <Frida />  steckt?
                <br></br>
                <br></br>
                Du willst wissen wer wir sind? Wir sind ein Creative Think Tank, der
                Inhalte relevant und komplexe Themen zu nachhaltigen Kampagnen macht.
                Seit 2015 denken wir täglich neu – vernetzt, digital, unabhängig.
                <br></br>
                <br></br>
            Wir greifen aktuelle Trends auf und geben Botschaften einen Mehrwert
                -  gesellschaftlich, ökologisch, kulturell, politisch.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Anna Schwan<br></br>
                Mitinitiatorin#MeetFrida, CEO SCHWAN STUDIOS<br></br>
                <a style={{ color: '#fa464c' }} href="mailto:name@email.com">as@schwan-communikcations.com</a> <br></br>
                +49(0)40.466.372.94
            </p>
        </Section>

    </Layout>
)

export default IndexPage
