import React, { useContext, useState } from 'react';
import Frida from '../../Frida/frida';
import UiContext from '../../../context/UiContext';
import { useStaticQuery, graphql } from "gatsby"

import style from './artwork.module.scss';

export default function Artwork({ artwork, handleClick, handleLoaded, handleKeyPress }) {



    const [loaded, setloaded] = useState(false);
    const Ui = useContext(UiContext);



    const { images, availability, artworkName, artistName, price } = artwork.node

    const srcSet = images.local ? images.local.childImageSharp.fluid.srcSet : null
    const src = images.url;

    const makeVisilbe = () => {

        handleLoaded()

        setTimeout(() => {
            setloaded(true);
        }, 500);

    }



    return (

        <React.Fragment>

            {images && <a className={`${style.root}  ${loaded ? style.loaded : ''}`} onClick={() => handleClick(artwork)} onMouseEnter={() => { Ui.setMouseStyle('link') }} onMouseLeave={() => { Ui.setMouseStyle(null) }} >
                <img alt={`artwork ${artworkName} from ${artistName}`} onLoad={() => { makeVisilbe() }} srcSet={srcSet} src={src} ></img>
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