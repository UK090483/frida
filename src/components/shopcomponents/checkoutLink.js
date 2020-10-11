import React from 'react';
import { navigate } from "gatsby"
export default function CheckOutLink (){

    const onClick = ()=>{
        // navigate("/checkOut/")
        window.Snipcart.api.session.setLanguage('de');
        window.Snipcart.api.theme.cart.open()
    }

    return(

        <button  style={{pointerEvents:'auto'}} onClick={onClick}>Check Out</button>

    )

}