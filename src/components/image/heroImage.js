import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from './heroImage.module.scss'

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
    query  {
        allFile(filter: {relativePath: {eq: "team-image.jpg"}}) {
          edges {
            node {
              id
              childImageSharp {
                resize(width: 1200, jpegQuality: 100) {
                  src
                }
              }
            }
          }
        }
      }
  `)


    return (
        <div className={style.root} style={{ backgroundImage: `url(${data.allFile.edges[0].node.childImageSharp.resize.src})` }}>

            <div className={style.text} >
                <h4>KONTAKT</h4>
                <h1 >Meet the  <span style={{ color: 'white' }}>Team</span></h1>
            </div>

        </div>
    )
}

export default Image
