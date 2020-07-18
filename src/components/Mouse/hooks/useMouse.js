// import React from 'react';
import { useEffect, useRef } from 'react';
import style from '../mouse.module.scss';

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
                case 'link':
                    e ? mouse.current.classList.add(style.linkhover) : mouse.current.classList.remove(style.linkhover)

                    break;
                case 'color':
                    e ? mouse.current.classList.add(style.black) : mouse.current.classList.remove(style.black)
                    break;

                default:
                    break;
            }

        }
    }

    return { mouse: mouse.current, setMouse: setMouse }

}