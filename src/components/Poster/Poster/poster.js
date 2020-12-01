import React from "react"
import PosterGrid from "../posterGrid/postergrid"
// import PosterItem from "../PosterItem/posterItem"
import Section from "../../container/section"
// import { useStaticQuery, graphql } from "gatsby"

export default function Poster() {
  // const data = useStaticQuery(graphql`
  //   query posterQuerry {
  //     allFriiidaPoster {
  //       nodes {
  //         artistName
  //         artworkName
  //         imageUrl
  //       }
  //     }
  //   }
  // `)

  return (
    <Section>
      <PosterGrid>
        {/* {data.allFriiidaPoster.nodes.map(posterItem => (
          <PosterItem key={posterItem.id} poster={posterItem}></PosterItem>
        ))} */}
      </PosterGrid>
    </Section>
  )
}
