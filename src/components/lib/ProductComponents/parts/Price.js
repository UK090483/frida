import React from "react"
import styled from "styled-components"

export default function Price({ price }) {
  return <Root>{price}€</Root>
}

const Root = styled.div`
  margin-bottom: 20px;
  font-size: 1.9em;
  font-weight: 800;
`
