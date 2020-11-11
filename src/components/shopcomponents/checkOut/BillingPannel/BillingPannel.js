import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import Form from "./Form"
import UiContext from "~context/UiContext"
import Summary from "./Summary"

export default function BillingPannel({ artikel, nextStep, back }) {
  const [isFormValid, setIsFormValid] = useState(false)

  const { requestClientToken } = useContext(UiContext)

  useEffect(() => {
    requestClientToken()
  }, [requestClientToken])

  return (
    <Root>
      <Box>
        <Summary artikel={artikel}></Summary>
      </Box>
      <Box>
        <Form isFormValid={isFormValid} setIsFormValid={setIsFormValid}></Form>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  padding: 0 20px;
  padding-bottom: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    padding: 0 200px;
  }
`
const Box = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`
