import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Filter from "./filter/filter"
import Section from "../container/section"
import Button from "../buttons/button"
import { useStaticQuery, graphql } from "gatsby"
import ArtworsContainer from "./artworksContainer/artworksContainer"
import Frida from "../frida/frida"

function Artworks({ filter = false, infinite = false }) {
  const [filert, setFElements] = useState(null)
  const artworks = usePreparedData()

  return (
    <React.Fragment>
      <div id={"filter"} style={{ transform: "translateY(-10vh)" }}></div>
      <Section type={"full"}>
        {!filter && (
          <Section>
            <h3>
              <Frida text={"NewArtists"} textColor="#F5C5D9"></Frida>
            </h3>
          </Section>
        )}
        {filter && (
          <Filter artworks={artworks} setFElements={setFElements}></Filter>
        )}
        <Root>
          <ArtworsContainer
            artworks={filert || artworks}
            infinite={infinite}
          ></ArtworsContainer>
        </Root>
      </Section>
      {!filter && (
        <Section>
          <div
            style={{
              width: "fit-content",
              margin: "0 auto",
              padding: "30px 0",
            }}
          >
            <Button label={"mehr Kunst"} link={"/ausstellung/"}></Button>
          </div>
        </Section>
      )}
    </React.Fragment>
  )
}

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`

Artworks.propTypes = {
  filter: PropTypes.bool,
  infinite: PropTypes.bool,
}

function usePreparedData() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFridaArtwork(sort: { fields: ransortNumber, order: DESC }) {
        nodes {
          uuid
          slug
          artistName
          artworkName
          availability
          height
          price
          stil
          medium
          banner
          image {
            imageAssetId
          }
        }
      }
    }
  `)

  return data.allFridaArtwork.nodes
}
export default Artworks
