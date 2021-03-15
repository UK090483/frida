import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Products from "../components/Products/Product/product"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const Shop = props => (
  <Layout title={"FridasShop"} initialColor={"pink"}>
    <SEO title="Shop" path={props.location.pathname} />
    <Hero backgroundColor="lila" height={"medium"}>
      <h6>SHOP</h6>
      <h1>
        Alles was das Herz echter Art Lover begehrt – auch bei kleinerem Budget.
      </h1>
    </Hero>

    <Section type={"text"}>
      <div style={{ paddingTop: 100 }}>
        <p>
          <Frida textColor={"black"} /> bringt Kunst in Deinen Alltag. Als
          Geschenk oder für Dich selbst – Fridas Shop bietet Dir spannende
          Kunsterlebnisse für unter 150 Euro! Die Erlöse kommen dem Projekt
          zugute und unterstützen weitere Aktionen zur Kunstförderung.
        </p>
      </div>
    </Section>

    <Products />
  </Layout>
)

export default Shop
