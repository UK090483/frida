import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Hero from "../components/hero/hero"
import Artworks from "../components/artworks"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const Ausstellung = props => {
  const { location } = props

  return (
    <Layout title={"NewArtists"} initialColor={"pink"}>
      <SEO title="Ausstellung" path={location.pathname} />
      <Hero backgroundColor="lila">
        <h6>ONLINE GALLERY</h6>
        <h2>
          Entdeckt Kunst, die Ihr liebt. Und kauft direkt von unseren
          Künstler*innen.
        </h2>
      </Hero>
      <Section type={"text"}>
        <div style={{ paddingTop: 100 }}>
          <p>
            <Frida textColor={"black"} /> zeigt neue Positionen junger
            Künstler*innen aus Deutschland und Europa in Malerei, Fotografie und
            Skulptur. Alle Werke sind sorgfältig kuratiert und gemeinsam mit
            unseren Künstlern ausgewählt. Hier findet Ihr Kunst, die Ihr liebt –
            in allen Preiskategorien.
          </p>
        </div>
      </Section>
      <Artworks filter={true} infinite={true}></Artworks>
    </Layout>
  )
}

export default Ausstellung
