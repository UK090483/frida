import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import Section from "../components/container/section"
import Button from "../components/buttons/button"
import { setMouse } from "../components/generic/Mouse/mouseRemote"

const Booking = () => (
  <Layout title={"Booking"}>
    <SEO title="Booking" />
    <Section backgroundColor="lila">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Booking</h1>
          <p>Wegen Corona und so...</p>
        </div>
      </div>

      <div
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
          src="https://app.acuityscheduling.com/schedule.php?owner=21099104"
          title="Termin vereinbaren"
          width="100%"
          height="1200"
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

export default Booking
