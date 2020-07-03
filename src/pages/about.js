import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from '../components/Frida/frida'

const IndexPage = () => (
    <Layout title={'Frida'}>
        <SEO title="aboute" />
        <Hero color='#F5C5D9'>

            <h4>ABOUTE</h4>

            <h1 >Warum wir <Frida></Frida> ins Leben gerufen haben</h1>

        </Hero>
        <Section backgroundColor='#F5C5D9' type='text'>
<div>
            <p >
                Wir zeigen die kuratierten Werke junger Künstler*innen in unseren Online-Galerien auf Social Media und der eigenen Website. Außerdem bringen wir die Werke auf digitale Werbeflächen und Plakatwände in deutschen Städten. Damit schaffen wir die größte Kunstausstellung, die es im öffentlichen Raum je gab.
                </p>

            <p>
                Damit machen wir Kunst für alle sichtbar. Auch für die, die sonst nicht ins Museum gehen. Dadurch wird ein Blick über den Tellerrand ermöglicht – wir bringen Kunst zurück in den Alltag.
                </p>

            <p>
                Vor allem aber bieten wir Künstler*innen in Zeiten von Corona ein zusätzliches Einkommen. Der Erlös ihrer Werke geht zu 100% an sie, der Kauf wird direkt abgewickelt.
                </p>

            <p>
                Frida Kahlo ist eine Stilikone und Vorbild für viele Künstler*innen.
                Ihre Lebensgeschichte steht aber auch für den harten Weg, den
                Künstler*innen, insbesondere Frauen, bis heute in der (Kunst-)welt
                gehen. Gerade zu Zeiten von Corona.
                </p>

            <p>
            Aber wir wollen hier nicht Frida Kahlo besser kennenlernen, sondern alle Künstler, die
bei unserer Aktion mitmachen. Denn es geht um sie und ihre Kunst. Wir
treffen sie auf Deutschlands größter Ausstellung und finden eigene
Lieblingskünstler. Meet your favorite Artist!
                
                </p>
                </div>
        </Section>

       
    </Layout>
)

export default IndexPage
