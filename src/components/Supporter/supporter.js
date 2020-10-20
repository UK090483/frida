import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const Image = () => {
  const data = useStaticQuery(graphql`
    query SupporterQuery {
      allFile(filter: { relativeDirectory: { eq: "AllSupporter/supporter" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Root>
      {data.allFile.edges.map(item => {
        return (
          <img
            key={item.node.id}
            alt={"Logo"}
            srcSet={item.node.childImageSharp.fluid.srcSet}
          ></img>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  img {
    width: 50%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 33.33%;
    }
  }
`

export default Image
