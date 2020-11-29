import React from "react"
import styled from "styled-components"

const Quote = {
  authorName: "Hubertus von Barby",
  content:
    "Geschichten mit Open End: Jonathan Esprester vewrwebt Objekte und Formen zu bedeutungsvollen Szeneien, aus denen sich immer wieder neue Erzälstränge entfalten.",
}

export default function ArtworkQuote({ quote }) {
  const { authorName, content } = Quote

  return <Root></Root>
}

const Root = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.black};
`
