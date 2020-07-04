import React, { useContext } from 'react';
import Frida from '../../Frida/frida';
import UiContext from '../../../context/UiContext'

import style from './artwork.module.scss';

export default function Artwork({ artwork, handleClick, handleLoaded, handleKeyPress }) {

    const Ui = useContext(UiContext);



    const { image, availability, arwork_name, price } = artwork

    return (
        // eslint-disable-next-line
        <a className={style.root} onClick={() => handleClick(artwork)} onMouseEnter={() => { Ui.setMouseStyle('link') }} onMouseLeave={() => { Ui.setMouseStyle(null) }} >
            <img alt={`artwork ${arwork_name} from ${artwork.artist_name}`} onLoad={() => { handleLoaded() }} srcSet={image.srcset}></img>
            <h3 className={style.artistName} ><Frida text={artwork.artist_name} textColor='#f5c5d9'></Frida></h3>
            <div className={style.infoRoot}>
                <div className={`${style.dot} ${availability === 'sold' ? style.dotSold : ''}`}></div>
                <div className={style.artworkName}> {arwork_name}</div>
                <div className={style.price}>{price}€</div>
            </div>
        </a>
    )

}