import React from 'react';
import style from './singleArtwork.module.css';
import Tab from './tab';

export default function artworks({ artwork }) {
    const { image, availability, arwork_name, price, artist_description, artwork_description, height, instagram_link, medium, stil, width } = artwork
    console.log(artwork)
    return (

        <div className={style.root}>
            <div className={style.imageRoot}>

                <img srcSet={image.srcset}></img>

            </div>
            <div className={style.infoRoot}>

                <div className={style.info}>
                    <Tab text1={artist_description} text2={artwork_description}></Tab>
                    <div className={`${style.dot} ${availability && style.dotSold}`}></div>
                    <div className={style.artworkName}> {arwork_name}</div>
                    <div className={style.props}> {`${medium}, ${width}*${height} ${stil}`} </div>
                    <div className={style.price}>{price}€</div>
                    <div className={style.buyButton}>Kauf</div>
                </div>
            </div>
        </div>

    )

}


