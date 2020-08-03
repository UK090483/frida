import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./supporter.module.scss"

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
    <div className={`${style.root} ${style.allSupporters}`}>
      {data.allFile.edges.map(logo => (
        <img
          alt={"Logo"}
          key={logo.node.id}
          src={logo.node.childImageSharp.resize.src}
        ></img>
      ))}
    </div>
  )
}
