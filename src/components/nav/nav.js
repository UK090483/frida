import React, { useState } from 'react';
import { Link } from "gatsby";
import Burger from "../../assets/Menu_Burger.svg";
import BigButton from '../buttons/bigButton';
import Section from '../container/section';
import Slide from 'react-reveal/Slide';
import Header from '../header/header';
import Kreutz from "../../assets/Menu_Kreutz.svg";

import style from './nav.module.scss';

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div style={{ width: 40, transform: 'translateX(10px) translateY(5px)' }} onClick={() => setOpen(!open)}><Burger></Burger></div>

            <Slide right when={open} duration={500}>
                <div className={style.root} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                    <Header color='#F5C5D9'>
                        <div></div> <a className={style.icon} style={{ width: 40 }} onClick={() => setOpen(!open)}><Kreutz></Kreutz></a>
                    </Header>
                    <Section backgroundColor='black' maxWidth={'1500px'}>
                        <div className={style.linksRoot}>
                            <Link activeClassName={style.active} to="/ausstellung/">AUSSTELLUNG</Link> <br />
                            <Link activeClassName={style.active} to="/teilnehmen/">TEILNEHMEN</Link> <br />
                            <Link activeClassName={style.active} to="/unterstützen/">UNTERSTÜTZEN</Link> <br />
                            <Link activeClassName={style.active} to="/about/">WER IST FRIDA?</Link> <br />
                            <Link activeClassName={style.active} to="/kontakt/">KONTAKT</Link> <br />
                        </div>
                    </Section>
                    <div style={{ position: "fixed", bottom: 0, width: '100%' }}>
                        <BigButton></BigButton>
                    </div>
                </div>
            </Slide>
        </div>
    )

}