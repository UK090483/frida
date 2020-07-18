import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import style from './embet.module.scss';
import Section from '../container/section'

export default function embet() {



    return (
        <Section type={'full'} backgroundColor={'red'}>
            <div className={style.root}>
                <div className={style.overlay}></div>
                <JotformEmbed src="https://form.jotform.com/201885178999377" />
                {/* <ReactTypeformEmbed url="https://lagacrailsheim.typeform.com/to/OIXhfe0N" popup={false} style={{ position: 'relative', height: '100vh' }} /> */}
            </div>
        </Section>
    )

}


