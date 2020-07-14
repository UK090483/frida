/* src/App.js */
import React, { useEffect, useState, useContext } from 'react'
import style from './addArtwork.module.scss';
import UserContext from '../userContext';
import Form from './form'



const initialState = {
    name: '',
    description: '',
    availability: '',
    stil: '',
    price: '',
    medium: '',
    height: '',
    width: '',
    instaLink: ''
}

const Slider = () => {

    const context = useContext(UserContext);
    const { artworkShow, setArtworkShow } = context;
    console.log(context)

    const inhalt = (artworkShow) => {

        if (artworkShow) {
            switch (artworkShow.action) {
                case 'edit Artwork':
                    return <Form artwork={artworkShow}></Form>

                case 'new Artwork':
                    return <Form artwork={artworkShow}></Form>


                default:
                    break;
            }

        } else {
            <div>nothing selected</div>
        }



    }

    return (
        <React.Fragment>
            <div className={`${style.root} ${artworkShow ? style.show : ''}`}>

                {inhalt(artworkShow)}

            </div >
        </React.Fragment>
    )
}

export default Slider