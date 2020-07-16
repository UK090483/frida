import React from 'react';
import style from './singleArtwork.module.scss';
import Tab from './tab';
import FridaImage from './fridaImage';


export default function Artworks({ artwork }) {
    const { images, availability, artworkName, price, artistDescription, artworkDescription, height, artworkInstagramLink, medium, stil, width } = artwork


    return (

        <div className={style.root}>
            <div className={style.imageRoot}>
                <FridaImage images={images}></FridaImage>
            </div>

            <div className={style.infoRoot}>



                <Tab text1={artistDescription} text2={artworkDescription}></Tab>
                <div className={style.nameRoot}>
                    <div className={`${style.dot} ${availability && style.dotSold}`}></div>
                    <div className={style.artworkName}> {artworkName}</div>
                </div>
                <div className={style.props}> {`${medium}, ${width}*${height} ${stil}`} </div>
                <div className={style.price}>{price}€</div>
                <a href={artworkInstagramLink} className={style.buyButton}>Kaufen</a>

            </div>
        </div>

    )

}


