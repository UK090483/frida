import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Hero from '../hero/hero';

import style from './startHero.module.scss';

export default function StartHero() {

    const data = useStaticQuery(graphql`
    query startQuery {
        allArtworks {
          edges {
            node {
              image {
                medium
              }
            }
          }
        }
      }
  `)

    const images = data.allArtworks.edges

    console.log(images)

    return (
        <div className={style.root} >


            <Hero backgroundColor='lila' >


                <h1>bla</h1>
            </Hero>
        </div>
    )

}