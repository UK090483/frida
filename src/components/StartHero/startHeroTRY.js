// import React, { useEffect, useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Frida from "../frida/frida"
// import style from "./startHero.module.scss"
// import Button from "../buttons/button"
// import Img from "gatsby-image"
// import { getFluidGatsbyImage } from "gatsby-storyblok-image"

// export default function StartHero({ children }) {
//   const data = useStaticQuery(graphql`
//     query startHeroQuery {
//       storyQL {
//         ArtworkItems(per_page: 100) {
//           items {
//             content {
//               Image {
//                 filename
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
//   }

//   const allImages = data.storyQL.ArtworkItems.items

//   function transformImage(image, option) {
//     var imageService = "https://img2.storyblok.com/"
//     var path = image.replace("https://a.storyblok.com", "")
//     return imageService + option + "/" + path
//   }

//   return (
//     <React.Fragment>
//       <div className={style.root}>
//         <div className={style.text}>
//           {children ? (
//             children
//           ) : (
//             <React.Fragment>
//               <h6>
//                 Neue Positionen kennenlernen, Kunst in ganz Deutschland sehen
//                 und dabei Kunstschaffende unterstützen.
//                 {/* Neue Werke, wechselnde Ausstellungsorte, 1 Plattform. */}
//               </h6>
//               <h1>
//                 <Frida /> – Deutschlands größte Outdoor- und Online-Gallery für
//                 junge Kunst
//                 {/* Deutschlandweite Kunstschau und Online-Galerie – <Frida></Frida> */}
//               </h1>
//               <Button
//                 label={"Mehr Erfahren"}
//                 link={"/ausstellung/"}
//                 backgroundColor={"lila"}
//               />
//             </React.Fragment>
//           )}
//         </div>

//         {allImages.map((image, index) => {
//           const zIndex = getRandomInt(0, 2) > 0 ? 1 : 0
//           const left = `${getRandomInt(0, 100)}vw`
//           const delay = `${(index + 1) * 0.6}s`
//           const last = allImages.length === index + 1
//           const fluidProps = getFluidGatsbyImage(image.content.Image.filename, {
//             maxWidth: 150,
//             quality: 60,
//             smartCrop: false,
//             useBase64: false,
//           })

//           return (
//             <div
//               key={image.content.Image.filename}
//               className={style.image}
//               style={{ left: left, zIndex: zIndex, animationDelay: delay }}
//             >
//               <Img alt={"flying"} fluid={fluidProps} />
//             </div>
//           )
//         })}
//       </div>
//     </React.Fragment>
//   )
// }
