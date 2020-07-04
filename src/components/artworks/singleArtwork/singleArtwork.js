import React from 'react';
import style from './singleArtwork.module.scss';
import Tab from './tab';
import FridaImage from './fridaImage';
//import FittedImage from 'react-fitted-image';

export default function Artworks({ artwork }) {
    const { image, availability, arwork_name, price, artist_description, artwork_description, height, instagram_link, medium, stil, width } = artwork


    return (

        <div className={style.root}>
            <div className={style.imageRoot}>


                <FridaImage image={image}></FridaImage>

                {/* <FittedImage
                    fit="contain"
                    loader={<div>Loading</div>}
                    onLoad={(...args) => console.log(...args)}
                    onError={(...args) => console.log(...args)}
                    src={image.large}
                /> */}

            </div>

            <div className={style.infoRoot}>



                <Tab text1={artist_description} text2={artwork_description}></Tab>
                <div className={style.nameRoot}>
                    <div className={`${style.dot} ${availability && style.dotSold}`}></div>
                    <div className={style.artworkName}> {arwork_name}</div>
                </div>
                <div className={style.props}> {`${medium}, ${width}*${height} ${stil}`} </div>
                <div className={style.price}>{price}€</div>
                <div className={style.buyButton}>Kaufen</div>

            </div>
        </div>

    )

}


