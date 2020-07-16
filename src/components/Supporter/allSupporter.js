import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from './supporter.module.scss'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const AllSuporters = () => {
  const data = useStaticQuery(graphql`
  query AllSupportersQuery {
    allFile(filter: {relativeDirectory: {regex: "/AllSupporter/\\w+/"}}) {
      edges {
        node {
          childImageSharp {
            resize(width: 200) {
              src
            }
          }
        }
      }
    }
  }
  
  `)



  return (

    <div className={style.root}>
      <img src={data.allFile.edges[1].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[0].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[2].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[3].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[4].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[5].node.childImageSharp.resize.src}></img>
      <img src={data.allFile.edges[6].node.childImageSharp.resize.src}></img>

    </div>

  )


}

export default AllSuporters
