import React from 'react';
import Kreutz from "../../assets/Menu_Kreutz.svg";
import Slide from 'react-reveal/Slide';
import Header from '../header'

export default function Overlay(props) {

    const { children, open, setOpen } = props;
    console.log(props)
    return (

        <Slide right when={open} duration={500}>
            <div className='nav_wrap' style={{ pointerEvents: open ? 'auto' : 'none' }}>
                <Header>
                    <div></div>
                    <div style={{ width: 40 }} onClick={() => setOpen(!open)}><Kreutz></Kreutz></div>
                </Header>


                <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>

                    {children}

                </div>
            </div>
        </Slide>
    )
}