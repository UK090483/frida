import React, { useState } from 'react';
import { Link } from "gatsby";
import Burger from "../../assets/Menu_Burger.svg";
import Overlay from '../overlay/overlay';
import BigButton from '../buttons/bigButton';
import Section from '../container/section'

import style from './nav.module.scss';

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div style={{ width: 40 }} onClick={() => setOpen(!open)}><Burger></Burger></div>
            <Overlay open={open} setOpen={setOpen}>
                <div className={style.root} style={{ pointerEvents: open ? 'auto' : 'none' }}>
                    <Section backgroundColor='black' maxWidth={1200}>
                        <div className={style.linksRoot}>
                            <Link activeClassName={style.active} to="/ausstellung/">AUSSTELLUNG</Link> <br />
                            <Link activeClassName={style.active} to="/teilnehmen/">TEILNEHMEN</Link> <br />
                            <Link activeClassName={style.active} to="/unterstützen/">UNTERSTÜTZEN</Link> <br />
                            <Link activeClassName={style.active} to="/about/">WER IST FRIDA?</Link> <br />
                            <Link activeClassName={style.active} to="/kontakt/">KONTAKT</Link> <br />
                        </div>
                    </Section>
                    <div style={{ position: "fixed", bottom: 0, width: '100vw', border: 'red solid 1px', display: 'flex' }}>
                        <BigButton label={'instagram'}></BigButton>
                        <BigButton label={'Facebook'}></BigButton>
                    </div>
                </div>
            </Overlay>
        </div>
    )

}