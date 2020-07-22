import React, { useState } from 'react';
import style from './cookieConsent.module.scss';
import Button from '../buttons/noLinkButton';
import { useStaticQuery, graphql } from "gatsby"

export default function CookieConsent() {

  const [clicked, setClicked] = useState(false);

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

  return (

    <div className={`${style.root} ${!clicked ? '' : style.clicked}`}>
      <div className={style.text}>
        <img src={image} alt='cookie' />
        <p>
          Wir nutzen Cookies um Ihr Erlebnis auf unserer Website angenehm zu gestalten und steig zu verbessen!
                </p>
      </div>
      <div className={style.buttons}>
        <Button label={'Einverstanden'} onClick={() => { setClicked(true) }} />
        <Button label={'Ablehnen'} />
      </div>

    </div>

  )

}