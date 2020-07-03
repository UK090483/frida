import React from 'react';
import Section from '../container/section'
import BigButton from '../buttons/bigButton'
import TextFlow from './textFlow'
export default function Footer() {

    return (
        <div>
            <Section backgroundColor='#F5C5D9'>
                <div style={{ padding: '200px 0' }}>
                    <h4>Supporter</h4>
                    <h2>OHNE EUCH WÄRE DIESE ACTION NICHT MÖGLICH. DANKE.</h2>
                </div>
            </Section>
            <TextFlow></TextFlow>
            <Section backgroundColor='#fa464c'>
                <div style={{ padding: '50px 0' }}>
                    <h1 className={'text-white'}>GET IN TOUCH WITH FRIDA</h1>
                </div>
            </Section>


            <BigButton ></BigButton>


            <Section backgroundColor='#fa464c'>
                <div className={'text-white'} style={{ padding: '10px 0', display: 'flex' }}>
                    <p style={{ width: '50%' }}>© 2020 Schwan Studio</p> <p style={{ width: '50%' }}>Impressum</p>
                </div>
            </Section>
        </div>
    )

}