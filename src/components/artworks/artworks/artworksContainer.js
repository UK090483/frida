import React, { useEffect, useState, useRef } from 'react';
import Artwork from '../artwork/artwork';
import MagicGrid from "magic-grid";

export default function artworks({ artworks, handleClick, infinite = false }) {

    const gridRef = useRef();
    const mgrid = useRef();
    const scrollRef = useRef(0);
    const [postCount, setPostCount] = useState(9);

    useEffect(() => {

        setGrid(artworks.length)

    }, [artworks]);

    const setGrid = (number) => {
        if (gridRef.current && artworks.length > 0) {

            mgrid.current = new MagicGrid({
                container: '#frida-grid',
                items: number || postCount,
                animate: true,
                static: false,
                gutter: 80,
                maxColumns: 3
            });
            mgrid.current.listen()
        }

    }

    useEffect(() => {
        if (infinite) {

            window.addEventListener('scroll', handleScroll);
            const lastB = 0;
            function handleScroll() {
                if (gridRef.current) {
                    const clientRef = gridRef.current.getBoundingClientRect();

                    if ((clientRef.bottom - window.innerHeight) < 1000) {

                        loadItems()
                        scrollRef.current = true

                    }

                }
            }
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [postCount]);

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

    const loadItems = () => {

        if ((postCount < artworks.length) && !scrollRef.current) {

            const ADD = 9
            const summand = (postCount + ADD) > artworks.length ? artworks.length - postCount : postCount + ADD
            const nextPostcount = postCount + summand;
            setPostCount(nextPostcount)
            setGrid(nextPostcount)

        }

    }

    return (

        <React.Fragment>
            <div ref={gridRef} id='frida-grid'>
                {getArtworks()}
            </div>

        </React.Fragment>
    )

}