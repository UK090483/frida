import React from 'react';
import { useEffect, useRef } from 'react';

export default function Mouse() {

    const mouse = useRef()

    useEffect(() => {
        mouse.current = document.querySelector('#mouse')



    }, []);

    const setMouse = (type, e) => {
        if (mouse.current) {

            switch (type) {
                case 'move':
                    mouse.current.style.left = e.pageX - 15 + "px"
                    mouse.current.style.top = e.pageY - 15 + "px"
                    break;

                default:
                    break;
            }





        }



        console.log(type)


    }

    return [mouse.current, setMouse]

}