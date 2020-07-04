import React from 'react';
import style from './container.module.scss';

export default function Container({ children, maxWidth, type }) {

    const extraStyle = {};
    if (maxWidth) {
        extraStyle.maxWidth = maxWidth
    }


    const getTypeClass = (type) => {

        switch (type) {
            case 'text':
                return style.text
            case 'full':
                return style.full



            default:
                return style.default
                break;
        }
    }


    return (

        <div className={getTypeClass(type)} style={extraStyle}>
            {children}
        </div>

    )

}