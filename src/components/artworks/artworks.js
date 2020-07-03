import React, { useEffect, useState } from 'react';
import Artwork from './artwork/artwork';

import MagicGrid from "react-magic-grid";
import Overlay from '../overlay/overlay';
import Slide from 'react-reveal/Slide';
import Header from '../header';
import Kreutz from "../../assets/Menu_Kreutz.svg";
import SingleArtwork from './singleArtwork/singleArtwork';

import style from './artworks.module.css'

export default function Artworks() {

    const [data, setData] = useState(null);
    const [open, setOpen] = useState(false);
    const [artwork, setArtwork] = useState(null);

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
    }


    return (

        <div className={style.root}>
            <Slide right when={open} duration={500}>
                <div className={style.singleRoot} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                    <Header siteTitle={artwork ? artwork.artist_name : ''} color='#F5C5D9'>
                        <div style={{ width: 40 }} onClick={() => setOpen(!open)}><Kreutz></Kreutz></div>
                    </Header>
                    {artwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
                </div>
            </Slide>

            {data &&
                <MagicGrid items={data.artworks.length} animate={true} gutter={80}>
                    {data.artworks.map((artwork, index) => (
                        <Artwork key={index} artwork={artwork} handleClick={handleClick}></Artwork>
                    ))}
                </MagicGrid>
            }


        </div>

    )

}