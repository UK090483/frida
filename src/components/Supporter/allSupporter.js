import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./supporter.module.scss"

const AllSuporters = () => {
  const data = useStaticQuery(graphql`
  query AllSupportersQuery {
    allFile(filter: {relativeDirectory: {regex: "/AllSupporter/\\w+/"}}) {
      edges {
        node {
          childImageSharp {
            resize(width: 500) {
              src
            }
          }
        }
      }
    }
  }
  
  `)

  return (
    <div className={`${style.root} ${style.allSupporters}`}>
      <img
        alt={"Logo"}
        src={data.allFile.edges[6].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[5].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[4].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[0].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[1].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[3].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[2].node.childImageSharp.resize.src}
      ></img>
      <img
        alt={"Logo"}
        src={data.allFile.edges[7].node.childImageSharp.resize.src}
      ></img>
    </div>
  )
}

export default AllSuporters
