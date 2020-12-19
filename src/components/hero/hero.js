import React from "react"
import Container from "../container/container"
import Section from "../container/section"
import styled from "styled-components"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { getFluidImage } from "../helper/sanityImage"

export default function Hero({
  children,
  backgroundColor,
  height = "full",
  bgImage,
}) {
  return (
    <Section type="full" backgroundColor={backgroundColor}>
      <Root height={height}>
        {bgImage && <BackgroundImage image={bgImage} />}
        <div style={{ zIndex: 1 }}>
          <Container>{children}</Container>
        </div>
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

const Fimage = styled.div`
  position: absolute;
  /* z-index: 1; */
  right: 0;
  width: 90vw;
  opacity: 0.7;
  @media ${({ theme }) => theme.device.tablet} {
    width: 80vw;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 60vw;
  }
`

Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
}

const BackgroundImage = ({ image }) => {
  const fluid = getFluidImage(image.asset._ref, { maxWidth: 700 })
  return (
    <Fimage>
      <Img fluid={fluid} />
    </Fimage>
  )
}
