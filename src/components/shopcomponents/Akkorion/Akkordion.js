import React from "react"
import styled from "styled-components"

export function Akkordion({ children }) {
  return <Root>{children}</Root>
}
const AHeight = 800
const Root = styled.div`
  width: 100%;
  height: ${AHeight + "px"};
`

export function AkkordionItem({ children, active, onChange, name, label }) {
  return (
    <ItemRoot onClick={() => onChange(name)}>
      <ItemPannel>
        <h6>{label}</h6>
      </ItemPannel>
      {active && <ItemChildren>{children}</ItemChildren>}
    </ItemRoot>
  )
}

const ItemRoot = styled.div``
const ItemPannel = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding-left: 20px;
  h6 {
    margin: 0;
  }
`
const ItemChildren = styled.div`
  height: 520px;
`
