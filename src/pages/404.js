import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Section from "../components/container/section"
import Button from "../components/buttons/button"

const NotFoundPage = () => (
  <Layout title={"404"}>
    <SEO title="404: Not found" />
    <Section backgroundColor="lila">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... </p>

          <Button label="zur Ausstellung" link="/ausstellung/" />
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
