import React from 'react';
import Section from '../container/section'
import BigButton from '../buttons/bigButton'
import TextFlow from './textFlow'
import style from './footer.module.scss';


export default function Footer() {

    return (
        <div>
            <Section backgroundColor='lila'>
                <div style={{ padding: '200px 0' }}>
                    <h4>Supporter</h4>
                    <h2>OHNE EUCH WÄRE DIESE ACTION NICHT MÖGLICH. DANKE.</h2>
                </div>
            </Section>
            <TextFlow></TextFlow>
            <Section backgroundColor='red'>
                <div style={{ padding: '50px 0' }}>
                    <h1 className={'text-white'}>GET IN TOUCH WITH FRIDA</h1>
                </div>
            </Section>


            <BigButton></BigButton>


            <Section backgroundColor='red'>
                <div className={style.sub} >
                    <p>© 2020 Schwan Studio</p> <p>Impressum</p>
                </div>
            </Section>
        </div>
    )

}