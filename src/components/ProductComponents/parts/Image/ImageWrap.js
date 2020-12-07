import React from "react"
import styled from "styled-components"
export default function Image({ children }) {
  return <ImageRoot>{children}</ImageRoot>
}

const ImageRoot = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    padding-right: 20px;
  }
`
