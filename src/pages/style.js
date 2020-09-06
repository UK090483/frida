import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"
import useFitText from "../hooks/useFitText"

const IndexPage = () => {
  const { ref } = useFitText()

  return (
    <Layout title={"MeetCollectors"}>
      <SEO title="Teilnehmen" />

      <Section backgroundColor="red">
        <div style={{ paddingTop: 300, paddingBottom: 100 }}>
          <h1>
            H1 <Frida />
          </h1>
          <h2>
            H2 <Frida />
          </h2>
          <h3>
            H3 <Frida />
          </h3>
          <h4>
            H4 <Frida />
          </h4>
          <h5>
            H5 <Frida />
          </h5>
          <h6>
            H6 <Frida />
          </h6>

          <p>
            Lorem ipsum dolor sit amet, <Frida /> consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </Section>
      <h1
        ref={ref}
        style={{
          fontSize: 20,
          height: 40,
          width: "10%",
          border: "red solid 1px",
          whiteSpace: "nowrap",
        }}
      >
        Loremipdfkdffglklkfgklk
      </h1>
    </Layout>
  )
}

export default IndexPage
