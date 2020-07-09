
import React, { useEffect, useState, useRef } from 'react';
import Artwork from '../artwork/artwork';
import MagicGrid from "magic-grid";
import MasonryLayout from 'react-masonry-layout';

export default function artworks({ artworks, handleClick }) {


    const gridRef = useRef();
    const mgrid = useRef();

    console.log(artworks)

    useEffect(() => {

        if (gridRef.current && artworks.length > 0) {

            console.log(gridRef)
            mgrid.current = new MagicGrid({
                container: gridRef.current,
                items: artworks.length,
                animate: true,
                static: false,
                gutter: 80,
                maxColumns: 3
            });
            mgrid.current.listen()
        }
    }, [artworks]);


    const handleLoaded = () => {
        if (mgrid.current) {
            mgrid.current.positionItems();
        }
    }

    const getArtworks = () => {

        return artworks.map((artwork, index) => (
            <Artwork key={artwork.node.id} artwork={artwork} handleLoaded={handleLoaded} handleClick={handleClick} index={index}></Artwork>
        ))

    }

    const loadItems = () => {
        console.log('load more')

    }



    return (
        // <MasonryLayout
        //     style={{ width: '100%' }}
        //     id="masonry-layout"
        //     infiniteScroll={loadItems}>
        //     {getArtworks()}

        // </MasonryLayout>
        <div ref={gridRef}>
            {getArtworks()}
        </div>

    )

}