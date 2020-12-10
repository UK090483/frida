import React from "react"
import styled from "styled-components"
export default function InfoRoot({ children }) {
  return <Root>{children}</Root>
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 0 20px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    padding-top: 0;
    padding-left: 20px;
  }
`
