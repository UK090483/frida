import React, { useState } from 'react';
import { Link } from "gatsby";
import Burger from "../../assets/Menu_Burger.svg";
import BigButton from '../buttons/bigButton';
import Section from '../container/section';
import Slide from 'react-reveal/Slide';
import Header from '../header/header';
import Kreutz from "../../assets/Menu_Kreutz.svg";
import Fade from 'react-reveal/Fade';

import style from './nav.module.scss';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(false);




    return (
        <div>
            <div style={{ width: 40, transform: 'translateX(10px) translateY(5px)', pointerEvents: 'all' }} onClick={() => { setOpen(!open); setCounter(true) }}><Burger></Burger></div>


            <div className={`${style.root} ${open ? style.active : (counter && style.onClose)}`} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                <div className={style.aniCircle1} ></div>
                <div className={style.aniCircle2} ></div>

                {open && <Header color='#F5C5D9'>
                    <div></div> <a className={style.icon} style={{ width: 40 }} onClick={() => setOpen(!open)}><Kreutz></Kreutz></a>
                </Header>}

                <Fade right cascade when={open}>
                    <div className={style.linksRoot}>
                        <h1> <Link activeClassName={style.active} to="/ausstellung/">AUSSTELLUNG</Link></h1>
                        <h1> <Link activeClassName={style.active} to="/teilnehmen/">TEILNEHMEN</Link></h1>
                        <h1> <Link activeClassName={style.active} to="/unterstützen/">UNTERSTÜTZEN</Link></h1>
                        <h1> <Link activeClassName={style.active} to="/about/">WER IST FRIDA?</Link></h1>
                        <h1> <Link activeClassName={style.active} to="/kontakt/">KONTAKT</Link></h1>
                    </div>
                </Fade>

                <Fade bottom when={open} delay={500}>
                    <div style={{ position: "fixed", bottom: 0, width: '100%' }}>
                        <BigButton></BigButton>
                    </div>
                </Fade>
            </div>

        </div>
    )

}