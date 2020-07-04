import React from 'react';
import Kreutz from "../../assets/Menu_Kreutz.svg";
import Slide from 'react-reveal/Slide';
import Header from '../header/header'

export default function Overlay(props) {

    const { children, open, setOpen } = props;

    const handleKeyPress = () => {
        console.log('keypress')
    }

    return (

        <Slide right when={open} duration={500}>
            <div className='nav_wrap' style={{ pointerEvents: open ? 'auto' : 'none' }}>
                <Header>
                    <h1></h1>
                    <div tabIndex={0} role="button" style={{ width: 40 }} onKeyPress={handleKeyPress} onClick={() => setOpen(!open)}><Kreutz></Kreutz></div>
                </Header>


                <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>

                    {children}

                </div>
            </div>
        </Slide>
    )
}