import React, { useEffect, useState, useRef } from 'react';
import Artwork from '../artwork/artwork';

import Filter from '../filter/filter';
import MagicGrid from "magic-grid";
import Slide from 'react-reveal/Slide';
import Header from '../../header/header';
import Kreutz from "../../../assets/Menu_Kreutz.svg";
import SingleArtwork from '../singleArtwork/singleArtwork';
import Section from '../../container/section';
import Button from '../../buttons/button';
import { useStaticQuery, graphql } from "gatsby"

import style from './artworks.module.css'

export default function Artworks({ postCount = 9, filter = false }) {


    const adata = useStaticQuery(graphql`
     query MyQuery {
        allFakeArtworks {
          edges {
            node {
              artistDescription
              artistEmail
              artistName
              artworkDescription
              artworkName
              availability
              height
              id
              instagramLink
              medium
              price
              stil
              width
              images {
                url
                local {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
      
  `)

    const artworks = adata.allFakeArtworks.edges



    const [open, setOpen] = useState(false);
    const [artwork, setArtwork] = useState(null);
    const [filert, setFElements] = useState(null);
    const initPosts = filert ? filert.slice(0, postCount) : [...adata.allFakeArtworks.edges].slice(0, postCount);

    const bodyRef = useRef()

    const gridRef = useRef();
    const mgrid = useRef();

    useEffect(() => {
        bodyRef.current = document.querySelector('html')


    }, []);

    useEffect(() => {

        if (gridRef.current && initPosts.length > 0) {
            mgrid.current = new MagicGrid({
                container: gridRef.current,
                items: initPosts.length,
                animate: true,
                static: false,
                gutter: 80,
                maxColumns: 3
            });
            mgrid.current.listen()
        }
    }, [gridRef, filert]);



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

    const handleLoaded = () => {
        if (mgrid.current) {
            mgrid.current.positionItems();
        }
    }



    return (
        <React.Fragment>
            <Section type={'full'} >
                {filter && <Filter artworks={artworks} setFElements={setFElements}></Filter>}
                <div className={style.root}>
                    <Slide mountOnEnter={true} unmountOnExit={true} right when={open} duration={500}>
                        <div className={style.singleRoot} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                            <Header title={artwork ? artwork.node.artistName : ''} color='lila' link={false}>
                                <a style={{ width: 40, pointerEvents: 'all' }} onClick={handleCloseClick}><Kreutz></Kreutz></a>
                            </Header>
                            {artwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
                        </div>
                    </Slide>



                    <div ref={gridRef}>
                        {initPosts.map((artwork, index) => (
                            <Artwork key={artwork.node.id} artwork={artwork} handleLoaded={handleLoaded} handleClick={handleClick} index={index}></Artwork>
                        ))}
                    </div>



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