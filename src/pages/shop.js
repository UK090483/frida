import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Products from "../components/Products/Product/product"
import Hero from "../components/hero/hero"

const Shop = props => (
  <Layout title={"FridaShop"} initialColor={"pink"}>
    <SEO title="Shop" path={props.location.pathname} />
    <Hero backgroundColor="lila" height={"medium"}>
      <h1>Shop Header Text ???</h1>
      <p style={{ paddingTop: 20, paddingBottom: 20 }}>Bli Bla Blup</p>
    </Hero>

    <Products />
  </Layout>
)

export default Shop
