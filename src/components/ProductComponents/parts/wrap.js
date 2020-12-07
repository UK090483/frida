import React from "react"
import styled from "styled-components"
export default function Wrap({ children }) {
  return <Root>{children}</Root>
}

const Root = styled.div`
  padding: 100px 20px 60px 20px;
  position: relative;

  min-height: 650px;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    height: calc(100vh - 130px);
    height: 100vh;
    /* padding: 100px 30px 30px 30px; */
  }
`
