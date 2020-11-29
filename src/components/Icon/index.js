import React from "react"
import styled from "styled-components"

export default function Icon({ icon, onClick }) {
  return (
    <IconWrap onClick={onClick}>
      <IconInner as={icon} />
    </IconWrap>
  )
}
const IconInner = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.pink};
`
const IconWrap = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pink};
`
