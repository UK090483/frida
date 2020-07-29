import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const IndexPage = () => (
  <Layout title={"Frida"}>
    <SEO title="about" />
    <Hero backgroundColor="lila">
      <h6>ABOUT</h6>

      <h1>
        Warum wir <Frida></Frida> ins Leben gerufen haben
      </h1>
    </Hero>
    <Section backgroundColor="lila" type="text">
      <div>
        <p>
          Wir zeigen die kuratierten Werke junger Künstler*innen in unserer Online-Galerie und auf Social Media. Außerdem bringen wir die Werke auf digitale Werbeflächen und Plakatwände in deutschen Städten. So schaffen wir die größte Kunstausstellung, die es im öffentlichen Raum je gab.
        </p>
        <br></br>

        <p>
          Damit machen wir Kunst für alle sichtbar. Auch für die, die sonst nicht ins Museum gehen. In Kooperationen mit den Werbeunternehmen Plakatunion, Ströer und HYGH zeigen wir: Kunst statt Werbung. Wir ermöglichen einen Blick über den Tellerrand – wir bringen Kunst zurück in den Alltag.
        </p>
        <br></br>
        <p>
          Vor allem aber bieten wir Künstler*innen in Zeiten von Corona ein zusätzliches Einkommen. Der Erlös der Werke geht zu 100 Prozent in die Unterstützung der Kunstschaffenden. Der Rollout startet im Juli 2020 online, später kommen wir in den öffentlichen Raum.
        </p>
        <br></br>

        <p>
          Frida Kahlo ist eine Stilikone und Vorbild für viele Künstlerinnen. Ihre Lebensgeschichte steht aber auch für den harten Weg, den Künstlerinnen, insbesondere Frauen, bis heute in der (Kunst-)welt gehen. Gerade zu Zeiten von Corona.
        </p>
        <br></br>
        <p>
          Aber wir wollen hier nicht Frida Kahlo besser kennenlernen, sondern alle Künstler*innen, die bei unserer Aktion mitmachen. Denn es geht um sie und ihre Kunst.
        </p>
        <br></br>
        <p>
          Kunstschaffende können ihre Werke unter bei #MeetFrida einreichen, mindestens eins der Werke muss dabei weniger als 500 EUR kosten. Die Ausstellung – digital und analog – wird von einer Jury aus internationalen Kunstexpert*innen kuratiert.
        </p>
        <br></br>
        <p>
          Der Verkauf wird direkt zwischen Künstlerin und Käuferin abgewickelt. Die Erlöse gehen zu 100% in die Unterstützung der Kunstschaffenden.
        </p>
        <br></br>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
