import React, { useState, useEffect } from 'react';
import style from './cookieConsent.module.scss';
import Button from '../buttons/button';
import { useStaticQuery, graphql } from "gatsby"
import { useCookies } from 'react-cookie'


const gdprCookie = 'gatsby-plugin-google-analytics-gdpr_cookies-enabled'

export default function CookieConsent() {

  const [clicked, setClicked] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {

    console.log(cookies)
    if (cookies[gdprCookie] && cookies[gdprCookie] === 'false') {
      setClicked(false)
    }



  }, [cookies]);

  const data = useStaticQuery(graphql`
    query CookieQuery {
        file(relativePath: {eq: "Cookie.png"}) {
          childImageSharp {
            fluid(maxWidth: 100) {
              src
            }
          }
        }
      }
      
  `)
  const image = data.file.childImageSharp.fluid.src

  const handleClick = (set) => {
    setClicked(true)
    setCookie(gdprCookie, true)
  }

  return (

    <div className={`${style.root} ${!clicked ? '' : style.clicked}`}>
      <div className={style.text}>
        <img src={image} alt='cookie' />
        <p>
          Wir nutzen Cookies um Ihr Erlebnis auf unserer Website angenehm zu gestalten und steig zu verbessen!
                </p>
      </div>
      <div className={style.buttons}>
        <Button type='clickButton' label={'Einverstanden'} onClick={() => { handleClick(true) }} />
        <Button type='clickButton' label={'Ablehnen'} onClick={() => { handleClick(false) }} />
      </div>

    </div>

  )

}