import React, { useEffect, useState, useRef } from 'react';
import Artwork from './artwork/artwork';



import MagicGrid from "magic-grid";
import Slide from 'react-reveal/Slide';
import Header from '../header/header';
import Kreutz from "../../assets/Menu_Kreutz.svg";
import SingleArtwork from './singleArtwork/singleArtwork';

import style from './artworks.module.css'

export default function Artworks() {

    const [data, setData] = useState(null);
    const [open, setOpen] = useState(false);
    const [artwork, setArtwork] = useState(null);
    const bodyRef = useRef()

    const gridRef = useRef();
    const mgrid = useRef();

    useEffect(() => {
        bodyRef.current = document.querySelector('html')
        console.log(bodyRef)
    }, []);

    useEffect(() => {

        if (gridRef.current) {
            mgrid.current = new MagicGrid({
                container: gridRef.current,
                items: data.artworks.length,
                animate: true,
                static: false,
                gutter: 80,
                maxColumns: 3
            });
            mgrid.current.listen()
        }
    }, [data]);


    useEffect(() => {
        let filter = JSON.stringify({
            künstler: null,
            medium: null,
            stil: null,
            price: null
        })

        fetch('https://frida.konradullrich.com/wp-json/frida/v1/artworks/1/?filter=' + filter, { method: 'GET', })
            .then(response => response.json())
            .then(
                function (json) {
                    console.log(json);
                    setData(json)
                }
            )
            .catch(
                function (error) {
                    console.error('error:', error);
                }

            );
        return () => {

        };
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

    const handleLoaded = () => {
        mgrid.current.positionItems();
    }

    return (

        <div className={style.root}>
            <Slide mountOnEnter={true} unmountOnExit={true} right when={open} duration={500}>
                <div className={style.singleRoot} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                    <Header siteTitle={artwork ? artwork.artist_name : ''} color='#F5C5D9'>
                        <a href style={{ width: 40, pointerEvents: 'all' }} onClick={handleCloseClick}><Kreutz></Kreutz></a>
                    </Header>
                    {artwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
                </div>
            </Slide>

            {data &&
                // <MagicGrid items={data.artworks.length} animate={true} gutter={80} static={false} maxColumns={3}>
                <div ref={gridRef}>
                    {data.artworks.map((artwork, index) => (
                        <Artwork key={index} artwork={artwork} handleLoaded={handleLoaded} handleClick={handleClick} index={index}></Artwork>
                    ))}
                </div>
                // </MagicGrid>
            }


        </div>

    )

}