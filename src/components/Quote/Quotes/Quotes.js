import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Quote from "./Quote"
import { Carousel } from "../../lib/Carousel"

export default function Quotes() {
  const data = useStaticQuery(graphql`
    query quotesQuerry {
      allFridaQuote {
        nodes {
          artworkImage
          id
          author
          subtitle
          quote
          image
        }
      }
    }
  `)

  return (
    <Root data-color={"black"}>
      <Carousel>
        {data.allFridaQuote.nodes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))}
      </Carousel>
    </Root>
  )
}

const Root = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.colors.black};
`
