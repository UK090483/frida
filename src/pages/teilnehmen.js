import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
// import Embet from "../components/embet/embet"
import Button from '../components/buttons/button'
import TeilnehmennCTA from '../components/teilnemenCTA/teilnemenCta'


const IndexPage = () => (
  <Layout title={"Collectors"}>
    <SEO title="Teilnehmen" />
    <Hero backgroundColor="red">
      <h6>TEILNEHMEN</h6>
      <h2 className={`text-white`}>
        Open Call: <br></br>Mitmachen und Deine Kunst in ganz Deutschland zeigen
      </h2>
      {/* <h2 className={`text-lila`}>
        Submissions open 15 June-Deadline 1 August
      </h2> */}
    </Hero>
    <Section type={"text"} backgroundColor="red">
      <p style={{ paddingTop: 100, paddingBottom: 100 }}>
        Wir organisieren Deutschlands größte Ausstellung #MeetFrida.
        Dafür bringen wir Kunst vom digitalen in den öffentlichen Raum – ein Novum.
        Wir nutzen Plakatflächen in deutschen Städten, um Deine Kunst auszustellen.
        Und zeigen dort Kunst statt Werbung: Wer deine Arbeit mag, kann sie an Ort und Stelle in unserer Online-Galerie kaufen.
        Hier lädst du deine Werke hoch, stellst sie aus und findest neue Käufer*innen.
        Du bestimmst den Preis, 100 Prozent davon gehen an Dich. Teilnahmekosten gibt es nicht.
        <br />
        <br />
        #MeetFrida soll die Welt bunter und schöner machen.
         Und vor allem: #MeetFrida soll Dich und deine Arbeit unterstützen.
         Deine Werke bekommen die Aufmerksamkeit, die sie verdienen – auch von Menschen, mit denen Du sonst nicht in Berührung kommst.
         Denn alle Künstlerinnen werden öffentlich ausgestellt.
         Das garantieren wir mit digitalen Werbeplakaten, die ständig aktualisiert werden. Internationale Expertinnen kuratieren unsere Ausstellung.
         <br />
        <br />

         Bewirb dich jetzt und erreiche Tausende Menschen in ganz Deutschland!
         <br />

      </p>
    </Section>
    <Section type={"text"} backgroundColor="red">

      <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button type={'externalLink'} label={'Jetzt teilnehmen'} link={"https://form.jotform.com/201885178999377"} backgroundColor={'allwhite'} />
      </div>
    </Section>
    <Section type={"text"} backgroundColor="red">
      <p style={{ paddingTop: 100 }}>
        Du willst Teil von Deutschlands größter Ausstellung werden? Dann musst Du eine der folgenden Bedingungen erfüllen:
      </p>
      <ul style={{ paddingBottom: 100 }}>
        <li>Du hast ein abgeschlossenes Kunststudium.</li>
        <li>Du arbeitest seit mindestens drei Jahren als Kunstschaffende*r.</li>
        <li>Oder Du hattest schon mindestens zwei Ausstellungen.</li>
      </ul>

      <p>  Zeig uns die Werke, die du bei #MeetFrida ausstellen und verkaufen willst und sei gespannt auf die Rückmeldung der Kurator*innen.  </p>

      <ul style={{ paddingBottom: 100, marginBottom: 0 }}>
        <li>Du kannst fünf Arbeiten einreichen.</li>
        <li>Du bestimmst die Preise.</li>
        <li>Eines der Werke muss weniger als 500 Euro kosten.</li>
      </ul>


    </Section>

    {/* <Section type={"text"} backgroundColor="red">

      <div style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button type={'externalLink'} label={'Jetzt mitmachen'} link={"https://form.jotform.com/201885178999377"} backgroundColor={'allwhite'} />
      </div>
    </Section> */}
    <TeilnehmennCTA></TeilnehmennCTA>

  </Layout >
)

export default IndexPage
