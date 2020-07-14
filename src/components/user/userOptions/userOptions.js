import React, { useContext } from 'react';
import UserContext from '../userContext/userContext';
import style from './userOptions.module.scss';
import Section from '../../container/section';
import Button from '../components/Button'

export default function userOptions() {

    const context = useContext(UserContext);
    const { userOptions, setSlider } = context;

    const handleClick = () => {

        setSlider({ action: 'edit User' })
    }

    return (

        <Section backgroundColor='lila'>
            {userOptions && <React.Fragment>

                <div className={style.root}>
                    <h5>Deine Persönlichen Informationen</h5>
                    <div className={style.email}>Email: {userOptions.email}</div>
                    <div className={style.name}>Name: {userOptions.name}</div>
                    <div className={style.anzeigeName}>AnzeigeName: {userOptions.anzeigeName}</div>
                    <div className={style.description}>Beschreibung: {userOptions.description}</div>
                    <div className={style.instagramLink}>Instagram Profil: {userOptions.instagramLink}</div>
                    <Button style={{ marginTop: 30 }} onClick={handleClick} label={'bearbeiten'}></Button>
                </div>

            </React.Fragment>}
        </Section>

    )

}