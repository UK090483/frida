import React from "react"
import styled from "styled-components"
import { GoCreditCard, GoMailRead } from "react-icons/go"
import Icon from "~components/lib/Icon"

export default function PaymentHelp() {
  return (
    <Root>
      <p>Du hast eine Frage? Wir helfen Dir gerne weiter!</p>
      <a href="mailto:name@email.com">name@email.com</a>
      <FlexWrap>
        <Container>
          <Icon icon={GoCreditCard} />
          <p>Sichere Zahlung per Kreditkarte oder PayPal</p>
        </Container>
        <Container>
          <Icon icon={GoMailRead} />

          <p>Versandt erfolgt direkt durch die Künstler</p>
        </Container>
      </FlexWrap>
    </Root>
  )
}

const Root = styled.div`
  p {
    font-size: 20px;
    padding: 0;
  }
`

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    padding: 0 20px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`

// const Icon = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: ${({ theme }) => theme.colors.pink};
// `
// const IconWrap = styled.div`
//   min-width: 60px;
//   min-height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.colors.pink};
// `
