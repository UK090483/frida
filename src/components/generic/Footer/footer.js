import React from "react"
import Section from "../../container/section"
import BigButton from "../../buttons/bigButton/bigButton"
import TextFlow from "./TextFlow/textFlow"
import AllSupporter from "../../Supporter/allSupporter"
import Infos from "./Infos/infos"
import styled from "styled-components"
import NewsLetter from "../../newsletter/newsletter"
export default function Footer({ title }) {
  return (
    <div>
      {title !== "OurSupporters" && (
        <React.Fragment>
          <Section backgroundColor="pink">
            <div style={{ padding: "200px 0 50px 0" }}>
              <h6>SUPPORTER</h6>
              <h2>
                Ohne Euch wäre diese Aktion nicht möglich.
                <span style={{ color: "white" }}> Danke.</span>
              </h2>
            </div>
          </Section>
          <Section backgroundColor="pink" type={"full"}>
            <AllSupporter></AllSupporter>
          </Section>
          <TextFlow></TextFlow>
        </React.Fragment>
      )}
      <NewsLetter />
      <Section backgroundColor="red">
        <div style={{ padding: "50px 0" }}>
          <GetInTouch>GET IN TOUCH WITH FRIDA</GetInTouch>
        </div>
      </Section>
      <BigButton></BigButton>
      <Infos />
    </div>
  )
}

const GetInTouch = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`
