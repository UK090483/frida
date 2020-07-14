import React from 'react';
import Section from '../container/section'
import BigButton from '../buttons/bigButton'
import TextFlow from './textFlow'
import style from './footer.module.scss';
import AllSupporter from '../Supporter/allSupporter';


export default function Footer({ title }) {


    return (
        <div>


            {(title !== 'OurSupporters') &&
                <React.Fragment>
                    <Section backgroundColor='lila'>
                        <div style={{ padding: '200px 0' }}>
                            <h4>SUPPORTER</h4>
                            <h2>Ohne Euch wäre diese Aktion nicht möglich. <span style={{ color: 'white' }}>DANKE.</span></h2>
                            <AllSupporter></AllSupporter>
                        </div>

                    </Section>
                    <TextFlow></TextFlow>
                </React.Fragment>

            }

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