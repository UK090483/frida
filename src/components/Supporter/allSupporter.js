import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./supporter.module.scss"
import Ticker from "react-ticker"

const AllSuporters = () => {
  const data = useStaticQuery(graphql`
  query AllSupportersQuery {
    allFile(filter: {relativeDirectory: {regex: "/AllSupporter/\\w+/"}}, sort: {order: ASC, fields: childImageSharp___original___src}) {
      edges {
        node {
          childImageSharp {
            resize(width: 500) {
              src
            }
          }
        id
        }
      }
    }
  }
  
  
  `)

  return <PureAllSupporters data={data} />
}

export default AllSuporters

const PureAllSupporters = ({ data }) => {
  return (
    <Ticker speed={20}>
      {({ index }) => {
        let i = index % data.allFile.edges.length
        return (
          <div className={style.logoItem}>
            <img
              alt={"Logo"}
              key={data.allFile.edges[i].node.id}
              src={data.allFile.edges[i].node.childImageSharp.resize.src}
            ></img>
          </div>
        )
      }}
    </Ticker>
  )
}
