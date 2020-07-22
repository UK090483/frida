import React from 'react';
import Section from '../container/section'
import style from './stoerer.module.scss'
import StoererSVG from "../../assets/Störer_open_call.svg"
import { Link } from "gatsby"
import useMouse from '../Mouse/hooks/useMouse';

export default function Stoerer() {

    const { setMouse } = useMouse()

    return (
        <React.Fragment>
            <div
                className={style.stoerer}
                onMouseEnter={() => { setMouse('link', true) }}
                onMouseLeave={() => { setMouse('link', false) }}
            >
                <Link to="/unterstützen/">
                    <StoererSVG />
                </Link>
            </div>

            <Section>
                <div className={style.stoererSpacer}></div>
            </Section>
        </React.Fragment>
    )

}