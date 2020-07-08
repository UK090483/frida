import React from 'react';
import { Link } from "gatsby";
import style from './button.module.scss'

export default function buttons({ label, link }) {

    return (

        <Link className={style.root} to={link}>
            <div className={style.inner}>{label}</div>
        </Link>


    )

}