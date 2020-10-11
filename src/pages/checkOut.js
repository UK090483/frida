import React ,{useEffect}from 'react';

export default function pages (){

    useEffect(() => {
        window.Snipcart.api.session.setLanguage('de');
        window.Snipcart.api.theme.cart.open()
    }, []);

    return(

        <div>
          
        </div>

    )

}