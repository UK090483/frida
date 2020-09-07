import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./supporter.module.scss"

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
    query KooperationQuery {
      allFile(
        filter: { relativeDirectory: { eq: "AllSupporter/kooperation" } }
      ) {
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
