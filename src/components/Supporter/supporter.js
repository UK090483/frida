import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import style from "./supporter.module.scss"

const Image = () => {
  const data = useStaticQuery(graphql`
    query SupporterQuery {
      allFile(filter: { relativeDirectory: { eq: "AllSupporter/supporter" } }) {
        edges {
          node {
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
    <div className={style.root}>
      <img
        alt={"Logo"}
        srcSet={data.allFile.edges[0].node.childImageSharp.fluid.srcSet}
      ></img>
      <img
        alt={"Logo"}
        srcSet={data.allFile.edges[1].node.childImageSharp.fluid.srcSet}
      ></img>
      <img
        alt={"Logo"}
        srcSet={data.allFile.edges[2].node.childImageSharp.fluid.srcSet}
      ></img>
      <img
        alt={"Logo"}
        srcSet={data.allFile.edges[3].node.childImageSharp.fluid.srcSet}
      ></img>
      <img
        alt={"Logo"}
        srcSet={data.allFile.edges[4].node.childImageSharp.fluid.srcSet}
      ></img>
    </div>
  )
}

export default Image
