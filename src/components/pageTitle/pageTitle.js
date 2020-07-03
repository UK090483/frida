import React from 'react';
import { Link } from 'gatsby';
import './pageTitle.css';
export default function PageTitle({ title, color = 'white' }) {

    return (


        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='pageTitle' >
                <h1> #Meet<span className='pageTitle-name' style={{ color: color }}>{title}</span></h1>
            </div>
        </Link>
    )

}