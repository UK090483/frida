import React, { useState } from "react"
// import { isBrowser, isMobile } from "react-device-detect"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const UiContext = React.createContext(defaultState)

function UiContextProvider({ children }) {
  const [mouseStyle, setMouseStyle] = useState(null)
  const [mouseColor, setMouseColor] = useState("red")
  const [userData, setUserData] = useState({ name: "", email: "" })

  return (
    <UiContext.Provider
      value={{
        mouseStyle,
        mouseColor,
        setMouseColor,
        setMouseStyle,
        userData,
        setUserData,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export { UiContextProvider }

export default UiContext
