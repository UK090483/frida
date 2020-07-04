import React, { useState } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";



const defaultState = {
    dark: false,
    toggleDark: () => { },
}

const UiContext = React.createContext(defaultState)



function UiContextProvider({ children }) {

    const [mouseStyle, setMouseStyle] = useState(null);




    return (
        <UiContext.Provider
            value={{
                mouseStyle,
                setMouseStyle,
                isMobile,
                isBrowser
            }}
        >
            {children}
        </UiContext.Provider>

    )

}

export { UiContextProvider }

export default UiContext