import React from 'react';
import Frida from '../../Frida/frida';

import style from './artwork.module.scss';

export default function Artwork({ artwork, handleClick }) {

    const { image, availability, arwork_name, price } = artwork


    return (

        <div className={style.root} onClick={() => handleClick(artwork)}>
            <img srcSet={image.srcset}></img>
            <h3 className={style.artistName} ><Frida text={artwork.artist_name} textColor='#f5c5d9'></Frida></h3>
            <div className={style.infoRoot}>
                <div className={`${style.dot} ${availability === 'sold' ? style.dotSold : ''}`}></div>
                <div className={style.artworkName}> {arwork_name}</div>
                <div className={style.price}>{price}€</div>
            </div>
        </div>
    )

}