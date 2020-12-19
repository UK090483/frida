import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Products from "../components/Products/Product/product"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"

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
          Die neuen Produkte von MeetFrida bringen Kunst in den deinen Alltag.
          Als Geschenk oder für dich selbst – Fridas Shop bietet dir spannende
          Kunsterlebnisse für unter 100 Euro! Die Erlöse gehen an das Projekt
          MeetFrida und unterstützen weitere Aktionen zur Kunstförderung
        </p>
      </div>
    </Section>

    <Products />
  </Layout>
)

export default Shop
