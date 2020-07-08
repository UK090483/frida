import React, { useContext } from 'react';
import Frida from '../../Frida/frida';
import UiContext from '../../../context/UiContext';
import { useStaticQuery, graphql } from "gatsby"

import style from './artwork.module.scss';

export default function Artwork({ artwork, handleClick, handleLoaded, handleKeyPress }) {




    const Ui = useContext(UiContext);



    const { images, availability, artworkName, artistName, price } = artwork.node

    const srcSet = images.local ? images.local.childImageSharp.fluid.srcSet : null
    const src = images.url;



    return (

        <React.Fragment>

            {images && <a className={style.root} onClick={() => handleClick(artwork)} onMouseEnter={() => { Ui.setMouseStyle('link') }} onMouseLeave={() => { Ui.setMouseStyle(null) }} >
                <img alt={`artwork ${artworkName} from ${artistName}`} onLoad={() => { handleLoaded() }} srcSet={srcSet} src={src} ></img>
                <h3 className={style.artistName} ><Frida text={artistName} textColor='#f5c5d9'></Frida></h3>
                <div className={style.infoRoot}>
                    <div className={`${style.dot} ${availability === 'sold' ? style.dotSold : ''}`}></div>
                    <div className={style.artworkName}> {artworkName}</div>
                    <div className={style.price}>{price}€</div>
                </div>
            </a>}
        </React.Fragment>
    )

}