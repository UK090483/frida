import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const IndexPage = () => (
  <Layout title={"Frida"}>
    <SEO title="aboute" />
    <Hero backgroundColor="lila">
      <h4>ABOUT</h4>

      <h1>
        Warum wir <Frida></Frida> ins Leben gerufen haben
      </h1>
    </Hero>
    <Section backgroundColor="lila" type="text">
      <div>
        <p>
          Wir zeigen die kuratierten Werke von Künstler*innen in unserer
          Online-Galerie, auf Social Media und der eigenen Website. Außerdem
          bringen wir die Werke auf Plakatwände und digitale Werbeflächen in
          deutschen Städten. So schaffen wir die größte Kunstschau, die es
          im öffentlichen Raum je gab.
        </p>
        <br></br>

        <p>
          Damit machen wir Kunst für alle sichtbar. Auch für die, die sonst
          nicht ins Museum gehen. Wir ermöglichen einen Blick über den
          Tellerrand – wir bringen Kunst zurück in den Alltag. Vor allem aber
          bieten wir Künstler*innen ein zusätzliches
          Einkommen. Der Rollout startet online, später kommen wir in
          den öffentlichen Raum.
        </p>
        <br></br>
        <p>
          Frida Kahlo ist eine Stilikone und Vorbild für viele Künstler*innen.
          Ihre Lebensgeschichte steht aber auch für den harten Weg, den
          Künstler*innen, insbesondere Frauen, bis heute in der (Kunst-)welt
          gehen.
        </p>
        <br></br>

        <p>
          Aber wir wollen hier nicht Frida Kahlo besser kennenlernen, sondern
          alle Künstler*innen, die bei unserer Aktion mitmachen. Denn es geht um
          sie und ihre Kunst.
        </p>
        <br></br>
        <p>
          Kunstschaffende können ihre Werke unter dem Hashtag #MeetFrida / bei
          #MeetFrida einreichen. Die Ausstellung – digital und analog – wird von
          einer Jury aus internationalen Kunstexpert*innen kuratiert.
        </p>
        <br></br>
        <p>
          Der Verkauf wird direkt auf unserer Online-Galerie abgewickelt. Die
          Erlöse gehen zu 100% an die Kunstschaffenden.
        </p>
        <br></br>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
