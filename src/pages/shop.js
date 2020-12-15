import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Products from "../components/Products/Product/product"
import Hero from "../components/hero/hero"

const Shop = props => (
  <Layout title={"FridaShop"} initialColor={"pink"}>
    <SEO title="Shop" path={props.location.pathname} />
    <Hero backgroundColor="lila" height={"medium"}>
      <h1>
        Alles was das Herz echter Art Lover begehrt – auch bei kleinerem Budget.
      </h1>
      <p style={{ paddingTop: 20, paddingBottom: 20 }}>
        Die neuen Produkte von MeetFrida bringen Kunst in den deinen Alltag. Als
        Geschenk oder für dich selbst – Fridas Shop bietet dir spannende
        Kunsterlebnisse für unter 100 Euro! Die Erlöse gehen an das Projekt
        MeetFrida und unterstützen weitere Aktionen zur Kunstförderung
      </p>
    </Hero>

    <Products />
  </Layout>
)

export default Shop
