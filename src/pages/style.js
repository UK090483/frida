import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

import styled from "styled-components"

const StylePage = () => (
  // <Layout title={"MeetCollectors"}>
  //   <SEO title="Teilnehmen" />

  <Section backgroundColor="red">
    <div style={{ paddingTop: 300, paddingBottom: 100 }}>
      <H1>
        H1 <Frida />
      </H1>
      {/* <h2>
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
          Lorem ipsum dolor sit amet, <Frida /> consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p> */}
    </div>
  </Section>
  // </Layout>
)
export default StylePage

const data = {
  min: {
    vp: "320",
    fontsize: "50",
  },
  max: {
    vp: "1920",
    fontsize: "80",
  },
}

const fluidFont = (min_font, max_font, min_vp, max_vp) => {
  return `
  font-size: ${min_font}px;
  @media screen and (min-width: ${min_vp}px) {
    font-size: calc(
      ${min_font}px + ${max_font - min_font} *
        ((100vw - ${min_vp}px) / (${max_vp - min_vp}))
    );
  }
  @media screen and (min-width: ${max_vp}px) {
    font-size: ${max_font}px;
  }
  `
}

const H1 = styled.h1`
  ${fluidFont(30, 100, 320, 1920)}
`
