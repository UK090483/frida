import React,{useEffect} from 'react';

export default function pages (){

    useEffect(() => {
        window.Snipcart.api.theme.cart.open()
    }, []);

    return(

        <div/>

    )

}