import React from "react"
import Marquee from "react-marquee-slider"
import styled from "styled-components"

export default function Banner() {
  return (
    <Root>
      <Marquee velocity={80}>
        {[<Text key={"fist"}>Hinz&Kunzt – Straßen-KunztEdition </Text>]}
      </Marquee>
    </Root>
  )
}

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.pink};
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 0;
  margin: 0;
  padding-right: 40px;
  font-size: 20px;
`
