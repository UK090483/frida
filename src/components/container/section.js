import React from 'react';
import Container from './container';
import style from './section.module.scss';

export default function Section({ children, backgroundColor, maxWidth, type, space }) {


    const extraStyle = {};
    if (maxWidth) {
        extraStyle.maxWidth = extraStyle;
    }
    if (backgroundColor) {
        extraStyle.backgroundColor = backgroundColor;
    }

    const getTypeClass = (type) => {

        switch (type) {
            case 'text':
                return style.text
                break;

            default:
                return style.default
                break;
        }
    }

    return (

        <section className={getTypeClass(type)} style={extraStyle}>
            <Container maxWidth={maxWidth} type={type}>
                {children}
            </Container>
        </section>

    )

}