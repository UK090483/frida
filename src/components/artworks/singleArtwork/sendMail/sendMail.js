import React, { useState, useContext, useEffect } from 'react';
import style from './sendMail.module.scss';
import UiContext from '../../../../context/UiContext';
import Loading from "../../../../assets/loading.svg";
import useMouse from '../../../Mouse/hooks/useMouse';

export default function SendMail({ artwork }) {

    const { artworkName, artistName, artistEmail, artworkInstagramLink } = artwork;

    const { setMouse } = useMouse();

    const { userEmail, setUserEmail } = useContext(UiContext);

    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false);
    const [showError, setShowError] = useState(false);
    const [buyProces, setBuyProces] = useState(false);
    const [process, setProcess] = useState('buy');

    useEffect(() => {
        if (userEmail) {
            setEmail(userEmail)
            setValid(validateEmail(userEmail))
        }
    }, [userEmail]);



    const submitForm = async () => {
        try {
            const response = await fetch("/.netlify/functions/sendSMTP", {
                method: "POST",
                body: JSON.stringify({
                    subject: artworkName + ' from ' + artistName,
                    artistName,
                    artworkName,
                    artistEmail,
                    email: email,
                }),
            })

            if (!response.ok) {
                setProcess('error')
                return
            }

            //all OK
            setProcess('thankyou')
            console.log(response)

        } catch (e) {
            //error

            console.log(e)
        }
    }



    function validateEmail(emailField) {
        var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailField) === false) {
            return false;
        }
        return true;
    }

    const handleClick = () => {
        if (!buyProces) {
            setBuyProces(true)
        } else {
            if (valid) {
                setProcess('loading')
                setUserEmail(email)
                submitForm()
            } else {
                setShowError(true)
            }
        }
    }

    const handleInput = (e) => {


        let validation = validateEmail(e.target.value)
        validation !== valid && setValid(validation)

        setEmail(e.target.value)
        if (valid) {

        }
    }

    const byProcess = () => (
        <React.Fragment>
            {buyProces &&
                <div className={style.group}>
                    <input
                        type="input" className={style.form__field}
                        placeholder="Email" value={email}
                        name="email"
                        id='name'
                        required
                        onChange={handleInput}
                        onMouseEnter={() => {
                            setMouse('link', true)
                        }}
                        onMouseLeave={() => {
                            setMouse('link', false)
                        }}


                    />
                    <label htmlFor="email" className={style.form__label} >Email</label>
                    <div>{!valid && showError && 'Da stimmt was nicht mit der Email Adresse'}</div>
                </div>
            }

            <div className={`${style.buttons} ${buyProces ? style.active : 0}`}>
                <a
                    href={artworkInstagramLink}
                    className={style.buyButton}
                    onClick={handleClick}
                    onMouseEnter={() => {
                        setMouse('link', true)
                    }}
                    onMouseLeave={() => {
                        setMouse('link', false)
                    }}

                >
                    {buyProces ? 'Send' : 'Kaufen'}
                </a>
                {buyProces &&
                    <a
                        href={artworkInstagramLink}
                        className={style.buyButton}
                        onMouseEnter={() => {
                            setMouse('link', true)
                        }}
                        onMouseLeave={() => {
                            setMouse('link', false)
                        }}
                        onClick={() => { setBuyProces(false); setMouse('link', false) }} style={{ marginLeft: 20 }}>
                        {'Abbrechen'}
                    </a>}
            </div>
        </React.Fragment>
    )
    const thanks = () => (
        <React.Fragment>
            <div>

                <h5>Gute Wahl <span role="img" aria-label="Smiley">🤩</span>!</h5>
                <p>Wir melden uns schnellstmöglich bei dir - in der Regel innerhalb von 2 Tagen.</p>
            </div>
        </React.Fragment>
    )
    const errorMsg = () => (
        <React.Fragment>
            <h4>Ups Irgendetwas ging schief</h4>
        </React.Fragment>
    )

    return (

        <div className={`${style.root} ${buyProces ? style.active : 0}`}>

            {process === 'buy' && byProcess()}
            {process === 'loading' && <Loading className={style.loader}></Loading>}
            {process === 'thankyou' && thanks()}
            {process === 'error' && errorMsg()}

        </div >

    )

}