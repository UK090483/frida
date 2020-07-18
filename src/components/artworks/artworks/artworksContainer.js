import React, { useEffect, useState, useRef, useCallback } from 'react';
import Artwork from '../artwork/artwork';
import MagicGrid from "magic-grid";

export default function ArtworkContainer({ artworks, handleClick, infinite = false }) {

    const gridRef = useRef();
    const mgrid = useRef();
    const scrollRef = useRef(0);
    const [postCount, setPostCount] = useState(9);


    const setGrid = useCallback((number) => {
        if (gridRef.current && artworks.length > 0) {

            mgrid.current = new MagicGrid({
                container: '#frida-grid',
                items: 8,
                animate: true,
                static: false,
                gutter: 80,
                maxColumns: 3
            });
            mgrid.current.listen()
        }

    }, [artworks.length])

    useEffect(() => {
        if (infinite) {

            window.addEventListener('scroll', handleScroll);

            function handleScroll() {
                if (gridRef.current) {
                    const clientRef = gridRef.current.getBoundingClientRect();

                    if ((clientRef.bottom - window.innerHeight) < 1000) {


                        if ((postCount < artworks.length) && !scrollRef.current) {

                            const ADD = 9
                            const summand = (postCount + ADD) > artworks.length ? artworks.length - postCount : postCount + ADD
                            const nextPostcount = postCount + summand;
                            setPostCount(nextPostcount)
                            setGrid(nextPostcount)

                        }

                        scrollRef.current = true

                    }

                }
            }
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [artworks.length, infinite, postCount, setGrid]);

    useEffect(() => {

        setGrid(artworks.length)


    }, [artworks, setGrid]);


    const handleLoaded = () => {

        if (mgrid.current) {

            mgrid.current.positionItems();
        }
    }

    const getArtworks = () => {

        const initPosts = [...artworks].slice(0, postCount);
        return initPosts.map((artwork, index) => (
            <Artwork key={index} artwork={artwork} handleLoaded={handleLoaded} handleClick={handleClick} index={index}></Artwork>
        ))

    }



    return (

        <React.Fragment>
            <div ref={gridRef} id='frida-grid'>
                {getArtworks()}
            </div>
        </React.Fragment>
    )

}