/* src/App.js */
import React, { useEffect, useState, useContext } from 'react'
import style from './slider.module.scss';
import UserContext from '../userContext/userContext';
import ArtWorkForm from '../Forms/artworkForm';
import UserOptionsForm from '../Forms/userOptionsForm'
import Drawer from '@material-ui/core/Drawer';


const Slider = () => {

    const context = useContext(UserContext);
    const { slider, setSlider } = context;



    const inhalt = (slider) => {

        if (slider) {
            switch (slider.action) {
                case 'edit Artwork':
                    return <ArtWorkForm artwork={slider.artwork} type={'edit'}></ArtWorkForm>

                case 'add Artwork':
                    return <ArtWorkForm type={'add'}></ArtWorkForm>

                case 'edit User':
                    return <UserOptionsForm type={'add'}></UserOptionsForm>

                default:
                    break;
            }

        } else {
            <div>nothing selected</div>
        }



    }

    return (
        <React.Fragment>
            <Drawer open={!!slider} anchor={'right'} onClose={() => { setSlider(null) }}>
                {inhalt(slider)}
            </Drawer>
        </React.Fragment>
    )
}

export default Slider