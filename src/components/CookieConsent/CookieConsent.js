import React, { useState, useEffect } from 'react';
import style from './cookieConsent.module.scss';
import Button from '../buttons/noLinkButton';
import { useStaticQuery, graphql } from "gatsby"

export default function CookieConsent() {

  const [clicked, setClicked] = useState(true);

  useEffect(() => {

    let cookieValue = false;
    if (document.cookie) {
      let gdbrCookie = document.cookie.split('; ').find(row => row.startsWith('gatsby-gdpr-google-analytics'))

      if (gdbrCookie) {

        cookieValue = gdbrCookie.split('=')[1]
      } else {

      }
    }

    if (!cookieValue) {
      setClicked(false)
    }
  }, []);

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
    document.cookie = `gatsby-gdpr-google-analytics=${set}`
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
        <Button label={'Einverstanden'} onClick={() => { handleClick(true) }} />
        <Button label={'Ablehnen'} onClick={() => { handleClick(false) }} />
      </div>

    </div>

  )

}