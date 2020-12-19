import React from "react"

const defaultState = {}

const UiContext = React.createContext(defaultState)

function UiContextProvider({ children }) {
  return <UiContext.Provider value={{}}>{children}</UiContext.Provider>
}

export { UiContextProvider }

export default UiContext
