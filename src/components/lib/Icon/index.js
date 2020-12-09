import React from "react"
import styled from "styled-components"

const sizes = {
  s: 40,
  m: 60,
  l: 80,
}

export default function Icon({ icon, onClick, size = "m" }) {
  return (
    <IconWrap onClick={onClick} customsize={size}>
      <IconInner as={icon} customsize={size} />
    </IconWrap>
  )
}
const IconInner = styled.div`
  width: ${({ customsize }) => sizes[customsize] / 2 + "px"};
  height: ${({ customsize }) => sizes[customsize] / 2 + "px"};
  background-color: ${({ theme }) => theme.colors.green};
`
const IconWrap = styled.div`
  width: ${({ customsize }) => sizes[customsize] + "px"};
  height: ${({ customsize }) => sizes[customsize] + "px"};
  min-width: ${({ customsize }) => sizes[customsize] + "px"};
  min-height: ${({ customsize }) => sizes[customsize] + "px"};
  max-width: ${({ customsize }) => sizes[customsize] + "px"};
  max-height: ${({ customsize }) => sizes[customsize] + "px"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green};
`
