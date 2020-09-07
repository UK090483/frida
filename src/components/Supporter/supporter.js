import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import style from "./supporter.module.scss"

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
    <div className={style.root}>
      {data.allFile.edges.map(item => (
        <img
          key={item.node.id}
          alt={"Logo"}
          srcSet={item.node.childImageSharp.fluid.srcSet}
        ></img>
      ))}
    </div>
  )
}

export default Image
