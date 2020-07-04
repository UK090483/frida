import React from 'react';
import Container from './container';
import style from './section.module.scss';

export default function Section({ children, backgroundColor = 'default', maxWidth, type, space }) {





    const extraStyle = {};
    if (maxWidth) {
        extraStyle.maxWidth = extraStyle;
    }
    if (backgroundColor) {
        // extraStyle.backgroundColor = backgroundColor;
    }


    const getTypeClass = (type) => {

        switch (type) {
            case 'text':
                return style.text


            default:
                return style.default

        }
    }
    const getColorClass = (backgroundColor) => {

        switch (backgroundColor) {
            case 'red':
                return style.red

            case 'lila':
                return style.lila

            case 'black':
                return style.black

            default:
                return style.white

        }
    }

    return (

        <section data-color={backgroundColor} className={`${getTypeClass(type)} ${getColorClass(backgroundColor)}`} style={extraStyle}>
            <Container maxWidth={maxWidth} type={type}>
                {children}
            </Container>
        </section>

    )

}