import React from "react"
import Container from "../container/container"
import Section from "../container/section"
import styled from "styled-components"
import PropTypes from "prop-types"

export default function Hero({ children, backgroundColor, height = "full" }) {
  return (
    <Section type="full" backgroundColor={backgroundColor}>
      <Root height={height}>
        <Container>{children}</Container>
      </Root>
    </Section>
  )
}

const Root = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  min-height: ${({ height }) => (height === "full" ? "100vh" : "75vh;")};

  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 80px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 60px;
  }
`

Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
}
