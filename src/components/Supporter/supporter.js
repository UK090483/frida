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

const Image = () => {
  const data = useStaticQuery(graphql`
    query SupporterQuery {
        allFile(filter: {relativeDirectory: {eq: "AllSupporter/supporter"}}) {
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
      <img srcSet={data.allFile.edges[0].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[1].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[2].node.childImageSharp.fluid.srcSet}></img>
    </div>

  )

  // return 
}

export default Image
