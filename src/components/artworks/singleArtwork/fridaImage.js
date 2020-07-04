import React, { useEffect, useRef, useState } from 'react';
import style from './fridaImage.module.scss';

export default function FridaImage({ image }) {

    const imageRef = useRef()
    const RootRef = useRef()
    const [loaded, setLoaded] = useState(false);
    const [resized, setResized] = useState(false);

    useEffect(() => {
        if (RootRef.current && imageRef.current && loaded) {
            imageRef.current.style.height = 'auto';
            imageRef.current.style.width = '100%';
            const rootClientRef = RootRef.current.getBoundingClientRect()
            const imageClientRef = imageRef.current.getBoundingClientRect()
            if (imageClientRef.height > rootClientRef.height) {
                imageRef.current.style.height = '100%';
                imageRef.current.style.width = 'auto';
            }
            setResized(true)
        }
    }, [imageRef, RootRef, loaded]);


    return (
        <div ref={RootRef} className={style.root}>
            <img
                className={`${style.image} ${resized ? style.resized : ''}`}
                onLoad={() => { setLoaded(true) }}
                ref={imageRef}
                srcSet={image.srcset}>

            </img>
        </div>

    )

}