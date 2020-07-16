import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Hero from '../hero/hero';
import Frida from '../Frida/frida';
import Stoerer from "../../assets/Störer_Participate.svg";
import style from './startHero.module.scss';
import Button from '../buttons/button';
import { Link } from "gatsby";
import Section from '../container/section';

export default function StartHero() {

  const data = useStaticQuery(graphql`
  query startHeroQuery {
    allSanityArtwork {
      nodes {
        image {
          asset {
            fluid(maxWidth: 150) {
              src
            }
          }
        }
      }
    }
  }
  `)


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  const allImages = data.allSanityArtwork.nodes
  const [images, setImages] = useState([]);


  useEffect(() => {
    const int = setTimeout(() => {
      const nextImages = [...images]
      if (nextImages.length > 10) {
        nextImages.shift()
      }

      let src = getImageWithlocal()

      const NextImage = {
        key: Date.now(),
        zIndex: (getRandomInt(0, 2) > 0) ? 1 : 0,
        src: src,
        left: `${getRandomInt(0, 100)}vw`
      }
      if (src) {
        nextImages.push(NextImage)
      }
      setImages(nextImages)


    }, 500)
    return () => {
      clearTimeout(int);
    };
  }, [images, setImages]);

  function getImageWithlocal() {

    let item = allImages[getRandomInt(0, allImages.length)].image
    return item.asset.fluid.src
  }



  return (

    <React.Fragment>

      <div className={style.root} >

        <div className={style.text}>
          <h4 >500 WERKE, 200 AUSSTELLUNGSORTE, 1 HASHTAG.</h4>
          <h1 ><Frida></Frida>-Deutschlands
        größte Kunstschau digital und analog</h1>
          <Button label={'Mehr Erfahren'} link={'/unterstützen/'}></Button>
        </div>

        {images.map((image) => {
          return <img className={style.image} style={{ left: image.left, zIndex: image.zIndex }} key={image.key} src={image.src} ></img>
        })}


      </div >

      <div className={style.stoerer}>
        <Link to="/unterstützen/">
          <Stoerer></Stoerer>
        </Link>
      </div>

      <Section>
        <div className={style.stoererSpacer}></div>
      </Section>

    </React.Fragment>

  )

}