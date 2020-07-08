import React, { useEffect, useRef, useState } from 'react';
import style from './fridaImage.module.scss';

export default function FridaImage({ images }) {

    const imageRef = useRef()
    const RootRef = useRef()
    const loupImageRef = useRef()
    const [loaded, setLoaded] = useState(false);
    const [resized, setResized] = useState(false);
    const [showGlass, setShowGlass] = useState(false);
    const [pos, setPos] = useState({ x: 50, y: 50, pageX: 0, pageY: 0 });

    useEffect(() => {
        if (RootRef.current && imageRef.current && loaded) {
            imageRef.current.style.height = 'auto';
            imageRef.current.style.width = '100%';
            const rootClientRef = RootRef.current.getBoundingClientRect()
            let imageClientRef = imageRef.current.getBoundingClientRect()
            if (imageClientRef.height > rootClientRef.height) {
                imageRef.current.style.height = '100%';
                imageRef.current.style.width = 'auto';
            }
            imageClientRef = imageRef.current.getBoundingClientRect()
            loupImageRef.current.style.height = imageClientRef.height + 'px'
            loupImageRef.current.style.width = imageClientRef.width + 'px'
            setResized(true)
        }
    }, [imageRef, RootRef, loaded, loupImageRef]);


    const handleMouseMove = (e) => {
        const imageClientRef = imageRef.current.getBoundingClientRect()
        // console.log((e.pageX - imageClientRef.left) / imageClientRef.width)
        // console.log((e.pageY - scrollY - imageClientRef.top) / imageClientRef.height)
        let x = ((e.pageX - imageClientRef.left) / imageClientRef.width) * -100
        let y = ((e.pageY - scrollY - imageClientRef.top) / imageClientRef.height) * -100
        setPos({ x: x, y: y, pageX: e.pageX, pageY: (e.pageY - scrollY) })
    }

    const srcSet = images.local ? images.local.childImageSharp.fluid.srcSet : null
    const src = images.url;

    return (
        <div ref={RootRef} className={style.root}>

            <img
                onMouseMove={(e) => { handleMouseMove(e) }}
                onMouseEnter={() => { setShowGlass(true) }}
                onMouseLeave={() => { setShowGlass(false) }}
                className={`${style.image} ${resized ? style.resized : ''}`}
                onLoad={() => { setLoaded(true) }}
                ref={imageRef}
                srcSet={srcSet}
                src={src}
            >

            </img>
            <div className={`${style.magni} ${showGlass ? style.showGalss : ''}`} style={{ left: `${pos.pageX}px`, top: `${pos.pageY}px` }}>
                <img
                    className={style.glassImg}
                    ref={loupImageRef}
                    srcSet={srcSet}
                    style={{ transform: `scale(2) translateX(${pos.x}%) translateY(${pos.y}%)` }}
                    src={src}
                >
                </img>

            </div>

        </div>

    )

}

// transform: `scale(2) translate3d(${300}px ${500}px 0)`