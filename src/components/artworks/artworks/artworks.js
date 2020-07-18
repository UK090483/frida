import React, { useEffect, useState, useRef } from 'react';


import Filter from '../filter/filter';
import Slide from 'react-reveal/Slide';
import Header from '../../header/header';
import Kreutz from "../../../assets/Menu_Kreutz.svg";
import SingleArtwork from '../singleArtwork/singleArtwork';
import Section from '../../container/section';
import Button from '../../buttons/button';
import { useStaticQuery, graphql } from "gatsby";
import ArtworsContainer from './artworksContainer';
import Frida from '../../frida/frida';
import getArtwork from '../helper/getArtwork';

import style from './artworks.module.scss'

export default function Artworks({ postCount = 9, filter = false, infinite = false }) {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allFridaArtwork {
      edges {
        node {
          id
          medium
          stil
          width
          price
          slug
          artworkName
          artistName
          artistDescription
          artworkDescription
          availability
          height
          artistEmail
          images {
            local {
              childImageSharp {
                fluid(maxWidth: 600, quality: 60) {
                  src
                  srcSet
                }
                original {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
  
  `)

  const [open, setOpen] = useState(false);
  const [artwork, setArtwork] = useState(null);
  const [filert, setFElements] = useState(null);


  function getArtworks() {
    let a = []
    data.allFridaArtwork.edges.forEach((artwork) => {

      let _artwork = artwork.node
      let res = getArtwork(_artwork)

      a.push(res)
    })
    return a
  }



  const artworks = getArtworks();
  const bodyRef = useRef()


  useEffect(() => {
    bodyRef.current = document.querySelector('html')

  }, []);

  const handleClick = (artwork) => {
    setArtwork(artwork)
    setOpen(true)
    bodyRef.current.style.overflow = 'hidden'
  }

  const handleCloseClick = () => {
    setArtwork(null)
    setOpen(false)
    bodyRef.current.style.overflow = 'auto'
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <React.Fragment>
      <Section type={'full'} >
        {!filter && <Section >
          <h3><Frida text={'NewArtists'} textColor='#F5C5D9'></Frida></h3>
        </Section >}
        {filter && <Filter artworks={artworks} setFElements={setFElements}></Filter>}
        <div className={style.root}>
          <Slide mountOnEnter={true} unmountOnExit={true} right when={open} duration={500}>
            <div className={style.singleRoot} style={{ pointerEvents: open ? 'auto' : 'none' }}>
              <Header title={artwork ? artwork.artistName : ''} color='lila' link={false}>


                <a style={{ width: 40, pointerEvents: 'all' }} onClick={handleCloseClick}><Kreutz></Kreutz></a>
              </Header>
              {artwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
            </div>
          </Slide>



          {/* <div ref={gridRef}>
            {initPosts.map((artwork, index) => (
              <Artwork key={artwork.node.id} artwork={artwork} handleLoaded={handleLoaded} handleClick={handleClick} index={index}></Artwork>
            ))}
          </div> */}
          <ArtworsContainer artworks={filert || artworks} handleClick={handleClick} infinite={infinite}></ArtworsContainer>



        </div>
      </Section >
      {!filter && <Section  >
        <div style={{ width: 'fit-content', marginLeft: 'auto', padding: '30px 0' }} >
          <Button label={'mehr Kunst'} link={'/ausstellung/'}></Button>
        </div>
      </Section>}
    </React.Fragment>
  )

}