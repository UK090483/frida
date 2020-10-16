import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./supporter.module.scss"
// import Ticker from "react-ticker"
import Marquee from "react-marquee-slider"

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
    <Marquee velocity={80}>
      {data.allFile.edges.map(item => {
        return (
          <div key={item.node.id} className={style.logoItem}>
            <img
              style={{ maxWidth: "100%" }}
              alt={"Logo"}
              src={item.node.childImageSharp.resize.src}
            ></img>
          </div>
        )
      })}
    </Marquee>
  )
}
