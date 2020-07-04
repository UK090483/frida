import React from 'react';
import { Link } from 'gatsby';
import style from './pageTitle.module.scss';
export default function PageTitle({ title, color = 'white' }) {

    return (


        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={style.root} >
                <h1> #Meet<span className={style.name} style={{ color: color }}>{title}</span></h1>
            </div>
        </Link>
    )

}