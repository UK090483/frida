import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Section from "../components/container/section"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import Hero from "../components/hero/hero"

const Booking = () => {
  /* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
  return (
    <Layout title={"PopUpArtFair"}>
      <SEO title="PopUpArtFair" />
      <Hero backgroundColor="lila" height={"medium"}>
        <h1>Terminbuchung</h1>
        <br />
        <br />
        <p>
          Wir sind froh, trotz der neuen Corona-Bestimmungen die Popup Art Fair
          stattfinden lassen zu können. Um den Regelungen zu entsprechen, können
          nur 30 Personen zeitgleich in der Popup Galerie sein. Wir bieten
          deshalb für Ihren Besuch an jedem Tag Timeslots von je einer Stunde
          an, beginnend zu jeder vollen Stunde. Bitte melden Sie sich unten für
          Ihren Wunschzeitraum an!
        </p>
      </Hero>
      <Section backgroundColor="lila">
        <div
          role="application"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
          }}
          onMouseEnter={() => {
            setMouse("hide", true)
          }}
          onMouseLeave={() => {
            setMouse("hide", false)
          }}
        >
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=21099439"
            title="Termin vereinbaren"
            width="100%"
            height="1700"
            frameBorder="0"
          ></iframe>
          <script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
          ></script>
        </div>
        <div></div>
      </Section>
    </Layout>
  )
}

export default Booking
